"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ALERT_TYPES: () => ALERT_TYPES,
  AppHeader: () => AppHeader,
  AuthLayout: () => AuthLayout,
  AuthProvider: () => AuthProvider,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  Badge: () => Badge,
  BaseService: () => BaseService,
  Button: () => Button,
  COMMON_STATUSES: () => COMMON_STATUSES,
  CONFIRMATION_TYPES: () => CONFIRMATION_TYPES,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  DATA_TABLE_DEFAULTS: () => DATA_TABLE_DEFAULTS,
  DATE_FORMATS: () => DATE_FORMATS,
  DEPARTMENT_TYPES: () => DEPARTMENT_TYPES,
  DataTable: () => DataTable,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  ERROR_TYPES: () => ERROR_TYPES,
  ErrorBoundary: () => ErrorBoundary,
  ExactHeader: () => ExactHeader,
  FIELD_CONFIGS: () => FIELD_CONFIGS,
  FilterDropdown: () => FilterDropdown_default,
  GenericForm: () => GenericForm_default,
  Header: () => Header,
  Input: () => Input,
  Label: () => Label,
  LoginPage: () => LoginPage,
  MACHINE_STATUSES: () => MACHINE_STATUSES,
  NUMBER_CONSTANTS: () => NUMBER_CONSTANTS,
  PRODUCT_TYPES: () => PRODUCT_TYPES,
  ProtectedRoute: () => ProtectedRoute,
  RelativeDate: () => RelativeDate,
  SCHEMAS: () => SCHEMAS,
  SEAL_SIDES: () => SEAL_SIDES,
  SERVICES_ERROR_TYPES: () => ERROR_TYPES2,
  SHIFT_TYPES: () => SHIFT_TYPES,
  STRING_CONSTANTS: () => STRING_CONSTANTS,
  ServiceError: () => ServiceError,
  SimpleHeader: () => SimpleHeader,
  Skeleton: () => Skeleton,
  SupabaseService: () => SupabaseService,
  TASK_STATUSES: () => TASK_STATUSES,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Textarea: () => Textarea,
  ThemeProvider: () => ThemeProvider,
  ThemeSwitch: () => ThemeSwitch,
  VALIDATION_MESSAGES: () => VALIDATION_MESSAGES,
  WORK_CENTERS: () => WORK_CENTERS,
  addDaysToDate: () => addDaysToDate,
  applyFullTextSearch: () => applyFullTextSearch,
  applyPagination: () => applyPagination,
  arrayComparison: () => arrayComparison,
  average: () => average,
  averageBy: () => averageBy,
  averageNumbers: () => averageNumbers,
  badgeVariants: () => badgeVariants,
  batchInsert: () => batchInsert,
  batchUpdate: () => batchUpdate,
  buttonVariants: () => buttonVariants,
  calculatePercentage: () => calculatePercentage,
  calculatePercentageChange: () => calculatePercentageChange,
  capitalize: () => capitalize,
  capitalizeWords: () => capitalizeWords,
  checkFileExists: () => checkFileExists,
  checkSupabaseConnection: () => checkSupabaseConnection,
  chunk: () => chunk,
  clampNumber: () => clampNumber,
  cleanWhitespace: () => cleanWhitespace,
  cn: () => cn,
  compact: () => compact,
  compareStringsIgnoreCase: () => compareStringsIgnoreCase,
  confirmAction: () => confirmAction,
  containsBy: () => containsBy,
  countBy: () => countBy,
  countCharacters: () => countCharacters,
  countOccurrences: () => countOccurrences,
  countWords: () => countWords,
  createArray: () => createArray,
  createAvatarProcessor: () => createAvatarProcessor,
  createCRUDStore: () => createCRUDStore,
  createDataOperationErrorHandler: () => createDataOperationErrorHandler,
  createDateRange: () => createDateRange,
  createEntityStore: () => createEntityStore,
  createFullTextSearchProcessor: () => createFullTextSearchProcessor,
  createPaginatedStore: () => createPaginatedStore,
  createQueryKeys: () => createQueryKeys,
  createServiceHooks: () => createServiceHooks,
  createSupabaseClient: () => createSupabaseClient,
  createSupabaseFromEnv: () => createSupabaseFromEnv,
  createSupabaseHooks: () => createSupabaseHooks,
  createUIStore: () => createUIStore,
  debounce: () => debounce,
  defaultQueryConfig: () => defaultQueryConfig,
  defaultQueryErrorHandler: () => defaultQueryErrorHandler,
  deleteFromSupabaseStorage: () => deleteFromSupabaseStorage,
  difference: () => difference,
  dismiss: () => dismiss,
  dismissAll: () => dismissAll,
  extractEmailDomain: () => extractEmailDomain,
  extractEmailUsername: () => extractEmailUsername,
  fetchWithTimeout: () => fetchWithTimeout,
  filterBy: () => filterBy,
  findBy: () => findBy,
  findIndexBy: () => findIndexBy,
  first: () => first,
  flatten: () => flatten,
  formatBytes: () => formatBytes,
  formatCurrency: () => formatCurrency,
  formatDate: () => formatDate2,
  formatDateTime: () => formatDateTime,
  formatDisplayDate: () => formatDisplayDate,
  formatDisplayDateTime: () => formatDisplayDateTime,
  formatDistance: () => formatDistance,
  formatDuration: () => formatDuration,
  formatFileSize: () => formatFileSize,
  formatISODate: () => formatISODate,
  formatISODateTime: () => formatISODateTime,
  formatNumber: () => formatNumber,
  formatNumberWithUnit: () => formatNumberWithUnit,
  formatPercentage: () => formatPercentage,
  formatPhoneNumber: () => formatPhoneNumber,
  formatTime: () => formatTime,
  formatUtcDate: () => formatUtcDate,
  formatUtcDateTime: () => formatUtcDateTime,
  formatVolume: () => formatVolume,
  formatWeight: () => formatWeight,
  generateId: () => generateId,
  generateRandomString: () => generateRandomString,
  generateSlug: () => generateSlug,
  generateUUID: () => generateUUID,
  getCurrentISODate: () => getCurrentISODate,
  getCurrentISODateTime: () => getCurrentISODateTime,
  getDateRangePresets: () => getDateRangePresets,
  getDaysDifference: () => getDaysDifference,
  getEndOfDay: () => getEndOfDay,
  getHoursDifference: () => getHoursDifference,
  getInitials: () => getInitials,
  getMinutesDifference: () => getMinutesDifference,
  getNested: () => getNested,
  getRandomItem: () => getRandomItem,
  getRandomItems: () => getRandomItems,
  getRecordCount: () => getRecordCount,
  getRelativeTime: () => getRelativeTime,
  getRelativeTimeString: () => getRelativeTimeString,
  getSignedUrl: () => getSignedUrl,
  getStandardSupabaseClient: () => getStandardSupabaseClient,
  getStartOfDay: () => getStartOfDay,
  getSupabaseClient: () => getSupabaseClient,
  getUniqueValues: () => getUniqueValues,
  groupBy: () => groupBy,
  handleApiError: () => handleApiError,
  handleSupabaseError: () => handleSupabaseError2,
  handleSupabaseServiceError: () => handleSupabaseError,
  highlightSearchTerms: () => highlightSearchTerms,
  hoursToMinutes: () => hoursToMinutes,
  insertAt: () => insertAt,
  intersection: () => intersection,
  isLinkedinUrl: () => isLinkedinUrl,
  isPalindrome: () => isPalindrome,
  isUrl: () => isUrl,
  isValidDate: () => isValidDate,
  isValidEmail: () => isValidEmail,
  isValidNumber: () => isValidNumber,
  isValidPhoneNumber: () => isValidPhoneNumber,
  last: () => last,
  maskString: () => maskString,
  max: () => max,
  maxBy: () => maxBy,
  maxNumber: () => maxNumber,
  min: () => min,
  minBy: () => minBy,
  minNumber: () => minNumber,
  minutesToHours: () => minutesToHours,
  moveItem: () => moveItem,
  normalizeSpaces: () => normalizeSpaces,
  numberValidation: () => numberValidation,
  paginate: () => paginate,
  parseDate: () => parseDate,
  parseInteger: () => parseInteger,
  parseNumber: () => parseNumber,
  processFileUploads: () => processFileUploads,
  randomInteger: () => randomInteger,
  randomNumber: () => randomNumber,
  range: () => range,
  recordExists: () => recordExists,
  removeAt: () => removeAt,
  removeDuplicates: () => removeDuplicates,
  removeDuplicatesByKey: () => removeDuplicatesByKey,
  removeWhitespace: () => removeWhitespace,
  restoreRecord: () => restoreRecord,
  reverse: () => reverse,
  roundNumber: () => roundNumber,
  safeAsync: () => safeAsync,
  safeMath: () => safeMath,
  sanitizeHtml: () => sanitizeHtml,
  searchIgnoreCase: () => searchIgnoreCase,
  servicesSafeAsync: () => safeAsync2,
  showError: () => showError,
  showInfo: () => showInfo,
  showSuccess: () => showSuccess,
  showToast: () => showToast,
  showValidationError: () => showValidationError,
  showWarning: () => showWarning,
  shuffle: () => shuffle,
  skip: () => skip,
  skipLast: () => skipLast,
  softDelete: () => softDelete,
  sortBy: () => sortBy,
  sortByMultiple: () => sortByMultiple,
  stringTemplates: () => stringTemplates,
  subtractDaysFromDate: () => subtractDaysFromDate,
  sum: () => sum,
  sumBy: () => sumBy,
  sumNumbers: () => sumNumbers,
  take: () => take,
  takeLast: () => takeLast,
  throttle: () => throttle,
  throwBusinessError: () => throwBusinessError,
  throwNotFoundError: () => throwNotFoundError,
  toCamelCase: () => toCamelCase,
  toKebabCase: () => toKebabCase,
  toPascalCase: () => toPascalCase,
  toSnakeCase: () => toSnakeCase,
  truncate: () => truncate,
  truncateWords: () => truncateWords,
  ucFirst: () => ucFirst2,
  union: () => union,
  updateAt: () => updateAt,
  uploadMultipleFiles: () => uploadMultipleFiles,
  uploadToSupabaseStorage: () => uploadToSupabaseStorage,
  useAdvancedInfiniteQuery: () => useAdvancedInfiniteQuery,
  useAdvancedMutation: () => useAdvancedMutation,
  useAdvancedQuery: () => useAdvancedQuery,
  useAuth: () => useAuth,
  useAuthGuard: () => useAuthGuard,
  useBulkOperations: () => useBulkOperations,
  useColumnManager: () => useColumnManager,
  useDataService: () => useDataService,
  useDataTable: () => useDataTable,
  useDependentQueries: () => useDependentQueries,
  useErrorBoundary: () => useErrorBoundary,
  useErrorHandler: () => useErrorHandler,
  useIsMobile: () => useIsMobile,
  useOfflineSync: () => useOfflineSync,
  useQuerySync: () => useQuerySync,
  useSavedQueries: () => useSavedQueries,
  useSidebar: () => useSidebar,
  useTheme: () => useTheme,
  useValidationErrorHandler: () => useValidationErrorHandler,
  validateData: () => validateData,
  validateDateRange: () => validateDateRange,
  validateMaxLength: () => validateMaxLength,
  validateMinLength: () => validateMinLength,
  validateNumber: () => validateNumber,
  validateNumericRanges: () => validateNumericRanges,
  validatePositiveNumber: () => validatePositiveNumber,
  validateRequiredFields: () => validateRequiredFields,
  validateSupabaseEnv: () => validateSupabaseEnv,
  withErrorBoundary: () => withErrorBoundary
});
module.exports = __toCommonJS(src_exports);

// src/components/button.tsx
var React = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");

// src/utils/index.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");

// src/utils/toast.ts
var import_sonner = require("sonner");
var showValidationError = (errors) => {
  if (!errors || Array.isArray(errors) && errors.length === 0) {
    return;
  }
  let errorMessage;
  if (Array.isArray(errors)) {
    const validErrors = errors.filter((error) => error && error.trim().length > 0);
    if (validErrors.length === 0) {
      return;
    }
    if (validErrors.length === 1) {
      errorMessage = validErrors[0];
    } else {
      errorMessage = `There are ${validErrors.length} validation errors:

\u2022 ${validErrors.join("\n\u2022 ")}`;
    }
  } else {
    errorMessage = errors;
  }
  import_sonner.toast.error(errorMessage, {
    duration: 1e4,
    // Validation errors stay longer
    position: "top-right",
    style: {
      maxWidth: "400px",
      whiteSpace: "pre-line"
    }
  });
};
var showSuccess = (message) => {
  import_sonner.toast.success(message);
};
var showError = (message) => {
  import_sonner.toast.error(message);
};
var showWarning = (message) => {
  import_sonner.toast.warning(message);
};
var showInfo = (message) => {
  import_sonner.toast.info(message);
};
var showToast = (message, options) => (0, import_sonner.toast)(message, options);
var dismissAll = () => import_sonner.toast.dismiss();
var dismiss = (id) => import_sonner.toast.dismiss(id);

// src/utils/validation.ts
var validateData = (data, schema) => {
  try {
    if (schema && typeof schema.validateSync === "function") {
      schema.validateSync(data, { abortEarly: false });
      return { isValid: true, errors: {} };
    }
    if (typeof schema === "function") {
      const result = schema(data);
      return result;
    }
    return { isValid: true, errors: {} };
  } catch (validationError) {
    const errors = {};
    if (validationError.inner && Array.isArray(validationError.inner)) {
      validationError.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
    } else if (validationError.message) {
      errors.general = validationError.message;
    }
    return { isValid: false, errors };
  }
};
var SCHEMAS = {
  // Applications should extend this with their specific schemas
};

// src/utils/dateUtils.ts
var import_date_fns = require("date-fns");
var DATE_FORMATS = {
  ISO: "yyyy-MM-dd",
  ISO_DATETIME: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
  DISPLAY: "dd/MM/yyyy",
  DISPLAY_DATETIME: "dd/MM/yyyy HH:mm",
  TIME: "HH:mm",
  MONTH_YEAR: "MM/yyyy",
  FULL: "EEEE, MMMM do, yyyy",
  UTC_DATE_IT: "dd/MM/yyyy",
  // Italian format for UTC dates
  UTC_DATETIME_IT: "dd/MM/yyyy HH:mm"
  // Italian format for UTC datetime
};
var formatDate = (date, formatPattern = DATE_FORMATS.DISPLAY) => {
  if (!date) return "";
  try {
    const dateObj = typeof date === "string" ? (0, import_date_fns.parseISO)(date) : date;
    if (!(0, import_date_fns.isValid)(dateObj)) return "";
    return (0, import_date_fns.format)(dateObj, formatPattern);
  } catch (error) {
    console.warn("Date formatting error:", error);
    return "";
  }
};
var formatDisplayDate = (date) => {
  return formatDate(date, DATE_FORMATS.DISPLAY);
};
var formatDisplayDateTime = (date) => {
  return formatDate(date, DATE_FORMATS.DISPLAY_DATETIME);
};
var formatTime = (date) => {
  return formatDate(date, DATE_FORMATS.TIME);
};
var formatISODate = (date) => {
  return formatDate(date, DATE_FORMATS.ISO);
};
var formatISODateTime = (date) => {
  if (!date) return "";
  try {
    const dateObj = typeof date === "string" ? (0, import_date_fns.parseISO)(date) : date;
    if (!(0, import_date_fns.isValid)(dateObj)) return "";
    return dateObj.toISOString();
  } catch (error) {
    console.warn("ISO datetime formatting error:", error);
    return "";
  }
};
var parseDate = (dateString) => {
  if (!dateString) return null;
  try {
    const parsed = (0, import_date_fns.parseISO)(dateString);
    return (0, import_date_fns.isValid)(parsed) ? parsed : null;
  } catch (error) {
    console.warn("Date parsing error:", error);
    return null;
  }
};
var getCurrentISODate = () => {
  return formatISODate(/* @__PURE__ */ new Date());
};
var getCurrentISODateTime = () => {
  return (/* @__PURE__ */ new Date()).toISOString();
};
var addDaysToDate = (date, days) => {
  const dateObj = typeof date === "string" ? (0, import_date_fns.parseISO)(date) : date;
  return (0, import_date_fns.addDays)(dateObj, days);
};
var subtractDaysFromDate = (date, days) => {
  const dateObj = typeof date === "string" ? (0, import_date_fns.parseISO)(date) : date;
  return (0, import_date_fns.subDays)(dateObj, days);
};
var getStartOfDay = (date) => {
  const dateObj = typeof date === "string" ? (0, import_date_fns.parseISO)(date) : date;
  return (0, import_date_fns.startOfDay)(dateObj);
};
var getEndOfDay = (date) => {
  const dateObj = typeof date === "string" ? (0, import_date_fns.parseISO)(date) : date;
  return (0, import_date_fns.endOfDay)(dateObj);
};
var getDaysDifference = (date1, date2) => {
  const dateObj1 = typeof date1 === "string" ? (0, import_date_fns.parseISO)(date1) : date1;
  const dateObj2 = typeof date2 === "string" ? (0, import_date_fns.parseISO)(date2) : date2;
  return (0, import_date_fns.differenceInDays)(dateObj1, dateObj2);
};
var getHoursDifference = (date1, date2) => {
  const dateObj1 = typeof date1 === "string" ? (0, import_date_fns.parseISO)(date1) : date1;
  const dateObj2 = typeof date2 === "string" ? (0, import_date_fns.parseISO)(date2) : date2;
  return (0, import_date_fns.differenceInHours)(dateObj1, dateObj2);
};
var getMinutesDifference = (date1, date2) => {
  const dateObj1 = typeof date1 === "string" ? (0, import_date_fns.parseISO)(date1) : date1;
  const dateObj2 = typeof date2 === "string" ? (0, import_date_fns.parseISO)(date2) : date2;
  return (0, import_date_fns.differenceInMinutes)(dateObj1, dateObj2);
};
var isValidDate = (date) => {
  if (!date) return false;
  try {
    const dateObj = typeof date === "string" ? (0, import_date_fns.parseISO)(date) : date;
    return (0, import_date_fns.isValid)(dateObj);
  } catch (error) {
    return false;
  }
};
var getRelativeTime = (date) => {
  if (!date) return "";
  try {
    const dateObj = typeof date === "string" ? (0, import_date_fns.parseISO)(date) : date;
    if (!(0, import_date_fns.isValid)(dateObj)) return "";
    const now = /* @__PURE__ */ new Date();
    const diffInMinutes = (0, import_date_fns.differenceInMinutes)(now, dateObj);
    if (diffInMinutes < 1) return "just now";
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths === 1 ? "" : "s"} ago`;
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears === 1 ? "" : "s"} ago`;
  } catch (error) {
    console.warn("Relative time calculation error:", error);
    return "";
  }
};
var createDateRange = (startDate, endDate) => ({
  startDate: formatISODate(startDate),
  endDate: formatISODate(endDate)
});
var getDateRangePresets = () => {
  const today = /* @__PURE__ */ new Date();
  const yesterday = (0, import_date_fns.subDays)(today, 1);
  const lastWeek = (0, import_date_fns.subDays)(today, 7);
  const lastMonth = (0, import_date_fns.subDays)(today, 30);
  const lastYear = (0, import_date_fns.subDays)(today, 365);
  return {
    today: createDateRange(formatISODate(today), formatISODate(today)),
    yesterday: createDateRange(formatISODate(yesterday), formatISODate(yesterday)),
    lastWeek: createDateRange(formatISODate(lastWeek), formatISODate(today)),
    lastMonth: createDateRange(formatISODate(lastMonth), formatISODate(today)),
    lastYear: createDateRange(formatISODate(lastYear), formatISODate(today))
  };
};
var validateDateRange = (startDate, endDate) => {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  if (!start || !end) return false;
  return start <= end;
};
var formatDuration = (minutes) => {
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
var hoursToMinutes = (hours) => {
  return Math.round(hours * 60);
};
var minutesToHours = (minutes) => {
  return minutes / 60;
};
function getRelativeTimeString(dateString) {
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0);
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const diff = date.getTime() - today.getTime();
  const unitDiff = Math.round(diff / (1e3 * 60 * 60 * 24));
  if (Math.abs(unitDiff) > 7) {
    return new Intl.DateTimeFormat(void 0, {
      day: "numeric",
      month: "long"
    }).format(date);
  }
  const rtf = new Intl.RelativeTimeFormat(void 0, { numeric: "auto" });
  return ucFirst(rtf.format(unitDiff, "day"));
}
function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var formatUtcDate = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleDateString("it-IT", {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
};
var formatUtcDateTime = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleString("it-IT", {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
};
var TIME_CONSTANTS = {
  MINUTES_PER_HOUR: 60,
  HOURS_PER_DAY: 24,
  DAYS_PER_WEEK: 7,
  MILLISECONDS_PER_SECOND: 1e3,
  MILLISECONDS_PER_MINUTE: 60 * 1e3,
  MILLISECONDS_PER_HOUR: 60 * 60 * 1e3,
  MILLISECONDS_PER_DAY: 24 * 60 * 60 * 1e3
};

// src/utils/numberUtils.ts
var formatCurrency = (amount, currency = "EUR", locale = "it-IT") => {
  if (amount === null || amount === void 0 || amount === "") return "";
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numAmount)) return "";
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numAmount);
  } catch (error) {
    console.warn("Currency formatting error:", error);
    return `${currency} ${numAmount.toFixed(2)}`;
  }
};
var formatPercentage = (value, decimals = 1, locale = "it-IT") => {
  if (value === null || value === void 0 || value === "") return "";
  const numValue = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(numValue)) return "";
  try {
    return new Intl.NumberFormat(locale, {
      style: "percent",
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(numValue / 100);
  } catch (error) {
    console.warn("Percentage formatting error:", error);
    return `${numValue.toFixed(decimals)}%`;
  }
};
var formatNumber = (value, decimals = 0, locale = "it-IT") => {
  if (value === null || value === void 0 || value === "") return "";
  const numValue = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(numValue)) return "";
  try {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(numValue);
  } catch (error) {
    console.warn("Number formatting error:", error);
    return numValue.toFixed(decimals);
  }
};
var formatNumberWithUnit = (value, unit, decimals = 2, locale = "it-IT") => {
  if (value === null || value === void 0 || value === "") return "";
  const formattedNumber = formatNumber(value, decimals, locale);
  return formattedNumber ? `${formattedNumber} ${unit}` : "";
};
var formatWeight = (value, decimals = 2, locale = "it-IT") => {
  return formatNumberWithUnit(value, "kg", decimals, locale);
};
var formatVolume = (value, decimals = 2, locale = "it-IT") => {
  return formatNumberWithUnit(value, "L", decimals, locale);
};
var formatDistance = (value, decimals = 2, locale = "it-IT") => {
  return formatNumberWithUnit(value, "m", decimals, locale);
};
var parseNumber = (value) => {
  if (value === null || value === void 0 || value === "") return null;
  const numValue = typeof value === "string" ? parseFloat(value.replace(/,/g, ".")) : value;
  return isNaN(numValue) ? null : numValue;
};
var parseInteger = (value) => {
  if (value === null || value === void 0 || value === "") return null;
  const numValue = typeof value === "string" ? parseInt(value, 10) : Math.floor(value);
  return isNaN(numValue) ? null : numValue;
};
var roundNumber = (value, decimals = 2) => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
};
var clampNumber = (value, min2, max2) => {
  return Math.min(Math.max(value, min2), max2);
};
var isValidNumber = (value) => {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
};
var calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return value / total * 100;
};
var calculatePercentageChange = (oldValue, newValue) => {
  if (oldValue === 0) return newValue === 0 ? 0 : 100;
  return (newValue - oldValue) / oldValue * 100;
};
var sumNumbers = (numbers) => {
  return numbers.reduce((sum2, num) => {
    const validNum = parseNumber(num);
    return sum2 + (validNum || 0);
  }, 0);
};
var averageNumbers = (numbers) => {
  const validNumbers = numbers.filter((num) => parseNumber(num) !== null);
  if (validNumbers.length === 0) return 0;
  return sumNumbers(validNumbers) / validNumbers.length;
};
var minNumber = (numbers) => {
  const validNumbers = numbers.map(parseNumber).filter((num) => num !== null);
  return validNumbers.length > 0 ? Math.min(...validNumbers) : null;
};
var maxNumber = (numbers) => {
  const validNumbers = numbers.map(parseNumber).filter((num) => num !== null);
  return validNumbers.length > 0 ? Math.max(...validNumbers) : null;
};
var randomNumber = (min2, max2) => {
  return Math.random() * (max2 - min2) + min2;
};
var randomInteger = (min2, max2) => {
  return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
};
var formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
var formatFileSize = (bytes) => {
  return formatBytes(bytes, 1);
};
var numberValidation = {
  isPositive: (value) => value > 0,
  isNegative: (value) => value < 0,
  isZero: (value) => value === 0,
  isInteger: (value) => Number.isInteger(value),
  isFloat: (value) => !Number.isInteger(value),
  inRange: (value, min2, max2) => value >= min2 && value <= max2,
  isEven: (value) => value % 2 === 0,
  isOdd: (value) => value % 2 !== 0
};
var safeMath = {
  add: (a, b) => (a || 0) + (b || 0),
  subtract: (a, b) => (a || 0) - (b || 0),
  multiply: (a, b) => (a || 0) * (b || 0),
  divide: (a, b) => {
    if (!b || b === 0) return 0;
    return (a || 0) / b;
  },
  percentage: (value, total) => {
    if (!total || total === 0) return 0;
    return (value || 0) / total * 100;
  }
};
var NUMBER_CONSTANTS = {
  MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  EPSILON: Number.EPSILON,
  POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
  NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY
};

