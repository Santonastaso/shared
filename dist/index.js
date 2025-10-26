// src/components/button.tsx
import { Slot } from "@radix-ui/react-slot";

// src/utils/index.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// src/utils/toast.ts
import { toast } from "sonner";
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
  toast.error(errorMessage, {
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
  toast.success(message);
};
var showError = (message) => {
  toast.error(message);
};
var showWarning = (message) => {
  toast.warning(message);
};
var showInfo = (message) => {
  toast.info(message);
};
var showToast = (message, options) => toast(message, options);
var dismissAll = () => toast.dismiss();
var dismiss = (id) => toast.dismiss(id);

// src/utils/index.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
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

// src/components/button-variants.ts
import { cva } from "class-variance-authority";
var buttonVariants = cva(
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
import { jsx } from "react/jsx-runtime";
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/input.tsx
import * as React from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
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
import * as React2 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Label = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx3(
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
import { Slot as Slot2 } from "@radix-ui/react-slot";

// src/components/badge-variants.ts
import { cva as cva2 } from "class-variance-authority";
var badgeVariants = cva2(
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
import { jsx as jsx4 } from "react/jsx-runtime";
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot2 : "span";
  return /* @__PURE__ */ jsx4(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/components/card.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
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
  return /* @__PURE__ */ jsx5(
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
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/components/table.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsx6(
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
  return /* @__PURE__ */ jsx6(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
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
  return /* @__PURE__ */ jsx6(
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
  return /* @__PURE__ */ jsx6(
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
  return /* @__PURE__ */ jsx6(
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
  return /* @__PURE__ */ jsx6(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/theme/ThemeProvider.tsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var ThemeCtx = createContext(null);
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
  const [theme, setThemeState] = useState(defaultTheme);
  useEffect(() => {
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
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return /* @__PURE__ */ jsx7(ThemeCtx.Provider, { value, children });
};
var useTheme = () => {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

// src/components/theme/ThemeSwitch.tsx
import { jsx as jsx8, jsxs } from "react/jsx-runtime";
var ThemeSwitch = ({ className }) => {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsx8("div", { className: "inline-flex gap-2 items-center", children: /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx8("option", { value: "light", children: "Light" }),
        /* @__PURE__ */ jsx8("option", { value: "dark", children: "Dark" }),
        /* @__PURE__ */ jsx8("option", { value: "system", children: "System" })
      ]
    }
  ) });
};

// src/components/DataTable.tsx
import { useState as useState2, useMemo as useMemo2 } from "react";
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel } from "@tanstack/react-table";

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
import { jsx as jsx9, jsxs as jsxs2 } from "react/jsx-runtime";
var Table2 = ({ children, className, ...props }) => /* @__PURE__ */ jsx9("table", { className: `w-full border-collapse border border-gray-200 table-auto ${className || ""}`, ...props, children });
var TableHeader2 = ({ children }) => /* @__PURE__ */ jsx9("thead", { className: "bg-gray-50", children });
var TableBody2 = ({ children }) => /* @__PURE__ */ jsx9("tbody", { className: "divide-y divide-gray-200", children });
var TableRow2 = ({ children, onClick, className }) => /* @__PURE__ */ jsx9(
  "tr",
  {
    onClick,
    className: `${onClick ? "cursor-pointer hover:bg-gray-50" : ""} ${className || ""}`,
    children
  }
);
var TableHead2 = ({ children }) => /* @__PURE__ */ jsx9("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 min-w-0", children });
var TableCell2 = ({ children, colSpan, className }) => /* @__PURE__ */ jsx9(
  "td",
  {
    colSpan,
    className: `px-4 py-3 text-sm text-gray-900 border-b border-gray-200 min-w-0 max-w-xs ${className || ""}`,
    children: /* @__PURE__ */ jsx9("div", { className: "truncate", title: typeof children === "string" ? children : "", children })
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
  return /* @__PURE__ */ jsx9(
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
  const [filters, setFilters] = useState2({});
  const [page, setPage] = useState2(0);
  const [pageSize, setPageSize] = useState2(initialPageSize);
  const [selectedIds, setSelectedIds] = useState2(/* @__PURE__ */ new Set());
  const [globalQuery, setGlobalQuery] = useState2("");
  const [sorting, setSorting] = useState2([]);
  const columns = useMemo2(() => {
    const selectionColumn = enableRowSelection ? {
      id: "select",
      header: ({ table: table2 }) => {
        const currentPageRows = table2.getRowModel().rows.map((row) => row.original);
        const allSelected = currentPageRows.length > 0 && currentPageRows.every((r) => selectedIds.has(r.id));
        return /* @__PURE__ */ jsx9("div", { className: "w-8", children: /* @__PURE__ */ jsx9(
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
      cell: ({ row }) => /* @__PURE__ */ jsx9("div", { className: "flex w-8", children: /* @__PURE__ */ jsx9(
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
      cell: ({ row }) => /* @__PURE__ */ jsxs2("div", { className: "flex gap-2", children: [
        onEditRow && /* @__PURE__ */ jsx9(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => onEditRow(row.original),
            children: "Edit"
          }
        ),
        onDeleteRow && /* @__PURE__ */ jsx9(
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
  const filteredData = useMemo2(() => {
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
  const paginatedData = useMemo2(() => {
    const start = page * pageSize;
    const end = start + pageSize;
    return filteredData.slice(start, end);
  }, [filteredData, page, pageSize]);
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const table = useReactTable({
    data: paginatedData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
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
  return /* @__PURE__ */ jsxs2("div", { className: "w-full space-y-4", children: [
    enableGlobalSearch && /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx9("div", { className: "flex-1", children: /* @__PURE__ */ jsx9(
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
      globalQuery && /* @__PURE__ */ jsx9(Button2, { variant: "outline", onClick: clearFilters, children: "Clear Search" })
    ] }),
    /* @__PURE__ */ jsx9("div", { className: "rounded-md border border-gray-200 overflow-hidden shadow-sm", children: /* @__PURE__ */ jsx9("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs2(Table2, { className: "min-w-full", children: [
      /* @__PURE__ */ jsx9(TableHeader2, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx9(TableRow2, { children: headerGroup.headers.map((header) => /* @__PURE__ */ jsx9(TableHead2, { children: header.isPlaceholder ? null : /* @__PURE__ */ jsxs2(
        "div",
        {
          className: header.column.getCanSort() ? "cursor-pointer select-none flex items-center gap-2" : "",
          onClick: header.column.getToggleSortingHandler(),
          children: [
            flexRender(header.column.columnDef.header, header.getContext()),
            {
              asc: " \u{1F53C}",
              desc: " \u{1F53D}"
            }[header.column.getIsSorted()] ?? null
          ]
        }
      ) }, header.id)) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx9(TableBody2, { children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx9(
        TableRow2,
        {
          onClick: () => onRowClick && onRowClick(row.original),
          className: onRowClick ? "cursor-pointer hover:bg-muted/50" : "",
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx9(TableCell2, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsx9(TableRow2, { children: /* @__PURE__ */ jsx9(TableCell2, { colSpan: columns.length, className: "h-24 text-center", children: "No results found." }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs2("div", { className: "text-sm text-muted-foreground", children: [
        "Showing ",
        page * pageSize + 1,
        " to ",
        Math.min((page + 1) * pageSize, filteredData.length),
        " of ",
        filteredData.length,
        " results"
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx9(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setPage(Math.max(0, page - 1)),
            disabled: page === 0,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsxs2("span", { className: "text-sm", children: [
          "Page ",
          page + 1,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsx9(
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
    selectedIds.size > 0 && (onBulkDelete || onBulkExport) && /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between p-4 bg-muted rounded-md", children: [
      /* @__PURE__ */ jsxs2("span", { className: "text-sm text-muted-foreground", children: [
        selectedIds.size,
        " items selected"
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx9(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setSelectedIds(/* @__PURE__ */ new Set()),
            children: "Clear Selection"
          }
        ),
        onBulkExport && /* @__PURE__ */ jsx9(
          Button2,
          {
            variant: "outline",
            size: "sm",
            onClick: () => onBulkExport(Array.from(selectedIds)),
            children: "Export Selected"
          }
        ),
        onBulkDelete && /* @__PURE__ */ jsx9(
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
import React5 from "react";
import { jsx as jsx10, jsxs as jsxs3 } from "react/jsx-runtime";
var ErrorBoundary = class extends React5.Component {
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
      return /* @__PURE__ */ jsx10("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxs3("div", { className: "max-w-md w-full bg-card shadow-lg rounded-lg p-6 border", children: [
        /* @__PURE__ */ jsxs3("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsx10("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx10("div", { className: "h-8 w-8 text-destructive text-2xl", children: "\u{1F6A8}" }) }),
          /* @__PURE__ */ jsx10("div", { className: "ml-3", children: /* @__PURE__ */ jsx10("h3", { className: "text-lg font-medium text-foreground", children: "Something went wrong" }) })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx10("p", { className: "text-sm text-muted-foreground", children: "We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue." }),
          this.state.errorId && /* @__PURE__ */ jsxs3("p", { className: "text-xs text-muted-foreground mt-2", children: [
            "Error ID: ",
            /* @__PURE__ */ jsx10("code", { className: "bg-muted px-1 rounded", children: this.state.errorId })
          ] })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "flex space-x-3 mb-4", children: [
          this.state.retryCount < (this.props.maxRetries || 3) && /* @__PURE__ */ jsxs3(
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
          /* @__PURE__ */ jsx10(
            "button",
            {
              onClick: this.handleReset,
              className: "flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500",
              children: "Reset"
            }
          )
        ] }),
        /* @__PURE__ */ jsx10(
          "button",
          {
            onClick: this.handleReportIssue,
            className: "w-full bg-gray-100 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 border border-gray-300",
            children: "\u{1F4E7} Report Issue"
          }
        ),
        process.env.NODE_ENV === "development" && this.state.error && /* @__PURE__ */ jsxs3("details", { className: "mt-4", children: [
          /* @__PURE__ */ jsx10("summary", { className: "text-sm text-muted-foreground cursor-pointer hover:text-foreground", children: "Technical Details (Development)" }),
          /* @__PURE__ */ jsxs3("div", { className: "mt-2 p-3 bg-muted rounded text-xs font-mono text-foreground overflow-auto max-h-40", children: [
            /* @__PURE__ */ jsxs3("div", { className: "mb-2", children: [
              /* @__PURE__ */ jsx10("strong", { children: "Error:" }),
              " ",
              this.state.error.message
            ] }),
            this.state.errorInfo?.componentStack && /* @__PURE__ */ jsxs3("div", { className: "mb-2", children: [
              /* @__PURE__ */ jsx10("strong", { children: "Component Stack:" }),
              /* @__PURE__ */ jsx10("pre", { className: "whitespace-pre-wrap text-xs", children: this.state.errorInfo.componentStack })
            ] }),
            this.state.error.stack && /* @__PURE__ */ jsxs3("div", { children: [
              /* @__PURE__ */ jsx10("strong", { children: "Stack Trace:" }),
              /* @__PURE__ */ jsx10("pre", { className: "whitespace-pre-wrap text-xs", children: this.state.error.stack })
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
    return /* @__PURE__ */ jsx10(ErrorBoundary, { ...options, children: /* @__PURE__ */ jsx10(WrappedComponent, { ...props }) });
  };
};
var useErrorBoundary = () => {
  const [error, setError] = React5.useState(null);
  const resetError = React5.useCallback(() => {
    setError(null);
  }, []);
  const captureError = React5.useCallback((error2) => {
    setError(error2);
  }, []);
  React5.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);
  return { captureError, resetError };
};

// src/components/Header.tsx
import { jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
function Header({ user, onSignOut, onToggleSidebar, ThemeSwitch: ThemeSwitch2, Button: Button3, MenuIcon, LogOutIcon }) {
  return /* @__PURE__ */ jsx11("header", { className: "bg-secondary shadow-sm border-b border-border", children: /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between px-4 py-2", children: [
    /* @__PURE__ */ jsx11("div", { className: "flex items-center", children: /* @__PURE__ */ jsx11(
      "button",
      {
        onClick: onToggleSidebar,
        className: "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring",
        children: /* @__PURE__ */ jsx11(MenuIcon, { className: "h-6 w-6" })
      }
    ) }),
    /* @__PURE__ */ jsxs4("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsx11(ThemeSwitch2, {}),
      /* @__PURE__ */ jsx11("span", { className: "text-sm text-muted-foreground", children: user?.email?.split("@")[0] || "User" }),
      /* @__PURE__ */ jsxs4(
        Button3,
        {
          variant: "outline",
          size: "sm",
          onClick: onSignOut,
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx11(LogOutIcon, { className: "h-4 w-4" }),
            "Logout"
          ]
        }
      )
    ] })
  ] }) });
}

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
import { createClient } from "@supabase/supabase-js";
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
  return createClient(config.url, config.anonKey, {
    ...defaultOptions,
    ...config.options
  });
};
var createSupabaseFromEnv = () => {
  const env = globalThis.importMeta?.env || (typeof window !== "undefined" ? window.env : {});
  const url = env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const anonKey = env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
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

// src/services/AuthProvider.tsx
import { createContext as createContext2, useContext as useContext2, useState as useState3, useEffect as useEffect2 } from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var AuthContext = createContext2(null);
var AuthProvider = ({
  children,
  supabaseClient,
  onAuthStateChange
}) => {
  const [user, setUser] = useState3(null);
  const [session, setSession] = useState3(null);
  const [loading, setLoading] = useState3(true);
  const [error, setError] = useState3(null);
  useEffect2(() => {
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
  return /* @__PURE__ */ jsx12(AuthContext.Provider, { value, children });
};

// src/hooks/useErrorHandler.ts
import { useState as useState4, useCallback, useRef } from "react";
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
  const [errors, setErrors] = useState4([]);
  const [isRetrying, setIsRetrying] = useState4(false);
  const retryCountRef = useRef(0);
  const handleError = useCallback(async (error, context = "", customOptions = {}) => {
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
  const handleAsync = useCallback(async (asyncOperation, options2 = {}) => {
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
  const retryOperation = useCallback(async (operation, maxAttempts) => {
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
  const handleValidationError = useCallback((message, details = {}) => {
    const error = {
      message,
      type: ERROR_TYPES.VALIDATION_ERROR,
      severity: "medium",
      details,
      userMessage: message
    };
    return handleError(error, "validation");
  }, [handleError]);
  const handleNetworkError = useCallback((message = "Network connection failed") => {
    const error = {
      message,
      type: ERROR_TYPES.NETWORK_ERROR,
      severity: "high",
      userMessage: message
    };
    return handleError(error, "network");
  }, [handleError]);
  const handleAuthError = useCallback((message = "Authentication failed") => {
    const error = {
      message,
      type: ERROR_TYPES.AUTHENTICATION_ERROR,
      severity: "high",
      userMessage: message
    };
    return handleError(error, "authentication");
  }, [handleError]);
  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);
  const clearError = useCallback((errorId) => {
    setErrors((prev) => prev.filter((error) => error.id !== errorId));
  }, []);
  const getErrorsByType = useCallback((type) => {
    return errors.filter((error) => error.type === type);
  }, [errors]);
  const hasCriticalErrors = useCallback(() => {
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
  const handleFieldError = useCallback((field, message) => {
    return handleValidationError(`Field '${field}': ${message}`, { field });
  }, [handleValidationError]);
  const handleRequiredFieldError = useCallback((field) => {
    return handleValidationError(`Field '${field}' is required`, { field, type: "required" });
  }, [handleValidationError]);
  return {
    handleFieldError,
    handleRequiredFieldError,
    clearErrors
  };
};

// src/hooks/useSidebar.ts
import { create } from "zustand";
var useSidebar = create((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}));

// src/hooks/useDataService.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
function useDataService(service, resourceName) {
  const queryClient = useQueryClient();
  const useGetAll = (options = {}, queryOptions) => {
    return useQuery({
      queryKey: [resourceName, "list", options],
      queryFn: () => service.getAll(options),
      ...queryOptions
    });
  };
  const useGetPaginated = (options = {}, queryOptions) => {
    return useQuery({
      queryKey: [resourceName, "paginated", options],
      queryFn: () => service.getPaginated(options),
      ...queryOptions
    });
  };
  const useGetById = (id, select = "*", queryOptions) => {
    return useQuery({
      queryKey: [resourceName, "detail", id, select],
      queryFn: () => service.getById(id, select),
      enabled: id !== null && id !== void 0,
      ...queryOptions
    });
  };
  const useSearch = (searchTerm, searchFields = ["name"], options = {}, queryOptions) => {
    return useQuery({
      queryKey: [resourceName, "search", searchTerm, searchFields, options],
      queryFn: () => service.search(searchTerm, searchFields, options),
      enabled: searchTerm.length > 0,
      ...queryOptions
    });
  };
  const useCount = (filters, queryOptions) => {
    return useQuery({
      queryKey: [resourceName, "count", filters],
      queryFn: () => service.count(filters),
      ...queryOptions
    });
  };
  const useCreate = () => {
    return useMutation({
      mutationFn: (data) => service.create(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [resourceName] });
      }
    });
  };
  const useUpdate = () => {
    return useMutation({
      mutationFn: ({ id, data }) => service.update(id, data),
      onSuccess: (data, variables) => {
        queryClient.setQueryData([resourceName, "detail", variables.id], data);
        queryClient.invalidateQueries({ queryKey: [resourceName, "list"] });
        queryClient.invalidateQueries({ queryKey: [resourceName, "paginated"] });
      }
    });
  };
  const useDelete = () => {
    return useMutation({
      mutationFn: (id) => service.delete(id),
      onSuccess: (_, variables) => {
        queryClient.removeQueries({ queryKey: [resourceName, "detail", variables] });
        queryClient.invalidateQueries({ queryKey: [resourceName, "list"] });
        queryClient.invalidateQueries({ queryKey: [resourceName, "paginated"] });
      }
    });
  };
  const useBulkDelete = () => {
    return useMutation({
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
export {
  ALERT_TYPES,
  AuthProvider,
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
  ERROR_TYPES,
  ErrorBoundary,
  FIELD_CONFIGS,
  Header,
  Input,
  Label,
  MACHINE_STATUSES,
  PRODUCT_TYPES,
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
  handleSupabaseError,
  showError,
  showInfo,
  showSuccess,
  showToast,
  showValidationError,
  showWarning,
  throttle,
  useDataService,
  useErrorBoundary,
  useErrorHandler,
  useSidebar,
  useTheme,
  useValidationErrorHandler,
  withErrorBoundary
};
//# sourceMappingURL=index.js.map