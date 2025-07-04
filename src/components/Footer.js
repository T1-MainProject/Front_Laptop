import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterInner>
        <FooterTop>
          <FooterLogo>
            <Link to="/">
              <GradientText>SCANCER</GradientText>
            </Link>
          </FooterLogo>
          
          <FooterNav>
            <FooterNavColumn>
              <FooterNavTitle>제품</FooterNavTitle>
              <FooterNavLink href="#">솔루션</FooterNavLink>
              <FooterNavLink href="#">가격</FooterNavLink>
              <FooterNavLink href="#">데모</FooterNavLink>
              <FooterNavLink href="#">사례</FooterNavLink>
            </FooterNavColumn>
            
            <FooterNavColumn>
              <FooterNavTitle>회사</FooterNavTitle>
              <FooterNavLink href="#">소개</FooterNavLink>
              <FooterNavLink href="#">팀</FooterNavLink>
              <FooterNavLink href="#">채용</FooterNavLink>
              <FooterNavLink href="#">블로그</FooterNavLink>
            </FooterNavColumn>
            
            <FooterNavColumn>
              <FooterNavTitle>리소스</FooterNavTitle>
              <FooterNavLink href="#">도움말</FooterNavLink>
              <FooterNavLink href="#">API 문서</FooterNavLink>
              <FooterNavLink href="#">튜토리얼</FooterNavLink>
              <FooterNavLink href="#">커뮤니티</FooterNavLink>
            </FooterNavColumn>
            
            <FooterNavColumn>
              <FooterNavTitle>문의</FooterNavTitle>
              <FooterNavLink href="mailto:contact@scancer.com">contact@scancer.com</FooterNavLink>
              <FooterNavLink href="tel:+8210-1234-5678">02-1234-5678</FooterNavLink>
              <FooterNavLink>서울특별시 강남구 역삼동 123-45</FooterNavLink>
            </FooterNavColumn>
          </FooterNav>
        </FooterTop>
        
        <FooterDivider />
        
        <FooterBottom>
          <FooterCopyright>&copy; {currentYear} SCANCER. All rights reserved.</FooterCopyright>
          
          <FooterSocial>
            <SocialLink 
              as={motion.a} 
              href="#" 
              target="_blank"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon>📱</SocialIcon>
            </SocialLink>
            <SocialLink 
              as={motion.a} 
              href="#" 
              target="_blank"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon>💬</SocialIcon>
            </SocialLink>
            <SocialLink 
              as={motion.a} 
              href="#" 
              target="_blank"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon>📧</SocialIcon>
            </SocialLink>
            <SocialLink 
              as={motion.a} 
              href="#" 
              target="_blank"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon>📰</SocialIcon>
            </SocialLink>
          </FooterSocial>
          
          <FooterLinks>
            <FooterLink href="#">이용약관</FooterLink>
            <FooterLink href="#">개인정보처리방침</FooterLink>
            <FooterLink href="#">법적고지</FooterLink>
          </FooterLinks>
        </FooterBottom>
      </FooterInner>
      
      <FooterAccent />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #0A0E17;
  padding: 80px 0 0;
  position: relative;
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    filter: blur(80px);
    z-index: 0;
    opacity: 0.1;
  }
  
  &::before {
    background: #00C4C4;
    top: -150px;
    left: -150px;
  }
  
  &::after {
    background: #9A5AFF;
    bottom: -150px;
    right: -150px;
  }
`;

const FooterInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const FooterLogo = styled.div`
  flex: 1;
  
  a {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #00C4C4 0%, #33CFFF 50%, #9A5AFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const FooterNav = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterNavColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterNavTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const FooterNavLink = styled.a`
  color: ${({ theme }) => theme?.colors?.textSecondary || '#CCCCCC'};
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.95rem;
  
  &:hover {
    color: #33CFFF;
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.02) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
  margin: 3rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FooterCopyright = styled.p`
  color: ${({ theme }) => theme?.colors?.textSecondary || '#CCCCCC'};
  font-size: 0.95rem;
  
  @media (max-width: 992px) {
    order: 3;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    order: 1;
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const SocialIcon = styled.span`
  font-size: 1.2rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 992px) {
    order: 2;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem 2rem;
  }
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme?.colors?.textSecondary || '#CCCCCC'};
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.9rem;
  
  &:hover {
    color: #33CFFF;
  }
`;

const FooterAccent = styled.div`
  height: 5px;
  background: linear-gradient(90deg, #00C4C4 0%, #33CFFF 50%, #9A5AFF 100%);
`;

export default Footer;
