/**
 * Array utilities consolidated from all repositories
 */

/**
 * Remove duplicates from array
 */
export const removeDuplicates = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

/**
 * Remove duplicates from array of objects by key
 */
export const removeDuplicatesByKey = <T>(array: T[], key: keyof T): T[] => {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};

/**
 * Group array of objects by key
 */
export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((groups, item) => {
    const value = String(item[key]);
    if (!groups[value]) {
      groups[value] = [];
    }
    groups[value].push(item);
    return groups;
  }, {} as Record<string, T[]>);
};

/**
 * Sort array of objects by key
 */
export const sortBy = <T>(array: T[], key: keyof T, ascending = true): T[] => {
  return [...array].sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];
    
    if (valueA < valueB) return ascending ? -1 : 1;
    if (valueA > valueB) return ascending ? 1 : -1;
    return 0;
  });
};

/**
 * Sort array of objects by multiple keys
 */
export const sortByMultiple = <T>(
  array: T[], 
  keys: Array<{ key: keyof T; ascending?: boolean }>
): T[] => {
  return [...array].sort((a, b) => {
    for (const { key, ascending = true } of keys) {
      const valueA = a[key];
      const valueB = b[key];
      
      if (valueA < valueB) return ascending ? -1 : 1;
      if (valueA > valueB) return ascending ? 1 : -1;
    }
    return 0;
  });
};

/**
 * Filter array by multiple conditions
 */
export const filterBy = <T>(
  array: T[], 
  filters: Partial<Record<keyof T, any>>
): T[] => {
  return array.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === null || value === undefined) return true;
      
      const itemValue = item[key as keyof T];
      
      if (Array.isArray(value)) {
        return value.includes(itemValue);
      }
      
      if (typeof value === 'string' && typeof itemValue === 'string') {
        return itemValue.toLowerCase().includes(value.toLowerCase());
      }
      
      return itemValue === value;
    });
  });
};

/**
 * Find item in array by key-value pair
 */
export const findBy = <T>(array: T[], key: keyof T, value: any): T | undefined => {
  return array.find(item => item[key] === value);
};

/**
 * Find index of item in array by key-value pair
 */
export const findIndexBy = <T>(array: T[], key: keyof T, value: any): number => {
  return array.findIndex(item => item[key] === value);
};

/**
 * Check if array contains item with specific key-value pair
 */
export const containsBy = <T>(array: T[], key: keyof T, value: any): boolean => {
  return array.some(item => item[key] === value);
};

/**
 * Get unique values from array of objects by key
 */
export const getUniqueValues = <T>(array: T[], key: keyof T): any[] => {
  return removeDuplicates(array.map(item => item[key]));
};

/**
 * Chunk array into smaller arrays of specified size
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

/**
 * Flatten nested arrays
 */
export const flatten = <T>(array: (T | T[])[]): T[] => {
  return array.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : item);
  }, [] as T[]);
};

/**
 * Get intersection of two arrays
 */
export const intersection = <T>(array1: T[], array2: T[]): T[] => {
  return array1.filter(item => array2.includes(item));
};

/**
 * Get difference between two arrays (items in first array but not in second)
 */
export const difference = <T>(array1: T[], array2: T[]): T[] => {
  return array1.filter(item => !array2.includes(item));
};

/**
 * Get union of two arrays (all unique items from both arrays)
 */
export const union = <T>(array1: T[], array2: T[]): T[] => {
  return removeDuplicates([...array1, ...array2]);
};

/**
 * Shuffle array randomly
 */
export const shuffle = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Get random item from array
 */
export const getRandomItem = <T>(array: T[]): T | undefined => {
  if (array.length === 0) return undefined;
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Get random items from array
 */
export const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(count, array.length));
};

/**
 * Move item in array from one index to another
 */
export const moveItem = <T>(array: T[], fromIndex: number, toIndex: number): T[] => {
  const result = [...array];
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
};

/**
 * Insert item at specific index
 */
export const insertAt = <T>(array: T[], index: number, item: T): T[] => {
  const result = [...array];
  result.splice(index, 0, item);
  return result;
};

/**
 * Remove item at specific index
 */
export const removeAt = <T>(array: T[], index: number): T[] => {
  const result = [...array];
  result.splice(index, 1);
  return result;
};

/**
 * Update item at specific index
 */
export const updateAt = <T>(array: T[], index: number, item: T): T[] => {
  const result = [...array];
  result[index] = item;
  return result;
};

/**
 * Paginate array
 */
