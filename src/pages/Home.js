import React from 'react';
import Hero from '../components/Hero';
import CompanyOverview from '../components/CompanyOverview';
import SolutionSection from '../components/SolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ApplicationsSection from '../components/ApplicationsSection';
import ProductsSection from '../components/ProductsSection';
import InvestorsSection from '../components/InvestorsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <CompanyOverview />
      <SolutionSection />
      <HowItWorksSection />
      <ApplicationsSection />
      <ProductsSection />
      <InvestorsSection />
      <ContactSection />
    </div>
  );
};

export default Home; 