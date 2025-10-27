import {
  ALERT_TYPES,
  COMMON_STATUSES,
  CONFIRMATION_TYPES,
  DATA_TABLE_DEFAULTS,
  DEPARTMENT_TYPES,
  ERROR_TYPES,
  FIELD_CONFIGS,
  MACHINE_STATUSES,
  PRODUCT_TYPES,
  SEAL_SIDES,
  SHIFT_TYPES,
  TASK_STATUSES,
  TIME_CONSTANTS,
  VALIDATION_MESSAGES,
  WORK_CENTERS
} from "./chunk-ICS7PABN.js";

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

// src/components/FilterDropdown.tsx
import { useMemo as useMemo3, useState as useState3, useEffect as useEffect2, useRef } from "react";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var FilterDropdown = ({ column, options, onFilterChange, isOpen, onToggle, activeFilter }) => {
  const [searchTerm, setSearchTerm] = useState3("");
  const [position, setPosition] = useState3({ top: 0, left: 0 });
  const [selectedValues, setSelectedValues] = useState3(/* @__PURE__ */ new Set());
  const [isSelectAll, setIsSelectAll] = useState3(true);
  const dropdownRef = useRef(null);
  const filteredOptions = useMemo3(() => {
    if (!searchTerm) return options;
    const filtered = options.filter(
      (option) => option && option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
  }, [options, searchTerm, column]);
  useEffect2(() => {
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
  useEffect2(() => {
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
  useEffect2(() => {
    if (!isOpen) {
      setSearchTerm("");
      setSelectedValues(/* @__PURE__ */ new Set());
      setIsSelectAll(true);
    }
  }, [isOpen]);
  useEffect2(() => {
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
  return /* @__PURE__ */ jsxs5("div", { className: "relative", ref: dropdownRef, children: [
    /* @__PURE__ */ jsx12(
      "button",
      {
        onClick: onToggle,
        className: `inline-flex items-center justify-center w-4 h-4 transition-colors ${activeFilter ? "text-blue-600 hover:text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
        title: activeFilter ? `Filtro attivo: ${activeFilter}` : "Filtra",
        children: /* @__PURE__ */ jsx12("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx12("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }) })
      }
    ),
    isOpen && /* @__PURE__ */ jsxs5(
      "div",
      {
        className: "absolute bg-white border border-gray-300 rounded-md shadow-lg z-[99999] w-48",
        style: {
          top: position.top,
          left: position.left
        },
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsxs5("div", { className: "p-2", children: [
            /* @__PURE__ */ jsxs5("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ jsx12(
                "button",
                {
                  onClick: handleSelectAll,
                  className: "text-blue-600 text-xs font-medium hover:underline",
                  children: isSelectAll ? "Select all" : `Select all ${filteredOptions.length}`
                }
              ),
              /* @__PURE__ */ jsx12(
                "button",
                {
                  onClick: handleClearFilter,
                  className: "text-blue-600 text-xs font-medium hover:underline",
                  children: "Clear"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs5("div", { className: "text-xs text-gray-600 mb-1", children: [
              "Displaying ",
              filteredOptions.length
            ] }),
            /* @__PURE__ */ jsxs5("div", { className: "relative mb-1", children: [
              /* @__PURE__ */ jsx12(
                "input",
                {
                  type: "text",
                  placeholder: "Search values...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ jsx12("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2", children: /* @__PURE__ */ jsx12("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "currentColor", className: "text-gray-400", children: /* @__PURE__ */ jsx12("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) }) })
            ] }),
            /* @__PURE__ */ jsxs5("div", { className: "h-16 overflow-y-auto border border-gray-200 rounded", children: [
              filteredOptions.map((option, index) => /* @__PURE__ */ jsxs5(
                "label",
                {
                  className: "flex items-center px-2 py-1 hover:bg-gray-50 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx12(
                      "input",
                      {
                        type: "checkbox",
                        checked: selectedValues.has(option),
                        onChange: () => handleOptionToggle(option),
                        className: "mr-2 h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      }
                    ),
                    /* @__PURE__ */ jsx12("span", { className: "text-xs truncate flex-1", children: option || "(Blanks)" })
                  ]
                },
                `${option}-${index}`
              )),
              filteredOptions.length === 0 && searchTerm && /* @__PURE__ */ jsx12("div", { className: "px-2 py-2 text-xs text-gray-500 text-center", children: "No results found" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs5("div", { className: "border-t border-gray-200 p-2 flex justify-end space-x-1", children: [
            /* @__PURE__ */ jsx12(
              "button",
              {
                onClick: handleCancel,
                className: "px-2 py-1 text-xs text-gray-700 hover:bg-gray-100 rounded",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx12(
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
import { useMemo as useMemo4 } from "react";
import { useForm } from "react-hook-form";

// src/hooks/useErrorHandler.ts
import { useState as useState4, useCallback, useRef as useRef2 } from "react";
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
  const retryCountRef = useRef2(0);
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

// src/components/GenericForm.tsx
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
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
  const initialFormData = useMemo4(() => {
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
  } = useForm({
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
        return /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsxs6(
            "select",
            {
              ...register(field.name, field.validation),
              disabled: field.disabled || isSubmitting,
              className: `flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${errors[field.name] ? "border-red-500" : "border-input"}`,
              children: [
                /* @__PURE__ */ jsx13("option", { value: "", children: field.placeholder || `Seleziona ${field.label.toLowerCase()}` }),
                field.options?.map((option) => /* @__PURE__ */ jsx13("option", { value: option.value, children: option.label }, option.value))
              ]
            }
          ),
          errors[field.name] && /* @__PURE__ */ jsx13("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "textarea":
        return /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx13(
            "textarea",
            {
              ...baseInputProps,
              rows: field.rows || 3,
              className: `w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent ${field.className || ""} ${errors[field.name] ? "border-destructive" : ""}`
            }
          ),
          errors[field.name] && /* @__PURE__ */ jsx13("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "checkbox":
        return /* @__PURE__ */ jsx13("div", { className: "flex flex-wrap gap-2", children: field.options?.map((option) => /* @__PURE__ */ jsxs6("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx13(
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
          /* @__PURE__ */ jsx13(Label, { htmlFor: `${field.name}_${option.value}`, className: "text-[10px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: option.label })
        ] }, option.value)) });
      case "datetime-local":
        return /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx13(Input, { type: "datetime-local", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ jsx13("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "date":
        return /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx13(Input, { type: "date", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ jsx13("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "time":
        return /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx13(Input, { type: "time", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ jsx13("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "number":
        return /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx13(Input, { type: "number", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ jsx13("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
      case "text":
      default:
        return /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx13(Input, { type: "text", ...baseInputProps, className: `${baseInputProps.className} ${errors[field.name] ? "border-red-500" : ""}` }),
          errors[field.name] && /* @__PURE__ */ jsx13("p", { className: "text-sm text-destructive mt-1", children: errors[field.name].message })
        ] });
    }
  };
  const renderSection = (section) => {
    const visibleFields = section.fields.filter(
      (field) => !field.conditional || field.conditional(watch(field.name), watch, getValues)
    );
    if (visibleFields.length === 0) return null;
    return /* @__PURE__ */ jsxs6("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx13("h2", { className: "text-lg font-semibold text-foreground", children: section.title }),
      /* @__PURE__ */ jsx13("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: visibleFields.map((field) => /* @__PURE__ */ jsxs6("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs6(Label, { htmlFor: field.name, className: "text-sm font-medium text-foreground", children: [
          field.label,
          " ",
          field.required && /* @__PURE__ */ jsx13("span", { className: "text-destructive", children: "*" })
        ] }),
        renderField(field),
        field.helpText && /* @__PURE__ */ jsx13("p", { className: "text-xs text-muted-foreground", children: field.helpText })
      ] }, field.name)) })
    ] }, section.title);
  };
  const renderCustomSection = (sectionKey) => {
    if (customFieldRenderers[sectionKey]) {
      return customFieldRenderers[sectionKey]();
    }
    return null;
  };
  return /* @__PURE__ */ jsx13("div", { className: "bg-card rounded-lg border border-border shadow-sm p-6", children: /* @__PURE__ */ jsxs6("form", { onSubmit: handleSubmit(handleFormSubmit), noValidate: true, className: "space-y-6", children: [
    config.sections.map(renderSection),
    config.customFields && Object.keys(config.customFields).map(
      (sectionKey) => /* @__PURE__ */ jsx13("div", { children: renderCustomSection(sectionKey) }, sectionKey)
    ),
    customActions && /* @__PURE__ */ jsx13("div", { className: "space-y-4", children: customActions }),
    /* @__PURE__ */ jsx13("div", { className: "flex justify-end pt-6 border-t border-border", children: /* @__PURE__ */ jsx13(
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
import { useState as useState5, useCallback as useCallback2 } from "react";
import { Link } from "react-router-dom";
import { LogOut, Settings, User, RotateCw, LoaderCircle, Menu } from "lucide-react";

// src/components/Avatar.tsx
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx14 } from "react/jsx-runtime";
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx14(
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
  return /* @__PURE__ */ jsx14(
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
  return /* @__PURE__ */ jsx14(
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
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx15(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx15(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx15(
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
  return /* @__PURE__ */ jsx15(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx15(
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
  return /* @__PURE__ */ jsx15(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx15(
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
  return /* @__PURE__ */ jsxs7(
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
        /* @__PURE__ */ jsx15("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx15(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx15(CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx15(
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
  return /* @__PURE__ */ jsxs7(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx15("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx15(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx15(CircleIcon, { className: "size-2 fill-current" }) }) }),
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
  return /* @__PURE__ */ jsx15(
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
  return /* @__PURE__ */ jsx15(
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
  return /* @__PURE__ */ jsx15(
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
  return /* @__PURE__ */ jsx15(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs7(
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
        /* @__PURE__ */ jsx15(ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx15(
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
import { Fragment, jsx as jsx16, jsxs as jsxs8 } from "react/jsx-runtime";
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
  const [isUserMenuOpen, setIsUserMenuOpen] = useState5(false);
  const handleUserMenuToggle = useCallback2(() => {
    setIsUserMenuOpen((prev) => !prev);
  }, []);
  const handleUserMenuClose = useCallback2(() => {
    setIsUserMenuOpen(false);
  }, []);
  return /* @__PURE__ */ jsx16("header", { className: "bg-secondary border-b", children: /* @__PURE__ */ jsx16("div", { className: "px-4", children: /* @__PURE__ */ jsxs8("div", { className: "flex justify-between items-center h-16", children: [
    /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2", children: [
      onToggleSidebar && /* @__PURE__ */ jsx16(
        "button",
        {
          onClick: onToggleSidebar,
          className: "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring",
          children: /* @__PURE__ */ jsx16(Menu, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsxs8(
        Link,
        {
          to: "/",
          className: "flex items-center gap-2 text-secondary-foreground no-underline hover:opacity-80 transition-opacity",
          children: [
            logo && /* @__PURE__ */ jsxs8(Fragment, { children: [
              /* @__PURE__ */ jsx16(
                "img",
                {
                  className: "[.light_&]:hidden h-6",
                  src: logo.dark,
                  alt: title
                }
              ),
              /* @__PURE__ */ jsx16(
                "img",
                {
                  className: "[.dark_&]:hidden h-6",
                  src: logo.light,
                  alt: title
                }
              )
            ] }),
            /* @__PURE__ */ jsx16("h1", { className: "text-xl font-semibold", children: title })
          ]
        }
      )
    ] }),
    navigationItems.length > 0 && /* @__PURE__ */ jsx16("nav", { className: "hidden md:flex", children: navigationItems.map((item) => /* @__PURE__ */ jsx16(
      Link,
      {
        to: item.to,
        className: `px-6 py-3 text-sm font-medium transition-colors border-b-2 ${item.isActive ? "text-secondary-foreground border-secondary-foreground" : "text-secondary-foreground/70 border-transparent hover:text-secondary-foreground/80"}`,
        children: item.label
      },
      item.to
    )) }),
    /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx16(ThemeSwitch, {}),
      onRefresh && /* @__PURE__ */ jsx16(
        Button,
        {
          onClick: onRefresh,
          variant: "ghost",
          size: "icon",
          className: "hidden sm:inline-flex",
          children: isLoading ? /* @__PURE__ */ jsx16(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx16(RotateCw, { className: "h-4 w-4" })
        }
      ),
      user && /* @__PURE__ */ jsxs8(DropdownMenu, { open: isUserMenuOpen, onOpenChange: setIsUserMenuOpen, children: [
        /* @__PURE__ */ jsx16(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx16(
          Button,
          {
            variant: "ghost",
            className: "relative h-8 w-8 rounded-full",
            children: /* @__PURE__ */ jsxs8(Avatar, { className: "h-8 w-8", children: [
              /* @__PURE__ */ jsx16(AvatarImage, { src: user.avatar, role: "presentation" }),
              /* @__PURE__ */ jsx16(AvatarFallback, { children: user.name?.charAt(0)?.toUpperCase() || "U" })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxs8(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
          /* @__PURE__ */ jsx16(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxs8("div", { className: "flex flex-col space-y-1", children: [
            /* @__PURE__ */ jsx16("p", { className: "text-sm font-medium leading-none", children: user.name }),
            user.email && /* @__PURE__ */ jsx16("p", { className: "text-xs text-muted-foreground", children: user.email })
          ] }) }),
          /* @__PURE__ */ jsx16(DropdownMenuSeparator, {}),
          onSettings && /* @__PURE__ */ jsxs8(DropdownMenuItem, { onClick: onSettings, className: "cursor-pointer", children: [
            /* @__PURE__ */ jsx16(Settings, { className: "mr-2 h-4 w-4" }),
            "My info"
          ] }),
          onUsers && /* @__PURE__ */ jsxs8(DropdownMenuItem, { onClick: onUsers, className: "cursor-pointer", children: [
            /* @__PURE__ */ jsx16(User, { className: "mr-2 h-4 w-4" }),
            "Users"
          ] }),
          customMenuItems,
          (onSettings || onUsers || customMenuItems) && /* @__PURE__ */ jsx16(DropdownMenuSeparator, {}),
          onLogout && /* @__PURE__ */ jsxs8(DropdownMenuItem, { onClick: onLogout, className: "cursor-pointer", children: [
            /* @__PURE__ */ jsx16(LogOut, { className: "mr-2 h-4 w-4" }),
            "Log out"
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
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
  const url = import.meta.env?.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
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
import { createContext as createContext2, useContext as useContext2, useState as useState6, useEffect as useEffect4 } from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var AuthContext = createContext2(null);
var AuthProvider = ({
  children,
  supabaseClient,
  onAuthStateChange
}) => {
  const [user, setUser] = useState6(null);
  const [session, setSession] = useState6(null);
  const [loading, setLoading] = useState6(true);
  const [error, setError] = useState6(null);
  useEffect4(() => {
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
  return /* @__PURE__ */ jsx17(AuthContext.Provider, { value, children });
};
var useAuth = () => {
  const context = useContext2(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export {
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
  FIELD_CONFIGS,
  FilterDropdown_default as FilterDropdown,
  GenericForm_default as GenericForm,
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
};
//# sourceMappingURL=index.js.map