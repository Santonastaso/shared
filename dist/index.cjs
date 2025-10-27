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
  MACHINE_STATUSES: () => MACHINE_STATUSES,
  PRODUCT_TYPES: () => PRODUCT_TYPES,
  SCHEMAS: () => SCHEMAS,
  SEAL_SIDES: () => SEAL_SIDES,
  SHIFT_TYPES: () => SHIFT_TYPES,
  TASK_STATUSES: () => TASK_STATUSES,
  TIME_CONSTANTS: () => TIME_CONSTANTS,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  ThemeProvider: () => ThemeProvider,
  ThemeSwitch: () => ThemeSwitch,
  VALIDATION_MESSAGES: () => VALIDATION_MESSAGES,
  WORK_CENTERS: () => WORK_CENTERS,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  checkSupabaseConnection: () => checkSupabaseConnection,
  cn: () => cn,
  confirmAction: () => confirmAction,
  createSupabaseClient: () => createSupabaseClient,
  createSupabaseFromEnv: () => createSupabaseFromEnv,
  debounce: () => debounce,
  dismiss: () => dismiss,
  dismissAll: () => dismissAll,
  formatDate: () => formatDate,
  formatDateTime: () => formatDateTime,
  generateId: () => generateId,
  getNested: () => getNested,
  getStandardSupabaseClient: () => getStandardSupabaseClient,
  getSupabaseClient: () => getSupabaseClient,
  handleApiError: () => handleApiError,
  handleSupabaseError: () => handleSupabaseError,
  safeAsync: () => safeAsync,
  showError: () => showError,
  showInfo: () => showInfo,
  showSuccess: () => showSuccess,
  showToast: () => showToast,
  showValidationError: () => showValidationError,
  showWarning: () => showWarning,
  throttle: () => throttle,
  useAuth: () => useAuth,
  useDataService: () => useDataService,
  useErrorBoundary: () => useErrorBoundary,
  useErrorHandler: () => useErrorHandler,
  useSidebar: () => useSidebar,
  useTheme: () => useTheme,
  useValidationErrorHandler: () => useValidationErrorHandler,
  validateData: () => validateData,
  validateEmail: () => validateEmail,
  validateRequired: () => validateRequired,
  withErrorBoundary: () => withErrorBoundary
});
module.exports = __toCommonJS(src_exports);

