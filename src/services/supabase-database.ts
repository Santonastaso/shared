import { SupabaseClient } from '@supabase/supabase-js';

/**
 * Database utilities and patterns for Supabase
 * Based on patterns from crm_demo
 */

export interface FullTextSearchOptions {
  columns: string[];
  query: string;
  language?: string;
}

export interface PaginationParams {
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * Apply full-text search to a query
 * @param supabase - Supabase client instance
 * @param table - Table name
 * @param options - Search options
 * @returns Supabase query builder with search applied
 */
export const applyFullTextSearch = (
  supabase: SupabaseClient,
  table: string,
  options: FullTextSearchOptions
) => {
  const { columns, query, language = 'english' } = options;
  
  if (!query.trim()) {
    return supabase.from(table).select('*');
  }

  // Create text search query
  const searchQuery = query
    .split(' ')
    .filter(term => term.length > 0)
    .map(term => `${term}:*`)
    .join(' & ');

  // Build the query with text search
  let queryBuilder = supabase.from(table).select('*');

  // Apply text search on specified columns
  const searchConditions = columns.map(column => 
    `${column}.fts(${language}).${searchQuery}`
  ).join(',');

  return queryBuilder.or(searchConditions);
};

/**
 * Apply pagination to a query
 * @param queryBuilder - Supabase query builder
 * @param params - Pagination parameters
 * @returns Query builder with pagination applied
 */
export const applyPagination = (
  queryBuilder: any,
  params: PaginationParams
) => {
  const { page = 1, perPage = 10, sortBy, sortOrder = 'asc' } = params;
  
  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  let query = queryBuilder.range(from, to);

  if (sortBy) {
    query = query.order(sortBy, { ascending: sortOrder === 'asc' });
  }

  return query;
};

/**
 * Check if a record exists
 * @param supabase - Supabase client instance
 * @param table - Table name
 * @param conditions - Conditions to check
 * @returns Promise<boolean> indicating if record exists
 */
export const recordExists = async (
  supabase: SupabaseClient,
  table: string,
  conditions: Record<string, any>
): Promise<boolean> => {
  let query = supabase.from(table).select('id', { count: 'exact' });

  // Apply conditions
  Object.entries(conditions).forEach(([key, value]) => {
    query = query.eq(key, value);
  });

  const { count, error } = await query;

  if (error) {
    throw new Error(`Failed to check record existence: ${error.message}`);
  }

  return (count || 0) > 0;
};

/**
 * Get record count with optional filters
 * @param supabase - Supabase client instance
 * @param table - Table name
 * @param filters - Optional filters
 * @returns Promise<number> with record count
 */
export const getRecordCount = async (
  supabase: SupabaseClient,
  table: string,
  filters: Record<string, any> = {}
): Promise<number> => {
  let query = supabase.from(table).select('*', { count: 'exact', head: true });

  // Apply filters
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      query = query.in(key, value);
    } else {
      query = query.eq(key, value);
    }
  });

  const { count, error } = await query;

  if (error) {
    throw new Error(`Failed to get record count: ${error.message}`);
  }

  return count || 0;
};

/**
 * Batch insert records
 * @param supabase - Supabase client instance
 * @param table - Table name
 * @param records - Array of records to insert
 * @param batchSize - Size of each batch (default: 100)
 * @returns Promise<any[]> with inserted records
 */
export const batchInsert = async (
  supabase: SupabaseClient,
  table: string,
  records: any[],
  batchSize = 100
): Promise<any[]> => {
  const results: any[] = [];
  
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    
    const { data, error } = await supabase
      .from(table)
      .insert(batch)
      .select();

    if (error) {
      throw new Error(`Batch insert failed: ${error.message}`);
    }

    if (data) {
      results.push(...data);
    }
  }

  return results;
};

/**
 * Batch update records
 * @param supabase - Supabase client instance
 * @param table - Table name
 * @param updates - Array of updates with id and data
 * @returns Promise<any[]> with updated records
 */
export const batchUpdate = async (
  supabase: SupabaseClient,
  table: string,
  updates: Array<{ id: any; data: any }>
): Promise<any[]> => {
  const updatePromises = updates.map(({ id, data }) =>
    supabase
      .from(table)
      .update(data)
      .eq('id', id)
      .select()
      .single()
  );

  const results = await Promise.all(updatePromises);
  
  // Check for errors
  results.forEach((result, index) => {
    if (result.error) {
      throw new Error(`Update failed for record ${updates[index].id}: ${result.error.message}`);
    }
  });

  return results.map(result => result.data).filter(Boolean);
};

/**
 * Soft delete a record (set deleted_at timestamp)
 * @param supabase - Supabase client instance
 * @param table - Table name
 * @param id - Record ID
 * @returns Promise<any> with updated record
 */
export const softDelete = async (
  supabase: SupabaseClient,
  table: string,
  id: any
): Promise<any> => {
  const { data, error } = await supabase
    .from(table)
    .update({ deleted_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(`Soft delete failed: ${error.message}`);
  }

  return data;
};

/**
 * Restore a soft-deleted record
 * @param supabase - Supabase client instance
 * @param table - Table name
 * @param id - Record ID
 * @returns Promise<any> with restored record
 */
export const restoreRecord = async (
  supabase: SupabaseClient,
  table: string,
  id: any
): Promise<any> => {
  const { data, error } = await supabase
    .from(table)
    .update({ deleted_at: null })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(`Restore failed: ${error.message}`);
  }

  return data;
};
