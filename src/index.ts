// UI Components
export * from './components';

// Utilities (excluding conflicting exports)
export {
  cn,
  confirmAction,
  getNested,
  formatDate,
  formatDateTime,
  generateId,
  debounce,
  throttle,
  handleApiError,
  safeAsync
} from './utils';
export * from './utils/toast';
export * from './utils/validation';

// Form validation utilities (from crm_demo patterns)
export * from './validation';
export * from './utils/dateUtils';
export * from './utils/numberUtils';
export * from './utils/stringUtils';
export * from './utils/arrayUtils';
export * from './utils/fetchUtils';

// Services (with renamed conflicting exports)
export {
  BaseService,
  SupabaseService,
  ServiceError,
  handleSupabaseServiceError,
  validateRequiredFields,
  validateNumericRanges,
  throwNotFoundError,
  throwBusinessError,
  safeAsync as servicesSafeAsync,
  ERROR_TYPES as SERVICES_ERROR_TYPES
} from './services';
export type { QueryOptions, PaginationOptions, RealtimeOptions, SupabaseConfig, AuthContextType, AuthProviderProps } from './services';
export {
  createSupabaseClient,
  createSupabaseFromEnv,
  handleSupabaseError,
  checkSupabaseConnection,
  AuthProvider,
  useAuth,
  getStandardSupabaseClient,
  getSupabaseClient,
  // Supabase storage utilities
  uploadToSupabaseStorage,
  checkFileExists,
  deleteFromSupabaseStorage,
  getSignedUrl,
  uploadMultipleFiles,
  // Supabase database utilities
  applyFullTextSearch,
  applyPagination,
  recordExists,
  getRecordCount,
  batchInsert,
  batchUpdate,
  softDelete,
  restoreRecord,
  // Supabase data provider utilities
  processFileUploads,
  createAvatarProcessor,
  createFullTextSearchProcessor,
  validateSupabaseEnv,
  createDataOperationErrorHandler
} from './services';

// Hooks
export * from './hooks';

// Constants (main export)
export * from './constants';

// Store factories
export * from './stores';
