import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #181a1b;
  padding: 32px 0 16px 0;
  color: #fff;
  text-align: center;
  box-shadow: 0 4px 16px 0 rgba(0,0,0,0.18);
  position: relative;
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #232526;
  margin-bottom: 10px;
  box-shadow: 0 2px 18px 0 #232526, 0 0 0 6px #23252644;
  background: #232526;
`;

const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  margin: 0 0 6px 0;
  letter-spacing: 1.5px;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  letter-spacing: 1px;
  color: #e0eafc;
`;

const Header = () => (
  <HeaderContainer>
    <Avatar src="https://ui-avatars.com/api/?name=Noman+Ahmad&background=232526&color=fff&size=180" alt="Noman Ahmad" />
    <Name>Noman Ahmad</Name>
    <Title>Software Engineer / Laravel Developer</Title>
  </HeaderContainer>
);

export default Header;
