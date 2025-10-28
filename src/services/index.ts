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

// Auth provider
export { AuthProvider, useAuth } from './AuthProvider';
export type { AuthContextType, AuthProviderProps } from './AuthProvider';
export { getStandardSupabaseClient, getSupabaseClient } from './supabase';
