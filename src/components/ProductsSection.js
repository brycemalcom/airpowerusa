import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const ProductRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ProductImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  img {
    width: 100%;
    max-width: 420px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
    background: #111;
    object-fit: contain;
  }
`;

const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`;

const ProductTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.2rem;
  color: var(--secondary-color);
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.8;
  margin-bottom: 1.2rem;
`;

const ProductFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.2rem 0 1.5rem 0;
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.7rem;
    font-size: 0.95rem;
    color: #ccc;
    &::before {
      content: '→';
      position: absolute;
      left: 0;
    color: var(--secondary-color);
      font-weight: bold;
  }
    &:last-child { margin-bottom: 0; }
  }
`;

const SpecsTable = styled.div`
  margin: 1.5rem 0;
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
    color: var(--secondary-color);
    }
  table {
    width: 100%;
    border-collapse: collapse;
    tr { border-bottom: 1px solid rgba(255,255,255,0.08); }
    td {
      padding: 0.6rem 0;
      font-size: 0.95rem;
      &:first-child { color: #aaa; width: 40%; }
      &:last-child { color: white; font-weight: 500; }
    }
  }
`;

const ProductCTA = styled.div`
  margin-top: 1.5rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: var(--secondary-color);
  color: white;
  font-weight: 600;
  border-radius: 4px;
  transition: var(--transition);
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
`;
  
  const products = [
    {
      title: "50kW Air Truck Unit",
      description: "Our compact and mobile power solution designed for field deployments, emergency response, and remote operation. The 50kW Air Truck Unit combines power generation with cold air output in a transportable package.",
    image: "/images/50kw-airtruck.png",
      features: [
      "Mobile Design: Mounted on a truck chassis for rapid deployment to any location.",
      "Dual Output: Generates both electricity and cold air simultaneously.",
      "Integrated BESS: Built-in battery storage for consistent power delivery.",
      "Field Ready: Ruggedized for harsh environments and challenging conditions."
      ],
      specs: [
        { name: "Power Output", value: "50 kW continuous" },
        { name: "Cold Air Temperature", value: "-20°C to -40°C" },
        { name: "BESS Capacity", value: "100 kWh" },
        { name: "Runtime", value: "24+ hours on full charge" },
        { name: "Recharge Time", value: "7-10 minutes" },
        { name: "Noise Level", value: "< 65 dB at 7 meters" },
        { name: "Dimensions", value: "Standard truck bed (6.5 ft)" },
        { name: "Weight", value: "Approximately 2,500 kg" }
      ]
    },
    {
      title: "1.5MW BESS System",
      description: "Our utility-scale energy solution for microgrids, communities, and industrial applications. The 1.5MW system delivers substantial power with integrated storage, dramatically reducing land use compared to traditional clean energy sources.",
    image: "/images/1.5mw-bess1.png",
      features: [
      "High Capacity: Powers up to 450 homes with clean, sustainable energy.",
      "Compact Footprint: Minimal land use compared to equivalent solar or wind installations.",
      "Scalable Design: Modular construction allows for expansion as needs grow.",
      "Grid Integration: Seamless connection to existing infrastructure with stabilization features."
      ],
      specs: [
        { name: "Power Output", value: "1.5 MW continuous" },
        { name: "BESS Capacity", value: "3 MWh" },
        { name: "Cooling Capacity", value: "500 tons (1,760 kW)" },
        { name: "System Footprint", value: "40 ft x 60 ft" },
        { name: "Installation Time", value: "2-3 weeks" },
        { name: "Expected Lifespan", value: "20+ years" },
        { name: "Maintenance Interval", value: "Quarterly inspection" },
        { name: "Grid Compatibility", value: "Standard connections with island mode capability" }
      ]
    }
  ];
  
const ProductsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
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
            Our Featured Products
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our innovative clean energy solutions designed for various applications and scales.
          </SectionDescription>
        </SectionHeader>
        <ProductsList>
          {products.map((product, idx) => (
            <ProductRow
              key={product.title}
              reverse={idx % 2 === 1}
              variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ProductImage>
                <img src={product.image} alt={product.title} />
          </ProductImage>
          <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
            <ProductFeatures>
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
              ))}
            </ProductFeatures>
              <SpecsTable>
                <h4>Technical Specifications</h4>
                <table>
                  <tbody>
                      {product.specs.map((spec, i) => (
                        <tr key={i}>
                        <td>{spec.name}</td>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </SpecsTable>
              <ProductCTA>
                <CTAButton href="/contact">Request Product Information</CTAButton>
              </ProductCTA>
          </ProductDetails>
            </ProductRow>
          ))}
        </ProductsList>
      </SectionContent>
    </SectionContainer>
  );
};

export default ProductsSection; 