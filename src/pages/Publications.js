// src/pages/Publications.js
import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const publications = [
    {
        title: "A Deep Learning based approach for predicting the next word towards sentence completion & determining parts of speech with morphosyntactic features of the Bengali Language",
        description: "The study uses a 78 thousand token hand-annotated corpus and a tagset of 31 tags.",
        supervisor: "Bijan Paul",
        status: "Submitted" // Change here
    },
    {
        title: "Smart System to Reduce High Beam Glare",
        description: "7th Edition of ICT for Sustainable Development (ICT4SD) 2022, Scopus indexed publication.",
        publisher: "Springer Nature",
        link: "https://doi.org/10.1007/978-981-19-5224-1_37"
    }
];

const Publications = () => {
    return (
        <Section id="publications" title="Publications" icon={<i className="fas fa-book"></i>}>
            <PublicationsGrid>
                {publications.map((pub, index) => (
                    <PublicationCard key={index}>
                        <CardContent>
                            <h3>{pub.title}</h3>
                            <p>{pub.description}</p>
                            <p><strong>Supervisor:</strong> {pub.supervisor}</p>
                            {pub.publisher && <p><strong>Publisher:</strong> {pub.publisher}</p>}
                            {pub.link ? (
                                <a href={pub.link} target="_blank" rel="noopener noreferrer">Read More</a>
                            ) : (
                                <p><strong>Status:</strong> {pub.status}</p>
                            )}
                        </CardContent>
                    </PublicationCard>
                ))}
            </PublicationsGrid>
        </Section>
    );
};

const PublicationsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const PublicationCard = styled(motion.div)`
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

    p {
        font-size: 1rem;
        line-height: 1.4;
    }

    a {
        color: #007bff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

export default Publications;
