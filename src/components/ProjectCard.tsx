type Project = {
  title: string;
  description: string;
  longDescription: string;
  link: string;
  technologies: string[];
  features: string[];
  images?: string[];
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-white/5 backdrop-blur-sm text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:border-blue-400/50 cursor-pointer"
    >
      <h3 className="text-2xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group">
        Detayları Gör
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
      </div>
    </div>
  );
}