import ProjectCard from "./ProjectCard";
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: "OPTURK",
    description: "Optik form tasarlama ve okuma için React + Node.js ile geliştirilen, web sitesi. 3 arkaş ile birlikte geliştirdiğimiz projede front-end tarafında aktif rol aldım. Backend tarafının gerçeklenmesine yardımcı oldum.",
    link: "https://github.com/06baha06/opturk",
    technologies: ["React", "Node.js"]
  },
  {
    title: "Hastane Randevu Sistemi",
    description: "Hastane Randevu Yönetim Sistemi - ASP.NET Core MVC ile geliştirilmiş, AJAX ile dinamik veri yükleme, Entity Framework ve çok dilli destek içeren full-stack web uygulaması.",
    link: "https://github.com/06baha06/opengl-demos",
    technologies: ["ASP.NET", "C#", "SQL", "Bootstrap"]
  },
  {
    title: "React Native Doktor-Hasta App",
    description: "Hasta immunoglobulin değerlerinin tıbbi kılavuzlara göre analiz edildiği, Firebase tabanlı React Native mobil uygulaması.",
    link: "https://github.com/06baha06/doctor-patient-app",
    technologies: ["React Native", "Expo", "Firebase "]
  },
];
export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-16 bg-black text-white overflow-hidden">
  {/* Arka planda bulanık alanlar */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-20 -left-20"></div>
    <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-40 right-20"></div>
    <div className="absolute w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  </div>

  {/* İçerik (ön planda) */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-10 text-center">Projelerim</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, index) => (
        <AnimatedSection key={p.title} delay={index * 0.1}>
        <ProjectCard key={p.title} project={p} />
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>
  );
}
