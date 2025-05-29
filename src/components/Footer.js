import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  color: var(--text-light);
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  img {
    height: 150px;
    margin: 0 auto;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 30px;
      height: 2px;
      background-color: var(--secondary-color);
    }
  }
`;

const FooterLink = styled(Link)`
  margin-bottom: 0.8rem;
  transition: var(--transition);
  &:hover {
    color: var(--secondary-color);
    transform: translateX(5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    margin-right: 10px;
    color: var(--secondary-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 1rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #333;
    margin-right: 1rem;
    transition: var(--transition);
    &:hover {
      background-color: var(--secondary-color);
      transform: translateY(-5px);
    }
    svg {
      color: white;
      font-size: 1.2rem;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #333;
  margin: 2rem auto;
  max-width: 1200px;
`;

const Copyright = styled.div`
  text-align: center;
  color: #999;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  font-size: 0.9rem;
  p {
    margin-bottom: 0.5rem;
  }
`;

const LegalDisclaimer = styled.div`
  font-size: 0.8rem;
  color: #777;
  max-width: 800px;
  margin: 1rem auto 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <img src="/images/airpowerlogo2.png" alt="Air-Power USA Logo" />
          </FooterLogo>
          <p>Clean Power from Thin Air.</p>
          <p>Zero-emission energy systems powered by compressed air and integrated storage.</p>
          <SocialLinks>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterLinks>
            <h4>Quick Links</h4>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/how-it-works">How It Works</FooterLink>
            <FooterLink to="/applications">Applications</FooterLink>
            <FooterLink to="/products">Products</FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterLinks>
            <h4>Contact Us</h4>
            <ContactItem>
              <FaEnvelope />
              <a href="mailto:info@airpowerusa.com">info@airpowerusa.com</a>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </ContactItem>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterLinks>
            <h4>Investors</h4>
            <FooterLink to="/investors">Investment Opportunities</FooterLink>
            <FooterLink to="/investors#deck">Request Investor Deck</FooterLink>
            <FooterLink to="/contact">Contact our Team</FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
      
      <Divider />
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Air-Power USA. All rights reserved.</p>
      </Copyright>
      
      <LegalDisclaimer>
        <p>
          This website contains forward-looking statements within the meaning of the Private Securities Litigation Reform Act of 1995. All statements other than statements of historical facts are forward-looking statements, which are subject to risks and uncertainties.
        </p>
      </LegalDisclaimer>
    </FooterContainer>
  );
};

export default Footer; 