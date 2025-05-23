import React from 'react';
import styled, { keyframes } from 'styled-components';
import Card from '../components/Card';
import { FaCode } from 'react-icons/fa';

const sectionBG = 'rgba(24,26,27,0.98)';
const gradients = [
  'linear-gradient(135deg, #ff512f 0%, #dd2476 100%)',
  'linear-gradient(135deg, #36d1c4 0%, #1e3799 100%)',
  'linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%)',
  'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
];

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
    animation: ${floatCode} 8s linear infinite;
  }
`;

const SkillsContainer = styled.div`
  padding: 60px 0 40px 0;
  background: ${sectionBG};
  min-height: calc(100vh - 140px);
  @media (max-width: 600px) {
    padding: 36px 0 24px 0;
  }
`;

const SkillsTitle = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 40px;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 2px 12px rgba(0,0,0,0.18);
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 18px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 0 15px;
  }
  @media (max-width: 600px) {
    gap: 10px;
    padding: 0 10px;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  color: #e0eafc;
  margin: 10px 0;
  padding: 8px 0;
  border-bottom: 1px solid #232526;
  &:last-child { border-bottom: none; }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin: 6px 0;
    padding: 6px 0;
  }
`;

const Skills = () => (
  <SkillsContainer style={{position:'relative'}}>
    <FloatingCode>
      <span style={{left:'10%', animationDelay:'0s'}}>&lt;/&gt;</span>
      <span style={{left:'30%', animationDelay:'2s'}}>&#123; &#125;</span>
      <span style={{left:'60%', animationDelay:'1s'}}>&lt;?php</span>
      <span style={{left:'80%', animationDelay:'3s'}}>&lt;div&gt;</span>
      <span style={{left:'50%', animationDelay:'4s'}}>&lt;h1&gt;</span>
    </FloatingCode>
    <SkillsTitle>My Skills</SkillsTitle>
    <CardsContainer>
      <Card title="Backend Development" bgGradient={gradients[0]}>
        <SkillList>
          <SkillItem>PHP, Laravel (Expert)</SkillItem>
          <SkillItem>RESTful API Development</SkillItem>
          <SkillItem>MySQL, PostgreSQL, MongoDB</SkillItem>
          <SkillItem>Redis & Caching</SkillItem>
        </SkillList>
      </Card>
      <Card title="Frontend Development" bgGradient={gradients[1]}>
        <SkillList>
          <SkillItem>React.js, Vue.js</SkillItem>
          <SkillItem>JavaScript (ES6+)</SkillItem>
          <SkillItem>HTML5, CSS3, Bootstrap, JQuery</SkillItem>
          <SkillItem>Responsive Design</SkillItem>
        </SkillList>
      </Card>
      <Card title="DevOps & Tools" bgGradient={gradients[2]}>
        <SkillList>
          <SkillItem>Git & GitHub</SkillItem>
          <SkillItem>Docker, Linux Server Management</SkillItem>
          <SkillItem>CI/CD Pipelines</SkillItem>
          <SkillItem>AWS & DigitalOcean</SkillItem>
        </SkillList>
      </Card>
      <Card title="Development Practices" bgGradient={gradients[3]}>
        <SkillList>
          <SkillItem>Test-Driven Development</SkillItem>
          <SkillItem>Agile Methodologies</SkillItem>
          <SkillItem>Code Review & Optimization</SkillItem>
          <SkillItem>Security Best Practices, Documentation</SkillItem>
        </SkillList>
      </Card>
    </CardsContainer>
  </SkillsContainer>
);

export default Skills;
