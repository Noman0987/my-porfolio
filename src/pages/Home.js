import React, { lazy, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import Card from '../components/Card';
import Slider from '../components/Slider';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowDown, FaReact, FaPhp, FaLaravel, FaAws, FaDocker, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaCode, FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const darkBG = '#181a1b';
const sectionBG = 'rgba(24,26,27,0.98)';
const overlay = 'linear-gradient(120deg, rgba(24,26,27,0.92) 60%, rgba(36,37,38,0.85) 100%)';
const glassBG = 'rgba(34, 40, 49, 0.75)';
const gradients = [
  'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
  'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
  'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)',
];

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 0 0 #00f2fe44; }
  50% { box-shadow: 0 0 16px 4px #00f2fe99; }
  100% { box-shadow: 0 0 0 0 #00f2fe44; }
`;

const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const HomeContainer = styled.div`
  background: ${darkBG};
  min-height: 100vh;
  padding-bottom: 30px;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${overlay}, url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80') center/cover fixed no-repeat;
  color: #fff;
  text-align: center;
  position: relative;
  padding: 190px 20px 80px 20px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25);
  animation: ${fadeInUp} 0.8s both;
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  @media (max-width: 600px) {
    padding: 50px 6vw 40px 6vw;
    min-height: 50vh;
    background-attachment: scroll;
  }
`;

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #00f2fe;
  margin-bottom: 18px;
  box-shadow: 0 2px 24px 0 #00f2fe99, 0 0 0 8px #00f2fe22;
  background: #232526;
  animation: ${fadeInUp} 1.2s both;
`;

const AnimatedTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: 2px;
  color: #fff;
  animation: ${fadeInUp} 1.3s both;
  text-shadow: 0 2px 16px #00f2fe44;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: #e0eafc;
  margin-bottom: 18px;
  animation: ${fadeInUp} 1.4s both;
`;

const CodeBlock = styled.pre`
  background: rgba(34, 40, 49, 0.85);
  color: #00f2fe;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 1.1rem;
  border-radius: 12px;
  padding: 18px 24px;
  margin: 24px auto 0 auto;
  max-width: 480px;
  box-shadow: 0 2px 16px #00f2fe33;
  text-align: left;
  animation: ${fadeInUp} 1.5s both;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 12px 8px;
    max-width: 98vw;
  }
`;

const ContactInfo = styled.div`
  font-size: 1.1rem;
  margin-bottom: 18px;
  color: #e0eafc;
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  animation: ${fadeIn} 1.5s both;
  @media (max-width: 600px) {
    font-size: 0.98rem;
    gap: 10px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 24px;
  padding: 14px 36px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
  border: none;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 2px 12px #00f2fe55;
  animation: ${glow} 2.5s infinite;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover {
    background: #fff;
    color: #00f2fe;
    box-shadow: 0 4px 24px #00f2fe99;
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  color: #fff;
  opacity: 0.7;
  font-size: 2.2rem;
  animation: bounce 2s infinite;
  @keyframes bounce {
    0%, 100% { transform: translate(-50%, 0); }
    50% { transform: translate(-50%, 12px); }
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
    bottom: 8px;
  }
`;

const Section = styled.section`
  padding: 60px 0 40px 0;
  background: ${sectionBG};
  box-shadow: 0 2px 24px 0 rgba(0,0,0,0.18);
  animation: ${fadeInUp} 0.8s both;
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
  animation: ${fadeInUp} 1.2s both;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 18px;
  }
`;

const AnimatedUnderline = styled.div`
  width: 60px;
  height: 4px;
  margin: 0 auto 18px auto;
  background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
  border-radius: 2px;
  animation: underlineGrow 1.2s cubic-bezier(.23,1.02,.32,1) both;
  @keyframes underlineGrow {
    from { width: 0; opacity: 0; }
    to { width: 60px; opacity: 1; }
  }
`;

const AboutText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: #e0eafc;
  font-size: 1.15rem;
  line-height: 1.7;
  animation: ${fadeIn} 1.2s both;
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
  background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
  color: #fff;
  border-radius: 20px;
  padding: 7px 18px;
  margin: 6px 8px 6px 0;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 2px 8px #00f2fe33;
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
    color: #00f2fe;
    transition: color 0.2s, transform 0.2s;
    &:hover {
      color: #fff;
      transform: scale(1.18) rotate(-8deg);
      text-shadow: 0 0 16px #00f2fe99;
    }
  }
`;

const SliderSection = styled.section`
  background: ${sectionBG};
  padding: 48px 0 32px 0;
  animation: ${fadeInUp} 0.8s both;
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
  animation: ${fadeInUp} 1s both;
`;

const TechIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-size: 2.5rem;
  color: #00f2fe;
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
  animation: ${fadeInUp} 1.2s both;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0 2vw;
  }
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
    animation: floatCode 12s linear infinite;
    will-change: transform;
    @keyframes floatCode {
      0% { transform: translateY(120vh) scale(0.8) rotate(0deg); opacity: 0.18; }
      50% { opacity: 0.32; }
      100% { transform: translateY(-10vh) scale(1.1) rotate(360deg); opacity: 0.18; }
    }
  }
