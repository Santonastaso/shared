import React from 'react';
import GenericForm from './GenericForm';

// Form configuration types (based on GenericForm documentation)
interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<{value: string | number; label: string}>;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  validation?: Record<string, any>;
  conditional?: (data: any) => boolean;
}

interface FormSection {
  title: string;
  fields: FormField[];
  gridCols?: string;
}

type FormConfig = FormField[] | FormSection[];

interface FormPageLayoutProps {
  title: string;
  editTitle?: string;
  isEditMode?: boolean;
  formConfig: FormConfig;
  initialData?: Record<string, any>;
  onSubmit: (data: any) => void;
  onCancel?: () => void;
  showCancel?: boolean;
  isLoading?: boolean;
  customActions?: React.ReactNode;
  customFieldRenderers?: Record<string, (field: any, register: any, errors: any) => React.ReactNode>;
  className?: string;
}

/**
 * Shared FormPageLayout Component
 * Provides consistent layout for all form pages across applications
 */
export function FormPageLayout({
  title,
  editTitle,
  isEditMode = false,
  formConfig,
  initialData = {},
  onSubmit,
  onCancel,
  showCancel = true,
  isLoading = false,
  customActions,
  customFieldRenderers = {},
  className
}: FormPageLayoutProps) {
  const pageTitle = isEditMode ? (editTitle || title.replace('Nuovo', 'Modifica')) : title;

  return (
    <div className={`space-y-2 ${className || ''}`}>
      {/* Header with title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">
          {pageTitle}
        </h1>
      </div>
      
      {/* GenericForm */}
      <GenericForm
        config={formConfig}
        initialData={initialData}
        onSubmit={onSubmit}
        onCancel={onCancel}
        showCancel={showCancel}
        isEditMode={isEditMode}
        isLoading={isLoading}
        customActions={customActions}
        customFieldRenderers={customFieldRenderers}
      />
    </div>
  );
}
