import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCode, FaDownload, FaBriefcase, FaGraduationCap, FaAward, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

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

const ResumeContainer = styled.div`
  padding: 100px 0 40px 0;
  background: ${sectionBG};
  min-height: calc(100vh - 140px);
  position: relative;
  @media (max-width: 600px) {
    padding: 100px 0 24px 0;
  }
`;

const ResumeTitle = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 40px;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 2px 12px rgba(0,0,0,0.18);
  animation: ${fadeInUp} 0.8s both;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 18px;
  }
`;

const ResumeContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  animation: ${fadeIn} 0.8s both;
`;

const Section = styled.section`
  margin-bottom: 48px;
  animation: ${fadeInUp} 0.8s both;
  animation-delay: ${props => props.delay || '0s'};
`;

const SectionTitle = styled.h3`
  color: #00f2fe;
  font-size: 1.5rem;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  padding-left: 24px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    background: ${accent};
    border-radius: 2px;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 24px;
  border-left: 2px solid rgba(0, 242, 254, 0.2);
  padding-right: 20px;

  @media (max-width: 600px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 32px;
  position: relative;
  animation: ${fadeInUp} 0.8s both;
  animation-delay: ${props => props.delay || '0s'};

  &::before {
    content: '';
    position: absolute;
    left: -32px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${accent};
    box-shadow: 0 0 0 4px rgba(0, 242, 254, 0.2);
  }
`;

const TimelineHeader = styled.div`
  margin-bottom: 12px;
`;

const TimelineTitle = styled.h4`
  color: #fff;
  font-size: 1.2rem;
  margin: 0 0 4px 0;
`;

const TimelineSubtitle = styled.div`
  color: #e0eafc;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const TimelineDetail = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #00f2fe;
  font-size: 0.9rem;
`;

const TimelineContent = styled.div`
  color: #e0eafc;
  line-height: 1.6;
  font-size: 1rem;
  padding-left: 16px;
  border-left: 2px solid rgba(0, 242, 254, 0.1);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 24px;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 15px;
  }
  @media (max-width: 480px) {
    gap: 10px;
    padding: 0 10px;
  }
`;

const SkillCategory = styled.div`
  animation: ${fadeInUp} 0.8s both;
  animation-delay: ${props => props.delay || '0s'};
`;

const SkillTitle = styled.h4`
  color: #00f2fe;
  font-size: 1.1rem;
  margin-bottom: 12px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  color: #e0eafc;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '▹';
    color: #00f2fe;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${accent};
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  margin-top: 40px;
  font-weight: 500;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.8s both;
  animation-delay: 0.4s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 242, 254, 0.3);
  }
`;

