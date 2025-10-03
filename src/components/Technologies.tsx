import AnimatedSection from '@/components/AnimatedSection';

export default function Technologies() {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "C#", ".NET Framework", "Express.js"]
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "Firebase"]
    },
    {
      category: "Diğer",
      items: ["OpenGL", "Git", "React Native", "REST API"]
    }
  ];

  return (
    <section id="technologies" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-16">
      {/* Arka planda bulanık alanlar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-20 -right-20 animate-float"></div>
        <div className="absolute w-80 h-80 bg-purple-500/15 rounded-full blur-3xl bottom-20 -left-20 animate-float-reverse"></div>
      </div>

      <AnimatedSection>
        {/* İçerik */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Teknolojiler & Yetenekler</h2>
          <p className="text-gray-400 text-center mb-12">
            Çalıştığım teknolojiler ve araçlar
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.category}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all hover:-translate-y-2"
              >
                {/* Kategori Başlığı */}
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  {tech.category}
                </h3>

                {/* Teknoloji Listesi */}
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-300 text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}