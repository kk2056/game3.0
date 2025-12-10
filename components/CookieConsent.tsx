import React, { useState, useEffect } from 'react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-purple-500/30 p-4 z-50 backdrop-blur-md shadow-[0_-5px_20px_rgba(0,0,0,0.3)] animate-fade-in">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300">
          <p>
            <strong className="text-white">We value your privacy.</strong> We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies in accordance with GDPR and CCPA regulations.
            <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline ml-2">Read Privacy Policy</a>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={handleAccept}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-colors shadow-lg shadow-purple-900/20"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};