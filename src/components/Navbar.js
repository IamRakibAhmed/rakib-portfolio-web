// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

const activeColor = "#FFBE24";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'publications', 'achievements', 'contact'];
        const scrollPos = window.scrollY + window.innerHeight / 2;

        for (let section of sections) {
            const element = document.getElementById(section);
            if (element && element.offsetTop <= scrollPos && element.offsetTop + element.offsetHeight > scrollPos) {
                setActiveSection(section);
                break;
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Set initial active section on load
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isHome = activeSection === 'home';

    return (
        <Nav isHome={isHome}>
            <Logo to="home" smooth duration={1000}>
                <span style={{ color: activeColor }}>Rakib</span> Ahmed
            </Logo>
            <Hamburger onClick={toggleMenu}>
                {isOpen ? <FiX /> : <FiMenu />}
            </Hamburger>
            <NavLinks isOpen={isOpen}>
                {['home', 'about', 'experience', 'education', 'skills', 'projects', 'publications', 'achievements', 'contact'].map((section) => (
                    <NavLink
                        key={section}
                        to={section}
                        smooth
                        duration={1000}
                        onClick={toggleMenu}
                        active={activeSection === section}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </NavLink>
                ))}
            </NavLinks>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: ${({ isHome }) => (isHome ? 'transparent' : 'rgba(51, 51, 51, 0.8)')}; /* Adjusted transparency */
    color: #fff;
    z-index: 1000;
    transition: background 0.3s;
`;

const Logo = styled(ScrollLink)`
    font-size: 1.5rem;
    font-weight: 900;
    font-family: 'Nunito', sans-serif;
    color: #fff;
    cursor: pointer;

    span {
        color: ${activeColor};
    }
`;

const Hamburger = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: #333;
        padding: 1rem 0;
    }
`;

const NavLink = styled(ScrollLink)`
    color: ${({ active }) => (active ? '#FFBE24' : '#fff')};
    cursor: pointer;
    padding: 0.5rem 1rem; /* Adjust padding for spacing */
    &:hover {
        color: #FFBE24;
    }

    @media (max-width: 768px) {
        padding-left: 2rem; /* Additional left padding for hamburger menu items */
    }
`;

export default Navbar;
