import { SupabaseClient } from '@supabase/supabase-js';

/**
 * Data provider utilities and factories for Supabase
 * Based on patterns from crm_demo
 */

export interface DataProviderConfig {
  supabaseClient: SupabaseClient;
  instanceUrl: string;
  apiKey: string;
  sortOrder?: string;
}

export interface LifecycleCallback {
  resource: string;
  beforeCreate?: (params: any) => Promise<any>;
  afterCreate?: (data: any, params: any) => Promise<any>;
  beforeUpdate?: (params: any) => Promise<any>;
  afterUpdate?: (data: any, params: any) => Promise<any>;
  beforeDelete?: (params: any) => Promise<any>;
  afterDelete?: (data: any, params: any) => Promise<any>;
  beforeGetList?: (params: any) => Promise<any>;
  afterGetList?: (data: any, params: any) => Promise<any>;
  beforeGetOne?: (params: any) => Promise<any>;
  afterGetOne?: (data: any, params: any) => Promise<any>;
  beforeSave?: (data: any, resource: string, params: any) => Promise<any>;
}

export interface FileProcessingOptions {
  bucket?: string;
  folder?: string;
  generateFileName?: boolean;
}

/**
 * Process file uploads in data
 * @param data - Data object containing files
 * @param fileFields - Array of field names that contain files
 * @param supabase - Supabase client instance
 * @param options - File processing options
 * @returns Promise<any> with processed data
 */
export const processFileUploads = async (
  data: any,
  fileFields: string[],
  supabase: SupabaseClient,
  options: FileProcessingOptions = {}
): Promise<any> => {
  const processedData = { ...data };

  for (const fieldName of fileFields) {
    const fileData = data[fieldName];
    
    if (!fileData) continue;

    // Handle single file
    if (fileData.rawFile instanceof File) {
      const uploadedFile = await uploadFileToStorage(fileData, supabase, options);
      processedData[fieldName] = uploadedFile;
    }
    // Handle array of files
    else if (Array.isArray(fileData)) {
      const uploadedFiles = await Promise.all(
        fileData.map(file => 
          file.rawFile instanceof File 
            ? uploadFileToStorage(file, supabase, options)
            : file
        )
      );
      processedData[fieldName] = uploadedFiles;
    }
  }

  return processedData;
};

/**
 * Upload a single file to storage
 * @param fileData - File data object
 * @param supabase - Supabase client instance
 * @param options - Upload options
 * @returns Promise<any> with uploaded file data
 */
const uploadFileToStorage = async (
  fileData: any,
  supabase: SupabaseClient,
  options: FileProcessingOptions
): Promise<any> => {
  const { bucket = 'attachments', folder = '', generateFileName = true } = options;

  // Check if file already exists
  if (!fileData.src.startsWith('blob:') && !fileData.src.startsWith('data:')) {
    if (fileData.path) {
      const { error } = await supabase.storage
        .from(bucket)
        .createSignedUrl(fileData.path, 60);

      if (!error) {
        return fileData; // File already exists
      }
    }
  }

  // Prepare file for upload
  const dataContent = fileData.src
    ? await fetch(fileData.src).then((res) => res.blob())
    : fileData.rawFile;

  const file = fileData.rawFile;
  const fileExt = file.name.split('.').pop();
  const fileName = generateFileName ? `${Math.random()}.${fileExt}` : file.name;
  const filePath = folder ? `${folder}/${fileName}` : fileName;

  // Upload file
  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(filePath, dataContent);

  if (uploadError) {
    console.error('Upload error:', uploadError);
    throw new Error('Failed to upload attachment');
  }

  // Get public URL
  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);

  // Update file data
  return {
    ...fileData,
    path: filePath,
    src: data.publicUrl,
    type: file.type,
  };
};

/**
 * Create avatar/image processing function
 * @param getAvatarFn - Function to generate avatar if none provided
 * @returns Processing function for avatar fields
 */
export const createAvatarProcessor = (
  getAvatarFn: (data: any) => Promise<any>
) => {
  return async (params: any, supabase: SupabaseClient, options: FileProcessingOptions = {}) => {
    let avatar = params.data.avatar;

    if (typeof avatar !== 'object' || avatar === null || !avatar.src) {
      avatar = await getAvatarFn(params.data);
    } else if (avatar.rawFile instanceof File) {
      avatar = await uploadFileToStorage(avatar, supabase, options);
    }

    return {
      ...params,
      data: {
        ...params.data,
        avatar,
      },
    };
  };
};

/**
 * Create full-text search processor
 * @param columns - Columns to search in
 * @returns Processing function for search queries
 */
export const createFullTextSearchProcessor = (columns: string[]) => {
  return (params: any) => {
    const { filter } = params;
    
    if (!filter || !filter.q) {
      return params;
    }

    const searchQuery = filter.q;
    delete filter.q;

    // Create search conditions for each column
    const searchConditions = columns.reduce((acc, column) => {
      acc[`${column}@ilike`] = `%${searchQuery}%`;
      return acc;
    }, {} as Record<string, any>);

    return {
      ...params,
      filter: {
        ...filter,
        $or: searchConditions,
      },
    };
  };
};

/**
 * Validate environment variables for Supabase
 * @param envVars - Object with environment variable names and values
 * @throws Error if required variables are missing
 */
export const validateSupabaseEnv = (envVars: Record<string, string | undefined>) => {
  const missing = Object.entries(envVars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
};

/**
 * Create a standardized error handler for data operations
 * @param operation - Operation name for context
 * @returns Error handler function
 */
export const createDataOperationErrorHandler = (operation: string) => {
  return (error: any, context?: string) => {
    const contextStr = context ? ` (${context})` : '';
    console.error(`${operation} error${contextStr}:`, error);
    
    // Map common Supabase errors to user-friendly messages
    if (error.code === '23505') {
      throw new Error('This record already exists');
    } else if (error.code === '23503') {
      throw new Error('Cannot perform this operation due to related records');
    } else if (error.code === 'PGRST116') {
      throw new Error('Record not found');
    } else if (error.message?.includes('JWT')) {
      throw new Error('Authentication error. Please refresh the page');
    }
    
    throw new Error(error.message || `${operation} failed`);
  };
};
