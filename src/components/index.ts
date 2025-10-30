// UI Components
export { Button } from './button';
export { Input } from './input';
export { Label } from './label';
export { Badge } from './badge';
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from './table';

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
export { ErrorBoundary, withErrorBoundary, useErrorBoundary } from './ErrorBoundary';
export { Header } from './Header';

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
export { Avatar, AvatarImage, AvatarFallback } from './Avatar';
export * from './DropdownMenu';
