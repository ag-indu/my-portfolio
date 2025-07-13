import React from 'react';
import projectData from '../Data/projects.json';

const Project = () => {
  return (
    <section className="page-wrapper pt-20 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          <span className="text-sky-400">Projects</span> I’ve Built
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-xl p-5 shadow-md hover:scale-[1.02] transition-transform"
            >
              <img
                src={`/assets/projects/${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-sky-500 text-xs px-2 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 hover:underline text-sm font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
