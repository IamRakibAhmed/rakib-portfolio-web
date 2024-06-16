import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile-photo.JPG';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { typing, blink, wave } from '../components/animations';

const Home = () => {
    return (
        <HomePage id="home">
            <Content>
                <ProfileImage src={profilePhoto} alt="Rakib Ahmed" />
                <Intro>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <TypingText>
                            hi, rakib here ...
                            <WaveIcon role="img" aria-label="wave">👋&nbsp;</WaveIcon>
                        </TypingText>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
                        Software Engineer | FinTech Solutions | AI & ML Enthusiast
                    </motion.p>
                    <SocialLinks />
                </Intro>
            </Content>
        </HomePage>
    );
};

const HomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    position: relative;
`;

const Content = styled.div`
    text-align: center;
`;

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 5px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Intro = styled.div`
    color: #fff;
`;

const TypingText = styled.span`
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 4px solid;
    font-size: 2rem;
    animation: ${typing} 2s steps(40, end), ${blink} 1s step-end infinite;
    font-family: 'JetBrains Mono', monospace;
    max-width: fit-content;
    width: 100%;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const WaveIcon = styled.span`
    display: inline-block;
    animation: ${wave} 1.5s infinite;
    margin-left: 0.5rem;
    font-size: 2rem;
`;

const SocialLinks = () => (
    <SocialLinksContainer>
        <a href="https://linkedin.com/in/iamrakibahmed" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://github.com/IamRakibAhmed" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="mailto:rakibofficial@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
        </a>
    </SocialLinksContainer>
);

const SocialLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
        color: #fff;
        font-size: 1.5rem;
        &:hover {
            color: #f0c14b;
        }
    }
`;

export default Home;
