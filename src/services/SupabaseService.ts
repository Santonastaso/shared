import { SupabaseClient, RealtimeChannel } from '@supabase/supabase-js';

/**
 * Comprehensive error types for better error categorization
 * Consolidated from tracc's error handling patterns
 */
export const ERROR_TYPES = {
  // Validation Errors
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  REQUIRED_FIELD_ERROR: 'REQUIRED_FIELD_ERROR',
  INVALID_FORMAT_ERROR: 'INVALID_FORMAT_ERROR',
  INVALID_RANGE_ERROR: 'INVALID_RANGE_ERROR',
  INVALID_TYPE_ERROR: 'INVALID_TYPE_ERROR',
  
  // Data Errors
  NOT_FOUND: 'NOT_FOUND',
  DUPLICATE_ERROR: 'DUPLICATE_ERROR',
  CONFLICT_ERROR: 'CONFLICT_ERROR',
  OUT_OF_SYNC_ERROR: 'OUT_OF_SYNC_ERROR',
  
  // Permission & Security Errors
  PERMISSION_ERROR: 'PERMISSION_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  RATE_LIMIT_ERROR: 'RATE_LIMIT_ERROR',
  
  // Business Logic Errors
  BUSINESS_LOGIC_ERROR: 'BUSINESS_LOGIC_ERROR',
  INSUFFICIENT_STOCK_ERROR: 'INSUFFICIENT_STOCK_ERROR',
  CAPACITY_EXCEEDED_ERROR: 'CAPACITY_EXCEEDED_ERROR',
  INVALID_OPERATION_ERROR: 'INVALID_OPERATION_ERROR',
  WORKFLOW_ERROR: 'WORKFLOW_ERROR',
  
  // System Errors
  SERVER_ERROR: 'SERVER_ERROR',
  DATABASE_ERROR: 'DATABASE_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  CONNECTION_ERROR: 'CONNECTION_ERROR',
  
  // External Service Errors
  EXTERNAL_SERVICE_ERROR: 'EXTERNAL_SERVICE_ERROR',
  API_ERROR: 'API_ERROR',
  INTEGRATION_ERROR: 'INTEGRATION_ERROR',
  
  // Configuration Errors
  CONFIGURATION_ERROR: 'CONFIGURATION_ERROR',
  ENVIRONMENT_ERROR: 'ENVIRONMENT_ERROR',
  
  // Resource Errors
  RESOURCE_EXHAUSTED_ERROR: 'RESOURCE_EXHAUSTED_ERROR',
  QUOTA_EXCEEDED_ERROR: 'QUOTA_EXCEEDED_ERROR',
  STORAGE_ERROR: 'STORAGE_ERROR',
  
  // User Experience Errors
  USER_INPUT_ERROR: 'USER_INPUT_ERROR',
  UI_ERROR: 'UI_ERROR',
  NAVIGATION_ERROR: 'NAVIGATION_ERROR',
  
  // Recovery Errors
  RECOVERY_ERROR: 'RECOVERY_ERROR',
  RETRY_ERROR: 'RETRY_ERROR',
  FALLBACK_ERROR: 'FALLBACK_ERROR',
} as const;

/**
 * Enhanced custom error class for service operations
 */
export class ServiceError extends Error {
  public readonly type: string;
  public readonly statusCode: number;
  public readonly originalError: Error | null;
  public readonly context: string;
  public readonly timestamp: string;
  public readonly id: string;
  public readonly severity: string;
  public readonly retryable: boolean;
  public readonly userMessage: string;
  public readonly details: Record<string, any>;
  public readonly metadata: Record<string, any>;

