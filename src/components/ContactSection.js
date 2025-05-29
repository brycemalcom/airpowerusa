import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: #080808;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactFormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 992px) {
    order: 2;
  }
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

const ContactForm = styled.form`
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
    min-height: 150px;
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

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const ContactInfoCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    font-size: 1.5rem;
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
  }
`;

const ContactInfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ContactInfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  svg {
    color: var(--secondary-color);
    min-width: 20px;
    margin-right: 1rem;
    margin-top: 4px;
  }
  
  div {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
      color: var(--text-light);
    }
    
    p, a {
      font-size: 0.95rem;
      color: #ccc;
      line-height: 1.6;
    }
    
    a {
      transition: var(--transition);
      
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
`;

const LocationsCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 2rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    font-size: 1.5rem;
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
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const LocationItem = styled.div`
  h4 {
    font-size: 1.1rem;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: #ccc;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.05);
    margin-right: 1rem;
    transition: var(--transition);
    
    svg {
      color: var(--secondary-color);
      font-size: 1.2rem;
    }
    
    &:hover {
      background-color: var(--secondary-color);
      transform: translateY(-5px);
      
      svg {
        color: white;
      }
    }
  }
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Thank you for your message! We'll get back to you shortly.");
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
            Get In Touch
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions about our technology or investment opportunities? Our team is ready to assist you.
          </SectionDescription>
        </SectionHeader>
        
        <ContactGrid>
          <ContactFormContainer>
            <FormHeader>
              <h3>Send Us a Message</h3>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </FormHeader>
            
            <ContactForm onSubmit={handleSubmit}>
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
                <label htmlFor="subject">Subject *</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Investment Opportunity">Investment Opportunity</option>
                  <option value="Partnership Request">Partnership Request</option>
                  <option value="Technical Information">Technical Information</option>
                  <option value="Media Inquiry">Media Inquiry</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </ContactFormContainer>
          
          <ContactInfoContainer>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <ContactInfoCard variants={itemVariants}>
                <h3>Contact Information</h3>
                <ContactInfoList>
                  <ContactInfoItem>
                    <FaMapMarkerAlt />
                    <div>
                      <h4>Headquarters</h4>
                      <p>San Diego, California, United States</p>
                    </div>
                  </ContactInfoItem>
                  
                  <ContactInfoItem>
                    <FaPhone />
                    <div>
                      <h4>Phone Number</h4>
                      <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </div>
                  </ContactInfoItem>
                  
                  <ContactInfoItem>
                    <FaEnvelope />
                    <div>
                      <h4>Email Address</h4>
                      <a href="mailto:info@airpowerusa.com">info@airpowerusa.com</a>
                    </div>
                  </ContactInfoItem>
                </ContactInfoList>
                
                <SocialLinks>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                </SocialLinks>
              </ContactInfoCard>
              
              <LocationsCard variants={itemVariants}>
                <h3>Global Locations</h3>
                <LocationsGrid>
                  <LocationItem>
                    <h4>San Diego</h4>
                    <p>Main headquarters &<br />Manufacturing facility</p>
                  </LocationItem>
                  
                  <LocationItem>
                    <h4>Montreal</h4>
                    <p>Research & Development<br />Engineering center</p>
                  </LocationItem>
                  
                  <LocationItem>
                    <h4>Amsterdam</h4>
                    <p>European operations &<br />Distribution center</p>
                  </LocationItem>
                  
                  <LocationItem>
                    <h4>Versailles</h4>
                    <p>European regulatory &<br />Compliance office</p>
                  </LocationItem>
                </LocationsGrid>
              </LocationsCard>
            </motion.div>
          </ContactInfoContainer>
        </ContactGrid>
      </SectionContent>
    </SectionContainer>
  );
};

export default ContactSection; 