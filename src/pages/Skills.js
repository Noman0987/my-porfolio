import React from 'react';
import styled, { keyframes } from 'styled-components';
import Card from '../components/Card';
import { FaCode } from 'react-icons/fa';

const sectionBG = 'rgba(24,26,27,0.98)';
const gradients = [
  'linear-gradient(135deg, #8b7bf3 0%, #a79cfc 100%)',
  'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
  'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
  'linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%)',
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
    color: #8b7bf3;
    font-size: 2.2rem;
    opacity: 0.18;
    animation: ${floatCode} 8s linear infinite;
  }
`;

const SkillsContainer = styled.div`
  padding: 100px 0 40px 0;
  background: ${sectionBG};
  min-height: calc(100vh - 140px);
  @media (max-width: 600px) {
    padding: 100px 0 24px 0;
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
      <Card title="Languages" bgGradient={gradients[0]}>
        <SkillList>
          <SkillItem>Python</SkillItem>
          <SkillItem>C, C++</SkillItem>
          <SkillItem>Java</SkillItem>
          <SkillItem>PHP</SkillItem>
          <SkillItem>HTML</SkillItem>
          <SkillItem>JavaScript</SkillItem>
        </SkillList>
      </Card>
      <Card title="Libraries & Frameworks" bgGradient={gradients[1]}>
        <SkillList>
          <SkillItem>Python Lib: Numpy, Pandas, Matplotlib, Seaborn, Selenium, Beautifulsoup, Sk_learn</SkillItem>
          <SkillItem>Laravel</SkillItem>
          <SkillItem>React.js, Vue.js</SkillItem>
          <SkillItem>Bootstrap, JQuery</SkillItem>
        </SkillList>
      </Card>
      <Card title="Databases & Data Related" bgGradient={gradients[2]}>
        <SkillList>
          <SkillItem>MySQL, PostgreSQL, MongoDB</SkillItem>
          <SkillItem>Data Structure & Algorithms</SkillItem>
          <SkillItem>Power BI, Google Looker, Excel (for analysis)</SkillItem>
        </SkillList>
      </Card>
      <Card title="Methodologies & Tools" bgGradient={gradients[3]}>
        <SkillList>
          <SkillItem>Methodologies: SDLC, Agile, Scrum, Prototype, Spiral, XP</SkillItem>
          <SkillItem>Tools: Jira, Github</SkillItem>
          <SkillItem>Problem Solving, Innovative Thinking</SkillItem>
          <SkillItem>Agile Mindset, Team Work, Team Leadership</SkillItem>
        </SkillList>
      </Card>
    </CardsContainer>
  </SkillsContainer>
);

export default Skills;
