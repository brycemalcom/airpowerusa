import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: #0a0a0a;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, transparent 50%);
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

const InvestorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InvestorContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InvestorHeading = styled(motion.h3)`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 2px;
    background-color: var(--secondary-color);
  }
`;

const InvestorText = styled(motion.p)`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const InvestmentCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 2rem;
  margin-top: 1.5rem;
  border: 1px solid rgba(74, 144, 226, 0.2);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h4 {
    font-size: 1.3rem;
    color: var(--secondary-color);
  }
  
  span {
    background-color: rgba(74, 144, 226, 0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    font-size: 0.9rem;
    color: var(--secondary-color);
    font-weight: 600;
  }
`;

const InvestmentDetails = styled.div`
  margin-bottom: 1.5rem;
  
  ul {
    list-style: none;
    
    li {
      display: flex;
      justify-content: space-between;
      padding: 0.8rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      &:last-child {
        border-bottom: none;
      }
      
      span:first-child {
        color: #aaa;
      }
      
      span:last-child {
        font-weight: 500;
      }
    }
  }
`;

const InvestorFormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
`;

const FormHeader = styled.div`
  background-color: var(--secondary-color);
  padding: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const InvestorForm = styled.form`
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #ddd;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--secondary-color);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  
  textarea {
    min-height: 100px;
    resize: vertical;
  }
  
  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  input {
    margin-top: 0.3rem;
    margin-right: 0.8rem;
    width: auto;
  }
  
  label {
    font-size: 0.9rem;
    color: #ddd;
    margin-bottom: 0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: var(--secondary-color);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const MarketStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  
  h3 {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: #ccc;
  }
`;

const TimelineContainer = styled(motion.div)`
  margin-top: 3rem;
`;

const TimelineHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 2px;
    background-color: var(--secondary-color);
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: rgba(74, 144, 226, 0.3);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: 2rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--secondary-color);
    border: 4px solid #0a0a0a;
  }
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--text-light);
  }
  
  p {
    font-size: 0.95rem;
    color: #ccc;
    line-height: 1.6;
  }
`;

const Disclaimer = styled.div`
  margin-top: 4rem;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-size: 0.8rem;
  color: #999;
  line-height: 1.6;
`;

const InvestorsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    accredited: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your interest! An investment advisor will contact you shortly.');
  };
  
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
            Investor Opportunities
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join us as we build the future of scalable clean energy. Air-Power USA offers a unique investment opportunity in a revolutionary technology.
          </SectionDescription>
        </SectionHeader>
        
        <InvestorGrid>
          <InvestorContent>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <InvestorHeading variants={itemVariants}>
                Be Part of the Energy Revolution
              </InvestorHeading>
              
              <InvestorText variants={itemVariants}>
                Air-Power USA is raising capital to accelerate the commercialization of our patented compressed air power generation technology. With strong intellectual property protection and a clear path to market, we offer early investors a unique opportunity to participate in the clean energy transition.
              </InvestorText>
              
              <InvestorText variants={itemVariants}>
                Our technology addresses multiple high-growth markets including power generation, energy storage, cooling systems, and off-grid applications with a single innovative solution.
              </InvestorText>
              
              <InvestmentCard variants={itemVariants}>
                <CardHeader>
                  <h4>Current Investment Round</h4>
                  <span>Round I</span>
                </CardHeader>
                
                <InvestmentDetails>
                  <ul>
                    <li>
                      <span>Share Price</span>
                      <span>$2.00/share</span>
                    </li>
                    <li>
                      <span>Minimum Investment</span>
                      <span>$10,000</span>
                    </li>
                    <li>
                      <span>Bonus</span>
                      <span>100 preferred shares per $10k invested</span>
                    </li>
                    <li>
                      <span>Exit Strategy</span>
                      <span>OTC → Nasdaq IPO planned</span>
                    </li>
                  </ul>
                </InvestmentDetails>
              </InvestmentCard>
              
              <MarketStats variants={containerVariants}>
                <StatCard variants={itemVariants}>
                  <h3>$28B</h3>
                  <p>Generator Market Size</p>
                </StatCard>
                
                <StatCard variants={itemVariants}>
                  <h3>$15B</h3>
                  <p>Cooling Market Size</p>
                </StatCard>
                
                <StatCard variants={itemVariants}>
                  <h3>$45B</h3>
                  <p>EV and BESS Expansion</p>
                </StatCard>
                
                <StatCard variants={itemVariants}>
                  <h3>42%</h3>
                  <p>CAGR in Battery Infrastructure</p>
                </StatCard>
              </MarketStats>
              
              <TimelineContainer variants={itemVariants}>
                <TimelineHeader>Development Roadmap</TimelineHeader>
                
                <Timeline>
                  <TimelineItem variants={itemVariants}>
                    <h4>Phase I: Launch and Development</h4>
                    <p>Launch San Diego facility, complete Mobile Airpack development, obtain U.S. certification for commercial use.</p>
                  </TimelineItem>
                  
                  <TimelineItem variants={itemVariants}>
                    <h4>Phase II: Manufacturing Scale-up</h4>
                    <p>Expand manufacturing capabilities, begin custom air tank production, and grow presence in U.S. and international markets.</p>
                  </TimelineItem>
                  
                  <TimelineItem variants={itemVariants}>
                    <h4>Phase III: Global Expansion</h4>
                    <p>Pursue IPO opportunity, develop specialized systems for military/NATO applications, and establish strong presence in European markets.</p>
                  </TimelineItem>
                </Timeline>
              </TimelineContainer>
            </motion.div>
          </InvestorContent>
          
          <InvestorFormContainer>
            <FormHeader>
              <h3>Secure Your Investment Position</h3>
              <p>Complete the form below to receive our detailed investment packet and schedule a consultation.</p>
            </FormHeader>
            
            <InvestorForm onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="investmentAmount">Potential Investment Amount</label>
                <select 
                  id="investmentAmount" 
                  name="investmentAmount" 
                  value={formData.investmentAmount}
                  onChange={handleChange}
                >
                  <option value="">Select an amount</option>
                  <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                  <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                  <option value="$500,000+">$500,000+</option>
                </select>
              </FormGroup>
              
              <Checkbox>
                <input 
                  type="checkbox" 
                  id="accredited" 
                  name="accredited" 
                  checked={formData.accredited}
                  onChange={handleChange}
                />
                <label htmlFor="accredited">
                  I am an accredited investor as defined by the SEC
                </label>
              </Checkbox>
              
              <FormGroup>
                <label htmlFor="message">Questions or Comments</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <SubmitButton type="submit">Get Investment Packet</SubmitButton>
            </InvestorForm>
          </InvestorFormContainer>
        </InvestorGrid>
        
        <Disclaimer>
          <p>
            This information is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any such offer will be made only pursuant to appropriate offering documents and subscription agreements. Investment in Air-Power USA involves substantial risk, including the possible loss of principal. Past performance is not indicative of future results.
          </p>
        </Disclaimer>
      </SectionContent>
    </SectionContainer>
  );
};

export default InvestorsSection; 