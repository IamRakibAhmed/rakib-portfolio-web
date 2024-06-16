import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/Section';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { animationConfig } from "../styles/animations";
import { useMediaQuery } from 'react-responsive';

const experiences = [
    {
        company: "The City Bank PLC",
        role: "Officer, Information Technology (Software Development)",
        period: "Oct 2022 - Present",
        responsibilities: [
            "Spearheaded the development of 'City Bank Live', a digital corporate banking platform, ensuring seamless 24/7 transactions.",
            "Developed payment systems including Customs Duty, Pay Order, Cheque, BEFTN, VAT, and Utility Bill Payment systems.",
            "Engineered Citytouch, enhancing NPSB and BEFTN payment systems for nationwide seamless transactions.",
            "Implemented secure database queries and optimization techniques to enhance database performance.",
            "Led Bancassurance project, implementing secure file transfer to SFTP servers, ensuring data integrity and confidentiality.",
            "Developed Learning Space, an internal video conferencing platform tailored for online education."
        ],
        tech: "Java, Spring Boot, Python, Django, Microservices, REST API, Docker, Oracle, MySQL, React, Git"
    },
    {
        company: "BrightChamps",
        role: "Software Development Engineer",
        period: "Jan 2021 - Sep 2022",
        responsibilities: [
            "Developed and maintained EdTech software systems, ensuring seamless learning experiences.",
            "Conducted R&D to enhance software functionalities, and collaborated in team meetings for optimal solutions.",
            "Optimized existing codebase for performance and scalability, reducing load times by 30%.",
            "Designed and implemented new features based on user feedback, improving user satisfaction by 25%.",
            "Wrote comprehensive unit and integration tests, increasing code coverage and reducing bugs.",
            "Participated in code reviews, providing constructive feedback to improve code quality and maintainability."
        ],
        tech: "Python, Django, Java, Spring Boot, React, MySQL, REST API, Jira, Git"
    },
    {
        company: "University of Liberal Arts Bangladesh",
        role: "Teaching Assistant",
        period: "Feb 2021 - Jun 2022",
        responsibilities: [
            "Assisted course faculty in Object Oriented Programming Lab, Structured Programming Lab, and Programming with Java Lab.",
            "Evaluated coursework, prepared course files, and supported students in understanding complex concepts.",
            "Conducted weekly tutoring sessions to reinforce classroom learning and assist students with assignments.",
            "Developed supplementary learning materials and practice exercises to aid students' comprehension of key topics.",
            "Facilitated lab sessions, ensuring all students had the resources and guidance needed to complete their projects.",
            "Graded assignments and exams, providing detailed feedback to help students improve their understanding and performance."
        ]
    }
];

const Experience = () => {
    const [selected, setSelected] = useState(0);
    const containerRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.minHeight = `${containerRef.current.scrollHeight}px`;
        }
    }, [selected]);

    return (
        <Section id="experience" title="Experience" icon={<i className="fas fa-briefcase"></i>}>
            <Container>
                <CompanyList>
                    {experiences.map((experience, index) => (
                        <React.Fragment key={index}>
                            <CompanyItem
                                onClick={() => setSelected(index)}
                                selected={selected === index}
                                as={motion.li}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CompanyText selected={selected === index}>{experience.company.toUpperCase()}</CompanyText>
                                {!isMobile && selected === index && <ArrowIcon />}
                            </CompanyItem>
                            {index < experiences.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </CompanyList>
                <ExperienceDetails ref={containerRef} as={motion.div} {...animationConfig} viewport={{ once: true }}>
                    <Role>
                        {experiences[selected].role}
                    </Role>
                    <Period>{experiences[selected].period.toUpperCase()}</Period>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <Responsibilities>
                                {experiences[selected].responsibilities.map((responsibility, i) => (
                                    <motion.li key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                                        <IoIosArrowForward /> {responsibility}
                                    </motion.li>
                                ))}
                            </Responsibilities>
                            {experiences[selected].tech && (
                                <TechContainer as={motion.div} {...animationConfig} viewport={{ once: true }}>
                                    {experiences[selected].tech.split(', ').map((tech, index) => (
                                        <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                                            <TechItem>{tech}</TechItem>
                                        </motion.div>
                                    ))}
                                </TechContainer>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </ExperienceDetails>
            </Container>
        </Section>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const CompanyList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: row;
        overflow-x: auto;
        width: 100%;
    }
`;

const CompanyItem = styled(motion.li)`
    padding: 1rem;
    cursor: pointer;
    color: ${props => (props.selected ? '#d69d00' : '#333')};
    background: ${props => (props.selected ? '#f0f0f0' : 'transparent')};
    border-left: 2px solid ${props => (props.selected ? '#d69d00' : 'transparent')};
    transition: background 0.3s, color 0.3s, border-radius 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${props => (props.selected ? '20px' : '0')};

    &:hover {
        background: #e0e0e0;
        border-radius: 20px;
    }

    @media (max-width: 768px) {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        flex: 1;
    }
`;

const CompanyText = styled.span`
    text-align: left;
    flex-grow: 1;
    font-weight: ${props => (props.selected ? '600' : 'normal')};
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const ArrowIcon = styled(FaChevronRight)`
    color: #d69d00;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #ddd;
    margin: 0.5rem 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

const ExperienceDetails = styled(motion.div)`
    flex: 1;
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 8px;
    color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    overflow: hidden;
    transition: height 0.4s ease-in-out;

    @media (max-width: 768px) {
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        flex: 1;
        overflow: hidden;
        min-height: auto;
    }
`;

const Role = styled.div`
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: #d69d00;
    text-align: left;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Period = styled.div`
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
    text-align: left;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 0.875rem;
    }
`;

const Responsibilities = styled.ul`
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    list-style-type: none;
    color: #555;

    li {
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
    }

    svg {
        margin-right: 0.5rem;
        color: #d69d00;
    }

    @media (max-width: 768px) {
        padding-left: 0;
    }
`;

const TechContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (max-width: 768px) {
        gap: 0.25rem;
    }
`;

const TechItem = styled.div`
    background-color: #f0c14b;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
    color: #333;

    @media (max-width: 768px) {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
    }
`;

export default Experience;
