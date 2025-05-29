import React from 'react';
import styled from 'styled-components';
import ContactSection from '../components/ContactSection';

const PageContainer = styled.div`
  padding-top: 80px; /* For fixed navbar */
`;

const HeroSection = styled.div`
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/contact-hero.svg');
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Contact = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <PageTitle>Contact Us</PageTitle>
          <PageDescription>
            Have questions or want to learn more about our technology? Reach out to our team today.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <ContactSection />
    </PageContainer>
  );
};

export default Contact; 