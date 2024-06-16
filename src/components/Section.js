// src/components/Section.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = ({ id, title, icon, children }) => {
    return (
        <SectionContainer id={id}>
            <SectionContent>
                <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Title>
                        {icon && <Icon>{icon}</Icon>}
                        {title}
                    </Title>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                    {children}
                </motion.div>
            </SectionContent>
        </SectionContainer>
    );
};

const SectionContainer = styled.section`
    padding: 4rem 2rem;
    background: ${({ theme }) => (theme.bgColor ? theme.bgColor : '#fff')};
    &:nth-child(even) {
        background: #f9f9f9;
    }

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

const SectionContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Icon = styled.span`
    margin-right: 0.5rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

export default Section;
