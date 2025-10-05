import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      {/* Arka planda blur efektleri */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        {/* 404 Animasyonu */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            404
          </h1>
        </div>

        {/* Başlık */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sayfa Bulunamadı
        </h2>

        {/* Açıklama */}
        <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen URLyi kontrol edin
          veya ana sayfaya dönün.
        </p>

        {/* İllüstrasyon/İkon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 w-32 h-32 rounded-full flex items-center justify-center">
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
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl font-semibold transition-all hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></span>
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

          <button
            onClick={() => window.history.back()}
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Geri Dön
            </span>
          </button>
        </div>

        {/* Popüler Linkler */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-4">Popüler Bölümler</h3>
          <ul className="space-y-2">
            {[
              { href: '/#about', label: 'Hakkımda', icon: '👤' },
              { href: '/#technologies', label: 'Teknolojiler', icon: '🛠️' },
              { href: '/#projects', label: 'Projeler', icon: '💼' },
              { href: '/#contact', label: 'İletişim', icon: '📧' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  <svg
                    className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}