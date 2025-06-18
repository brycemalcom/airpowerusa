import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: #0d0d0d;
  position: relative;
  overflow: hidden;
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

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SolutionFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SolutionFeature = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: var(--secondary-color);
    transition: var(--transition);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &::before {
      width: 100%;
      opacity: 0.1;
    }
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-light);
    position: relative;
    z-index: 1;
  }
  
  p {
    font-size: 0.9rem;
    color: #ccc;
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }
  
  svg {
    color: var(--secondary-color);
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const SolutionImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ComparisonTable = styled(motion.div)`
  margin-top: 5rem;
  width: 100%;
  overflow-x: auto;
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 1.2rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid #333;
      
      &:first-child {
        font-weight: 600;
      }
    }
    
    th {
      background-color: rgba(0, 0, 0, 0.3);
      font-weight: 700;
      color: var(--text-light);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.9rem;
    }
    
    td {
      font-size: 0.95rem;
      color: #ddd;
      
      &.positive {
        color: #4caf50;
      }
      
      &.negative {
        color: #f44336;
      }
    }
    
    tr:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
`;

const FlowchartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem;
  display: flex;
  justify-content: center;
`;

const FlowchartImage = styled.img`
  width: 90%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
`;

const ViewDetailedFlowLink = styled(motion.button)`
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  text-decoration: underline;
  &:hover {
    color: #4a90e2;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const DetailedFlowImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
`;

const SolutionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [showDetailedFlow, setShowDetailedFlow] = useState(false);

  return (
    <SectionContainer>
      <SectionContent ref={ref}>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our Revolutionary Solution
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A patented closed-loop system that converts compressed air into clean energy through an innovative process.
          </SectionDescription>
        </SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FlowchartContainer>
            {showDetailedFlow ? (
              <FlowchartImage src="/images/CAE_flowchart_final.png" alt="Detailed Compressed Air Energy System Flowchart" />
            ) : (
              <FlowchartImage src="/images/simple_flowchart.svg" alt="Compressed Air Energy System Flowchart" />
            )}
          </FlowchartContainer>
          <ViewDetailedFlowLink
            onClick={() => setShowDetailedFlow(!showDetailedFlow)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Explore Detailed Process
          </ViewDetailedFlowLink>
        </motion.div>
        <ComparisonTable
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Air-Power USA</th>
                <th>Diesel Generator</th>
                <th>Solar/Wind</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fuel Cost</td>
                <td className="positive">Free (Air)</td>
                <td className="negative">High</td>
                <td className="positive">Free</td>
              </tr>
              <tr>
                <td>Emissions</td>
                <td className="positive">Zero</td>
                <td className="negative">High</td>
                <td className="positive">Zero</td>
              </tr>
              <tr>
                <td>Reliability</td>
                <td className="positive">High</td>
                <td className="positive">High</td>
                <td className="negative">Intermittent</td>
              </tr>
              <tr>
                <td>Storage Built-in</td>
                <td className="positive">Yes (BESS)</td>
                <td className="negative">No</td>
                <td className="negative">Add-on Needed</td>
              </tr>
              <tr>
                <td>Cooling Output</td>
                <td className="positive">Yes</td>
                <td className="negative">No</td>
                <td className="negative">No</td>
              </tr>
            </tbody>
          </table>
        </ComparisonTable>
      </SectionContent>
    </SectionContainer>
  );
};

export default SolutionSection;