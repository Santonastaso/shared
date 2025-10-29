import React, { useState, useCallback } from 'react';
import { LogOut, Settings, User, RotateCw, LoaderCircle, Menu } from 'lucide-react';
import { ThemeSwitch } from './theme/ThemeSwitch';
import { Button } from './button';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './DropdownMenu';

// Simple Link Component that uses anchor tags for maximum compatibility
const SafeLink = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

export interface AppHeaderProps {
  // Branding
  title: string;
  logo?: {
    light: string;
    dark: string;
  };
  
  // Navigation
  navigationItems?: Array<{
    label: string;
    to: string;
    isActive?: boolean;
  }>;
  
  // User info
  user?: {
    name: string;
    email?: string;
    avatar?: string;
  };
  
  // Actions
  onLogout?: () => void;
  onRefresh?: () => void;
  onSettings?: () => void;
  onUsers?: () => void;
  onToggleSidebar?: () => void;
  
  // Loading state
  isLoading?: boolean;
  
  // Custom menu items
  customMenuItems?: React.ReactNode;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
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
  customMenuItems,
}) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserMenuToggle = useCallback(() => {
    setIsUserMenuOpen(prev => !prev);
  }, []);

  const handleUserMenuClose = useCallback(() => {
    setIsUserMenuOpen(false);
  }, []);

  return (
    <header className="bg-secondary border-b">
      <div className="px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo, Title, and Sidebar Toggle */}
          <div className="flex items-center gap-2">
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}
            <SafeLink
              to="/"
              className="flex items-center gap-2 text-secondary-foreground no-underline hover:opacity-80 transition-opacity"
            >
              {logo && (
                <>
                  <img
                    className="[.light_&]:hidden h-6"
                    src={logo.dark}
                    alt={title}
                  />
                  <img
                    className="[.dark_&]:hidden h-6"
                    src={logo.light}
                    alt={title}
                  />
                </>
              )}
              <h1 className="text-xl font-semibold">{title}</h1>
            </SafeLink>
          </div>

          {/* Navigation */}
          {navigationItems.length > 0 && (
            <nav className="hidden md:flex">
              {navigationItems.map((item) => (
                <SafeLink
                  key={item.to}
                  to={item.to}
                  className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                    item.isActive
                      ? "text-secondary-foreground border-secondary-foreground"
                      : "text-secondary-foreground/70 border-transparent hover:text-secondary-foreground/80"
                  }`}
                >
                  {item.label}
                </SafeLink>
              ))}
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <ThemeSwitch />
            
            {onRefresh && (
              <Button
                onClick={onRefresh}
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex"
              >
                {isLoading ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  <RotateCw className="h-4 w-4" />
                )}
              </Button>
            )}

            {user && (
              <DropdownMenu open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} role="presentation" />
                      <AvatarFallback>
                        {user.name?.charAt(0)?.toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      {user.email && (
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
                  {onSettings && (
                    <DropdownMenuItem onClick={onSettings} className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      My info
                    </DropdownMenuItem>
                  )}
                  
                  {onUsers && (
                    <DropdownMenuItem onClick={onUsers} className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Users
                    </DropdownMenuItem>
                  )}
                  
                  {customMenuItems}
                  
                  {(onSettings || onUsers || customMenuItems) && <DropdownMenuSeparator />}
                  
                  {onLogout && (
                    <DropdownMenuItem onClick={onLogout} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