// src/components/button.tsx
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
var validateRequired = (data, requiredFields) => {
  const errors = {};
  requiredFields.forEach((field) => {
    if (!data[field] || typeof data[field] === "string" && data[field].trim() === "") {
      errors[field] = "This field is required";
    }
  });
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
var validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

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
var formatDate = (date, format = "yyyy-MM-dd") => {
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
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/input.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = React.forwardRef(
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
var React2 = __toESM(require("react"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var Label = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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

// src/components/theme/ThemeProvider.tsx
var import_react = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ThemeCtx.Provider, { value, children });
};
var useTheme = () => {
  const ctx = (0, import_react.useContext)(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

// src/components/theme/ThemeSwitch.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var ThemeSwitch = ({ className }) => {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "inline-flex gap-2 items-center", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "light", children: "Light" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "dark", children: "Dark" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "system", children: "System" })
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
var TIME_CONSTANTS = {
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
var import_jsx_runtime9 = require("react/jsx-runtime");
var Table2 = ({ children, className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("table", { className: `w-full border-collapse border border-gray-200 table-auto ${className || ""}`, ...props, children });
var TableHeader2 = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("thead", { className: "bg-gray-50", children });
var TableBody2 = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tbody", { className: "divide-y divide-gray-200", children });
var TableRow2 = ({ children, onClick, className }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "tr",
  {
    onClick,
    className: `${onClick ? "cursor-pointer hover:bg-gray-50" : ""} ${className || ""}`,
    children
  }
);
var TableHead2 = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 min-w-0", children });
var TableCell2 = ({ children, colSpan, className }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "td",
  {
    colSpan,
    className: `px-4 py-3 text-sm text-gray-900 border-b border-gray-200 min-w-0 max-w-xs ${className || ""}`,
    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "truncate", title: typeof children === "string" ? children : "", children })
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
  enableRowSelection = false
}) {
  const [filters, setFilters] = (0, import_react2.useState)({});
  const [page, setPage] = (0, import_react2.useState)(0);
  const [pageSize, setPageSize] = (0, import_react2.useState)(initialPageSize);
  const [selectedIds, setSelectedIds] = (0, import_react2.useState)(/* @__PURE__ */ new Set());
  const [globalQuery, setGlobalQuery] = (0, import_react2.useState)("");
  const [sorting, setSorting] = (0, import_react2.useState)([]);
  const columns = (0, import_react2.useMemo)(() => {
    const selectionColumn = enableRowSelection ? {
      id: "select",
      header: ({ table: table2 }) => {
        const currentPageRows = table2.getRowModel().rows.map((row) => row.original);
        const allSelected = currentPageRows.length > 0 && currentPageRows.every((r) => selectedIds.has(r.id));
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "w-8", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex w-8", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-2", children: [
        onEditRow && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => onEditRow(row.original),
            children: "Edit"
          }
        ),
        onDeleteRow && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: (0, import_react_table.getCoreRowModel)(),
    getSortedRowModel: (0, import_react_table.getSortedRowModel)()
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-full space-y-4", children: [
    enableGlobalSearch && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
      globalQuery && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button2, { variant: "outline", onClick: clearFilters, children: "Clear Search" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "rounded-md border border-gray-200 overflow-hidden shadow-sm", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Table2, { className: "min-w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TableHeader2, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TableRow2, { children: headerGroup.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TableHead2, { children: header.isPlaceholder ? null : /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        "div",
        {
          className: header.column.getCanSort() ? "cursor-pointer select-none flex items-center gap-2" : "",
          onClick: header.column.getToggleSortingHandler(),
          children: [
            (0, import_react_table.flexRender)(header.column.columnDef.header, header.getContext()),
            {
              asc: " \u{1F53C}",
              desc: " \u{1F53D}"
            }[header.column.getIsSorted()] ?? null
          ]
        }
      ) }, header.id)) }, headerGroup.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TableBody2, { children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        TableRow2,
        {
          onClick: () => onRowClick && onRowClick(row.original),
          className: onRowClick ? "cursor-pointer hover:bg-muted/50" : "",
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TableCell2, { children: (0, import_react_table.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TableRow2, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TableCell2, { colSpan: columns.length, className: "h-24 text-center", children: "No results found." }) }) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "text-sm text-muted-foreground", children: [
        "Showing ",
        page * pageSize + 1,
        " to ",
        Math.min((page + 1) * pageSize, filteredData.length),
        " of ",
        filteredData.length,
        " results"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setPage(Math.max(0, page - 1)),
            disabled: page === 0,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-sm", children: [
          "Page ",
          page + 1,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
    selectedIds.size > 0 && (onBulkDelete || onBulkExport) && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center justify-between p-4 bg-muted rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-sm text-muted-foreground", children: [
        selectedIds.size,
        " items selected"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setSelectedIds(/* @__PURE__ */ new Set()),
            children: "Clear Selection"
          }
        ),
        onBulkExport && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => onBulkExport(Array.from(selectedIds)),
            children: "Export Selected"
          }
        ),
        onBulkDelete && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Button2,
          {
            variant: "destructive",
            size: "sm",
            onClick: () => {
              if (confirmAction(`Delete ${selectedIds.size} selected items?`)) {
                onBulkDelete(Array.from(selectedIds));
                setSelectedIds(/* @__PURE__ */ new Set());
              }
            },
            children: "Delete Selected"
          }
        )
      ] })
    ] })
  ] });
}

