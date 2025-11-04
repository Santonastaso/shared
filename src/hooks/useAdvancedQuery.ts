import { useQuery, useMutation, useQueryClient, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

/**
 * Advanced React Query patterns with optimistic updates, error handling, and caching strategies
 */

export interface OptimisticUpdateOptions<TData, TVariables> {
  updateFn: (oldData: TData | undefined, variables: TVariables) => TData | undefined;
  rollbackOnError?: boolean;
}

export interface AdvancedQueryOptions<TData, TError, TQueryKey> extends UseQueryOptions<TData, TError, TData, TQueryKey> {
  optimisticUpdate?: OptimisticUpdateOptions<TData, any>;
  invalidateOnWindowFocus?: boolean;
  backgroundRefetch?: boolean;
  retryOnNetworkError?: boolean;
}

export interface AdvancedMutationOptions<TData, TError, TVariables> extends UseMutationOptions<TData, TError, TVariables> {
  optimisticUpdate?: OptimisticUpdateOptions<any, TVariables>;
  invalidateQueries?: string[][];
  updateQueries?: Array<{
    queryKey: string[];
    updateFn: (oldData: any, newData: TData, variables: TVariables) => any;
  }>;
}

/**
 * Enhanced useQuery with advanced caching and error handling
 */
export function useAdvancedQuery<TData, TError = Error, TQueryKey extends readonly unknown[] = readonly string[]>(
  queryKey: TQueryKey,
  queryFn: () => Promise<TData>,
  options: AdvancedQueryOptions<TData, TError, TQueryKey> = {}
) {
  const {
    invalidateOnWindowFocus = false,
    backgroundRefetch = true,
    retryOnNetworkError = true,
    ...queryOptions
  } = options;

  return useQuery({
    queryKey,
    queryFn,
    staleTime: 5 * 60 * 1000, // 5 minutes default
    gcTime: 10 * 60 * 1000, // 10 minutes default (was cacheTime)
    refetchOnWindowFocus: invalidateOnWindowFocus,
    refetchInBackground: backgroundRefetch,
    retry: (failureCount, error: any) => {
      // Don't retry on 4xx errors (client errors)
      if (error?.status >= 400 && error?.status < 500) {
        return false;
      }
      
      // Retry network errors if enabled
      if (retryOnNetworkError && (error?.code === 'NETWORK_ERROR' || !navigator.onLine)) {
        return failureCount < 3;
      }
      
      // Default retry logic
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    ...queryOptions,
  });
}

/**
 * Enhanced useMutation with optimistic updates and advanced error handling
 */
export function useAdvancedMutation<TData, TError = Error, TVariables = void>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options: AdvancedMutationOptions<TData, TError, TVariables> = {}
) {
  const queryClient = useQueryClient();
  const {
    optimisticUpdate,
    invalidateQueries = [],
    updateQueries = [],
    onSuccess,
    onError,
    onSettled,
    ...mutationOptions
  } = options;

  return useMutation({
    mutationFn,
    onMutate: async (variables) => {
      // Apply optimistic update if configured
      if (optimisticUpdate) {
        const { updateFn } = optimisticUpdate;
        
        // Cancel outgoing refetches
        await queryClient.cancelQueries();
        
        // Snapshot previous values
        const previousData = queryClient.getQueryData(invalidateQueries[0] || []);
        
        // Optimistically update
        if (invalidateQueries[0]) {
          queryClient.setQueryData(invalidateQueries[0], (oldData) => 
            updateFn(oldData, variables)
          );
        }
        
        return { previousData };
      }
    },
    onSuccess: (data, variables, context) => {
      // Update specific queries
      updateQueries.forEach(({ queryKey, updateFn }) => {
        queryClient.setQueryData(queryKey, (oldData) => 
          updateFn(oldData, data, variables)
        );
      });
      
      // Invalidate queries
      invalidateQueries.forEach(queryKey => {
        queryClient.invalidateQueries({ queryKey });
      });
      
      onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      // Rollback optimistic update on error
      if (optimisticUpdate?.rollbackOnError !== false && context?.previousData && invalidateQueries[0]) {
        queryClient.setQueryData(invalidateQueries[0], context.previousData);
      }
      
      onError?.(error, variables, context);
    },
    onSettled: (data, error, variables, context) => {
      // Always refetch after mutation settles to ensure consistency
      invalidateQueries.forEach(queryKey => {
        queryClient.invalidateQueries({ queryKey });
      });
      
      onSettled?.(data, error, variables, context);
    },
    ...mutationOptions,
  });
}

/**
 * Hook for managing infinite queries with advanced features
 */
export function useAdvancedInfiniteQuery<TData, TError = Error>(
  queryKey: readonly unknown[],
  queryFn: ({ pageParam }: { pageParam: unknown }) => Promise<TData>,
  options: {
    getNextPageParam?: (lastPage: TData, allPages: TData[]) => unknown;
    getPreviousPageParam?: (firstPage: TData, allPages: TData[]) => unknown;
    initialPageParam?: unknown;
    maxPages?: number;
    staleTime?: number;
    gcTime?: number;
  } = {}
) {
  const {
    getNextPageParam = () => undefined,
    getPreviousPageParam = () => undefined,
    initialPageParam = 1,
    maxPages = 10,
    staleTime = 5 * 60 * 1000,
    gcTime = 10 * 60 * 1000,
  } = options;

  return useQuery({
    queryKey,
    queryFn: () => queryFn({ pageParam: initialPageParam }),
    staleTime,
    gcTime,
    // Note: useInfiniteQuery would be used here in a real implementation
    // This is a simplified version for demonstration
  });
}

/**
 * Hook for managing dependent queries
 */
export function useDependentQueries<T1, T2>(
  firstQuery: {
    queryKey: readonly unknown[];
    queryFn: () => Promise<T1>;
    options?: UseQueryOptions<T1>;
  },
  secondQuery: {
    queryKey: (data: T1) => readonly unknown[];
    queryFn: (data: T1) => Promise<T2>;
    options?: UseQueryOptions<T2>;
  }
) {
  const first = useQuery({
    queryKey: firstQuery.queryKey,
    queryFn: firstQuery.queryFn,
    ...firstQuery.options,
  });

  const second = useQuery({
    queryKey: first.data ? secondQuery.queryKey(first.data) : ['dependent-disabled'],
    queryFn: () => first.data ? secondQuery.queryFn(first.data) : Promise.reject('No data'),
    enabled: !!first.data && !first.isError,
    ...secondQuery.options,
  });

  return {
    first,
    second,
    isLoading: first.isLoading || (first.data && second.isLoading),
    isError: first.isError || second.isError,
    error: first.error || second.error,
    data: second.data,
  };
}

/**
 * Hook for managing query synchronization across components
 */
export function useQuerySync<TData>(
  queryKey: readonly unknown[],
  onDataChange?: (data: TData | undefined) => void
) {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<TData>(queryKey);

  const setData = useCallback((updater: TData | ((prev: TData | undefined) => TData)) => {
    queryClient.setQueryData(queryKey, updater);
  }, [queryClient, queryKey]);

  const invalidate = useCallback(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [queryClient, queryKey]);

  const refetch = useCallback(() => {
    return queryClient.refetchQueries({ queryKey });
  }, [queryClient, queryKey]);

  // Call onDataChange when data changes
  useMemo(() => {
    onDataChange?.(data);
  }, [data, onDataChange]);

  return {
    data,
    setData,
    invalidate,
    refetch,
  };
}

/**
 * Hook for managing background sync and offline support
 */
export function useOfflineSync<TData>(
  queryKey: readonly unknown[],
  queryFn: () => Promise<TData>,
  options: {
    syncInterval?: number;
    retryOnReconnect?: boolean;
    persistToStorage?: boolean;
    storageKey?: string;
  } = {}
) {
  const {
    syncInterval = 30000, // 30 seconds
    retryOnReconnect = true,
    persistToStorage = false,
    storageKey
  } = options;

  const queryClient = useQueryClient();

  // Load from storage on mount
  useMemo(() => {
    if (persistToStorage && storageKey) {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
          const data = JSON.parse(stored);
          queryClient.setQueryData(queryKey, data);
        }
      } catch {
        // Ignore storage errors
      }
    }
  }, [queryClient, queryKey, persistToStorage, storageKey]);

  const query = useQuery({
    queryKey,
    queryFn,
    staleTime: syncInterval,
    refetchInterval: navigator.onLine ? syncInterval : false,
    refetchIntervalInBackground: true,
    retry: (failureCount, error: any) => {
      // Don't retry if offline
      if (!navigator.onLine) return false;
      return failureCount < 3;
    },
  });

  // Persist to storage when data changes
  useMemo(() => {
    if (persistToStorage && storageKey && query.data) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(query.data));
      } catch {
        // Ignore storage errors
      }
    }
  }, [query.data, persistToStorage, storageKey]);

  // Refetch when coming back online
  useMemo(() => {
    if (retryOnReconnect) {
      const handleOnline = () => {
        queryClient.refetchQueries({ queryKey });
      };

      window.addEventListener('online', handleOnline);
      return () => window.removeEventListener('online', handleOnline);
    }
  }, [queryClient, queryKey, retryOnReconnect]);

  return query;
}
