import React, { Children, useCallback, useState } from 'react';
import { LogOut, Settings, User, LoaderCircle, RotateCw, Menu } from 'lucide-react';
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

// UserMenu Context
export type UserMenuContextValue = {
  onClose: () => void;
};

export const UserMenuContext = React.createContext<UserMenuContextValue | undefined>(undefined);

export const useUserMenu = () => React.useContext(UserMenuContext);

// RefreshButton Component
export const RefreshButton = ({ onRefresh, loading = false }: { onRefresh?: () => void; loading?: boolean }) => {
  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    } else {
      window.location.reload();
    }
  };

  return (
    <Button
      onClick={handleRefresh}
      variant="ghost"
      size="icon"
      className="hidden sm:inline-flex"
    >
      {loading ? <LoaderCircle className="animate-spin" /> : <RotateCw />}
    </Button>
  );
};

// UserMenu Component
export type UserMenuProps = {
  children?: React.ReactNode;
  user?: {
    name?: string;
    email?: string;
    avatar?: string;
  };
  onLogout?: () => void;
};

export function UserMenu({ children, user, onLogout }: UserMenuProps) {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setOpen(false);
  };

  return (
    <UserMenuContext.Provider value={{ onClose: handleClose }}>
      <DropdownMenu open={open} onOpenChange={handleToggleOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 ml-2 rounded-full"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.avatar} role="presentation" />
              <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user?.name || 'User'}
              </p>
              {user?.email && (
                <p className="text-xs text-muted-foreground">
                  {user.email}
                </p>
              )}
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {children}
          {Children.count(children) > 0 && <DropdownMenuSeparator />}
          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </UserMenuContext.Provider>
  );
}

// UsersMenu Component
const UsersMenu = () => {
  const { onClose } = useUserMenu() ?? {};
  return (
    <DropdownMenuItem onClick={onClose}>
      <div className="flex items-center gap-2">
        <User /> Users
      </div>
    </DropdownMenuItem>
  );
};

// ConfigurationMenu Component
const ConfigurationMenu = () => {
  const { onClose } = useUserMenu() ?? {};
  return (
    <DropdownMenuItem onClick={onClose}>
      <div className="flex items-center gap-2">
        <Settings />
        My info
      </div>
    </DropdownMenuItem>
  );
};

// Main Simple Header Component (for tracc and scheduler_demo)
export interface SimpleHeaderProps {
  title: string;
  darkModeLogo?: string;
  lightModeLogo?: string;
  user?: {
    name?: string;
    email?: string;
    avatar?: string;
  };
  onLogout?: () => void;
  onRefresh?: () => void;
  onToggleSidebar?: () => void;
  loading?: boolean;
}

export const SimpleHeader: React.FC<SimpleHeaderProps> = ({
  title,
  darkModeLogo,
  lightModeLogo,
  user,
  onLogout,
  onRefresh,
  onToggleSidebar,
  loading = false,
}) => {
  return (
    <nav className="flex-grow">
      <header className="bg-secondary">
        <div className="px-4">
          <div className="flex justify-between items-center flex-1">
            {/* Logo, Title, and Hamburger Menu */}
            <div className="flex items-center gap-2">
              {onToggleSidebar && (
                <button
                  onClick={onToggleSidebar}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
                >
                  <Menu className="h-5 w-5" />
                </button>
              )}
              <div className="flex items-center gap-2 text-secondary-foreground">
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
              </div>
            </div>

            {/* Right side: Theme, Refresh, User Menu */}
            <div className="flex items-center">
              <ThemeSwitch />
              <RefreshButton onRefresh={onRefresh} loading={loading} />
              <UserMenu user={user} onLogout={onLogout}>
                <ConfigurationMenu />
                <UsersMenu />
              </UserMenu>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default SimpleHeader;
