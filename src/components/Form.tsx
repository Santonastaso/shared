import React from 'react';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /** Form submission handler */
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  /** Form class name */
  className?: string;
  /** Form children */
  children: React.ReactNode;
}

/**
 * Form Component
 * 
 * A simple form wrapper that's compatible with react-hook-form and ra-core.
 * Provides consistent styling and behavior across all applications.
 */
export const Form: React.FC<FormProps> = ({
  onSubmit,
  className = '',
  children,
  ...rest
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
      {...rest}
    >
      {children}
    </form>
  );
};
