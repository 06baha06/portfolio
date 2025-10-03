import AnimatedSection from './AnimatedSection';
export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-16">
      {/* Arka planda bulanık alanlar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl  right-20 animate-float"></div>
        <div className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-3xl bottom-20 -left-20 animate-float-reverse"></div>
      </div>
     <AnimatedSection>
      {/* İçerik */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Hakkımda</h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition-all">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Merhaba! Ben <span className="text-blue-400 font-semibold">Baha Yıldız</span>. 
           Bilgisayar Mühendisliği mezunuyum ve frontend geliştirmeye özellikle ilgi duyuyorum.
            Modern ve işlevsel kullanıcı arayüzleri oluşturmayı seviyorum.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hem frontend hem backend geliştirme konusunda deneyime sahibim. 
            <span className="text-blue-400"> React, JavaScript, TypeScript, C# ve .NET </span> ve <span className="text-blue-400">.NET </span>frameworkleriyle çalıştım.
            <span className="text-blue-400"> MySQL  </span> ve <span className="text-blue-400"> PostgreSQL</span> ile veritabanı yönetimi konusunda da tecrübem bulunuyor.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Tasarım ve işlevselliğe aynı derecede önem veren, detaylara dikkat eden bir 
            geliştiriciyim. Problem çözmeyi, ekip çalışmasını ve birlikte üretmeyi önemsiyorum. 
            Yazılım geliştirme alanında öğrenmeye ve kendimi geliştirmeye her zaman açığım.
          </p>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
}