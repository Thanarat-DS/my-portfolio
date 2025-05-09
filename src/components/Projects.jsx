const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with React, Node.js, and MySQL.',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website to showcase my work and skills.',
      link: '#'
    },
    {
      title: 'Admin Dashboard',
      description: 'A role-based admin panel built with React and Express.',
      link: '#'
    },
  ];

  return (
    <section id="projects" className="w-full py-20 px-6 md:px-16 bg-[#0a192f]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold border-b-4 border-teal-500 inline-block mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-teal-500/20 transition">
              <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-teal-300 hover:underline">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;