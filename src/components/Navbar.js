import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarInner>
        <LogoContainer>
          <Link to="/">
            <Logo>SCANCER</Logo>
          </Link>
        </LogoContainer>

        <DesktopMenu>
          <NavLinks>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                as={motion.li}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={link.path}>{link.name}</Link>
              </NavLink>
            ))}
          </NavLinks>
          <NavButton
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </NavButton>
        </DesktopMenu>

        <MobileMenuButton 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Hamburger open={mobileMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </MobileMenuButton>

        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              as={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MobileNavLinks>
                {navLinks.map((link, index) => (
                  <MobileNavLink
                    key={index}
                    as={motion.li}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </MobileNavLink>
                ))}
                <NavButton
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  mobile
                >
                  Get Started
                </NavButton>
              </MobileNavLinks>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavbarInner>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background: ${({ scrolled }) => 
    scrolled ? 'rgba(10, 14, 23, 0.9)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ scrolled }) => 
    scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavbarInner = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const LogoContainer = styled.div`
  z-index: 1001;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #00C4C4 0%, #33CFFF 50%, #9A5AFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-right: 2rem;
`;

const NavLink = styled.li`
  position: relative;
  font-weight: 500;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00C4C4 0%, #33CFFF 100%);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NavButton = styled.button`
  background: linear-gradient(90deg, #00C4C4 0%, #33CFFF 100%);
  color: #fff;
  border-radius: 30px;
  padding: ${({ mobile }) => mobile ? '12px 24px' : '10px 20px'};
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 196, 196, 0.3);
  width: ${({ mobile }) => mobile ? '100%' : 'auto'};
  margin: ${({ mobile }) => mobile ? '20px 0 0' : '0'};
`;

const MobileMenuButton = styled.button`
  display: none;
  z-index: 1001;
  
  @media (max-width: 992px) {
    display: block;
  }
`;

const Hamburger = styled.div`
  width: 30px;
  height: 22px;
  position: relative;
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #fff;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .3s ease-in-out;
  }
  
  span:nth-child(1) {
    top: ${({ open }) => (open ? '10px' : '0px')};
    transform: ${({ open }) => (open ? 'rotate(135deg)' : 'rotate(0)')};
  }
  
  span:nth-child(2) {
    top: 10px;
    opacity: ${({ open }) => (open ? '0' : '1')};
    left: ${({ open }) => (open ? '-30px' : '0')};
  }
  
  span:nth-child(3) {
    top: ${({ open }) => (open ? '10px' : '20px')};
    transform: ${({ open }) => (open ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 14, 23, 0.98);
  backdrop-filter: blur(10px);
  padding: 100px 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
  
  @media (min-width: 992px) {
    display: none;
  }
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;

const MobileNavLink = styled.li`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  padding: 10px 0;
`;

export default Navbar;