  constructor(
    message: string,
    type = ERROR_TYPES.SERVER_ERROR,
    statusCode = 500,
    originalError: Error | null = null,
    context = '',
    options: {
      id?: string;
      severity?: string;
      retryable?: boolean;
      userMessage?: string;
      details?: Record<string, any>;
      metadata?: Record<string, any>;
    } = {}
  ) {
    super(message);
    this.name = 'ServiceError';
    this.type = type;
    this.statusCode = statusCode;
    this.originalError = originalError;
    this.context = context;
    this.timestamp = new Date().toISOString();
    this.id = options.id || this.generateErrorId();
    this.severity = options.severity || this.getDefaultSeverity(type);
    this.retryable = options.retryable !== undefined ? options.retryable : this.isRetryable(type);
    this.userMessage = options.userMessage || this.getDefaultUserMessage(type, message);
    this.details = options.details || {};
    this.metadata = options.metadata || {};
    
    if (originalError?.stack) {
      this.stack = originalError.stack;
    }
  }

  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getDefaultSeverity(type: string): string {
    const severityMap: Record<string, string> = {
      [ERROR_TYPES.VALIDATION_ERROR]: 'low',
      [ERROR_TYPES.REQUIRED_FIELD_ERROR]: 'low',
      [ERROR_TYPES.INVALID_FORMAT_ERROR]: 'low',
      [ERROR_TYPES.INVALID_RANGE_ERROR]: 'low',
      [ERROR_TYPES.INVALID_TYPE_ERROR]: 'low',
      [ERROR_TYPES.USER_INPUT_ERROR]: 'low',
      [ERROR_TYPES.UI_ERROR]: 'low',
      [ERROR_TYPES.NAVIGATION_ERROR]: 'low',
      
      [ERROR_TYPES.NOT_FOUND]: 'medium',
      [ERROR_TYPES.DUPLICATE_ERROR]: 'medium',
      [ERROR_TYPES.CONFLICT_ERROR]: 'medium',
      [ERROR_TYPES.BUSINESS_LOGIC_ERROR]: 'medium',
      [ERROR_TYPES.INSUFFICIENT_STOCK_ERROR]: 'medium',
      [ERROR_TYPES.CAPACITY_EXCEEDED_ERROR]: 'medium',
      [ERROR_TYPES.INVALID_OPERATION_ERROR]: 'medium',
      [ERROR_TYPES.WORKFLOW_ERROR]: 'medium',
      
      [ERROR_TYPES.PERMISSION_ERROR]: 'high',
      [ERROR_TYPES.AUTHENTICATION_ERROR]: 'high',
      [ERROR_TYPES.AUTHORIZATION_ERROR]: 'high',
      [ERROR_TYPES.RATE_LIMIT_ERROR]: 'high',
      [ERROR_TYPES.CONFIGURATION_ERROR]: 'high',
      [ERROR_TYPES.ENVIRONMENT_ERROR]: 'high',
      
      [ERROR_TYPES.SERVER_ERROR]: 'critical',
      [ERROR_TYPES.DATABASE_ERROR]: 'critical',
      [ERROR_TYPES.NETWORK_ERROR]: 'critical',
      [ERROR_TYPES.CONNECTION_ERROR]: 'critical',
      [ERROR_TYPES.EXTERNAL_SERVICE_ERROR]: 'critical',
      [ERROR_TYPES.API_ERROR]: 'critical',
      [ERROR_TYPES.INTEGRATION_ERROR]: 'critical',
      [ERROR_TYPES.RESOURCE_EXHAUSTED_ERROR]: 'critical',
      [ERROR_TYPES.QUOTA_EXCEEDED_ERROR]: 'critical',
      [ERROR_TYPES.STORAGE_ERROR]: 'critical',
    };
    
    return severityMap[type] || 'medium';
  }

  private isRetryable(type: string): boolean {
    const retryableTypes = [
      ERROR_TYPES.NETWORK_ERROR,
      ERROR_TYPES.CONNECTION_ERROR,
      ERROR_TYPES.TIMEOUT_ERROR,
      ERROR_TYPES.SERVER_ERROR,
      ERROR_TYPES.EXTERNAL_SERVICE_ERROR,
      ERROR_TYPES.API_ERROR,
      ERROR_TYPES.RATE_LIMIT_ERROR,
    ];
    
    return retryableTypes.includes(type);
  }

