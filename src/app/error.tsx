'use client';

import { Link } from 'lucide-react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hata loglaması (production'da bir servise gönderilebilir)
    console.error('Global error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      {/* Arka planda blur efektleri */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        {/* Hata İkonu */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/30 rounded-full blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-red-500 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
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

        {/* Başlık */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Bir Şeyler Ters Gitti!
        </h1>

        {/* Açıklama */}
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yeniden yüklemeyi deneyin
          veya ana sayfaya dönün.
        </p>

        {/* Hata Detayı (sadece development'ta göster) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-left">
            <h3 className="text-red-400 font-semibold mb-2 text-sm">Hata Detayı (Dev Mode):</h3>
            <p className="text-gray-400 text-sm font-mono break-all">
              {error.message || 'Bilinmeyen hata'}
            </p>
            {error.digest && (
              <p className="text-gray-500 text-xs mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-xl font-semibold transition-all hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></span>
            <span className="relative flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Tekrar Dene
            </span>
          </button>

          <Link
            href="/"
            className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 rounded-xl font-semibold transition-all hover:scale-105"
          >
            <span className="relative flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Ana Sayfaya Dön
            </span>
          </Link>
        </div>

        {/* İletişim Bilgisi */}
        <p className="text-gray-500 text-sm mt-8">
          Sorun devam ederse{' '}
          <a
            href="mailto:06baha06@gmail.com"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            benimle iletişime geçin
          </a>
        </p>
      </div>
    </div>
  );
}