// src/components/ErrorBoundary.tsx
var import_react3 = __toESM(require("react"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");
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
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "max-w-md w-full bg-card shadow-lg rounded-lg p-6 border", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "h-8 w-8 text-destructive text-2xl", children: "\u{1F6A8}" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "text-lg font-medium text-foreground", children: "Something went wrong" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm text-muted-foreground", children: "We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue." }),
          this.state.errorId && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-xs text-muted-foreground mt-2", children: [
            "Error ID: ",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("code", { className: "bg-muted px-1 rounded", children: this.state.errorId })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex space-x-3 mb-4", children: [
          this.state.retryCount < (this.props.maxRetries || 3) && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "button",
            {
              onClick: this.handleReset,
              className: "flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500",
              children: "Reset"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            onClick: this.handleReportIssue,
            className: "w-full bg-gray-100 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 border border-gray-300",
            children: "\u{1F4E7} Report Issue"
          }
        ),
        process.env.NODE_ENV === "development" && this.state.error && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("details", { className: "mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("summary", { className: "text-sm text-muted-foreground cursor-pointer hover:text-foreground", children: "Technical Details (Development)" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "mt-2 p-3 bg-muted rounded text-xs font-mono text-foreground overflow-auto max-h-40", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { children: "Error:" }),
              " ",
              this.state.error.message
            ] }),
            this.state.errorInfo?.componentStack && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { children: "Component Stack:" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("pre", { className: "whitespace-pre-wrap text-xs", children: this.state.errorInfo.componentStack })
            ] }),
            this.state.error.stack && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { children: "Stack Trace:" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("pre", { className: "whitespace-pre-wrap text-xs", children: this.state.error.stack })
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
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ErrorBoundary, { ...options, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(WrappedComponent, { ...props }) });
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
var import_jsx_runtime11 = require("react/jsx-runtime");
function Header({ user, onSignOut, onToggleSidebar, ThemeSwitch: ThemeSwitch2, Button: Button3, MenuIcon, LogOutIcon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("header", { className: "bg-secondary shadow-sm border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between px-4 py-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "button",
      {
        onClick: onToggleSidebar,
        className: "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring",
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MenuIcon, { className: "h-6 w-6" })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ThemeSwitch2, {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-sm text-muted-foreground", children: user?.email?.split("@")[0] || "User" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        Button3,
        {
          variant: "outline",
          size: "sm",
          onClick: onSignOut,
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LogOutIcon, { className: "h-4 w-4" }),
            "Logout"
          ]
        }
      )
    ] })
  ] }) });
}

