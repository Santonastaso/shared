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

  return (
    <div className="min-h-screen flex">
      <div className="container relative grid flex-col items-center justify-center sm:max-w-none lg:grid-cols-2 lg:px-0">
        {/* Left Panel - Branding */}
        <div 
          className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            backgroundColor: backgroundColor
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: backgroundColor }} />
          <div className="relative z-20 flex items-center text-lg font-medium">
            {logo && <img className="h-6 mr-2" src={logo} alt={title} />}
            {title}
          </div>
          {subtitle && (
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">{subtitle}</p>
              </blockquote>
            </div>
          )}
        </div>

        {/* Right Panel - Login Form */}
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {defaultLabels.signIn}
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to sign in to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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