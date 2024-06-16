import { keyframes } from 'styled-components';

export const typing = keyframes`
    from { width: 0; }
    to { width: 100%; }
`;

export const blink = keyframes`
    from, to { border-color: transparent; }
    50% { border-color: black; }
`;

export const wave = keyframes`
    0%, 100% { transform: rotate(0deg); }
    20%, 60% { transform: rotate(-25deg); }
    40%, 80% { transform: rotate(10deg); }
`;

export const animationConfig = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 }
};

export const textAnimationConfig = {
    ...animationConfig,
    initial: { ...animationConfig.initial, x: -100 }
};
