import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show with a slight delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] p-6 md:flex items-center justify-between gap-6">
        <div className="text-slate-300 text-sm leading-relaxed mb-4 md:mb-0">
          <h4 className="text-white font-bold mb-1 text-lg">🍪 Cookie Consent</h4>
          <p>
            We use cookies to personalize content and ads, to provide social media features, and to analyze our traffic. 
            We also share information about your use of our site with our social media, advertising, and analytics partners.
            By continuing to use our website, you agree to our 
            <Link to="/privacy" className="text-purple-400 hover:text-white underline decoration-purple-500/50 hover:decoration-white ml-1 transition-all">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-3">
          <button 
            onClick={handleAccept}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-purple-900/40 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
};