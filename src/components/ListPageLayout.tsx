import React from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from './DataTable';
import { Button } from './button';
import type { ColumnDef } from '@tanstack/react-table';

interface ListPageLayoutProps<T> {
  title: string;
  createButtonText?: string; // Made optional since we'll auto-generate it
  createButtonHref: string;
  entityName?: string; // New prop to specify the entity name for the button
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (row: T) => void;
  onEditRow?: (row: T) => void;
  onDeleteRow?: (row: T) => void;
  enableFiltering?: boolean;
  filterableColumns?: string[];
  enableGlobalSearch?: boolean;
  onBulkDelete?: (ids: (string | number)[]) => void;
  onBulkExport?: (ids: (string | number)[]) => void;
  loading?: boolean;
  emptyMessage?: string;
  detailComponent?: React.ReactNode;
  className?: string;
}

/**
 * Shared ListPageLayout Component
 * Provides consistent layout for all list pages across applications
 */
export function ListPageLayout<T extends Record<string, any>>({
  title,
  createButtonText,
  createButtonHref,
  entityName,
  data,
  columns,
  onRowClick,
  onEditRow,
  onDeleteRow,
  enableFiltering = true,
  filterableColumns = [],
  enableGlobalSearch = false,
  onBulkDelete,
  onBulkExport,
  loading = false,
  emptyMessage,
  detailComponent,
  className
}: ListPageLayoutProps<T>) {
  // Auto-generate standardized button text if not provided
  const standardizedButtonText = createButtonText || `+ New ${entityName || 'Item'}`;
  return (
    <div className={`space-y-1 ${className || ''}`}>
      {/* Header with title and create button */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        <Link to={createButtonHref}>
          <Button variant="outline">
            {standardizedButtonText}
          </Button>
        </Link>
      </div>
      
      {/* DataTable */}
      <DataTable
        data={data}
        columns={columns}
        onRowClick={onRowClick}
        onEditRow={onEditRow}
        onDeleteRow={onDeleteRow}
        enableFiltering={enableFiltering}
        filterableColumns={filterableColumns}
        enableGlobalSearch={enableGlobalSearch}
        onBulkDelete={onBulkDelete}
        onBulkExport={onBulkExport}
        loading={loading}
        emptyMessage={emptyMessage}
      />

      {/* Detail component (conditionally rendered) */}
      {detailComponent}
    </div>
  );
}
