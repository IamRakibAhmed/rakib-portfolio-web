// src/components/RocketLoader.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const RocketLoader = () => {
    return (
        <LoaderWrapper>
            <Rocket>
                <RocketBody>
                    <RocketFinLeft />
                    <RocketFinRight />
                    <RocketWindow />
                </RocketBody>
                <Flames>
                    <Flame />
                    <Flame />
                    <Flame />
                </Flames>
                <Exhaust>
                    <ExhaustSmoke />
                    <ExhaustSmoke />
                    <ExhaustSmoke />
                </Exhaust>
            </Rocket>
        </LoaderWrapper>
    );
};

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #282c34;
`;

const rocketLaunch = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Rocket = styled.div`
    position: relative;
    width: 50px;
    height: 100px;
    animation: ${rocketLaunch} 2s infinite;
`;

const RocketBody = styled.div`
    position: relative;
    width: 50px;
    height: 100px;
    background: #ff6f61;
    border-radius: 50% 50% 0 0;
`;

const RocketFinLeft = styled.div`
    position: absolute;
    bottom: 10px;
    left: -20px;
    width: 20px;
    height: 30px;
    background: #ff6f61;
    border-radius: 50% 50% 0 0;
    transform: rotate(-30deg);
`;

const RocketFinRight = styled.div`
    position: absolute;
    bottom: 10px;
    right: -20px;
    width: 20px;
    height: 30px;
    background: #ff6f61;
    border-radius: 50% 50% 0 0;
    transform: rotate(30deg);
`;

const RocketWindow = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    transform: translateX(-50%);
`;

const flameAnimation = keyframes`
    0% {
        height: 10px;
        opacity: 0.8;
    }
    50% {
        height: 20px;
        opacity: 1;
    }
    100% {
        height: 10px;
        opacity: 0.8;
    }
`;

const Flames = styled.div`
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Flame = styled.div`
  width: 10px;
  height: 10px;
  background: #ff9a00;
  border-radius: 50%;
  margin-bottom: 5px;
  animation: ${flameAnimation} 0.5s infinite;
`;

const Exhaust = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const smokeAnimation = keyframes`
  0% {
    opacity: 0.8;
    transform: translateY(0);
  }
  50% {
    opacity: 0.4;
    transform: translateY(-10px);
  }
  100% {
    opacity: 0.8;
    transform: translateY(0);
  }
`;

const ExhaustSmoke = styled.div`
  width: 20px;
  height: 20px;
  background: #ccc;
  border-radius: 50%;
  margin-bottom: 5px;
  animation: ${smokeAnimation} 1s infinite;
`;

export default RocketLoader;
