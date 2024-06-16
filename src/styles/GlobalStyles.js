// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    body {
        background-color: #f5f5f5;
        color: #333;
        line-height: 1.6;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1, h2, h3 {
        margin-bottom: 1rem;
        font-weight: bold;
    }

    p {
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    li {
        margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }
    }
`;

export default GlobalStyles;
