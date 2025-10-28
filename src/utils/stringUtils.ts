/**
 * String utilities consolidated from all repositories
 */

/**
 * Capitalize first letter of string
 */
export const capitalize = (str: string | null | undefined): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Capitalize first letter of each word
 */
export const capitalizeWords = (str: string | null | undefined): string => {
  if (!str) return '';
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

/**
 * Convert string to camelCase
 */
export const toCamelCase = (str: string | null | undefined): string => {
  if (!str) return '';
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');
};

/**
 * Convert string to kebab-case
 */
export const toKebabCase = (str: string | null | undefined): string => {
  if (!str) return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

/**
 * Convert string to snake_case
 */
export const toSnakeCase = (str: string | null | undefined): string => {
  if (!str) return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
};

/**
 * Convert string to PascalCase
 */
export const toPascalCase = (str: string | null | undefined): string => {
  if (!str) return '';
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/\s+/g, '');
};

/**
 * Truncate string to specified length
 */
export const truncate = (
  str: string | null | undefined, 
  length: number, 
  suffix = '...'
): string => {
  if (!str) return '';
  if (str.length <= length) return str;
  return str.substring(0, length - suffix.length) + suffix;
};

/**
 * Truncate string to specified number of words
 */
export const truncateWords = (
  str: string | null | undefined, 
  wordCount: number, 
  suffix = '...'
): string => {
  if (!str) return '';
  const words = str.split(' ');
  if (words.length <= wordCount) return str;
  return words.slice(0, wordCount).join(' ') + suffix;
};

/**
 * Remove extra whitespace and trim
 */
export const cleanWhitespace = (str: string | null | undefined): string => {
  if (!str) return '';
  return str.replace(/\s+/g, ' ').trim();
};

/**
 * Remove all whitespace
 */
export const removeWhitespace = (str: string | null | undefined): string => {
  if (!str) return '';
  return str.replace(/\s/g, '');
};

/**
 * Sanitize string for HTML display
 */
export const sanitizeHtml = (str: string | null | undefined): string => {
  if (!str) return '';
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  return str.replace(/[&<>"'/]/g, (s) => map[s]);
};

/**
 * Generate slug from string
 */
export const generateSlug = (str: string | null | undefined): string => {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Extract initials from name
 */
export const getInitials = (name: string | null | undefined, maxLength = 2): string => {
  if (!name) return '';
  
  const words = name.trim().split(/\s+/);
  const initials = words
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, maxLength)
    .join('');
  
  return initials;
};

/**
 * Check if string is empty or only whitespace
 */
export const isEmpty = (str: string | null | undefined): boolean => {
  return !str || str.trim().length === 0;
};

/**
 * Check if string is not empty
 */
export const isNotEmpty = (str: string | null | undefined): boolean => {
  return !isEmpty(str);
};

/**
 * Count words in string
 */
export const countWords = (str: string | null | undefined): number => {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(word => word.length > 0).length;
};

/**
 * Count characters in string (excluding whitespace)
 */
export const countCharacters = (str: string | null | undefined): number => {
  if (!str) return 0;
  return str.replace(/\s/g, '').length;
};

/**
 * Reverse string
 */
export const reverse = (str: string | null | undefined): string => {
  if (!str) return '';
  return str.split('').reverse().join('');
};

/**
 * Check if string is palindrome
 */
export const isPalindrome = (str: string | null | undefined): boolean => {
  if (!str) return false;
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverse(cleaned);
};

/**
 * Replace multiple spaces with single space
 */
export const normalizeSpaces = (str: string | null | undefined): string => {
  if (!str) return '';
  return str.replace(/\s+/g, ' ').trim();
};

/**
 * Mask string (e.g., for passwords, credit cards)
 */
export const maskString = (
  str: string | null | undefined, 
  maskChar = '*', 
  visibleStart = 0, 
  visibleEnd = 0
): string => {
  if (!str) return '';
  if (str.length <= visibleStart + visibleEnd) return str;
  
  const start = str.substring(0, visibleStart);
  const end = str.substring(str.length - visibleEnd);
  const masked = maskChar.repeat(str.length - visibleStart - visibleEnd);
  
  return start + masked + end;
};

/**
 * Extract domain from email
 */
export const extractEmailDomain = (email: string | null | undefined): string => {
  if (!email) return '';
  const parts = email.split('@');
  return parts.length === 2 ? parts[1] : '';
};

/**
 * Extract username from email
 */
export const extractEmailUsername = (email: string | null | undefined): string => {
  if (!email) return '';
  const parts = email.split('@');
  return parts.length >= 1 ? parts[0] : '';
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string | null | undefined): string => {
  if (!phone) return '';
  
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format based on length (assuming Italian format)
  if (digits.length === 10) {
    return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
  } else if (digits.length === 11 && digits.startsWith('39')) {
    return digits.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
  }
  
  return phone; // Return original if no format matches
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string | null | undefined): boolean => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format
 */
export const isValidPhoneNumber = (phone: string | null | undefined): boolean => {
  if (!phone) return false;
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Generate random string
 */
export const generateRandomString = (length: number, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
};

/**
 * Generate UUID v4
 */
export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

/**
 * Compare strings ignoring case and accents
 */
export const compareStringsIgnoreCase = (str1: string | null | undefined, str2: string | null | undefined): boolean => {
  if (!str1 && !str2) return true;
  if (!str1 || !str2) return false;
  
  return str1.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === 
         str2.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

/**
 * Search for substring ignoring case and accents
 */
export const searchIgnoreCase = (text: string | null | undefined, search: string | null | undefined): boolean => {
  if (!text || !search) return false;
  
  const normalizedText = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const normalizedSearch = search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  return normalizedText.includes(normalizedSearch);
};

/**
 * Highlight search terms in text
 */
export const highlightSearchTerms = (text: string, searchTerm: string, highlightClass = 'highlight'): string => {
  if (!text || !searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, `<span class="${highlightClass}">$1</span>`);
};

/**
 * String templates
 */
export const stringTemplates = {
  interpolate: (template: string, variables: Record<string, any>): string => {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return variables[key] !== undefined ? String(variables[key]) : match;
    });
  },
  
  format: (template: string, ...args: any[]): string => {
    return template.replace(/{(\d+)}/g, (match, index) => {
      return args[index] !== undefined ? String(args[index]) : match;
    });
  },
};

/**
 * String constants
 */
export const STRING_CONSTANTS = {
  EMPTY: '',
  SPACE: ' ',
  NEWLINE: '\n',
  TAB: '\t',
  ELLIPSIS: '...',
  DASH: '-',
  UNDERSCORE: '_',
} as const;
