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
    "@radix-ui/react-slot",
    "@supabase/supabase-js",
    "@tanstack/react-query",
    "@tanstack/react-table",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "zustand",
    "lucide-react",
    "sonner",
    "yup"
  ],
});
