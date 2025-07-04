// 네이버 클로바 스타일의 색상 테마

const Theme = {
  colors: {
    primary: '#00C4C4',        // 클로바 메인 컬러
    secondary: '#33CFFF',      // 보조 컬러
    accent: '#9A5AFF',         // 강조 컬러
    background: '#0A0E17',     // 배경색
    backgroundLight: '#151B29', // 밝은 배경색
    text: '#FFFFFF',           // 기본 텍스트
    textSecondary: '#CCCCCC',   // 보조 텍스트
    border: '#2A334A',          // 테두리
    gradient: 'linear-gradient(90deg, #00C4C4 0%, #33CFFF 50%, #9A5AFF 100%)', // 그라디언트
  },
  fonts: {
    main: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1440px',
  },
  transitions: {
    easeOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeInOut: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
    bouncy: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.15)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.2)',
    large: '0 8px 30px rgba(0, 0, 0, 0.3)',
    glow: '0 0 20px rgba(0, 196, 196, 0.5)',
  },
};

export default Theme;
