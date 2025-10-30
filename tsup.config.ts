import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    constants: "src/constants/index.ts",
    styles: "src/styles/index.css"
  },
  format: ["esm", "cjs"],
  dts: false,
  clean: true,
  sourcemap: true,
  external: [
    "react", 
    "react-dom", 
    "react-hook-form",
    "react-router-dom",
    "react-router",
    "@radix-ui/react-slot",
    "@radix-ui/react-avatar",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dropdown-menu",
    "@supabase/supabase-js",
    "@tanstack/react-query",
    "@tanstack/react-table",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "zustand",
    "lucide-react",
    "sonner",
    "vaul",
    "yup",
    "date-fns"
  ],
  noExternal: [],
  // Force externalization using rollup options
  rollupOptions: {
    external: [
      "@radix-ui/react-dialog",
      "vaul",
      "react",
      "react-dom",
      "lucide-react",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-slot",
      "@radix-ui/react-avatar",
      "@radix-ui/react-dropdown-menu",
      "@supabase/supabase-js",
      "@tanstack/react-query",
      "@tanstack/react-table",
      "class-variance-authority",
      "zustand",
      "react-hook-form",
      "react-router-dom",
      "sonner",
      "yup",
      "date-fns"
    ]
  },
});
