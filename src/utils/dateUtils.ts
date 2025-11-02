import { format, parseISO, isValid, addDays, subDays, startOfDay, endOfDay, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

/**
 * Common date formatting patterns used across all repositories
 */
export const DATE_FORMATS = {
  ISO: 'yyyy-MM-dd',
  ISO_DATETIME: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
  DISPLAY: 'dd/MM/yyyy',
  DISPLAY_DATETIME: 'dd/MM/yyyy HH:mm',
  TIME: 'HH:mm',
  MONTH_YEAR: 'MM/yyyy',
  FULL: 'EEEE, MMMM do, yyyy',
  UTC_DATE_IT: 'dd/MM/yyyy', // Italian format for UTC dates
  UTC_DATETIME_IT: 'dd/MM/yyyy HH:mm', // Italian format for UTC datetime
} as const;

/**
 * Format date using common patterns
 */
export const formatDate = (
  date: Date | string | null | undefined,
  formatPattern: string = DATE_FORMATS.DISPLAY
): string => {
  if (!date) return '';
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return '';
    
    return format(dateObj, formatPattern);
  } catch (error) {
    console.warn('Date formatting error:', error);
    return '';
  }
};

/**
 * Format date for display (user-friendly format)
 */
export const formatDisplayDate = (date: Date | string | null | undefined): string => {
  return formatDate(date, DATE_FORMATS.DISPLAY);
};

/**
 * Format datetime for display
 */
export const formatDisplayDateTime = (date: Date | string | null | undefined): string => {
  return formatDate(date, DATE_FORMATS.DISPLAY_DATETIME);
};

/**
 * Format time only
 */
export const formatTime = (date: Date | string | null | undefined): string => {
  return formatDate(date, DATE_FORMATS.TIME);
};

/**
 * Format date for ISO string (database storage)
 */
export const formatISODate = (date: Date | string | null | undefined): string => {
  return formatDate(date, DATE_FORMATS.ISO);
};

/**
 * Format datetime for ISO string (database storage)
 */
export const formatISODateTime = (date: Date | string | null | undefined): string => {
  if (!date) return '';
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return '';
    
    return dateObj.toISOString();
  } catch (error) {
    console.warn('ISO datetime formatting error:', error);
    return '';
  }
};

/**
 * Parse date string safely
 */
export const parseDate = (dateString: string | null | undefined): Date | null => {
  if (!dateString) return null;
  
  try {
    const parsed = parseISO(dateString);
    return isValid(parsed) ? parsed : null;
  } catch (error) {
    console.warn('Date parsing error:', error);
    return null;
  }
};

/**
 * Get current date in ISO format
 */
export const getCurrentISODate = (): string => {
  return formatISODate(new Date());
};

/**
 * Get current datetime in ISO format
 */
export const getCurrentISODateTime = (): string => {
  return new Date().toISOString();
};

/**
 * Add days to a date
 */
export const addDaysToDate = (date: Date | string, days: number): Date => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return addDays(dateObj, days);
};

/**
 * Subtract days from a date
 */
export const subtractDaysFromDate = (date: Date | string, days: number): Date => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return subDays(dateObj, days);
};

/**
 * Get start of day
 */
export const getStartOfDay = (date: Date | string): Date => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return startOfDay(dateObj);
};

/**
 * Get end of day
 */
export const getEndOfDay = (date: Date | string): Date => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return endOfDay(dateObj);
};

/**
 * Calculate difference in days between two dates
 */
export const getDaysDifference = (date1: Date | string, date2: Date | string): number => {
  const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
  const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
  return differenceInDays(dateObj1, dateObj2);
};

/**
 * Calculate difference in hours between two dates
 */
export const getHoursDifference = (date1: Date | string, date2: Date | string): number => {
  const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
  const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
  return differenceInHours(dateObj1, dateObj2);
};

/**
 * Calculate difference in minutes between two dates
 */
