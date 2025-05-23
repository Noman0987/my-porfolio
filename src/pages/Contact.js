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
    color: #00f2fe;
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
    padding: 36px 0 24px 0;
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
    font-size: 1.3rem;
    margin-bottom: 18px;
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
  }
  @media (max-width: 400px) {
    padding: 15px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #fff;
  font-weight: 500;
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
    border-color: #43cea2;
    box-shadow: 0 0 0 2px #43cea244;
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
    border-color: #43cea2;
    box-shadow: 0 0 0 2px #43cea244;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background: #2980b9;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 30px;
  color: #e0eafc;
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
        <Input type="text" id="name" name="name" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="subject">Subject</Label>
        <Input type="text" id="subject" name="subject" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" required />
      </FormGroup>
      <SubmitButton type="submit">Send Message</SubmitButton>
    </ContactForm>
    <ContactInfo>
      <p>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
      <p>Email: your.email@example.com</p>
      <p>Location: Your City, Country</p>
    </ContactInfo>
  </ContactContainer>
);

export default Contact;