  private getDefaultUserMessage(type: string, message: string): string {
    const userMessageMap: Record<string, string> = {
      [ERROR_TYPES.VALIDATION_ERROR]: 'Please check your input and try again.',
      [ERROR_TYPES.REQUIRED_FIELD_ERROR]: 'Please fill in all required fields.',
      [ERROR_TYPES.INVALID_FORMAT_ERROR]: 'Please check the format of your input.',
      [ERROR_TYPES.INVALID_RANGE_ERROR]: 'Please enter a value within the allowed range.',
      [ERROR_TYPES.INVALID_TYPE_ERROR]: 'Please enter the correct type of data.',
      [ERROR_TYPES.NOT_FOUND]: 'The requested item was not found.',
      [ERROR_TYPES.DUPLICATE_ERROR]: 'This item already exists.',
      [ERROR_TYPES.CONFLICT_ERROR]: 'There was a conflict with your request.',
      [ERROR_TYPES.PERMISSION_ERROR]: 'You do not have permission to perform this action.',
      [ERROR_TYPES.AUTHENTICATION_ERROR]: 'Please log in to continue.',
      [ERROR_TYPES.AUTHORIZATION_ERROR]: 'You are not authorized to perform this action.',
      [ERROR_TYPES.BUSINESS_LOGIC_ERROR]: 'This operation cannot be completed due to business rules.',
      [ERROR_TYPES.INSUFFICIENT_STOCK_ERROR]: 'Insufficient stock available.',
      [ERROR_TYPES.CAPACITY_EXCEEDED_ERROR]: 'Capacity limit exceeded.',
      [ERROR_TYPES.INVALID_OPERATION_ERROR]: 'This operation is not allowed.',
      [ERROR_TYPES.SERVER_ERROR]: 'A server error occurred. Please try again later.',
      [ERROR_TYPES.DATABASE_ERROR]: 'A database error occurred. Please try again later.',
      [ERROR_TYPES.NETWORK_ERROR]: 'Network connection failed. Please check your connection.',
      [ERROR_TYPES.CONNECTION_ERROR]: 'Connection failed. Please try again.',
      [ERROR_TYPES.TIMEOUT_ERROR]: 'The operation timed out. Please try again.',
      [ERROR_TYPES.EXTERNAL_SERVICE_ERROR]: 'External service is temporarily unavailable.',
      [ERROR_TYPES.API_ERROR]: 'API request failed. Please try again later.',
      [ERROR_TYPES.CONFIGURATION_ERROR]: 'System configuration error. Please contact support.',
      [ERROR_TYPES.ENVIRONMENT_ERROR]: 'Environment configuration error. Please contact support.',
      [ERROR_TYPES.RESOURCE_EXHAUSTED_ERROR]: 'System resources are exhausted. Please try again later.',
      [ERROR_TYPES.QUOTA_EXCEEDED_ERROR]: 'Quota exceeded. Please try again later.',
      [ERROR_TYPES.STORAGE_ERROR]: 'Storage error occurred. Please try again later.',
      [ERROR_TYPES.USER_INPUT_ERROR]: 'Please check your input and try again.',
      [ERROR_TYPES.UI_ERROR]: 'A user interface error occurred.',
      [ERROR_TYPES.NAVIGATION_ERROR]: 'Navigation error occurred.',
      [ERROR_TYPES.RECOVERY_ERROR]: 'Error recovery failed.',
      [ERROR_TYPES.RETRY_ERROR]: 'Retry operation failed.',
      [ERROR_TYPES.FALLBACK_ERROR]: 'Fallback operation failed.',
    };
    
    return userMessageMap[type] || 'An unexpected error occurred. Please try again.';
  }

  toUserFriendly() {
    return {
      message: this.userMessage,
      type: this.type,
      severity: this.severity,
      retryable: this.retryable,
      timestamp: this.timestamp,
    };
  }
}

/**
 * Enhanced Supabase error handling with comprehensive error mapping
 */
