import React from 'react';
import { useAuth } from '../services/AuthProvider';

export interface ProtectedRouteProps {
  children: React.ReactNode;
  /** Custom loading component */
  loadingComponent?: React.ReactNode;
  /** Custom unauthorized component */
  unauthorizedComponent?: React.ReactNode;
  /** Redirect URL when unauthorized */
  redirectTo?: string;
  /** Custom authorization check function */
  authorize?: (user: any, session: any) => boolean;
  /** Required roles for access */
  requiredRoles?: string[];
  /** Required permissions for access */
  requiredPermissions?: string[];
}

/**
 * ProtectedRoute component that wraps content requiring authentication
 * 
 * @example
 * ```tsx
 * <ProtectedRoute>
 *   <Dashboard />
 * </ProtectedRoute>
 * 
 * // With custom authorization
 * <ProtectedRoute 
 *   authorize={(user) => user?.role === 'admin'}
 *   unauthorizedComponent={<div>Admin access required</div>}
 * >
 *   <AdminPanel />
 * </ProtectedRoute>
 * 
 * // With required roles
 * <ProtectedRoute requiredRoles={['admin', 'moderator']}>
 *   <ModeratorPanel />
 * </ProtectedRoute>
 * ```
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  loadingComponent,
  unauthorizedComponent,
  redirectTo,
  authorize,
  requiredRoles = [],
  requiredPermissions = [],
}) => {
  const { user, session, loading } = useAuth();

  // Show loading state
  if (loading) {
    return loadingComponent ? (
      <>{loadingComponent}</>
    ) : (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Check if user is authenticated
  if (!user || !session) {
    if (redirectTo) {
      window.location.href = redirectTo;
      return null;
    }
    
    return unauthorizedComponent ? (
      <>{unauthorizedComponent}</>
    ) : (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Authentication Required</h2>
          <p className="text-muted-foreground">Please sign in to access this content.</p>
        </div>
      </div>
    );
  }

  // Custom authorization check
  if (authorize && !authorize(user, session)) {
    return unauthorizedComponent ? (
      <>{unauthorizedComponent}</>
    ) : (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Access Denied</h2>
          <p className="text-muted-foreground">You don't have permission to access this content.</p>
        </div>
      </div>
    );
  }

  // Role-based authorization
  if (requiredRoles.length > 0) {
    const userRoles = user.user_metadata?.roles || user.app_metadata?.roles || [];
    const hasRequiredRole = requiredRoles.some(role => 
      Array.isArray(userRoles) ? userRoles.includes(role) : userRoles === role
    );
    
    if (!hasRequiredRole) {
      return unauthorizedComponent ? (
        <>{unauthorizedComponent}</>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Insufficient Permissions</h2>
            <p className="text-muted-foreground">
              You need one of the following roles: {requiredRoles.join(', ')}
            </p>
          </div>
        </div>
      );
    }
  }

  // Permission-based authorization
  if (requiredPermissions.length > 0) {
    const userPermissions = user.user_metadata?.permissions || user.app_metadata?.permissions || [];
    const hasRequiredPermission = requiredPermissions.some(permission => 
      Array.isArray(userPermissions) ? userPermissions.includes(permission) : userPermissions === permission
    );
    
    if (!hasRequiredPermission) {
      return unauthorizedComponent ? (
        <>{unauthorizedComponent}</>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Insufficient Permissions</h2>
            <p className="text-muted-foreground">
              You need one of the following permissions: {requiredPermissions.join(', ')}
            </p>
          </div>
        </div>
      );
    }
  }

  // User is authenticated and authorized
  return <>{children}</>;
};
