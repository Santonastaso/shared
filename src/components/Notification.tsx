import React from 'react';
import { Toaster, type ToasterProps } from 'sonner';
import { useTheme } from './theme/ThemeProvider';

export interface NotificationProps extends ToasterProps {
  /** Position of the toaster */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  /** Whether to show rich colors */
  richColors?: boolean;
  /** Whether to show close button */
  closeButton?: boolean;
}

/**
 * Notification Component
 * 
 * A notification system using Sonner toasts.
 * Compatible with ra-core notification system and provides consistent styling.
 */
export const Notification: React.FC<NotificationProps> = ({
  position = 'bottom-center',
  richColors = true,
  closeButton = true,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <Toaster
      richColors={richColors}
      theme={theme}
      closeButton={closeButton}
      position={position}
      {...props}
    />
  );
};
