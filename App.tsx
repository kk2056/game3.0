import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PlayPage } from './pages/PlayPage';
import { AboutPage, ContactPage, PrivacyPage } from './pages/StaticPages';
import { CookieConsent } from './components/CookieConsent';

const App: React.FC = () => {
  
  useEffect(() => {
    // Remove loader once React mounts
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 300);
    }
  }, []);

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play/:gameId" element={<PlayPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <CookieConsent />
      </Layout>
    </HashRouter>
  );
};

export default App;