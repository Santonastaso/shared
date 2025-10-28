import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

/**
 * Generic entity state interface
 */
export interface EntityState<T> {
  entities: T[];
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

/**
 * Generic selectors for any entity type
 */
export interface EntitySelectors<T> {
  getEntities: () => T[];
  getEntityById: (id: string | number) => T | undefined;
  getEntitiesByField: (field: keyof T, value: any) => T[];
  getEntitiesCount: () => number;
  getLoadingState: () => boolean;
  getErrorState: () => string | null;
  isInitialized: () => boolean;
}

/**
 * Generic actions for any entity type
 */
export interface EntityActions<T> {
  setEntities: (entities: T[]) => void;
  addEntity: (entity: T) => void;
  updateEntity: (id: string | number, updates: Partial<T>) => void;
  removeEntity: (id: string | number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setInitialized: (initialized: boolean) => void;
  reset: () => void;
  
  // Utility actions
  cleanupDuplicates: () => void;
  sortEntitiesByDate: (ascending?: boolean) => void;
  sortEntitiesByField: (field: keyof T, ascending?: boolean) => void;
  filterEntitiesByDateRange: (startDate: string, endDate: string, dateField?: keyof T) => T[];
}

/**
 * Complete entity store interface
 */
export interface EntityStore<T> extends EntityState<T>, EntitySelectors<T>, EntityActions<T> {}

/**
 * Create selectors for any entity type
 */
const createSelectors = <T extends { id: string | number; created_at?: string }>(
  entityKey: keyof EntityState<T>
) => (
  get: () => EntityState<T>
): EntitySelectors<T> => ({
  getEntities: () => get().entities,
  getEntityById: (id: string | number) => get().entities.find(entity => entity.id === id),
  getEntitiesByField: (field: keyof T, value: any) => 
    get().entities.filter(entity => entity[field] === value),
  getEntitiesCount: () => get().entities.length,
  getLoadingState: () => get().loading,
  getErrorState: () => get().error,
  isInitialized: () => get().initialized,
});

/**
 * Create utility actions for any entity type
 */
const createActions = <T extends { id: string | number; created_at?: string }>(
  entityKey: keyof EntityState<T>
) => (
  set: (partial: Partial<EntityState<T>>) => void,
  get: () => EntityState<T>
): EntityActions<T> => ({
  setEntities: (entities: T[]) => set({ entities }),
  
  addEntity: (entity: T) => {
    const state = get();
    set({ entities: [entity, ...state.entities] });
  },

  updateEntity: (id: string | number, updates: Partial<T>) => {
    const state = get();
    const updatedEntities = state.entities.map(entity => 
      entity.id === id ? { ...entity, ...updates } : entity
    );
    set({ entities: updatedEntities });
  },

  removeEntity: (id: string | number) => {
    const state = get();
    const filteredEntities = state.entities.filter(entity => entity.id !== id);
    set({ entities: filteredEntities });
  },

  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
  setInitialized: (initialized: boolean) => set({ initialized }),

  reset: () => set({ 
    entities: [], 
    loading: false, 
    error: null, 
    initialized: false 
  }),

  cleanupDuplicates: () => {
    const state = get();
    const uniqueEntities = [];
    const seenIds = new Set();
    
    state.entities.forEach(entity => {
      if (!seenIds.has(entity.id)) {
        seenIds.add(entity.id);
        uniqueEntities.push(entity);
      }
    });
    
    set({ entities: uniqueEntities });
  },

  sortEntitiesByDate: (ascending = false) => {
    const state = get();
    const sortedEntities = [...state.entities].sort((a, b) => {
      const dateA = new Date(a.created_at || 0);
      const dateB = new Date(b.created_at || 0);
      return ascending ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
    set({ entities: sortedEntities });
  },

  sortEntitiesByField: (field: keyof T, ascending = true) => {
    const state = get();
    const sortedEntities = [...state.entities].sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];
      
      if (valueA < valueB) return ascending ? -1 : 1;
      if (valueA > valueB) return ascending ? 1 : -1;
      return 0;
    });
    set({ entities: sortedEntities });
  },

  filterEntitiesByDateRange: (startDate: string, endDate: string, dateField: keyof T = 'created_at' as keyof T) => {
    const state = get();
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return state.entities.filter(entity => {
      const entityDate = new Date(entity[dateField] as any);
      return entityDate >= start && entityDate <= end;
    });
  },
});

/**
 * Create a standardized store for any entity type
 */
export function createEntityStore<T extends { id: string | number; created_at?: string }>(
  entityName: string,
  customActions?: (
    set: (partial: Partial<EntityState<T>>) => void,
    get: () => EntityState<T>
  ) => Record<string, any>,
  customSelectors?: (
    get: () => EntityState<T>
  ) => Record<string, any>,
  persistOptions?: PersistOptions<EntityState<T>>
) {
  const initialState: EntityState<T> = {
    entities: [],
    loading: false,
    error: null,
    initialized: false,
  };

  const storeCreator: StateCreator<EntityStore<T>> = (set, get) => ({
    ...initialState,
    ...createSelectors<T>('entities')(get),
    ...createActions<T>('entities')(set, get),
    ...(customActions ? customActions(set, get) : {}),
    ...(customSelectors ? customSelectors(get) : {}),
  });

  if (persistOptions) {
    return create<EntityStore<T>>()(
      persist(storeCreator, {
        name: `${entityName}-store`,
        ...persistOptions,
      })
    );
  }

  return create<EntityStore<T>>()(storeCreator);
}

/**
 * UI Store interface for common UI state management
 */
export interface UIState {
  // Loading states
  loading: boolean;
  loadingStates: Record<string, boolean>;
  
