export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* Arka planda animasyonlu blur efektleri */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Ana Loading Spinner */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Dış çember - dönen gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            
            {/* Dönen çember */}
            <div className="relative w-20 h-20 border-4 border-transparent border-t-blue-400 border-r-purple-400 rounded-full animate-spin"></div>
            
            {/* İç nokta */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Yükleniyor
        </h2>
        
        {/* Animasyonlu noktalar */}
        <div className="flex justify-center gap-2 mb-4">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>

        <p className="text-gray-400 text-sm">
          İçerik hazırlanıyor...
        </p>
      </div>
    </div>
  );
}