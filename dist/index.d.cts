import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { ColumnDef } from '@tanstack/react-table';
import { ClassValue } from 'clsx';
import { SupabaseClient, User, Session } from '@supabase/supabase-js';
import * as zustand from 'zustand';
import * as _tanstack_query_core from '@tanstack/query-core';
import * as _tanstack_react_query from '@tanstack/react-query';
import { UseQueryOptions } from '@tanstack/react-query';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "icon" | "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare const Input: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;

declare const Label: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & React.RefAttributes<HTMLLabelElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

declare function Badge({ className, variant, asChild, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Card({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare function Table({ className, ...props }: React.ComponentProps<"table">): react_jsx_runtime.JSX.Element;
declare function TableHeader({ className, ...props }: React.ComponentProps<"thead">): react_jsx_runtime.JSX.Element;
declare function TableBody({ className, ...props }: React.ComponentProps<"tbody">): react_jsx_runtime.JSX.Element;
declare function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">): react_jsx_runtime.JSX.Element;
declare function TableRow({ className, ...props }: React.ComponentProps<"tr">): react_jsx_runtime.JSX.Element;
declare function TableHead({ className, ...props }: React.ComponentProps<"th">): react_jsx_runtime.JSX.Element;
declare function TableCell({ className, ...props }: React.ComponentProps<"td">): react_jsx_runtime.JSX.Element;
declare function TableCaption({ className, ...props }: React.ComponentProps<"caption">): react_jsx_runtime.JSX.Element;

type Theme = "light" | "dark" | "system";
type Ctx = {
    theme: Theme;
    setTheme: (t: Theme) => void;
};
declare const ThemeProvider: React__default.FC<React__default.PropsWithChildren<{
    defaultTheme?: Theme;
}>>;
declare const useTheme: () => Ctx;

declare const ThemeSwitch: React__default.FC<{
    className?: string;
}>;

interface DataTableProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
    onEditRow?: (row: T) => void;
    onDeleteRow?: (row: T) => void;
    onRowClick?: (row: T) => void;
    enableFiltering?: boolean;
    filterableColumns?: string[];
    stickyColumns?: string[];
    onBulkDelete?: (ids: (string | number)[]) => void;
    onBulkExport?: (ids: (string | number)[]) => void;
    initialPageSize?: number;
    pageSizeOptions?: number[];
    enableGlobalSearch?: boolean;
    enableColumnVisibility?: boolean;
    enableRowSelection?: boolean;
}
/**
 * Unified DataTable Component
 * Provides consistent data table functionality across all applications
 */
declare function DataTable<T extends Record<string, any>>({ data, columns: userColumns, onEditRow, onDeleteRow, onRowClick, enableFiltering, filterableColumns, stickyColumns, onBulkDelete, onBulkExport, initialPageSize, pageSizeOptions, enableGlobalSearch, enableColumnVisibility, enableRowSelection }: DataTableProps<T>): react_jsx_runtime.JSX.Element;

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React__default.ErrorInfo | null;
    errorId: string | null;
    retryCount: number;
}
interface ErrorBoundaryProps {
    children: React__default.ReactNode;
    fallback?: (error: Error, errorInfo: React__default.ErrorInfo, actions: {
        retry: () => void;
        reset: () => void;
        retryCount: number;
        maxRetries: number;
    }) => React__default.ReactNode;
    onError?: (error: Error, errorInfo: React__default.ErrorInfo) => void;
    maxRetries?: number;
}
/**
 * Unified Error Boundary Component
 * Provides comprehensive error handling for React components across all applications
 */
declare class ErrorBoundary extends React__default.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState>;
    componentDidCatch(error: Error, errorInfo: React__default.ErrorInfo): void;
    handleRetry: () => void;
    handleReset: () => void;
    handleReportIssue: () => void;
    render(): string | number | bigint | boolean | Iterable<React__default.ReactNode> | Promise<string | number | bigint | boolean | React__default.ReactPortal | React__default.ReactElement<unknown, string | React__default.JSXElementConstructor<any>> | Iterable<React__default.ReactNode> | null | undefined> | react_jsx_runtime.JSX.Element | null | undefined;
}
/**
 * Higher-order component for error boundary
 */
declare const withErrorBoundary: <P extends object>(WrappedComponent: React__default.ComponentType<P>, options?: Omit<ErrorBoundaryProps, "children">) => (props: P) => react_jsx_runtime.JSX.Element;
/**
 * Hook for error boundary functionality
 */
declare const useErrorBoundary: () => {
    captureError: (error: Error) => void;
    resetError: () => void;
};

interface HeaderProps {
    user?: {
        email?: string;
    } | null;
    onSignOut: () => void;
    onToggleSidebar: () => void;
    ThemeSwitch: React__default.ComponentType;
    Button: React__default.ComponentType<any>;
    MenuIcon: React__default.ComponentType<any>;
    LogOutIcon: React__default.ComponentType<any>;
}
declare function Header({ user, onSignOut, onToggleSidebar, ThemeSwitch, Button, MenuIcon, LogOutIcon }: HeaderProps): react_jsx_runtime.JSX.Element;

/**
 * Unified toast notification system
 * Combines the best features from both tracc and scheduler_demo
 */
/**
 * Show a validation error toast with formatted error messages
 * @param {string|Array} errors - Error message(s) to display
 */
declare const showValidationError: (errors: string | string[]) => void;
declare const showSuccess: (message: string) => void;
declare const showError: (message: string) => void;
declare const showWarning: (message: string) => void;
declare const showInfo: (message: string) => void;
declare const showToast: (message: string, options?: any) => string | number;
declare const dismissAll: () => string | number;
declare const dismiss: (id?: string | number) => string | number;

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 */
declare function cn(...inputs: ClassValue[]): string;
/**
 * Confirmation utility for user actions
 */
declare const confirmAction: (message: string) => boolean;
/**
 * Helper to get nested values via dot notation
 */
declare const getNested: (obj: any, path: string) => any;
/**
 * Format date for display
 */
declare const formatDate: (date: string | Date, format?: string) => string;
/**
 * Format datetime for display
 */
declare const formatDateTime: (datetime: string | Date) => string;
/**
 * Generate unique ID
 */
declare const generateId: () => string;
/**
 * Debounce function
 */
declare const debounce: <T extends (...args: any[]) => any>(func: T, wait: number) => ((...args: Parameters<T>) => void);
/**
 * Throttle function
 */
declare const throttle: <T extends (...args: any[]) => any>(func: T, limit: number) => ((...args: Parameters<T>) => void);

/**
 * Unified query options for database operations
 */
interface QueryOptions {
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
interface PaginationOptions {
    page?: number;
    perPage?: number;
}
/**
 * Advanced Base Service Class
 * Combines the best patterns from crm_demo, tracc, and scheduler_demo
 * Provides comprehensive CRUD operations with advanced filtering, pagination, and error handling
 */
declare class BaseService {
    protected client: SupabaseClient;
    protected tableName: string;
    constructor(client: SupabaseClient, tableName: string);
    /**
     * Get all records with advanced filtering and pagination
     */
    getAll(options?: QueryOptions): Promise<any[]>;
    /**
     * Get paginated records with total count
     */
    getPaginated(options?: QueryOptions & PaginationOptions): Promise<{
        data: any[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    }>;
    /**
     * Get a record by ID
     */
    getById(id: string | number, select?: string): Promise<any>;
    /**
     * Create a new record
     */
    create(data: Record<string, any>): Promise<any>;
    /**
     * Update a record
     */
    update(id: string | number, data: Record<string, any>): Promise<any>;
    /**
     * Delete a record
     */
    delete(id: string | number): Promise<void>;
    /**
     * Bulk delete records
     */
    bulkDelete(ids: (string | number)[]): Promise<void>;
    /**
     * Count records with optional filters
     */
    count(filters?: Record<string, any>): Promise<number>;
    /**
     * Search records with text search
     */
    search(searchTerm: string, searchFields?: string[], options?: QueryOptions): Promise<any[]>;
    /**
     * Handle Supabase errors with user-friendly messages
     */
    protected handleSupabaseError(error: any, context?: string): string;
}

/**
 * Unified Supabase client factory
 * Supports both environment variables and direct configuration
 */
interface SupabaseConfig {
    url: string;
    anonKey: string;
    options?: {
        auth?: {
            persistSession?: boolean;
            autoRefreshToken?: boolean;
        };
        realtime?: {
            params?: {
                eventsPerSecond?: number;
            };
        };
    };
}
/**
 * Create a Supabase client with unified configuration
 */
declare const createSupabaseClient: (config: SupabaseConfig) => SupabaseClient;
/**
 * Create Supabase client from environment variables
 * Note: This function should be used in the consuming application, not in the package
 */
declare const createSupabaseFromEnv: () => SupabaseClient;
/**
 * Handle Supabase errors with user-friendly messages
 */
declare const handleSupabaseError: (error: any, context?: string) => string;
/**
 * Check if Supabase connection is working
 */
declare const checkSupabaseConnection: (client: SupabaseClient, testTable?: string) => Promise<boolean>;

/**
 * Props for AuthProvider
 */
interface AuthProviderProps {
    children: ReactNode;
    supabaseClient: SupabaseClient;
    onAuthStateChange?: (user: User | null, session: Session | null) => void;
}
/**
 * Unified AuthProvider component
 * Works with any Supabase client and provides consistent auth interface
 */
declare const AuthProvider: React__default.FC<AuthProviderProps>;

/**
 * Shared Application Constants
 * Common constants used across multiple applications
 */
declare const ALERT_TYPES: {
    readonly SUCCESS: "success";
    readonly ERROR: "error";
    readonly WARNING: "warning";
    readonly INFO: "info";
};
declare const CONFIRMATION_TYPES: {
    readonly DANGER: "danger";
    readonly WARNING: "warning";
    readonly INFO: "info";
};
declare const TIME_CONSTANTS: {
    readonly MILLISECONDS_PER_SECOND: 1000;
    readonly SECONDS_PER_MINUTE: 60;
    readonly MINUTES_PER_HOUR: 60;
    readonly HOURS_PER_DAY: 24;
    readonly DAYS_PER_WEEK: 7;
    readonly DAYS_PER_YEAR: 365;
    readonly MILLISECONDS_PER_MINUTE: number;
    readonly MILLISECONDS_PER_HOUR: number;
    readonly MILLISECONDS_PER_DAY: number;
};
declare const VALIDATION_MESSAGES: {
    readonly REQUIRED: "This field is required";
    readonly INVALID_EMAIL: "Please enter a valid email address";
    readonly INVALID_DATE: "Please enter a valid date";
    readonly END_DATE_BEFORE_START: "End date cannot be before start date";
    readonly END_TIME_BEFORE_START: "End time must be after start time when dates are the same";
    readonly QUANTITY_COMPLETED_EXCEEDS_TOTAL: "Quantity completed cannot exceed total quantity";
};
declare const FIELD_CONFIGS: {
    readonly DECIMAL_PRECISION: {
        readonly ONE_DECIMAL: readonly ["setup_time", "changeover_time"];
        readonly TWO_DECIMAL: readonly ["cost", "price"];
        readonly PLAIN_NUMBER: readonly ["speed", "quantity"];
    };
    readonly FIELD_STEPS: {
        readonly TIME: 0.1;
        readonly COST: 0.01;
        readonly QUANTITY: 1;
        readonly DIMENSION: 1;
    };
};
declare const ERROR_TYPES: {
    readonly VALIDATION_ERROR: "VALIDATION_ERROR";
    readonly NETWORK_ERROR: "NETWORK_ERROR";
    readonly SERVER_ERROR: "SERVER_ERROR";
    readonly AUTHENTICATION_ERROR: "AUTHENTICATION_ERROR";
    readonly AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR";
    readonly NOT_FOUND_ERROR: "NOT_FOUND_ERROR";
    readonly BUSINESS_LOGIC_ERROR: "BUSINESS_LOGIC_ERROR";
    readonly UI_ERROR: "UI_ERROR";
    readonly API_ERROR: "API_ERROR";
    readonly TIMEOUT_ERROR: "TIMEOUT_ERROR";
    readonly PERMISSION_ERROR: "PERMISSION_ERROR";
    readonly DUPLICATE_ERROR: "DUPLICATE_ERROR";
};
declare const COMMON_STATUSES: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
    readonly IN_PROGRESS: "IN_PROGRESS";
};
declare const DATA_TABLE_DEFAULTS: {
    readonly PAGE_SIZE: 10;
    readonly PAGE_SIZE_OPTIONS: readonly [10, 25, 50, 100];
    readonly MAX_VISIBLE_PAGES: 5;
};
declare const DEPARTMENT_TYPES: {
    readonly PRINTING: "STAMPA";
    readonly PACKAGING: "CONFEZIONAMENTO";
};
declare const WORK_CENTERS: {
    readonly ZANICA: "ZANICA";
    readonly BUSTO_GAROLFO: "BUSTO_GAROLFO";
    readonly BOTH: "BOTH";
};
declare const MACHINE_STATUSES: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
};
declare const PRODUCT_TYPES: {
    readonly CREMA: "CREMA";
    readonly LIQUIDO: "LIQUIDO";
    readonly POLVERI: "POLVERI";
};
declare const SHIFT_TYPES: {
    readonly T1: "T1";
    readonly T2: "T2";
    readonly T3: "T3";
};
declare const SEAL_SIDES: {
    readonly THREE: 3;
    readonly FOUR: 4;
};
declare const TASK_STATUSES: {
    readonly NOT_SCHEDULED: "NOT SCHEDULED";
    readonly SCHEDULED: "SCHEDULED";
    readonly IN_PROGRESS: "IN PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
type AlertType = typeof ALERT_TYPES[keyof typeof ALERT_TYPES];
type ConfirmationType = typeof CONFIRMATION_TYPES[keyof typeof CONFIRMATION_TYPES];
type ErrorType = typeof ERROR_TYPES[keyof typeof ERROR_TYPES];
type CommonStatus = typeof COMMON_STATUSES[keyof typeof COMMON_STATUSES];
type DepartmentType = typeof DEPARTMENT_TYPES[keyof typeof DEPARTMENT_TYPES];
type WorkCenter = typeof WORK_CENTERS[keyof typeof WORK_CENTERS];
type MachineStatus = typeof MACHINE_STATUSES[keyof typeof MACHINE_STATUSES];
type ProductType = typeof PRODUCT_TYPES[keyof typeof PRODUCT_TYPES];
type ShiftType = typeof SHIFT_TYPES[keyof typeof SHIFT_TYPES];
type TaskStatus = typeof TASK_STATUSES[keyof typeof TASK_STATUSES];

interface ErrorHandlerOptions {
    logErrors?: boolean;
    showUserMessages?: boolean;
    maxRetries?: number;
    retryDelay?: number;
    onError?: (error: any, context: string) => void;
    onRetry?: (error: any, attempt: number, delay: number) => void;
    onFallback?: (error: any) => void;
}
interface AsyncErrorOptions extends ErrorHandlerOptions {
    context?: string;
    fallbackMessage?: string;
    retry?: boolean;
}
/**
 * Unified Error Handling Hook
 * Provides comprehensive error handling capabilities for React components
 */
declare const useErrorHandler: (options?: ErrorHandlerOptions) => {
    handleError: (error: any, context?: string, customOptions?: any) => Promise<{
        id: string;
        message: any;
        type: any;
        severity: any;
        context: string;
        timestamp: string;
        userMessage: any;
    }>;
    handleAsync: (asyncOperation: () => Promise<any>, options?: AsyncErrorOptions) => Promise<any>;
    handleValidationError: (message: string, details?: any) => Promise<{
        id: string;
        message: any;
        type: any;
        severity: any;
        context: string;
        timestamp: string;
        userMessage: any;
    }>;
    handleNetworkError: (message?: string) => Promise<{
        id: string;
        message: any;
        type: any;
        severity: any;
        context: string;
        timestamp: string;
        userMessage: any;
    }>;
    handleAuthError: (message?: string) => Promise<{
        id: string;
        message: any;
        type: any;
        severity: any;
        context: string;
        timestamp: string;
        userMessage: any;
    }>;
    clearErrors: () => void;
    clearError: (errorId: string) => void;
    getErrorsByType: (type: ErrorType) => any[];
    hasCriticalErrors: () => boolean;
    errors: any[];
    isRetrying: boolean;
    retryCount: number;
    retryOperation: (operation: () => Promise<any>, maxAttempts: number) => Promise<any>;
};
/**
 * Hook for handling form validation errors
 */
declare const useValidationErrorHandler: () => {
    handleFieldError: (field: string, message: string) => Promise<{
        id: string;
        message: any;
        type: any;
        severity: any;
        context: string;
        timestamp: string;
        userMessage: any;
    }>;
    handleRequiredFieldError: (field: string) => Promise<{
        id: string;
        message: any;
        type: any;
        severity: any;
        context: string;
        timestamp: string;
        userMessage: any;
    }>;
    clearErrors: () => void;
};

interface SidebarState {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
}
declare const useSidebar: zustand.UseBoundStore<zustand.StoreApi<SidebarState>>;

/**
 * Hook for data service operations with React Query
 */
declare function useDataService<T = any>(service: BaseService, resourceName: string): {
    useGetAll: (options?: QueryOptions, queryOptions?: Omit<UseQueryOptions<T[], Error>, "queryKey" | "queryFn">) => _tanstack_react_query.UseQueryResult<T[], Error>;
    useGetPaginated: (options?: QueryOptions & PaginationOptions, queryOptions?: Omit<UseQueryOptions<any, Error>, "queryKey" | "queryFn">) => _tanstack_react_query.UseQueryResult<any, Error>;
    useGetById: (id: string | number | null, select?: string, queryOptions?: Omit<UseQueryOptions<T, Error>, "queryKey" | "queryFn">) => _tanstack_react_query.UseQueryResult<_tanstack_query_core.NoInfer<T>, Error>;
    useSearch: (searchTerm: string, searchFields?: string[], options?: QueryOptions, queryOptions?: Omit<UseQueryOptions<T[], Error>, "queryKey" | "queryFn">) => _tanstack_react_query.UseQueryResult<T[], Error>;
    useCount: (filters?: Record<string, any>, queryOptions?: Omit<UseQueryOptions<number, Error>, "queryKey" | "queryFn">) => _tanstack_react_query.UseQueryResult<number, Error>;
    useCreate: () => _tanstack_react_query.UseMutationResult<any, Error, Record<string, any>, unknown>;
    useUpdate: () => _tanstack_react_query.UseMutationResult<any, Error, {
        id: string | number;
        data: Record<string, any>;
    }, unknown>;
    useDelete: () => _tanstack_react_query.UseMutationResult<void, Error, string | number, unknown>;
    useBulkDelete: () => _tanstack_react_query.UseMutationResult<void, Error, (string | number)[], unknown>;
    invalidateAll: () => Promise<void>;
    invalidateList: () => void;
    invalidateDetail: (id: string | number) => Promise<void>;
};

export { ALERT_TYPES, type AlertType, AuthProvider, Badge, BaseService, Button, COMMON_STATUSES, CONFIRMATION_TYPES, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, type CommonStatus, type ConfirmationType, DATA_TABLE_DEFAULTS, DEPARTMENT_TYPES, DataTable, type DepartmentType, ERROR_TYPES, ErrorBoundary, type ErrorType, FIELD_CONFIGS, Header, Input, Label, MACHINE_STATUSES, type MachineStatus, PRODUCT_TYPES, type ProductType, SEAL_SIDES, SHIFT_TYPES, type ShiftType, type SupabaseConfig, TASK_STATUSES, TIME_CONSTANTS, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, type TaskStatus, ThemeProvider, ThemeSwitch, VALIDATION_MESSAGES, WORK_CENTERS, type WorkCenter, badgeVariants, buttonVariants, checkSupabaseConnection, cn, confirmAction, createSupabaseClient, createSupabaseFromEnv, debounce, dismiss, dismissAll, formatDate, formatDateTime, generateId, getNested, handleSupabaseError, showError, showInfo, showSuccess, showToast, showValidationError, showWarning, throttle, useDataService, useErrorBoundary, useErrorHandler, useSidebar, useTheme, useValidationErrorHandler, withErrorBoundary };
