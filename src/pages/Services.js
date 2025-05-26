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
  'linear-gradient(135deg, #2bc0e4 0%, #eaecc6 100%)',
  'linear-gradient(135deg, #42275a 0%, #734b6d 100%)',
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

const ServicesContainer = styled.div`
  padding: 100px 0 40px 0;
  background: ${sectionBG};
  min-height: calc(100vh - 140px);
  @media (max-width: 600px) {
    padding: 100px 0 24px 0;
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
    <ServicesTitle>How I Can Help</ServicesTitle>
    <CardsContainer>
      <Card title="Data Analysis & Visualization" bgGradient={gradients[0]}>
        <ServiceDescription>
          Extracting meaningful insights from complex datasets. Cleaning, transforming, and visualizing data using tools like Power BI, Google Looker, and various Python libraries.
        </ServiceDescription>
      </Card>
      <Card title="Machine Learning Model Development" bgGradient={gradients[1]}>
        <ServiceDescription>
          Building and evaluating machine learning models for tasks like classification, regression, forecasting, and clustering. Applying techniques from libraries like scikit-learn.
        </ServiceDescription>
      </Card>
      <Card title="Database Management & Optimization" bgGradient={gradients[2]}>
        <ServiceDescription>
          Designing efficient database schemas, implementing migrations, and optimizing database performance for SQL and NoSQL databases (MySQL, PostgreSQL, MongoDB).
        </ServiceDescription>
      </Card>
      <Card title="Web Application Development" bgGradient={gradients[3]}>
        <ServiceDescription>
          Developing robust web applications with a focus on backend logic using PHP/Laravel and frontend interfaces with JavaScript frameworks like React and Vue.js.
        </ServiceDescription>
      </Card>
      <Card title="API Design & Integration" bgGradient={gradients[4]}>
        <ServiceDescription>
          Designing and developing RESTful APIs for seamless data exchange and integrating with third-party services to extend application functionality.
        </ServiceDescription>
      </Card>
      <Card title="Technical Consulting & Problem Solving" bgGradient={gradients[5]}>
        <ServiceDescription>
          Providing expert technical guidance on data science, machine learning, and software development challenges. Applying a problem-solving mindset to deliver effective solutions.
        </ServiceDescription>
      </Card>
    </CardsContainer>
  </ServicesContainer>
);

export default Services;
