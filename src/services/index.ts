// Base service class
export { BaseService } from './BaseService';

// Enhanced Supabase service
export { 
  SupabaseService, 
  ServiceError, 
  ERROR_TYPES, 
  handleSupabaseError as handleSupabaseServiceError, 
  validateRequiredFields, 
  validateNumericRanges, 
  throwNotFoundError, 
  throwBusinessError, 
  safeAsync 
} from './SupabaseService';
export type { QueryOptions, PaginationOptions, RealtimeOptions } from './SupabaseService';

// Supabase utilities
export { 
  createSupabaseClient, 
  createSupabaseFromEnv, 
  handleSupabaseError, 
  checkSupabaseConnection 
} from './supabase';
export type { SupabaseConfig } from './supabase';

// Supabase storage utilities
export {
  uploadToSupabaseStorage,
  checkFileExists,
  deleteFromSupabaseStorage,
  getSignedUrl,
  uploadMultipleFiles
} from './supabase-storage';
export type { FileUploadOptions, UploadedFile } from './supabase-storage';

// Supabase database utilities
export {
  applyFullTextSearch,
  applyPagination,
  recordExists,
  getRecordCount,
  batchInsert,
  batchUpdate,
  softDelete,
  restoreRecord
} from './supabase-database';
export type { FullTextSearchOptions, PaginationParams } from './supabase-database';

// Supabase data provider utilities
export {
  processFileUploads,
  createAvatarProcessor,
  createFullTextSearchProcessor,
  validateSupabaseEnv,
  createDataOperationErrorHandler
} from './supabase-data-provider';
export type { 
  DataProviderConfig, 
  LifecycleCallback, 
  FileProcessingOptions 
} from './supabase-data-provider';

// Auth provider
export { AuthProvider, useAuth } from './AuthProvider';
export type { AuthContextType, AuthProviderProps } from './AuthProvider';
export { getStandardSupabaseClient, getSupabaseClient } from './supabase';