`;

const CardBrackets = styled.span`
  color: #00f2fe;
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.7;
  margin: 0 6px;
  transition: color 0.3s, opacity 0.3s, transform 0.3s;
  pointer-events: none;
`;

const SliderCodeBG = styled.div`
  position: absolute;
  top: 10px; left: 0; width: 100%; height: 100%;
  z-index: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 4rem;
  color: #00f2fe22;
  animation: codeIconFloat 6s ease-in-out infinite alternate;
  @keyframes codeIconFloat {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(18px) scale(1.08); }
  }
`;

const CodeDivider = styled.div`
  width: 100%;
  text-align: center;
  margin: 36px 0 36px 0;
  font-size: 1.6rem;
  color: #00f2fe99;
  letter-spacing: 0.2em;
  animation: fadeInUp 1.2s both;
`;

const FooterCodeIcon = styled.span`
  color: #00f2fe;
  font-size: 2.2rem;
  margin-right: 12px;
  animation: ${glow} 2.5s infinite;
  vertical-align: middle;
`;

const CardSparkle = styled.span`
  position: absolute;
  top: 12px; right: 18px;
  font-size: 1.2rem;
  color: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s, transform 0.3s;
  filter: drop-shadow(0 0 8px #00f2fe);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  animation: ${fadeInUp} 0.8s both;
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
  animation: ${fadeInUp} 0.8s both;
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.2);
    border-color: rgba(0,242,254,0.2);
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
  color: #00f2fe;
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
      color: #00f2fe;
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
  background: rgba(0,242,254,0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0,242,254,0.2);
    transform: translateX(5px);
  }
`;

const StatsSection = styled.section`
  background: ${sectionBG};
  padding: 60px 0;
  text-align: center;
  animation: ${fadeInUp} 0.8s both;
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
  animation: ${fadeInUp} 0.8s both;
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.2);
    border-color: rgba(0,242,254,0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #00f2fe;
  margin-bottom: 8px;
  text-shadow: 0 0 20px rgba(0,242,254,0.3);
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
  animation: ${fadeInUp} 0.8s both;
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
  animation: ${fadeInUp} 1s both;
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
  border: 1px solid rgba(0,242,254,0.2);
  box-shadow: 0 8px 32px rgba(0,242,254,0.15);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.8s both;
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0,242,254,0.4);
    box-shadow: 0 12px 40px rgba(0,242,254,0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #00f2fe;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(0,242,254,0.3);
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
  background: rgba(0,242,254,0.1);
  color: #00f2fe;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0,242,254,0.2);
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
    title: 'Near Shop And Go (2024 - Current)',
    company: 'Software Alliance',
    url: 'https://near.dk',
    details: [
      'Led the development of a comprehensive Laravel-based project.',
      'Designed role-based access control for four distinct roles.',
      'Integrated ProtegeGx SOAP APIs, Scribe for identification, and Stripe for payment processing.',
      'Developed APIs for digital vending machines, utilizing Vendron services.'
    ]
  },
  {
    title: 'Unlimit Key (2023 - Current)',
    company: 'Software Alliance',
    url: 'https://admin.unlimitretail.dk/',
    details: [
      'Led the development of a comprehensive Laravel-based project.',
      'Enabled QR code scanning for user-friendly interactions.',
      'Developed APIs for digital vending machines, utilizing Vendron services.'
    ]
  },
  {
    title: 'Lexpal Chrome Extension (2024)',
    company: 'Software Alliance',
    url: '',
    details: [
      'Created a dictionary extension in Vue.js, with API in Laravel.',
      'Collaborated closely with front-end developers for seamless API integrations.'
    ]
  },
  {
    title: 'Queens OF Ten (2023)',
    company: 'Software Alliance',
    url: 'https://admin.queensoften.com/',
    details: [
      'Implemented Multi-Auth functionality for distinct user types.',
      'Integrated Stripe for secure payments.',
      'Developed APIs for mobile apps (iOS & Android).'
    ]
  },
  {
    title: 'Employment Care (2022 - 2023)',
    company: 'Software Alliance',
    url: 'https://employmentcare.dk/',
    details: [
      'Developed a dynamic website for CV and application creation.',
      'Created a responsive interface with HTML and CSS.'
    ]
  },
  {
    title: 'Lexpal (2022)',
    company: 'Software Alliance',
    url: 'https://lexpal.com/',
    details: [
      'Developed dynamic dictionary website for language translation.',
      'Implemented user-friendly interface for text translation.'
    ]
  }
];

