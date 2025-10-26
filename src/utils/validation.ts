/**
 * Validation utilities for shared package
 * Provides basic validation functions that can be extended by applications
 */

/**
 * Basic validation function interface
 */
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Simple validation function that can work with any validation library
 */
export const validateData = (data: any, schema: any): ValidationResult => {
  try {
    // If schema has a validateSync method (Yup), use it
    if (schema && typeof schema.validateSync === 'function') {
      schema.validateSync(data, { abortEarly: false });
      return { isValid: true, errors: {} };
    }
    
    // If schema is a function, call it
    if (typeof schema === 'function') {
      const result = schema(data);
      return result;
    }
    
    // Default: assume valid if no schema
    return { isValid: true, errors: {} };
  } catch (validationError: any) {
    const errors: Record<string, string> = {};
    
    // Handle Yup validation errors
    if (validationError.inner && Array.isArray(validationError.inner)) {
      validationError.inner.forEach((error: any) => {
        errors[error.path] = error.message;
      });
    } else if (validationError.message) {
      errors.general = validationError.message;
    }
    
    return { isValid: false, errors };
  }
};

/**
 * Basic schemas placeholder - applications should define their own
 */
export const SCHEMAS = {
  // Applications should extend this with their specific schemas
};

/**
 * Utility function to validate required fields
 */
export const validateRequired = (data: Record<string, any>, requiredFields: string[]): ValidationResult => {
  const errors: Record<string, string> = {};
  
  requiredFields.forEach(field => {
    if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
      errors[field] = 'This field is required';
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Utility function to validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
