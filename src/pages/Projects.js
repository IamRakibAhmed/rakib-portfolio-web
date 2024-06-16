// src/pages/Projects.js
import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';

const projects = [
    {
        title: "Bengali Parts-of-Speech Tagger",
        description: "A machine learning project for predicting the parts of speech of a given word or sequence.",
        tech: "Python, Tensorflow, Keras, JavaScript, HTML5, CSS, FastAPI, Heroku"
    },
    {
        title: "Bengali Next Word Prediction",
        description: "A system that predicts the next word of a given word or sequence and completes the whole sentence.",
        tech: "Python, Tensorflow, Keras, JavaScript, HTML5, CSS, FastAPI, Heroku"
    },
    {
        title: "Profile Management System",
        description: "A system for managing user profiles with login, logout, and profile viewing functionalities.",
        tech: "React JS, Spring Boot, MySQL"
    },
    {
        title: "Video Recorder using Webcam",
        description: "A desktop application for recording videos using a webcam and microphone.",
        tech: "C#, OpenCVSharp, BasicAudio, FFMpeg, DirectShowLib"
    }
];

const Projects = () => {
    return (
        <Section id="projects" title="Projects" icon={<i className="fas fa-project-diagram"></i>}>
            <ProjectsGrid>
                {projects.map((project, index) => (
                    <ProjectCard key={index}>
                        <CardContent>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p><strong>Tech:</strong> {project.tech}</p>
                        </CardContent>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
        </Section>
    );
};

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ProjectCard = styled.div`
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
`;

const CardContent = styled.div`
    padding: 1.5rem;

    h3 {
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.4;
    }
`;

export default Projects;
