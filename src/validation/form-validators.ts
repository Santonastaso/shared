/**
 * Form validation utilities
 * Copied from crm_demo for shared use across all applications
 */

/**
 * Validates email format
 * Basic email validation pattern
 * @param email - The email to validate
 * @returns Error message if invalid, undefined if valid
 */
export const validateEmail = (email: string) => {
  if (!email) return;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Must be a valid email address";
  }
};

/**
 * Validates required fields
 * @param value - The value to validate
 * @returns Error message if invalid, undefined if valid
 */
export const validateRequired = (value: any) => {
  if (value === null || value === undefined || value === "") {
    return "This field is required";
  }
};

/**
 * Validates minimum length
 * @param minLength - Minimum required length
 * @returns Validation function
 */
export const validateMinLength = (minLength: number) => (value: string) => {
  if (!value) return;
  if (value.length < minLength) {
    return `Must be at least ${minLength} characters long`;
  }
};

/**
 * Validates maximum length
 * @param maxLength - Maximum allowed length
 * @returns Validation function
 */
export const validateMaxLength = (maxLength: number) => (value: string) => {
  if (!value) return;
  if (value.length > maxLength) {
    return `Must be no more than ${maxLength} characters long`;
  }
};

/**
 * Validates numeric values
 * @param value - The value to validate
 * @returns Error message if invalid, undefined if valid
 */
export const validateNumber = (value: any) => {
  if (value === null || value === undefined || value === "") return;
  if (isNaN(Number(value))) {
    return "Must be a valid number";
  }
};

/**
 * Validates positive numbers
 * @param value - The value to validate
 * @returns Error message if invalid, undefined if valid
 */
export const validatePositiveNumber = (value: any) => {
  const numberError = validateNumber(value);
  if (numberError) return numberError;
  
  if (value !== null && value !== undefined && value !== "" && Number(value) <= 0) {
    return "Must be a positive number";
  }
};