const Home = () => {
  const MemoizedCard = React.memo(Card);
  const MemoizedSlider = React.memo(Slider);

  return (
  <HomeContainer>
      <HeroSection>
        <FloatingCode>
          <span style={{left:'10%', animationDelay:'0s'}}>&lt;/&gt;</span>
          <span style={{left:'30%', animationDelay:'2s'}}>&#123; &#125;</span>
          <span style={{left:'60%', animationDelay:'1s'}}>&lt;?php</span>
          <span style={{left:'80%', animationDelay:'3s'}}>&lt;div&gt;</span>
          <span style={{left:'50%', animationDelay:'4s'}}>&lt;h1&gt;</span>
        </FloatingCode>
        
        <Avatar src="https://ui-avatars.com/api/?name=Noman+Ahmad&background=232526&color=fff&size=180" alt="Noman Ahmad" />
        <AnimatedTitle>Noman Ahmad</AnimatedTitle>
        <Subtitle>Software Engineer / Laravel Developer</Subtitle>
        <CodeBlock>
          <Typewriter
            words={[`$ php artisan make:model Project`,
                    `const skills = ['Laravel', 'React', 'PHP', 'APIs'];`,
                    `<Portfolio developer="Noman Ahmad" />`,
                    `echo 'Let\'s build something amazing!';`]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={55}
            deleteSpeed={30}
            delaySpeed={1800}
          />
        </CodeBlock>
        <ContactInfo>
          <span><FaMapMarkerAlt /> Lahore, Pakistan</span>
          <span><FaPhone /> 03104549899</span>
          <span><FaEnvelope /> letstar432@gmail.com</span>
        </ContactInfo>
        <CTAButton href="#contact">Let's Work Together</CTAButton>
        <ScrollDown><FaArrowDown /></ScrollDown>
      </HeroSection>

      <SkillsShowcaseSection>
        <SkillsShowcaseTitle>Development Expertise</SkillsShowcaseTitle>
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
          <MemoizedCard title={<><CardBrackets>&#123;</CardBrackets>Backend & APIs<CardBrackets>&#125;</CardBrackets></>} bgGradient={gradients[0]}>
            <SkillBadge>PHP</SkillBadge>
            <SkillBadge>Laravel</SkillBadge>
            <SkillBadge>REST APIs</SkillBadge>
            <SkillBadge>Soap APIs</SkillBadge>
            <SkillBadge>MySQL</SkillBadge>
            <SkillBadge>MongoDB</SkillBadge>
            <SkillBadge>PostGreSQL</SkillBadge>
          </MemoizedCard>
          <MemoizedCard title={<><CardBrackets>&#123;</CardBrackets>Frontend & Tools<CardBrackets>&#125;</CardBrackets></>} bgGradient={gradients[1]}>
            <SkillBadge>JavaScript</SkillBadge>
            <SkillBadge>Vue.js</SkillBadge>
            <SkillBadge>React</SkillBadge>
            <SkillBadge>Bootstrap</SkillBadge>
            <SkillBadge>HTML5</SkillBadge>
            <SkillBadge>CSS3</SkillBadge>
            <SkillBadge>JQuery</SkillBadge>
          </MemoizedCard>
          <MemoizedCard title={<><CardBrackets>&#123;</CardBrackets>DevOps & Integrations<CardBrackets>&#125;</CardBrackets></>} bgGradient={gradients[2]}>
            <SkillBadge>Git</SkillBadge>
            <SkillBadge>JIRA</SkillBadge>
            <SkillBadge>Trello</SkillBadge>
            <SkillBadge>Stripe</SkillBadge>
            <SkillBadge>Quickpay</SkillBadge>
            <SkillBadge>Billwerk</SkillBadge>
            <SkillBadge>Vendron</SkillBadge>
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
                {project.details.slice(0, 3).map((detail, i) => (
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
            <StatNumber>5+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatCard>
          <StatCard delay="0.3s">
            <StatNumber>50+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatCard>
          <StatCard delay="0.4s">
            <StatNumber>30+</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatCard>
          <StatCard delay="0.5s">
            <StatNumber>100%</StatNumber>
            <StatLabel>Client Satisfaction</StatLabel>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <SliderSection>
        <SliderTitle>Technologies I Use</SliderTitle>
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
        <SectionTitle>Recent Projects</SectionTitle>
        <CodeDivider>&lt;/&gt; &lt;?php &#123; &#125;</CodeDivider>
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
        <SectionTitle>Let's Work Together</SectionTitle>
        <ContactTeaser>
          Interested in working together or have a project in mind? <br />
          <b>Let's connect!</b> <br />
          <a href="/contact" style={{color:'#fff', background:'#185a9d', padding:'10px 24px', borderRadius:'24px', textDecoration:'none', marginTop:'12px', display:'inline-block'}}>Contact Me</a>
        </ContactTeaser>
      </Section>

      <Footer>
        <Socials>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </Socials>
        &copy; {new Date().getFullYear()} Noman Ahmad. All rights reserved.
      </Footer>
  </HomeContainer>
);
};

export default React.memo(Home);
