import { useState } from 'react';
import React  from 'react';
import projects from '../data/project'; // Your project data
import './Projects.css'; // Optional for styling
import VideoModal from './VideoModal';

const Projects = () => {
    const[activeVideoId, setActiveVideoId] = useState(null)
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
                        <button onClick={() => setActiveVideoId(project.videoId)} className='veiw-btn'>
                            View Project
                        </button>
                    )}
                </div>
            ))}
        </div>
        <VideoModal
        videoId={activeVideoId} 
        OnClose={() => setActiveVideoId(null)}/>
    </section>
  );
};

export default Projects;