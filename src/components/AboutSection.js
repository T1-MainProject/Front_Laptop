import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <AboutContainer id="about">
      <ContentWrapper>
        <LeftContent>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants}>
              <GradientText>SCANCER</GradientText>로<br />
              <span>미래 기술의 한계를 넘어서세요</span>
            </motion.h2>
            
            <motion.p variants={itemVariants}>
              SCANCER는 최첨단 인공지능 기술을 활용하여 비즈니스 혁신을 지원합니다. 
              우리의 솔루션은 복잡한 데이터를 분석하고, 숨겨진 패턴을 발견하여 
              의사결정 과정을 크게 향상시킵니다.
            </motion.p>
            
            <StatsContainer variants={itemVariants}>
              <StatItem>
                <StatValue>98<small>%</small></StatValue>
                <StatLabel>정확도</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>24<small>x</small></StatValue>
                <StatLabel>처리 속도</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>5<small>K+</small></StatValue>
                <StatLabel>사용자</StatLabel>
              </StatItem>
            </StatsContainer>
            
            <motion.div variants={itemVariants}>
              <LearnMoreButton
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                자세히 알아보기
              </LearnMoreButton>
            </motion.div>
          </motion.div>
        </LeftContent>
        
        <RightContent>
          <IllustrationContainer
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <AbstractShape1 />
            <AbstractShape2 />
            <AbstractShape3 />
            
            <MainCircle>
              <InnerCircle>
                <CoreCircle />
              </InnerCircle>
            </MainCircle>
            
            <WaveLines>
              <WaveLine delay={0} />
              <WaveLine delay={0.1} />
              <WaveLine delay={0.2} />
            </WaveLines>
            
            <DataPoints>
              {[...Array(10)].map((_, i) => (
                <DataPoint 
                  key={i}
                  delay={i * 0.1}
                  size={Math.random() * 4 + 2}
                  position={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                />
              ))}
            </DataPoints>
          </IllustrationContainer>
        </RightContent>
      </ContentWrapper>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #0A0E17 0%, #151B29 100%);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(51, 207, 255, 0.1) 0%, rgba(10, 14, 23, 0) 70%);
    top: 10%;
    left: -150px;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  
  p {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.7;
    color: ${({ theme }) => theme?.colors?.textSecondary || '#CCCCCC'};
    margin-bottom: 3rem;
    max-width: 90%;
  }
  
  @media (max-width: 992px) {
    padding-right: 0;
    text-align: center;
    
    p {
      max-width: 100%;
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

const StatsContainer = styled(motion.div)`
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 992px) {
    align-items: center;
  }
`;

const StatValue = styled.span`
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 800;
  background: linear-gradient(90deg, #00C4C4 0%, #33CFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  
  small {
    font-size: 50%;
    margin-left: 2px;
  }
`;

const StatLabel = styled.span`
  color: ${({ theme }) => theme?.colors?.textSecondary || '#CCCCCC'};
  font-size: 0.9rem;
`;

const LearnMoreButton = styled.button`
  background: linear-gradient(90deg, #00C4C4 0%, #33CFFF 100%);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 196, 196, 0.3);
  
  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IllustrationContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 576px) {
    width: 300px;
    height: 300px;
  }
`;

const AbstractShape1 = styled.div`
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(45deg, rgba(0, 196, 196, 0.2), rgba(51, 207, 255, 0.2));
  top: 10%;
  left: 0;
  filter: blur(15px);
  animation: float 10s ease-in-out infinite;
`;

const AbstractShape2 = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 60% 40% 40% 60% / 60% 30% 70% 40%;
  background: linear-gradient(45deg, rgba(154, 90, 255, 0.2), rgba(51, 207, 255, 0.2));
  bottom: 10%;
  right: 5%;
  filter: blur(15px);
  animation: float 12s ease-in-out infinite reverse;
`;

const AbstractShape3 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 30% 70% 50% 50% / 50% 50% 50% 50%;
  background: linear-gradient(45deg, rgba(51, 207, 255, 0.2), rgba(0, 196, 196, 0.2));
  top: 20%;
  right: 10%;
  filter: blur(10px);
  animation: float 8s ease-in-out infinite;
`;

const MainCircle = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 60px rgba(0, 196, 196, 0.2);
  border: 1px solid rgba(51, 207, 255, 0.1);
`;

const InnerCircle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(51, 207, 255, 0.1), rgba(154, 90, 255, 0.1));
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(51, 207, 255, 0.2);
`;

const CoreCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00C4C4 0%, #33CFFF 100%);
  box-shadow: 0 0 30px rgba(0, 196, 196, 0.8);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    top: 25%;
    left: 25%;
    filter: blur(3px);
  }
`;

const WaveLines = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  pointer-events: none;
`;

const WaveLine = styled.div`
  position: absolute;
  width: 110%;
  height: 110%;
  border-radius: 50%;
  border: 1px solid rgba(51, 207, 255, ${({ delay }) => 0.1 - delay * 0.02});
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: wave 8s ease-in-out ${({ delay }) => delay}s infinite;
  
  @keyframes wave {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.1); }
  }
`;

const DataPoints = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const DataPoint = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: #00C4C4;
  border-radius: 50%;
  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  filter: blur(1px);
  animation: pulse 2s ease-in-out ${({ delay }) => delay}s infinite;
`;

export default AboutSection;
