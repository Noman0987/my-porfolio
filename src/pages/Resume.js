import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCode, FaDownload, FaBriefcase, FaGraduationCap, FaAward, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

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
    color: #8b7bf3;
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
  color: #8b7bf3;
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

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
      padding-left: 16px;
      position: relative;

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: #00f2fe;
      }
    }
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProjectItem = styled.div`
  background: rgba(34, 40, 49, 0.8);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  animation: ${fadeInUp} 0.8s both;
  animation-delay: ${props => props.delay || '0s'};
`;

const ProjectTitle = styled.h4`
  color: #00f2fe;
  font-size: 1.2rem;
  margin: 0 0 8px 0;
`;

const ProjectCompany = styled.div`
  color: #e0eafc;
  font-size: 1rem;
  margin-bottom: 12px;
  font-style: italic;
`;

const ProjectDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #e0eafc;
  font-size: 0.95rem;
  line-height: 1.6;

  li {
    margin-bottom: 6px;
    padding-left: 16px;
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
  gap: 6px;
  color: #fff;
  text-decoration: none;
  margin-top: 12px;
  font-size: 0.9rem;
  transition: color 0.2s;

  &:hover {
    color: #00f2fe;
    text-decoration: underline;
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
  
  /* Center the button */
  display: block;
  width: fit-content;
  margin: 40px auto 0 auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 242, 254, 0.3);
  }