// src/utils/stringUtils.ts
var ucFirst2 = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
var capitalizeWords = (str) => {
  if (!str) return "";
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};
var toCamelCase = (str) => {
  if (!str) return "";
  return str.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()
  ).replace(/\s+/g, "");
};
var toKebabCase = (str) => {
  if (!str) return "";
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
};
var toSnakeCase = (str) => {
  if (!str) return "";
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase();
};
var toPascalCase = (str) => {
  if (!str) return "";
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()).replace(/\s+/g, "");
};
var truncate = (str, length, suffix = "...") => {
  if (!str) return "";
  if (str.length <= length) return str;
  return str.substring(0, length - suffix.length) + suffix;
};
var truncateWords = (str, wordCount, suffix = "...") => {
  if (!str) return "";
  const words = str.split(" ");
  if (words.length <= wordCount) return str;
  return words.slice(0, wordCount).join(" ") + suffix;
};
var cleanWhitespace = (str) => {
  if (!str) return "";
  return str.replace(/\s+/g, " ").trim();
};
var removeWhitespace = (str) => {
  if (!str) return "";
  return str.replace(/\s/g, "");
};
var sanitizeHtml = (str) => {
  if (!str) return "";
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;"
  };
  return str.replace(/[&<>"'/]/g, (s) => map[s]);
};
var generateSlug = (str) => {
  if (!str) return "";
  return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
};
var getInitials = (name, maxLength = 2) => {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  const initials = words.map((word) => word.charAt(0).toUpperCase()).slice(0, maxLength).join("");
  return initials;
};
var countWords = (str) => {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter((word) => word.length > 0).length;
};
var countCharacters = (str) => {
  if (!str) return 0;
  return str.replace(/\s/g, "").length;
};
var reverse = (str) => {
  if (!str) return "";
  return str.split("").reverse().join("");
};
var isPalindrome = (str) => {
  if (!str) return false;
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === reverse(cleaned);
};
var normalizeSpaces = (str) => {
  if (!str) return "";
  return str.replace(/\s+/g, " ").trim();
};
var maskString = (str, maskChar = "*", visibleStart = 0, visibleEnd = 0) => {
  if (!str) return "";
  if (str.length <= visibleStart + visibleEnd) return str;
  const start = str.substring(0, visibleStart);
  const end = str.substring(str.length - visibleEnd);
  const masked = maskChar.repeat(str.length - visibleStart - visibleEnd);
  return start + masked + end;
};
var extractEmailDomain = (email) => {
  if (!email) return "";
  const parts = email.split("@");
  return parts.length === 2 ? parts[1] : "";
};
var extractEmailUsername = (email) => {
  if (!email) return "";
  const parts = email.split("@");
  return parts.length >= 1 ? parts[0] : "";
};
var formatPhoneNumber = (phone) => {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return digits.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  } else if (digits.length === 11 && digits.startsWith("39")) {
    return digits.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "+$1 $2 $3 $4");
  }
  return phone;
};
var isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
var isValidPhoneNumber = (phone) => {
  if (!phone) return false;
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};
var generateRandomString = (length, charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
};
var generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
};
var compareStringsIgnoreCase = (str1, str2) => {
  if (!str1 && !str2) return true;
  if (!str1 || !str2) return false;
  return str1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === str2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
var searchIgnoreCase = (text, search) => {
  if (!text || !search) return false;
  const normalizedText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const normalizedSearch = search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return normalizedText.includes(normalizedSearch);
};
var highlightSearchTerms = (text, searchTerm, highlightClass = "highlight") => {
  if (!text || !searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.replace(regex, `<span class="${highlightClass}">$1</span>`);
};
var stringTemplates = {
  interpolate: (template, variables) => {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return variables[key] !== void 0 ? String(variables[key]) : match;
    });
  },
  format: (template, ...args) => {
    return template.replace(/{(\d+)}/g, (match, index) => {
      return args[index] !== void 0 ? String(args[index]) : match;
    });
  }
};
var STRING_CONSTANTS = {
  EMPTY: "",
  SPACE: " ",
  NEWLINE: "\n",
  TAB: "	",
  ELLIPSIS: "...",
  DASH: "-",
  UNDERSCORE: "_"
};

// src/utils/arrayUtils.ts
var removeDuplicates = (array) => {
  return Array.from(new Set(array));
};
var removeDuplicatesByKey = (array, key) => {
  const seen = /* @__PURE__ */ new Set();
  return array.filter((item) => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};
var groupBy = (array, key) => {
  return array.reduce((groups, item) => {
    const value = String(item[key]);
    if (!groups[value]) {
      groups[value] = [];
    }
    groups[value].push(item);
    return groups;
  }, {});
};
var sortBy = (array, key, ascending = true) => {
  return [...array].sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];
    if (valueA < valueB) return ascending ? -1 : 1;
    if (valueA > valueB) return ascending ? 1 : -1;
    return 0;
  });
};
var sortByMultiple = (array, keys) => {
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
var filterBy = (array, filters) => {
  return array.filter((item) => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === null || value === void 0) return true;
      const itemValue = item[key];
      if (Array.isArray(value)) {
        return value.includes(itemValue);
      }
      if (typeof value === "string" && typeof itemValue === "string") {
        return itemValue.toLowerCase().includes(value.toLowerCase());
      }
      return itemValue === value;
    });
  });
};
var findBy = (array, key, value) => {
  return array.find((item) => item[key] === value);
};
var findIndexBy = (array, key, value) => {
  return array.findIndex((item) => item[key] === value);
};
var containsBy = (array, key, value) => {
  return array.some((item) => item[key] === value);
};
var getUniqueValues = (array, key) => {
  return removeDuplicates(array.map((item) => item[key]));
};
var chunk = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};
var flatten = (array) => {
  return array.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : [item]);
  }, []);
};
var intersection = (array1, array2) => {
  return array1.filter((item) => array2.includes(item));
};
var difference = (array1, array2) => {
  return array1.filter((item) => !array2.includes(item));
};
var union = (array1, array2) => {
  return removeDuplicates([...array1, ...array2]);
};
var shuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
var getRandomItem = (array) => {
  if (array.length === 0) return void 0;
  return array[Math.floor(Math.random() * array.length)];
};
var getRandomItems = (array, count) => {
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(count, array.length));
};
var moveItem = (array, fromIndex, toIndex) => {
  const result = [...array];
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
};
var insertAt = (array, index, item) => {
  const result = [...array];
  result.splice(index, 0, item);
  return result;
};
var removeAt = (array, index) => {
  const result = [...array];
  result.splice(index, 1);
  return result;
};
var updateAt = (array, index, item) => {
  const result = [...array];
  result[index] = item;
  return result;
};
var paginate = (array, page, perPage) => {
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
    hasPreviousPage: page > 1
  };
};
var sum = (array) => {
  return array.reduce((total, num) => total + num, 0);
};
var sumBy = (array, key) => {
  return array.reduce((total, item) => {
    const value = item[key];
    return total + (typeof value === "number" ? value : 0);
  }, 0);
};
var average = (array) => {
  if (array.length === 0) return 0;
  return sum(array) / array.length;
};
var averageBy = (array, key) => {
  if (array.length === 0) return 0;
  return sumBy(array, key) / array.length;
};
var min = (array) => {
  if (array.length === 0) return void 0;
  return Math.min(...array);
};
var minBy = (array, key) => {
  if (array.length === 0) return void 0;
  return array.reduce((min2, item) => {
    const value = item[key];
    const minValue = min2[key];
    return value < minValue ? item : min2;
  });
};
var max = (array) => {
  if (array.length === 0) return void 0;
  return Math.max(...array);
};
var maxBy = (array, key) => {
  if (array.length === 0) return void 0;
  return array.reduce((max2, item) => {
    const value = item[key];
    const maxValue = max2[key];
    return value > maxValue ? item : max2;
  });
};
var countOccurrences = (array) => {
  return array.reduce((counts, item) => {
    const key = String(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
};
var countBy = (array, key) => {
  return array.reduce((counts, item) => {
    const value = String(item[key]);
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
};
var first = (array) => {
  return array[0];
};
var last = (array) => {
  return array[array.length - 1];
};
var take = (array, count) => {
  return array.slice(0, count);
};
var takeLast = (array, count) => {
  return array.slice(-count);
};
var skip = (array, count) => {
  return array.slice(count);
};
var skipLast = (array, count) => {
  return array.slice(0, -count);
};
var compact = (array) => {
  return array.filter(Boolean);
};
var createArray = (length, defaultValue) => {
  return Array(length).fill(defaultValue);
};
var range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
};
var arrayComparison = {
  isEqual: (array1, array2) => {
    if (array1.length !== array2.length) return false;
    return array1.every((item, index) => item === array2[index]);
  },
  isEqualUnordered: (array1, array2) => {
    if (array1.length !== array2.length) return false;
    const sorted1 = [...array1].sort();
    const sorted2 = [...array2].sort();
    return arrayComparison.isEqual(sorted1, sorted2);
  },
  isSubset: (subset, superset) => {
    return subset.every((item) => superset.includes(item));
  },
  isSuperset: (superset, subset) => {
    return arrayComparison.isSubset(subset, superset);
  }
};

// src/utils/fetchUtils.ts
async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 2e3 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal
  });
  clearTimeout(id);
  return response;
}

// src/utils/index.ts
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
var confirmAction = (message) => {
  return confirm(message);
};
var getNested = (obj, path) => {
  if (!obj || !path) return void 0;
  if (path.indexOf(".") === -1) return obj[path];
  return path.split(".").reduce((acc, key) => acc && acc[key] !== void 0 ? acc[key] : void 0, obj);
};
var formatDate2 = (date, format2 = "yyyy-MM-dd") => {
  if (!date) return "Not set";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "Invalid date";
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
var formatDateTime = (datetime) => {
  if (!datetime) return "Not scheduled";
  const d = new Date(datetime);
  if (isNaN(d.getTime())) return "Invalid datetime";
  return d.toISOString().replace("T", " ").replace(".000Z", "");
};
var generateId = () => {
  return `ID_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
var debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
var throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
var safeAsync = async (asyncFn, context = {}) => {
  try {
    return await asyncFn();
  } catch (error) {
    return error instanceof Error ? error : new Error(String(error));
  }
};
var handleApiError = (error, context = {}) => {
  let errorMessage = "An unexpected error occurred";
  if (error.response) {
    const status = error.response.status;
    switch (status) {
      case 400:
        errorMessage = "Invalid request data";
        break;
      case 401:
        errorMessage = "Authentication required";
        break;
      case 403:
        errorMessage = "Access denied";
        break;
      case 404:
        errorMessage = "Resource not found";
        break;
      case 500:
      case 502:
      case 503:
        errorMessage = "Server error occurred";
        break;
      default:
        errorMessage = "Network error occurred";
    }
  } else if (error.request) {
    errorMessage = "Network connection failed";
  } else if (error.message) {
    errorMessage = error.message;
  }
  return new Error(errorMessage);
};

// src/components/button-variants.ts
var import_class_variance_authority = require("class-variance-authority");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

// src/components/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    }
  );
});
Button.displayName = "Button";

// src/components/input.tsx
var React2 = __toESM(require("react"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        type,
        "data-slot": "input",
        className: cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/label.tsx
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var Label = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  "label",
  {
    ref,
    "data-slot": "label",
    className: cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    ),
    ...props
  }
));
Label.displayName = "Label";

// src/components/badge.tsx
var import_react_slot2 = require("@radix-ui/react-slot");

// src/components/badge-variants.ts
var import_class_variance_authority2 = require("class-variance-authority");
var badgeVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

// src/components/badge.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/components/card.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Card({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/components/table.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Table({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      ),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCaption({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/utils/utils.ts
var import_clsx2 = require("clsx");
var import_tailwind_merge2 = require("tailwind-merge");
function cn2(...inputs) {
  return (0, import_tailwind_merge2.twMerge)((0, import_clsx2.clsx)(inputs));
}

// src/components/skeleton.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "skeleton",
      className: cn2("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}

// src/components/textarea.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn2(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

// src/components/theme/ThemeProvider.tsx
var import_react = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var ThemeCtx = (0, import_react.createContext)(null);
function applyTheme(t) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = t === "dark" || t === "system" && systemDark;
  root.classList.toggle("dark", isDark);
}
var ThemeProvider = ({
  defaultTheme = "system",
  children
}) => {
  const [theme, setThemeState] = (0, import_react.useState)(defaultTheme);
  (0, import_react.useEffect)(() => {
    const stored = localStorage.getItem("theme") || defaultTheme;
    setThemeState(stored);
    applyTheme(stored);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const current = localStorage.getItem("theme") || "system";
      if (current === "system") applyTheme("system");
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [defaultTheme]);
  const setTheme = (t) => {
    localStorage.setItem("theme", t);
    setThemeState(t);
    applyTheme(t);
  };
  const value = (0, import_react.useMemo)(() => ({ theme, setTheme }), [theme]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ThemeCtx.Provider, { value, children });
};
var useTheme = () => {
  const ctx = (0, import_react.useContext)(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

// src/components/theme/ThemeSwitch.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var ThemeSwitch = ({ className }) => {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "inline-flex gap-2 items-center", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "select",
    {
      "aria-label": "Theme",
      value: theme,
      onChange: (e) => setTheme(e.target.value),
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "w-36",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "light", children: "Light" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "dark", children: "Dark" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "system", children: "System" })
      ]
    }
  ) });
};

// src/components/DataTable.tsx
var import_react2 = require("react");
var import_react_table = require("@tanstack/react-table");

// src/constants/index.ts
var ALERT_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info"
};
var CONFIRMATION_TYPES = {
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info"
};
var TIME_CONSTANTS2 = {
  MILLISECONDS_PER_SECOND: 1e3,
  SECONDS_PER_MINUTE: 60,
  MINUTES_PER_HOUR: 60,
  HOURS_PER_DAY: 24,
  DAYS_PER_WEEK: 7,
  DAYS_PER_YEAR: 365,
  MILLISECONDS_PER_MINUTE: 60 * 1e3,
  MILLISECONDS_PER_HOUR: 60 * 60 * 1e3,
  MILLISECONDS_PER_DAY: 24 * 60 * 60 * 1e3
};
var VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Please enter a valid email address",
  INVALID_DATE: "Please enter a valid date",
  END_DATE_BEFORE_START: "End date cannot be before start date",
  END_TIME_BEFORE_START: "End time must be after start time when dates are the same",
  QUANTITY_COMPLETED_EXCEEDS_TOTAL: "Quantity completed cannot exceed total quantity"
};
var FIELD_CONFIGS = {
  // Decimal precision for different field types
  DECIMAL_PRECISION: {
    ONE_DECIMAL: ["setup_time", "changeover_time"],
    TWO_DECIMAL: ["cost", "price"],
    PLAIN_NUMBER: ["speed", "quantity"]
  },
  // Field step values
  FIELD_STEPS: {
    TIME: 0.1,
    COST: 0.01,
    QUANTITY: 1,
    DIMENSION: 1
  }
};
var ERROR_TYPES = {
  VALIDATION_ERROR: "VALIDATION_ERROR",
  NETWORK_ERROR: "NETWORK_ERROR",
  SERVER_ERROR: "SERVER_ERROR",
  AUTHENTICATION_ERROR: "AUTHENTICATION_ERROR",
  AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR",
  NOT_FOUND_ERROR: "NOT_FOUND_ERROR",
  BUSINESS_LOGIC_ERROR: "BUSINESS_LOGIC_ERROR",
  UI_ERROR: "UI_ERROR",
  API_ERROR: "API_ERROR",
  TIMEOUT_ERROR: "TIMEOUT_ERROR",
  PERMISSION_ERROR: "PERMISSION_ERROR",
  DUPLICATE_ERROR: "DUPLICATE_ERROR"
};
var COMMON_STATUSES = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  IN_PROGRESS: "IN_PROGRESS"
};
var DATA_TABLE_DEFAULTS = {
  PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
  MAX_VISIBLE_PAGES: 5
};
var DEPARTMENT_TYPES = {
  PRINTING: "STAMPA",
  PACKAGING: "CONFEZIONAMENTO"
};
var WORK_CENTERS = {
  ZANICA: "ZANICA",
  BUSTO_GAROLFO: "BUSTO_GAROLFO",
  BOTH: "BOTH"
};
var MACHINE_STATUSES = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE"
};
var PRODUCT_TYPES = {
  CREMA: "CREMA",
  LIQUIDO: "LIQUIDO",
  POLVERI: "POLVERI"
};
var SHIFT_TYPES = {
  T1: "T1",
  T2: "T2",
  T3: "T3"
};
var SEAL_SIDES = {
  THREE: 3,
  FOUR: 4
};
var TASK_STATUSES = {
  NOT_SCHEDULED: "NOT SCHEDULED",
  SCHEDULED: "SCHEDULED",
  IN_PROGRESS: "IN PROGRESS",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED"
};

// src/components/DataTable.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var Table2 = ({ children, className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("table", { className: `w-full border-collapse border border-gray-200 table-auto ${className || ""}`, ...props, children });
var TableHeader2 = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("thead", { className: "bg-gray-50", children });
var TableBody2 = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tbody", { className: "divide-y divide-gray-200", children });
var TableRow2 = ({ children, onClick, className }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  "tr",
  {
    onClick,
    className: `${onClick ? "cursor-pointer hover:bg-gray-50" : ""} ${className || ""}`,
    children
  }
);
var TableHead2 = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 min-w-0", children });
var TableCell2 = ({ children, colSpan, className }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  "td",
  {
    colSpan,
    className: `px-4 py-3 text-sm text-gray-900 border-b border-gray-200 min-w-0 max-w-xs ${className || ""}`,
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "truncate", title: typeof children === "string" ? children : "", children })
  }
);
var Button2 = ({ children, variant = "default", size = "default", onClick, disabled, className }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary"
  };
  const sizeClasses = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "button",
    {
      onClick,
      disabled,
      className: `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${sizeClasses[size] || sizeClasses.default} ${className || ""}`,
      children
    }
  );
};
function DataTable({
  data,
  columns: userColumns,
  onEditRow,
  onDeleteRow,
  onRowClick,
  enableFiltering = false,
  filterableColumns = [],
  stickyColumns = [],
  onBulkDelete,
  onBulkExport,
  initialPageSize = DATA_TABLE_DEFAULTS.PAGE_SIZE,
  pageSizeOptions = [...DATA_TABLE_DEFAULTS.PAGE_SIZE_OPTIONS],
  enableGlobalSearch = true,
  enableColumnVisibility = false,
  enableRowSelection = false,
  loading = false,
  emptyMessage = "No results found.",
  className
}) {
  const [filters, setFilters] = (0, import_react2.useState)({});
  const [page, setPage] = (0, import_react2.useState)(0);
  const [pageSize, setPageSize] = (0, import_react2.useState)(initialPageSize);
  const [selectedIds, setSelectedIds] = (0, import_react2.useState)(/* @__PURE__ */ new Set());
  const [globalQuery, setGlobalQuery] = (0, import_react2.useState)("");
  const [sorting, setSorting] = (0, import_react2.useState)([]);
  const [columnVisibility, setColumnVisibility] = (0, import_react2.useState)({});
  const [showColumnDropdown, setShowColumnDropdown] = (0, import_react2.useState)(false);
  const columns = (0, import_react2.useMemo)(() => {
    const selectionColumn = enableRowSelection ? {
      id: "select",
      header: ({ table: table2 }) => {
        const currentPageRows = table2.getRowModel().rows.map((row) => row.original);
        const allSelected = currentPageRows.length > 0 && currentPageRows.every((r) => selectedIds.has(r.id));
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "w-8", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "input",
          {
            type: "checkbox",
            "aria-label": "Select all",
            checked: allSelected,
            onChange: (e) => {
              const newSet = new Set(selectedIds);
              if (e.target.checked) {
                currentPageRows.forEach((r) => newSet.add(r.id));
              } else {
                currentPageRows.forEach((r) => newSet.delete(r.id));
              }
              setSelectedIds(newSet);
            },
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          }
        ) });
      },
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex w-8", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "input",
        {
          type: "checkbox",
          "aria-label": "Select row",
          checked: selectedIds.has(row.original.id),
          onChange: (e) => {
            const newSet = new Set(selectedIds);
            if (e.target.checked) {
              newSet.add(row.original.id);
            } else {
              newSet.delete(row.original.id);
            }
            setSelectedIds(newSet);
          },
          className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        }
      ) })
    } : null;
    const actionColumn = onEditRow || onDeleteRow ? {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex gap-2", children: [
        onEditRow && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => onEditRow(row.original),
            children: "Edit"
          }
        ),
        onDeleteRow && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Button2,
          {
            variant: "destructive",
            size: "sm",
            onClick: () => {
              if (confirmAction("Are you sure you want to delete this item?")) {
                onDeleteRow(row.original);
              }
            },
            children: "Delete"
          }
        )
      ] })
    } : null;
    return [selectionColumn, ...userColumns, actionColumn].filter(Boolean);
  }, [userColumns, onEditRow, onDeleteRow, enableRowSelection, selectedIds]);
  const filteredData = (0, import_react2.useMemo)(() => {
    let result = data;
    if (enableFiltering && Object.keys(filters).length > 0) {
      result = result.filter((item) => {
        return Object.entries(filters).every(([column, filterValue]) => {
          if (!filterValue) return true;
          const value = getNested(item, column);
          return String(value).toLowerCase().includes(filterValue.toLowerCase());
        });
      });
    }
    if (enableGlobalSearch && globalQuery) {
      result = result.filter((item) => {
        return Object.values(item).some(
          (value) => String(value).toLowerCase().includes(globalQuery.toLowerCase())
        );
      });
    }
    return result;
  }, [data, filters, globalQuery, enableFiltering, enableGlobalSearch]);
  const paginatedData = (0, import_react2.useMemo)(() => {
    const start = page * pageSize;
    const end = start + pageSize;
    return filteredData.slice(start, end);
  }, [filteredData, page, pageSize]);
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const table = (0, import_react_table.useReactTable)({
    data: paginatedData,
    columns,
    state: {
      sorting,
      columnVisibility
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: (0, import_react_table.getCoreRowModel)(),
    getSortedRowModel: (0, import_react_table.getSortedRowModel)(),
    getFilteredRowModel: (0, import_react_table.getFilteredRowModel)()
  });
  const handleFilterChange = (column, value) => {
    setFilters((prev) => ({ ...prev, [column]: value }));
    setPage(0);
  };
  const clearFilters = () => {
    setFilters({});
    setGlobalQuery("");
    setPage(0);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: `w-full space-y-4 ${className || ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [
      enableGlobalSearch && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex-1 max-w-sm", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "input",
        {
          type: "text",
          placeholder: "Search all columns...",
          value: globalQuery,
          onChange: (e) => {
            setGlobalQuery(e.target.value);
            setPage(0);
          },
          className: "w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-2", children: [
        globalQuery && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button2, { variant: "outline", size: "sm", onClick: clearFilters, children: "Clear Search" }),
        enableColumnVisibility && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            Button2,
            {
              variant: "outline",
              size: "sm",
              onClick: () => setShowColumnDropdown(!showColumnDropdown),
              children: "Columns \u2699\uFE0F"
            }
          ),
          showColumnDropdown && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "div",
              {
                className: "fixed inset-0 z-10",
                onClick: () => setShowColumnDropdown(false)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-20 p-2", children: table.getAllColumns().filter((column) => column.getCanHide()).map((column) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("label", { className: "flex items-center gap-2 p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "input",
                {
                  type: "checkbox",
                  checked: column.getIsVisible(),
                  onChange: column.getToggleVisibilityHandler(),
                  className: "h-4 w-4 rounded border-gray-300"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-sm capitalize", children: column.id.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()) })
            ] }, column.id)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "rounded-md border border-gray-200 overflow-hidden shadow-sm", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Table2, { className: "min-w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TableHeader2, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TableRow2, { children: headerGroup.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TableHead2, { children: header.isPlaceholder ? null : /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "div",
        {
          className: header.column.getCanSort() ? "cursor-pointer select-none flex items-center gap-2" : "",
          onClick: header.column.getToggleSortingHandler(),
          children: [
            (0, import_react_table.flexRender)(header.column.columnDef.header, header.getContext()),
            header.column.getCanSort() && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ml-1", children: {
              asc: "\u2191",
              desc: "\u2193"
            }[header.column.getIsSorted()] ?? "\u2195\uFE0F" })
          ]
        }
      ) }, header.id)) }, headerGroup.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TableBody2, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TableRow2, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TableCell2, { colSpan: columns.length, className: "h-24 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900" }),
        "Loading..."
      ] }) }) }) : table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        TableRow2,
        {
          onClick: () => onRowClick && onRowClick(row.original),
          className: onRowClick ? "cursor-pointer hover:bg-muted/50" : "",
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TableCell2, { children: (0, import_react_table.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TableRow2, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TableCell2, { colSpan: columns.length, className: "h-24 text-center text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "text-4xl", children: "\u{1F4CB}" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: emptyMessage })
      ] }) }) }) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "text-sm text-muted-foreground", children: [
        "Showing ",
        page * pageSize + 1,
        " to ",
        Math.min((page + 1) * pageSize, filteredData.length),
        " of ",
        filteredData.length,
        " results"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setPage(Math.max(0, page - 1)),
            disabled: page === 0,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "text-sm", children: [
          "Page ",
          page + 1,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setPage(Math.min(totalPages - 1, page + 1)),
            disabled: page >= totalPages - 1,
            children: "Next"
          }
        )
      ] })
    ] }),
    selectedIds.size > 0 && (onBulkDelete || onBulkExport) && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 -mx-4 -mb-4 rounded-b-md", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Button2,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setSelectedIds(/* @__PURE__ */ new Set()),
            className: "h-8 w-8 p-0",
            children: "\u2715"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "text-sm font-medium", children: [
          selectedIds.size,
          " item",
          selectedIds.size > 1 ? "s" : "",
          " selected"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex gap-2", children: [
        onBulkExport && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => onBulkExport(Array.from(selectedIds)),
            children: "\u{1F4E4} Export"
          }
        ),
        onBulkDelete && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Button2,
          {
            variant: "destructive",
            size: "sm",
            onClick: () => {
              if (confirmAction(`Delete ${selectedIds.size} selected items? This action cannot be undone.`)) {
                onBulkDelete(Array.from(selectedIds));
                setSelectedIds(/* @__PURE__ */ new Set());
              }
            },
            children: "\u{1F5D1}\uFE0F Delete"
          }
        )
      ] })
    ] }) })
  ] });
}

