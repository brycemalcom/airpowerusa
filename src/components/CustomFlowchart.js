import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FlowchartContainer = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  min-height: 600px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5rem;
`;

const CenterStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CenterStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.2rem 0 0 0;
`;

const BranchRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 6rem;
  margin-top: -1.5rem;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 900px) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  }
`;

const FlowStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 180px;
`;

const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 50%;
  border: 2.5px solid rgba(74, 144, 226, 0.25);
  transition: all 0.3s ease;
  img {
    width: 80px;
    height: 80px;
    filter: brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(102%) contrast(90%);
    transition: all 0.3s ease;
    object-fit: contain;
  }
  &:hover {
    border-color: var(--secondary-color);
    background: rgba(74, 144, 226, 0.1);
    transform: scale(1.07);
    img {
      filter: brightness(0) saturate(100%) invert(70%) sepia(98%) saturate(2618%) hue-rotate(180deg) brightness(100%) contrast(101%);
    }
  }
`;

const StepText = styled.p`
  font-size: 1.1rem;
  color: #ddd;
  max-width: 200px;
  margin: 0;
  line-height: 1.5;
`;

const ArrowSVG = styled.svg`
  width: 40px;
  height: 40px;
  stroke: var(--secondary-color);
  fill: none;
`;

const DownArrow = () => (
  <ArrowSVG viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6,9 12,15 18,9"></polyline>
  </ArrowSVG>
);

const RightArrow = () => (
  <ArrowSVG viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9,6 15,12 9,18"></polyline>
  </ArrowSVG>
);

const DiagonalArrow = styled(ArrowSVG)`
  position: absolute;
  top: 90px;
  width: 60px;
  height: 60px;
  z-index: 2;
  @media (max-width: 900px) {
    display: none;
  }
`;

const CustomFlowchart = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.2 } }
  };

  return (
    <FlowchartContainer ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ position: 'relative', width: '100%' }}
      >
        {/* Top Row */}
        <TopRow>
          <FlowStep variants={stepVariants}>
            <IconContainer>
              <img src="/images/air-tanks.svg" alt="Compressed air as fuel" />
            </IconContainer>
            <StepText>Compressed air as fuel</StepText>
          </FlowStep>
          <motion.div variants={arrowVariants} style={{ margin: '0 1.5rem' }}>
            <RightArrow />
          </motion.div>
          <FlowStep variants={stepVariants}>
            <IconContainer>
              <img src="/images/engine.svg" alt="Powers Compressed Air Engine" />
            </IconContainer>
            <StepText>Powers Compressed Air Engine</StepText>
          </FlowStep>
        </TopRow>
        {/* Down Arrow to Center */}
        <motion.div variants={arrowVariants} style={{ display: 'flex', justifyContent: 'center', margin: '0.2rem 0' }}>
          <DownArrow />
        </motion.div>
        {/* Center Step with Diagonal Arrows */}
        <CenterStepWrapper>
          <CenterStep variants={stepVariants}>
            <IconContainer>
              <img src="/images/generator.svg" alt="Air engine drives generator" />
            </IconContainer>
            <StepText>Air engine drives generator</StepText>
          </CenterStep>
          {/* Diagonal Arrows - now visually connect to lower icons */}
          <DiagonalArrow
            style={{ left: 'calc(50% - 180px)', transform: 'rotate(120deg)' }}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6,9 12,15 18,9" />
          </DiagonalArrow>
          <DiagonalArrow
            style={{ right: 'calc(50% - 180px)', transform: 'rotate(60deg)' }}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6,9 12,15 18,9" />
          </DiagonalArrow>
        </CenterStepWrapper>
        {/* Branch Row */}
        <BranchRow>
          <FlowStep variants={stepVariants}>
            <IconContainer>
              <img src="/images/equipment.svg" alt="Produces electricity to directly power equipment" />
            </IconContainer>
            <StepText>Produces electricity to directly power equipment</StepText>
          </FlowStep>
          <FlowStep variants={stepVariants}>
            <IconContainer>
              <img src="/images/bess.svg" alt="Or store power in the BESS" />
            </IconContainer>
            <StepText>Or store power in the BESS (Battery Energy Storage System)</StepText>
          </FlowStep>
        </BranchRow>
      </motion.div>
    </FlowchartContainer>
  );
};

export default CustomFlowchart; 