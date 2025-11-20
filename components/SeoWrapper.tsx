import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const SeoWrapper: React.FC<SeoProps> = ({ title, description, children }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Document Title
    document.title = `${title} | SnakeGame.cfd`;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Add Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    const url = `https://snakegame.cfd/#${location.pathname}`;
    if (canonical) {
      canonical.setAttribute('href', url);
    }

    // Scroll to top on route change for better UX
    window.scrollTo(0, 0);
  }, [title, description, location]);

  return <>{children}</>;
};