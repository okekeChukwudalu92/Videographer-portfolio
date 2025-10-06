import React from 'react';
import projects from '../data/project'; // Your project data
import './Projects.css'; // Optional for styling

const Projects = () => {
  return (
    <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Tools:</strong> {project.tools}</p>
                    {project.link && (
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            View Project
                        </a>
                    )}
                </div>
            ))}
        </div>
    </section>
  );
};

export default Projects;