export const handleSupabaseError = (error: any): { type: string; message: string; details?: any } => {
  if (!error) return { type: ERROR_TYPES.SERVER_ERROR, message: 'Unknown error occurred' };

  // Handle specific Supabase error codes
  switch (error.code) {
    // Constraint violations
    case '23505': // Unique constraint violation
      return { 
        type: ERROR_TYPES.DUPLICATE_ERROR, 
        message: 'A record with this information already exists',
        details: { constraint: error.constraint, table: error.table }
      };
    case '23503': // Foreign key constraint violation
      return { 
        type: ERROR_TYPES.CONFLICT_ERROR, 
        message: 'Cannot perform this action due to related records',
        details: { constraint: error.constraint, table: error.table }
      };
    case '23502': // Not null constraint violation
      return { 
        type: ERROR_TYPES.REQUIRED_FIELD_ERROR, 
        message: 'Required fields are missing',
        details: { column: error.column, table: error.table }
      };
    case '23514': // Check constraint violation
      return { 
        type: ERROR_TYPES.VALIDATION_ERROR, 
        message: 'Data validation failed',
        details: { constraint: error.constraint, table: error.table }
      };
    
    // Database structure errors
    case '42P01': // Undefined table
      return { 
        type: ERROR_TYPES.DATABASE_ERROR, 
        message: 'Database table not found',
        details: { table: error.table }
      };
    case '42703': // Undefined column
      return { 
        type: ERROR_TYPES.DATABASE_ERROR, 
        message: 'Database column not found',
        details: { column: error.column, table: error.table }
      };
    
    // Authentication errors
    case 'PGRST301': // JWT expired
    case 'PGRST302': // JWT invalid
      return { 
        type: ERROR_TYPES.AUTHENTICATION_ERROR, 
        message: 'Authentication expired. Please log in again.'
      };
    
    // Authorization errors
    case 'PGRST001': // Insufficient privileges
      return { 
        type: ERROR_TYPES.AUTHORIZATION_ERROR, 
        message: 'You do not have permission to perform this action.'
      };
    
    // Not found errors
    case 'PGRST116': // No rows found
      return { 
        type: ERROR_TYPES.NOT_FOUND, 
        message: 'Record not found'
      };
    
    default:
      // Handle generic error messages
      if (error.message?.includes('JWT')) {
        return { 
          type: ERROR_TYPES.AUTHENTICATION_ERROR, 
          message: 'Authentication error. Please refresh the page'
        };
      }
      if (error.message?.includes('network')) {
        return { 
          type: ERROR_TYPES.NETWORK_ERROR, 
          message: 'Network connection failed'
        };
      }
      if (error.message?.includes('timeout')) {
        return { 
          type: ERROR_TYPES.TIMEOUT_ERROR, 
          message: 'Request timed out'
        };
      }
      
      return { 
        type: ERROR_TYPES.SERVER_ERROR, 
        message: error.message || 'An unexpected error occurred'
      };
  }
};

/**
 * Validation utilities
 */
export const validateRequiredFields = (data: Record<string, any>, requiredFields: string[]): void => {
  const missingFields = requiredFields.filter(field => 
    data[field] === undefined || data[field] === null || data[field] === ''
  );
  
  if (missingFields.length > 0) {
    throw new ServiceError(
      `Missing required fields: ${missingFields.join(', ')}`,
      ERROR_TYPES.REQUIRED_FIELD_ERROR,
      400,
      null,
      'validateRequiredFields',
      { details: { missingFields } }
    );
  }
};

export const validateNumericRanges = (
  data: Record<string, any>, 
  ranges: Record<string, { min?: number; max?: number }>
): void => {
  for (const [field, range] of Object.entries(ranges)) {
    const value = data[field];
    if (value !== undefined && value !== null) {
      const numValue = Number(value);
      if (isNaN(numValue)) {
        throw new ServiceError(
          `${field} must be a valid number`,
          ERROR_TYPES.INVALID_TYPE_ERROR,
          400,
          null,
          'validateNumericRanges',
          { details: { field, value } }
        );
      }
      if (range.min !== undefined && numValue < range.min) {
        throw new ServiceError(
          `${field} must be at least ${range.min}`,
          ERROR_TYPES.INVALID_RANGE_ERROR,
          400,
          null,
          'validateNumericRanges',
          { details: { field, value, min: range.min } }
        );
      }
      if (range.max !== undefined && numValue > range.max) {
        throw new ServiceError(
          `${field} must be no more than ${range.max}`,
          ERROR_TYPES.INVALID_RANGE_ERROR,
          400,
          null,
          'validateNumericRanges',
          { details: { field, value, max: range.max } }
        );
      }
    }
  }
};

