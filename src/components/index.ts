// UI Components
export { Button } from './button';
export { Input } from './input';
export { Label } from './label';
export { Badge } from './badge';
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from './table';

// Feedback Components - skeleton is safe (no external deps), others temporarily disabled due to externalization
export { Skeleton } from './skeleton';
// TODO: Fix externalization of @radix-ui/react-tooltip, @radix-ui/react-accordion, @radix-ui/react-progress in tsup config
// export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip';
// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';
// export { Progress } from './progress';

// Form Input Components - textarea is safe (no external deps), others temporarily disabled due to externalization
export { Textarea } from './textarea';
// TODO: Fix externalization of @radix-ui/react-checkbox, @radix-ui/react-switch, @radix-ui/react-separator in tsup config
// export { Checkbox } from './checkbox';
// export { Switch } from './switch';
// export { Separator } from './separator';

// Navigation Components - temporarily disabled due to tsup externalization issues
// TODO: Fix externalization of @radix-ui/react-tabs, @radix-ui/react-popover, and cmdk in tsup config
// export { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
// export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator } from './command';
// export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from './popover';

// Dialog Components - temporarily disabled due to tsup externalization issues
// TODO: Fix externalization of @radix-ui/react-dialog and vaul in tsup config
// export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from './dialog';
// export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from './sheet';
// export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription } from './drawer';

// Theme Components
export { ThemeProvider, useTheme } from './theme/ThemeProvider';
export { ThemeSwitch } from './theme/ThemeSwitch';

// Advanced Components
export { DataTable } from './DataTable';
export { ListPageLayout } from './ListPageLayout';
export { FormPageLayout } from './FormPageLayout';
export { ErrorBoundary, withErrorBoundary, useErrorBoundary } from './ErrorBoundary';
export { Header } from './Header';

// Authentication Components
export { ProtectedRoute } from './ProtectedRoute';
export type { ProtectedRouteProps } from './ProtectedRoute';
export * from './auth';

// Component Variants
export { buttonVariants } from './button-variants';
export { badgeVariants } from './badge-variants';
// Generic UI Components
export { default as FilterDropdown } from './FilterDropdown';
export { default as GenericForm } from './GenericForm';

// Header Components
export { AppHeader } from './AppHeader';
export { ExactHeader } from './ExactHeader';
export { LoginPage } from './LoginPage';
export { SimpleHeader } from './SimpleHeader';
export { UnifiedHeader } from './UnifiedHeader';
export { Avatar, AvatarImage, AvatarFallback } from './Avatar';
export * from './DropdownMenu';
