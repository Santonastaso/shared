import React from 'react';

export interface AuthLayoutProps {
  children: React.ReactNode;
  /** Application title */
  title: string;
  /** Logo URL for the application */
  logo?: string;
  /** Background image or color for the left panel */
  backgroundImage?: string;
  /** Custom background color for the left panel */
  backgroundColor?: string;
  /** Subtitle or description text */
  subtitle?: string;
  /** Show notifications */
  showNotifications?: boolean;
  /** Custom notification component */
  notificationComponent?: React.ReactNode;
}

/**
 * Shared layout for authentication pages (login, signup, forgot password, etc.)
 * Provides consistent branding and layout across all auth flows
 */
export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  logo,
  backgroundImage,
  backgroundColor = '#18181b', // zinc-900
  subtitle,
  showNotifications = true,
  notificationComponent,
}) => {
  return (
    <div className="min-h-screen flex">
      <div className="container relative grid flex-col items-center justify-center sm:max-w-none lg:grid-cols-2 lg:px-0">
        {/* Left Panel - Brand/Logo Section */}
        <div 
          className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            backgroundColor: backgroundImage ? undefined : backgroundColor,
          }}
        >
          {!backgroundImage && <div className="absolute inset-0 bg-zinc-900" />}
          <div className="relative z-20 flex items-center text-lg font-medium">
            {logo && <img className="h-6 mr-2" src={logo} alt={title} />}
            {title}
          </div>
          {subtitle && (
            <div className="relative z-20 mt-auto">
              <p className="text-lg">{subtitle}</p>
            </div>
          )}
        </div>

        {/* Right Panel - Content */}
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {/* Mobile Logo/Title */}
            <div className="flex flex-col space-y-2 text-center lg:hidden">
              {logo && <img className="h-8 mx-auto" src={logo} alt={title} />}
              <h1 className="text-xl font-semibold">{title}</h1>
            </div>

            {/* Content */}
            {children}
          </div>
        </div>
      </div>

      {/* Notifications */}
      {showNotifications && (
        notificationComponent || (
          <div id="auth-notifications" className="fixed top-4 right-4 z-50" />
        )
      )}
    </div>
  );
};
