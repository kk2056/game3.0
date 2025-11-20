import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gamepad2, Info, Mail, Shield, Home } from 'lucide-react';
import { AD_SLOTS } from '../constants';
import { AdUnit } from './AdUnit';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
    { path: '/privacy', label: 'Privacy', icon: Shield },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-lg group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-shadow">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                SnakeGame.cfd
              </span>
            </Link>

            {/* Desktop Nav - Icons Only */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    title={link.label}
                    className={`p-2 rounded-full text-sm font-medium transition-all flex items-center justify-center ${
                      isActive(link.path)
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Open Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-600/30'
                    : 'text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Header Ad */}
      <div className="container mx-auto px-4 pt-4">
        <AdUnit slotId={AD_SLOTS.HEADER} format="auto" className="min-h-[90px]" label="Advertisement" />
      </div>

      {/* Main Content with Sidebar Layout */}
      <div id="main-content" className="flex-1 container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left/Main Content */}
        <main className="flex-1 w-full min-w-0">
          {children}
        </main>

        {/* Right Sidebar - Optimized for Ads */}
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-8">
          {/* Search / Info Widget */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">🔥 Trending Games</h3>
            <p className="text-slate-400 text-sm mb-4">
              Most popular games this week. Click to play instantly.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-purple-400">
                <span className="text-xs bg-purple-900/50 px-2 py-1 rounded min-w-[20px] text-center">1</span>
                <Link to="/play/sudoku" className="hover:underline hover:text-purple-300">Sudoku Master</Link>
              </li>
              <li className="flex items-center gap-2 text-purple-400">
                <span className="text-xs bg-purple-900/50 px-2 py-1 rounded min-w-[20px] text-center">2</span>
                <Link to="/play/falling-cubes" className="hover:underline hover:text-purple-300">Falling Cubes</Link>
              </li>
              <li className="flex items-center gap-2 text-purple-400">
                <span className="text-xs bg-purple-900/50 px-2 py-1 rounded min-w-[20px] text-center">3</span>
                <Link to="/play/checkers" className="hover:underline hover:text-purple-300">Classic Checkers</Link>
              </li>
            </ul>
          </div>

          {/* Sticky Ad Container */}
          <div className="sticky top-24">
            <AdUnit slotId={AD_SLOTS.SIDEBAR} format="vertical" className="min-h-[600px]" label="Featured" />
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h4 className="text-white font-bold mb-4">SnakeGame.cfd</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your premier destination for free HTML5 online games.
              Compatible with all devices. Play anywhere, anytime.
            </p>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-slate-500 text-sm">
            © 2025 SnakeGame.cfd. All rights reserved. 
          </div>
        </div>
      </footer>
    </div>
  );
};