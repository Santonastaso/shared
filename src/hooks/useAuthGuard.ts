import { useEffect } from 'react';
import { useAuth } from '../services/AuthProvider';

export interface UseAuthGuardOptions {
  /** Redirect URL when unauthorized */
  redirectTo?: string;
  /** Custom authorization check function */
  authorize?: (user: any, session: any) => boolean;
  /** Required roles for access */
  requiredRoles?: string[];
  /** Required permissions for access */
  requiredPermissions?: string[];
  /** Callback when authorization fails */
  onUnauthorized?: () => void;
}

/**
 * Hook for protecting components with authentication and authorization
 * 
 * @example
 * ```tsx
 * function AdminPanel() {
 *   const { isAuthorized, loading } = useAuthGuard({
 *     requiredRoles: ['admin'],
 *     redirectTo: '/login'
 *   });
 * 
 *   if (loading) return <div>Loading...</div>;
 *   if (!isAuthorized) return null; // Will redirect
 * 
 *   return <div>Admin content</div>;
 * }
 * ```
 */
export const useAuthGuard = (options: UseAuthGuardOptions = {}) => {
  const {
    redirectTo,
    authorize,
    requiredRoles = [],
    requiredPermissions = [],
    onUnauthorized,
  } = options;

  const { user, session, loading } = useAuth();

  const isAuthenticated = !loading && !!user && !!session;
  
  const isAuthorized = (() => {
    if (loading || !user || !session) return false;

    // Custom authorization check
    if (authorize && !authorize(user, session)) {
      return false;
    }

    // Role-based authorization
    if (requiredRoles.length > 0) {
      const userRoles = user.user_metadata?.roles || user.app_metadata?.roles || [];
      const hasRequiredRole = requiredRoles.some(role => 
        Array.isArray(userRoles) ? userRoles.includes(role) : userRoles === role
      );
      if (!hasRequiredRole) return false;
    }

    // Permission-based authorization
    if (requiredPermissions.length > 0) {
      const userPermissions = user.user_metadata?.permissions || user.app_metadata?.permissions || [];
      const hasRequiredPermission = requiredPermissions.some(permission => 
        Array.isArray(userPermissions) ? userPermissions.includes(permission) : userPermissions === permission
      );
      if (!hasRequiredPermission) return false;
    }

    return true;
  })();

  useEffect(() => {
    if (!loading && !isAuthorized) {
      if (onUnauthorized) {
        onUnauthorized();
      } else if (redirectTo) {
        window.location.href = redirectTo;
      }
    }
  }, [loading, isAuthorized, redirectTo, onUnauthorized]);

  return {
    user,
    session,
    loading,
    isAuthenticated,
    isAuthorized,
  };
};
