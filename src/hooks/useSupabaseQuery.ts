import { useQuery, useMutation, useQueryClient, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { SupabaseService, QueryOptions, PaginationOptions } from '../services/SupabaseService';

/**
 * Query key factory for consistent cache management
 */
export const createQueryKeys = (tableName: string) => ({
  all: [tableName] as const,
  lists: () => [tableName, 'list'] as const,
  list: (filters?: Record<string, any>) => [tableName, 'list', filters] as const,
  details: () => [tableName, 'detail'] as const,
  detail: (id: string | number) => [tableName, 'detail', id] as const,
  search: (term: string, fields?: string[]) => [tableName, 'search', term, fields] as const,
  count: (filters?: Record<string, any>) => [tableName, 'count', filters] as const,
  paginated: (options?: QueryOptions & PaginationOptions) => [tableName, 'paginated', options] as const,
});

/**
 * Hook factory for creating standardized Supabase query hooks
 */
export function createSupabaseHooks<T = any>(service: SupabaseService) {
  const tableName = service.getTableName();
  const queryKeys = createQueryKeys(tableName);

  /**
   * Hook to fetch all records
   */
  const useList = (
    options?: QueryOptions,
    queryOptions?: Omit<UseQueryOptions<T[], Error>, 'queryKey' | 'queryFn'>
  ) => {
    return useQuery({
      queryKey: queryKeys.list(options?.filters),
      queryFn: () => service.getAll(options),
      staleTime: 5 * 60 * 1000, // 5 minutes
      ...queryOptions,
    });
  };

  /**
   * Hook to fetch paginated records
   */
  const usePaginatedList = (
    options?: QueryOptions & PaginationOptions,
    queryOptions?: Omit<UseQueryOptions<{
      data: T[];
      total: number;
      page: number;
      perPage: number;
      totalPages: number;
    }, Error>, 'queryKey' | 'queryFn'>
  ) => {
    return useQuery({
      queryKey: queryKeys.paginated(options),
      queryFn: () => service.getPaginated(options),
      staleTime: 5 * 60 * 1000, // 5 minutes
      keepPreviousData: true, // Keep previous data while loading new page
      ...queryOptions,
    });
  };

  /**
   * Hook to fetch a single record by ID
   */
  const useDetail = (
    id: string | number | undefined,
    select?: string,
    queryOptions?: Omit<UseQueryOptions<T, Error>, 'queryKey' | 'queryFn'>
  ) => {
    return useQuery({
      queryKey: queryKeys.detail(id!),
      queryFn: () => service.getById(id!, select),
      enabled: !!id,
      staleTime: 5 * 60 * 1000, // 5 minutes
      ...queryOptions,
    });
  };

  /**
   * Hook to search records
   */
  const useSearch = (
    searchTerm: string,
    searchFields?: string[],
    options?: QueryOptions,
    queryOptions?: Omit<UseQueryOptions<T[], Error>, 'queryKey' | 'queryFn'>
  ) => {
    return useQuery({
      queryKey: queryKeys.search(searchTerm, searchFields),
      queryFn: () => service.search(searchTerm, searchFields, options),
      enabled: searchTerm.length > 0,
      staleTime: 2 * 60 * 1000, // 2 minutes for search results
      ...queryOptions,
    });
  };

  /**
   * Hook to count records
   */
  const useCount = (
    filters?: Record<string, any>,
    queryOptions?: Omit<UseQueryOptions<number, Error>, 'queryKey' | 'queryFn'>
  ) => {
    return useQuery({
      queryKey: queryKeys.count(filters),
      queryFn: () => service.count(filters),
      staleTime: 5 * 60 * 1000, // 5 minutes
      ...queryOptions,
    });
  };

  /**
   * Hook to create a record
   */
  const useCreate = (
    mutationOptions?: UseMutationOptions<T, Error, Record<string, any>>
  ) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (data: Record<string, any>) => service.create(data),
      onSuccess: (data, variables) => {
        // Invalidate and refetch list queries
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        queryClient.invalidateQueries({ queryKey: queryKeys.count() });
        
        // Add the new item to the cache
        queryClient.setQueryData(queryKeys.detail(data.id), data);
        
        // Call custom onSuccess if provided
        mutationOptions?.onSuccess?.(data, variables, undefined);
      },
      ...mutationOptions,
    });
  };

  /**
   * Hook to create multiple records
   */
  const useCreateMany = (
    mutationOptions?: UseMutationOptions<T[], Error, Record<string, any>[]>
  ) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (data: Record<string, any>[]) => service.createMany(data),
      onSuccess: (data, variables) => {
        // Invalidate and refetch list queries
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        queryClient.invalidateQueries({ queryKey: queryKeys.count() });
        
        // Add the new items to the cache
        data.forEach(item => {
          queryClient.setQueryData(queryKeys.detail(item.id), item);
        });
        
        // Call custom onSuccess if provided
        mutationOptions?.onSuccess?.(data, variables, undefined);
      },
      ...mutationOptions,
    });
  };

  /**
   * Hook to update a record
   */
  const useUpdate = (
    mutationOptions?: UseMutationOptions<T, Error, { id: string | number; data: Record<string, any> }>
  ) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: ({ id, data }: { id: string | number; data: Record<string, any> }) => 
        service.update(id, data),
      onSuccess: (data, variables) => {
        // Update the item in the cache
        queryClient.setQueryData(queryKeys.detail(variables.id), data);
        
        // Invalidate list queries to ensure consistency
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        
        // Call custom onSuccess if provided
        mutationOptions?.onSuccess?.(data, variables, undefined);
      },
      ...mutationOptions,
    });
  };

  /**
   * Hook to update multiple records
   */
  const useUpdateMany = (
    mutationOptions?: UseMutationOptions<T[], Error, { id: string | number; data: Record<string, any> }[]>
  ) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (updates: { id: string | number; data: Record<string, any> }[]) => 
        service.updateMany(updates),
      onSuccess: (data, variables) => {
        // Update items in the cache
        data.forEach((item, index) => {
          queryClient.setQueryData(queryKeys.detail(variables[index].id), item);
        });
        
        // Invalidate list queries to ensure consistency
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        
        // Call custom onSuccess if provided
        mutationOptions?.onSuccess?.(data, variables, undefined);
      },
      ...mutationOptions,
    });
  };

  /**
   * Hook to upsert a record
   */
  const useUpsert = (
    mutationOptions?: UseMutationOptions<T, Error, { data: Record<string, any>; onConflict?: string }>
  ) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: ({ data, onConflict }: { data: Record<string, any>; onConflict?: string }) => 
        service.upsert(data, onConflict),
      onSuccess: (data, variables) => {
        // Update the item in the cache
        queryClient.setQueryData(queryKeys.detail(data.id), data);
        
        // Invalidate list queries to ensure consistency
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        queryClient.invalidateQueries({ queryKey: queryKeys.count() });
        
        // Call custom onSuccess if provided
        mutationOptions?.onSuccess?.(data, variables, undefined);
      },
      ...mutationOptions,
    });
  };

  /**
   * Hook to delete a record
   */
  const useDelete = (
    mutationOptions?: UseMutationOptions<void, Error, string | number>
  ) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (id: string | number) => service.delete(id),
      onSuccess: (data, id) => {
        // Remove the item from the cache
        queryClient.removeQueries({ queryKey: queryKeys.detail(id) });
        
        // Invalidate list queries to ensure consistency
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        queryClient.invalidateQueries({ queryKey: queryKeys.count() });
        
        // Call custom onSuccess if provided
        mutationOptions?.onSuccess?.(data, id, undefined);
      },
      ...mutationOptions,
    });
  };

  /**
   * Hook to bulk delete records
   */
  const useBulkDelete = (
    mutationOptions?: UseMutationOptions<void, Error, (string | number)[]>
  ) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (ids: (string | number)[]) => service.bulkDelete(ids),
      onSuccess: (data, ids) => {
        // Remove items from the cache
        ids.forEach(id => {
          queryClient.removeQueries({ queryKey: queryKeys.detail(id) });
        });
        
        // Invalidate list queries to ensure consistency
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        queryClient.invalidateQueries({ queryKey: queryKeys.count() });
        
        // Call custom onSuccess if provided
        mutationOptions?.onSuccess?.(data, ids, undefined);
      },
      ...mutationOptions,
    });
  };

  /**
   * Hook for optimistic updates
   */
  const useOptimisticUpdate = () => {
    const queryClient = useQueryClient();

    const optimisticUpdate = (
      id: string | number,
      updater: (old: T | undefined) => T
    ) => {
      queryClient.setQueryData(queryKeys.detail(id), updater);
    };

    const rollbackOptimisticUpdate = (id: string | number) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.detail(id) });
    };

    return { optimisticUpdate, rollbackOptimisticUpdate };
  };

  /**
   * Hook to invalidate all queries for this service
   */
  const useInvalidateAll = () => {
    const queryClient = useQueryClient();

    const invalidateAll = () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all });
    };

    const invalidateLists = () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
    };

    const invalidateDetail = (id: string | number) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.detail(id) });
    };

    return { invalidateAll, invalidateLists, invalidateDetail };
  };

  /**
   * Hook to prefetch data
   */
  const usePrefetch = () => {
    const queryClient = useQueryClient();

    const prefetchList = (options?: QueryOptions) => {
      return queryClient.prefetchQuery({
        queryKey: queryKeys.list(options?.filters),
        queryFn: () => service.getAll(options),
        staleTime: 5 * 60 * 1000,
      });
    };

    const prefetchDetail = (id: string | number, select?: string) => {
      return queryClient.prefetchQuery({
        queryKey: queryKeys.detail(id),
        queryFn: () => service.getById(id, select),
        staleTime: 5 * 60 * 1000,
      });
    };

    return { prefetchList, prefetchDetail };
  };

  return {
    // Query hooks
    useList,
    usePaginatedList,
    useDetail,
    useSearch,
    useCount,
    
    // Mutation hooks
    useCreate,
    useCreateMany,
    useUpdate,
    useUpdateMany,
    useUpsert,
    useDelete,
    useBulkDelete,
    
    // Utility hooks
    useOptimisticUpdate,
    useInvalidateAll,
    usePrefetch,
    
    // Query keys for manual cache management
    queryKeys,
  };
}

/**
 * Factory function to create a complete set of hooks for a Supabase service
 */
export function createServiceHooks<T = any>(service: SupabaseService) {
  return createSupabaseHooks<T>(service);
}

/**
 * Generic error handler for React Query
 */
export const defaultQueryErrorHandler = (error: Error) => {
  console.error('Query error:', error);
  // You can integrate with your toast/notification system here
};

/**
 * Default React Query configuration for Supabase services
 */
export const defaultQueryConfig = {
  queries: {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount: number, error: any) => {
      // Don't retry on 4xx errors (client errors)
      if (error?.status >= 400 && error?.status < 500) {
        return false;
      }
      // Retry up to 3 times for other errors
      return failureCount < 3;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  },
  mutations: {
    retry: (failureCount: number, error: any) => {
      // Don't retry on 4xx errors (client errors)
      if (error?.status >= 400 && error?.status < 500) {
        return false;
      }
      // Retry once for other errors
      return failureCount < 1;
    },
  },
};
