import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <AboutSection />
            </>
          } />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<Features />} />
          <Route path="*" element={
            <div style={{ 
              height: '100vh', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center',
              padding: '2rem'
            }}>
              <h1 style={{ marginBottom: '2rem' }}>페이지를 찾을 수 없습니다.</h1>
              <a 
                href="/"
                style={{
                  background: 'linear-gradient(90deg, #00C4C4 0%, #33CFFF 100%)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(0, 196, 196, 0.3)'
                }}
              >
                홈으로 돌아가기
              </a>
            </div>
          } />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
