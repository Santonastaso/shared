import React from 'react';
import { Input } from './input';
import { Textarea } from './textarea';
import { Label } from './label';

export interface TextInputProps {
  /** Input label */
  label?: string;
  /** Input source/name */
  source?: string;
  /** Input type */
  type?: string;
  /** Whether input is multiline (textarea) */
  multiline?: boolean;
  /** Input class name */
  inputClassName?: string;
  /** Container class name */
  className?: string;
  /** Validation function */
  validate?: (value: any) => string | undefined;
  /** Format function */
  format?: (value: any) => any;
  /** Helper text */
  helperText?: string;
  /** Whether field is required */
  required?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Whether field is disabled */
  disabled?: boolean;
  /** Input value */
  value?: any;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
  /** Error message */
  error?: string;
}

/**
 * TextInput Component
 * 
 * Compatible with react-hook-form and ra-core.
 * Supports both regular inputs and textareas.
 */
export const TextInput: React.FC<TextInputProps> = ({
  label,
  source,
  type = 'text',
  multiline = false,
  inputClassName,
  className,
  validate,
  format,
  helperText,
  required = false,
  placeholder,
  disabled = false,
  value,
  onChange,
  onBlur,
  name,
  id,
  error,
  ...rest
}) => {
  // Use source as name if name is not provided
  const inputName = name || source;
  const inputId = id || inputName;

  // Adjust value for datetime-local and date inputs
  const adjustedValue = 
    type === "datetime-local" && value
      ? value.slice(0, 16) // Adjust for datetime-local input format
      : type === "date" && value
        ? value.slice(0, 10) // Adjust for date input format
        : value;

  return (
    <div className={`w-full space-y-2 ${className || ''}`}>
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}
      
      <div className="space-y-1">
        {multiline ? (
          <Textarea
            id={inputId}
            name={inputName}
            value={adjustedValue || ''}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={`${inputClassName || ''} ${error ? 'border-red-500' : ''}`}
            {...rest}
          />
        ) : (
          <Input
            id={inputId}
            name={inputName}
            type={type}
            value={adjustedValue || ''}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={`${inputClassName || ''} ${error ? 'border-red-500' : ''}`}
            {...rest}
          />
        )}
        
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    </div>
  );
};
