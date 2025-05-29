import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PageContainer = styled.div`
  padding-top: 80px; /* For fixed navbar */
`;

const HeroSection = styled.div`
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/about-hero.svg');
  background-size: cover;
  background-position: center;
  height: 400px;
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

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.dark ? '#080808' : '#0d0d0d'};
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  @media (max-width: 992px) {
    order: ${props => props.reverse ? 1 : 2};
  }
`;

const ImageContent = styled.div`
  @media (max-width: 992px) {
    order: ${props => props.reverse ? 2 : 1};
  }
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TeamSection = styled.div`
  margin-top: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const MemberImage = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-light);
`;

const MemberRole = styled.h4`
  font-size: 1rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  line-height: 1.6;
`;

const About = () => {
  const [missionRef, missionInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const [storyRef, storyInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const [teamRef, teamInView] = useInView({
    threshold: 0.2,
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const teamMembers = [
    {
      name: 'Damien Plum',
      role: 'President',
      bio: 'With over 20 years in clean energy technologies, Damien has led multiple successful startups and brought innovative products to market.',
      image: '/images/team-damien.jpg'
    },
    {
      name: 'Peter Sollenne',
      role: 'Chief Financial Officer',
      bio: 'Peter brings extensive experience in corporate finance, capital raising, and strategic financial planning from both startups and Fortune 500 companies.',
      image: '/images/team-peter.jpg'
    },
    {
      name: 'Open Position',
      role: 'Chief Technology Officer',
      bio: 'We are currently seeking an exceptional CTO to lead our engineering team and drive technology development. Contact us to learn more.',
      image: '/images/team-open.jpg'
    }
  ];
  
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <PageTitle>About Air-Power USA</PageTitle>
          <PageDescription>
            Pioneering the future of clean energy through revolutionary compressed air technology.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionContent ref={missionRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
          >
            <SectionTitle variants={itemVariants}>Our Mission</SectionTitle>
            <Grid>
              <TextContent>
                <Paragraph variants={itemVariants}>
                  At Air-Power USA, our mission is to revolutionize the energy landscape by providing sustainable, efficient, and environmentally friendly power solutions that harness the potential of compressed air technology.
                </Paragraph>
                <Paragraph variants={itemVariants}>
                  We are committed to developing and deploying innovative energy systems that reduce carbon emissions, eliminate toxic waste, and provide reliable power to communities, businesses, and critical infrastructure worldwide.
                </Paragraph>
                <Paragraph variants={itemVariants}>
                  Our vision is a world where clean, affordable energy is accessible to all, powering economic growth while preserving our planet for future generations. We believe our patented compressed air engine and integrated BESS technology represents a significant step toward this vision.
                </Paragraph>
              </TextContent>
              <ImageContent>
                <motion.img 
                  src="/images/mission-image.jpg" 
                  alt="Air-Power USA Mission" 
                  variants={itemVariants}
                />
              </ImageContent>
            </Grid>
          </motion.div>
        </SectionContent>
      </Section>
      
      <Section dark>
        <SectionContent ref={storyRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <SectionTitle variants={itemVariants}>Our Story</SectionTitle>
            <Grid>
              <ImageContent reverse>
                <motion.img 
                  src="/images/story-image.jpg" 
                  alt="Air-Power USA Story" 
                  variants={itemVariants}
                />
              </ImageContent>
              <TextContent reverse>
                <Paragraph variants={itemVariants}>
                  Air-Power USA was founded in 2018 by a team of engineers and clean energy experts who recognized the untapped potential of compressed air as an energy source. Our journey began with a simple question: Could we create a more efficient way to convert air pressure into usable electricity?
                </Paragraph>
                <Paragraph variants={itemVariants}>
                  After years of research, development, and testing, we patented our revolutionary compressed air engine design that achieves unprecedented efficiency in converting air pressure to mechanical energy. Combined with our integrated Battery Energy Storage System (BESS), we created a complete power solution that offers clean energy generation with zero emissions.
                </Paragraph>
                <Paragraph variants={itemVariants}>
                  Today, Air-Power USA is at the forefront of compressed air energy technology, with operations in the United States and Europe. We continue to innovate and expand our product line to serve diverse applications, from mobile power units to utility-scale energy systems.
                </Paragraph>
              </TextContent>
            </Grid>
          </motion.div>
        </SectionContent>
      </Section>
      
      <Section>
        <SectionContent ref={teamRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            <SectionTitle variants={itemVariants}>Leadership Team</SectionTitle>
            <Paragraph variants={itemVariants}>
              Our leadership team brings together expertise from energy, technology, and business sectors to drive our mission forward. Each member is committed to advancing clean energy solutions and growing Air-Power USA into a global leader in sustainable power generation.
            </Paragraph>
            
            <TeamSection>
              <TeamGrid>
                {teamMembers.map((member, index) => (
                  <TeamMember key={index} variants={itemVariants}>
                    <MemberImage>
                      <img src={member.image} alt={member.name} />
                    </MemberImage>
                    <MemberInfo>
                      <MemberName>{member.name}</MemberName>
                      <MemberRole>{member.role}</MemberRole>
                      <MemberBio>{member.bio}</MemberBio>
                    </MemberInfo>
                  </TeamMember>
                ))}
              </TeamGrid>
            </TeamSection>
          </motion.div>
        </SectionContent>
      </Section>
    </PageContainer>
  );
};

export default About; 