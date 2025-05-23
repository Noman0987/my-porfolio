import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0,242,254,0.2); }
  50% { box-shadow: 0 0 20px 4px rgba(0,242,254,0.3); }
  100% { box-shadow: 0 0 0 0 rgba(0,242,254,0.2); }
`;

const shine = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: ${props => props.isTech ? '280px' : '520px'};
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: ${props => props.isTech ? '240px' : '480px'};
    padding: 0 15px;
  }
  @media (max-width: 480px) {
    height: ${props => props.isTech ? '220px' : '420px'};
    padding: 0 10px;
  }
  @media (max-width: 360px) {
    padding: 0 5px;
    min-width: 0;
  }
`;

const ContentBG = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(24,26,27,0.98) 0%, rgba(36,37,38,0.95) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 30px;
  border: 1px solid rgba(0,242,254,0.15);
  box-shadow: 
    0 20px 60px rgba(0,0,0,0.3),
    0 0 0 1px rgba(0,242,254,0.1),
    inset 0 0 40px rgba(0,242,254,0.05);
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(0,242,254,0.1) 50%,
      transparent 100%
    );
    background-size: 200% 200%;
    animation: ${shine} 8s linear infinite;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
  @media (max-width: 360px) {
    padding: 15px;
    min-width: 0;
  }
`;

const ContentItem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.active ? 1 : 0};
  transform: ${props => props.active ? 'scale(1) translateZ(0)' : 'scale(0.9) translateZ(-50px)'};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${props => props.active ? fadeIn : 'none'} 0.8s ease-out;
  will-change: transform, opacity;
  backface-visibility: hidden;
  box-sizing: border-box;

  > div {
    width: 100%;
    max-width: ${props => props.isTech ? '280px' : '800px'};
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    position: relative;
    z-index: 2;
    animation: ${props => props.active ? float : 'none'} 6s ease-in-out infinite;
    box-sizing: border-box;

    @media (max-width: 768px) {
      > div {
        max-width: ${props => props.isTech ? '240px' : '600px'};
      }
    }
    @media (max-width: 480px) {
      > div {
        max-width: ${props => props.isTech ? '220px' : '400px'};
      }
    }
    @media (max-width: 360px) {
      > div {
         max-width: ${props => props.isTech ? '180px' : '300px'};
      }
    }
  }

  @media (max-width: 768px) {
    > div {
      max-width: ${props => props.isTech ? '240px' : '600px'};
    }
  }
  @media (max-width: 480px) {
    > div {
      max-width: ${props => props.isTech ? '220px' : '400px'};
    }
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0,242,254,0.1);
  border: 1px solid rgba(0,242,254,0.2);
  color: #00f2fe;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 3;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  box-sizing: border-box;

  &:hover {
    background: rgba(0,242,254,0.15);
    transform: translateY(-50%) scale(1.05);
    border-color: rgba(0,242,254,0.3);
    box-shadow: 0 0 20px rgba(0,242,254,0.3);
    animation: ${pulse} 2s infinite;
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    &.prev {
      left: 10px;
    }
    &.next {
      right: 10px;
    }
  }
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
    &.prev {
      left: 5px;
    }
    &.next {
      right: 5px;
    }
  }
  @media (max-width: 360px) {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
    &.prev {
      left: 2px;
    }
    &.next {
      right: 2px;
    }
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
  background: rgba(34, 40, 49, 0.8);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(0,242,254,0.1);
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 6px 10px;
  }
  @media (max-width: 360px) {
    padding: 4px 8px;
    gap: 8px;
  }
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#00f2fe' : 'rgba(0,242,254,0.2)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: ${props => props.active ? 'scale(1.2)' : 'scale(1)'};
  box-shadow: ${props => props.active ? '0 0 10px rgba(0,242,254,0.3)' : 'none'};

  &:hover {
    background: ${props => props.active ? '#00f2fe' : 'rgba(0,242,254,0.3)'};
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0,242,254,0.3);
  }
`;

const AnimatedContent = ({ items, renderItem, isTech = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
  }, [items.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setIsAutoPlaying(false);
  }, [items.length]);

  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(handleNext, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  return (
    <ContentWrapper isTech={isTech}>
      <ContentBG />
      <ContentContainer>
        {items.map((item, index) => (
          <ContentItem 
            key={index} 
            active={index === currentIndex}
            isTech={isTech}
          >
            <div>
              {renderItem(item)}
            </div>
          </ContentItem>
        ))}
      </ContentContainer>
      <NavigationButton className="prev" onClick={handlePrev}>
        <FaChevronLeft />
      </NavigationButton>
      <NavigationButton className="next" onClick={handleNext}>
        <FaChevronRight />
      </NavigationButton>
      <DotsContainer>
        {items.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </ContentWrapper>
  );
};

export default React.memo(AnimatedContent); 