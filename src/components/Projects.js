import React, { useState } from 'react';
import './Projects.css';
import Modal from './Modal';

const projectData = [
    {
        name: 'Project 1',
        description: 'Description for Project 1.',
        repoLink: 'https://github.com/project1'
    },
    {
        name: 'Project 2',
        description: 'Description for Project 2.',
        repoLink: 'https://github.com/project2'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onClick={() => openModal(project)}
                    >
                        <h3>{project.name}</h3>
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
        </section>
    );
};

export default Projects;