export const paginate = <T>(array: T[], page: number, perPage: number): {
  data: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
} => {
  const totalItems = array.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const data = array.slice(startIndex, endIndex);
  
  return {
    data,
    totalPages,
    currentPage: page,
    totalItems,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
};

/**
 * Calculate sum of numeric values in array
 */
export const sum = (array: number[]): number => {
  return array.reduce((total, num) => total + num, 0);
};

/**
 * Calculate sum of numeric property in array of objects
 */
export const sumBy = <T>(array: T[], key: keyof T): number => {
  return array.reduce((total, item) => {
    const value = item[key];
    return total + (typeof value === 'number' ? value : 0);
  }, 0);
};

/**
 * Calculate average of numeric values in array
 */
export const average = (array: number[]): number => {
  if (array.length === 0) return 0;
  return sum(array) / array.length;
};

/**
 * Calculate average of numeric property in array of objects
 */
export const averageBy = <T>(array: T[], key: keyof T): number => {
  if (array.length === 0) return 0;
  return sumBy(array, key) / array.length;
};

/**
 * Find minimum value in array
 */
export const min = (array: number[]): number | undefined => {
  if (array.length === 0) return undefined;
  return Math.min(...array);
};

/**
 * Find minimum value by property in array of objects
 */
export const minBy = <T>(array: T[], key: keyof T): T | undefined => {
  if (array.length === 0) return undefined;
  
  return array.reduce((min, item) => {
    const value = item[key];
    const minValue = min[key];
    return value < minValue ? item : min;
  });
};

/**
 * Find maximum value in array
 */
export const max = (array: number[]): number | undefined => {
  if (array.length === 0) return undefined;
  return Math.max(...array);
};

/**
 * Find maximum value by property in array of objects
 */
export const maxBy = <T>(array: T[], key: keyof T): T | undefined => {
  if (array.length === 0) return undefined;
  
  return array.reduce((max, item) => {
    const value = item[key];
    const maxValue = max[key];
    return value > maxValue ? item : max;
  });
};

/**
 * Count occurrences of each value in array
 */
export const countOccurrences = <T>(array: T[]): Record<string, number> => {
  return array.reduce((counts, item) => {
    const key = String(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);
};

/**
 * Count occurrences by property in array of objects
 */
export const countBy = <T>(array: T[], key: keyof T): Record<string, number> => {
  return array.reduce((counts, item) => {
    const value = String(item[key]);
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);
};

/**
 * Check if array is empty
 */
export const isEmpty = <T>(array: T[]): boolean => {
  return array.length === 0;
};

/**
 * Check if array is not empty
 */
export const isNotEmpty = <T>(array: T[]): boolean => {
  return array.length > 0;
};

/**
 * Get first item from array
 */
export const first = <T>(array: T[]): T | undefined => {
  return array[0];
};

/**
 * Get last item from array
 */
export const last = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

/**
 * Get first n items from array
 */
export const take = <T>(array: T[], count: number): T[] => {
  return array.slice(0, count);
};

/**
 * Get last n items from array
 */
export const takeLast = <T>(array: T[], count: number): T[] => {
  return array.slice(-count);
};

/**
 * Skip first n items from array
 */
export const skip = <T>(array: T[], count: number): T[] => {
  return array.slice(count);
};

/**
 * Skip last n items from array
 */
export const skipLast = <T>(array: T[], count: number): T[] => {
  return array.slice(0, -count);
};

/**
 * Compact array (remove falsy values)
 */
export const compact = <T>(array: (T | null | undefined | false | 0 | '')[]): T[] => {
  return array.filter(Boolean) as T[];
};

/**
 * Create array of specified length with default value
 */
export const createArray = <T>(length: number, defaultValue?: T): T[] => {
  return Array(length).fill(defaultValue);
};

/**
 * Create array of numbers from start to end
 */
export const range = (start: number, end: number, step = 1): number[] => {
  const result: number[] = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
};

/**
 * Array comparison utilities
 */
export const arrayComparison = {
  isEqual: <T>(array1: T[], array2: T[]): boolean => {
    if (array1.length !== array2.length) return false;
    return array1.every((item, index) => item === array2[index]);
  },
  
  isEqualUnordered: <T>(array1: T[], array2: T[]): boolean => {
    if (array1.length !== array2.length) return false;
    const sorted1 = [...array1].sort();
    const sorted2 = [...array2].sort();
    return arrayComparison.isEqual(sorted1, sorted2);
  },
  
  isSubset: <T>(subset: T[], superset: T[]): boolean => {
    return subset.every(item => superset.includes(item));
  },
  
  isSuperset: <T>(superset: T[], subset: T[]): boolean => {
    return arrayComparison.isSubset(subset, superset);
  },
};