// src/components/ErrorBoundary.tsx
var import_react3 = __toESM(require("react"), 1);
var import_jsx_runtime12 = require("react/jsx-runtime");
var ErrorBoundary = class extends import_react3.default.Component {
  constructor(props) {
    super(props);
    this.handleRetry = () => {
      const maxRetries = this.props.maxRetries || 3;
      if (this.state.retryCount < maxRetries) {
        this.setState({
          hasError: false,
          error: null,
          errorInfo: null,
          errorId: null,
          retryCount: this.state.retryCount + 1
        });
      }
    };
    this.handleReset = () => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        retryCount: 0
      });
    };
    this.handleReportIssue = () => {
      const subject = encodeURIComponent(`App Error Report - ${this.state.errorId}`);
      const body = encodeURIComponent(`
Error Report Details:
- Error ID: ${this.state.errorId}
- Error: ${this.state.error?.message || "Unknown error"}
- URL: ${window.location.href}
- User Agent: ${navigator.userAgent}
- Timestamp: ${(/* @__PURE__ */ new Date()).toISOString()}

Please describe what you were doing when this error occurred:
    `);
      window.open(`mailto:support@company.com?subject=${subject}&body=${body}`);
    };
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
      errorId: generateId()
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo,
      errorId: this.state.errorId || generateId()
    });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.state.errorInfo, {
          retry: this.handleRetry,
          reset: this.handleReset,
          retryCount: this.state.retryCount,
          maxRetries: this.props.maxRetries || 3
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "max-w-md w-full bg-card shadow-lg rounded-lg p-6 border", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "h-8 w-8 text-destructive text-2xl", children: "\u{1F6A8}" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "text-lg font-medium text-foreground", children: "Something went wrong" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-sm text-muted-foreground", children: "We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue." }),
          this.state.errorId && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-xs text-muted-foreground mt-2", children: [
            "Error ID: ",
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("code", { className: "bg-muted px-1 rounded", children: this.state.errorId })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex space-x-3 mb-4", children: [
          this.state.retryCount < (this.props.maxRetries || 3) && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
            "button",
            {
              onClick: this.handleRetry,
              className: "flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                "Try Again (",
                this.state.retryCount + 1,
                "/",
                (this.props.maxRetries || 3) + 1,
                ")"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "button",
            {
              onClick: this.handleReset,
              className: "flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500",
              children: "Reset"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "button",
          {
            onClick: this.handleReportIssue,
            className: "w-full bg-gray-100 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 border border-gray-300",
            children: "\u{1F4E7} Report Issue"
          }
        ),
        process.env.NODE_ENV === "development" && this.state.error && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("details", { className: "mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("summary", { className: "text-sm text-muted-foreground cursor-pointer hover:text-foreground", children: "Technical Details (Development)" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mt-2 p-3 bg-muted rounded text-xs font-mono text-foreground overflow-auto max-h-40", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "Error:" }),
              " ",
              this.state.error.message
            ] }),
            this.state.errorInfo?.componentStack && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "Component Stack:" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("pre", { className: "whitespace-pre-wrap text-xs", children: this.state.errorInfo.componentStack })
            ] }),
            this.state.error.stack && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "Stack Trace:" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("pre", { className: "whitespace-pre-wrap text-xs", children: this.state.error.stack })
            ] })
          ] })
        ] })
      ] }) });
    }
    return this.props.children;
  }
};
var withErrorBoundary = (WrappedComponent, options = {}) => {
  return function WithErrorBoundaryComponent(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ErrorBoundary, { ...options, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(WrappedComponent, { ...props }) });
  };
};
var useErrorBoundary = () => {
  const [error, setError] = import_react3.default.useState(null);
  const resetError = import_react3.default.useCallback(() => {
    setError(null);
  }, []);
  const captureError = import_react3.default.useCallback((error2) => {
    setError(error2);
  }, []);
  import_react3.default.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);
  return { captureError, resetError };
};

// src/components/Header.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function Header({ user, onSignOut, onToggleSidebar, ThemeSwitch: ThemeSwitch2, Button: Button3, MenuIcon, LogOutIcon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("header", { className: "bg-secondary shadow-sm border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center justify-between px-4 py-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "button",
      {
        onClick: onToggleSidebar,
        className: "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring",
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(MenuIcon, { className: "h-6 w-6" })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ThemeSwitch2, {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-sm text-muted-foreground", children: user?.email?.split("@")[0] || "User" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        Button3,
        {
          variant: "outline",
          size: "sm",
          onClick: onSignOut,
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(LogOutIcon, { className: "h-4 w-4" }),
            "Logout"
          ]
        }
      )
    ] })
  ] }) });
}

// src/services/AuthProvider.tsx
var import_react4 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var AuthContext = (0, import_react4.createContext)(null);
var AuthProvider = ({
  children,
  supabaseClient,
  onAuthStateChange
}) => {
  const [user, setUser] = (0, import_react4.useState)(null);
  const [session, setSession] = (0, import_react4.useState)(null);
  const [loading, setLoading] = (0, import_react4.useState)(true);
  const [error, setError] = (0, import_react4.useState)(null);
  (0, import_react4.useEffect)(() => {
    const getInitialSession = async () => {
      try {
        const { data: { session: initialSession }, error: error2 } = await supabaseClient.auth.getSession();
        if (error2) {
          setError("Failed to initialize authentication");
        } else {
          setSession(initialSession);
          setUser(initialSession?.user ?? null);
          onAuthStateChange?.(initialSession?.user ?? null, initialSession);
        }
      } catch (err) {
        setError("Authentication initialization failed");
      } finally {
        setLoading(false);
      }
    };
    getInitialSession();
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(
      async (event, session2) => {
        setSession(session2);
        setUser(session2?.user ?? null);
        setError(null);
        onAuthStateChange?.(session2?.user ?? null, session2);
        if (event === "SIGNED_OUT") {
          setLoading(false);
        }
      }
    );
    return () => subscription.unsubscribe();
  }, [supabaseClient, onAuthStateChange]);
  const signIn = async (email, password) => {
    try {
      setError(null);
      const { error: error2 } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });
      if (error2) {
        setError(error2.message);
        return { error: error2.message };
      }
      return {};
    } catch (err) {
      const errorMessage = "Sign in failed";
      setError(errorMessage);
      return { error: errorMessage };
    }
  };
  const signUp = async (email, password, metadata) => {
    try {
      setError(null);
      const { error: error2 } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      });
      if (error2) {
        setError(error2.message);
        return { error: error2.message };
      }
      return {};
    } catch (err) {
      const errorMessage = "Sign up failed";
      setError(errorMessage);
      return { error: errorMessage };
    }
  };
  const signOut = async () => {
    try {
      setError(null);
      await supabaseClient.auth.signOut();
    } catch (err) {
      setError("Sign out failed");
    }
  };
  const resetPassword = async (email) => {
    try {
      setError(null);
      const { error: error2 } = await supabaseClient.auth.resetPasswordForEmail(email);
      if (error2) {
        setError(error2.message);
        return { error: error2.message };
      }
      return {};
    } catch (err) {
      const errorMessage = "Password reset failed";
      setError(errorMessage);
      return { error: errorMessage };
    }
  };
  const value = {
    user,
    session,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    resetPassword
  };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AuthContext.Provider, { value, children });
};
var useAuth = () => {
  const context = (0, import_react4.useContext)(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// src/components/ProtectedRoute.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var ProtectedRoute = ({
  children,
  loadingComponent,
  unauthorizedComponent,
  redirectTo,
  authorize,
  requiredRoles = [],
  requiredPermissions = []
}) => {
  const { user, session, loading } = useAuth();
  if (loading) {
    return loadingComponent ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: loadingComponent }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" }) });
  }
  if (!user || !session) {
    if (redirectTo) {
      window.location.href = redirectTo;
      return null;
    }
    return unauthorizedComponent ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: unauthorizedComponent }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-2xl font-semibold", children: "Authentication Required" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-muted-foreground", children: "Please sign in to access this content." })
    ] }) });
  }
  if (authorize && !authorize(user, session)) {
    return unauthorizedComponent ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: unauthorizedComponent }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-2xl font-semibold", children: "Access Denied" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-muted-foreground", children: "You don't have permission to access this content." })
    ] }) });
  }
  if (requiredRoles.length > 0) {
    const userRoles = user.user_metadata?.roles || user.app_metadata?.roles || [];
    const hasRequiredRole = requiredRoles.some(
      (role) => Array.isArray(userRoles) ? userRoles.includes(role) : userRoles === role
    );
    if (!hasRequiredRole) {
      return unauthorizedComponent ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: unauthorizedComponent }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-2xl font-semibold", children: "Insufficient Permissions" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "text-muted-foreground", children: [
          "You need one of the following roles: ",
          requiredRoles.join(", ")
        ] })
      ] }) });
    }
  }
  if (requiredPermissions.length > 0) {
    const userPermissions = user.user_metadata?.permissions || user.app_metadata?.permissions || [];
    const hasRequiredPermission = requiredPermissions.some(
      (permission) => Array.isArray(userPermissions) ? userPermissions.includes(permission) : userPermissions === permission
    );
    if (!hasRequiredPermission) {
      return unauthorizedComponent ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: unauthorizedComponent }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-2xl font-semibold", children: "Insufficient Permissions" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "text-muted-foreground", children: [
          "You need one of the following permissions: ",
          requiredPermissions.join(", ")
        ] })
      ] }) });
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children });
};

// src/components/auth/AuthLayout.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var AuthLayout = ({
  children,
  title,
  logo,
  backgroundImage,
  backgroundColor = "#18181b",
  // zinc-900
  subtitle,
  showNotifications = true,
  notificationComponent
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "min-h-screen flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "container relative grid flex-col items-center justify-center sm:max-w-none lg:grid-cols-2 lg:px-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
        "div",
        {
          className: "relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex",
          style: {
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : void 0,
            backgroundColor: backgroundImage ? void 0 : backgroundColor
          },
          children: [
            !backgroundImage && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "absolute inset-0 bg-zinc-900" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "relative z-20 flex items-center text-lg font-medium", children: [
              logo && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { className: "h-6 mr-2", src: logo, alt: title }),
              title
            ] }),
            subtitle && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "relative z-20 mt-auto", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-lg", children: subtitle }) })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "lg:p-8", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col space-y-2 text-center lg:hidden", children: [
          logo && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { className: "h-8 mx-auto", src: logo, alt: title }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h1", { className: "text-xl font-semibold", children: title })
        ] }),
        children
      ] }) })
    ] }),
    showNotifications && (notificationComponent || /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { id: "auth-notifications", className: "fixed top-4 right-4 z-50" }))
  ] });
};

// src/components/FilterDropdown.tsx
var import_react5 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var FilterDropdown = ({ column, options, onFilterChange, isOpen, onToggle, activeFilter }) => {
  const [searchTerm, setSearchTerm] = (0, import_react5.useState)("");
  const [position, setPosition] = (0, import_react5.useState)({ top: 0, left: 0 });
  const [selectedValues, setSelectedValues] = (0, import_react5.useState)(/* @__PURE__ */ new Set());
  const [isSelectAll, setIsSelectAll] = (0, import_react5.useState)(true);
  const dropdownRef = (0, import_react5.useRef)(null);
  const filteredOptions = (0, import_react5.useMemo)(() => {
    if (!searchTerm) return options;
    const filtered = options.filter(
      (option) => option && option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
  }, [options, searchTerm, column]);
  (0, import_react5.useEffect)(() => {
    if (isOpen) {
      if (activeFilter && Array.isArray(activeFilter)) {
        setSelectedValues(new Set(activeFilter));
        setIsSelectAll(activeFilter.length === options.length);
      } else if (activeFilter) {
        setSelectedValues(/* @__PURE__ */ new Set([activeFilter]));
        setIsSelectAll(false);
      } else {
        setSelectedValues(new Set(options));
        setIsSelectAll(true);
      }
    }
  }, [isOpen, activeFilter, options]);
  const handleOptionToggle = (option) => {
    const newSelectedValues = new Set(selectedValues);
    if (newSelectedValues.has(option)) {
      newSelectedValues.delete(option);
    } else {
      newSelectedValues.add(option);
    }
    setSelectedValues(newSelectedValues);
    setIsSelectAll(newSelectedValues.size === filteredOptions.length);
  };
  const handleSelectAll = () => {
    if (isSelectAll) {
      setSelectedValues(/* @__PURE__ */ new Set());
      setIsSelectAll(false);
    } else {
      setSelectedValues(new Set(filteredOptions));
      setIsSelectAll(true);
    }
  };
  const handleClearFilter = () => {
    setSelectedValues(/* @__PURE__ */ new Set());
    setIsSelectAll(false);
  };
  const handleApplyFilter = () => {
    const selectedArray = Array.from(selectedValues);
    onFilterChange(column, selectedArray.length === 0 ? "" : selectedArray);
    setSearchTerm("");
    onToggle();
  };
  const handleCancel = () => {
    setSearchTerm("");
    onToggle();
  };
  (0, import_react5.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleCancel();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  (0, import_react5.useEffect)(() => {
    if (!isOpen) {
      setSearchTerm("");
      setSelectedValues(/* @__PURE__ */ new Set());
      setIsSelectAll(true);
    }
  }, [isOpen]);
  (0, import_react5.useEffect)(() => {
    if (isOpen && dropdownRef.current) {
      const button = dropdownRef.current.querySelector("button");
      if (button) {
        const rect = button.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const dropdownWidth = 192;
        let leftPosition = 0;
        if (rect.left + dropdownWidth > viewportWidth) {
          leftPosition = -dropdownWidth + rect.width;
        }
        setPosition({
          top: rect.height + 5,
          // Position below the button with small gap
          left: leftPosition
        });
      }
    }
  }, [isOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "relative", ref: dropdownRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        onClick: onToggle,
        className: `inline-flex items-center justify-center w-4 h-4 transition-colors ${activeFilter ? "text-blue-600 hover:text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
        title: activeFilter ? `Filtro attivo: ${activeFilter}` : "Filtra",
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) })
      }
    ),
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "div",
      {
        className: "absolute bg-white border border-gray-300 rounded-md shadow-lg z-[99999] w-48",
        style: {
          top: position.top,
          left: position.left
        },
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "p-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "button",
                {
                  onClick: handleSelectAll,
                  className: "text-blue-600 text-xs font-medium hover:underline",
                  children: isSelectAll ? "Select all" : `Select all ${filteredOptions.length}`
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "button",
                {
                  onClick: handleClearFilter,
                  className: "text-blue-600 text-xs font-medium hover:underline",
                  children: "Clear"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "text-xs text-gray-600 mb-1", children: [
              "Displaying ",
              filteredOptions.length
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "relative mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "input",
                {
                  type: "text",
                  placeholder: "Search values...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "currentColor", className: "text-gray-400", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "h-16 overflow-y-auto border border-gray-200 rounded", children: [
              filteredOptions.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
                "label",
                {
                  className: "flex items-center px-2 py-1 hover:bg-gray-50 cursor-pointer",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                      "input",
                      {
                        type: "checkbox",
                        checked: selectedValues.has(option),
                        onChange: () => handleOptionToggle(option),
                        className: "mr-2 h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-xs truncate flex-1", children: option || "(Blanks)" })
                  ]
                },
                `${option}-${index}`
              )),
              filteredOptions.length === 0 && searchTerm && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "px-2 py-2 text-xs text-gray-500 text-center", children: "No results found" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "border-t border-gray-200 p-2 flex justify-end space-x-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              "button",
              {
                onClick: handleCancel,
                className: "px-2 py-1 text-xs text-gray-700 hover:bg-gray-100 rounded",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              "button",
              {
                onClick: handleApplyFilter,
                className: "px-2 py-1 text-xs bg-blue-600 text-white hover:bg-blue-700 rounded",
                children: "OK"
              }
            )
          ] })
        ]
      }
    )
  ] });
};
var FilterDropdown_default = FilterDropdown;

// src/components/GenericForm.tsx
var import_react11 = require("react");
var import_react_hook_form = require("react-hook-form");

// src/hooks/useErrorHandler.ts
var import_react6 = require("react");
var showError2 = (message) => console.error(message);
var showWarning2 = (message) => console.warn(message);
var showInfo2 = (message) => console.info(message);
var useErrorHandler = (options = {}) => {
  const {
    logErrors = true,
    showUserMessages = true,
    maxRetries = 3,
    retryDelay = 1e3,
    onError = null,
    onRetry = null,
    onFallback = null
  } = options;
  const [errors, setErrors] = (0, import_react6.useState)([]);
  const [isRetrying, setIsRetrying] = (0, import_react6.useState)(false);
  const retryCountRef = (0, import_react6.useRef)(0);
  const handleError = (0, import_react6.useCallback)(async (error, context = "", customOptions = {}) => {
    const normalizedError = {
      id: `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      message: error.message || "An unexpected error occurred",
      type: error.type || ERROR_TYPES.SERVER_ERROR,
      severity: error.severity || "medium",
      context,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      userMessage: error.userMessage || error.message || "An unexpected error occurred"
    };
    setErrors((prev) => [...prev, normalizedError]);
    if (logErrors) {
      console.error(`[${context}] Error:`, error);
    }
    if (showUserMessages) {
      const message = normalizedError.userMessage;
      switch (normalizedError.severity) {
        case "low":
          showWarning2(message);
          break;
        case "medium":
          showError2(message);
          break;
        case "high":
        case "critical":
          showError2(message);
          break;
        default:
          showError2(message);
      }
    }
    if (onError) {
      await onError(normalizedError, context);
    }
    return normalizedError;
  }, [logErrors, showUserMessages, onError]);
  const handleAsync = (0, import_react6.useCallback)(async (asyncOperation, options2 = {}) => {
    const {
      context = "",
      fallbackMessage = "Operation failed",
      retry = false,
      maxRetries: customMaxRetries = maxRetries
    } = options2;
    try {
      if (retry) {
        return await retryOperation(asyncOperation, customMaxRetries);
      }
      return await asyncOperation();
    } catch (error) {
      const handledError = await handleError(error, context, { fallbackMessage });
      throw handledError;
    }
  }, [maxRetries, handleError]);
  const retryOperation = (0, import_react6.useCallback)(async (operation, maxAttempts) => {
    let lastError;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        setIsRetrying(attempt > 1);
        retryCountRef.current = attempt - 1;
        const result = await operation();
        setIsRetrying(false);
        retryCountRef.current = 0;
        return result;
      } catch (error) {
        lastError = error;
        if (attempt < maxAttempts) {
          const delay = retryDelay * Math.pow(2, attempt - 1);
          if (onRetry) {
            await onRetry(error, attempt, delay);
          }
          if (showUserMessages) {
            showInfo2(`Retrying... (${attempt}/${maxAttempts})`);
          }
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }
    setIsRetrying(false);
    retryCountRef.current = 0;
    throw lastError;
  }, [retryDelay, onRetry, showUserMessages]);
  const handleValidationError = (0, import_react6.useCallback)((message, details = {}) => {
    const error = {
      message,
      type: ERROR_TYPES.VALIDATION_ERROR,
      severity: "medium",
      details,
      userMessage: message
    };
    return handleError(error, "validation");
  }, [handleError]);
  const handleNetworkError = (0, import_react6.useCallback)((message = "Network connection failed") => {
    const error = {
      message,
      type: ERROR_TYPES.NETWORK_ERROR,
      severity: "high",
      userMessage: message
    };
    return handleError(error, "network");
  }, [handleError]);
  const handleAuthError = (0, import_react6.useCallback)((message = "Authentication failed") => {
    const error = {
      message,
      type: ERROR_TYPES.AUTHENTICATION_ERROR,
      severity: "high",
      userMessage: message
    };
    return handleError(error, "authentication");
  }, [handleError]);
  const clearErrors = (0, import_react6.useCallback)(() => {
    setErrors([]);
  }, []);
  const clearError = (0, import_react6.useCallback)((errorId) => {
    setErrors((prev) => prev.filter((error) => error.id !== errorId));
  }, []);
  const getErrorsByType = (0, import_react6.useCallback)((type) => {
    return errors.filter((error) => error.type === type);
  }, [errors]);
  const hasCriticalErrors = (0, import_react6.useCallback)(() => {
    return errors.some((error) => error.severity === "critical");
  }, [errors]);
  return {
    // Error handling functions
    handleError,
    handleAsync,
    handleValidationError,
    handleNetworkError,
    handleAuthError,
    // Error management
    clearErrors,
    clearError,
    getErrorsByType,
    hasCriticalErrors,
    // State
    errors,
    isRetrying,
    retryCount: retryCountRef.current,
    // Utilities
    retryOperation
  };
};
var useValidationErrorHandler = () => {
  const { handleValidationError, clearErrors } = useErrorHandler({
    showUserMessages: false
    // Don't show toast for validation errors
  });
  const handleFieldError = (0, import_react6.useCallback)((field, message) => {
    return handleValidationError(`Field '${field}': ${message}`, { field });
  }, [handleValidationError]);
  const handleRequiredFieldError = (0, import_react6.useCallback)((field) => {
    return handleValidationError(`Field '${field}' is required`, { field, type: "required" });
  }, [handleValidationError]);
  return {
    handleFieldError,
    handleRequiredFieldError,
    clearErrors
  };
};

// src/hooks/useSidebar.ts
var import_zustand = require("zustand");
var useSidebar = (0, import_zustand.create)((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}));

