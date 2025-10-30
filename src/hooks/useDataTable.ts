import { useState, useCallback, useMemo } from 'react';

/**
 * Advanced data table state management hook
 * Provides column management, sorting, filtering, and pagination
 */
export interface DataTableColumn {
  id: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  hidden?: boolean;
  width?: number;
  align?: 'left' | 'center' | 'right';
}

export interface DataTableSort {
  field: string;
  order: 'ASC' | 'DESC';
}

export interface DataTableFilter {
  field: string;
  operator: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'gt' | 'lt' | 'gte' | 'lte';
  value: any;
}

export interface DataTablePagination {
  page: number;
  perPage: number;
  total?: number;
}

export interface DataTableState {
  columns: DataTableColumn[];
  sort?: DataTableSort;
  filters: DataTableFilter[];
  pagination: DataTablePagination;
  selectedIds: (string | number)[];
  hiddenColumns: string[];
  columnOrder: string[];
}

export interface UseDataTableOptions {
  defaultColumns: DataTableColumn[];
  defaultSort?: DataTableSort;
  defaultPerPage?: number;
  storageKey?: string;
  persistState?: boolean;
}

export function useDataTable(options: UseDataTableOptions) {
  const {
    defaultColumns,
    defaultSort,
    defaultPerPage = 25,
    storageKey,
    persistState = true
  } = options;

  // Load initial state from localStorage if available
  const getInitialState = useCallback((): DataTableState => {
    if (persistState && storageKey) {
      try {
        const saved = localStorage.getItem(`dataTable.${storageKey}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            columns: defaultColumns,
            sort: parsed.sort || defaultSort,
            filters: parsed.filters || [],
            pagination: {
              page: 1,
              perPage: parsed.pagination?.perPage || defaultPerPage,
              total: 0
            },
            selectedIds: [],
            hiddenColumns: parsed.hiddenColumns || [],
            columnOrder: parsed.columnOrder || defaultColumns.map(c => c.id)
          };
        }
      } catch {
        // Fall back to default state if parsing fails
      }
    }

    return {
      columns: defaultColumns,
      sort: defaultSort,
      filters: [],
      pagination: { page: 1, perPage: defaultPerPage, total: 0 },
      selectedIds: [],
      hiddenColumns: [],
      columnOrder: defaultColumns.map(c => c.id)
    };
  }, [defaultColumns, defaultSort, defaultPerPage, persistState, storageKey]);

  const [state, setState] = useState<DataTableState>(getInitialState);

  // Persist state to localStorage
  const persistStateToStorage = useCallback((newState: DataTableState) => {
    if (persistState && storageKey) {
      try {
        const toSave = {
          sort: newState.sort,
          filters: newState.filters,
          pagination: { perPage: newState.pagination.perPage },
          hiddenColumns: newState.hiddenColumns,
          columnOrder: newState.columnOrder
        };
        localStorage.setItem(`dataTable.${storageKey}`, JSON.stringify(toSave));
      } catch {
        // Ignore storage errors
      }
    }
  }, [persistState, storageKey]);

  // Column management
  const showColumn = useCallback((columnId: string) => {
    setState(prev => {
      const newState = {
        ...prev,
        hiddenColumns: prev.hiddenColumns.filter(id => id !== columnId)
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);

  const hideColumn = useCallback((columnId: string) => {
    setState(prev => {
      const newState = {
        ...prev,
        hiddenColumns: [...prev.hiddenColumns, columnId]
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);

  const reorderColumns = useCallback((newOrder: string[]) => {
    setState(prev => {
      const newState = {
        ...prev,
        columnOrder: newOrder
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);

  const resetColumns = useCallback(() => {
    setState(prev => {
      const newState = {
        ...prev,
        hiddenColumns: [],
        columnOrder: defaultColumns.map(c => c.id)
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [defaultColumns, persistStateToStorage]);

  // Sorting
  const setSort = useCallback((field: string, order?: 'ASC' | 'DESC') => {
    setState(prev => {
      const currentSort = prev.sort;
      let newOrder: 'ASC' | 'DESC' = 'ASC';
      
      if (order) {
        newOrder = order;
      } else if (currentSort?.field === field) {
        newOrder = currentSort.order === 'ASC' ? 'DESC' : 'ASC';
      }

      const newState = {
        ...prev,
        sort: { field, order: newOrder },
        pagination: { ...prev.pagination, page: 1 } // Reset to first page
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);

  const clearSort = useCallback(() => {
    setState(prev => {
      const newState = {
        ...prev,
        sort: undefined
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);

  // Filtering
  const addFilter = useCallback((filter: DataTableFilter) => {
    setState(prev => {
      const newState = {
        ...prev,
        filters: [...prev.filters.filter(f => f.field !== filter.field), filter],
        pagination: { ...prev.pagination, page: 1 } // Reset to first page
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);

  const removeFilter = useCallback((field: string) => {
    setState(prev => {
      const newState = {
        ...prev,
        filters: prev.filters.filter(f => f.field !== field),
        pagination: { ...prev.pagination, page: 1 } // Reset to first page
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);

  const clearFilters = useCallback(() => {
    setState(prev => {
      const newState = {
        ...prev,
        filters: [],
        pagination: { ...prev.pagination, page: 1 } // Reset to first page
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);

  // Pagination
  const setPage = useCallback((page: number) => {
    setState(prev => ({
      ...prev,
      pagination: { ...prev.pagination, page }
    }));
  }, []);

  const setPerPage = useCallback((perPage: number) => {
    setState(prev => {
      const newState = {
        ...prev,
        pagination: { ...prev.pagination, perPage, page: 1 }
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);

  const setTotal = useCallback((total: number) => {
    setState(prev => ({
      ...prev,
      pagination: { ...prev.pagination, total }
    }));
  }, []);

  // Selection
  const selectItem = useCallback((id: string | number) => {
    setState(prev => ({
      ...prev,
      selectedIds: [...prev.selectedIds, id]
    }));
  }, []);

  const deselectItem = useCallback((id: string | number) => {
    setState(prev => ({
      ...prev,
      selectedIds: prev.selectedIds.filter(selectedId => selectedId !== id)
    }));
  }, []);

  const toggleItem = useCallback((id: string | number) => {
    setState(prev => ({
      ...prev,
      selectedIds: prev.selectedIds.includes(id)
        ? prev.selectedIds.filter(selectedId => selectedId !== id)
        : [...prev.selectedIds, id]
    }));
  }, []);

  const selectAll = useCallback((ids: (string | number)[]) => {
    setState(prev => ({
      ...prev,
      selectedIds: ids
    }));
  }, []);

  const clearSelection = useCallback(() => {
    setState(prev => ({
      ...prev,
      selectedIds: []
    }));
  }, []);

  // Computed values
  const visibleColumns = useMemo(() => {
    return state.columnOrder
      .map(id => state.columns.find(col => col.id === id))
      .filter((col): col is DataTableColumn => 
        col !== undefined && !state.hiddenColumns.includes(col.id)
      );
  }, [state.columns, state.columnOrder, state.hiddenColumns]);

  const hasFilters = useMemo(() => state.filters.length > 0, [state.filters]);
  const hasSelection = useMemo(() => state.selectedIds.length > 0, [state.selectedIds]);

  // Reset all state
  const reset = useCallback(() => {
    const newState = getInitialState();
    setState(newState);
    persistStateToStorage(newState);
  }, [getInitialState, persistStateToStorage]);

  return {
    // State
    state,
    visibleColumns,
    hasFilters,
    hasSelection,

    // Column management
    showColumn,
    hideColumn,
    reorderColumns,
    resetColumns,

    // Sorting
    setSort,
    clearSort,

    // Filtering
    addFilter,
    removeFilter,
    clearFilters,

    // Pagination
    setPage,
    setPerPage,
    setTotal,

    // Selection
    selectItem,
    deselectItem,
    toggleItem,
    selectAll,
    clearSelection,

    // Utilities
    reset
  };
}

/**
 * Hook for managing column visibility and ordering
 */
export function useColumnManager(columns: DataTableColumn[], storageKey?: string) {
  const [hiddenColumns, setHiddenColumns] = useState<string[]>(() => {
    if (storageKey) {
      try {
        const saved = localStorage.getItem(`columnManager.${storageKey}`);
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [columnOrder, setColumnOrder] = useState<string[]>(() => {
    if (storageKey) {
      try {
        const saved = localStorage.getItem(`columnOrder.${storageKey}`);
        return saved ? JSON.parse(saved) : columns.map(c => c.id);
      } catch {
        return columns.map(c => c.id);
      }
    }
    return columns.map(c => c.id);
  });

  const persistState = useCallback(() => {
    if (storageKey) {
      try {
        localStorage.setItem(`columnManager.${storageKey}`, JSON.stringify(hiddenColumns));
        localStorage.setItem(`columnOrder.${storageKey}`, JSON.stringify(columnOrder));
      } catch {
        // Ignore storage errors
      }
    }
  }, [storageKey, hiddenColumns, columnOrder]);

  const toggleColumn = useCallback((columnId: string) => {
    setHiddenColumns(prev => {
      const newHidden = prev.includes(columnId)
        ? prev.filter(id => id !== columnId)
        : [...prev, columnId];
      
      // Persist after state update
      setTimeout(() => persistState(), 0);
      return newHidden;
    });
  }, [persistState]);

  const reorderColumns = useCallback((newOrder: string[]) => {
    setColumnOrder(newOrder);
    setTimeout(() => persistState(), 0);
  }, [persistState]);

  const resetColumns = useCallback(() => {
    setHiddenColumns([]);
    setColumnOrder(columns.map(c => c.id));
    setTimeout(() => persistState(), 0);
  }, [columns, persistState]);

  const visibleColumns = useMemo(() => {
    return columnOrder
      .map(id => columns.find(col => col.id === id))
      .filter((col): col is DataTableColumn => 
        col !== undefined && !hiddenColumns.includes(col.id)
      );
  }, [columns, columnOrder, hiddenColumns]);

  return {
    hiddenColumns,
    columnOrder,
    visibleColumns,
    toggleColumn,
    reorderColumns,
    resetColumns
  };
}
