import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const glassyBG = 'transparent';
const accent = 'linear-gradient(90deg, #00f2fe 0%, #4facfe 100%)';

const slideDown = keyframes`
  from { max-height: 0; opacity: 0; }
  to { max-height: 400px; opacity: 1; }
`;

const NavContainer = styled.nav`
  background: ${glassyBG};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 200;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.12);
  backdrop-filter: blur(24px) saturate(1.7);
  -webkit-backdrop-filter: blur(24px) saturate(1.7);
  border-bottom: 1.5px solid rgba(0,242,254,0.10);
  border-radius: 0 0 22px 22px;
  min-height: 62px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 800px) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100vw;
    background: ${glassyBG};
    flex-direction: column;
    align-items: center;
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.13);
    max-height: ${({ open }) => (open ? '400px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease;
    animation: ${({ open }) => open ? slideDown : 'none'} 0.4s cubic-bezier(.23,1.02,.32,1) both;
    backdrop-filter: ${({ open }) => open ? 'blur(10px)' : 'none'};
    -webkit-backdrop-filter: ${({ open }) => open ? 'blur(10px)' : 'none'};
  }
`;

const NavItem = styled.li`
  margin: 0 10px;
  @media (max-width: 800px) {
    margin: 18px 0;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-weight: 600;
  font-size: 1.12rem;
  padding: 14px 22px;
  border-radius: 30px;
  text-decoration: none;
  position: relative;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
  overflow: hidden;
  letter-spacing: 0.5px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 8px;
    height: 3px;
    border-radius: 2px;
    background: ${accent};
    opacity: 0;
    transform: scaleX(0.5);
    transition: opacity 0.2s, transform 0.2s;
    box-shadow: 0 0 16px 2px #00f2fe99;
    animation: navGlow 2.2s infinite alternate;
  }
  &:hover, &.active {
    background: rgba(0,242,254,0.13);
    color: #00f2fe;
    box-shadow: 0 4px 24px 0 #00f2fe33;
  }
  &:hover::after, &.active::after {
    opacity: 1;
    transform: scaleX(1);
  }
  @keyframes navGlow {
    0% { box-shadow: 0 0 8px 0 #00f2fe44; }
    100% { box-shadow: 0 0 24px 4px #00f2fe99; }
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 12px;
  z-index: 200;
  @media (max-width: 800px) {
    display: block;
  }
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);
  return (
    <NavContainer>
      <Hamburger onClick={handleToggle} aria-label={open ? 'Close menu' : 'Open menu'}>
        {open ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavList open={open}>
        <NavItem><NavLink to="/" onClick={handleClose} className={location.pathname === '/' ? 'active' : ''}>Home</NavLink></NavItem>
        <NavItem><NavLink to="/about" onClick={handleClose} className={location.pathname === '/about' ? 'active' : ''}>About</NavLink></NavItem>
        <NavItem><NavLink to="/services" onClick={handleClose} className={location.pathname === '/services' ? 'active' : ''}>Services</NavLink></NavItem>
        <NavItem><NavLink to="/skills" onClick={handleClose} className={location.pathname === '/skills' ? 'active' : ''}>Skills</NavLink></NavItem>
        <NavItem><NavLink to="/resume" onClick={handleClose} className={location.pathname === '/resume' ? 'active' : ''}>Resume</NavLink></NavItem>
        <NavItem><NavLink to="/contact" onClick={handleClose} className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink></NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
