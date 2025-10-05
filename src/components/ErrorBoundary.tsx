'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Hata loglaması
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback varsa onu göster
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Yoksa default error UI
      return (
        <div className="min-h-[400px] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/30 rounded-full blur-xl"></div>
                <div className="relative bg-gradient-to-br from-red-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Bu Bölümde Bir Sorun Oluştu
            </h3>
            
            <p className="text-gray-400 mb-6 text-sm">
              Bu içerik şu anda yüklenemiyor. Lütfen sayfayı yenileyin.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-4 bg-red-950/30 backdrop-blur-sm border border-red-500/30 rounded-lg p-4 text-left">
                <p className="text-red-400 text-xs font-mono break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-lg font-semibold transition-all hover:scale-105 text-white text-sm"
            >
              Sayfayı Yenile
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;