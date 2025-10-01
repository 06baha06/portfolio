type Project = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        className="text-blue-400 hover:underline"
      >
        İncele →
      </a>
    </div>
  );
}
