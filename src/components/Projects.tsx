'use client';

import { useState } from 'react';
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: "OPTURK",
    description: "Optik form tasarlama ve okuma için React + Node.js tabanlı web uygulaması.",
    longDescription: "Eğitim kurumları ve sınav merkezleri için geliştirilmiş, optik formların sıfırdan tasarlanmasını, yazdırılmasını ve otomatik okunmasını sağlayan web tabanlı platform. Kullanıcılar kendi optik form şablonlarını oluşturabilir, öğrenci cevaplarını tarayarak sisteme yükleyebilir ve sonuçları otomatik olarak analiz edebilir.",
    link: "https://github.com/06baha06/optik_okuma_frontend.git",
    technologies: ["React.js", "Node.js", "Tailwind CSS", "React Router", "React Hooks", "Express.js", "MongoDB", "JWT "],
    features: [
      "Özel optik form şablonu hazırlama arayüzü",
      "Sürükle-bırak form editörü: Teknik bilgi gerektirmeden optik form tasarlama",
      "Gerçek zamanlı önizleme: Değişiklikleri anında görme",
      "Çeşitli form elemanları (Ad-soyad, numara, TC kimlik, telefon, çoktan seçmeli, kitapçık kodu)",
      "Superadmin: Sistem geneli yönetim Admin: Okul düzeyinde yönetim Öğretmen: Sınav oluşturma ve değerlendirme",
      "Optik form şablonları sınavlara ve sınıflara özel atanabilir",
      "Sonuçları Excel/PDF olarak export etme",
      "Kullanıcı yönetimi ve yetkilendirme",
      "Responsive tasarım"
    ],
    images: [
      "/projects/op1.png",
      "/projects/op2.png",
      "/projects/op3.png",
      "/projects/op4.png",
      "/projects/op5.png",
      "/projects/op6.png",
      "/projects/op7.png",
      "/projects/op8.png"
    ]
  },
  {
    title: "React Native Doktor-Hasta App",
    description: "Hasta immunoglobulin değerlerinin tıbbi kılavuzlara göre analiz edildiği mobil uygulama.",
    longDescription: "Çocuk hastalara ait immunoglobulin (IgA, IgM, IgG, IgG1-4) değerlerinin yaşa göre referans aralıklarla karşılaştırılmasını sağlayan klinik destek uygulaması. Uygulama, 5 farklı uluslararası tıbbi kılavuzu (CILV, Archives of Pediatrics, Turkish Journal of Pediatrics, TurkJMedSci, OS) eş zamanlı olarak analiz ederek sağlık profesyonellerine kapsamlı değerlendirme imkanı sunar.",
    link: "https://github.com/06baha06/mobiluygulama_tahlil_kontrol_ReactNative.git",
    technologies: ["React Native", "Expo", "Firebase", "Cloud Firestore", "React Redux"],
    features: [
      "Hasta test sonuçlarını kaydetme",
      "Otomatik tıbbi analiz ve raporlama",
      "Çoklu Kılavuz Analizi: Tek bir test değerini 5 farklı kılavuza göre eş zamanlı değerlendirme",
      "Yaş Tabanlı Hesaplama: Ay cinsinden yaş girişi ile otomatik referans aralık eşleştirmesi",
      "Firebase real-time database",
      "Doktor-hasta arayüzleri",
      "Geçmiş kayıt takibi"
    ],
    images: [
      "/projects/reactcolab1.png",
      "/projects/reactcolab2.png",
      "/projects/mobil1.png",
      "/projects/mobil2.png"
    ]
  },
  {
    title: "Hastane Randevu Sistemi",
    description: "Hastane Randevu Yönetim Sistemi - ASP.NET Core MVC ile geliştirilmiş full-stack web uygulaması.",
    longDescription: "Web tabanlı hastane randevu sistemi, hastaların online randevu almasını ve yöneticilerin tüm randevuları merkezi olarak yönetmesini sağlayan ASP.NET Core MVC projesidir. Gerçek zamanlı veri yükleme ve kullanıcı dostu arayüz ile hastane süreçlerini dijitalleştiren bir çözümdür.",
    link: "https://github.com/06baha06/Hastane_Randevu.git",
    technologies: ["ASP.NET Core 6.0 MVC", "C#", "Entity Framework Core", "SQL Server LocalDB", "LINQ", "Razor Pages", "Bootstrap", "jQuery", "AJAX/JSON"],
    features: [
      "Kullanıcı kaydı ve güvenli giriş (TC Kimlik No + Şifre)",
      "Bölüm, doktor ve saat seçerek randevu alma",
      "AJAX ile dinamik dropdown: Bölüm seçilince doktorlar, doktor seçilince müsait saatler otomatik yüklenir",
      "Kendi randevularını görüntüleme",
      "Çok dilli destek (TR/EN)",
      "Güvenli admin paneli girişi",
      "Tüm randevuları listeleme ve görüntüleme",
      "CRUD İşlemleri: Create, Read, Update, Delete",
      "Randevu iptal ve değişiklik işlemleri",
      "Session yönetimi: Güvenli kullanıcı oturumları",
    ],
    images: [
      "/projects/hastane1.png",
      "/projects/hastane2.png",
      "/projects/hastane3.png",
      "/projects/hastane4.png",
      "/projects/hastane5.png"
    ]
  },
  
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="relative min-h-screen py-16 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-20 -left-20 animate-float"></div>
          <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-40 right-20 animate-float-reverse"></div>
          <div className="absolute w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Projelerim</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, index) => (
              <AnimatedSection key={p.title} delay={index * 0.1}>
                <ProjectCard 
                  project={p} 
                  onClick={() => setSelectedProject(p)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}