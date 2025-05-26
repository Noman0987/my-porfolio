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
  padding: 100px 0 40px 0;
  background: rgba(24,26,27,0.98);
  min-height: calc(100vh - 140px);
  @media (max-width: 600px) {
    padding: 100px 0 24px 0;
  }
`;

const AboutTitle = styled.h2`
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

const AboutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 15px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(139,123,243,0.3);
    filter: grayscale(10%);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, rgba(24,26,27,0) 0%, rgba(24,26,27,0.98) 100%);
    pointer-events: none;
  }
  @media (max-width: 900px) {
    &::after {
      background: linear-gradient(to top, rgba(24,26,27,0) 0%, rgba(24,26,27,0.98) 100%);
    }
  }
`;

const TextContent = styled.div`
  flex: 2;
  color: #e0eafc;
  line-height: 1.7;
  h3 {
    color: #8b7bf3;
    font-size: 1.6rem;
    margin-bottom: 15px;
    font-weight: 600;
  }
  p {
    margin-bottom: 15px;
    font-size: 1.1rem;
  }
  strong {
    color: #8b7bf3;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 15px 0;
    li {
      margin-bottom: 8px;
      padding-left: 20px;
      position: relative;
      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: #8b7bf3;
      }
    }
  }
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
    <AboutTitle>About Me</AboutTitle>
    <AboutContent>
      <ImageContainer>
        <img src="https://ui-avatars.com/api/?name=Sadia+Adrees&background=232526&color=fff&size=300" alt="Sadia Adrees" />
      </ImageContainer>
      <TextContent>
        <h3>My Journey in Data and Development</h3>
        <p>
          Hello! I'm Sadia Adrees, a dedicated Gold Medalist in Computer Science with a profound passion for the intricate world of <strong>data science, analytics, and business intelligence</strong>. My academic background provided a strong foundation in core computer science principles, while my practical experience has honed my skills in extracting meaningful insights from complex datasets and translating them into actionable strategies.
        </p>
        <p>
          I am proficient in a range of programming languages including <strong>Python, C, C++, Java, PHP, HTML, and JavaScript</strong>, allowing me to approach problem-solving from multiple perspectives. My hands-on experience extends to data analysis, where I've worked with various tools and libraries to clean, transform, and visualize data effectively. I have a solid understanding of <strong>machine learning concepts</strong> and have applied them to build predictive models and uncover hidden patterns in data.
        </p>
        <p>
          Furthermore, my experience in <strong>database management</strong> ensures that I can design, implement, and optimize data storage solutions to support robust applications and analytical workflows. I am a strong believer in the power of data to drive informed decisions and am constantly exploring new techniques and technologies to enhance my abilities.
        </p>
        <p>
          I approach every project with a <strong>problem-solving mindset</strong> and a meticulous attention to detail. I am adept at working both independently and as part of a team, and I am always eager to learn and adapt to new challenges. My goal is to leverage my skills and passion to contribute to projects that make a real-world impact by turning data into valuable intelligence.
        </p>
        <ul>
          <li><strong>Academic Achievement:</strong> Gold Medalist in Computer Science</li>
          <li><strong>Areas of Expertise:</strong> Data Science, Analytics, Business Intelligence</li>
          <li><strong>Technical Proficiency:</strong> Python, ML, Data Analysis, Databases, Web Development</li>
          <li><strong>Key Skills:</strong> Problem Solving, Attention to Detail, Collaboration</li>
        </ul>
      </TextContent>
    </AboutContent>
  </AboutContainer>
);

export default About; 