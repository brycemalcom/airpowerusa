import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';

// Style for emphasizing "Thin Air"
const EmphasizedText = styled.span`
  /* Example: Add an underline */
  text-decoration: underline;
  text-decoration-color: var(--accent-color); /* Or another suitable color */
  text-decoration-thickness: 2px; /* Adjust thickness as needed */
  text-underline-offset: 4px; /* Adjust offset as needed */

  /* Example: Add a subtle gradient (uncomment if preferred) */
  /* background: linear-gradient(to right, var(--accent-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 0; /* Behind overlay, above canvas */
`;

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  /* TODO: Replace with a high-res image or video background */
  /* Example image: background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/your-hero-image.jpg'); */
  /* Example video: Add a <video> element below or use a library */
  background-color: #111; /* Fallback color */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  /* Dark overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Adjusted overlay gradient */
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
    z-index: 1;
  }

  /* Radial glow effect (REMOVING THIS BLOCK as it conflicts with the dark overlay) */
  /*
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    padding-bottom: 150%;
    background: radial-gradient(ellipse at center, rgba(74, 144, 226, 0.15) 0%, rgba(74, 144, 226, 0) 70%);
    border-radius: 50%;
    z-index: -1;
    filter: blur(10px);
    opacity: 0.8;
  }
  */
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  z-index: 2;
  position: relative;
  padding: 0 2rem;
`;

const HeroTagline = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.2;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubhead = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #eee;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(Link)`
  padding: 0.6rem 1.5rem; /* Adjusted padding */
  background-color: var(--secondary-color);
  color: white;
  border-radius: 6px; /* Reduced border radius */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
  display: inline-block;
  border: none; /* Flat design */
  
  &:hover {
    background-color: var(--accent-color);
    transform: scale(1.03); /* Scale up slightly */
    filter: brightness(1.1); /* Increase brightness */
    /* Removed translateY and box-shadow for cleaner hover */
  }
`;

const SecondaryButton = styled(Link)`
  padding: 0.6rem 1.5rem; /* Adjusted padding */
  background-color: transparent;
  color: white;
  border: 1px solid var(--secondary-color); /* Adjusted border thickness */
  border-radius: 6px; /* Reduced border radius */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: rgba(74, 144, 226, 0.1); /* Subtle background */
    border-color: var(--accent-color);
    transform: scale(1.03); /* Scale up slightly */
    /* Removed translateY and box-shadow */
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  cursor: pointer;
  color: #ccc;
`;

const FlowCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Behind video */
  pointer-events: none;
  opacity: 0.3;
`;

const Hero = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let lines = [];
    const lineCount = 10;
    const lineLength = 400;
    const speed = 0.8;

    class Line {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.angle = (Math.random() - 0.5) * 0.1;
        this.history = [];
        this.color = `rgba(74, 144, 226, ${Math.random() * 0.3 + 0.1})`;
        this.lineWidth = Math.random() * 1.0 + 0.2;
        this.speed = speed + (Math.random() - 0.5) * 0.2;
      }

      update() {
        this.angle += (Math.random() - 0.5) * 0.005;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > lineLength) {
          this.history.shift();
        }

        if (this.x < -lineLength/2) this.x = width + lineLength/2;
        if (this.x > width + lineLength/2) this.x = -lineLength/2;
        if (this.y < -lineLength/2) this.y = height + lineLength/2;
        if (this.y > height + lineLength/2) this.y = -lineLength/2;
      }

      draw(context) {
        if (this.history.length < 2) return;
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          context.lineTo(this.history[i].x, this.history[i].y);
        }
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.stroke();
      }
    }

    const init = () => {
      lines = [];
      for (let i = 0; i < lineCount; i++) {
        lines.push(new Line());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      lines.forEach(line => {
        line.update();
        line.draw(ctx);
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroContainer>
      <FlowCanvas ref={canvasRef} />
      <VideoBackground autoPlay loop muted playsInline>
        {/* Make sure your video file is in public/videos/military-truck-hero_1.mp4 */}
        <source src="/videos/military-truck-hero_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <HeroContent>
        <HeroTagline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Clean Power from <EmphasizedText>Thin Air.</EmphasizedText>
        </HeroTagline>
        <HeroSubhead
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Deployable zero-emission energy, powered by compressed air and engineered for anywhere the grid can't reach.
        </HeroSubhead>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PrimaryButton to="/investors">Request Investor Deck</PrimaryButton>
          <SecondaryButton to="/contact">Join the Energy Revolution</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
      
      <ScrollIndicator
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={scrollToContent}
      >
        <motion.div
          animate={{
            y: [0, 8, 0], // Bounce animation
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero; 