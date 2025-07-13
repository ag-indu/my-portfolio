import React from 'react'
import projectData from '../Data/projects.json';

const Project = () => {
  return (
    <div className="projects page-wrapper">
      <h1><span className="highlighted-name">Projects</span> I've Built</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={`/assets/projects/${project.image}`} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-pill">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project
