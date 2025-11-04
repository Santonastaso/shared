import React, { useState } from 'react';
import { Button } from './button';
import { TextInput } from './TextInput';
import { Notification } from './Notification';

export interface CRMLoginPageProps {
  /** Application title */
  title: string;
  /** Logo URL for the application */
  logo?: string;
  /** Subtitle or description text */
  subtitle?: string;
  /** Redirect URL after login */
  redirectTo?: string;
  /** ra-core login hook */
  useLogin: () => (credentials: any, redirectTo?: string) => Promise<any>;
  /** ra-core notify hook */
  useNotify: () => (message: string, options?: any) => void;
  /** ra-core Form component */
  Form: React.ComponentType<any>;
  /** ra-core required validator */
  required: () => (value: any) => string | undefined;
  /** Link component (react-router Link) */
  Link: React.ComponentType<any>;
}

/**
 * CRM Login Page Component
 * 
 * Specifically designed for ra-core compatibility.
 * Uses ra-core's Form, validation, and hooks.
 */
export const CRMLoginPage: React.FC<CRMLoginPageProps> = ({
  title,
  logo,
  subtitle,
  redirectTo,
  useLogin,
  useNotify,
  Form,
  required,
  Link
}) => {
  const [loading, setLoading] = useState(false);
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (values: any) => {
    setLoading(true);
    login(values, redirectTo)
      .then(() => {
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
        notify(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
              ? "ra.auth.sign_in_error"
              : error.message,
          {
            type: "error",
            messageArgs: {
              _:
                typeof error === "string"
                  ? error
                  : error && error.message
                    ? error.message
                    : undefined,
            },
          },
        );
      });
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

            {/* Sign in header */}
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
            </div>

            {/* Login Form - using ra-core Form */}
            <Form className="space-y-8" onSubmit={handleSubmit}>
              <TextInput
                label="Email"
                source="email"
                type="email"
                validate={required()}
              />
              <TextInput
                label="Password"
                source="password"
                type="password"
                validate={required()}
              />
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={loading}
              >
                Sign in
              </Button>
            </Form>

            {/* Forgot Password Link */}
            <Link
              to={"/forgot-password"}
              className="text-sm text-center hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
};
