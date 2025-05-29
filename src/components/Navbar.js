import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrolled }) => (scrolled ? '0rem 2rem' : '0.8rem 2rem')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  background-color: ${({ scrolled }) => scrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(8px)' : 'none'};
  -webkit-backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(8px)' : 'none'};
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-light);
  img {
    height: ${({ scrolled }) => (scrolled ? '60px' : '120px')};
    margin-right: ${({ scrolled }) => (scrolled ? '12px' : '24px')};
    transition: height 0.3s ease, margin-right 0.3s ease;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.95);
    padding: 2rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const NavLink = styled(Link)`
  margin: 0 1.5rem;
  color: var(--text-light);
  font-weight: 400;
  letter-spacing: 1px;
  position: relative;
  padding: 0.5rem 0;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0px;
    left: 0;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const CTAButton = styled(Link)`
  margin-left: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: var(--secondary-color);
  color: var(--text-light);
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0 0 0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
    color: var(--text-light);
    font-size: 1.5rem;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: 0.4s;
  border-radius: 5px;
  
  &:nth-child(1) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'};
  }
  
  &:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Nav scrolled={scrolled}>
      <Logo to="/" scrolled={scrolled}>
        <img src="/images/airpowerlogo2.png" alt="Air-Power USA Logo" />
      </Logo>
      
      <MobileMenuButton onClick={toggleMenu}>
        <Bar isOpen={isOpen} />
        <Bar isOpen={isOpen} />
        <Bar isOpen={isOpen} />
      </MobileMenuButton>
      
      <NavLinks isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/how-it-works">How It Works</NavLink>
        <NavLink to="/applications">Applications</NavLink>
        <NavLink to="/products">Products</NavLink>
        <CTAButton to="/investors">Investors</CTAButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 