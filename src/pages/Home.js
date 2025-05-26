import React, { lazy, Suspense, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import Card from '../components/Card';
import Slider from '../components/Slider';
import ThreeScene from '../components/ThreeScene';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowDown, FaReact, FaPhp, FaLaravel, FaAws, FaDocker, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaCode, FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const darkBG = '#181a1b';
const sectionBG = 'rgba(24,26,27,0.98)';
const overlay = 'linear-gradient(120deg, rgba(24,26,27,0.92) 60%, rgba(36,37,38,0.85) 100%)';
const glassBG = 'rgba(34, 40, 49, 0.75)';
const gradients = [
  'linear-gradient(135deg, #8b7bf3 0%, #a79cfc 100%)',
  'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
  'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
  'linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%)',
  'linear-gradient(135deg, #2bc0e4 0%, #eaecc6 100%)',
  'linear-gradient(135deg, #42275a 0%, #734b6d 100%)',
];

const HomeContainer = styled.div`
  background: ${darkBG};
  min-height: 100vh;
  padding-bottom: 30px;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${overlay}, url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80') center/cover fixed no-repeat;
  color: #fff;
  text-align: center;
  position: relative;
  padding: 120px 20px 80px 20px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25);
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  overflow: hidden;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 600px) {
    padding: 100px 6vw 40px 6vw;
    min-height: 70vh;
    background-attachment: scroll;
  }
`;

const ThreeSceneBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

const HeroContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const TextContentContainer = styled.div`
  text-align: center;
`;

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #8b7bf3;
  margin-bottom: 18px;
  box-shadow: 0 2px 24px 0 rgba(139,123,243,0.6), 0 0 0 8px rgba(139,123,243,0.3);
  background: #232526;
`;

const AnimatedTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 0 2px 16px rgba(139,123,243,0.4);
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: #e0eafc;
  margin-bottom: 18px;
`;

const CodeBlock = styled.pre`
  background: rgba(34, 40, 49, 0.85);
  color: #8b7bf3;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 1.1rem;
  border-radius: 12px;
  padding: 18px 24px;
  margin: 24px auto 0 auto;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 2px 16px rgba(139,123,243,0.3);
  text-align: left;
  overflow-x: auto;

  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 12px 10px;
    width: 90%;
    margin: 20px auto 0 auto;
    max-width: calc(100% - 20px);
  }
  @media (max-width: 400px) {
    font-size: 0.85rem;
    padding: 10px 8px;
    width: 95%;
    max-width: calc(100% - 16px);
  }
`;

const ContactInfo = styled.div`
  font-size: 1.1rem;
  margin: 24px 0 18px 0;
  color: #e0eafc;
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    font-size: 0.98rem;
    gap: 10px;
    margin: 20px 0 15px 0;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 24px;
  padding: 14px 36px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #8b7bf3 0%, #a79cfc 100%);
  border: none;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(139,123,243,0.55);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover {
    background: #fff;
    color: #8b7bf3;
    box-shadow: 0 4px 24px rgba(139,123,243,0.9);
  }
`;

const Section = styled.section`
  padding: 60px 0 40px 0;
  background: ${sectionBG};
  box-shadow: 0 2px 24px 0 rgba(0,0,0,0.18);
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  @media (max-width: 600px) {
    padding: 36px 0 24px 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 32px;
  letter-spacing: 1px;
  font-weight: 700;
  text-shadow: 0 2px 12px rgba(0,0,0,0.18);
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 18px;
  }
`;

const AnimatedUnderline = styled.div`
  width: 60px;
  height: 4px;
  margin: 0 auto 18px auto;
  background: linear-gradient(90deg, #8b7bf3 0%, #a79cfc 100%);
  border-radius: 2px;
`;

const AboutText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: #e0eafc;
  font-size: 1.15rem;
  line-height: 1.7;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0 2vw;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
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
  @media (max-width: 480px) {
    gap: 8px;
    padding: 0 5px;
  }
`;

const SkillBadge = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, #8b7bf3 0%, #a79cfc 100%);
  color: #fff;
  border-radius: 20px;
  padding: 7px 18px;
  margin: 6px 8px 6px 0;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(139,123,243,0.3);
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 6px 12px;
    margin: 4px 4px 4px 0;
  }
`;

const Footer = styled.footer`
  background: #181a1b;
  color: #e0eafc;
  text-align: center;
  padding: 36px 0 18px 0;
  font-size: 1.08rem;
  margin-top: 40px;
  border-top: 1.5px solid #232526;
`;

const Socials = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  gap: 24px;
  font-size: 2rem;
  a {
    color: #8b7bf3;
    transition: color 0.2s, transform 0.2s;
    &:hover {
      color: #fff;
      transform: scale(1.18) rotate(-8deg);
      text-shadow: 0 0 16px rgba(139,123,243,0.8);
    }
  }
`;

const SliderSection = styled.section`
  background: ${sectionBG};
  padding: 48px 0 32px 0;
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const SliderTitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 48px;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 2px 12px rgba(0,0,0,0.18);
`;

const TechIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-size: 2.5rem;
  color: #8b7bf3;
  margin-bottom: 18px;
  @media (max-width: 600px) {
    gap: 16px;
    font-size: 1.5rem;
  }
`;

const ContactTeaser = styled.div`
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  margin-top: 18px;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0 2vw;
  }
`;

const CardBrackets = styled.span`
  color: #8b7bf3;
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.7;
  margin: 0 6px;
  transition: color 0.3s, opacity 0.3s, transform 0.3s;
  pointer-events: none;
`;

const CodeDivider = styled.div`
  width: 100%;
  text-align: center;
  margin: 36px 0 36px 0;
  font-size: 1.6rem;
  color: rgba(139,123,243,0.6);
  letter-spacing: 0.2em;
`;

const FooterCodeIcon = styled.span`
  color: #8b7bf3;
  font-size: 2.2rem;
  margin-right: 12px;
  vertical-align: middle;
`;

const CardSparkle = styled.span`
  position: absolute;
  top: 12px;
  right: 18px;
  font-size: 1.2rem;
  color: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s, transform 0.3s;
  filter: drop-shadow(0 0 8px #8b7bf3);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 15px;
  }
  @media (max-width: 480px) {
    gap: 10px;
    padding: 0 10px;
  }
  @media (max-width: 360px) {
    gap: 8px;
    padding: 0 5px;
  }
`;

const ProjectCard = styled.div`
  background: ${glassBG};
  border-radius: 20px;
  padding: 32px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  transition: all 0.4s cubic-bezier(.23,1.02,.32,1);
  position: relative;
  overflow: hidden;
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.2);
    border-color: rgba(139,123,243,0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.gradient || gradients[0]};
  }
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  margin: 0 0 12px 0;
  font-weight: 600;
`;

const ProjectCompany = styled.div`
  color: #8b7bf3;
  font-size: 1.1rem;
  margin-bottom: 16px;
  font-weight: 500;
`;

const ProjectDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #e0eafc;
  font-size: 1rem;
  line-height: 1.6;

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
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  margin-top: 16px;
  padding: 8px 16px;
  background: rgba(139,123,243,0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139,123,243,0.2);
    transform: translateX(5px);
  }
