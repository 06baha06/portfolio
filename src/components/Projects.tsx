import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "OPTURK",
    description: "Optik form tasarlama ve okuma için React + Node.js tabanlı web uygulaması.",
    link: "https://github.com/06baha06/opturk", 
  },
  {
    title: "OpenGL Grafik Uygulaması",
    description: "C++ ve OpenGL ile 3D şekil çizimleri, shader programlama ve doku yönetimi.",
    link: "https://github.com/06baha06/opengl-demos",
  },
  {
    title: "React Native Doktor-Hasta App",
    description: "Hasta verileri ve tahlil geçmişi saklayan mobil uygulama.",
    link: "https://github.com/06baha06/doctor-patient-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Projelerim</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