// src/hooks/useDataService.ts
var import_react_query = require("@tanstack/react-query");
function useDataService(service, resourceName) {
  const queryClient = (0, import_react_query.useQueryClient)();
  const useGetAll = (options = {}, queryOptions) => {
    return (0, import_react_query.useQuery)({
      queryKey: [resourceName, "list", options],
      queryFn: () => service.getAll(options),
      ...queryOptions
    });
  };
  const useGetPaginated = (options = {}, queryOptions) => {
    return (0, import_react_query.useQuery)({
      queryKey: [resourceName, "paginated", options],
      queryFn: () => service.getPaginated(options),
      ...queryOptions
    });
  };
  const useGetById = (id, select = "*", queryOptions) => {
    return (0, import_react_query.useQuery)({
      queryKey: [resourceName, "detail", id, select],
      queryFn: () => service.getById(id, select),
      enabled: id !== null && id !== void 0,
      ...queryOptions
    });
  };
  const useSearch = (searchTerm, searchFields = ["name"], options = {}, queryOptions) => {
    return (0, import_react_query.useQuery)({
      queryKey: [resourceName, "search", searchTerm, searchFields, options],
      queryFn: () => service.search(searchTerm, searchFields, options),
      enabled: searchTerm.length > 0,
      ...queryOptions
    });
  };
  const useCount = (filters, queryOptions) => {
    return (0, import_react_query.useQuery)({
      queryKey: [resourceName, "count", filters],
      queryFn: () => service.count(filters),
      ...queryOptions
    });
  };
  const useCreate = () => {
    return (0, import_react_query.useMutation)({
      mutationFn: (data) => service.create(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [resourceName] });
      }
    });
  };
  const useUpdate = () => {
    return (0, import_react_query.useMutation)({
      mutationFn: ({ id, data }) => service.update(id, data),
      onSuccess: (data, variables) => {
        queryClient.setQueryData([resourceName, "detail", variables.id], data);
        queryClient.invalidateQueries({ queryKey: [resourceName, "list"] });
        queryClient.invalidateQueries({ queryKey: [resourceName, "paginated"] });
      }
    });
  };
  const useDelete = () => {
    return (0, import_react_query.useMutation)({
      mutationFn: (id) => service.delete(id),
      onSuccess: (_, variables) => {
        queryClient.removeQueries({ queryKey: [resourceName, "detail", variables] });
        queryClient.invalidateQueries({ queryKey: [resourceName, "list"] });
        queryClient.invalidateQueries({ queryKey: [resourceName, "paginated"] });
      }
    });
  };
  const useBulkDelete = () => {
    return (0, import_react_query.useMutation)({
      mutationFn: (ids) => service.bulkDelete(ids),
      onSuccess: (_, variables) => {
        variables.forEach((id) => {
          queryClient.removeQueries({ queryKey: [resourceName, "detail", id] });
        });
        queryClient.invalidateQueries({ queryKey: [resourceName, "list"] });
        queryClient.invalidateQueries({ queryKey: [resourceName, "paginated"] });
      }
    });
  };
  return {
    // Queries
    useGetAll,
    useGetPaginated,
    useGetById,
    useSearch,
    useCount,
    // Mutations
    useCreate,
    useUpdate,
    useDelete,
    useBulkDelete,
    // Utilities
    invalidateAll: () => queryClient.invalidateQueries({ queryKey: [resourceName] }),
    invalidateList: () => {
      queryClient.invalidateQueries({ queryKey: [resourceName, "list"] });
      queryClient.invalidateQueries({ queryKey: [resourceName, "paginated"] });
    },
    invalidateDetail: (id) => queryClient.invalidateQueries({ queryKey: [resourceName, "detail", id] })
  };
}

// src/hooks/useAuthGuard.ts
var import_react7 = require("react");
var useAuthGuard = (options = {}) => {
  const {
    redirectTo,
    authorize,
    requiredRoles = [],
    requiredPermissions = [],
    onUnauthorized
  } = options;
  const { user, session, loading } = useAuth();
  const isAuthenticated = !loading && !!user && !!session;
  const isAuthorized = (() => {
    if (loading || !user || !session) return false;
    if (authorize && !authorize(user, session)) {
      return false;
    }
    if (requiredRoles.length > 0) {
      const userRoles = user.user_metadata?.roles || user.app_metadata?.roles || [];
      const hasRequiredRole = requiredRoles.some(
        (role) => Array.isArray(userRoles) ? userRoles.includes(role) : userRoles === role
      );
      if (!hasRequiredRole) return false;
    }
    if (requiredPermissions.length > 0) {
      const userPermissions = user.user_metadata?.permissions || user.app_metadata?.permissions || [];
      const hasRequiredPermission = requiredPermissions.some(
        (permission) => Array.isArray(userPermissions) ? userPermissions.includes(permission) : userPermissions === permission
      );
      if (!hasRequiredPermission) return false;
    }
    return true;
  })();
  (0, import_react7.useEffect)(() => {
    if (!loading && !isAuthorized) {
      if (onUnauthorized) {
        onUnauthorized();
      } else if (redirectTo) {
        window.location.href = redirectTo;
      }
    }
  }, [loading, isAuthorized, redirectTo, onUnauthorized]);
  return {
    user,
    session,
    loading,
    isAuthenticated,
    isAuthorized
  };
};

// src/hooks/useMobile.ts
var React9 = __toESM(require("react"), 1);
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React9.useState(
    void 0
  );
  React9.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/hooks/useSupabaseQuery.ts
