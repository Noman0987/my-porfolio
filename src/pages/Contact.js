import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCode } from 'react-icons/fa';

const sectionBG = 'rgba(24,26,27,0.98)';

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

const ContactContainer = styled.div`
  padding: 100px 0 40px 0;
  background: ${sectionBG};
  min-height: calc(100vh - 140px);
  @media (max-width: 600px) {
    padding: 80px 0 24px 0;
  }
`;

const ContactTitle = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 40px;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 2px 12px rgba(0,0,0,0.18);
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 24px;
    padding: 0 15px;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: #232526;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  @media (max-width: 600px) {
    padding: 20px;
    margin: 0 15px;
    border-radius: 8px;
  }
  @media (max-width: 400px) {
    padding: 15px;
    margin: 0 10px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #fff;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 16px;
  background: #181a1b;
  color: #fff;
  &:focus {
    outline: none;
    border-color: #8b7bf3;
    box-shadow: 0 0 0 2px rgba(139,123,243,0.4);
  }
  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  background: #181a1b;
  color: #fff;
  &:focus {
    outline: none;
    border-color: #8b7bf3;
    box-shadow: 0 0 0 2px rgba(139,123,243,0.4);
  }
  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #8b7bf3 0%, #a79cfc 100%);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  &:hover {
    background: linear-gradient(90deg, #a79cfc 0%, #8b7bf3 100%);
    transform: translateY(-2px);
  }
  @media (max-width: 600px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 30px;
  color: #e0eafc;
  padding: 0 15px;
  @media (max-width: 600px) {
    margin-top: 20px;
    font-size: 0.95rem;
  }
  p {
    margin: 8px 0;
    @media (max-width: 600px) {
      margin: 6px 0;
    }
  }
`;

const Contact = () => (
  <ContactContainer style={{position:'relative'}}>
    <FloatingCode>
      <span style={{left:'10%', animationDelay:'0s'}}>&lt;/&gt;</span>
      <span style={{left:'30%', animationDelay:'2s'}}>&#123; &#125;</span>
      <span style={{left:'60%', animationDelay:'1s'}}>&lt;?php</span>
      <span style={{left:'80%', animationDelay:'3s'}}>&lt;div&gt;</span>
      <span style={{left:'50%', animationDelay:'4s'}}>&lt;h1&gt;</span>
    </FloatingCode>
    <ContactTitle>Contact Me</ContactTitle>
    <ContactForm>
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required placeholder="Your name" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required placeholder="Your email address" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="subject">Subject</Label>
        <Input type="text" id="subject" name="subject" required placeholder="Message subject" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" required placeholder="Your message here..." />
      </FormGroup>
      <SubmitButton type="submit">Send Message</SubmitButton>
    </ContactForm>
    <ContactInfo>
      <p>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
      <p>Email: letstar432@gmail.com</p>
      <p>Location: Lahore, Pakistan</p>
    </ContactInfo>
  </ContactContainer>
);

export default Contact;