// src/components/FilterDropdown.tsx
var import_react4 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var FilterDropdown = ({ column, options, onFilterChange, isOpen, onToggle, activeFilter }) => {
  const [searchTerm, setSearchTerm] = (0, import_react4.useState)("");
  const [position, setPosition] = (0, import_react4.useState)({ top: 0, left: 0 });
  const [selectedValues, setSelectedValues] = (0, import_react4.useState)(/* @__PURE__ */ new Set());
  const [isSelectAll, setIsSelectAll] = (0, import_react4.useState)(true);
  const dropdownRef = (0, import_react4.useRef)(null);
  const filteredOptions = (0, import_react4.useMemo)(() => {
    if (!searchTerm) return options;
    const filtered = options.filter(
      (option) => option && option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
  }, [options, searchTerm, column]);
  (0, import_react4.useEffect)(() => {
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
  (0, import_react4.useEffect)(() => {
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
  (0, import_react4.useEffect)(() => {
    if (!isOpen) {
      setSearchTerm("");
      setSelectedValues(/* @__PURE__ */ new Set());
      setIsSelectAll(true);
    }
  }, [isOpen]);
  (0, import_react4.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative", ref: dropdownRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        onClick: onToggle,
        className: `inline-flex items-center justify-center w-4 h-4 transition-colors ${activeFilter ? "text-blue-600 hover:text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
        title: activeFilter ? `Filtro attivo: ${activeFilter}` : "Filtra",
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) })
      }
    ),
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "div",
      {
        className: "absolute bg-white border border-gray-300 rounded-md shadow-lg z-[99999] w-48",
        style: {
          top: position.top,
          left: position.left
        },
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "p-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  onClick: handleSelectAll,
                  className: "text-blue-600 text-xs font-medium hover:underline",
                  children: isSelectAll ? "Select all" : `Select all ${filteredOptions.length}`
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  onClick: handleClearFilter,
                  className: "text-blue-600 text-xs font-medium hover:underline",
                  children: "Clear"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "text-xs text-gray-600 mb-1", children: [
              "Displaying ",
              filteredOptions.length
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "input",
                {
                  type: "text",
                  placeholder: "Search values...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "currentColor", className: "text-gray-400", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "h-16 overflow-y-auto border border-gray-200 rounded", children: [
              filteredOptions.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                "label",
                {
                  className: "flex items-center px-2 py-1 hover:bg-gray-50 cursor-pointer",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                      "input",
                      {
                        type: "checkbox",
                        checked: selectedValues.has(option),
                        onChange: () => handleOptionToggle(option),
                        className: "mr-2 h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-xs truncate flex-1", children: option || "(Blanks)" })
                  ]
                },
                `${option}-${index}`
              )),
              filteredOptions.length === 0 && searchTerm && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "px-2 py-2 text-xs text-gray-500 text-center", children: "No results found" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "border-t border-gray-200 p-2 flex justify-end space-x-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "button",
              {
                onClick: handleCancel,
                className: "px-2 py-1 text-xs text-gray-700 hover:bg-gray-100 rounded",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
var import_react6 = require("react");
var import_react_hook_form = require("react-hook-form");

// src/hooks/useErrorHandler.ts
var import_react5 = require("react");
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
  const [errors, setErrors] = (0, import_react5.useState)([]);
  const [isRetrying, setIsRetrying] = (0, import_react5.useState)(false);
  const retryCountRef = (0, import_react5.useRef)(0);
  const handleError = (0, import_react5.useCallback)(async (error, context = "", customOptions = {}) => {
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
  const handleAsync = (0, import_react5.useCallback)(async (asyncOperation, options2 = {}) => {
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
  const retryOperation = (0, import_react5.useCallback)(async (operation, maxAttempts) => {
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
  const handleValidationError = (0, import_react5.useCallback)((message, details = {}) => {
    const error = {
      message,
      type: ERROR_TYPES.VALIDATION_ERROR,
      severity: "medium",
      details,
      userMessage: message
    };
    return handleError(error, "validation");
  }, [handleError]);
  const handleNetworkError = (0, import_react5.useCallback)((message = "Network connection failed") => {
    const error = {
      message,
      type: ERROR_TYPES.NETWORK_ERROR,
      severity: "high",
      userMessage: message
    };
    return handleError(error, "network");
  }, [handleError]);
  const handleAuthError = (0, import_react5.useCallback)((message = "Authentication failed") => {
    const error = {
      message,
      type: ERROR_TYPES.AUTHENTICATION_ERROR,
      severity: "high",
      userMessage: message
    };
    return handleError(error, "authentication");
  }, [handleError]);
  const clearErrors = (0, import_react5.useCallback)(() => {
    setErrors([]);
  }, []);
  const clearError = (0, import_react5.useCallback)((errorId) => {
    setErrors((prev) => prev.filter((error) => error.id !== errorId));
  }, []);
  const getErrorsByType = (0, import_react5.useCallback)((type) => {
    return errors.filter((error) => error.type === type);
  }, [errors]);
  const hasCriticalErrors = (0, import_react5.useCallback)(() => {
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
  const handleFieldError = (0, import_react5.useCallback)((field, message) => {
    return handleValidationError(`Field '${field}': ${message}`, { field });
  }, [handleValidationError]);
  const handleRequiredFieldError = (0, import_react5.useCallback)((field) => {
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

// src/components/GenericForm.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
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
  const initialFormData = (0, import_react6.useMemo)(() => {
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
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
            "select",
            {
              ...register(field.name, field.validation),
              disabled: field.disabled || isSubmitting,
              className: `flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${errors[field.name] ? "border-red-500" : "border-input"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "", children: field.placeholder || `Seleziona ${field.label.toLowerCase()}` }),
                field.options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: option.value, children: option.label }, option.value))
              ]
            }
          ),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "textarea":
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "textarea",
            {
              ...baseInputProps,
              rows: field.rows || 3,
              className: `w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent ${field.className || ""} ${errors[field.name] ? "border-destructive" : ""}`
            }
          ),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "checkbox":
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex flex-wrap gap-2", children: field.options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: `${field.name}_${option.value}`, className: "text-[10px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: option.label })
        ] }, option.value)) });
      case "datetime-local":
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Input, { type: "datetime-local", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "date":
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Input, { type: "date", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "time":
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Input, { type: "time", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "number":
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Input, { type: "number", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "text":
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Input, { type: "text", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
    }
  };
  const renderSection = (section) => {
    const visibleFields = section.fields.filter(
      (field) => !field.conditional || field.conditional(watch(field.name), watch, getValues)
    );
    if (visibleFields.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "text-lg font-semibold text-foreground", children: section.title }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: visibleFields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Label, { htmlFor: field.name, className: "text-sm font-medium text-foreground", children: [
          field.label,
          " ",
          field.required && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-destructive", children: "*" })
        ] }),
        renderField(field),
        field.helpText && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-xs text-muted-foreground", children: field.helpText })
      ] }, field.name)) })
    ] }, section.title);
  };
  const renderCustomSection = (sectionKey) => {
    if (customFieldRenderers[sectionKey]) {
      return customFieldRenderers[sectionKey]();
    }
    return null;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "bg-card rounded-lg border border-border shadow-sm p-6", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("form", { onSubmit: handleSubmit(handleFormSubmit), noValidate: true, className: "space-y-6", children: [
    config.sections.map(renderSection),
    config.customFields && Object.keys(config.customFields).map(
      (sectionKey) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { children: renderCustomSection(sectionKey) }, sectionKey)
    ),
    customActions && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "space-y-4", children: customActions }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex justify-end pt-6 border-t border-border", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
var import_react7 = require("react");
var import_react_router_dom = require("react-router-dom");
var import_lucide_react2 = require("lucide-react");

// src/components/Avatar.tsx
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"), 1);
var import_jsx_runtime14 = require("react/jsx-runtime");
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_jsx_runtime15 = require("react/jsx-runtime");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react.CircleIcon, { className: "size-2 fill-current" }) }) }),
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_jsx_runtime16 = require("react/jsx-runtime");
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
  const [isUserMenuOpen, setIsUserMenuOpen] = (0, import_react7.useState)(false);
  const handleUserMenuToggle = (0, import_react7.useCallback)(() => {
    setIsUserMenuOpen((prev) => !prev);
  }, []);
  const handleUserMenuClose = (0, import_react7.useCallback)(() => {
    setIsUserMenuOpen(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("header", { className: "bg-secondary border-b", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "px-4", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex justify-between items-center h-16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-2", children: [
      onToggleSidebar && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "button",
        {
          onClick: onToggleSidebar,
          className: "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring",
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react2.Menu, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
        import_react_router_dom.Link,
        {
          to: "/",
          className: "flex items-center gap-2 text-secondary-foreground no-underline hover:opacity-80 transition-opacity",
          children: [
            logo && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "img",
                {
                  className: "[.light_&]:hidden h-6",
                  src: logo.dark,
                  alt: title
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "img",
                {
                  className: "[.dark_&]:hidden h-6",
                  src: logo.light,
                  alt: title
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h1", { className: "text-xl font-semibold", children: title })
          ]
        }
      )
    ] }),
    navigationItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("nav", { className: "hidden md:flex", children: navigationItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      import_react_router_dom.Link,
      {
        to: item.to,
        className: `px-6 py-3 text-sm font-medium transition-colors border-b-2 ${item.isActive ? "text-secondary-foreground border-secondary-foreground" : "text-secondary-foreground/70 border-transparent hover:text-secondary-foreground/80"}`,
        children: item.label
      },
      item.to
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ThemeSwitch, {}),
      onRefresh && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        Button,
        {
          onClick: onRefresh,
          variant: "ghost",
          size: "icon",
          className: "hidden sm:inline-flex",
          children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react2.LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react2.RotateCw, { className: "h-4 w-4" })
        }
      ),
      user && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(DropdownMenu, { open: isUserMenuOpen, onOpenChange: setIsUserMenuOpen, children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          Button,
          {
            variant: "ghost",
            className: "relative h-8 w-8 rounded-full",
            children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Avatar, { className: "h-8 w-8", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AvatarImage, { src: user.avatar, role: "presentation" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AvatarFallback, { children: user.name?.charAt(0)?.toUpperCase() || "U" })
            ] })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-sm font-medium leading-none", children: user.name }),
            user.email && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xs text-muted-foreground", children: user.email })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DropdownMenuSeparator, {}),
          onSettings && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(DropdownMenuItem, { onClick: onSettings, className: "cursor-pointer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react2.Settings, { className: "mr-2 h-4 w-4" }),
            "My info"
          ] }),
          onUsers && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(DropdownMenuItem, { onClick: onUsers, className: "cursor-pointer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react2.User, { className: "mr-2 h-4 w-4" }),
            "Users"
          ] }),
          customMenuItems,
          (onSettings || onUsers || customMenuItems) && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DropdownMenuSeparator, {}),
          onLogout && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(DropdownMenuItem, { onClick: onLogout, className: "cursor-pointer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react2.LogOut, { className: "mr-2 h-4 w-4" }),
            "Log out"
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
};

// src/components/ExactHeader.tsx
var import_react8 = __toESM(require("react"), 1);
var import_react_router_dom2 = require("react-router-dom");
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var UserMenuContext = import_react8.default.createContext(void 0);
var useUserMenu = () => import_react8.default.useContext(UserMenuContext);
var RefreshButton = ({ onRefresh, loading = false }) => {
  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    } else {
      window.location.reload();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Button,
    {
      onClick: handleRefresh,
      variant: "ghost",
      size: "icon",
      className: "hidden sm:inline-flex",
      children: loading ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react3.LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react3.RotateCw, {})
    }
  );
};
function UserMenu({ children, user, onLogout }) {
  const [open, setOpen] = (0, import_react8.useState)(false);
  const handleToggleOpen = (0, import_react8.useCallback)(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);
  const handleClose = (0, import_react8.useCallback)(() => {
    setOpen(false);
  }, []);
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(UserMenuContext.Provider, { value: { onClose: handleClose }, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(DropdownMenu, { open, onOpenChange: handleToggleOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      Button,
      {
        variant: "ghost",
        className: "relative h-8 w-8 ml-2 rounded-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Avatar, { className: "h-8 w-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(AvatarImage, { src: user?.avatar, role: "presentation" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(AvatarFallback, { children: user?.name?.charAt(0) || "U" })
        ] })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm font-medium leading-none", children: user?.name || "User" }),
        user?.email && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-xs text-muted-foreground", children: user.email })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownMenuSeparator, {}),
      children,
      import_react8.Children.count(children) > 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownMenuSeparator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(DropdownMenuItem, { onClick: handleLogout, className: "cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react3.LogOut, {}),
        "Log out"
      ] })
    ] })
  ] }) });
}
var NavigationTab = ({
  label,
  to,
  isActive
}) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  import_react_router_dom2.Link,
  {
    to,
    className: `px-6 py-3 text-sm font-medium transition-colors border-b-2 ${isActive ? "text-secondary-foreground border-secondary-foreground" : "text-secondary-foreground/70 border-transparent hover:text-secondary-foreground/80"}`,
    children: label
  }
);
var UsersMenu = () => {
  const { onClose } = useUserMenu() ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownMenuItem, { asChild: true, onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react_router_dom2.Link, { to: "/sales", className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react3.User, {}),
    " Users"
  ] }) });
};
var ConfigurationMenu = () => {
  const { onClose } = useUserMenu() ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownMenuItem, { asChild: true, onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react_router_dom2.Link, { to: "/settings", className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react3.Settings, {}),
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("nav", { className: "flex-grow", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("header", { className: "bg-secondary", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "px-4", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex justify-between items-center flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      import_react_router_dom2.Link,
      {
        to: "/",
        className: "flex items-center gap-2 text-secondary-foreground no-underline",
        children: [
          darkModeLogo && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "img",
            {
              className: "[.light_&]:hidden h-6",
              src: darkModeLogo,
              alt: title
            }
          ),
          lightModeLogo && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "img",
            {
              className: "[.dark_&]:hidden h-6",
              src: lightModeLogo,
              alt: title
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h1", { className: "text-xl font-semibold", children: title })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("nav", { className: "flex", children: navigationItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      NavigationTab,
      {
        label: item.label,
        to: item.to,
        isActive: item.isActive || false
      },
      item.to
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ThemeSwitch, {}),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(RefreshButton, { onRefresh, loading }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(UserMenu, { user, onLogout, children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ConfigurationMenu, {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(UsersMenu, {})
      ] })
    ] })
  ] }) }) }) });
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
var createSupabaseFromEnv = () => {
  const url = import_meta.env?.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const anonKey = import_meta.env?.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  if (!url) {
    throw new Error("Missing VITE_SUPABASE_URL environment variable");
  }
  if (!anonKey) {
    throw new Error("Missing VITE_SUPABASE_ANON_KEY environment variable");
  }
  return createSupabaseClient({ url, anonKey });
};
var handleSupabaseError = (error, context = "") => {
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

// src/services/AuthProvider.tsx
var import_react9 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var AuthContext = (0, import_react9.createContext)(null);
var AuthProvider = ({
  children,
  supabaseClient,
  onAuthStateChange
}) => {
  const [user, setUser] = (0, import_react9.useState)(null);
  const [session, setSession] = (0, import_react9.useState)(null);
  const [loading, setLoading] = (0, import_react9.useState)(true);
  const [error, setError] = (0, import_react9.useState)(null);
  (0, import_react9.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AuthContext.Provider, { value, children });
};
var useAuth = () => {
  const context = (0, import_react9.useContext)(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ALERT_TYPES,
  AppHeader,
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
  MACHINE_STATUSES,
  PRODUCT_TYPES,
  SCHEMAS,
  SEAL_SIDES,
  SHIFT_TYPES,
  TASK_STATUSES,
  TIME_CONSTANTS,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  ThemeProvider,
  ThemeSwitch,
  VALIDATION_MESSAGES,
  WORK_CENTERS,
  badgeVariants,
  buttonVariants,
  checkSupabaseConnection,
  cn,
  confirmAction,
  createSupabaseClient,
  createSupabaseFromEnv,
  debounce,
  dismiss,
  dismissAll,
  formatDate,
  formatDateTime,
  generateId,
  getNested,
  getStandardSupabaseClient,
  getSupabaseClient,
  handleApiError,
  handleSupabaseError,
  safeAsync,
  showError,
  showInfo,
  showSuccess,
  showToast,
  showValidationError,
  showWarning,
  throttle,
  useAuth,
  useDataService,
  useErrorBoundary,
  useErrorHandler,
  useSidebar,
  useTheme,
  useValidationErrorHandler,
  validateData,
  validateEmail,
  validateRequired,
  withErrorBoundary
});
//# sourceMappingURL=index.cjs.map