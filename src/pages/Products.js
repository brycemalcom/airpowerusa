import React from 'react';
import styled from 'styled-components';
import ProductsSection from '../components/ProductsSection';

const PageContainer = styled.div`
  padding-top: 80px; /* For fixed navbar */
`;

const HeroSection = styled.div`
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/products-hero.svg');
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

const Products = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <PageTitle>Our Products</PageTitle>
          <PageDescription>
            Explore our innovative clean energy products designed for various applications and scales.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <ProductsSection />
    </PageContainer>
  );
};

export default Products; 