  // Error states
  error: string | null;
  errors: Record<string, string | null>;
  
  // Modal states
  modals: Record<string, boolean>;
  
  // Form states
  forms: Record<string, any>;
  
  // Filter states
  filters: Record<string, any>;
  
  // Notification states
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    timestamp: number;
  }>;
  
  // General UI states
  sidebarOpen: boolean;
  theme: 'light' | 'dark' | 'system';
  initialized: boolean;
}

/**
 * UI Store actions
 */
export interface UIActions {
  // Loading actions
  setLoading: (loading: boolean) => void;
  setLoadingState: (key: string, loading: boolean) => void;
  getLoadingState: (key?: string) => boolean;
  
  // Error actions
  setError: (error: string | null) => void;
  setErrorState: (key: string, error: string | null) => void;
  getErrorState: (key?: string) => string | null;
  clearErrors: () => void;
  
  // Modal actions
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  toggleModal: (modalName: string) => void;
  isModalOpen: (modalName: string) => boolean;
  closeAllModals: () => void;
  
  // Form actions
  setFormData: (formName: string, data: any) => void;
  getFormData: (formName: string) => any;
  clearFormData: (formName: string) => void;
  clearAllForms: () => void;
  
  // Filter actions
  setFilter: (filterName: string, value: any) => void;
  getFilter: (filterName: string) => any;
  clearFilter: (filterName: string) => void;
  clearAllFilters: () => void;
  
