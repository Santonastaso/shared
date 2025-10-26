// Base service class
export { BaseService } from './BaseService';

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