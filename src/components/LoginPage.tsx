import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Link } from 'react-router-dom';

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
  onSubmit: (data: { email: string; password: string; [key: string]: any }) => void;
  /** Forgot password link URL */
  forgotPasswordUrl?: string;
  /** Sign up link URL */
  signUpUrl?: string;
  /** Additional form fields (like work center selection) */
  additionalFields?: React.ReactNode;
  /** Additional form data from additionalFields */
  additionalData?: Record<string, any>;
  /** Callback when additional data changes */
  onAdditionalDataChange?: (data: Record<string, any>) => void;
}

/**
 * Safely check if we're in development mode across CJS and ESM environments
 */
const isDevelopmentMode = (): boolean => {
  // Try import.meta.env first (ESM/Vite)
  if (typeof globalThis !== 'undefined' && (globalThis as any).import?.meta?.env) {
    const env = (globalThis as any).import.meta.env;
    return env.MODE === 'development' || env.DEV === true;
  }
  
  // Try process.env (CJS/Node)
  if (typeof process !== 'undefined' && process.env) {
    return process.env.NODE_ENV === 'development';
  }
  
  // Fallback for browser environments
  return false;
};

/**
 * CRM-style Login Page Component
 * 
 * Matches the exact styling and layout of crm_demo's login page.
 * Supports additional fields for apps like scheduler_demo that need work center selection.
 */
export const LoginPage: React.FC<LoginPageProps> = ({
  title,
  logo,
  backgroundImage,
  backgroundColor = '#18181b',
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
  additionalFields,
  additionalData = {},
  onAdditionalDataChange
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
    onSubmit({ ...formData, ...additionalData });
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

  return (
    <div className="min-h-screen flex">
      <div className="container relative grid flex-col items-center justify-center sm:max-w-none lg:grid-cols-2 lg:px-0">
        {/* Left Panel - Brand/Logo Section (matches crm_demo exactly) */}
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
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

        {/* Right Panel - Login Form (matches crm_demo exactly) */}
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {/* Mobile Logo/Title */}
            <div className="flex flex-col space-y-2 text-center lg:hidden">
              {logo && <img className="h-8 mx-auto" src={logo} alt={title} />}
              <h1 className="text-xl font-semibold">{title}</h1>
            </div>

            {/* Sign in header */}
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">{defaultLabels.signIn}</h1>
            </div>

            {/* Login Form */}
            <form className="space-y-8" onSubmit={handleSubmit}>
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">{defaultLabels.email}</Label>
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

              <div className="space-y-2">
                <Label htmlFor="password">{defaultLabels.password}</Label>
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

              {/* Additional fields (like work center for scheduler_demo) */}
              {additionalFields}

              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : defaultLabels.signIn}
              </Button>
            </form>

            {/* Forgot Password Link */}
            {showForgotPassword && (
              <Link
                to={forgotPasswordUrl}
                className="text-sm text-center hover:underline"
              >
                {defaultLabels.forgotPassword}
              </Link>
            )}

            {/* Sign Up Section */}
            {showSignUp && (
              <>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-muted-foreground">{defaultLabels.signUpText}</span>
                  </div>
                </div>
                <Link to={signUpUrl}>
                  <Button variant="outline" className="w-full">
                    {defaultLabels.signUp}
                  </Button>
                </Link>
              </>
            )}

            {/* Demo Credentials (Development Only) */}
            {isDevelopmentMode() && demoCredentials && (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <details className="group">
                  <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                    Demo Credentials (Development Only)
                  </summary>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-muted-foreground"><strong>Email:</strong> {demoCredentials.email}</p>
                    <p className="text-xs text-muted-foreground"><strong>Password:</strong> {demoCredentials.password}</p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={fillDemoCredentials}
                      className="mt-2"
                    >
                      Use Demo Credentials
                    </Button>
                  </div>
                </details>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};