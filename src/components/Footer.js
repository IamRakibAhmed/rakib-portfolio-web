// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <Copyright>
                &copy; {new Date().getFullYear()} Rakib Ahmed. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    padding: 2rem 0;
    background-color: #333;
    color: #fff;
    text-align: center;
`;

const Copyright = styled.p`
    margin: 0;
`;

export default Footer;