  // Notification actions
  addNotification: (notification: Omit<UIState['notifications'][0], 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  
  // General UI actions
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setTheme: (theme: UIState['theme']) => void;
  setInitialized: (initialized: boolean) => void;
  
  // Reset
  reset: () => void;
}

/**
 * Complete UI store interface
 */
export interface UIStore extends UIState, UIActions {}

/**
 * Create a standardized UI store
 */
export function createUIStore(
  customActions?: (
    set: (partial: Partial<UIState>) => void,
    get: () => UIState
  ) => Record<string, any>,
  persistOptions?: PersistOptions<UIState>
) {
  const initialState: UIState = {
    loading: false,
    loadingStates: {},
    error: null,
    errors: {},
    modals: {},
    forms: {},
    filters: {},
    notifications: [],
    sidebarOpen: false,
    theme: 'system',
    initialized: false,
  };

  const storeCreator: StateCreator<UIStore> = (set, get) => ({
    ...initialState,
    
    // Loading actions
    setLoading: (loading: boolean) => set({ loading }),
    setLoadingState: (key: string, loading: boolean) => {
      const state = get();
      set({ loadingStates: { ...state.loadingStates, [key]: loading } });
    },
    getLoadingState: (key?: string) => {
      const state = get();
      return key ? state.loadingStates[key] || false : state.loading;
    },
    
    // Error actions
    setError: (error: string | null) => set({ error }),
    setErrorState: (key: string, error: string | null) => {
      const state = get();
      set({ errors: { ...state.errors, [key]: error } });
    },
    getErrorState: (key?: string) => {
      const state = get();
      return key ? state.errors[key] || null : state.error;
    },
    clearErrors: () => set({ error: null, errors: {} }),
    
    // Modal actions
    openModal: (modalName: string) => {
      const state = get();
      set({ modals: { ...state.modals, [modalName]: true } });
    },
    closeModal: (modalName: string) => {
      const state = get();
      set({ modals: { ...state.modals, [modalName]: false } });
    },
    toggleModal: (modalName: string) => {
      const state = get();
      const isOpen = state.modals[modalName] || false;
      set({ modals: { ...state.modals, [modalName]: !isOpen } });
    },
    isModalOpen: (modalName: string) => {
      const state = get();
      return state.modals[modalName] || false;
    },
    closeAllModals: () => set({ modals: {} }),
    
    // Form actions
    setFormData: (formName: string, data: any) => {
      const state = get();
      set({ forms: { ...state.forms, [formName]: data } });
    },
    getFormData: (formName: string) => {
      const state = get();
      return state.forms[formName];
    },
    clearFormData: (formName: string) => {
      const state = get();
      const { [formName]: _, ...rest } = state.forms;
      set({ forms: rest });
    },
    clearAllForms: () => set({ forms: {} }),
    
    // Filter actions
    setFilter: (filterName: string, value: any) => {
      const state = get();
      set({ filters: { ...state.filters, [filterName]: value } });
    },
    getFilter: (filterName: string) => {
      const state = get();
      return state.filters[filterName];
    },
    clearFilter: (filterName: string) => {
      const state = get();
      const { [filterName]: _, ...rest } = state.filters;
      set({ filters: rest });
    },
    clearAllFilters: () => set({ filters: {} }),
    
    // Notification actions
    addNotification: (notification) => {
      const state = get();
      const newNotification = {
        ...notification,
        id: `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: Date.now(),
      };
      set({ notifications: [...state.notifications, newNotification] });
    },
    removeNotification: (id: string) => {
      const state = get();
      set({ notifications: state.notifications.filter(n => n.id !== id) });
    },
    clearNotifications: () => set({ notifications: [] }),
    
    // General UI actions
    setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
    toggleSidebar: () => {
      const state = get();
      set({ sidebarOpen: !state.sidebarOpen });
    },
    setTheme: (theme: UIState['theme']) => set({ theme }),
    setInitialized: (initialized: boolean) => set({ initialized }),
    
    // Reset
    reset: () => set(initialState),
    
    // Custom actions
    ...(customActions ? customActions(set, get) : {}),
  });

  if (persistOptions) {
    return create<UIStore>()(
      persist(storeCreator, {
        name: 'ui-store',
        ...persistOptions,
      })
    );
  }

  return create<UIStore>()(storeCreator);
}

/**
 * Specialized store creators for common patterns
 */

/**
 * Create a CRUD store for entities with standard CRUD operations
 */
export function createCRUDStore<T extends { id: string | number; created_at?: string }>(
  entityName: string,
  persistOptions?: PersistOptions<EntityState<T>>
) {
  return createEntityStore<T>(
    entityName,
    (set, get) => ({
      // Add CRUD-specific actions here if needed
      bulkUpdate: (updates: Array<{ id: string | number; data: Partial<T> }>) => {
        const state = get();
        const updatedEntities = state.entities.map(entity => {
          const update = updates.find(u => u.id === entity.id);
          return update ? { ...entity, ...update.data } : entity;
        });
        set({ entities: updatedEntities });
      },
      
      bulkDelete: (ids: (string | number)[]) => {
        const state = get();
        const filteredEntities = state.entities.filter(entity => !ids.includes(entity.id));
        set({ entities: filteredEntities });
      },
    }),
    undefined,
    persistOptions
  );
}

/**
 * Create a paginated store for entities with pagination support
 */
export interface PaginatedState<T> extends EntityState<T> {
  currentPage: number;
  perPage: number;
  totalPages: number;
  totalCount: number;
}

export function createPaginatedStore<T extends { id: string | number; created_at?: string }>(
  entityName: string,
  defaultPerPage = 10,
  persistOptions?: PersistOptions<PaginatedState<T>>
) {
  const initialState: PaginatedState<T> = {
    entities: [],
    loading: false,
    error: null,
    initialized: false,
    currentPage: 1,
    perPage: defaultPerPage,
    totalPages: 0,
    totalCount: 0,
  };

  const storeCreator: StateCreator<PaginatedState<T> & EntityActions<T> & {
    setPage: (page: number) => void;
    setPerPage: (perPage: number) => void;
    setPaginationData: (data: { totalPages: number; totalCount: number }) => void;
    getPaginatedEntities: () => T[];
    hasNextPage: () => boolean;
    hasPreviousPage: () => boolean;
  }> = (set, get) => ({
    ...initialState,
    ...createActions<T>('entities')(set as any, get as any),
    
    setPage: (page: number) => set({ currentPage: page }),
    setPerPage: (perPage: number) => set({ perPage, currentPage: 1 }),
    setPaginationData: (data: { totalPages: number; totalCount: number }) => set(data),
    
    getPaginatedEntities: () => {
      const state = get();
      const startIndex = (state.currentPage - 1) * state.perPage;
      const endIndex = startIndex + state.perPage;
      return state.entities.slice(startIndex, endIndex);
    },
    
    hasNextPage: () => {
      const state = get();
      return state.currentPage < state.totalPages;
    },
    
    hasPreviousPage: () => {
      const state = get();
      return state.currentPage > 1;
    },
  });

  if (persistOptions) {
    return create()(
      persist(storeCreator, {
        name: `${entityName}-paginated-store`,
        ...persistOptions,
      })
    );
  }

  return create()(storeCreator);
}

/**
 * Export commonly used store types
 */
export type { EntityState, EntitySelectors, EntityActions, EntityStore, UIState, UIActions, UIStore };