const Resume = () => (
  <ResumeContainer>
    <FloatingCode>
      <span style={{left:'10%', animationDelay:'0s'}}>&lt;/&gt;</span>
      <span style={{left:'30%', animationDelay:'2s'}}>&#123; &#125;</span>
      <span style={{left:'60%', animationDelay:'1s'}}>&lt;?php</span>
      <span style={{left:'80%', animationDelay:'3s'}}>&lt;div&gt;</span>
      <span style={{left:'50%', animationDelay:'4s'}}>&lt;h1&gt;</span>
    </FloatingCode>
    <ResumeTitle>My Resume</ResumeTitle>
    <ResumeContent>
      <Section delay="0.1s">
        <SectionTitle><FaBriefcase /> Professional Experience</SectionTitle>
        <Timeline>
          <TimelineItem delay="0.2s">
            <TimelineHeader>
              <TimelineTitle>Senior Laravel Developer</TimelineTitle>
              <TimelineSubtitle>
                <TimelineDetail><FaCalendarAlt /> 2020 - Present</TimelineDetail>
                <TimelineDetail><FaMapMarkerAlt /> Software Alliance</TimelineDetail>
              </TimelineSubtitle>
            </TimelineHeader>
            <TimelineContent>
              <ul>
                <li>Led development of enterprise-level web applications</li>
                <li>Implemented CI/CD pipelines and automated testing</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Optimized database performance and query efficiency</li>
              </ul>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem delay="0.3s">
            <TimelineHeader>
              <TimelineTitle>Laravel Developer</TimelineTitle>
              <TimelineSubtitle>
                <TimelineDetail><FaCalendarAlt /> 2018 - 2020</TimelineDetail>
                <TimelineDetail><FaMapMarkerAlt /> Previous Company</TimelineDetail>
              </TimelineSubtitle>
            </TimelineHeader>
            <TimelineContent>
              <ul>
                <li>Developed and maintained multiple web applications</li>
                <li>Optimized database performance and query efficiency</li>
                <li>Integrated third-party APIs and services</li>
                <li>Implemented responsive designs and frontend features</li>
              </ul>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section delay="0.4s">
        <SectionTitle><FaGraduationCap /> Education</SectionTitle>
        <Timeline>
          <TimelineItem delay="0.5s">
            <TimelineHeader>
              <TimelineTitle>Bachelor of Science in Computer Science</TimelineTitle>
              <TimelineSubtitle>
                <TimelineDetail><FaCalendarAlt /> 2014 - 2018</TimelineDetail>
                <TimelineDetail><FaMapMarkerAlt /> University Name</TimelineDetail>
              </TimelineSubtitle>
            </TimelineHeader>
            <TimelineContent>
              <p>Relevant coursework: Web Development, Database Systems, Software Engineering, Data Structures, Algorithms</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section delay="0.6s">
        <SectionTitle><FaAward /> Certifications</SectionTitle>
        <Timeline>
          <TimelineItem delay="0.7s">
            <TimelineHeader>
              <TimelineTitle>Laravel Certification</TimelineTitle>
              <TimelineDetail><FaCalendarAlt /> 2020</TimelineDetail>
            </TimelineHeader>
          </TimelineItem>
          <TimelineItem delay="0.8s">
            <TimelineHeader>
              <TimelineTitle>AWS Certified Developer</TimelineTitle>
              <TimelineDetail><FaCalendarAlt /> 2019</TimelineDetail>
            </TimelineHeader>
          </TimelineItem>
          <TimelineItem delay="0.9s">
            <TimelineHeader>
              <TimelineTitle>MySQL Database Administration</TimelineTitle>
              <TimelineDetail><FaCalendarAlt /> 2018</TimelineDetail>
            </TimelineHeader>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section delay="1s">
        <SectionTitle><FaCode /> Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory delay="1.1s">
            <SkillTitle>Backend Development</SkillTitle>
            <SkillList>
              <SkillItem>PHP, Laravel (Expert)</SkillItem>
              <SkillItem>RESTful API Development</SkillItem>
              <SkillItem>MySQL, PostgreSQL, MongoDB</SkillItem>
              <SkillItem>Redis & Caching</SkillItem>
            </SkillList>
          </SkillCategory>

          <SkillCategory delay="1.2s">
            <SkillTitle>Frontend Development</SkillTitle>
            <SkillList>
              <SkillItem>React.js, Vue.js</SkillItem>
              <SkillItem>JavaScript (ES6+)</SkillItem>
              <SkillItem>HTML5, CSS3, Bootstrap</SkillItem>
              <SkillItem>Responsive Design</SkillItem>
            </SkillList>
          </SkillCategory>

          <SkillCategory delay="1.3s">
            <SkillTitle>DevOps & Tools</SkillTitle>
            <SkillList>
              <SkillItem>Git & GitHub</SkillItem>
              <SkillItem>Docker, Linux Server</SkillItem>
              <SkillItem>CI/CD Pipelines</SkillItem>
              <SkillItem>AWS & DigitalOcean</SkillItem>
            </SkillList>
          </SkillCategory>
        </SkillsGrid>
      </Section>

      <div style={{ textAlign: 'center' }}>
        <DownloadButton href="/resume.pdf" target="_blank">
          <FaDownload /> Download Full Resume
        </DownloadButton>
      </div>
    </ResumeContent>
  </ResumeContainer>
);

export default Resume;