var import_react_query2 = require("@tanstack/react-query");
var createQueryKeys = (tableName) => ({
  all: [tableName],
  lists: () => [tableName, "list"],
  list: (filters) => [tableName, "list", filters],
  details: () => [tableName, "detail"],
  detail: (id) => [tableName, "detail", id],
  search: (term, fields) => [tableName, "search", term, fields],
  count: (filters) => [tableName, "count", filters],
  paginated: (options) => [tableName, "paginated", options]
});
function createSupabaseHooks(service) {
  const tableName = service.getTableName();
  const queryKeys = createQueryKeys(tableName);
  const useList = (options, queryOptions) => {
    return (0, import_react_query2.useQuery)({
      queryKey: queryKeys.list(options?.filters),
      queryFn: () => service.getAll(options),
      staleTime: 5 * 60 * 1e3,
      // 5 minutes
      ...queryOptions
    });
  };
  const usePaginatedList = (options, queryOptions) => {
    return (0, import_react_query2.useQuery)({
      queryKey: queryKeys.paginated(options),
      queryFn: () => service.getPaginated(options),
      staleTime: 5 * 60 * 1e3,
      // 5 minutes
      keepPreviousData: true,
      // Keep previous data while loading new page
      ...queryOptions
    });
  };
  const useDetail = (id, select, queryOptions) => {
    return (0, import_react_query2.useQuery)({
      queryKey: queryKeys.detail(id),
      queryFn: () => service.getById(id, select),
      enabled: !!id,
      staleTime: 5 * 60 * 1e3,
      // 5 minutes
      ...queryOptions
    });
  };
  const useSearch = (searchTerm, searchFields, options, queryOptions) => {
    return (0, import_react_query2.useQuery)({
      queryKey: queryKeys.search(searchTerm, searchFields),
      queryFn: () => service.search(searchTerm, searchFields, options),
      enabled: searchTerm.length > 0,
      staleTime: 2 * 60 * 1e3,
      // 2 minutes for search results
      ...queryOptions
    });
  };
  const useCount = (filters, queryOptions) => {
    return (0, import_react_query2.useQuery)({
      queryKey: queryKeys.count(filters),
      queryFn: () => service.count(filters),
      staleTime: 5 * 60 * 1e3,
      // 5 minutes
      ...queryOptions
    });
  };
  const useCreate = (mutationOptions) => {
    const queryClient = (0, import_react_query2.useQueryClient)();
    return (0, import_react_query2.useMutation)({
      mutationFn: (data) => service.create(data),
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        queryClient.invalidateQueries({ queryKey: queryKeys.count() });
        queryClient.setQueryData(queryKeys.detail(data.id), data);
        mutationOptions?.onSuccess?.(data, variables, void 0);
      },
      ...mutationOptions
    });
  };
  const useCreateMany = (mutationOptions) => {
    const queryClient = (0, import_react_query2.useQueryClient)();
    return (0, import_react_query2.useMutation)({
      mutationFn: (data) => service.createMany(data),
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        queryClient.invalidateQueries({ queryKey: queryKeys.count() });
        data.forEach((item) => {
          queryClient.setQueryData(queryKeys.detail(item.id), item);
        });
        mutationOptions?.onSuccess?.(data, variables, void 0);
      },
      ...mutationOptions
    });
  };
  const useUpdate = (mutationOptions) => {
    const queryClient = (0, import_react_query2.useQueryClient)();
    return (0, import_react_query2.useMutation)({
      mutationFn: ({ id, data }) => service.update(id, data),
      onSuccess: (data, variables) => {
        queryClient.setQueryData(queryKeys.detail(variables.id), data);
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        mutationOptions?.onSuccess?.(data, variables, void 0);
      },
      ...mutationOptions
    });
  };
  const useUpdateMany = (mutationOptions) => {
    const queryClient = (0, import_react_query2.useQueryClient)();
    return (0, import_react_query2.useMutation)({
      mutationFn: (updates) => service.updateMany(updates),
      onSuccess: (data, variables) => {
        data.forEach((item, index) => {
          queryClient.setQueryData(queryKeys.detail(variables[index].id), item);
        });
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        mutationOptions?.onSuccess?.(data, variables, void 0);
      },
      ...mutationOptions
    });
  };
  const useUpsert = (mutationOptions) => {
    const queryClient = (0, import_react_query2.useQueryClient)();
    return (0, import_react_query2.useMutation)({
      mutationFn: ({ data, onConflict }) => service.upsert(data, onConflict),
      onSuccess: (data, variables) => {
        queryClient.setQueryData(queryKeys.detail(data.id), data);
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        queryClient.invalidateQueries({ queryKey: queryKeys.count() });
        mutationOptions?.onSuccess?.(data, variables, void 0);
      },
      ...mutationOptions
    });
  };
  const useDelete = (mutationOptions) => {
    const queryClient = (0, import_react_query2.useQueryClient)();
    return (0, import_react_query2.useMutation)({
      mutationFn: (id) => service.delete(id),
      onSuccess: (data, id) => {
        queryClient.removeQueries({ queryKey: queryKeys.detail(id) });
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        queryClient.invalidateQueries({ queryKey: queryKeys.count() });
        mutationOptions?.onSuccess?.(data, id, void 0);
      },
      ...mutationOptions
    });
  };
  const useBulkDelete = (mutationOptions) => {
    const queryClient = (0, import_react_query2.useQueryClient)();
    return (0, import_react_query2.useMutation)({
      mutationFn: (ids) => service.bulkDelete(ids),
      onSuccess: (data, ids) => {
        ids.forEach((id) => {
          queryClient.removeQueries({ queryKey: queryKeys.detail(id) });
        });
        queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
        queryClient.invalidateQueries({ queryKey: queryKeys.count() });
        mutationOptions?.onSuccess?.(data, ids, void 0);
      },
      ...mutationOptions
    });
  };
  const useOptimisticUpdate = () => {
    const queryClient = (0, import_react_query2.useQueryClient)();
    const optimisticUpdate = (id, updater) => {
      queryClient.setQueryData(queryKeys.detail(id), updater);
    };
    const rollbackOptimisticUpdate = (id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.detail(id) });
    };
    return { optimisticUpdate, rollbackOptimisticUpdate };
  };
  const useInvalidateAll = () => {
    const queryClient = (0, import_react_query2.useQueryClient)();
    const invalidateAll = () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all });
    };
    const invalidateLists = () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.lists() });
    };
    const invalidateDetail = (id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.detail(id) });
    };
    return { invalidateAll, invalidateLists, invalidateDetail };
  };
  const usePrefetch = () => {
    const queryClient = (0, import_react_query2.useQueryClient)();
    const prefetchList = (options) => {
      return queryClient.prefetchQuery({
        queryKey: queryKeys.list(options?.filters),
        queryFn: () => service.getAll(options),
        staleTime: 5 * 60 * 1e3
      });
    };
    const prefetchDetail = (id, select) => {
      return queryClient.prefetchQuery({
        queryKey: queryKeys.detail(id),
        queryFn: () => service.getById(id, select),
        staleTime: 5 * 60 * 1e3
      });
    };
    return { prefetchList, prefetchDetail };
  };
  return {
    // Query hooks
    useList,
    usePaginatedList,
    useDetail,
    useSearch,
    useCount,
    // Mutation hooks
    useCreate,
    useCreateMany,
    useUpdate,
    useUpdateMany,
    useUpsert,
    useDelete,
    useBulkDelete,
    // Utility hooks
    useOptimisticUpdate,
    useInvalidateAll,
    usePrefetch,
    // Query keys for manual cache management
    queryKeys
  };
}
function createServiceHooks(service) {
  return createSupabaseHooks(service);
}
var defaultQueryErrorHandler = (error) => {
  console.error("Query error:", error);
};
var defaultQueryConfig = {
  queries: {
    staleTime: 5 * 60 * 1e3,
    // 5 minutes
    cacheTime: 10 * 60 * 1e3,
    // 10 minutes
    retry: (failureCount, error) => {
      if (error?.status >= 400 && error?.status < 500) {
        return false;
      }
      return failureCount < 3;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: true
  },
  mutations: {
    retry: (failureCount, error) => {
      if (error?.status >= 400 && error?.status < 500) {
        return false;
      }
      return failureCount < 1;
    }
  }
};

// src/hooks/useBulkOperations.ts
var import_react8 = require("react");
var import_react_query3 = require("@tanstack/react-query");
function useBulkOperations(resource) {
  const queryClient = (0, import_react_query3.useQueryClient)();
  const bulkUpdate = (0, import_react8.useCallback)(
    async (items, mutationFn, options = {}) => {
      const { onSuccess, onError, onSettled, optimisticUpdate = true, invalidateQueries = [] } = options;
      try {
        if (optimisticUpdate) {
          queryClient.setQueryData([resource], (oldData) => {
            if (!oldData) return oldData;
            return oldData.map((item) => {
              const update = items.find((u) => u.id === item.id);
              return update ? { ...item, ...update.data } : item;
            });
          });
        }
        const results = await Promise.all(items.map(mutationFn));
        invalidateQueries.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });
        onSuccess?.(results);
        return results;
      } catch (error) {
        if (optimisticUpdate) {
          queryClient.invalidateQueries({ queryKey: [resource] });
        }
        onError?.(error);
        throw error;
      } finally {
        onSettled?.();
      }
    },
    [queryClient, resource]
  );
  const bulkDelete = (0, import_react8.useCallback)(
    async (ids, mutationFn, options = {}) => {
      const { onSuccess, onError, onSettled, optimisticUpdate = true, invalidateQueries = [] } = options;
      try {
        if (optimisticUpdate) {
          queryClient.setQueryData([resource], (oldData) => {
            if (!oldData) return oldData;
            return oldData.filter((item) => !ids.includes(item.id));
          });
        }
        await Promise.all(ids.map(mutationFn));
        invalidateQueries.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });
        onSuccess?.(ids);
        return ids;
      } catch (error) {
        if (optimisticUpdate) {
          queryClient.invalidateQueries({ queryKey: [resource] });
        }
        onError?.(error);
        throw error;
      } finally {
        onSettled?.();
      }
    },
    [queryClient, resource]
  );
  const bulkExport = (0, import_react8.useCallback)(
    (data, options = {}) => {
      const {
        format: format2 = "csv",
        filename = `${resource}-export`,
        columns,
        includeHeaders = true
      } = options;
      if (!data || data.length === 0) {
        throw new Error("No data to export");
      }
      switch (format2) {
        case "csv":
          return exportToCSV(data, { filename, columns, includeHeaders });
        case "json":
          return exportToJSON(data, { filename });
        default:
          throw new Error(`Unsupported export format: ${format2}`);
      }
    },
    [resource]
  );
  return (0, import_react8.useMemo)(
    () => ({
      bulkUpdate,
      bulkDelete,
      bulkExport
    }),
    [bulkUpdate, bulkDelete, bulkExport]
  );
}
function exportToCSV(data, options) {
  const { filename, columns, includeHeaders } = options;
  if (data.length === 0) return;
  const firstItem = data[0];
  const headers = columns || Object.keys(firstItem);
  let csvContent = "";
  if (includeHeaders) {
    csvContent += headers.join(",") + "\n";
  }
  data.forEach((item) => {
    const row = headers.map((header) => {
      const value = item[header];
      if (typeof value === "string" && (value.includes(",") || value.includes('"'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value ?? "";
    });
    csvContent += row.join(",") + "\n";
  });
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function exportToJSON(data, options) {
  const { filename } = options;
  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: "application/json;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.json`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function useSavedQueries(resource) {
  const storageKey = `${resource}.savedQueries`;
  const getSavedQueries = (0, import_react8.useCallback)(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }, [storageKey]);
  const saveQuery = (0, import_react8.useCallback)((query) => {
    const queries = getSavedQueries();
    const newQuery = {
      ...query,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    const updated = [...queries, newQuery];
    localStorage.setItem(storageKey, JSON.stringify(updated));
    return newQuery;
  }, [getSavedQueries, storageKey]);
  const deleteQuery = (0, import_react8.useCallback)((id) => {
    const queries = getSavedQueries();
    const updated = queries.filter((q) => q.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  }, [getSavedQueries, storageKey]);
  const updateQuery = (0, import_react8.useCallback)((id, updates) => {
    const queries = getSavedQueries();
    const updated = queries.map((q) => q.id === id ? { ...q, ...updates } : q);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  }, [getSavedQueries, storageKey]);
  return (0, import_react8.useMemo)(
    () => ({
      queries: getSavedQueries(),
      saveQuery,
      deleteQuery,
      updateQuery
    }),
    [getSavedQueries, saveQuery, deleteQuery, updateQuery]
  );
}

// src/hooks/useDataTable.ts
var import_react9 = require("react");
function useDataTable(options) {
  const {
    defaultColumns,
    defaultSort,
    defaultPerPage = 25,
    storageKey,
    persistState = true
  } = options;
  const getInitialState = (0, import_react9.useCallback)(() => {
    if (persistState && storageKey) {
      try {
        const saved = localStorage.getItem(`dataTable.${storageKey}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            columns: defaultColumns,
            sort: parsed.sort || defaultSort,
            filters: parsed.filters || [],
            pagination: {
              page: 1,
              perPage: parsed.pagination?.perPage || defaultPerPage,
              total: 0
            },
            selectedIds: [],
            hiddenColumns: parsed.hiddenColumns || [],
            columnOrder: parsed.columnOrder || defaultColumns.map((c) => c.id)
          };
        }
      } catch {
      }
    }
    return {
      columns: defaultColumns,
      sort: defaultSort,
      filters: [],
      pagination: { page: 1, perPage: defaultPerPage, total: 0 },
      selectedIds: [],
      hiddenColumns: [],
      columnOrder: defaultColumns.map((c) => c.id)
    };
  }, [defaultColumns, defaultSort, defaultPerPage, persistState, storageKey]);
  const [state, setState] = (0, import_react9.useState)(getInitialState);
  const persistStateToStorage = (0, import_react9.useCallback)((newState) => {
    if (persistState && storageKey) {
      try {
        const toSave = {
          sort: newState.sort,
          filters: newState.filters,
          pagination: { perPage: newState.pagination.perPage },
          hiddenColumns: newState.hiddenColumns,
          columnOrder: newState.columnOrder
        };
        localStorage.setItem(`dataTable.${storageKey}`, JSON.stringify(toSave));
      } catch {
      }
    }
  }, [persistState, storageKey]);
  const showColumn = (0, import_react9.useCallback)((columnId) => {
    setState((prev) => {
      const newState = {
        ...prev,
        hiddenColumns: prev.hiddenColumns.filter((id) => id !== columnId)
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);
  const hideColumn = (0, import_react9.useCallback)((columnId) => {
    setState((prev) => {
      const newState = {
        ...prev,
        hiddenColumns: [...prev.hiddenColumns, columnId]
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);
  const reorderColumns = (0, import_react9.useCallback)((newOrder) => {
    setState((prev) => {
      const newState = {
        ...prev,
        columnOrder: newOrder
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);
  const resetColumns = (0, import_react9.useCallback)(() => {
    setState((prev) => {
      const newState = {
        ...prev,
        hiddenColumns: [],
        columnOrder: defaultColumns.map((c) => c.id)
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [defaultColumns, persistStateToStorage]);
  const setSort = (0, import_react9.useCallback)((field, order) => {
    setState((prev) => {
      const currentSort = prev.sort;
      let newOrder = "ASC";
      if (order) {
        newOrder = order;
      } else if (currentSort?.field === field) {
        newOrder = currentSort.order === "ASC" ? "DESC" : "ASC";
      }
      const newState = {
        ...prev,
        sort: { field, order: newOrder },
        pagination: { ...prev.pagination, page: 1 }
        // Reset to first page
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);
  const clearSort = (0, import_react9.useCallback)(() => {
    setState((prev) => {
      const newState = {
        ...prev,
        sort: void 0
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);
  const addFilter = (0, import_react9.useCallback)((filter) => {
    setState((prev) => {
      const newState = {
        ...prev,
        filters: [...prev.filters.filter((f) => f.field !== filter.field), filter],
        pagination: { ...prev.pagination, page: 1 }
        // Reset to first page
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);
  const removeFilter = (0, import_react9.useCallback)((field) => {
    setState((prev) => {
      const newState = {
        ...prev,
        filters: prev.filters.filter((f) => f.field !== field),
        pagination: { ...prev.pagination, page: 1 }
        // Reset to first page
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);
  const clearFilters = (0, import_react9.useCallback)(() => {
    setState((prev) => {
      const newState = {
        ...prev,
        filters: [],
        pagination: { ...prev.pagination, page: 1 }
        // Reset to first page
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);
  const setPage = (0, import_react9.useCallback)((page) => {
    setState((prev) => ({
      ...prev,
      pagination: { ...prev.pagination, page }
    }));
  }, []);
  const setPerPage = (0, import_react9.useCallback)((perPage) => {
    setState((prev) => {
      const newState = {
        ...prev,
        pagination: { ...prev.pagination, perPage, page: 1 }
      };
      persistStateToStorage(newState);
      return newState;
    });
  }, [persistStateToStorage]);
  const setTotal = (0, import_react9.useCallback)((total) => {
    setState((prev) => ({
      ...prev,
      pagination: { ...prev.pagination, total }
    }));
  }, []);
  const selectItem = (0, import_react9.useCallback)((id) => {
    setState((prev) => ({
      ...prev,
      selectedIds: [...prev.selectedIds, id]
    }));
  }, []);
  const deselectItem = (0, import_react9.useCallback)((id) => {
    setState((prev) => ({
      ...prev,
      selectedIds: prev.selectedIds.filter((selectedId) => selectedId !== id)
    }));
  }, []);
  const toggleItem = (0, import_react9.useCallback)((id) => {
    setState((prev) => ({
      ...prev,
      selectedIds: prev.selectedIds.includes(id) ? prev.selectedIds.filter((selectedId) => selectedId !== id) : [...prev.selectedIds, id]
    }));
  }, []);
  const selectAll = (0, import_react9.useCallback)((ids) => {
    setState((prev) => ({
      ...prev,
      selectedIds: ids
    }));
  }, []);
  const clearSelection = (0, import_react9.useCallback)(() => {
    setState((prev) => ({
      ...prev,
      selectedIds: []
    }));
  }, []);
  const visibleColumns = (0, import_react9.useMemo)(() => {
    return state.columnOrder.map((id) => state.columns.find((col) => col.id === id)).filter(
      (col) => col !== void 0 && !state.hiddenColumns.includes(col.id)
    );
  }, [state.columns, state.columnOrder, state.hiddenColumns]);
  const hasFilters = (0, import_react9.useMemo)(() => state.filters.length > 0, [state.filters]);
  const hasSelection = (0, import_react9.useMemo)(() => state.selectedIds.length > 0, [state.selectedIds]);
  const reset = (0, import_react9.useCallback)(() => {
    const newState = getInitialState();
    setState(newState);
    persistStateToStorage(newState);
  }, [getInitialState, persistStateToStorage]);
  return {
    // State
    state,
    visibleColumns,
    hasFilters,
    hasSelection,
    // Column management
    showColumn,
    hideColumn,
    reorderColumns,
    resetColumns,
    // Sorting
    setSort,
    clearSort,
    // Filtering
    addFilter,
    removeFilter,
    clearFilters,
    // Pagination
    setPage,
    setPerPage,
    setTotal,
    // Selection
    selectItem,
    deselectItem,
    toggleItem,
    selectAll,
    clearSelection,
    // Utilities
    reset
  };
}
function useColumnManager(columns, storageKey) {
  const [hiddenColumns, setHiddenColumns] = (0, import_react9.useState)(() => {
    if (storageKey) {
      try {
        const saved = localStorage.getItem(`columnManager.${storageKey}`);
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });
  const [columnOrder, setColumnOrder] = (0, import_react9.useState)(() => {
    if (storageKey) {
      try {
        const saved = localStorage.getItem(`columnOrder.${storageKey}`);
        return saved ? JSON.parse(saved) : columns.map((c) => c.id);
      } catch {
        return columns.map((c) => c.id);
      }
    }
    return columns.map((c) => c.id);
  });
  const persistState = (0, import_react9.useCallback)(() => {
    if (storageKey) {
      try {
        localStorage.setItem(`columnManager.${storageKey}`, JSON.stringify(hiddenColumns));
        localStorage.setItem(`columnOrder.${storageKey}`, JSON.stringify(columnOrder));
      } catch {
      }
    }
  }, [storageKey, hiddenColumns, columnOrder]);
  const toggleColumn = (0, import_react9.useCallback)((columnId) => {
    setHiddenColumns((prev) => {
      const newHidden = prev.includes(columnId) ? prev.filter((id) => id !== columnId) : [...prev, columnId];
      setTimeout(() => persistState(), 0);
      return newHidden;
    });
  }, [persistState]);
  const reorderColumns = (0, import_react9.useCallback)((newOrder) => {
    setColumnOrder(newOrder);
    setTimeout(() => persistState(), 0);
  }, [persistState]);
  const resetColumns = (0, import_react9.useCallback)(() => {
    setHiddenColumns([]);
    setColumnOrder(columns.map((c) => c.id));
    setTimeout(() => persistState(), 0);
  }, [columns, persistState]);
  const visibleColumns = (0, import_react9.useMemo)(() => {
    return columnOrder.map((id) => columns.find((col) => col.id === id)).filter(
      (col) => col !== void 0 && !hiddenColumns.includes(col.id)
    );
  }, [columns, columnOrder, hiddenColumns]);
  return {
    hiddenColumns,
    columnOrder,
    visibleColumns,
    toggleColumn,
    reorderColumns,
    resetColumns
  };
}

// src/hooks/useAdvancedQuery.ts
var import_react_query4 = require("@tanstack/react-query");
var import_react10 = require("react");
function useAdvancedQuery(queryKey, queryFn, options = {}) {
  const {
    invalidateOnWindowFocus = false,
    backgroundRefetch = true,
    retryOnNetworkError = true,
    ...queryOptions
  } = options;
  return (0, import_react_query4.useQuery)({
    queryKey,
    queryFn,
    staleTime: 5 * 60 * 1e3,
    // 5 minutes default
    gcTime: 10 * 60 * 1e3,
    // 10 minutes default (was cacheTime)
    refetchOnWindowFocus: invalidateOnWindowFocus,
    refetchInBackground: backgroundRefetch,
    retry: (failureCount, error) => {
      if (error?.status >= 400 && error?.status < 500) {
        return false;
      }
      if (retryOnNetworkError && (error?.code === "NETWORK_ERROR" || !navigator.onLine)) {
        return failureCount < 3;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1e3 * 2 ** attemptIndex, 3e4),
    ...queryOptions
  });
}
function useAdvancedMutation(mutationFn, options = {}) {
  const queryClient = (0, import_react_query4.useQueryClient)();
  const {
    optimisticUpdate,
    invalidateQueries = [],
    updateQueries = [],
    onSuccess,
    onError,
    onSettled,
    ...mutationOptions
  } = options;
  return (0, import_react_query4.useMutation)({
    mutationFn,
    onMutate: async (variables) => {
      if (optimisticUpdate) {
        const { updateFn } = optimisticUpdate;
        await queryClient.cancelQueries();
        const previousData = queryClient.getQueryData(invalidateQueries[0] || []);
        if (invalidateQueries[0]) {
          queryClient.setQueryData(
            invalidateQueries[0],
            (oldData) => updateFn(oldData, variables)
          );
        }
        return { previousData };
      }
    },
    onSuccess: (data, variables, context) => {
      updateQueries.forEach(({ queryKey, updateFn }) => {
        queryClient.setQueryData(
          queryKey,
          (oldData) => updateFn(oldData, data, variables)
        );
      });
      invalidateQueries.forEach((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      });
      onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      if (optimisticUpdate?.rollbackOnError !== false && context?.previousData && invalidateQueries[0]) {
        queryClient.setQueryData(invalidateQueries[0], context.previousData);
      }
      onError?.(error, variables, context);
    },
    onSettled: (data, error, variables, context) => {
      invalidateQueries.forEach((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      });
      onSettled?.(data, error, variables, context);
    },
    ...mutationOptions
  });
}
function useAdvancedInfiniteQuery(queryKey, queryFn, options = {}) {
  const {
    getNextPageParam = () => void 0,
    getPreviousPageParam = () => void 0,
    initialPageParam = 1,
    maxPages = 10,
    staleTime = 5 * 60 * 1e3,
    gcTime = 10 * 60 * 1e3
  } = options;
  return (0, import_react_query4.useQuery)({
    queryKey,
    queryFn: () => queryFn({ pageParam: initialPageParam }),
    staleTime,
    gcTime
    // Note: useInfiniteQuery would be used here in a real implementation
    // This is a simplified version for demonstration
  });
}
function useDependentQueries(firstQuery, secondQuery) {
  const first2 = (0, import_react_query4.useQuery)({
    queryKey: firstQuery.queryKey,
    queryFn: firstQuery.queryFn,
    ...firstQuery.options
  });
  const second = (0, import_react_query4.useQuery)({
    queryKey: first2.data ? secondQuery.queryKey(first2.data) : ["dependent-disabled"],
    queryFn: () => first2.data ? secondQuery.queryFn(first2.data) : Promise.reject("No data"),
    enabled: !!first2.data && !first2.isError,
    ...secondQuery.options
  });
  return {
    first: first2,
    second,
    isLoading: first2.isLoading || first2.data && second.isLoading,
    isError: first2.isError || second.isError,
    error: first2.error || second.error,
    data: second.data
  };
}
function useQuerySync(queryKey, onDataChange) {
  const queryClient = (0, import_react_query4.useQueryClient)();
  const data = queryClient.getQueryData(queryKey);
  const setData = (0, import_react10.useCallback)((updater) => {
    queryClient.setQueryData(queryKey, updater);
  }, [queryClient, queryKey]);
  const invalidate = (0, import_react10.useCallback)(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [queryClient, queryKey]);
  const refetch = (0, import_react10.useCallback)(() => {
    return queryClient.refetchQueries({ queryKey });
  }, [queryClient, queryKey]);
  (0, import_react10.useMemo)(() => {
    onDataChange?.(data);
  }, [data, onDataChange]);
  return {
    data,
    setData,
    invalidate,
    refetch
  };
}
function useOfflineSync(queryKey, queryFn, options = {}) {
  const {
    syncInterval = 3e4,
    // 30 seconds
    retryOnReconnect = true,
    persistToStorage = false,
    storageKey
  } = options;
  const queryClient = (0, import_react_query4.useQueryClient)();
  (0, import_react10.useMemo)(() => {
    if (persistToStorage && storageKey) {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
          const data = JSON.parse(stored);
          queryClient.setQueryData(queryKey, data);
        }
      } catch {
      }
    }
  }, [queryClient, queryKey, persistToStorage, storageKey]);
  const query = (0, import_react_query4.useQuery)({
    queryKey,
    queryFn,
    staleTime: syncInterval,
    refetchInterval: navigator.onLine ? syncInterval : false,
    refetchIntervalInBackground: true,
    retry: (failureCount, error) => {
      if (!navigator.onLine) return false;
      return failureCount < 3;
    }
  });
  (0, import_react10.useMemo)(() => {
    if (persistToStorage && storageKey && query.data) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(query.data));
      } catch {
      }
    }
  }, [query.data, persistToStorage, storageKey]);
  (0, import_react10.useMemo)(() => {
    if (retryOnReconnect) {
      const handleOnline = () => {
        queryClient.refetchQueries({ queryKey });
      };
      window.addEventListener("online", handleOnline);
      return () => window.removeEventListener("online", handleOnline);
    }
  }, [queryClient, queryKey, retryOnReconnect]);
  return query;
}

// src/components/GenericForm.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function GenericForm({
  config,
  initialData = {},
  onSubmit,
  onSuccess,
  isEditMode = false,
  isLoading = false,
  customActions = null,
  customFieldRenderers = {},
  className = "p-1 bg-card rounded-lg shadow-sm border"
}) {
  const { handleAsync } = useErrorHandler("GenericForm");
  const initialFormData = (0, import_react11.useMemo)(() => {
    const formData = {};
    config.sections.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.name in initialData) {
          formData[field.name] = initialData[field.name];
        } else if (field.defaultValue !== void 0) {
          formData[field.name] = field.defaultValue;
        } else {
          formData[field.name] = "";
        }
      });
    });
    return formData;
  }, [config, initialData]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
    setValue,
    getValues,
    reset,
    clearErrors
  } = (0, import_react_hook_form.useForm)({
    defaultValues: initialFormData,
    mode: "onChange"
    // Enable real-time validation
  });
  const handleFormSubmit = async (data) => {
    await handleAsync(
      async () => {
        await onSubmit(data);
        if (onSuccess) onSuccess();
        reset(initialFormData);
      },
      {
        context: isEditMode ? config.editContext : config.addContext,
        fallbackMessage: isEditMode ? config.editErrorMessage : config.addErrorMessage
      }
    );
  };
  const renderField = (field) => {
    const fieldValue = watch(field.name);
    if (field.conditional && !field.conditional(fieldValue, watch, getValues)) {
      return null;
    }
    if (customFieldRenderers[field.type]) {
      return customFieldRenderers[field.type](field, {
        watch,
        setValue,
        getValues,
        register,
        isSubmitting,
        fieldValue
      });
    }
    const baseInputProps = {
      id: field.name,
      placeholder: field.placeholder,
      disabled: field.disabled || isSubmitting,
      className: field.className || "",
      ...register(field.name, field.validation || {})
    };
    switch (field.type) {
      case "select":
        return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
            "select",
            {
              ...register(field.name, field.validation),
              disabled: field.disabled || isSubmitting,
              className: `flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${errors[field.name] ? "border-red-500" : "border-input"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: "", children: field.placeholder || `Seleziona ${field.label.toLowerCase()}` }),
                field.options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: option.value, children: option.label }, option.value))
              ]
            }
          ),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "textarea":
        return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "textarea",
            {
              ...baseInputProps,
              rows: field.rows || 3,
              className: `w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent ${field.className || ""} ${errors[field.name] ? "border-destructive" : ""}`
            }
          ),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "checkbox":
        return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex flex-wrap gap-2", children: field.options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "input",
            {
              type: "checkbox",
              id: `${field.name}_${option.value}`,
              value: option.value,
              checked: fieldValue?.includes(option.value) || false,
              onChange: (e) => {
                const currentValues = getValues(field.name) || [];
                if (e.target.checked) {
                  setValue(field.name, [...currentValues, option.value].sort(), { shouldValidate: true });
                } else {
                  setValue(field.name, currentValues.filter((v) => v !== option.value), { shouldValidate: true });
                }
              },
              className: "h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Label, { htmlFor: `${field.name}_${option.value}`, className: "text-[10px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: option.label })
        ] }, option.value)) });
      case "datetime-local":
        return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Input, { type: "datetime-local", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "date":
        return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Input, { type: "date", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "time":
        return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Input, { type: "time", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "number":
        return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Input, { type: "number", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "text":
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Input, { type: "text", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
    }
  };
  const renderSection = (section) => {
    const visibleFields = section.fields.filter(
      (field) => !field.conditional || field.conditional(watch(field.name), watch, getValues)
    );
    if (visibleFields.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "text-lg font-semibold text-foreground", children: section.title }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: visibleFields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Label, { htmlFor: field.name, className: "text-sm font-medium text-foreground", children: [
          field.label,
          " ",
          field.required && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-destructive", children: "*" })
        ] }),
        renderField(field),
        field.helpText && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-xs text-muted-foreground", children: field.helpText })
      ] }, field.name)) })
    ] }, section.title);
  };
  const renderCustomSection = (sectionKey) => {
    if (customFieldRenderers[sectionKey]) {
      return customFieldRenderers[sectionKey]();
    }
    return null;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "bg-card rounded-lg border border-border shadow-sm p-6", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("form", { onSubmit: handleSubmit(handleFormSubmit), noValidate: true, className: "space-y-6", children: [
    config.sections.map(renderSection),
    config.customFields && Object.keys(config.customFields).map(
      (sectionKey) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: renderCustomSection(sectionKey) }, sectionKey)
    ),
    customActions && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "space-y-4", children: customActions }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex justify-end pt-6 border-t border-border", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      Button,
      {
        type: "submit",
        disabled: isLoading || isSubmitting,
        children: isLoading || isSubmitting ? isEditMode ? config.editLoadingText : config.addLoadingText : isEditMode ? config.editButtonText : config.addButtonText
      }
    ) })
  ] }) });
}
var GenericForm_default = GenericForm;

// src/components/AppHeader.tsx
var import_react12 = require("react");
var import_lucide_react2 = require("lucide-react");

// src/components/Avatar.tsx
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"), 1);
var import_jsx_runtime19 = require("react/jsx-runtime");
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-primary text-primary-foreground flex size-full items-center justify-center rounded-full font-medium",
        className
      ),
      ...props
    }
  );
}

// src/components/DropdownMenu.tsx
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"), 1);
var import_lucide_react = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}

// src/components/AppHeader.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var SafeLink = ({ to, children, className }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("a", { href: to, className, children });
};
var AppHeader = ({
  title,
  logo,
  navigationItems = [],
  user,
  onLogout,
  onRefresh,
  onSettings,
  onUsers,
  onToggleSidebar,
  isLoading = false,
  customMenuItems
}) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = (0, import_react12.useState)(false);
  const handleUserMenuToggle = (0, import_react12.useCallback)(() => {
    setIsUserMenuOpen((prev) => !prev);
  }, []);
  const handleUserMenuClose = (0, import_react12.useCallback)(() => {
    setIsUserMenuOpen(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("header", { className: "bg-secondary border-b", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "px-4", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex justify-between items-center h-16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex items-center gap-2", children: [
      onToggleSidebar && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        "button",
        {
          onClick: onToggleSidebar,
          className: "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring",
          children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react2.Menu, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
        SafeLink,
        {
          to: "/",
          className: "flex items-center gap-2 text-secondary-foreground no-underline hover:opacity-80 transition-opacity",
          children: [
            logo && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                "img",
                {
                  className: "[.light_&]:hidden h-6",
                  src: logo.dark,
                  alt: title
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                "img",
                {
                  className: "[.dark_&]:hidden h-6",
                  src: logo.light,
                  alt: title
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h1", { className: "text-xl font-semibold", children: title })
          ]
        }
      )
    ] }),
    navigationItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("nav", { className: "hidden md:flex", children: navigationItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      SafeLink,
      {
        to: item.to,
        className: `px-6 py-3 text-sm font-medium transition-colors border-b-2 ${item.isActive ? "text-secondary-foreground border-secondary-foreground" : "text-secondary-foreground/70 border-transparent hover:text-secondary-foreground/80"}`,
        children: item.label
      },
      item.to
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ThemeSwitch, {}),
      onRefresh && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        Button,
        {
          onClick: onRefresh,
          variant: "ghost",
          size: "icon",
          className: "hidden sm:inline-flex",
          children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react2.LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react2.RotateCw, { className: "h-4 w-4" })
        }
      ),
      user && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenu, { open: isUserMenuOpen, onOpenChange: setIsUserMenuOpen, children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Button,
          {
            variant: "ghost",
            className: "relative h-8 w-8 rounded-full",
            children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Avatar, { className: "h-8 w-8", children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AvatarImage, { src: user.avatar, role: "presentation" }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AvatarFallback, { children: user.name?.charAt(0)?.toUpperCase() || "U" })
            ] })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-col space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-sm font-medium leading-none", children: user.name }),
            user.email && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-xs text-muted-foreground", children: user.email })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuSeparator, {}),
          onSettings && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenuItem, { onClick: onSettings, className: "cursor-pointer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react2.Settings, { className: "mr-2 h-4 w-4" }),
            "My info"
          ] }),
          onUsers && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenuItem, { onClick: onUsers, className: "cursor-pointer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react2.User, { className: "mr-2 h-4 w-4" }),
            "Users"
          ] }),
          customMenuItems,
          (onSettings || onUsers || customMenuItems) && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuSeparator, {}),
          onLogout && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenuItem, { onClick: onLogout, className: "cursor-pointer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react2.LogOut, { className: "mr-2 h-4 w-4" }),
            "Log out"
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
};

