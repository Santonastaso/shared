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
  /** Custom forgot password URL */
  forgotPasswordUrl?: string;
  /** Custom sign up URL */
  signUpUrl?: string;
  /** Loading state */
  isLoading?: boolean;
  /** Error message to display */
  error?: string;
  /** Additional form fields */
  additionalFields?: React.ReactNode;
  /** Custom form validation */
  onValidate?: (formData: Record<string, string>) => Record<string, string>;
  /** Form submission handler */
  onSubmit: (formData: Record<string, string>) => Promise<void>;
  /** Custom labels for internationalization */
  labels?: {
    signIn?: string;
    email?: string;
    password?: string;
    forgotPassword?: string;
    signUp?: string;
    noAccount?: string;
    signingIn?: string;
  };
  /** Demo credentials for development */
  demoCredentials?: {
    email: string;
    password: string;
    [key: string]: string;
  };
}

export const LoginPage: React.FC<LoginPageProps> = ({
  title,
  logo,
  backgroundImage,
  backgroundColor = '#18181b', // zinc-900
  subtitle,
  showForgotPassword = true,
  showSignUp = true,
  forgotPasswordUrl = '/forgot-password',
  signUpUrl = '/signup',
  isLoading = false,
  error,
  additionalFields,
  onValidate,
  onSubmit,
  labels = {
    signIn: 'Sign in',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot your password?',
    signUp: 'Create Account',
    noAccount: "Don't have an account?",
    signingIn: 'Signing in...',
  },
  demoCredentials,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let errors: Record<string, string> = {};
    
    // Basic validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    // Custom validation
    if (onValidate) {
      const customErrors = onValidate(formData);
      errors = { ...errors, ...customErrors };
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit(formData);
    } catch (err) {
      // Error handling is done by the parent component
    }
  };

  const handleDemoCredentials = () => {
    if (demoCredentials) {
      setFormData(demoCredentials);
    }
  };

  const getFieldError = (fieldName: string) => {
    return formErrors[fieldName] ? (
      <span className="text-red-500 text-sm mt-1 block">
        {formErrors[fieldName]}
      </span>
    ) : null;
  };

  return (
    <div className="min-h-screen flex">
      <div className="container relative grid flex-col items-center justify-center sm:max-w-none lg:grid-cols-2 lg:px-0">
        {/* Left Panel - Brand/Logo Section */}
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

        {/* Right Panel - Login Form */}
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {/* Mobile Logo/Title */}
            <div className="flex flex-col space-y-2 text-center lg:hidden">
              {logo && <img className="h-8 mx-auto" src={logo} alt={title} />}
              <h1 className="text-xl font-semibold">{title}</h1>
            </div>

            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">{labels.signIn}</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  {labels.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'border-red-500' : ''}
                  disabled={isLoading}
                  autoComplete="email"
                />
                {getFieldError('email')}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  {labels.password}
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={formErrors.password ? 'border-red-500' : ''}
                  disabled={isLoading}
                  autoComplete="current-password"
                />
                {getFieldError('password')}
              </div>

              {/* Additional Fields */}
              {additionalFields && (
                <div className="space-y-4">
                  {React.cloneElement(additionalFields as React.ReactElement, {
                    formData: formData,
                    handleChange: handleChange,
                    formErrors: formErrors,
                    getFieldError: getFieldError,
                    isLoading: isLoading,
                  } as any)}
                </div>
              )}

              {/* Error Display */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="text-red-400">●</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? labels.signingIn : labels.signIn}
              </Button>
            </form>

            {/* Additional Links */}
            {showForgotPassword && (
              <a
                href={forgotPasswordUrl}
                className="text-sm text-center hover:underline block"
              >
                {labels.forgotPassword}
              </a>
            )}

            {showSignUp && (
              <div className="text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-muted-foreground">
                      {labels.noAccount}
                    </span>
                  </div>
                </div>
                <a href={signUpUrl}>
                  <Button variant="outline" className="w-full">
                    {labels.signUp}
                  </Button>
                </a>
              </div>
            )}

            {/* Demo Credentials (for development) */}
            {demoCredentials && (typeof import.meta !== 'undefined' && (import.meta as any).env?.MODE === 'development') && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <details className="group">
                  <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                    Demo Credentials (Development Only)
                  </summary>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>Email:</strong> {demoCredentials.email}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Password:</strong> {demoCredentials.password}
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleDemoCredentials}
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
