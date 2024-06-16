// src/pages/Skills.js
import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const skills = {
    "Programming Languages": ["C", "C++", "C#", "Python", "Java", "JavaScript"],
    "Web Technologies": ["Django", "Microservices", "Spring Boot", "Spring MVC", "Maven", "Hibernate", "React", "REST API", "SOAP API", "React JS"],
    "Machine Learning Technologies": ["Scikit-learn", "NLTK", "SpaCy", "Tensorflow", "Keras", "PyTorch", "Numpy", "Pandas"],
    "API Security": ["OAuth2", "JWT", "HTTPS"],
    "Databases": ["MongoDB", "Oracle", "PostgreSQL", "MySQL", "SQLite"],
    "Other Tools/Technologies": ["Selenium", "Kafka", "RabbitMQ", "Kubernetes", "Docker", "Postman", "SOAP UI", "Tomcat", "Git", "Jira", "LaTeX"]
};

const Skills = () => {
    return (
        <Section id="skills" title="Skills" icon={<i className="fas fa-code"></i>}>
            <SkillsGrid>
                {Object.keys(skills).map((category, index) => (
                    <SkillCategory key={index}>
                        <motion.h3 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            {category}
                        </motion.h3>
                        <SkillItems>
                            {skills[category].map((skill, i) => (
                                <SkillItem key={i}>
                                    {skill}
                                </SkillItem>
                            ))}
                        </SkillItems>
                    </SkillCategory>
                ))}
            </SkillsGrid>
        </Section>
    );
};

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const SkillCategory = styled(motion.div)`
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    h3 {
        margin-bottom: 1rem;
    }
`;

const SkillItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
`;

const SkillItem = styled.span`
    padding: 0.5rem 1rem;
    background: #FFBE24;
    color: #000;
    border-radius: 4px;
    font-size: 0.875rem;
`;

export default Skills;
