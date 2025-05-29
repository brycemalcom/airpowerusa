import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  IconGasCylinder,
  IconSettings,
  IconDeviceDesktopAnalytics,
  IconPlug,
  IconBatteryCharging,
  IconArrowRight,
  IconArrowDown
} from 'tabler-icons-react';

const FlowchartContainer = styled.div`
  padding: 4rem 0;
  position: relative;
  overflow: visible;
`;

const FlowchartFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 3rem;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`;

const FlowItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  min-width: 140px;
  z-index: 2;
`;

const FlowText = styled(motion.p)`
  font-size: 1rem;
  color: #ddd;
  margin: 0;
  margin-top: 0.7rem;
  max-width: 180px;
`;

const Arrow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  z-index: 1;
`;

const BESSBranch = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 75%;
  transform: translateX(-50%);
  top: 120px;
  @media (max-width: 900px) {
    position: static;
    transform: none;
    margin-top: 2rem;
  }
`;

const SolutionFlowchart = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.2 } }
  };

  return (
    <FlowchartContainer ref={ref}>
      <FlowchartFlex as={motion.div} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <FlowItem variants={itemVariants} whileHover={{ scale: 1.08 }}>
          <IconGasCylinder size={48} stroke={2.2} color="var(--secondary-color)" />
          <FlowText>Compressed air as fuel</FlowText>
        </FlowItem>
        <Arrow variants={arrowVariants}><IconArrowRight size={32} stroke={2.2} color="var(--secondary-color)" /></Arrow>
        <FlowItem variants={itemVariants} whileHover={{ scale: 1.08 }}>
          <IconSettings size={48} stroke={2.2} color="var(--secondary-color)" />
          <FlowText>Powers Compressed Air Engine</FlowText>
        </FlowItem>
        <Arrow variants={arrowVariants}><IconArrowRight size={32} stroke={2.2} color="var(--secondary-color)" /></Arrow>
        <FlowItem variants={itemVariants} whileHover={{ scale: 1.08 }}>
          <IconDeviceDesktopAnalytics size={48} stroke={2.2} color="var(--secondary-color)" />
          <FlowText>Air engine drives generator</FlowText>
        </FlowItem>
        <Arrow variants={arrowVariants}><IconArrowRight size={32} stroke={2.2} color="var(--secondary-color)" /></Arrow>
        <FlowItem variants={itemVariants} whileHover={{ scale: 1.08 }}>
          <IconPlug size={48} stroke={2.2} color="var(--secondary-color)" />
          <FlowText>Produces electricity to directly power equipment</FlowText>
        </FlowItem>
        {/* BESS Branch */}
        <BESSBranch variants={itemVariants}>
          <Arrow variants={arrowVariants}><IconArrowDown size={32} stroke={2.2} color="var(--secondary-color)" /></Arrow>
          <IconBatteryCharging size={48} stroke={2.2} color="var(--secondary-color)" />
          <FlowText>Or store power in the BESS (Battery Energy Storage System)</FlowText>
        </BESSBranch>
      </FlowchartFlex>
    </FlowchartContainer>
  );
};

export default SolutionFlowchart; 