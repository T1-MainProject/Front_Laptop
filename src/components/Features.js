import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const features = [
    {
      icon: '🧠',
      title: '고급 인공지능',
      description: '최신 딥러닝 알고리즘을 기반으로 정확하고 신속한 결과를 제공합니다.',
      color: '#00C4C4'
    },
    {
      icon: '🔍',
      title: '정밀 분석',
      description: '데이터를 세밀하게 분석하여 숨겨진 패턴과 인사이트를 발견합니다.',
      color: '#33CFFF'
    },
    {
      icon: '🚀',
      title: '빠른 성능',
      description: '최적화된 시스템으로 대용량 데이터도 빠르게 처리합니다.',
      color: '#9A5AFF'
    },
    {
      icon: '🔒',
      title: '안전한 보안',
      description: '엄격한 보안 프로토콜로 민감한 데이터를 안전하게 보호합니다.',
      color: '#00C4C4'
    },
    {
      icon: '📊',
      title: '실시간 대시보드',
      description: '직관적인 대시보드로 중요 지표를 실시간으로 모니터링합니다.',
      color: '#33CFFF'
    },
    {
      icon: '🔄',
      title: '자동화 솔루션',
      description: '반복 작업을 자동화하여 작업 효율성을 크게 향상시킵니다.',
      color: '#9A5AFF'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <FeaturesSection id="features">
      <SectionHeader>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <GradientText>핵심 기능</GradientText>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          SCANCER의 강력한 기능으로 새로운 가능성을 발견하세요
        </motion.p>
      </SectionHeader>

      <FeatureGrid
        as={motion.div}
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            as={motion.div}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <FeatureIconContainer color={feature.color}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
            </FeatureIconContainer>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeaturesSection>
  );
};

const FeaturesSection = styled.section`
  padding: 120px 0;
  background-color: ${({ theme }) => theme?.colors?.backgroundLight || '#151B29'};
  position: relative;
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 196, 196, 0.15) 0%, rgba(10, 14, 23, 0) 70%);
    z-index: 0;
  }
  
  &::before {
    top: -200px;
    left: -200px;
  }
  
  &::after {
    bottom: -200px;
    right: -200px;
    background: radial-gradient(circle, rgba(154, 90, 255, 0.15) 0%, rgba(10, 14, 23, 0) 70%);
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 80px;
  position: relative;
  z-index: 1;
  
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: ${({ theme }) => theme?.colors?.textSecondary || '#CCCCCC'};
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #00C4C4 0%, #33CFFF 50%, #9A5AFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const FeatureCard = styled.div`
  background: rgba(21, 27, 41, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const FeatureIconContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ color }) => `radial-gradient(circle, ${color}20 0%, transparent 70%)`};
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid ${({ color }) => `${color}40`};
    border-radius: 50%;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.2rem;
  position: relative;
  z-index: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme?.colors?.textSecondary || '#CCCCCC'};
  line-height: 1.6;
  font-size: 1rem;
`;

export default Features;
