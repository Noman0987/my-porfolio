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
  'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
  'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
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

const ServicesContainer = styled.div`
  padding: 60px 0 40px 0;
  background: ${sectionBG};
  min-height: calc(100vh - 140px);
  @media (max-width: 600px) {
    padding: 36px 0 24px 0;
  }
`;

const ServicesTitle = styled.h2`
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

const ServiceDescription = styled.p`
  color: #e0eafc;
  line-height: 1.6;
  font-size: 1.05rem;
`;

const Services = () => (
  <ServicesContainer style={{position:'relative'}}>
    <FloatingCode>
      <span style={{left:'10%', animationDelay:'0s'}}>&lt;/&gt;</span>
      <span style={{left:'30%', animationDelay:'2s'}}>&#123; &#125;</span>
      <span style={{left:'60%', animationDelay:'1s'}}>&lt;?php</span>
      <span style={{left:'80%', animationDelay:'3s'}}>&lt;div&gt;</span>
      <span style={{left:'50%', animationDelay:'4s'}}>&lt;h1&gt;</span>
    </FloatingCode>
    <ServicesTitle>My Services</ServicesTitle>
    <CardsContainer>
      <Card title="Web Development" bgGradient={gradients[0]}>
        <ServiceDescription>
          Custom web application development using Laravel framework. Building scalable, 
          secure, and maintainable web solutions tailored to your business needs.
        </ServiceDescription>
      </Card>
      <Card title="API Development" bgGradient={gradients[1]}>
        <ServiceDescription>
          RESTful API development with Laravel, implementing best practices for security, 
          performance, and documentation. Integration with third-party services and platforms.
        </ServiceDescription>
      </Card>
      <Card title="Database Design" bgGradient={gradients[2]}>
        <ServiceDescription>
          Expert database architecture and optimization. Designing efficient database 
          structures, implementing migrations, and ensuring data integrity.
        </ServiceDescription>
      </Card>
      <Card title="Technical Consulting" bgGradient={gradients[3]}>
        <ServiceDescription>
          Providing expert advice on technology stack selection, architecture design, 
          and development best practices for your projects.
        </ServiceDescription>
      </Card>
      <Card title="Code Review & Optimization" bgGradient={gradients[4]}>
        <ServiceDescription>
          Comprehensive code review services to ensure code quality, security, and 
          performance optimization of existing applications.
        </ServiceDescription>
      </Card>
      <Card title="Maintenance & Support" bgGradient={gradients[5]}>
        <ServiceDescription>
          Ongoing maintenance and support services for Laravel applications, including 
          updates, bug fixes, and performance monitoring.
        </ServiceDescription>
      </Card>
    </CardsContainer>
  </ServicesContainer>
);

export default Services;
