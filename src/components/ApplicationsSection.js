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
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(30, 60, 100, 0.03) 1px, transparent 1px);
    background-size: 20px 20px;
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

const ApplicationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ApplicationCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    
    .application-image img {
      transform: scale(1.05);
    }
  }
`;

const ApplicationImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  background-color: #000;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0));
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
    filter: brightness(1.2) contrast(1.1);
  }
`;

const ApplicationContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ApplicationTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 40px;
    height: 2px;
    background-color: var(--secondary-color);
  }
`;

const ApplicationDescription = styled.p`
  font-size: 0.95rem;
  color: #ddd;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ApplicationFeatures = styled.ul`
  list-style: none;
  margin-top: 1rem;
  padding: 0;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    color: #ccc;
    
    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--secondary-color);
      font-weight: bold;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  padding-top: 1.5rem;
  color: var(--secondary-color);
  font-size: 0.9rem;
  font-weight: 600;
  transition: var(--transition);
  
  &::after {
    content: '→';
    margin-left: 5px;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--accent-color);
    
    &::after {
      transform: translateX(5px);
    }
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

const ApplicationsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const applications = [
    {
      title: "Disaster Relief",
      description: "Rapid deployment power systems for emergency response in disaster zones, providing electricity and cooling.",
      image: "/images/disaster-relief.png",
      features: [
        "Immediate power generation in crisis areas",
        "Mobile units for quick deployment",
        "Cold air for emergency cooling needs",
        "Independent operation without fuel supply chains"
      ]
    },
    {
      title: "Off-Grid Communities",
      description: "Sustainable power solutions for remote villages and communities without access to traditional power infrastructure.",
      image: "/images/off-grid.png",
      features: [
        "Self-sustaining power generation",
        "Minimal maintenance requirements",
        "Scalable to community needs",
        "Zero environmental impact"
      ]
    },
    {
      title: "EV Charging Stations",
      description: "Clean power generation for electric vehicle charging infrastructure, reducing grid dependency and enabling remote charging.",
      image: "/images/ev-charging.png",
      features: [
        "Zero-emission power for EVs",
        "Rapid charging capabilities",
        "Grid-independent operation",
        "Complementary to solar installations"
      ]
    },
    {
      title: "Data Centers",
      description: "Combined power and cooling solution for energy-intensive data centers, dramatically reducing operational costs and environmental impact.",
      image: "/images/data-center.png",
      features: [
        "Dual benefit: power generation and cooling",
        "Significant reduction in cooling costs",
        "Backup power capabilities",
        "Lower PUE (Power Usage Effectiveness)"
      ]
    },
    {
      title: "Agriculture & Grow Operations",
      description: "Integrated power and climate control for greenhouses, indoor farming, and agricultural processing facilities.",
      image: "/images/grow-op.png",
      features: [
        "Power for grow lights and equipment",
        "Cold air for climate control",
        "Water condensation from cold air exhaust",
        "Reduced operating costs"
      ]
    },
    {
      title: "Military & Defense",
      description: "Tactical power solutions for defense applications, forward operating bases, and mission-critical installations.",
      image: "/images/military-defense.png",
      features: [
        "Reduced logistics footprint",
        "Silent operation capabilities",
        "No thermal signature",
        "Ruggedized for field deployment"
      ]
    },
    {
      title: "Microgrids",
      description: "Reliable power infrastructure for community microgrids, industrial facilities, and island communities.",
      image: "/images/micro-grid.png",
      features: [
        "Stable power generation",
        "Integrated storage solution",
        "Complementary to renewable sources",
        "Grid stabilization capabilities"
      ]
    },
    {
      title: "Marine Vessels",
      description: "Clean energy systems for shipping, cruise lines, and maritime operations, reducing emissions and providing onboard cooling.",
      image: "/images/marine-vessel.png",
      features: [
        "Emissions reduction for maritime compliance",
        "Refrigeration for cargo vessels",
        "Air conditioning for passenger ships",
        "Reliable backup power"
      ]
    },
    {
      title: "Commercial Energy Storage",
      description: "Large-scale energy storage and management systems (Battery Energy Storage System, BESS) for commercial buildings, manufacturing, and institutional facilities.",
      image: "/images/commercial-energy.png",
      features: [
        "Peak shaving capabilities",
        "Demand response integration",
        "Backup power during outages",
        "Reduced utility costs"
      ]
    }
  ];
  
  return (
    <SectionContainer>
      <SectionContent ref={ref}>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Power for Endless Applications
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Air-Power USA's technology offers versatile solutions across multiple industries and use cases.
          </SectionDescription>
        </SectionHeader>
        
        <ApplicationsGrid>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid-container"
            style={{ display: 'contents' }}
          >
            {applications.map((app, index) => (
              <ApplicationCard key={index} variants={itemVariants}>
                <ApplicationImage className="application-image">
                  <img src={app.image} alt={app.title} />
                </ApplicationImage>
                <ApplicationContent>
                  <ApplicationTitle>{app.title}</ApplicationTitle>
                  <ApplicationDescription>{app.description}</ApplicationDescription>
                  <ApplicationFeatures>
                    {app.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ApplicationFeatures>
                  <ReadMoreLink href={`/applications#${app.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn more about this application →
                  </ReadMoreLink>
                </ApplicationContent>
              </ApplicationCard>
            ))}
          </motion.div>
        </ApplicationsGrid>
        
        <CTAContainer>
          <CTAButton
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Discuss Your Application Needs
          </CTAButton>
        </CTAContainer>
      </SectionContent>
    </SectionContainer>
  );
};

export default ApplicationsSection;