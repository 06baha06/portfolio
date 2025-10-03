import AnimatedSection from '@/components/AnimatedSection';
// react-icons'tan gerçek teknoloji logoları
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiSharp,
  SiDotnet,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiRedux
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { BiCodeAlt } from 'react-icons/bi';

export default function Technologies() {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
        { name: "C#", icon:   SiSharp, color: "#239120" },
        { name: ".NET Core", icon: SiDotnet, color: "#512BD4" }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
      ]
    },
    {
      category: "Mobile & Tools",
      items: [
        { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "JWT", icon: BiCodeAlt, color: "#000000" },
        { name: "Git", icon: SiGit, color: "#F05032" }
      ]
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
            Projelerimde kullandığım teknolojiler ve araçlar
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

                {/* Teknoloji Listesi - Grid Layout */}
                <div className="grid grid-cols-2 gap-3">
                  {tech.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="group flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover:scale-105 cursor-default"
                        title={item.name}
                      >
                        {/* Teknoloji İkonu */}
                        <Icon 
                          className="w-8 h-8 mb-2 transition-all group-hover:scale-110"
                          style={{ color: item.color }}
                        />
                        {/* Teknoloji İsmi */}
                        <span className="text-xs text-gray-300 text-center group-hover:text-white transition-colors leading-tight">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}