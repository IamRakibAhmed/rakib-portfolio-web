// src/pages/Achievements.js
import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const achievements = [
    {
        title: "IEEEXtreme 15.0",
        description: "Country Rank: 8 | Global Rank: 271 | Team Name: DisjointSkillUnion",
        date: "Oct 2021"
    },
    {
        title: "International Collegiate Programming Contest - ICPC",
        description: "Regional Participant",
        date: "Oct 2021"
    },
    {
        title: "Google Code Jam",
        description: "Qualification Round Participant",
        date: "Aug 2021"
    },
    {
        title: "CTO Forum Innovation Hackathon",
        description: "Prototype Round Qualifier",
        date: "Sep 2021"
    },
    {
        title: "Google Kick Start, Round F",
        description: "Country Rank: 17 | Global Rank: 1176",
        date: "Sep 2020"
    },
    {
        title: "Facebook Hackercup",
        description: "Qualification Round Participant",
        date: "Jul 2020"
    }
];

const Achievements = () => {
    return (
        <Section id="achievements" title="Achievements" icon={<i className="fas fa-trophy"></i>}>
            <AchievementsGrid>
                {achievements.map((achievement, index) => (
                    <AchievementCard key={index}>
                        <CardContent>
                            <h3>{achievement.title}</h3>
                            <p>{achievement.description}</p>
                            <p><strong>Date:</strong> {achievement.date}</p>
                        </CardContent>
                    </AchievementCard>
                ))}
            </AchievementsGrid>
        </Section>
    );
};

const AchievementsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const AchievementCard = styled(motion.div)`
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
`;

export default Achievements;
