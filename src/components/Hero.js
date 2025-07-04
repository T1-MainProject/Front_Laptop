import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);
  
  useEffect(() => {
    // GSAP 애니메이션 설정
    const particles = particlesRef.current.children;
    
    gsap.to(particles, {
      x: 'random(-30, 30)', 
      y: 'random(-30, 30)', 
      duration: 'random(2, 5)',
      ease: 'sine.inOut',
      stagger: 0.02,
      repeat: -1,
      yoyo: true
    });
    
    // 마우스 움직임에 따른 패럴랙스 효과
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.005;
      const moveY = (clientY - window.innerHeight / 2) * 0.005;
      
      gsap.to(heroRef.current, {
        x: moveX,
        y: moveY,
        duration: 0.8,
        ease: 'power2.out'
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 파티클 생성 (클로바 스타일의 배경)
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 8 + 2;
      const opacity = Math.random() * 0.5 + 0.1;
      particles.push(
        <Particle
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            opacity,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00C4C4' : i % 3 === 1 ? '#33CFFF' : '#9A5AFF',
          }}
        />
      );
    }
    return particles;
  };

  return (
    <HeroSection>
      <ParticlesContainer ref={particlesRef}>
        {renderParticles()}
      </ParticlesContainer>
      
      <ContentContainer ref={heroRef}>
        <TextContainer>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <GradientText>인공지능의 새로운 시대</GradientText>
            <br />
            SCANCER와 함께하세요
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            미래 기술과 함께하는 혁신적인 경험을 제공합니다.
            <br />
            SCANCER의 AI 기술로 당신의 비즈니스를 혁신하세요.
          </motion.p>
          
          <ButtonContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            >
              <PrimaryButton
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                시작하기
              </PrimaryButton>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
            >
              <SecondaryButton
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                더 알아보기
              </SecondaryButton>
            </motion.div>
          </ButtonContainer>
        </TextContainer>
        
        <ImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <HeroImage>
              <GlowingOrb />
              <GlowingRing delay={0} />
              <GlowingRing delay={1} />
              <GlowingRing delay={2} />
            </HeroImage>
          </motion.div>
        </ImageContainer>
      </ContentContainer>
      
      <ScrollIndicator
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ScrollArrow />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Particle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(3px);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 3rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  
  p {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.6;
    color: ${({ theme }) => theme?.colors?.textSecondary || '#CCCCCC'};
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 992px) {
    max-width: 100%;
    
    p {
      margin-left: auto;
      margin-right: auto;
      max-width: 500px;
    }
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #00C4C4 0%, #33CFFF 50%, #9A5AFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(90deg, #00C4C4 0%, #33CFFF 100%);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 196, 196, 0.3);
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 600px;
  
  @media (max-width: 992px) {
    justify-content: center;
    max-width: 450px;
  }
`;

const HeroImage = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 992px) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const GlowingOrb = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00C4C4 0%, #33CFFF 100%);
  box-shadow: 0 0 60px rgba(0, 196, 196, 0.8);
  position: absolute;
  z-index: 2;
  
  @media (max-width: 992px) {
    width: 60px;
    height: 60px;
  }
`;

const GlowingRing = styled.div`
  width: ${({ delay }) => 150 + delay * 70}px;
  height: ${({ delay }) => 150 + delay * 70}px;
  border-radius: 50%;
  border: 2px solid rgba(51, 207, 255, ${({ delay }) => 0.5 - delay * 0.15});
  position: absolute;
  animation: pulse 3s ease-in-out ${({ delay }) => delay}s infinite;
  
  @media (max-width: 992px) {
    width: ${({ delay }) => 120 + delay * 50}px;
    height: ${({ delay }) => 120 + delay * 50}px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

const ScrollArrow = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #00C4C4;
  border-left: 0;
  border-top: 0;
  transform: rotate(45deg);
`;

export default Hero;