// src/components/ExactHeader.tsx
var import_react13 = __toESM(require("react"), 1);
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var UserMenuContext = import_react13.default.createContext(void 0);
var useUserMenu = () => import_react13.default.useContext(UserMenuContext);
var RefreshButton = ({ onRefresh, loading = false }) => {
  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    } else {
      window.location.reload();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    Button,
    {
      onClick: handleRefresh,
      variant: "ghost",
      size: "icon",
      className: "hidden sm:inline-flex",
      children: loading ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react3.LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react3.RotateCw, {})
    }
  );
};
function UserMenu({ children, user, onLogout }) {
  const [open, setOpen] = (0, import_react13.useState)(false);
  const handleToggleOpen = (0, import_react13.useCallback)(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);
  const handleClose = (0, import_react13.useCallback)(() => {
    setOpen(false);
  }, []);
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(UserMenuContext.Provider, { value: { onClose: handleClose }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(DropdownMenu, { open, onOpenChange: handleToggleOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Button,
      {
        variant: "ghost",
        className: "relative h-8 w-8 ml-2 rounded-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Avatar, { className: "h-8 w-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(AvatarImage, { src: user?.avatar, role: "presentation" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(AvatarFallback, { children: user?.name?.charAt(0) || "U" })
        ] })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-sm font-medium leading-none", children: user?.name || "User" }),
        user?.email && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-xs text-muted-foreground", children: user.email })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropdownMenuSeparator, {}),
      children,
      import_react13.Children.count(children) > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropdownMenuSeparator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(DropdownMenuItem, { onClick: handleLogout, className: "cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react3.LogOut, {}),
        "Log out"
      ] })
    ] })
  ] }) });
}
var SafeLink2 = ({ to, children, className }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { href: to, className, children });
};
var NavigationTab = ({
  label,
  to,
  isActive
}) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
  SafeLink2,
  {
    to,
    className: `px-6 py-3 text-sm font-medium transition-colors border-b-2 ${isActive ? "text-secondary-foreground border-secondary-foreground" : "text-secondary-foreground/70 border-transparent hover:text-secondary-foreground/80"}`,
    children: label
  }
);
var UsersMenu = () => {
  const { onClose } = useUserMenu() ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropdownMenuItem, { asChild: true, onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Link, { to: "/sales", className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react3.User, {}),
    " Users"
  ] }) });
};
var ConfigurationMenu = () => {
  const { onClose } = useUserMenu() ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(DropdownMenuItem, { asChild: true, onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Link, { to: "/settings", className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react3.Settings, {}),
    "My info"
  ] }) });
};
var ExactHeader = ({
  title,
  darkModeLogo,
  lightModeLogo,
  navigationItems = [],
  user,
  onLogout,
  onRefresh,
  loading = false
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("nav", { className: "flex-grow", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("header", { className: "bg-secondary", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "px-4", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex justify-between items-center flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      SafeLink2,
      {
        to: "/",
        className: "flex items-center gap-2 text-secondary-foreground no-underline",
        children: [
          darkModeLogo && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "img",
            {
              className: "[.light_&]:hidden h-6",
              src: darkModeLogo,
              alt: title
            }
          ),
          lightModeLogo && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "img",
            {
              className: "[.dark_&]:hidden h-6",
              src: lightModeLogo,
              alt: title
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { className: "text-xl font-semibold", children: title })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("nav", { className: "flex", children: navigationItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      NavigationTab,
      {
        label: item.label,
        to: item.to,
        isActive: item.isActive || false
      },
      item.to
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ThemeSwitch, {}),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(RefreshButton, { onRefresh, loading }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(UserMenu, { user, onLogout, children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ConfigurationMenu, {}),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(UsersMenu, {})
      ] })
    ] })
  ] }) }) }) });
};

// src/components/LoginPage.tsx
var import_react14 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var isDevelopmentMode = () => {
  if (typeof globalThis !== "undefined" && globalThis.import?.meta?.env) {
    return globalThis.import.meta.env.MODE === "development";
  }
  if (typeof process !== "undefined" && process.env) {
    return process.env.NODE_ENV === "development";
  }
  return false;
};
var LoginPage = ({
  title,
  logo,
  backgroundImage,
  backgroundColor = "#18181b",
  subtitle,
  showForgotPassword = true,
  showSignUp = true,
  labels = {},
  demoCredentials,
  isLoading = false,
  error,
  onSubmit,
  forgotPasswordUrl = "/forgot-password",
  signUpUrl = "/signup",
  additionalFields
}) => {
  const [formData, setFormData] = (0, import_react14.useState)({
    email: "",
    password: ""
  });
  const defaultLabels = {
    signIn: "Sign in",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot your password?",
    signUp: "Sign up",
    signUpText: "Don't have an account?",
    ...labels
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const fillDemoCredentials = () => {
    if (demoCredentials) {
      setFormData({
        email: demoCredentials.email,
        password: demoCredentials.password
      });
    }
  };
  console.log("\u{1F3A8} SharedLoginPage: Rendering with props", { title, logo, subtitle });
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { style: { minHeight: "100vh", display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: {
    width: "100%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    justifyContent: "center"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      "div",
      {
        style: {
          position: "relative",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "2.5rem",
          color: "white",
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : void 0,
          backgroundColor
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor
          } }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: {
            position: "relative",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            fontSize: "1.125rem",
            fontWeight: "500"
          }, children: [
            logo && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { style: { height: "1.5rem", marginRight: "0.5rem" }, src: logo, alt: title }),
            title
          ] }),
          subtitle && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { style: {
            position: "relative",
            zIndex: 20,
            marginTop: "auto"
          }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("blockquote", { style: { margin: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { style: { fontSize: "1.125rem", margin: 0 }, children: subtitle }) }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { style: { padding: "2rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: {
      margin: "0 auto",
      display: "flex",
      width: "100%",
      maxWidth: "350px",
      flexDirection: "column",
      justifyContent: "center",
      gap: "1.5rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h1", { style: {
          fontSize: "1.5rem",
          fontWeight: "600",
          letterSpacing: "-0.025em",
          margin: 0,
          color: "#111827"
        }, children: defaultLabels.signIn }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { style: {
          fontSize: "0.875rem",
          color: "#6b7280",
          margin: 0
        }, children: "Enter your email below to sign in to your account" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column", gap: "1rem" }, children: [
        error && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { style: {
          padding: "0.75rem",
          fontSize: "0.875rem",
          color: "#dc2626",
          backgroundColor: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "0.375rem"
        }, children: error }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            "label",
            {
              htmlFor: "email",
              style: {
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#374151"
              },
              children: defaultLabels.email
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            Input,
            {
              id: "email",
              name: "email",
              type: "email",
              value: formData.email,
              onChange: handleChange,
              placeholder: "name@example.com",
              required: true,
              disabled: isLoading
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            "label",
            {
              htmlFor: "password",
              style: {
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#374151"
              },
              children: defaultLabels.password
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            Input,
            {
              id: "password",
              name: "password",
              type: "password",
              value: formData.password,
              onChange: handleChange,
              required: true,
              disabled: isLoading
            }
          )
        ] }),
        additionalFields,
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          Button,
          {
            type: "submit",
            className: "w-full text-white",
            disabled: isLoading,
            children: isLoading ? "Signing in..." : defaultLabels.signIn
          }
        )
      ] }),
      demoCredentials && isDevelopmentMode() && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mt-4 p-3 bg-gray-50 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("details", { className: "group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("summary", { className: "cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900", children: "Demo Credentials (Development Only)" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "mt-2 space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("p", { className: "text-xs text-gray-600", children: [
            "Email: ",
            demoCredentials.email
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("p", { className: "text-xs text-gray-600", children: [
            "Password: ",
            demoCredentials.password
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            Button,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: fillDemoCredentials,
              className: "w-full mt-2",
              children: "Fill Demo Credentials"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "text-center space-y-4", children: [
        showForgotPassword && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "a",
          {
            href: forgotPasswordUrl,
            className: "text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline",
            children: defaultLabels.forgotPassword
          }
        ),
        showSignUp && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "text-sm text-muted-foreground", children: [
          defaultLabels.signUpText,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            "a",
            {
              href: signUpUrl,
              className: "text-primary underline-offset-4 hover:underline",
              children: defaultLabels.signUp
            }
          )
        ] })
      ] })
    ] }) })
  ] }) });
};

// src/components/SimpleHeader.tsx
var import_react15 = __toESM(require("react"), 1);
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var UserMenuContext2 = import_react15.default.createContext(void 0);
var useUserMenu2 = () => import_react15.default.useContext(UserMenuContext2);
var RefreshButton2 = ({ onRefresh, loading = false }) => {
  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    } else {
      window.location.reload();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    Button,
    {
      onClick: handleRefresh,
      variant: "ghost",
      size: "icon",
      className: "hidden sm:inline-flex",
      children: loading ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react4.LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react4.RotateCw, {})
    }
  );
};
function UserMenu2({ children, user, onLogout }) {
  const [open, setOpen] = (0, import_react15.useState)(false);
  const handleToggleOpen = (0, import_react15.useCallback)(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);
  const handleClose = (0, import_react15.useCallback)(() => {
    setOpen(false);
  }, []);
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(UserMenuContext2.Provider, { value: { onClose: handleClose }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenu, { open, onOpenChange: handleToggleOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      Button,
      {
        variant: "ghost",
        className: "relative h-8 w-8 ml-2 rounded-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Avatar, { className: "h-8 w-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(AvatarImage, { src: user?.avatar, role: "presentation" }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(AvatarFallback, { children: user?.name?.charAt(0) || "U" })
        ] })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-sm font-medium leading-none", children: user?.name || "User" }),
        user?.email && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-xs text-muted-foreground", children: user.email })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuSeparator, {}),
      children,
      import_react15.Children.count(children) > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuSeparator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuItem, { onClick: handleLogout, className: "cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react4.LogOut, {}),
        "Log out"
      ] })
    ] })
  ] }) });
}
var UsersMenu2 = () => {
  const { onClose } = useUserMenu2() ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuItem, { onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react4.User, {}),
    " Users"
  ] }) });
};
var ConfigurationMenu2 = () => {
  const { onClose } = useUserMenu2() ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuItem, { onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react4.Settings, {}),
    "My info"
  ] }) });
};
var SimpleHeader = ({
  title,
  darkModeLogo,
  lightModeLogo,
  user,
  onLogout,
  onRefresh,
  onToggleSidebar,
  loading = false
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("nav", { className: "flex-grow", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("header", { className: "bg-secondary", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "px-4", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex justify-between items-center flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-center gap-2", children: [
      onToggleSidebar && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        "button",
        {
          onClick: onToggleSidebar,
          className: "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring",
          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react4.Menu, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-center gap-2 text-secondary-foreground", children: [
        darkModeLogo && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "img",
          {
            className: "[.light_&]:hidden h-6",
            src: darkModeLogo,
            alt: title
          }
        ),
        lightModeLogo && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "img",
          {
            className: "[.dark_&]:hidden h-6",
            src: lightModeLogo,
            alt: title
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h1", { className: "text-xl font-semibold", children: title })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ThemeSwitch, {}),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(RefreshButton2, { onRefresh, loading }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(UserMenu2, { user, onLogout, children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ConfigurationMenu2, {}),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(UsersMenu2, {})
      ] })
    ] })
  ] }) }) }) });
};

// src/components/RelativeDate.tsx
var import_date_fns2 = require("date-fns");
function RelativeDate({ date }) {
  return (0, import_date_fns2.formatRelative)(new Date(date), /* @__PURE__ */ new Date());
}

// src/validation/url-validators.ts
var LINKEDIN_URL_REGEX = /^http(?:s)?:\/\/(?:www\.)?linkedin.com\//;
var isLinkedinUrl = (url) => {
  if (!url) return;
  try {
    const parsedUrl = new URL(url);
    if (!parsedUrl.href.match(LINKEDIN_URL_REGEX)) {
      return "URL must be from linkedin.com";
    }
  } catch {
    return "Must be a valid URL";
  }
};
var isUrl = (url) => {
  if (!url) return;
  const UrlRegex = new RegExp(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
  );
  if (!UrlRegex.test(url)) {
    return "Must be a valid URL";
  }
};

// src/validation/form-validators.ts
var validateMinLength = (minLength) => (value) => {
  if (!value) return;
  if (value.length < minLength) {
    return `Must be at least ${minLength} characters long`;
  }
};
var validateMaxLength = (maxLength) => (value) => {
  if (!value) return;
  if (value.length > maxLength) {
    return `Must be no more than ${maxLength} characters long`;
  }
};
var validateNumber = (value) => {
  if (value === null || value === void 0 || value === "") return;
  if (isNaN(Number(value))) {
    return "Must be a valid number";
  }
};
var validatePositiveNumber = (value) => {
  const numberError = validateNumber(value);
  if (numberError) return numberError;
  if (value !== null && value !== void 0 && value !== "" && Number(value) <= 0) {
    return "Must be a positive number";
  }
};

