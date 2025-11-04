import React, { useState, useCallback } from 'react';
import { LogOut, RotateCw, LoaderCircle } from 'lucide-react';
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
import { ThemeSwitch } from './theme/ThemeSwitch';

export interface UnifiedHeaderProps {
  /** Application title */
  title: string;
  /** Logo URL for dark mode */
  darkModeLogo?: string;
  /** Logo URL for light mode */
  lightModeLogo?: string;
  /** User information */
  user?: {
    name?: string;
    email?: string;
    avatar?: string;
  };
  /** Logout handler */
  onLogout?: () => void;
  /** Refresh handler */
  onRefresh?: () => void;
  /** Loading state for refresh button */
  loading?: boolean;
  /** Link component (react-router Link) */
  LinkComponent?: React.ComponentType<any>;
  /** Additional menu items for user dropdown */
  userMenuItems?: React.ReactNode;
  /** Navigation items (optional) */
  navigationItems?: Array<{
    label: string;
    to: string;
    isActive?: boolean;
  }>;
}

/**
 * Unified Header Component
 * 
 * Matches crm_demo's ExactHeader layout exactly:
 * - Left: Logo + Title (+ optional navigation)
 * - Right: ThemeSwitch + RefreshButton + UserMenu
 */
export const UnifiedHeader: React.FC<UnifiedHeaderProps> = ({
  title,
  darkModeLogo,
  lightModeLogo,
  user,
  onLogout,
  onRefresh,
  loading = false,
  LinkComponent = 'a',
  userMenuItems,
  navigationItems = []
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleUserMenuToggle = useCallback(() => {
    setUserMenuOpen(prev => !prev);
  }, []);

  const handleUserMenuClose = useCallback(() => {
    setUserMenuOpen(false);
  }, []);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setUserMenuOpen(false);
  };

  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    }
  };

  return (
    <header className="bg-secondary border-b border-border">
      <div className="px-4">
        <div className="flex justify-between items-center h-12">
          {/* Left Section: Logo + Title + Navigation */}
          <div className="flex items-center">
            <LinkComponent
              to="/"
              className="flex items-center gap-2 text-secondary-foreground no-underline mr-6"
            >
              {darkModeLogo && (
                <img
                  className="[.light_&]:hidden h-6"
                  src={darkModeLogo}
                  alt={title}
                />
              )}
              {lightModeLogo && (
                <img
                  className="[.dark_&]:hidden h-6"
                  src={lightModeLogo}
                  alt={title}
                />
              )}
              <h1 className="text-xl font-semibold">{title}</h1>
            </LinkComponent>

            {/* Optional Navigation Items */}
            {navigationItems.length > 0 && (
              <nav className="flex">
                {navigationItems.map((item) => (
                  <LinkComponent
                    key={item.to}
                    to={item.to}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      item.isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {item.label}
                  </LinkComponent>
                ))}
              </nav>
            )}
          </div>

          {/* Right Section: ThemeSwitch + RefreshButton + UserMenu */}
          <div className="flex items-center gap-1">
            {/* Theme Switch */}
            <ThemeSwitch />

            {/* Refresh Button */}
            <Button
              onClick={handleRefresh}
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
              disabled={loading}
            >
              {loading ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                <RotateCw className="h-4 w-4" />
              )}
            </Button>

            {/* User Menu */}
            {user && (
              <DropdownMenu open={userMenuOpen} onOpenChange={handleUserMenuToggle}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 ml-2 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} role="presentation" />
                      <AvatarFallback>{user.name?.charAt(0) || 'U'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name || 'User'}
                      </p>
                      {user.email && (
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
                  {/* Additional Menu Items */}
                  {userMenuItems}
                  {userMenuItems && <DropdownMenuSeparator />}
                  
                  {/* Logout */}
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
