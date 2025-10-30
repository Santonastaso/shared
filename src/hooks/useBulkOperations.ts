import { useCallback, useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';

/**
 * Advanced bulk operations hook for React Query
 * Provides optimistic updates and error handling for bulk operations
 */
export interface BulkOperationOptions<T = any> {
  onSuccess?: (results: T[]) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
  optimisticUpdate?: boolean;
  invalidateQueries?: string[][];
}

export interface BulkExportOptions {
  format?: 'csv' | 'json' | 'xlsx';
  filename?: string;
  columns?: string[];
  includeHeaders?: boolean;
}

export function useBulkOperations<T = any>(resource: string) {
  const queryClient = useQueryClient();

  const bulkUpdate = useCallback(
    async (
      items: Array<{ id: string | number; data: Partial<T> }>,
      mutationFn: (item: { id: string | number; data: Partial<T> }) => Promise<T>,
      options: BulkOperationOptions<T> = {}
    ) => {
      const { onSuccess, onError, onSettled, optimisticUpdate = true, invalidateQueries = [] } = options;

      try {
        // Optimistic update
        if (optimisticUpdate) {
          queryClient.setQueryData([resource], (oldData: T[] | undefined) => {
            if (!oldData) return oldData;
            return oldData.map((item: any) => {
              const update = items.find(u => u.id === item.id);
              return update ? { ...item, ...update.data } : item;
            });
          });
        }

        // Execute bulk operations
        const results = await Promise.all(items.map(mutationFn));

        // Invalidate related queries
        invalidateQueries.forEach(queryKey => {
          queryClient.invalidateQueries({ queryKey });
        });

        onSuccess?.(results);
        return results;
      } catch (error) {
        // Revert optimistic update on error
        if (optimisticUpdate) {
          queryClient.invalidateQueries({ queryKey: [resource] });
        }
        onError?.(error as Error);
        throw error;
      } finally {
        onSettled?.();
      }
    },
    [queryClient, resource]
  );

  const bulkDelete = useCallback(
    async (
      ids: Array<string | number>,
      mutationFn: (id: string | number) => Promise<void>,
      options: BulkOperationOptions = {}
    ) => {
      const { onSuccess, onError, onSettled, optimisticUpdate = true, invalidateQueries = [] } = options;

      try {
        // Optimistic update
        if (optimisticUpdate) {
          queryClient.setQueryData([resource], (oldData: T[] | undefined) => {
            if (!oldData) return oldData;
            return oldData.filter((item: any) => !ids.includes(item.id));
          });
        }

        // Execute bulk deletions
        await Promise.all(ids.map(mutationFn));

        // Invalidate related queries
        invalidateQueries.forEach(queryKey => {
          queryClient.invalidateQueries({ queryKey });
        });

        onSuccess?.(ids as any);
        return ids;
      } catch (error) {
        // Revert optimistic update on error
        if (optimisticUpdate) {
          queryClient.invalidateQueries({ queryKey: [resource] });
        }
        onError?.(error as Error);
        throw error;
      } finally {
        onSettled?.();
      }
    },
    [queryClient, resource]
  );

  const bulkExport = useCallback(
    (data: T[], options: BulkExportOptions = {}) => {
      const {
        format = 'csv',
        filename = `${resource}-export`,
        columns,
        includeHeaders = true
      } = options;

      if (!data || data.length === 0) {
        throw new Error('No data to export');
      }

      switch (format) {
        case 'csv':
          return exportToCSV(data, { filename, columns, includeHeaders });
        case 'json':
          return exportToJSON(data, { filename });
        default:
          throw new Error(`Unsupported export format: ${format}`);
      }
    },
    [resource]
  );

  return useMemo(
    () => ({
      bulkUpdate,
      bulkDelete,
      bulkExport,
    }),
    [bulkUpdate, bulkDelete, bulkExport]
  );
}

// Helper functions for export
function exportToCSV<T>(
  data: T[],
  options: { filename: string; columns?: string[]; includeHeaders: boolean }
) {
  const { filename, columns, includeHeaders } = options;
  
  if (data.length === 0) return;

  const firstItem = data[0] as any;
  const headers = columns || Object.keys(firstItem);
  
  let csvContent = '';
  
  // Add headers
  if (includeHeaders) {
    csvContent += headers.join(',') + '\n';
  }
  
  // Add data rows
  data.forEach((item: any) => {
    const row = headers.map(header => {
      const value = item[header];
      // Escape commas and quotes in CSV
      if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value ?? '';
    });
    csvContent += row.join(',') + '\n';
  });

  // Download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportToJSON<T>(data: T[], options: { filename: string }) {
  const { filename } = options;
  
  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.json`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Hook for managing saved queries and filters
 */
export interface SavedQuery {
  id: string;
  label: string;
  filter?: Record<string, any>;
  sort?: { field: string; order: 'ASC' | 'DESC' };
  columns?: string[];
  perPage?: number;
}

export function useSavedQueries(resource: string) {
  const storageKey = `${resource}.savedQueries`;

  const getSavedQueries = useCallback((): SavedQuery[] => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }, [storageKey]);

  const saveQuery = useCallback((query: Omit<SavedQuery, 'id'>) => {
    const queries = getSavedQueries();
    const newQuery: SavedQuery = {
      ...query,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    const updated = [...queries, newQuery];
    localStorage.setItem(storageKey, JSON.stringify(updated));
    return newQuery;
  }, [getSavedQueries, storageKey]);

  const deleteQuery = useCallback((id: string) => {
    const queries = getSavedQueries();
    const updated = queries.filter(q => q.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  }, [getSavedQueries, storageKey]);

  const updateQuery = useCallback((id: string, updates: Partial<SavedQuery>) => {
    const queries = getSavedQueries();
    const updated = queries.map(q => q.id === id ? { ...q, ...updates } : q);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  }, [getSavedQueries, storageKey]);

  return useMemo(
    () => ({
      queries: getSavedQueries(),
      saveQuery,
      deleteQuery,
      updateQuery,
    }),
    [getSavedQueries, saveQuery, deleteQuery, updateQuery]
  );
}
