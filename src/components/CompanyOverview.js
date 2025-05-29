import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: #0d0d0d;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url('/images/pattern-bg.png') repeat;
    opacity: 0.05;
    z-index: 0;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const ImageContent = styled.div`
  @media (max-width: 992px) {
    order: 1;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.8;
  color: #eee;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeatureGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  
  svg {
    color: var(--secondary-color);
    font-size: 1.5rem;
    margin-right: 1rem;
    min-width: 24px;
  }
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: #ccc;
  }
`;

const IllustrationImage = styled(motion.img)`
  width: 100%;
  transform: scale(1.1);
  transform-origin: center;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const CompanyOverview = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <SectionContainer>
      <SectionContent ref={ref}>
        <Grid>
          <TextContent>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <SectionTitle variants={itemVariants}>
                Revolutionary Clean Energy Technology
              </SectionTitle>
              <SectionDescription variants={itemVariants}>
                Air-Power USA is pioneering a patented compressed air engine + generator system that delivers zero-emission energy with built-in battery storage (BESS).
              </SectionDescription>
              <SectionDescription variants={itemVariants}>
                Our core innovation uses ambient air as a never-ending energy source, producing clean power and cold air as byproduct.
              </SectionDescription>
              
              <FeatureGrid variants={containerVariants}>
                <FeatureItem variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h4>Zero Emissions</h4>
                    <p>No combustion. No pollution. Just clean air in, clean power out.</p>
                  </div>
                </FeatureItem>
                
                <FeatureItem variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <div>
                    <h4>Reliable Energy</h4>
                    <p>Consistent power delivery — no sun or fuel required.</p>
                  </div>
                </FeatureItem>
                
                <FeatureItem variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                    <path d="M17 6h6v6"></path>
                  </svg>
                  <div>
                    <h4>Cost Effective</h4>
                    <p>Lower lifetime costs vs. diesel, solar, or hydrogen systems.</p>
                  </div>
                </FeatureItem>
                
                <FeatureItem variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  <div>
                    <h4>Cold Air Byproduct</h4>
                    <p>Exhaust air at -20°C to -40°C enables direct-use cooling.</p>
                  </div>
                </FeatureItem>
              </FeatureGrid>
            </motion.div>
          </TextContent>
          
          <ImageContent>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
            >
              <IllustrationImage 
                src="/images/cae-mock.png" 
                alt="Compressed Air Energy System Mockup"
              />
            </motion.div>
          </ImageContent>
        </Grid>
      </SectionContent>
    </SectionContainer>
  );
};

export default CompanyOverview; 