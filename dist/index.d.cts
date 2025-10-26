import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { ColumnDef } from '@tanstack/react-table';
import { ClassValue } from 'clsx';
import { SupabaseClient, User, Session } from '@supabase/supabase-js';
import { ErrorType } from './constants.cjs';
export { ALERT_TYPES, AlertType, COMMON_STATUSES, CONFIRMATION_TYPES, CommonStatus, ConfirmationType, DATA_TABLE_DEFAULTS, DEPARTMENT_TYPES, DepartmentType, ERROR_TYPES, FIELD_CONFIGS, MACHINE_STATUSES, MachineStatus, PRODUCT_TYPES, ProductType, SEAL_SIDES, SHIFT_TYPES, ShiftType, TASK_STATUSES, TIME_CONSTANTS, TaskStatus, VALIDATION_MESSAGES, WORK_CENTERS, WorkCenter } from './constants.cjs';
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
 * Authentication context type
 */
interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    error: string | null;
    signIn: (email: string, password: string) => Promise<{
        error?: string;
    }>;
    signUp: (email: string, password: string, metadata?: any) => Promise<{
        error?: string;
    }>;
    signOut: () => Promise<void>;
    resetPassword: (email: string) => Promise<{
        error?: string;
    }>;
}
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
 * Hook to use authentication context
 */
declare const useAuth: () => AuthContextType;

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

export { type AuthContextType, AuthProvider, type AuthProviderProps, Badge, BaseService, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, DataTable, ErrorBoundary, ErrorType, Header, Input, Label, type SupabaseConfig, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, ThemeProvider, ThemeSwitch, badgeVariants, buttonVariants, checkSupabaseConnection, cn, confirmAction, createSupabaseClient, createSupabaseFromEnv, debounce, dismiss, dismissAll, formatDate, formatDateTime, generateId, getNested, handleSupabaseError, showError, showInfo, showSuccess, showToast, showValidationError, showWarning, throttle, useAuth, useDataService, useErrorBoundary, useErrorHandler, useSidebar, useTheme, useValidationErrorHandler, withErrorBoundary };
