import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaStar } from 'react-icons/fa';

// Entrance animation
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

// Animated border gradient
const borderAnim = keyframes`
  0% { border-image-source: linear-gradient(120deg, #00f2fe, #4facfe, #43e97b, #fa709a); }
  50% { border-image-source: linear-gradient(300deg, #fa709a, #fee140, #00f2fe, #43e97b); }
  100% { border-image-source: linear-gradient(120deg, #00f2fe, #4facfe, #43e97b, #fa709a); }
`;

// Sparkle animation
const sparkleAnim = keyframes`
  0%, 100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.3) rotate(20deg); }
`;

const CardSparkle = styled.span`
  position: absolute;
  top: 12px; right: 18px;
  font-size: 1.3rem;
  color: #fff;
  opacity: 0.7;
  pointer-events: none;
  filter: drop-shadow(0 0 8px #00f2fe);
  animation: ${sparkleAnim} 2.5s infinite;
  transition: opacity 0.3s, transform 0.3s;
`;

const CardContainer = styled.div`
  background: rgba(34, 40, 49, 0.55);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.22), 0 0 0 2px #00f2fe33;
  padding: 36px 28px;
  margin: 18px;
  max-width: 370px;
  min-width: 260px;
  color: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  backdrop-filter: blur(12px) saturate(1.3);
  border: 3px solid transparent;
  border-image: linear-gradient(120deg, #00f2fe, #4facfe, #43e97b, #fa709a) 1;
  animation: ${fadeInUp} 0.8s cubic-bezier(.23,1.02,.32,1) both, ${borderAnim} 8s linear infinite;
  transition: box-shadow 0.35s, transform 0.35s, background 0.35s, border-image-source 0.5s;
  cursor: pointer;
  will-change: transform, box-shadow, background;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 16px 48px 0 #00f2fe99, 0 0 0 8px #4facfe55;
    background: linear-gradient(120deg, rgba(0,242,254,0.13) 0%, rgba(250,112,154,0.10) 100%), rgba(34,40,49,0.75);
    transform: translateY(-10px) scale(1.045) rotate(-2deg) skewY(-1deg);
    border-image: linear-gradient(300deg, #fa709a, #fee140, #00f2fe, #43e97b) 1;
    & > span[data-sparkle] {
      opacity: 1;
      transform: scale(1.25) rotate(-10deg);
      filter: drop-shadow(0 0 16px #fa709a);
    }
    &::after {
      opacity: 0.18;
      transform: scale(1.1);
    }
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: radial-gradient(circle at 80% 20%, #00f2fe33 0%, transparent 70%),
                radial-gradient(circle at 20% 80%, #fa709a33 0%, transparent 70%);
    opacity: 0.12;
    pointer-events: none;
    transition: opacity 0.4s, transform 0.4s;
    z-index: 0;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    min-width: 0;
    width: 100%;
    margin: 10px 0;
    padding: 22px 12px;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 16px 12px;
    font-size: 0.98rem;
    min-width: unset;
  }
  @media (max-width: 400px) {
    padding: 12px 8px;
    min-width: unset;
  }
  @media (max-width: 320px) {
    padding: 10px 6px;
  }
`;

const CardTitle = styled.h3`
  color: #fff;
  margin-bottom: 15px;
  font-size: 1.32rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-shadow: 0 2px 12px ${({ bgGradient }) => bgGradient || '#00f2fe'}44;
  z-index: 1;
`;

const CardContent = styled.div`
  color: #e0eafc;
  font-size: 1.11rem;
  z-index: 1;
`;

const Card = ({ title, children, bgGradient }) => (
  <CardContainer bgGradient={bgGradient}>
    <CardSparkle data-sparkle><FaStar /></CardSparkle>
    <CardTitle bgGradient={bgGradient}>{title}</CardTitle>
    <CardContent>{children}</CardContent>
  </CardContainer>
);

export default Card; 