export const getMinutesDifference = (date1: Date | string, date2: Date | string): number => {
  const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
  const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
  return differenceInMinutes(dateObj1, dateObj2);
};

/**
 * Check if a date is valid
 */
export const isValidDate = (date: Date | string | null | undefined): boolean => {
  if (!date) return false;
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return isValid(dateObj);
  } catch (error) {
    return false;
  }
};

/**
 * Get relative time string (e.g., "2 hours ago", "in 3 days")
 */
export const getRelativeTime = (date: Date | string): string => {
  if (!date) return '';
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return '';
    
    const now = new Date();
    const diffInMinutes = differenceInMinutes(now, dateObj);
    
    if (diffInMinutes < 1) return 'just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'} ago`;
    
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears === 1 ? '' : 's'} ago`;
  } catch (error) {
    console.warn('Relative time calculation error:', error);
    return '';
  }
};

/**
 * Create date range for queries
 */
export const createDateRange = (startDate: string, endDate: string) => ({
  startDate: formatISODate(startDate),
  endDate: formatISODate(endDate),
});

/**
 * Get date range for common periods
 */
export const getDateRangePresets = () => {
  const today = new Date();
  const yesterday = subDays(today, 1);
  const lastWeek = subDays(today, 7);
  const lastMonth = subDays(today, 30);
  const lastYear = subDays(today, 365);
  
  return {
    today: createDateRange(formatISODate(today), formatISODate(today)),
    yesterday: createDateRange(formatISODate(yesterday), formatISODate(yesterday)),
    lastWeek: createDateRange(formatISODate(lastWeek), formatISODate(today)),
    lastMonth: createDateRange(formatISODate(lastMonth), formatISODate(today)),
    lastYear: createDateRange(formatISODate(lastYear), formatISODate(today)),
  };
};

/**
 * Validate date range
 */
export const validateDateRange = (startDate: string, endDate: string): boolean => {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  if (!start || !end) return false;
  
  return start <= end;
};

/**
 * Format duration in minutes to human readable format
 */
export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours}h`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
};

/**
 * Convert hours to minutes
 */
export const hoursToMinutes = (hours: number): number => {
  return Math.round(hours * 60);
};

/**
 * Convert minutes to hours
 */
export const minutesToHours = (minutes: number): number => {
  return minutes / 60;
};

/**
 * Get relative time string (e.g., "yesterday", "2 days ago", "January 15")
 * From crm_demo - formats dates as relative time strings
 */
export function getRelativeTimeString(dateString: string): string {
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diff = date.getTime() - today.getTime();
  const unitDiff = Math.round(diff / (1000 * 60 * 60 * 24));

  // Check if the date is more than one week old
  if (Math.abs(unitDiff) > 7) {
    return new Intl.DateTimeFormat(undefined, {
      day: "numeric",
      month: "long",
    }).format(date);
  }

  // Intl.RelativeTimeFormat for dates within the last week
  const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
  return ucFirst(rtf.format(unitDiff, "day"));
}

/**
 * Capitalize first letter of string
 */
function ucFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * UTC date formatting functions (always UTC+0, no timezone manipulation)
 * Used primarily by tracc application
 */
export const formatUtcDate = (isoString: string | null | undefined): string => {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleDateString('it-IT', {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

export const formatUtcDateTime = (isoString: string | null | undefined): string => {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleString('it-IT', {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Time constants used across applications
 */
export const TIME_CONSTANTS = {
  MINUTES_PER_HOUR: 60,
  HOURS_PER_DAY: 24,
  DAYS_PER_WEEK: 7,
  MILLISECONDS_PER_SECOND: 1000,
  MILLISECONDS_PER_MINUTE: 60 * 1000,
  MILLISECONDS_PER_HOUR: 60 * 60 * 1000,
  MILLISECONDS_PER_DAY: 24 * 60 * 60 * 1000,
} as const;
