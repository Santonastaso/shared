import React from 'react';
import { Label } from './label';

export interface WorkCenterSelectProps {
  /** Available work centers */
  workCenters: Array<{ value: string; label: string }>;
  /** Current selected work center */
  value: string;
  /** Change handler */
  onChange: (value: string) => void;
  /** Label for the select */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Placeholder text */
  placeholder?: string;
}

/**
 * Work Center Selection Component
 * 
 * A simple select component for choosing work centers in scheduler_demo.
 * Uses native HTML select for simplicity and compatibility.
 */
export const WorkCenterSelect: React.FC<WorkCenterSelectProps> = ({
  workCenters,
  value,
  onChange,
  label = 'Work Center',
  required = false,
  disabled = false,
  error,
  placeholder = 'Select a work center'
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="workCenter">{label}</Label>
      <select
        id="workCenter"
        name="workCenter"
        value={value}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        className={`
          flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm 
          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
          disabled:opacity-50
          ${error ? 'border-red-500' : ''}
        `}
      >
        <option value="">{placeholder}</option>
        {workCenters.map((center) => (
          <option key={center.value} value={center.value}>
            {center.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-sm text-red-600">{error}</span>
      )}
    </div>
  );
};
