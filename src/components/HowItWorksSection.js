import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: #080808;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/tech-pattern.png');
    opacity: 0.02;
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

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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
  max-width: 700px;
  margin: 0 auto;
  color: #ccc;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfographicContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 2rem;
`;

const ProcessFlow = styled.div`
  position: relative;
  padding: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 40px;
    width: 4px;
    height: 100%;
    background-color: rgba(74, 144, 226, 0.3);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const Step = styled(motion.div)`
  display: flex;
  margin-bottom: 6rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  &:nth-child(odd) {
    .step-content {
      flex-direction: row-reverse;
      text-align: right;
      
      @media (max-width: 768px) {
        flex-direction: column;
        text-align: left;
      }
    }
    
    .step-image {
      margin-left: 2rem;
      margin-right: 0;
      
      @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 1.5rem;
      }
    }
    
    .step-details {
      align-items: flex-end;
      
      @media (max-width: 768px) {
        align-items: flex-start;
      }
    }
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  margin-left: 40px;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 20px rgba(74, 144, 226, 0.4);
  
  @media (max-width: 768px) {
    margin: 0 0 0 30px;
  }
`;

const StepContent = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  padding-left: 80px;
  
  @media (max-width: 768px) {
    padding-left: 60px;
  }
`;

const StepDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.6;
  max-width: 500px;
`;

const StepImage = styled.div`
  flex: 1;
  margin-right: 2rem;
  
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    filter: brightness(1.2) contrast(1.1);
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 1.5rem;
    
    img {
      max-width: 100%;
    }
  }
`;

const InfoBox = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-left: 3px solid var(--secondary-color);
  padding: 1.5rem;
  margin-top: 1rem;
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--secondary-color);
  }
  
  p {
    font-size: 0.9rem;
    color: #ccc;
  }
`;

const CTAContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: var(--secondary-color);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <SectionContainer>
      <SectionContent ref={ref}>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            How Air-Power Technology Works
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our patented closed-loop system converts compressed air into clean energy through an innovative process.
          </SectionDescription>
        </SectionHeader>
        
        <InfographicContainer>
          <ProcessFlow>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Step variants={itemVariants}>
                <StepNumber>1</StepNumber>
                <StepContent className="step-content">
                  <StepImage className="step-image">
                    <img src="/images/compressed-air-tanks.png" alt="Compressed Air Tanks" />
                  </StepImage>
                  <StepDetails className="step-details">
                    <StepTitle>Compressed Air Storage</StepTitle>
                    <StepDescription>
                      Pressurized air is stored in specialized tanks that serve as the fuel supply for the system. These tanks efficiently fill in 7-10 minutes and maintain pressure for extended periods.
                    </StepDescription>
                    <InfoBox>
                      <h4>Key Insight</h4>
                      <p>Stores pressurized air used to power the Compressed Air Engine, creating a clean and unlimited energy source.</p>
                    </InfoBox>
                  </StepDetails>
                </StepContent>
              </Step>
              
              <Step variants={itemVariants}>
                <StepNumber>2</StepNumber>
                <StepContent className="step-content">
                  <StepImage className="step-image">
                    <img src="/images/compressed-air-engine.png" alt="Compressed Air Engine" />
                  </StepImage>
                  <StepDetails className="step-details">
                    <StepTitle>Compressed Air Engine</StepTitle>
                    <StepDescription>
                      Our proprietary engine converts the stored compressed air into mechanical power. This mechanical energy is used to drive equipment directly or to generate electricity via a connected generator.
                    </StepDescription>
                    <InfoBox>
                      <h4>How It's Different</h4>
                      <p>Our patented design maximizes energy extraction from compressed air with significantly higher efficiency than conventional pneumatic motors.</p>
                    </InfoBox>
                  </StepDetails>
                </StepContent>
              </Step>
              
              <Step variants={itemVariants}>
                <StepNumber>3</StepNumber>
                <StepContent className="step-content">
                  <StepImage className="step-image">
                    <img src="/images/generator-system.png" alt="Generator System" />
                  </StepImage>
                  <StepDetails className="step-details">
                    <StepTitle>Electricity Generation</StepTitle>
                    <StepDescription>
                      The generator converts the mechanical energy from the compressed air engine into electrical power. This electricity can be used immediately to power equipment or stored in the integrated BESS system for later use.
                    </StepDescription>
                    <InfoBox>
                      <h4>Dual Capability</h4>
                      <p>Produces electricity to power equipment directly or store in the BESS, ensuring continuous power availability even during peak demand.</p>
                    </InfoBox>
                  </StepDetails>
                </StepContent>
              </Step>
              
              <Step variants={itemVariants}>
                <StepNumber>4</StepNumber>
                <StepContent className="step-content">
                  <StepImage className="step-image">
                    <img src="/images/bess-storage.png" alt="BESS Storage System" />
                  </StepImage>
                  <StepDetails className="step-details">
                    <StepTitle>BESS Energy Storage</StepTitle>
                    <StepDescription>
                      Our integrated Battery Energy Storage System (BESS) captures and stores excess energy, creating a reserve for critical applications, backup power, and to maintain the closed-loop system operation.
                    </StepDescription>
                    <InfoBox>
                      <h4>Smart Management</h4>
                      <p>Advanced energy management system optimizes power storage and distribution, ensuring optimal performance in all conditions.</p>
                    </InfoBox>
                  </StepDetails>
                </StepContent>
              </Step>
              
              <Step variants={itemVariants}>
                <StepNumber>5</StepNumber>
                <StepContent className="step-content">
                  <StepImage className="step-image">
                    <img src="/images/closed-loop-system.png" alt="Closed Loop System" />
                  </StepImage>
                  <StepDetails className="step-details">
                    <StepTitle>Closed-Loop Operation</StepTitle>
                    <StepDescription>
                      The system operates as a closed loop, allowing power generated to be redirected back to the main compressor to refill the air tanks. This creates a self-sustaining energy cycle with minimal external input once initiated.
                    </StepDescription>
                    <InfoBox>
                      <h4>Sustainability Factor</h4>
                      <p>This closed-loop design ensures long-term operation with little to no external energy input, perfect for remote or off-grid applications.</p>
                    </InfoBox>
                  </StepDetails>
                </StepContent>
              </Step>
              
              <Step variants={itemVariants}>
                <StepNumber>6</StepNumber>
                <StepContent className="step-content">
                  <StepImage className="step-image">
                    <img src="/images/cold-air-app.png" alt="Cold Air Applications" />
                  </StepImage>
                  <StepDetails className="step-details">
                    <StepTitle>Cold Air Utilization</StepTitle>
                    <StepDescription>
                      As a byproduct, the system produces cold air exhaust (-20°C to -40°C) which can be captured and utilized for various cooling applications including air conditioning, refrigeration, and data center cooling.
                    </StepDescription>
                    <InfoBox>
                      <h4>Dual Benefit</h4>
                      <p>The cold air exhaust provides an additional value stream, effectively offering cooling capabilities "for free" alongside electricity generation.</p>
                    </InfoBox>
                  </StepDetails>
                </StepContent>
              </Step>
            </motion.div>
          </ProcessFlow>
        </InfographicContainer>
        
        <CTAContainer>
          <CTAButton
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Schedule a Technology Demo
          </CTAButton>
        </CTAContainer>
      </SectionContent>
    </SectionContainer>
  );
};

export default HowItWorksSection; 