import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Card } from './card';

export interface LoginPageProps {
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
  /** Whether to show the forgot password link */
  showForgotPassword?: boolean;
  /** Whether to show the sign up link */
  showSignUp?: boolean;
  /** Custom labels for form elements */
  labels?: {
    signIn?: string;
    email?: string;
    password?: string;
    forgotPassword?: string;
    signUp?: string;
    signUpText?: string;
  };
  /** Demo credentials for development */
  demoCredentials?: {
    email: string;
    password: string;
  };
  /** Loading state */
  isLoading?: boolean;
  /** Error message to display */
  error?: string;
  /** Form submission handler */
  onSubmit: (data: { email: string; password: string }) => void;
  /** Forgot password link URL */
  forgotPasswordUrl?: string;
  /** Sign up link URL */
  signUpUrl?: string;
  /** Additional form fields (like work center selection) */
  additionalFields?: React.ReactNode;
}

/**
 * Safely check if we're in development mode across CJS and ESM environments
 */
const isDevelopmentMode = (): boolean => {
  // Try import.meta.env first (ESM/Vite)
  if (typeof globalThis !== 'undefined' && (globalThis as any).import?.meta?.env) {
    return (globalThis as any).import.meta.env.MODE === 'development';
  }
  // Try process.env (CJS/Node)
  if (typeof process !== 'undefined' && process.env) {
    return process.env.NODE_ENV === 'development';
  }
  // Fallback for browser environments
  return false;
};

export const LoginPage: React.FC<LoginPageProps> = ({
  title,
  logo,
  backgroundImage,
  backgroundColor = '#09090b',
  subtitle,
  showForgotPassword = true,
  showSignUp = true,
  labels = {},
  demoCredentials,
  isLoading = false,
  error,
  onSubmit,
  forgotPasswordUrl = '/forgot-password',
  signUpUrl = '/signup',
  additionalFields
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const defaultLabels = {
    signIn: 'Sign in',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot your password?',
    signUp: 'Sign up',
    signUpText: "Don't have an account?",
    ...labels
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const fillDemoCredentials = () => {
    if (demoCredentials) {
      setFormData({
        email: demoCredentials.email,
        password: demoCredentials.password
      });
    }
  };

  // Debug: Log to verify SharedLoginPage is being rendered
  console.log('🎨 SharedLoginPage: Rendering with props', { title, logo, subtitle });

  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>
      <div style={{ 
        width: '100%', 
        position: 'relative', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        {/* Left Panel - Branding */}
        <div 
          style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '2.5rem',
            color: 'white',
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            backgroundColor: backgroundColor
          }}
        >
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundColor: backgroundColor 
          }} />
          <div style={{ 
            position: 'relative', 
            zIndex: 20, 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '1.125rem', 
            fontWeight: '500' 
          }}>
            {logo && <img style={{ height: '1.5rem', marginRight: '0.5rem' }} src={logo} alt={title} />}
            {title}
          </div>
          {subtitle && (
            <div style={{ 
              position: 'relative', 
              zIndex: 20, 
              marginTop: 'auto' 
            }}>
              <blockquote style={{ margin: 0 }}>
                <p style={{ fontSize: '1.125rem', margin: 0 }}>{subtitle}</p>
              </blockquote>
            </div>
          )}
        </div>

        {/* Right Panel - Login Form */}
        <div style={{ padding: '2rem' }}>
          <div style={{ 
            margin: '0 auto', 
            display: 'flex', 
            width: '100%', 
            maxWidth: '350px',
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '1.5rem' 
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.5rem', 
              textAlign: 'center' 
            }}>
              <h1 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                letterSpacing: '-0.025em',
                margin: 0,
                color: '#111827'
              }}>
                {defaultLabels.signIn}
              </h1>
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#6b7280',
                margin: 0
              }}>
                Enter your email below to sign in to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {error && (
                <div style={{ 
                  padding: '0.75rem', 
                  fontSize: '0.875rem', 
                  color: '#dc2626', 
                  backgroundColor: '#fef2f2', 
                  border: '1px solid #fecaca', 
                  borderRadius: '0.375rem' 
                }}>
                  {error}
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label 
                  htmlFor="email" 
                  style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: '500', 
                    color: '#374151' 
                  }}
                >
                  {defaultLabels.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label 
                  htmlFor="password" 
                  style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: '500', 
                    color: '#374151' 
                  }}
                >
                  {defaultLabels.password}
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              {additionalFields}

              <Button
                type="submit"
                className="w-full text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : defaultLabels.signIn}
              </Button>
            </form>

            {/* Demo Credentials (for development) */}
            {demoCredentials && isDevelopmentMode() && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <details className="group">
                  <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                    Demo Credentials (Development Only)
                  </summary>
                  <div className="mt-2 space-y-2">
                    <p className="text-xs text-gray-600">
                      Email: {demoCredentials.email}
                    </p>
                    <p className="text-xs text-gray-600">
                      Password: {demoCredentials.password}
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={fillDemoCredentials}
                      className="w-full mt-2"
                    >
                      Fill Demo Credentials
                    </Button>
                  </div>
                </details>
              </div>
            )}

            {/* Footer Links */}
            <div className="text-center space-y-4">
              {showForgotPassword && (
                <a
                  href={forgotPasswordUrl}
                  className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                >
                  {defaultLabels.forgotPassword}
                </a>
              )}

              {showSignUp && (
                <div className="text-sm text-muted-foreground">
                  {defaultLabels.signUpText}{' '}
                  <a
                    href={signUpUrl}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {defaultLabels.signUp}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};