// src/services/BaseService.ts
var BaseService = class {
  constructor(client, tableName) {
    this.client = client;
    this.tableName = tableName;
  }
  /**
   * Get all records with advanced filtering and pagination
   */
  async getAll(options = {}) {
    try {
      let query = this.client.from(this.tableName).select(options.select || "*").order(options.orderBy || "created_at", { ascending: options.ascending !== false });
      if (options.filters) {
        Object.entries(options.filters).forEach(([key, value]) => {
          if (value !== null && value !== void 0 && value !== "") {
            if (Array.isArray(value)) {
              query = query.in(key, value);
            } else if (typeof value === "string" && value.includes("%")) {
              query = query.like(key, value);
            } else {
              query = query.eq(key, value);
            }
          }
        });
      }
      if (options.dateRange) {
        const { startDate, endDate, dateField = "created_at" } = options.dateRange;
        if (startDate) {
          query = query.gte(dateField, `${startDate}T00:00:00.000Z`);
        }
        if (endDate) {
          query = query.lte(dateField, `${endDate}T23:59:59.999Z`);
        }
      }
      if (options.limit) {
        query = query.limit(options.limit);
      }
      if (options.offset) {
        query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
      }
      const { data, error } = await query;
      if (error) {
        throw new Error(this.handleSupabaseError(error, `${this.tableName}.getAll`));
      }
      return data || [];
    } catch (error) {
      throw new Error(`Failed to fetch ${this.tableName}: ${error.message}`);
    }
  }
  /**
   * Get paginated records with total count
   */
  async getPaginated(options = {}) {
    const page = options.page || 1;
    const perPage = options.perPage || 10;
    const offset = (page - 1) * perPage;
    const totalCount = await this.count(options.filters);
    const data = await this.getAll({
      ...options,
      limit: perPage,
      offset
    });
    return {
      data,
      total: totalCount,
      page,
      perPage,
      totalPages: Math.ceil(totalCount / perPage)
    };
  }
  /**
   * Get a record by ID
   */
  async getById(id, select = "*") {
    try {
      const { data, error } = await this.client.from(this.tableName).select(select).eq("id", id).single();
      if (error) {
        throw new Error(this.handleSupabaseError(error, `${this.tableName}.getById`));
      }
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch ${this.tableName} by ID: ${error.message}`);
    }
  }
  /**
   * Create a new record
   */
  async create(data) {
    try {
      const { data: result, error } = await this.client.from(this.tableName).insert(data).select().single();
      if (error) {
        throw new Error(this.handleSupabaseError(error, `${this.tableName}.create`));
      }
      return result;
    } catch (error) {
      throw new Error(`Failed to create ${this.tableName}: ${error.message}`);
    }
  }
  /**
   * Update a record
   */
  async update(id, data) {
    try {
      const { data: result, error } = await this.client.from(this.tableName).update(data).eq("id", id).select().single();
      if (error) {
        throw new Error(this.handleSupabaseError(error, `${this.tableName}.update`));
      }
      return result;
    } catch (error) {
      throw new Error(`Failed to update ${this.tableName}: ${error.message}`);
    }
  }
  /**
   * Delete a record
   */
  async delete(id) {
    try {
      const { error } = await this.client.from(this.tableName).delete().eq("id", id);
      if (error) {
        throw new Error(this.handleSupabaseError(error, `${this.tableName}.delete`));
      }
    } catch (error) {
      throw new Error(`Failed to delete ${this.tableName}: ${error.message}`);
    }
  }
  /**
   * Bulk delete records
   */
  async bulkDelete(ids) {
    try {
      const { error } = await this.client.from(this.tableName).delete().in("id", ids);
      if (error) {
        throw new Error(this.handleSupabaseError(error, `${this.tableName}.bulkDelete`));
      }
    } catch (error) {
      throw new Error(`Failed to bulk delete ${this.tableName}: ${error.message}`);
    }
  }
  /**
   * Count records with optional filters
   */
  async count(filters) {
    try {
      let query = this.client.from(this.tableName).select("*", { count: "exact", head: true });
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== null && value !== void 0 && value !== "") {
            if (Array.isArray(value)) {
              query = query.in(key, value);
            } else {
              query = query.eq(key, value);
            }
          }
        });
      }
      const { count, error } = await query;
      if (error) {
        throw new Error(this.handleSupabaseError(error, `${this.tableName}.count`));
      }
      return count || 0;
    } catch (error) {
      throw new Error(`Failed to count ${this.tableName}: ${error.message}`);
    }
  }
  /**
   * Search records with text search
   */
  async search(searchTerm, searchFields = ["name"], options = {}) {
    try {
      let query = this.client.from(this.tableName).select(options.select || "*");
      if (searchFields.length === 1) {
        query = query.ilike(searchFields[0], `%${searchTerm}%`);
      } else {
        const orConditions = searchFields.map((field) => `${field}.ilike.%${searchTerm}%`).join(",");
        query = query.or(orConditions);
      }
      if (options.filters) {
        Object.entries(options.filters).forEach(([key, value]) => {
          if (value !== null && value !== void 0 && value !== "") {
            query = query.eq(key, value);
          }
        });
      }
      query = query.order(options.orderBy || "created_at", { ascending: options.ascending !== false });
      if (options.limit) {
        query = query.limit(options.limit);
      }
      const { data, error } = await query;
      if (error) {
        throw new Error(this.handleSupabaseError(error, `${this.tableName}.search`));
      }
      return data || [];
    } catch (error) {
      throw new Error(`Failed to search ${this.tableName}: ${error.message}`);
    }
  }
  /**
   * Handle Supabase errors with user-friendly messages
   */
  handleSupabaseError(error, context = "") {
    if (error.code === "23505") {
      return "This record already exists";
    } else if (error.code === "23503") {
      return "Cannot perform this operation due to related records";
    } else if (error.code === "PGRST116") {
      return "No records found";
    } else if (error.message?.includes("JWT")) {
      return "Authentication error. Please refresh the page";
    }
    return error.message || "An unexpected error occurred";
  }
};

// src/services/SupabaseService.ts
var ERROR_TYPES2 = {
  // Validation Errors
  VALIDATION_ERROR: "VALIDATION_ERROR",
  REQUIRED_FIELD_ERROR: "REQUIRED_FIELD_ERROR",
  INVALID_FORMAT_ERROR: "INVALID_FORMAT_ERROR",
  INVALID_RANGE_ERROR: "INVALID_RANGE_ERROR",
  INVALID_TYPE_ERROR: "INVALID_TYPE_ERROR",
  // Data Errors
  NOT_FOUND: "NOT_FOUND",
  DUPLICATE_ERROR: "DUPLICATE_ERROR",
  CONFLICT_ERROR: "CONFLICT_ERROR",
  OUT_OF_SYNC_ERROR: "OUT_OF_SYNC_ERROR",
  // Permission & Security Errors
  PERMISSION_ERROR: "PERMISSION_ERROR",
  AUTHENTICATION_ERROR: "AUTHENTICATION_ERROR",
  AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR",
  RATE_LIMIT_ERROR: "RATE_LIMIT_ERROR",
  // Business Logic Errors
  BUSINESS_LOGIC_ERROR: "BUSINESS_LOGIC_ERROR",
  INSUFFICIENT_STOCK_ERROR: "INSUFFICIENT_STOCK_ERROR",
  CAPACITY_EXCEEDED_ERROR: "CAPACITY_EXCEEDED_ERROR",
  INVALID_OPERATION_ERROR: "INVALID_OPERATION_ERROR",
  WORKFLOW_ERROR: "WORKFLOW_ERROR",
  // System Errors
  SERVER_ERROR: "SERVER_ERROR",
  DATABASE_ERROR: "DATABASE_ERROR",
  NETWORK_ERROR: "NETWORK_ERROR",
  TIMEOUT_ERROR: "TIMEOUT_ERROR",
  CONNECTION_ERROR: "CONNECTION_ERROR",
  // External Service Errors
  EXTERNAL_SERVICE_ERROR: "EXTERNAL_SERVICE_ERROR",
  API_ERROR: "API_ERROR",
  INTEGRATION_ERROR: "INTEGRATION_ERROR",
  // Configuration Errors
  CONFIGURATION_ERROR: "CONFIGURATION_ERROR",
  ENVIRONMENT_ERROR: "ENVIRONMENT_ERROR",
  // Resource Errors
  RESOURCE_EXHAUSTED_ERROR: "RESOURCE_EXHAUSTED_ERROR",
  QUOTA_EXCEEDED_ERROR: "QUOTA_EXCEEDED_ERROR",
  STORAGE_ERROR: "STORAGE_ERROR",
  // User Experience Errors
  USER_INPUT_ERROR: "USER_INPUT_ERROR",
  UI_ERROR: "UI_ERROR",
  NAVIGATION_ERROR: "NAVIGATION_ERROR",
  // Recovery Errors
  RECOVERY_ERROR: "RECOVERY_ERROR",
  RETRY_ERROR: "RETRY_ERROR",
  FALLBACK_ERROR: "FALLBACK_ERROR"
};
var ServiceError = class extends Error {
  constructor(message, type = ERROR_TYPES2.SERVER_ERROR, statusCode = 500, originalError = null, context = "", options = {}) {
    super(message);
    this.name = "ServiceError";
    this.type = type;
    this.statusCode = statusCode;
    this.originalError = originalError;
    this.context = context;
    this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
    this.id = options.id || this.generateErrorId();
    this.severity = options.severity || this.getDefaultSeverity(type);
    this.retryable = options.retryable !== void 0 ? options.retryable : this.isRetryable(type);
    this.userMessage = options.userMessage || this.getDefaultUserMessage(type, message);
    this.details = options.details || {};
    this.metadata = options.metadata || {};
    if (originalError?.stack) {
      this.stack = originalError.stack;
    }
  }
  generateErrorId() {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  getDefaultSeverity(type) {
    const severityMap = {
      [ERROR_TYPES2.VALIDATION_ERROR]: "low",
      [ERROR_TYPES2.REQUIRED_FIELD_ERROR]: "low",
      [ERROR_TYPES2.INVALID_FORMAT_ERROR]: "low",
      [ERROR_TYPES2.INVALID_RANGE_ERROR]: "low",
      [ERROR_TYPES2.INVALID_TYPE_ERROR]: "low",
      [ERROR_TYPES2.USER_INPUT_ERROR]: "low",
      [ERROR_TYPES2.UI_ERROR]: "low",
      [ERROR_TYPES2.NAVIGATION_ERROR]: "low",
      [ERROR_TYPES2.NOT_FOUND]: "medium",
      [ERROR_TYPES2.DUPLICATE_ERROR]: "medium",
      [ERROR_TYPES2.CONFLICT_ERROR]: "medium",
      [ERROR_TYPES2.BUSINESS_LOGIC_ERROR]: "medium",
      [ERROR_TYPES2.INSUFFICIENT_STOCK_ERROR]: "medium",
      [ERROR_TYPES2.CAPACITY_EXCEEDED_ERROR]: "medium",
      [ERROR_TYPES2.INVALID_OPERATION_ERROR]: "medium",
      [ERROR_TYPES2.WORKFLOW_ERROR]: "medium",
      [ERROR_TYPES2.PERMISSION_ERROR]: "high",
      [ERROR_TYPES2.AUTHENTICATION_ERROR]: "high",
      [ERROR_TYPES2.AUTHORIZATION_ERROR]: "high",
      [ERROR_TYPES2.RATE_LIMIT_ERROR]: "high",
      [ERROR_TYPES2.CONFIGURATION_ERROR]: "high",
      [ERROR_TYPES2.ENVIRONMENT_ERROR]: "high",
      [ERROR_TYPES2.SERVER_ERROR]: "critical",
      [ERROR_TYPES2.DATABASE_ERROR]: "critical",
      [ERROR_TYPES2.NETWORK_ERROR]: "critical",
      [ERROR_TYPES2.CONNECTION_ERROR]: "critical",
      [ERROR_TYPES2.EXTERNAL_SERVICE_ERROR]: "critical",
      [ERROR_TYPES2.API_ERROR]: "critical",
      [ERROR_TYPES2.INTEGRATION_ERROR]: "critical",
      [ERROR_TYPES2.RESOURCE_EXHAUSTED_ERROR]: "critical",
      [ERROR_TYPES2.QUOTA_EXCEEDED_ERROR]: "critical",
      [ERROR_TYPES2.STORAGE_ERROR]: "critical"
    };
    return severityMap[type] || "medium";
  }
  isRetryable(type) {
    const retryableTypes = [
      ERROR_TYPES2.NETWORK_ERROR,
      ERROR_TYPES2.CONNECTION_ERROR,
      ERROR_TYPES2.TIMEOUT_ERROR,
      ERROR_TYPES2.SERVER_ERROR,
      ERROR_TYPES2.EXTERNAL_SERVICE_ERROR,
      ERROR_TYPES2.API_ERROR,
      ERROR_TYPES2.RATE_LIMIT_ERROR
    ];
    return retryableTypes.includes(type);
  }
  getDefaultUserMessage(type, message) {
    const userMessageMap = {
      [ERROR_TYPES2.VALIDATION_ERROR]: "Please check your input and try again.",
      [ERROR_TYPES2.REQUIRED_FIELD_ERROR]: "Please fill in all required fields.",
      [ERROR_TYPES2.INVALID_FORMAT_ERROR]: "Please check the format of your input.",
      [ERROR_TYPES2.INVALID_RANGE_ERROR]: "Please enter a value within the allowed range.",
      [ERROR_TYPES2.INVALID_TYPE_ERROR]: "Please enter the correct type of data.",
      [ERROR_TYPES2.NOT_FOUND]: "The requested item was not found.",
      [ERROR_TYPES2.DUPLICATE_ERROR]: "This item already exists.",
      [ERROR_TYPES2.CONFLICT_ERROR]: "There was a conflict with your request.",
      [ERROR_TYPES2.PERMISSION_ERROR]: "You do not have permission to perform this action.",
      [ERROR_TYPES2.AUTHENTICATION_ERROR]: "Please log in to continue.",
      [ERROR_TYPES2.AUTHORIZATION_ERROR]: "You are not authorized to perform this action.",
      [ERROR_TYPES2.BUSINESS_LOGIC_ERROR]: "This operation cannot be completed due to business rules.",
      [ERROR_TYPES2.INSUFFICIENT_STOCK_ERROR]: "Insufficient stock available.",
      [ERROR_TYPES2.CAPACITY_EXCEEDED_ERROR]: "Capacity limit exceeded.",
      [ERROR_TYPES2.INVALID_OPERATION_ERROR]: "This operation is not allowed.",
      [ERROR_TYPES2.SERVER_ERROR]: "A server error occurred. Please try again later.",
      [ERROR_TYPES2.DATABASE_ERROR]: "A database error occurred. Please try again later.",
      [ERROR_TYPES2.NETWORK_ERROR]: "Network connection failed. Please check your connection.",
      [ERROR_TYPES2.CONNECTION_ERROR]: "Connection failed. Please try again.",
      [ERROR_TYPES2.TIMEOUT_ERROR]: "The operation timed out. Please try again.",
      [ERROR_TYPES2.EXTERNAL_SERVICE_ERROR]: "External service is temporarily unavailable.",
      [ERROR_TYPES2.API_ERROR]: "API request failed. Please try again later.",
      [ERROR_TYPES2.CONFIGURATION_ERROR]: "System configuration error. Please contact support.",
      [ERROR_TYPES2.ENVIRONMENT_ERROR]: "Environment configuration error. Please contact support.",
      [ERROR_TYPES2.RESOURCE_EXHAUSTED_ERROR]: "System resources are exhausted. Please try again later.",
      [ERROR_TYPES2.QUOTA_EXCEEDED_ERROR]: "Quota exceeded. Please try again later.",
      [ERROR_TYPES2.STORAGE_ERROR]: "Storage error occurred. Please try again later.",
      [ERROR_TYPES2.USER_INPUT_ERROR]: "Please check your input and try again.",
      [ERROR_TYPES2.UI_ERROR]: "A user interface error occurred.",
      [ERROR_TYPES2.NAVIGATION_ERROR]: "Navigation error occurred.",
      [ERROR_TYPES2.RECOVERY_ERROR]: "Error recovery failed.",
      [ERROR_TYPES2.RETRY_ERROR]: "Retry operation failed.",
      [ERROR_TYPES2.FALLBACK_ERROR]: "Fallback operation failed."
    };
    return userMessageMap[type] || "An unexpected error occurred. Please try again.";
  }
  toUserFriendly() {
    return {
      message: this.userMessage,
      type: this.type,
      severity: this.severity,
      retryable: this.retryable,
      timestamp: this.timestamp
    };
  }
};
var handleSupabaseError = (error) => {
  if (!error) return { type: ERROR_TYPES2.SERVER_ERROR, message: "Unknown error occurred" };
  switch (error.code) {
    // Constraint violations
    case "23505":
      return {
        type: ERROR_TYPES2.DUPLICATE_ERROR,
        message: "A record with this information already exists",
        details: { constraint: error.constraint, table: error.table }
      };
    case "23503":
      return {
        type: ERROR_TYPES2.CONFLICT_ERROR,
        message: "Cannot perform this action due to related records",
        details: { constraint: error.constraint, table: error.table }
      };
    case "23502":
      return {
        type: ERROR_TYPES2.REQUIRED_FIELD_ERROR,
        message: "Required fields are missing",
        details: { column: error.column, table: error.table }
      };
    case "23514":
      return {
        type: ERROR_TYPES2.VALIDATION_ERROR,
        message: "Data validation failed",
        details: { constraint: error.constraint, table: error.table }
      };
    // Database structure errors
    case "42P01":
      return {
        type: ERROR_TYPES2.DATABASE_ERROR,
        message: "Database table not found",
        details: { table: error.table }
      };
    case "42703":
      return {
        type: ERROR_TYPES2.DATABASE_ERROR,
        message: "Database column not found",
        details: { column: error.column, table: error.table }
      };
    // Authentication errors
    case "PGRST301":
    // JWT expired
    case "PGRST302":
      return {
        type: ERROR_TYPES2.AUTHENTICATION_ERROR,
        message: "Authentication expired. Please log in again."
      };
    // Authorization errors
    case "PGRST001":
      return {
        type: ERROR_TYPES2.AUTHORIZATION_ERROR,
        message: "You do not have permission to perform this action."
      };
    // Not found errors
    case "PGRST116":
      return {
        type: ERROR_TYPES2.NOT_FOUND,
        message: "Record not found"
      };
    default:
      if (error.message?.includes("JWT")) {
        return {
          type: ERROR_TYPES2.AUTHENTICATION_ERROR,
          message: "Authentication error. Please refresh the page"
        };
      }
      if (error.message?.includes("network")) {
        return {
          type: ERROR_TYPES2.NETWORK_ERROR,
          message: "Network connection failed"
        };
      }
      if (error.message?.includes("timeout")) {
        return {
          type: ERROR_TYPES2.TIMEOUT_ERROR,
          message: "Request timed out"
        };
      }
      return {
        type: ERROR_TYPES2.SERVER_ERROR,
        message: error.message || "An unexpected error occurred"
      };
  }
};
var validateRequiredFields = (data, requiredFields) => {
  const missingFields = requiredFields.filter(
    (field) => data[field] === void 0 || data[field] === null || data[field] === ""
  );
  if (missingFields.length > 0) {
    throw new ServiceError(
      `Missing required fields: ${missingFields.join(", ")}`,
      ERROR_TYPES2.REQUIRED_FIELD_ERROR,
      400,
      null,
      "validateRequiredFields",
      { details: { missingFields } }
    );
  }
};
var validateNumericRanges = (data, ranges) => {
  for (const [field, range2] of Object.entries(ranges)) {
    const value = data[field];
    if (value !== void 0 && value !== null) {
      const numValue = Number(value);
      if (isNaN(numValue)) {
        throw new ServiceError(
          `${field} must be a valid number`,
          ERROR_TYPES2.INVALID_TYPE_ERROR,
          400,
          null,
          "validateNumericRanges",
          { details: { field, value } }
        );
      }
      if (range2.min !== void 0 && numValue < range2.min) {
        throw new ServiceError(
          `${field} must be at least ${range2.min}`,
          ERROR_TYPES2.INVALID_RANGE_ERROR,
          400,
          null,
          "validateNumericRanges",
          { details: { field, value, min: range2.min } }
        );
      }
      if (range2.max !== void 0 && numValue > range2.max) {
        throw new ServiceError(
          `${field} must be no more than ${range2.max}`,
          ERROR_TYPES2.INVALID_RANGE_ERROR,
          400,
          null,
          "validateNumericRanges",
          { details: { field, value, max: range2.max } }
        );
      }
    }
  }
};
var throwNotFoundError = (entityType, id) => {
  throw new ServiceError(
    `${entityType} with ID ${id} not found`,
    ERROR_TYPES2.NOT_FOUND,
    404,
    null,
    "throwNotFoundError",
    { details: { entityType, id } }
  );
};
var throwBusinessError = (message, details) => {
  throw new ServiceError(
    message,
    ERROR_TYPES2.BUSINESS_LOGIC_ERROR,
    400,
    null,
    "throwBusinessError",
    { details }
  );
};
var safeAsync2 = async (operation, context = "unknown") => {
  try {
    return await operation();
  } catch (error) {
    if (error instanceof ServiceError) {
      throw error;
    }
    const supabaseError = handleSupabaseError(error);
    throw new ServiceError(
      supabaseError.message,
      supabaseError.type,
      500,
      error,
      context,
      { details: supabaseError.details }
    );
  }
};
var SupabaseService = class {
  constructor(client, tableName) {
    this.realtimeChannels = /* @__PURE__ */ new Map();
    this.client = client;
    this.tableName = tableName;
  }
  /**
   * Initialize service and test connection
   */
  async init() {
    return safeAsync2(async () => {
      const { error } = await this.client.from(this.tableName).select("count").limit(1);
      if (error) {
        throw error;
      }
      return true;
    }, `${this.tableName}.init`);
  }
  /**
   * Get all records with advanced filtering and pagination
   */
  async getAll(options = {}) {
    return safeAsync2(async () => {
      let query = this.client.from(this.tableName).select(options.select || "*").order(options.orderBy || "created_at", { ascending: options.ascending !== false });
      if (options.filters) {
        Object.entries(options.filters).forEach(([key, value]) => {
          if (value !== null && value !== void 0 && value !== "") {
            if (Array.isArray(value)) {
              query = query.in(key, value);
            } else if (typeof value === "string" && value.includes("%")) {
              query = query.like(key, value);
            } else {
              query = query.eq(key, value);
            }
          }
        });
      }
      if (options.dateRange) {
        const { startDate, endDate, dateField = "created_at" } = options.dateRange;
        if (startDate) {
          query = query.gte(dateField, `${startDate}T00:00:00.000Z`);
        }
        if (endDate) {
          query = query.lte(dateField, `${endDate}T23:59:59.999Z`);
        }
      }
      if (options.limit) {
        query = query.limit(options.limit);
      }
      if (options.offset) {
        query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
      }
      const { data, error } = await query;
      if (error) {
        throw error;
      }
      return data || [];
    }, `${this.tableName}.getAll`);
  }
  /**
   * Get paginated records with total count
   */
  async getPaginated(options = {}) {
    const page = options.page || 1;
    const perPage = options.perPage || 10;
    const offset = (page - 1) * perPage;
    const [totalCount, data] = await Promise.all([
      this.count(options.filters),
      this.getAll({
        ...options,
        limit: perPage,
        offset
      })
    ]);
    return {
      data,
      total: totalCount,
      page,
      perPage,
      totalPages: Math.ceil(totalCount / perPage)
    };
  }
  /**
   * Get a record by ID
   */
  async getById(id, select = "*") {
    return safeAsync2(async () => {
      const { data, error } = await this.client.from(this.tableName).select(select).eq("id", id).single();
      if (error) {
        throw error;
      }
      return data;
    }, `${this.tableName}.getById`);
  }
  /**
   * Get records by field value
   */
  async getByField(field, value, options = {}) {
    return safeAsync2(async () => {
      let query = this.client.from(this.tableName).select(options.select || "*").eq(field, value);
      if (options.orderBy) {
        query = query.order(options.orderBy, { ascending: options.ascending !== false });
      }
      if (options.limit) {
        query = query.limit(options.limit);
      }
      const { data, error } = await query;
      if (error) {
        throw error;
      }
      return data || [];
    }, `${this.tableName}.getByField`);
  }
  /**
   * Create a new record
   */
  async create(data) {
    return safeAsync2(async () => {
      const { data: result, error } = await this.client.from(this.tableName).insert(data).select().single();
      if (error) {
        throw error;
      }
      return result;
    }, `${this.tableName}.create`);
  }
  /**
   * Create multiple records
   */
  async createMany(data) {
    return safeAsync2(async () => {
      const { data: result, error } = await this.client.from(this.tableName).insert(data).select();
      if (error) {
        throw error;
      }
      return result || [];
    }, `${this.tableName}.createMany`);
  }
  /**
   * Update a record
   */
  async update(id, data) {
    return safeAsync2(async () => {
      const { data: result, error } = await this.client.from(this.tableName).update(data).eq("id", id).select().single();
      if (error) {
        throw error;
      }
      return result;
    }, `${this.tableName}.update`);
  }
  /**
   * Update multiple records
   */
  async updateMany(updates) {
    return safeAsync2(async () => {
      const promises = updates.map(({ id, data }) => this.update(id, data));
      return Promise.all(promises);
    }, `${this.tableName}.updateMany`);
  }
  /**
   * Upsert a record (insert or update)
   */
  async upsert(data, onConflict) {
    return safeAsync2(async () => {
      let query = this.client.from(this.tableName).upsert(data).select().single();
      if (onConflict) {
        query = query.onConflict(onConflict);
      }
      const { data: result, error } = await query;
      if (error) {
        throw error;
      }
      return result;
    }, `${this.tableName}.upsert`);
  }
  /**
   * Delete a record
   */
  async delete(id) {
    return safeAsync2(async () => {
      const { error } = await this.client.from(this.tableName).delete().eq("id", id);
      if (error) {
        throw error;
      }
    }, `${this.tableName}.delete`);
  }
  /**
   * Bulk delete records
   */
  async bulkDelete(ids) {
    return safeAsync2(async () => {
      const { error } = await this.client.from(this.tableName).delete().in("id", ids);
      if (error) {
        throw error;
      }
    }, `${this.tableName}.bulkDelete`);
  }
  /**
   * Count records with optional filters
   */
  async count(filters) {
    return safeAsync2(async () => {
      let query = this.client.from(this.tableName).select("*", { count: "exact", head: true });
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== null && value !== void 0 && value !== "") {
            if (Array.isArray(value)) {
              query = query.in(key, value);
            } else {
              query = query.eq(key, value);
            }
          }
        });
      }
      const { count, error } = await query;
      if (error) {
        throw error;
      }
      return count || 0;
    }, `${this.tableName}.count`);
  }
  /**
   * Check if record exists
   */
  async exists(id) {
    return safeAsync2(async () => {
      const { data, error } = await this.client.from(this.tableName).select("id").eq("id", id).single();
      if (error && error.code !== "PGRST116") {
        throw error;
      }
      return !!data;
    }, `${this.tableName}.exists`);
  }
  /**
   * Search records with text search
   */
  async search(searchTerm, searchFields = ["name"], options = {}) {
    return safeAsync2(async () => {
      let query = this.client.from(this.tableName).select(options.select || "*");
      if (searchFields.length === 1) {
        query = query.ilike(searchFields[0], `%${searchTerm}%`);
      } else {
        const orConditions = searchFields.map((field) => `${field}.ilike.%${searchTerm}%`).join(",");
        query = query.or(orConditions);
      }
      if (options.filters) {
        Object.entries(options.filters).forEach(([key, value]) => {
          if (value !== null && value !== void 0 && value !== "") {
            query = query.eq(key, value);
          }
        });
      }
      query = query.order(options.orderBy || "created_at", { ascending: options.ascending !== false });
      if (options.limit) {
        query = query.limit(options.limit);
      }
      const { data, error } = await query;
      if (error) {
        throw error;
      }
      return data || [];
    }, `${this.tableName}.search`);
  }
  /**
   * Get records by date range
   */
  async getByDateRange(startDate, endDate, dateField = "created_at", options = {}) {
    return this.getAll({
      ...options,
      dateRange: { startDate, endDate, dateField }
    });
  }
  /**
   * Execute raw SQL query
   */
  async executeRpc(functionName, params) {
    return safeAsync2(async () => {
      const { data, error } = await this.client.rpc(functionName, params);
      if (error) {
        throw error;
      }
      return data;
    }, `${this.tableName}.executeRpc`);
  }
  /**
   * Setup real-time subscription
   */
  setupRealtimeSubscription(callback, options = {}, channelName) {
    const channel = channelName || `${this.tableName}_realtime_${Date.now()}`;
    let realtimeChannel = this.client.channel(channel).on(
      "postgres_changes",
      {
        event: options.event || "*",
        schema: options.schema || "public",
        table: this.tableName,
        filter: options.filter
      },
      callback
    ).subscribe();
    this.realtimeChannels.set(channel, realtimeChannel);
    return realtimeChannel;
  }
  /**
   * Remove real-time subscription
   */
  removeRealtimeSubscription(channelName) {
    const channel = this.realtimeChannels.get(channelName);
    if (channel) {
      this.client.removeChannel(channel);
      this.realtimeChannels.delete(channelName);
    }
  }
  /**
   * Remove all real-time subscriptions
   */
  removeAllRealtimeSubscriptions() {
    this.realtimeChannels.forEach((channel, channelName) => {
      this.client.removeChannel(channel);
    });
    this.realtimeChannels.clear();
  }
  /**
   * Bulk operations with transaction support
   */
  async bulkOperation(operations) {
    return safeAsync2(async () => {
      const results = [];
      for (const operation of operations) {
        let result;
        switch (operation.type) {
          case "insert":
            result = await this.create(operation.data);
            break;
          case "update":
            result = await this.update(operation.id, operation.data);
            break;
          case "delete":
            await this.delete(operation.id);
            result = { deleted: true, id: operation.id };
            break;
          case "upsert":
            result = await this.upsert(operation.data);
            break;
          default:
            throw new ServiceError(
              `Unknown operation type: ${operation.type}`,
              ERROR_TYPES2.INVALID_OPERATION_ERROR
            );
        }
        results.push(result);
      }
      return results;
    }, `${this.tableName}.bulkOperation`);
  }
  /**
   * Get table name
   */
  getTableName() {
    return this.tableName;
  }
  /**
   * Get Supabase client
   */
  getClient() {
    return this.client;
  }
};

// src/services/supabase.ts
var import_supabase_js = require("@supabase/supabase-js");
var import_meta = {};
var createSupabaseClient = (config) => {
  const defaultOptions = {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    },
    realtime: {
      params: {
        eventsPerSecond: 10
      }
    }
  };
  return (0, import_supabase_js.createClient)(config.url, config.anonKey, {
    ...defaultOptions,
    ...config.options
  });
};
var getEnvVar = (key) => {
  if (typeof import_meta !== "undefined" && import_meta.env) {
    const value = import_meta.env[key];
    if (value !== void 0) return value;
  }
  if (typeof process !== "undefined" && process.env) {
    const value = process.env[key];
    if (value !== void 0) return value;
  }
  if (typeof window !== "undefined" && window.__ENV__) {
    return window.__ENV__[key];
  }
  return void 0;
};
var createSupabaseFromEnv = () => {
  const url = getEnvVar("VITE_SUPABASE_URL");
  const anonKey = getEnvVar("VITE_SUPABASE_ANON_KEY");
  if (!url) {
    throw new Error("Missing VITE_SUPABASE_URL environment variable");
  }
  if (!anonKey) {
    throw new Error("Missing VITE_SUPABASE_ANON_KEY environment variable");
  }
  return createSupabaseClient({ url, anonKey });
};
var handleSupabaseError2 = (error, context = "") => {
  if (error.code === "23505") {
    return "This record already exists";
  } else if (error.code === "23503") {
    return "Cannot perform this operation due to related records";
  } else if (error.code === "PGRST116") {
    return "No records found";
  } else if (error.message?.includes("JWT")) {
    return "Authentication error. Please refresh the page";
  }
  return error.message || "An unexpected error occurred";
};
var checkSupabaseConnection = async (client, testTable = "users") => {
  try {
    const { error } = await client.from(testTable).select("count").limit(1);
    return !error;
  } catch (error) {
    return false;
  }
};
var getStandardSupabaseClient = () => {
  return createSupabaseFromEnv();
};
var _supabaseClient = null;
var getSupabaseClient = () => {
  if (!_supabaseClient) {
    _supabaseClient = createSupabaseFromEnv();
  }
  return _supabaseClient;
};

// src/services/supabase-storage.ts
var uploadToSupabaseStorage = async (supabase, file, options = {}) => {
  const {
    bucket = "attachments",
    folder = "",
    generateFileName = true,
    overwrite = false
  } = options;
  let fileName;
  if (generateFileName) {
    const fileExt = file instanceof File ? file.name.split(".").pop() : "bin";
    fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
  } else if (file instanceof File) {
    fileName = file.name;
  } else {
    fileName = `${Math.random().toString(36).substring(2)}.bin`;
  }
  const filePath = folder ? `${folder}/${fileName}` : fileName;
  const { error: uploadError } = await supabase.storage.from(bucket).upload(filePath, file, {
    upsert: overwrite
  });
  if (uploadError) {
    console.error("Upload error:", uploadError);
    throw new Error(`Failed to upload file: ${uploadError.message}`);
  }
  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return {
    path: filePath,
    src: data.publicUrl,
    type: file instanceof File ? file.type : void 0,
    size: file.size,
    name: file instanceof File ? file.name : fileName
  };
};
var checkFileExists = async (supabase, path, bucket = "attachments") => {
  try {
    const { error } = await supabase.storage.from(bucket).createSignedUrl(path, 60);
    return !error;
  } catch {
    return false;
  }
};
var deleteFromSupabaseStorage = async (supabase, path, bucket = "attachments") => {
  const { error } = await supabase.storage.from(bucket).remove([path]);
  if (error) {
    console.error("Delete error:", error);
    throw new Error(`Failed to delete file: ${error.message}`);
  }
};
var getSignedUrl = async (supabase, path, expiresIn = 3600, bucket = "attachments") => {
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, expiresIn);
  if (error) {
    throw new Error(`Failed to create signed URL: ${error.message}`);
  }
  return data.signedUrl;
};
var uploadMultipleFiles = async (supabase, files, options = {}) => {
  const uploadPromises = files.map(
    (file) => uploadToSupabaseStorage(supabase, file, options)
  );
  return Promise.all(uploadPromises);
};

// src/services/supabase-database.ts
var applyFullTextSearch = (supabase, table, options) => {
  const { columns, query, language = "english" } = options;
  if (!query.trim()) {
    return supabase.from(table).select("*");
  }
  const searchQuery = query.split(" ").filter((term) => term.length > 0).map((term) => `${term}:*`).join(" & ");
  let queryBuilder = supabase.from(table).select("*");
  const searchConditions = columns.map(
    (column) => `${column}.fts(${language}).${searchQuery}`
  ).join(",");
  return queryBuilder.or(searchConditions);
};
var applyPagination = (queryBuilder, params) => {
  const { page = 1, perPage = 10, sortBy: sortBy2, sortOrder = "asc" } = params;
  const from = (page - 1) * perPage;
  const to = from + perPage - 1;
  let query = queryBuilder.range(from, to);
  if (sortBy2) {
    query = query.order(sortBy2, { ascending: sortOrder === "asc" });
  }
  return query;
};
var recordExists = async (supabase, table, conditions) => {
  let query = supabase.from(table).select("id", { count: "exact" });
  Object.entries(conditions).forEach(([key, value]) => {
    query = query.eq(key, value);
  });
  const { count, error } = await query;
  if (error) {
    throw new Error(`Failed to check record existence: ${error.message}`);
  }
  return (count || 0) > 0;
};
var getRecordCount = async (supabase, table, filters = {}) => {
  let query = supabase.from(table).select("*", { count: "exact", head: true });
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      query = query.in(key, value);
    } else {
      query = query.eq(key, value);
    }
  });
  const { count, error } = await query;
  if (error) {
    throw new Error(`Failed to get record count: ${error.message}`);
  }
  return count || 0;
};
var batchInsert = async (supabase, table, records, batchSize = 100) => {
  const results = [];
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    const { data, error } = await supabase.from(table).insert(batch).select();
    if (error) {
      throw new Error(`Batch insert failed: ${error.message}`);
    }
    if (data) {
      results.push(...data);
    }
  }
  return results;
};
var batchUpdate = async (supabase, table, updates) => {
  const updatePromises = updates.map(
    ({ id, data }) => supabase.from(table).update(data).eq("id", id).select().single()
  );
  const results = await Promise.all(updatePromises);
  results.forEach((result, index) => {
    if (result.error) {
      throw new Error(`Update failed for record ${updates[index].id}: ${result.error.message}`);
    }
  });
  return results.map((result) => result.data).filter(Boolean);
};
var softDelete = async (supabase, table, id) => {
  const { data, error } = await supabase.from(table).update({ deleted_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id).select().single();
  if (error) {
    throw new Error(`Soft delete failed: ${error.message}`);
  }
  return data;
};
var restoreRecord = async (supabase, table, id) => {
  const { data, error } = await supabase.from(table).update({ deleted_at: null }).eq("id", id).select().single();
  if (error) {
    throw new Error(`Restore failed: ${error.message}`);
  }
  return data;
};

// src/services/supabase-data-provider.ts
var processFileUploads = async (data, fileFields, supabase, options = {}) => {
  const processedData = { ...data };
  for (const fieldName of fileFields) {
    const fileData = data[fieldName];
    if (!fileData) continue;
    if (fileData.rawFile instanceof File) {
      const uploadedFile = await uploadFileToStorage(fileData, supabase, options);
      processedData[fieldName] = uploadedFile;
    } else if (Array.isArray(fileData)) {
      const uploadedFiles = await Promise.all(
        fileData.map(
          (file) => file.rawFile instanceof File ? uploadFileToStorage(file, supabase, options) : file
        )
      );
      processedData[fieldName] = uploadedFiles;
    }
  }
  return processedData;
};
var uploadFileToStorage = async (fileData, supabase, options) => {
  const { bucket = "attachments", folder = "", generateFileName = true } = options;
  if (!fileData.src.startsWith("blob:") && !fileData.src.startsWith("data:")) {
    if (fileData.path) {
      const { error } = await supabase.storage.from(bucket).createSignedUrl(fileData.path, 60);
      if (!error) {
        return fileData;
      }
    }
  }
  const dataContent = fileData.src ? await fetch(fileData.src).then((res) => res.blob()) : fileData.rawFile;
  const file = fileData.rawFile;
  const fileExt = file.name.split(".").pop();
  const fileName = generateFileName ? `${Math.random()}.${fileExt}` : file.name;
  const filePath = folder ? `${folder}/${fileName}` : fileName;
  const { error: uploadError } = await supabase.storage.from(bucket).upload(filePath, dataContent);
  if (uploadError) {
    console.error("Upload error:", uploadError);
    throw new Error("Failed to upload attachment");
  }
  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return {
    ...fileData,
    path: filePath,
    src: data.publicUrl,
    type: file.type
  };
};
var createAvatarProcessor = (getAvatarFn) => {
  return async (params, supabase, options = {}) => {
    let avatar = params.data.avatar;
    if (typeof avatar !== "object" || avatar === null || !avatar.src) {
      avatar = await getAvatarFn(params.data);
    } else if (avatar.rawFile instanceof File) {
      avatar = await uploadFileToStorage(avatar, supabase, options);
    }
    return {
      ...params,
      data: {
        ...params.data,
        avatar
      }
    };
  };
};
var createFullTextSearchProcessor = (columns) => {
  return (params) => {
    const { filter } = params;
    if (!filter || !filter.q) {
      return params;
    }
    const searchQuery = filter.q;
    delete filter.q;
    const searchConditions = columns.reduce((acc, column) => {
      acc[`${column}@ilike`] = `%${searchQuery}%`;
      return acc;
    }, {});
    return {
      ...params,
      filter: {
        ...filter,
        $or: searchConditions
      }
    };
  };
};
var validateSupabaseEnv = (envVars) => {
  const missing = Object.entries(envVars).filter(([, value]) => !value).map(([key]) => key);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
};
var createDataOperationErrorHandler = (operation) => {
  return (error, context) => {
    const contextStr = context ? ` (${context})` : "";
    console.error(`${operation} error${contextStr}:`, error);
    if (error.code === "23505") {
      throw new Error("This record already exists");
    } else if (error.code === "23503") {
      throw new Error("Cannot perform this operation due to related records");
    } else if (error.code === "PGRST116") {
      throw new Error("Record not found");
    } else if (error.message?.includes("JWT")) {
      throw new Error("Authentication error. Please refresh the page");
    }
    throw new Error(error.message || `${operation} failed`);
  };
};

// src/stores/storeFactory.ts
var import_zustand2 = require("zustand");
var import_middleware = require("zustand/middleware");
var createSelectors = (entityKey) => (get) => ({
  getEntities: () => get().entities,
  getEntityById: (id) => get().entities.find((entity) => entity.id === id),
  getEntitiesByField: (field, value) => get().entities.filter((entity) => entity[field] === value),
  getEntitiesCount: () => get().entities.length,
  getLoadingState: () => get().loading,
  getErrorState: () => get().error,
  isInitialized: () => get().initialized
});
var createActions = (entityKey) => (set, get) => ({
  setEntities: (entities) => set({ entities }),
  addEntity: (entity) => {
    const state = get();
    set({ entities: [entity, ...state.entities] });
  },
  updateEntity: (id, updates) => {
    const state = get();
    const updatedEntities = state.entities.map(
      (entity) => entity.id === id ? { ...entity, ...updates } : entity
    );
    set({ entities: updatedEntities });
  },
  removeEntity: (id) => {
    const state = get();
    const filteredEntities = state.entities.filter((entity) => entity.id !== id);
    set({ entities: filteredEntities });
  },
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setInitialized: (initialized) => set({ initialized }),
  reset: () => set({
    entities: [],
    loading: false,
    error: null,
    initialized: false
  }),
  cleanupDuplicates: () => {
    const state = get();
    const uniqueEntities = [];
    const seenIds = /* @__PURE__ */ new Set();
    state.entities.forEach((entity) => {
      if (!seenIds.has(entity.id)) {
        seenIds.add(entity.id);
        uniqueEntities.push(entity);
      }
    });
    set({ entities: uniqueEntities });
  },
  sortEntitiesByDate: (ascending = false) => {
    const state = get();
    const sortedEntities = [...state.entities].sort((a, b) => {
      const dateA = new Date(a.created_at || 0);
      const dateB = new Date(b.created_at || 0);
      return ascending ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
    set({ entities: sortedEntities });
  },
  sortEntitiesByField: (field, ascending = true) => {
    const state = get();
    const sortedEntities = [...state.entities].sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];
      if (valueA < valueB) return ascending ? -1 : 1;
      if (valueA > valueB) return ascending ? 1 : -1;
      return 0;
    });
    set({ entities: sortedEntities });
  },
  filterEntitiesByDateRange: (startDate, endDate, dateField = "created_at") => {
    const state = get();
    const start = new Date(startDate);
    const end = new Date(endDate);
    return state.entities.filter((entity) => {
      const entityDate = new Date(entity[dateField]);
      return entityDate >= start && entityDate <= end;
    });
  }
});
function createEntityStore(entityName, customActions, customSelectors, persistOptions) {
  const initialState = {
    entities: [],
    loading: false,
    error: null,
    initialized: false
  };
  const storeCreator = (set, get) => ({
    ...initialState,
    ...createSelectors("entities")(get),
    ...createActions("entities")(set, get),
    ...customActions ? customActions(set, get) : {},
    ...customSelectors ? customSelectors(get) : {}
  });
  if (persistOptions) {
    return (0, import_zustand2.create)()(
      (0, import_middleware.persist)(storeCreator, {
        name: `${entityName}-store`,
        ...persistOptions
      })
    );
  }
  return (0, import_zustand2.create)()(storeCreator);
}
function createUIStore(customActions, persistOptions) {
  const initialState = {
    loading: false,
    loadingStates: {},
    error: null,
    errors: {},
    modals: {},
    forms: {},
    filters: {},
    notifications: [],
    sidebarOpen: false,
    theme: "system",
    initialized: false
  };
  const storeCreator = (set, get) => ({
    ...initialState,
    // Loading actions
    setLoading: (loading) => set({ loading }),
    setLoadingState: (key, loading) => {
      const state = get();
      set({ loadingStates: { ...state.loadingStates, [key]: loading } });
    },
    getLoadingState: (key) => {
      const state = get();
      return key ? state.loadingStates[key] || false : state.loading;
    },
    // Error actions
    setError: (error) => set({ error }),
    setErrorState: (key, error) => {
      const state = get();
      set({ errors: { ...state.errors, [key]: error } });
    },
    getErrorState: (key) => {
      const state = get();
      return key ? state.errors[key] || null : state.error;
    },
    clearErrors: () => set({ error: null, errors: {} }),
    // Modal actions
    openModal: (modalName) => {
      const state = get();
      set({ modals: { ...state.modals, [modalName]: true } });
    },
    closeModal: (modalName) => {
      const state = get();
      set({ modals: { ...state.modals, [modalName]: false } });
    },
    toggleModal: (modalName) => {
      const state = get();
      const isOpen = state.modals[modalName] || false;
      set({ modals: { ...state.modals, [modalName]: !isOpen } });
    },
    isModalOpen: (modalName) => {
      const state = get();
      return state.modals[modalName] || false;
    },
    closeAllModals: () => set({ modals: {} }),
    // Form actions
    setFormData: (formName, data) => {
      const state = get();
      set({ forms: { ...state.forms, [formName]: data } });
    },
    getFormData: (formName) => {
      const state = get();
      return state.forms[formName];
    },
    clearFormData: (formName) => {
      const state = get();
      const { [formName]: _, ...rest } = state.forms;
      set({ forms: rest });
    },
    clearAllForms: () => set({ forms: {} }),
    // Filter actions
    setFilter: (filterName, value) => {
      const state = get();
      set({ filters: { ...state.filters, [filterName]: value } });
    },
    getFilter: (filterName) => {
      const state = get();
      return state.filters[filterName];
    },
    clearFilter: (filterName) => {
      const state = get();
      const { [filterName]: _, ...rest } = state.filters;
      set({ filters: rest });
    },
    clearAllFilters: () => set({ filters: {} }),
    // Notification actions
    addNotification: (notification) => {
      const state = get();
      const newNotification = {
        ...notification,
        id: `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: Date.now()
      };
      set({ notifications: [...state.notifications, newNotification] });
    },
    removeNotification: (id) => {
      const state = get();
      set({ notifications: state.notifications.filter((n) => n.id !== id) });
    },
    clearNotifications: () => set({ notifications: [] }),
    // General UI actions
    setSidebarOpen: (open) => set({ sidebarOpen: open }),
    toggleSidebar: () => {
      const state = get();
      set({ sidebarOpen: !state.sidebarOpen });
    },
    setTheme: (theme) => set({ theme }),
    setInitialized: (initialized) => set({ initialized }),
    // Reset
    reset: () => set(initialState),
    // Custom actions
    ...customActions ? customActions(set, get) : {}
  });
  if (persistOptions) {
    return (0, import_zustand2.create)()(
      (0, import_middleware.persist)(storeCreator, {
        name: "ui-store",
        ...persistOptions
      })
    );
  }
  return (0, import_zustand2.create)()(storeCreator);
}
function createCRUDStore(entityName, persistOptions) {
  return createEntityStore(
    entityName,
    (set, get) => ({
      // Add CRUD-specific actions here if needed
      bulkUpdate: (updates) => {
        const state = get();
        const updatedEntities = state.entities.map((entity) => {
          const update = updates.find((u) => u.id === entity.id);
          return update ? { ...entity, ...update.data } : entity;
        });
        set({ entities: updatedEntities });
      },
      bulkDelete: (ids) => {
        const state = get();
        const filteredEntities = state.entities.filter((entity) => !ids.includes(entity.id));
        set({ entities: filteredEntities });
      }
    }),
    void 0,
    persistOptions
  );
}
function createPaginatedStore(entityName, defaultPerPage = 10, persistOptions) {
  const initialState = {
    entities: [],
    loading: false,
    error: null,
    initialized: false,
    currentPage: 1,
    perPage: defaultPerPage,
    totalPages: 0,
    totalCount: 0
  };
  const storeCreator = (set, get) => ({
    ...initialState,
    ...createActions("entities")(set, get),
    setPage: (page) => set({ currentPage: page }),
    setPerPage: (perPage) => set({ perPage, currentPage: 1 }),
    setPaginationData: (data) => set(data),
    getPaginatedEntities: () => {
      const state = get();
      const startIndex = (state.currentPage - 1) * state.perPage;
      const endIndex = startIndex + state.perPage;
      return state.entities.slice(startIndex, endIndex);
    },
    hasNextPage: () => {
      const state = get();
      return state.currentPage < state.totalPages;
    },
    hasPreviousPage: () => {
      const state = get();
      return state.currentPage > 1;
    }
  });
  if (persistOptions) {
    return (0, import_zustand2.create)()(
      (0, import_middleware.persist)(storeCreator, {
        name: `${entityName}-paginated-store`,
        ...persistOptions
      })
    );
  }
  return (0, import_zustand2.create)()(storeCreator);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ALERT_TYPES,
  AppHeader,
  AuthLayout,
  AuthProvider,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  BaseService,
  Button,
  COMMON_STATUSES,
  CONFIRMATION_TYPES,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DATA_TABLE_DEFAULTS,
  DATE_FORMATS,
  DEPARTMENT_TYPES,
  DataTable,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  ERROR_TYPES,
  ErrorBoundary,
  ExactHeader,
  FIELD_CONFIGS,
  FilterDropdown,
  GenericForm,
  Header,
  Input,
  Label,
  LoginPage,
  MACHINE_STATUSES,
  NUMBER_CONSTANTS,
  PRODUCT_TYPES,
  ProtectedRoute,
  RelativeDate,
  SCHEMAS,
  SEAL_SIDES,
  SERVICES_ERROR_TYPES,
  SHIFT_TYPES,
  STRING_CONSTANTS,
  ServiceError,
  SimpleHeader,
  Skeleton,
  SupabaseService,
  TASK_STATUSES,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  ThemeProvider,
  ThemeSwitch,
  VALIDATION_MESSAGES,
  WORK_CENTERS,
  addDaysToDate,
  applyFullTextSearch,
  applyPagination,
  arrayComparison,
  average,
  averageBy,
  averageNumbers,
  badgeVariants,
  batchInsert,
  batchUpdate,
  buttonVariants,
  calculatePercentage,
  calculatePercentageChange,
  capitalize,
  capitalizeWords,
  checkFileExists,
  checkSupabaseConnection,
  chunk,
  clampNumber,
  cleanWhitespace,
  cn,
  compact,
  compareStringsIgnoreCase,
  confirmAction,
  containsBy,
  countBy,
  countCharacters,
  countOccurrences,
  countWords,
  createArray,
  createAvatarProcessor,
  createCRUDStore,
  createDataOperationErrorHandler,
  createDateRange,
  createEntityStore,
  createFullTextSearchProcessor,
  createPaginatedStore,
  createQueryKeys,
  createServiceHooks,
  createSupabaseClient,
  createSupabaseFromEnv,
  createSupabaseHooks,
  createUIStore,
  debounce,
  defaultQueryConfig,
  defaultQueryErrorHandler,
  deleteFromSupabaseStorage,
  difference,
  dismiss,
  dismissAll,
  extractEmailDomain,
  extractEmailUsername,
  fetchWithTimeout,
  filterBy,
  findBy,
  findIndexBy,
  first,
  flatten,
  formatBytes,
  formatCurrency,
  formatDate,
  formatDateTime,
  formatDisplayDate,
  formatDisplayDateTime,
  formatDistance,
  formatDuration,
  formatFileSize,
  formatISODate,
  formatISODateTime,
  formatNumber,
  formatNumberWithUnit,
  formatPercentage,
  formatPhoneNumber,
  formatTime,
  formatUtcDate,
  formatUtcDateTime,
  formatVolume,
  formatWeight,
  generateId,
  generateRandomString,
  generateSlug,
  generateUUID,
  getCurrentISODate,
  getCurrentISODateTime,
  getDateRangePresets,
  getDaysDifference,
  getEndOfDay,
  getHoursDifference,
  getInitials,
  getMinutesDifference,
  getNested,
  getRandomItem,
  getRandomItems,
  getRecordCount,
  getRelativeTime,
  getRelativeTimeString,
  getSignedUrl,
  getStandardSupabaseClient,
  getStartOfDay,
  getSupabaseClient,
  getUniqueValues,
  groupBy,
  handleApiError,
  handleSupabaseError,
  handleSupabaseServiceError,
  highlightSearchTerms,
  hoursToMinutes,
  insertAt,
  intersection,
  isLinkedinUrl,
  isPalindrome,
  isUrl,
  isValidDate,
  isValidEmail,
  isValidNumber,
  isValidPhoneNumber,
  last,
  maskString,
  max,
  maxBy,
  maxNumber,
  min,
  minBy,
  minNumber,
  minutesToHours,
  moveItem,
  normalizeSpaces,
  numberValidation,
  paginate,
  parseDate,
  parseInteger,
  parseNumber,
  processFileUploads,
  randomInteger,
  randomNumber,
  range,
  recordExists,
  removeAt,
  removeDuplicates,
  removeDuplicatesByKey,
  removeWhitespace,
  restoreRecord,
  reverse,
  roundNumber,
  safeAsync,
  safeMath,
  sanitizeHtml,
  searchIgnoreCase,
  servicesSafeAsync,
  showError,
  showInfo,
  showSuccess,
  showToast,
  showValidationError,
  showWarning,
  shuffle,
  skip,
  skipLast,
  softDelete,
  sortBy,
  sortByMultiple,
  stringTemplates,
  subtractDaysFromDate,
  sum,
  sumBy,
  sumNumbers,
  take,
  takeLast,
  throttle,
  throwBusinessError,
  throwNotFoundError,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  truncate,
  truncateWords,
  ucFirst,
  union,
  updateAt,
  uploadMultipleFiles,
  uploadToSupabaseStorage,
  useAdvancedInfiniteQuery,
  useAdvancedMutation,
  useAdvancedQuery,
  useAuth,
  useAuthGuard,
  useBulkOperations,
  useColumnManager,
  useDataService,
  useDataTable,
  useDependentQueries,
  useErrorBoundary,
  useErrorHandler,
  useIsMobile,
  useOfflineSync,
  useQuerySync,
  useSavedQueries,
  useSidebar,
  useTheme,
  useValidationErrorHandler,
  validateData,
  validateDateRange,
  validateMaxLength,
  validateMinLength,
  validateNumber,
  validateNumericRanges,
  validatePositiveNumber,
  validateRequiredFields,
  validateSupabaseEnv,
  withErrorBoundary
});
//# sourceMappingURL=index.cjs.map