`;

const resumeData = {
  education: [
    {
      degree: 'BSCS (Bachelor in Computer Science)',
      institution: 'UNIVERSITY OF SOUTH ASIA',
      years: '2020-2024',
      location: 'CANTT, LAHORE',
      details: [], // Add relevant details if available
    },
  ],
  workExperience: [
    {
      title: 'BI Analyst',
      company: 'Contour Software',
      years: '03/2025 - Present',
      location: 'Lahore, Pakistan',
      details: [
        'Tracked key business KPIs and created dashboards using Power BI and Excel.',
        'Used historical data for forecasting and strategic insights.',
        'Managed tasks and collaborated with teams using Jira in agile environments.',
      ],
    },
    {
      title: 'Data Visualization Associate Intern',
      company: 'Excelerate',
      years: '11/2024 - 11/2024',
      location: 'Remote',
      details: [
        'Cleaned, transformed, and prepared large datasets.',
        'Applied one-hot encoding and created new features.',
        'Built interactive dashboards using Google Looker.',
        'Worked with Power BI, Google Looker, and Excel for analysis.',
      ],
    },
    {
      title: 'Data Science Intern',
      company: 'Zeazh',
      years: '11/2024 - 11/2024',
      location: 'Remote',
      details: [
        'Performed EDA to clean, visualize, and extract insights from datasets.',
        'Built and evaluated classification models i.e. Logistic Regression.',
        'Conducted time series forecasting using ARIMA for trend prediction.',
        'Applied clustering & NLP for customer segmentation and sentiment analysis.',
      ],
    },
    {
      title: 'Software Engineer (Intern)',
      company: 'Software Alliance',
      years: '07/2022 - 10/2022',
      location: 'Lahore, Pakistan',
      details: [
        'Collaborated with a team of developers to design and implement new features for web applications using PHP Laravel and JavaScript.',
        'Assisted in database management and optimization for various projects.',
        'Participated in daily stand-ups, code reviews, and sprint planning sessions.',
        'Gained practical experience in software development methodologies, agile methodologies, and problem-solving techniques.',
      ],
    },
  ],
  personalProjects: [
    {
      title: 'NutriSense (Final year Project)',
      company: 'Holistic Harmony NutriSense: Transforming Wellness with Al Nutrition and Expert Engagement',
      url: '', // Add URL if available
      details: [
        'Al-driven nutrition app for personalized dietary recommendations.',
        'Features: Includes user app for Al-based nutrition guidance and appointment system, nutritionist app for patient management, and admin app for content and account management.',
        'Functionality: Users can upload health data, book appointments, and communicate with nutritionists.',
        'Technology: Developed using Flutter for mobile and web; utilizes Al for health data analysis.',
      ],
    },
    {
      title: 'Sales Insights (Data Analysis Project)',
      company: 'SQL-powered project for extracting actionable sales insights.',
      url: '', // Add URL if available
      details: [
        'Features: Customer behavior analysis, revenue trends, and market-specific sales insights.',
        'Functionality: Data cleaning, transformation, modeling, and interactive dashboard creation in Power BI.',
        'Technology: MySQL for querying data; Power BI for visualization; Power Query and DAX for advanced analytics.',
      ],
    },
    {
      title: 'HR Analytics (Data Analysis Project)',
      company: 'Created an HR Analytics dashboard in Power BI for employee insights.',
      url: '', // Add URL if available
      details: [
        'Cleaned data and transformed attendance with Pivot Column.',
        'Used DAX queries and dynamic parameters for advanced analysis.',
      ],
    },
    {
      title: 'Titanic - Survival Prediction',
      company: '', // No company listed for personal projects
      url: '', // Add URL if available
      details: [
        'Cleaned and preprocessed the Titanic dataset.',
        'Conducted EDA to identify key patterns.',
        'Built and tuned a Logistic Regression model for survival prediction.',
      ],
    },
    {
      title: 'Time Series Analysis on Global Land Temperatures',
      company: '', // No company listed
      url: '', // Add URL if available
      details: [
        'Preprocessed data and evaluated model performance.',
        'Forecasted temperature trends using ARIMA and Exponential Smoothing.',
        'Analyzed trends, seasonality, and patterns.',
      ],
    },
    {
      title: 'Customer Segmentation Using K-Means Clustering',
      company: '', // No company listed
      url: '', // Add URL if available
      details: [
        'Clustered customers based on spending behavior for targeted marketing.',
        'Identified optimal clusters using Elbow Method and Silhouette Score.',
        'Provided insights via visualized customer segments.',
      ],
    },
  ],
};

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
        <SectionTitle><FaGraduationCap /> Education</SectionTitle>
        <Timeline>
          {resumeData.education.map((edu, index) => (
            <TimelineItem key={index} delay={`${0.2 + index * 0.1}s`}>
              <TimelineHeader>
                <TimelineTitle>{edu.degree}</TimelineTitle>
                <TimelineSubtitle>
                  {edu.institution && <TimelineDetail><FaAward /> {edu.institution}</TimelineDetail>}
                  {edu.years && <TimelineDetail><FaCalendarAlt /> {edu.years}</TimelineDetail>}
                  {edu.location && <TimelineDetail><FaMapMarkerAlt /> {edu.location}</TimelineDetail>}
                </TimelineSubtitle>
              </TimelineHeader>
              {edu.details && edu.details.length > 0 && (
                <TimelineContent>
                  <ul>
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </TimelineContent>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      <Section delay="0.3s">
        <SectionTitle><FaBriefcase /> Professional Experience</SectionTitle>
        <Timeline>
          {resumeData.workExperience.map((exp, index) => (
            <TimelineItem key={index} delay={`${0.4 + index * 0.1}s`}>
              <TimelineHeader>
                <TimelineTitle>{exp.title}{exp.company && ` at ${exp.company}`}</TimelineTitle>
                <TimelineSubtitle>
                  {exp.years && <TimelineDetail><FaCalendarAlt /> {exp.years}</TimelineDetail>}
                  {exp.location && <TimelineDetail><FaMapMarkerAlt /> {exp.location}</TimelineDetail>}
                </TimelineSubtitle>
              </TimelineHeader>
              {exp.details && exp.details.length > 0 && (
                <TimelineContent>
                  <ul>
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </TimelineContent>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      <Section delay="0.5s">
        <SectionTitle><FaCode /> Personal Projects</SectionTitle>
        <ProjectList>
          {resumeData.personalProjects.map((project, index) => (
            <ProjectItem key={index} delay={`${0.6 + index * 0.1}s`}>
              <ProjectTitle>{project.title}</ProjectTitle>
              {project.company && <ProjectCompany>{project.company}</ProjectCompany>}
              {project.details && project.details.length > 0 && (
                <ProjectDetails>
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ProjectDetails>
              )}
              {project.url && (
                <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
                  View Project <FaArrowRight />
                </ProjectLink>
              )}
            </ProjectItem>
          ))}
        </ProjectList>
      </Section>

      <div style={{ textAlign: 'center' }}>
        <DownloadButton href="/resume.pdf" download="Sadia_Adrees_Resume.pdf">
          <FaDownload /> Download Resume
        </DownloadButton>
      </div>
    </ResumeContent>
  </ResumeContainer>
);

export default Resume;