export const throwNotFoundError = (entityType: string, id: string | number): never => {
  throw new ServiceError(
    `${entityType} with ID ${id} not found`,
    ERROR_TYPES.NOT_FOUND,
    404,
    null,
    'throwNotFoundError',
    { details: { entityType, id } }
  );
};

export const throwBusinessError = (message: string, details?: any): never => {
  throw new ServiceError(
    message,
    ERROR_TYPES.BUSINESS_LOGIC_ERROR,
    400,
    null,
    'throwBusinessError',
    { details }
  );
};

/**
 * Safe async wrapper with comprehensive error handling
 */
export const safeAsync = async <T>(
  operation: () => Promise<T>,
  context: string = 'unknown'
): Promise<T> => {
  try {
    return await operation();
  } catch (error: any) {
    if (error instanceof ServiceError) {
      throw error;
    }
    
    const supabaseError = handleSupabaseError(error);
    throw new ServiceError(
      supabaseError.message,
      supabaseError.type,
      500,
      error,
      context,
      { details: supabaseError.details }
    );
  }
};

/**
 * Unified query options for database operations
 */
export interface QueryOptions {
  select?: string;
  orderBy?: string;
  ascending?: boolean;
  filters?: Record<string, any>;
  limit?: number;
  offset?: number;
  dateRange?: {
    startDate?: string;
    endDate?: string;
    dateField?: string;
  };
}

/**
 * Pagination options
 */
export interface PaginationOptions {
  page?: number;
  perPage?: number;
}

/**
 * Real-time subscription options
 */
export interface RealtimeOptions {
  event?: 'INSERT' | 'UPDATE' | 'DELETE' | '*';
  schema?: string;
  filter?: string;
}

/**
 * Comprehensive SupabaseService Class
 * Consolidates all patterns from crm_demo, tracc, and scheduler_demo
 * Provides unified CRUD operations, real-time subscriptions, and advanced querying
 */
export class SupabaseService {
  protected client: SupabaseClient;
  protected tableName: string;
  private realtimeChannels: Map<string, RealtimeChannel> = new Map();

  constructor(client: SupabaseClient, tableName: string) {
    this.client = client;
    this.tableName = tableName;
  }

  /**
   * Initialize service and test connection
   */
  async init(): Promise<boolean> {
    return safeAsync(async () => {
      const { error } = await this.client
        .from(this.tableName)
        .select('count')
        .limit(1);
        
      if (error) {
        throw error;
      }
      
      return true;
    }, `${this.tableName}.init`);
  }

