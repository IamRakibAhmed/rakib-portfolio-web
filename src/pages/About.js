import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import styled from 'styled-components';
import aboutPhoto from '../assets/about-photo.jpeg';
import { animationConfig, textAnimationConfig } from "../styles/animations";
import {IoIosArrowForward} from "react-icons/io";

const About = () => {
    return (
        <Section id="about" title="About Me" icon={<i className="fas fa-user"></i>}>
            <AboutContent>
                <AboutText as={motion.div} {...textAnimationConfig} viewport={{ once: true }}>
                    <p>
                        I am currently a <span>Software Engineer</span> with over 3 years of experience, specializing in Microservices, Java, Spring Boot, Python, Django, and QA Automation.
                        I have a solid educational foundation in Computer Science and Engineering from the
                        <span> University of Liberal Arts Bangladesh</span>. My experience spans working on projects such as microservices architecture and Natural Language Processing (NLP) solutions.
                    </p>
                    <ModernText>
                        <IoIosArrowForward />Key Technologies I have been working with:
                    </ModernText>
                    <TechList>
                        <TechItem>Python</TechItem>
                        <TechItem>Java</TechItem>
                        <TechItem>Spring Boot</TechItem>
                        <TechItem>PyTorch</TechItem>
                        <TechItem>React.js</TechItem>
                        <TechItem>REST API</TechItem>
                        <TechItem>DBMS</TechItem>
                        <TechItem>Selenium</TechItem>
                    </TechList>
                    <p>
                        <br/>Outside of work, I’m interested in following the developments of science. I also love to travel and explore the beauty of this world.
                    </p>
                </AboutText>
                <AboutImage as={motion.img} {...animationConfig} src={aboutPhoto} alt="Rakib Ahmed" viewport={{ once: true }} />
            </AboutContent>
        </Section>
    );
};

const AboutContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const AboutText = styled.div`
    flex: 1;
    text-align: justify;
    padding: 1rem;
    font-size: 1.1rem;
    line-height: 1.6;

    p {
        margin-bottom: 1.5rem;
    }

    span {
        font-weight: bold;
        color: #d69d00;
    }

    svg {
        margin-right: 0.5rem;
        color: #d69d00;
    }

    @media (max-width: 768px) {
        text-align: justify;
        padding: 1rem 0;
    }
`;

const AboutImage = styled.img`
    flex: 1;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    margin: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        margin: 1rem auto;
    }
`;

const ModernText = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: #4a4a4a;
    margin-bottom: 1.5rem;
`;

const TechList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const TechItem = styled.li`
    background-color: #f0c14b;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 0.9rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export default About;
