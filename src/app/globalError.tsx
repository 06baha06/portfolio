'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Kritik hata loglaması
    console.error('Global critical error:', error);
  }, [error]);

  return (
    <html lang="tr">
      <body className="bg-black text-white">
        <div className="min-h-screen flex items-center justify-center px-6">
          {/* Arka planda blur efektleri */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="absolute w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="absolute w-80 h-80 bg-orange-600/15 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-2xl text-center">
            {/* Kritik Hata İkonu */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/40 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-red-600 to-orange-600 w-32 h-32 rounded-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Başlık */}
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Kritik Hata!
            </h1>

            {/* Açıklama */}
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Beklenmeyen bir sistem hatası oluştu. Uygulama yeniden başlatılması gerekiyor.
              <br />
              Lütfen sayfayı yenileyin.
            </p>

            {/* Hata Detayı */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-8 bg-red-950/30 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-left">
                <h3 className="text-red-400 font-semibold mb-2 text-sm">
                  Kritik Hata Detayı (Dev Mode):
                </h3>
                <p className="text-gray-400 text-sm font-mono break-all">
                  {error.message || 'Bilinmeyen kritik hata'}
                </p>
                {error.digest && (
                  <p className="text-gray-500 text-xs mt-2">Digest: {error.digest}</p>
                )}
              </div>
            )}

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></span>
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
                  Uygulamayı Yeniden Başlat
                </span>
              </button>

              <button
                onClick={() => window.location.reload()}
                className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-red-400/50 rounded-xl font-semibold transition-all hover:scale-105"
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Sayfayı Yenile
                </span>
              </button>
            </div>

            {/* Destek Bilgisi */}
            <div className="mt-8 text-gray-500 text-sm">
              <p>
                Sorun devam ederse lütfen{' '}
                <a
                  href="mailto:06baha06@gmail.com"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  06baha06@gmail.com
                </a>{' '}
                adresinden iletişime geçin.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}