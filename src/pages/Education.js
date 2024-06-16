// src/pages/Education.js
import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const education = [
    {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "University of Liberal Arts Bangladesh",
        duration: "2017 - 2021",
        description: "Relevant courses include Data Structures and Algorithms, Software Engineering, Artificial Intelligence, Machine Learning, and System Design."
    }
];

const Education = () => {
    return (
        <Section id="education" title="Education" icon={<i className="fas fa-graduation-cap"></i>}>
            <EducationGrid>
                {education.map((edu, index) => (
                    <EducationCard key={index}>
                        <CardContent>
                            <h3>{edu.degree}</h3>
                            <h4>{edu.institution}</h4>
                            <p><strong>Duration:</strong> {edu.duration}</p>
                            <p>{edu.description}</p>
                        </CardContent>
                    </EducationCard>
                ))}
            </EducationGrid>
        </Section>
    );
};

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #666;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export default Education;