  /**
   * Get all records with advanced filtering and pagination
   */
  async getAll(options: QueryOptions = {}): Promise<any[]> {
    return safeAsync(async () => {
      let query = this.client
        .from(this.tableName)
        .select(options.select || '*')
        .order(options.orderBy || 'created_at', { ascending: options.ascending !== false });

      // Apply filters
      if (options.filters) {
        Object.entries(options.filters).forEach(([key, value]) => {
          if (value !== null && value !== undefined && value !== '') {
            if (Array.isArray(value)) {
              query = query.in(key, value);
            } else if (typeof value === 'string' && value.includes('%')) {
              query = query.like(key, value);
            } else {
              query = query.eq(key, value);
            }
          }
        });
      }

      // Apply date range filter
      if (options.dateRange) {
        const { startDate, endDate, dateField = 'created_at' } = options.dateRange;
        if (startDate) {
          query = query.gte(dateField, `${startDate}T00:00:00.000Z`);
        }
        if (endDate) {
          query = query.lte(dateField, `${endDate}T23:59:59.999Z`);
        }
      }

      // Apply pagination
      if (options.limit) {
        query = query.limit(options.limit);
      }
      if (options.offset) {
        query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data || [];
    }, `${this.tableName}.getAll`);
  }

  /**
   * Get paginated records with total count
   */
  async getPaginated(options: QueryOptions & PaginationOptions = {}): Promise<{
    data: any[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  }> {
    const page = options.page || 1;
    const perPage = options.perPage || 10;
    const offset = (page - 1) * perPage;

    // Get total count and data in parallel
    const [totalCount, data] = await Promise.all([
      this.count(options.filters),
      this.getAll({
        ...options,
        limit: perPage,
        offset
      })
    ]);

    return {
      data,
      total: totalCount,
      page,
      perPage,
      totalPages: Math.ceil(totalCount / perPage)
    };
  }

  /**
   * Get a record by ID
   */
  async getById(id: string | number, select = '*'): Promise<any> {
    return safeAsync(async () => {
      const { data, error } = await this.client
        .from(this.tableName)
        .select(select)
        .eq('id', id)
        .single();

      if (error) {
        throw error;
      }

      return data;
    }, `${this.tableName}.getById`);
  }

  /**
   * Get records by field value
   */
  async getByField(field: string, value: any, options: QueryOptions = {}): Promise<any[]> {
    return safeAsync(async () => {
      let query = this.client
        .from(this.tableName)
        .select(options.select || '*')
        .eq(field, value);

      if (options.orderBy) {
        query = query.order(options.orderBy, { ascending: options.ascending !== false });
      }

      if (options.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data || [];
    }, `${this.tableName}.getByField`);
  }

  /**
   * Create a new record
   */
  async create(data: Record<string, any>): Promise<any> {
    return safeAsync(async () => {
      const { data: result, error } = await this.client
        .from(this.tableName)
        .insert(data)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return result;
    }, `${this.tableName}.create`);
  }

  /**
   * Create multiple records
   */
  async createMany(data: Record<string, any>[]): Promise<any[]> {
    return safeAsync(async () => {
      const { data: result, error } = await this.client
        .from(this.tableName)
        .insert(data)
        .select();

      if (error) {
        throw error;
      }

      return result || [];
    }, `${this.tableName}.createMany`);
  }

  /**
   * Update a record
   */
  async update(id: string | number, data: Record<string, any>): Promise<any> {
    return safeAsync(async () => {
      const { data: result, error } = await this.client
        .from(this.tableName)
        .update(data)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return result;
    }, `${this.tableName}.update`);
  }

  /**
   * Update multiple records
   */
  async updateMany(updates: { id: string | number; data: Record<string, any> }[]): Promise<any[]> {
    return safeAsync(async () => {
      const promises = updates.map(({ id, data }) => this.update(id, data));
      return Promise.all(promises);
    }, `${this.tableName}.updateMany`);
  }

  /**
   * Upsert a record (insert or update)
   */
  async upsert(data: Record<string, any>, onConflict?: string): Promise<any> {
    return safeAsync(async () => {
      let query = this.client
        .from(this.tableName)
        .upsert(data)
        .select()
        .single();

      if (onConflict) {
        query = query.onConflict(onConflict);
      }

      const { data: result, error } = await query;

      if (error) {
        throw error;
      }

      return result;
    }, `${this.tableName}.upsert`);
  }

  /**
   * Delete a record
   */
  async delete(id: string | number): Promise<void> {
    return safeAsync(async () => {
      const { error } = await this.client
        .from(this.tableName)
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }
    }, `${this.tableName}.delete`);
  }

  /**
   * Bulk delete records
   */
  async bulkDelete(ids: (string | number)[]): Promise<void> {
    return safeAsync(async () => {
      const { error } = await this.client
        .from(this.tableName)
        .delete()
        .in('id', ids);

      if (error) {
        throw error;
      }
    }, `${this.tableName}.bulkDelete`);
  }

  /**
   * Count records with optional filters
   */
  async count(filters?: Record<string, any>): Promise<number> {
    return safeAsync(async () => {
      let query = this.client
        .from(this.tableName)
        .select('*', { count: 'exact', head: true });

      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== null && value !== undefined && value !== '') {
            if (Array.isArray(value)) {
              query = query.in(key, value);
            } else {
              query = query.eq(key, value);
            }
          }
        });
      }

      const { count, error } = await query;

      if (error) {
        throw error;
      }

      return count || 0;
    }, `${this.tableName}.count`);
  }

  /**
   * Check if record exists
   */
  async exists(id: string | number): Promise<boolean> {
    return safeAsync(async () => {
      const { data, error } = await this.client
        .from(this.tableName)
        .select('id')
        .eq('id', id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      return !!data;
    }, `${this.tableName}.exists`);
  }

  /**
   * Search records with text search
   */
  async search(searchTerm: string, searchFields: string[] = ['name'], options: QueryOptions = {}): Promise<any[]> {
    return safeAsync(async () => {
      let query = this.client
        .from(this.tableName)
        .select(options.select || '*');

      // Build text search query
      if (searchFields.length === 1) {
        query = query.ilike(searchFields[0], `%${searchTerm}%`);
      } else {
        // For multiple fields, use OR condition
        const orConditions = searchFields.map(field => `${field}.ilike.%${searchTerm}%`).join(',');
        query = query.or(orConditions);
      }

      // Apply additional filters
      if (options.filters) {
        Object.entries(options.filters).forEach(([key, value]) => {
          if (value !== null && value !== undefined && value !== '') {
            query = query.eq(key, value);
          }
        });
      }

      query = query.order(options.orderBy || 'created_at', { ascending: options.ascending !== false });

      if (options.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data || [];
    }, `${this.tableName}.search`);
  }

  /**
   * Get records by date range
   */
  async getByDateRange(
    startDate: string,
    endDate: string,
    dateField = 'created_at',
    options: QueryOptions = {}
  ): Promise<any[]> {
    return this.getAll({
      ...options,
      dateRange: { startDate, endDate, dateField }
    });
  }

  /**
   * Execute raw SQL query
   */
  async executeRpc(functionName: string, params?: Record<string, any>): Promise<any> {
    return safeAsync(async () => {
      const { data, error } = await this.client.rpc(functionName, params);

      if (error) {
        throw error;
      }

      return data;
    }, `${this.tableName}.executeRpc`);
  }

  /**
   * Setup real-time subscription
   */
  setupRealtimeSubscription(
    callback: (payload: any) => void,
    options: RealtimeOptions = {},
    channelName?: string
  ): RealtimeChannel {
    const channel = channelName || `${this.tableName}_realtime_${Date.now()}`;
    
    let realtimeChannel = this.client
      .channel(channel)
      .on(
        'postgres_changes',
        {
          event: options.event || '*',
          schema: options.schema || 'public',
          table: this.tableName,
          filter: options.filter
        },
        callback
      )
      .subscribe();

    this.realtimeChannels.set(channel, realtimeChannel);
    return realtimeChannel;
  }

  /**
   * Remove real-time subscription
   */
  removeRealtimeSubscription(channelName: string): void {
    const channel = this.realtimeChannels.get(channelName);
    if (channel) {
      this.client.removeChannel(channel);
      this.realtimeChannels.delete(channelName);
    }
  }

  /**
   * Remove all real-time subscriptions
   */
  removeAllRealtimeSubscriptions(): void {
    this.realtimeChannels.forEach((channel, channelName) => {
      this.client.removeChannel(channel);
    });
    this.realtimeChannels.clear();
  }

  /**
   * Bulk operations with transaction support
   */
  async bulkOperation(
    operations: Array<{
      type: 'insert' | 'update' | 'delete' | 'upsert';
      data?: Record<string, any>;
      id?: string | number;
      filters?: Record<string, any>;
    }>
  ): Promise<any[]> {
    return safeAsync(async () => {
      const results = [];
      
      for (const operation of operations) {
        let result;
        
        switch (operation.type) {
          case 'insert':
            result = await this.create(operation.data!);
            break;
          case 'update':
            result = await this.update(operation.id!, operation.data!);
            break;
          case 'delete':
            await this.delete(operation.id!);
            result = { deleted: true, id: operation.id };
            break;
          case 'upsert':
            result = await this.upsert(operation.data!);
            break;
          default:
            throw new ServiceError(
              `Unknown operation type: ${operation.type}`,
              ERROR_TYPES.INVALID_OPERATION_ERROR
            );
        }
        
        results.push(result);
      }
      
      return results;
    }, `${this.tableName}.bulkOperation`);
  }

  /**
   * Get table name
   */
  getTableName(): string {
    return this.tableName;
  }

  /**
   * Get Supabase client
   */
  getClient(): SupabaseClient {
    return this.client;
  }
}
