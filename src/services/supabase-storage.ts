import { SupabaseClient } from '@supabase/supabase-js';

/**
 * File upload utilities for Supabase Storage
 * Based on patterns from crm_demo
 */

export interface FileUploadOptions {
  bucket?: string;
  folder?: string;
  generateFileName?: boolean;
  overwrite?: boolean;
}

export interface UploadedFile {
  path: string;
  src: string;
  type?: string;
  size?: number;
  name?: string;
}

/**
 * Upload a file to Supabase Storage
 * @param supabase - Supabase client instance
 * @param file - File to upload (File object or Blob)
 * @param options - Upload options
 * @returns Promise with uploaded file information
 */
export const uploadToSupabaseStorage = async (
  supabase: SupabaseClient,
  file: File | Blob,
  options: FileUploadOptions = {}
): Promise<UploadedFile> => {
  const {
    bucket = 'attachments',
    folder = '',
    generateFileName = true,
    overwrite = false
  } = options;

  // Generate file name
  let fileName: string;
  if (generateFileName) {
    const fileExt = file instanceof File ? file.name.split('.').pop() : 'bin';
    fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
  } else if (file instanceof File) {
    fileName = file.name;
  } else {
    fileName = `${Math.random().toString(36).substring(2)}.bin`;
  }

  // Construct file path
  const filePath = folder ? `${folder}/${fileName}` : fileName;

  // Upload file
  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, {
      upsert: overwrite
    });

  if (uploadError) {
    console.error('Upload error:', uploadError);
    throw new Error(`Failed to upload file: ${uploadError.message}`);
  }

  // Get public URL
  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);

  return {
    path: filePath,
    src: data.publicUrl,
    type: file instanceof File ? file.type : undefined,
    size: file.size,
    name: file instanceof File ? file.name : fileName,
  };
};

/**
 * Check if a file exists in Supabase Storage
 * @param supabase - Supabase client instance
 * @param path - File path to check
 * @param bucket - Storage bucket name
 * @returns Promise<boolean> indicating if file exists
 */
export const checkFileExists = async (
  supabase: SupabaseClient,
  path: string,
  bucket = 'attachments'
): Promise<boolean> => {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .createSignedUrl(path, 60);
    
    return !error;
  } catch {
    return false;
  }
};

/**
 * Delete a file from Supabase Storage
 * @param supabase - Supabase client instance
 * @param path - File path to delete
 * @param bucket - Storage bucket name
 * @returns Promise<void>
 */
export const deleteFromSupabaseStorage = async (
  supabase: SupabaseClient,
  path: string,
  bucket = 'attachments'
): Promise<void> => {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path]);

  if (error) {
    console.error('Delete error:', error);
    throw new Error(`Failed to delete file: ${error.message}`);
  }
};

/**
 * Get a signed URL for a file in Supabase Storage
 * @param supabase - Supabase client instance
 * @param path - File path
 * @param expiresIn - Expiration time in seconds (default: 3600)
 * @param bucket - Storage bucket name
 * @returns Promise<string> with signed URL
 */
export const getSignedUrl = async (
  supabase: SupabaseClient,
  path: string,
  expiresIn = 3600,
  bucket = 'attachments'
): Promise<string> => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(path, expiresIn);

  if (error) {
    throw new Error(`Failed to create signed URL: ${error.message}`);
  }

  return data.signedUrl;
};

/**
 * Upload multiple files to Supabase Storage
 * @param supabase - Supabase client instance
 * @param files - Array of files to upload
 * @param options - Upload options
 * @returns Promise<UploadedFile[]> with uploaded files information
 */
export const uploadMultipleFiles = async (
  supabase: SupabaseClient,
  files: (File | Blob)[],
  options: FileUploadOptions = {}
): Promise<UploadedFile[]> => {
  const uploadPromises = files.map(file => 
    uploadToSupabaseStorage(supabase, file, options)
  );

  return Promise.all(uploadPromises);
};
