/**
 * Number formatting utilities consolidated from all repositories
 */

/**
 * Format number as currency
 */
export const formatCurrency = (
  amount: number | string | null | undefined,
  currency = 'EUR',
  locale = 'it-IT'
): string => {
  if (amount === null || amount === undefined || amount === '') return '';
  
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(numAmount)) return '';
  
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numAmount);
  } catch (error) {
    console.warn('Currency formatting error:', error);
    return `${currency} ${numAmount.toFixed(2)}`;
  }
};

/**
 * Format number as percentage
 */
export const formatPercentage = (
  value: number | string | null | undefined,
  decimals = 1,
  locale = 'it-IT'
): string => {
  if (value === null || value === undefined || value === '') return '';
  
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return '';
  
  try {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(numValue / 100);
  } catch (error) {
    console.warn('Percentage formatting error:', error);
    return `${numValue.toFixed(decimals)}%`;
  }
};

/**
 * Format number with thousands separator
 */
export const formatNumber = (
  value: number | string | null | undefined,
  decimals = 0,
  locale = 'it-IT'
): string => {
  if (value === null || value === undefined || value === '') return '';
  
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return '';
  
  try {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(numValue);
  } catch (error) {
    console.warn('Number formatting error:', error);
    return numValue.toFixed(decimals);
  }
};

/**
 * Format number with unit (e.g., kg, m, etc.)
 */
export const formatNumberWithUnit = (
  value: number | string | null | undefined,
  unit: string,
  decimals = 2,
  locale = 'it-IT'
): string => {
  if (value === null || value === undefined || value === '') return '';
  
  const formattedNumber = formatNumber(value, decimals, locale);
  return formattedNumber ? `${formattedNumber} ${unit}` : '';
};

/**
 * Format weight in kg
 */
export const formatWeight = (
  value: number | string | null | undefined,
  decimals = 2,
  locale = 'it-IT'
): string => {
  return formatNumberWithUnit(value, 'kg', decimals, locale);
};

/**
 * Format volume in liters
 */
export const formatVolume = (
  value: number | string | null | undefined,
  decimals = 2,
  locale = 'it-IT'
): string => {
  return formatNumberWithUnit(value, 'L', decimals, locale);
};

/**
 * Format distance in meters
 */
export const formatDistance = (
  value: number | string | null | undefined,
  decimals = 2,
  locale = 'it-IT'
): string => {
  return formatNumberWithUnit(value, 'm', decimals, locale);
};

/**
 * Parse number from string safely
 */
export const parseNumber = (value: string | number | null | undefined): number | null => {
  if (value === null || value === undefined || value === '') return null;
  
  const numValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '.')) : value;
  return isNaN(numValue) ? null : numValue;
};

/**
 * Parse integer from string safely
 */
export const parseInteger = (value: string | number | null | undefined): number | null => {
  if (value === null || value === undefined || value === '') return null;
  
  const numValue = typeof value === 'string' ? parseInt(value, 10) : Math.floor(value);
  return isNaN(numValue) ? null : numValue;
};

/**
 * Round number to specified decimal places
 */
export const roundNumber = (value: number, decimals = 2): number => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
};

/**
 * Clamp number between min and max values
 */
export const clampNumber = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Check if value is a valid number
 */
export const isValidNumber = (value: any): boolean => {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
};

/**
 * Calculate percentage of value relative to total
 */
export const calculatePercentage = (value: number, total: number): number => {
  if (total === 0) return 0;
  return (value / total) * 100;
};

/**
 * Calculate percentage change between two values
 */
export const calculatePercentageChange = (oldValue: number, newValue: number): number => {
  if (oldValue === 0) return newValue === 0 ? 0 : 100;
  return ((newValue - oldValue) / oldValue) * 100;
};

/**
 * Sum array of numbers
 */
export const sumNumbers = (numbers: (number | null | undefined)[]): number => {
  return numbers.reduce((sum, num) => {
    const validNum = parseNumber(num);
    return sum + (validNum || 0);
  }, 0);
};

/**
 * Calculate average of array of numbers
 */
export const averageNumbers = (numbers: (number | null | undefined)[]): number => {
  const validNumbers = numbers.filter(num => parseNumber(num) !== null);
  if (validNumbers.length === 0) return 0;
  
  return sumNumbers(validNumbers) / validNumbers.length;
};

/**
 * Find minimum value in array
 */
export const minNumber = (numbers: (number | null | undefined)[]): number | null => {
  const validNumbers = numbers.map(parseNumber).filter(num => num !== null) as number[];
  return validNumbers.length > 0 ? Math.min(...validNumbers) : null;
};

/**
 * Find maximum value in array
 */
export const maxNumber = (numbers: (number | null | undefined)[]): number | null => {
  const validNumbers = numbers.map(parseNumber).filter(num => num !== null) as number[];
  return validNumbers.length > 0 ? Math.max(...validNumbers) : null;
};

/**
 * Generate random number between min and max
 */
export const randomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

/**
 * Generate random integer between min and max (inclusive)
 */
export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Convert bytes to human readable format
 */
export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {
  return formatBytes(bytes, 1);
};

/**
 * Number validation utilities
 */
export const numberValidation = {
  isPositive: (value: number): boolean => value > 0,
  isNegative: (value: number): boolean => value < 0,
  isZero: (value: number): boolean => value === 0,
  isInteger: (value: number): boolean => Number.isInteger(value),
  isFloat: (value: number): boolean => !Number.isInteger(value),
  inRange: (value: number, min: number, max: number): boolean => value >= min && value <= max,
  isEven: (value: number): boolean => value % 2 === 0,
  isOdd: (value: number): boolean => value % 2 !== 0,
};

/**
 * Mathematical operations with null safety
 */
export const safeMath = {
  add: (a: number | null, b: number | null): number => (a || 0) + (b || 0),
  subtract: (a: number | null, b: number | null): number => (a || 0) - (b || 0),
  multiply: (a: number | null, b: number | null): number => (a || 0) * (b || 0),
  divide: (a: number | null, b: number | null): number => {
    if (!b || b === 0) return 0;
    return (a || 0) / b;
  },
  percentage: (value: number | null, total: number | null): number => {
    if (!total || total === 0) return 0;
    return ((value || 0) / total) * 100;
  },
};

/**
 * Number constants
 */
export const NUMBER_CONSTANTS = {
  MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  EPSILON: Number.EPSILON,
  POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
  NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY,
} as const;
