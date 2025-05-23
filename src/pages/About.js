import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCode } from 'react-icons/fa';

const sectionBG = 'rgba(24,26,27,0.98)';
const accent = 'linear-gradient(90deg, #00f2fe 0%, #4facfe 100%)';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const floatCode = keyframes`
  0% { transform: translateY(120vh) scale(0.8) rotate(0deg); opacity: 0.18; }
  50% { opacity: 0.32; }
  100% { transform: translateY(-10vh) scale(1.1) rotate(360deg); opacity: 0.18; }
`;

const FloatingCode = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  span {
    position: absolute;
    color: #00f2fe;
    font-size: 2.2rem;
    opacity: 0.18;
    animation: ${floatCode} 12s linear infinite;
    will-change: transform;
  }
`;

const AboutContainer = styled.div`
  padding: 120px 0 60px 0;
  background: linear-gradient(180deg, rgba(24,26,27,1) 0%, rgba(36,37,38,1) 100%);
  min-height: calc(100vh - 140px);
  position: relative;
  overflow: hidden;
  @media (max-width: 600px) {
    padding: 60px 0 40px 0;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.8s both;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 300px;
  color: #e0eafc;
  font-size: 1.1rem;
  line-height: 1.7;
  animation: ${fadeIn} 1s both;

  h2 {
    color: #fff;
    font-size: 2.2rem;
    margin-bottom: 20px;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0,0,0,0.1);

    @media (max-width: 600px) {
      font-size: 1.8rem;
    }
  }

  p {
    margin-bottom: 15px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 250px;
  max-width: 400px; /* Adjust based on desired maximum size */
  width: 100%;
  border-radius: 15px;
  overflow: hidden; /* Ensure image zoom/crop is contained */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(24,26,27,0.98) 0%, rgba(24,26,27,0.8) 30%, transparent 60%);
    pointer-events: none;
    z-index: 1; /* Ensure overlay is above the image */
  }

  @media (max-width: 900px) {
    order: -1; /* Place image above text on smaller screens */
    max-width: 300px;
    &::before {
      background: linear-gradient(to bottom, rgba(24,26,27,0.98) 0%, rgba(24,26,27,0.8) 30%, transparent 60%);
    }
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%; /* Set height to 100% of container for object-fit to work effectively */
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2), 0 0 16px rgba(0,242,254,0.2);
  object-fit: cover;
  object-position: 50% 15%; /* Shift the image up to crop more from the bottom */
  transform: scale(1.3); /* Zoom out slightly */
  transition: transform 0.5s ease-in-out;
`;

const About = () => (
  <AboutContainer>
    <FloatingCode>
      <span style={{left:'15%', animationDelay:'0s'}}>&lt;/&gt;</span>
      <span style={{left:'40%', animationDelay:'2s'}}>&#123; &#125;</span>
      <span style={{left:'70%', animationDelay:'1s'}}>&lt;?php</span>
      <span style={{left:'25%', animationDelay:'3s'}}>&#91; &#93;</span>
      <span style={{left:'80%', animationDelay:'4s'}}>&lt;div&gt;</span>
      <span style={{left:'55%', animationDelay:'5s'}}>&lt;h1&gt;</span>
    </FloatingCode>
    <AboutContent>
      <TextContent>
        <h2>About Me</h2>
        <p>Write a brief introduction about yourself here. Talk about your background, passion for software engineering and Laravel development, and what drives you.</p>
        <p>Mention your key skills and areas of expertise, perhaps referencing the technologies you specialize in (PHP, Laravel, React, APIs, databases, DevOps, etc.).</p>
        <p>You can also include a sentence or two about your work philosophy, what you look for in projects, or your goals as a developer.</p>
        <p>Feel free to expand on your experience, highlighting significant achievements or types of projects you enjoy working on.</p>
        <p>This section should give visitors a good sense of who you are as a professional.</p>
      </TextContent>
      <ImageContainer>
        {/* Replace the src with the path to your image file */}
        {/* For example: src="/images/noman-ahmad.png" */}
        {/* Make sure to place your image in the `public/images` directory */}
        <StyledImage src="/my-image.png" alt="Your Name" />
      </ImageContainer>
    </AboutContent>
  </AboutContainer>
);

export default About; 