`;

const StatsSection = styled.section`
  background: ${sectionBG};
  padding: 60px 0;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 15px;
  }
  @media (max-width: 480px) {
    gap: 10px;
    padding: 0 10px;
  }
  @media (max-width: 360px) {
    gap: 8px;
    padding: 0 5px;
  }
`;

const StatCard = styled.div`
  background: ${glassBG};
  border-radius: 20px;
  padding: 32px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  transition: all 0.4s cubic-bezier(.23,1.02,.32,1);
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.2);
    border-color: rgba(139,123,243,0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #8b7bf3;
  margin-bottom: 8px;
  text-shadow: 0 0 20px rgba(139,123,243,0.4);
`;

const StatLabel = styled.div`
  color: #e0eafc;
  font-size: 1.1rem;
  font-weight: 500;
`;

const SkillsShowcaseSection = styled.section`
  background: ${sectionBG};
  padding: 80px 0;
  position: relative;
  overflow: hidden;
`;

const SkillsShowcaseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const SkillsShowcaseTitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 48px;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 2px 12px rgba(0,0,0,0.18);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  margin-top: 40px;
  padding: 0 20px;
  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 15px;
  }
  @media (max-width: 480px) {
    gap: 10px;
    padding: 0 10px;
  }
  @media (max-width: 360px) {
    gap: 8px;
    padding: 0 5px;
  }
`;

const SkillCard = styled.div`
  background: rgba(34, 40, 49, 0.95);
  border-radius: 16px;
  padding: 30px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(139,123,243,0.2);
  box-shadow: 0 8px 32px rgba(139,123,243,0.15);
  transition: all 0.3s ease;
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(139,123,243,0.4);
    box-shadow: 0 12px 40px rgba(139,123,243,0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #8b7bf3;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(139,123,243,0.4);
`;

const SkillTitle = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

const SkillDescription = styled.p`
  color: #e0eafc;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  background: rgba(139,123,243,0.1);
  color: #8b7bf3;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139,123,243,0.2);
    transform: translateY(-2px);
  }
`;

const testimonials = [
  {
    name: 'Ali Raza',
    text: 'Noman is a highly skilled Laravel developer. He delivered our project on time and exceeded expectations!'
  },
  {
    name: 'Sarah Khan',
    text: 'Great communicator and problem solver. Highly recommend for any web development work.'
  },
  {
    name: 'John Doe',
    text: 'Professional, reliable, and always delivers quality code. Will work with again!'
  }
];

const technologies = [
  { icon: <FaReact />, name: 'React' },
  { icon: <FaPhp />, name: 'PHP' },
  { icon: <FaLaravel />, name: 'Laravel' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <FaGithub />, name: 'GitHub' },
];

const projects = [
  {
    title: 'NutriSense (Final year Project)',
    company: 'Holistic Harmony NutriSense',
    url: '',
    details: [
      'AI-driven nutrition app for personalized dietary recommendations',
      'Features: User app for AI-based nutrition guidance and appointment system',
      'Nutritionist app for patient management',
      'Admin app for content and account management',
      'Technology: Flutter for mobile and web; AI for health data analysis'
    ]
  },
  {
    title: 'Sales Insights (Data Analysis Project)',
    company: 'SQL-powered project',
    url: '',
    details: [
      'Customer behavior analysis and revenue trends',
      'Market-specific sales insights',
      'Data cleaning, transformation, and modeling',
      'Interactive dashboard creation in Power BI',
      'Technology: MySQL, Power BI, Power Query, DAX'
    ]
  },
  {
    title: 'HR Analytics (Data Analysis Project)',
    company: 'Power BI Dashboard',
    url: '',
    details: [
      'Created HR Analytics dashboard for employee insights',
      'Cleaned data and transformed attendance with Pivot Column',
      'Used DAX queries and dynamic parameters',
      'Advanced analysis of employee data'
    ]
  },
  {
    title: 'Titanic - Survival Prediction',
    company: 'Machine Learning Project',
    url: '',
    details: [
      'Cleaned and preprocessed the Titanic dataset',
      'Conducted EDA to identify key patterns',
      'Built and tuned a Logistic Regression model',
      'Achieved high accuracy in survival prediction'
    ]
  },
  {
    title: 'Time Series Analysis',
    company: 'Global Land Temperatures',
    url: '',
    details: [
      'Preprocessed data and evaluated model performance',
      'Forecasted temperature trends using ARIMA',
      'Applied Exponential Smoothing',
      'Analyzed trends, seasonality, and patterns'
    ]
  },
  {
    title: 'Customer Segmentation',
    company: 'K-Means Clustering Project',
    url: '',
    details: [
      'Clustered customers based on spending behavior',
      'Identified optimal clusters using Elbow Method',
      'Applied Silhouette Score for validation',
      'Provided insights via visualized customer segments'
    ]
  }
];

const Home = () => {
  const MemoizedCard = React.memo(Card);
  const MemoizedSlider = React.memo(Slider);

  const [mousePosition, setMousePosition] = useState([0, 0]);

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const mouseX = ((clientX - left) / width) * 2 - 1;
    const mouseY = -(((clientY - top) / height) * 2 - 1);
    setMousePosition([mouseX, mouseY]);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePosition([0, 0]);
  }, []);

  return (
  <HomeContainer>
      <HeroSection onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <ThreeSceneBackground>
          <ThreeScene mousePosition={mousePosition} />
        </ThreeSceneBackground>

        <HeroContentWrapper>
          <TextContentContainer>
            <Avatar src="https://ui-avatars.com/api/?name=Sadia+Adrees&background=232526&color=fff&size=180" alt="Sadia Adrees" />
            <AnimatedTitle>Sadia Adrees</AnimatedTitle>
            <Subtitle>Gold medalist in Computer Science with a passion for data science, analytics, and business intelligence. Proficient in Python, C, C++, Java, PHP, HTML, and JavaScript, with hands-on experience in data analysis, machine learning, and database management. I bring a problem-solving mindset, attention to detail, and a drive to make data meaningful in real-world applications.</Subtitle>
            <CodeBlock>
              <Typewriter
                words={[`// Sadia Adrees`,
                        `const skills = ['Data Science', 'Analytics', 'Machine Learning'];`,
                        `SELECT * FROM insights;`,
                        `print('Making data meaningful!')`]}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={1500}
              />
            </CodeBlock>
            <ContactInfo>
              <span><FaEnvelope /> sadia.adrees123@gmail.com</span>
              <span><FaPhone /> +92 3074782315</span>
              <span><FaMapMarkerAlt /> Lahore, Pakistan</span>
            </ContactInfo>
            <CTAButton href="#contact">Get in Touch</CTAButton>
          </TextContentContainer>
        </HeroContentWrapper>

      </HeroSection>

      <SkillsShowcaseSection>
        <SkillsShowcaseTitle>Skills Preview</SkillsShowcaseTitle>
        <SkillsShowcaseContainer>
          <SkillsGrid>
            <SkillCard delay="0.2s">
              <SkillIcon><FaLaravel /></SkillIcon>
              <SkillTitle>Laravel Development</SkillTitle>
              <SkillDescription>
                Building robust and scalable web applications using Laravel's powerful features.
                Expert in RESTful APIs, authentication, and database optimization.
              </SkillDescription>
              <SkillTags>
                <SkillTag>REST APIs</SkillTag>
                <SkillTag>Authentication</SkillTag>
                <SkillTag>Database Design</SkillTag>
                <SkillTag>Performance</SkillTag>
              </SkillTags>
            </SkillCard>

            <SkillCard delay="0.3s">
              <SkillIcon><FaReact /></SkillIcon>
              <SkillTitle>Frontend Development</SkillTitle>
              <SkillDescription>
                Creating modern, responsive user interfaces with React and Vue.js.
                Focus on performance, accessibility, and user experience.
              </SkillDescription>
              <SkillTags>
                <SkillTag>React.js</SkillTag>
                <SkillTag>Vue.js</SkillTag>
                <SkillTag>Responsive Design</SkillTag>
                <SkillTag>UI/UX</SkillTag>
              </SkillTags>
            </SkillCard>

            <SkillCard delay="0.4s">
              <SkillIcon><FaAws /></SkillIcon>
              <SkillTitle>DevOps & Cloud</SkillTitle>
              <SkillDescription>
                Implementing CI/CD pipelines and managing cloud infrastructure.
                Ensuring high availability and optimal performance.
              </SkillDescription>
              <SkillTags>
                <SkillTag>AWS</SkillTag>
                <SkillTag>Docker</SkillTag>
                <SkillTag>CI/CD</SkillTag>
                <SkillTag>Serverless</SkillTag>
              </SkillTags>
            </SkillCard>
          </SkillsGrid>
        </SkillsShowcaseContainer>
      </SkillsShowcaseSection>

      <Section>
        <SectionTitle>About Me</SectionTitle>
        <AnimatedUnderline />
        <AboutText>
          I am a passionate Laravel developer with a strong background in building scalable, maintainable web applications. I thrive in collaborative environments and enjoy solving complex problems with clean, efficient code. My experience spans a variety of industries and project types, from enterprise systems to innovative startups.
        </AboutText>
      </Section>

      <Section alt>
        <SectionTitle>Skills Preview</SectionTitle>
        <AnimatedUnderline />
        <CardsContainer>
          <MemoizedCard title={<><CardBrackets>&#123;</CardBrackets>Languages<CardBrackets>&#125;</CardBrackets></>} bgGradient={gradients[0]}>
            <SkillBadge>Python</SkillBadge>
            <SkillBadge>C</SkillBadge>
            <SkillBadge>C++</SkillBadge>
            <SkillBadge>Java</SkillBadge>
            <SkillBadge>PHP</SkillBadge>
            <SkillBadge>HTML</SkillBadge>
            <SkillBadge>JavaScript</SkillBadge>
          </MemoizedCard>
          <MemoizedCard title={<><CardBrackets>&#123;</CardBrackets>Data Science & ML<CardBrackets>&#125;</CardBrackets></>} bgGradient={gradients[1]}>
            <SkillBadge>Numpy</SkillBadge>
            <SkillBadge>Pandas</SkillBadge>
            <SkillBadge>Matplotlib</SkillBadge>
            <SkillBadge>Seaborn</SkillBadge>
            <SkillBadge>Selenium</SkillBadge>
            <SkillBadge>Beautifulsoup</SkillBadge>
            <SkillBadge>Sk_learn</SkillBadge>
          </MemoizedCard>
          <MemoizedCard title={<><CardBrackets>&#123;</CardBrackets>Databases & Tools<CardBrackets>&#125;</CardBrackets></>} bgGradient={gradients[2]}>
            <SkillBadge>MySQL</SkillBadge>
            <SkillBadge>PostgreSQL</SkillBadge>
            <SkillBadge>MongoDB</SkillBadge>
            <SkillBadge>Jira</SkillBadge>
            <SkillBadge>Github</SkillBadge>
            <SkillBadge>Excel</SkillBadge>
            <SkillBadge>Power BI</SkillBadge>
            <SkillBadge>Google Looker</SkillBadge>
          </MemoizedCard>
        </CardsContainer>
      </Section>

      <Section>
        <SectionTitle>Featured Projects</SectionTitle>
        <AnimatedUnderline />
        <ProjectGrid>
          {projects.slice(0, 3).map((project, idx) => (
            <ProjectCard key={project.title} gradient={gradients[idx % gradients.length]} delay={`${0.2 + idx * 0.1}s`}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectCompany>{project.company}</ProjectCompany>
              <ProjectDetails>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ProjectDetails>
              {project.url && (
                <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit Project <FaArrowRight />
                </ProjectLink>
              )}
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>

      <StatsSection>
        <SectionTitle>Experience in Numbers</SectionTitle>
        <AnimatedUnderline />
        <StatsGrid>
          <StatCard delay="0.2s">
            <StatNumber>4+</StatNumber>
            <StatLabel>Years in Industry</StatLabel>
          </StatCard>
          <StatCard delay="0.3s">
            <StatNumber>5+</StatNumber>
            <StatLabel>Key Projects</StatLabel>
          </StatCard>
          <StatCard delay="0.4s">
            <StatNumber>Proven</StatNumber>
            <StatLabel>Problem Solver</StatLabel>
          </StatCard>
          <StatCard delay="0.5s">
            <StatNumber>Data-Driven</StatNumber>
            <StatLabel>Insights</StatLabel>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <SliderSection>
        <SliderTitle>Technologies & Tools</SliderTitle>
        <MemoizedSlider
          items={technologies}
          isTech={true}
          renderItem={(tech) => (
            <div style={{textAlign:'center'}}>
              <TechIcons>{tech.icon}</TechIcons>
              <div style={{color:'#e0eafc', fontWeight:600, fontSize:'1.1rem'}}>{tech.name}</div>
            </div>
          )}
        />
      </SliderSection>

      <Section>
        <SectionTitle>Personal Projects</SectionTitle>
        <CodeDivider>&#123; data; analysis; insights; &#125;</CodeDivider>
        <CardsContainer>
          {projects.map((project, idx) => (
            <MemoizedCard
              key={project.title}
              title={project.title}
              bgGradient={gradients[idx % gradients.length]}
            >
              <div style={{fontWeight:'bold', marginBottom:6}}>{project.company}</div>
              {project.url && <div style={{marginBottom:8}}><a href={project.url} target="_blank" rel="noopener noreferrer" style={{color:'#fff', textDecoration:'underline'}}>Visit Project</a></div>}
              <ul style={{paddingLeft:18, margin:0}}>
                {project.details.map((d, i) => <li key={i} style={{marginBottom:4}}>{d}</li>)}
              </ul>
            </MemoizedCard>
          ))}
        </CardsContainer>
      </Section>

      <Section alt>
        <SectionTitle>Let's Connect</SectionTitle>
        <ContactTeaser>
          I am always open to discussing new projects, opportunities, and collaborations.
          Ready to make data meaningful?
          <a href="/contact" style={{color:'#fff', background:'#185a9d', padding:'10px 24px', borderRadius:'24px', textDecoration:'none', marginTop:'12px', display:'inline-block'}}>Contact Me</a>
        </ContactTeaser>
      </Section>

      <Footer>
        <Socials>
          <a href="https://linkedin.com/in/sadia-adrees" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </Socials>
        &copy; {new Date().getFullYear()} Sadia Adrees. All rights reserved.
      </Footer>
  </HomeContainer>
);
};

export default React.memo(Home);
