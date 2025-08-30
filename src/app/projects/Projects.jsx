
const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with payment integration",
    image: "/api/placeholder/400/300",
    tech: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool",
    image: "/api/placeholder/400/300",
    tech: ["React", "Express", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio with modern design",
    image: "/api/placeholder/400/300",
    tech: ["Next.js", "CSS3", "JavaScript"],
  },
];
export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My best projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder"></div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
