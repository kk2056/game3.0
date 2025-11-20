import React from 'react';
import { GameCard } from '../components/GameCard';
import { AdUnit } from '../components/AdUnit';
import { SeoWrapper } from '../components/SeoWrapper';
import { GAMES, AD_SLOTS } from '../constants';
import { Gamepad2, Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <SeoWrapper 
      title="Free Online Games - Play Instantly No Downloads" 
      description="The best free online games of 2025. Play Sudoku, Tetris, Checkers and more HTML5 games. Compatible with mobile and desktop. No installation required."
    >
      <div className="space-y-10 animate-fade-in">
        
        {/* Hero Section - Optimized for LCP (No External Images) */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-center py-20 px-6 shadow-2xl border border-white/10">
          {/* CSS Mesh Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Weekly Game Updates</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Play Instantly <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                No Downloads
              </span>
            </h1>
            
            <p className="text-indigo-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience fast, smooth HTML5 gaming.
              From brain-teasers to classic arcade action, enjoy gaming directly in your browser.
            </p>

            <div className="flex justify-center gap-4">
              <a href="#games" className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-3 rounded-full font-bold transition-colors shadow-lg shadow-purple-900/20">
                Start Playing
              </a>
            </div>
          </div>
        </div>

        {/* Game Grid */}
        <div id="games" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-purple-500" />
              Featured Games
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* In-Feed Ad - Fixed Height to prevent CLS */}
        <AdUnit slotId={AD_SLOTS.IN_CONTENT} className="min-h-[280px]" label="Sponsored Content" />

        {/* SEO Text Block - Semantic HTML */}
        <section className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-4">Why Choose SnakeGame.cfd?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-400 leading-relaxed text-sm md:text-base">
            <div>
              <p className="mb-4">
                Welcome to <strong>SnakeGame.cfd</strong>, your trusted platform for premium browser games.
                Unlike sites cluttered with pop-ups, we focus on a lightweight, fast, and distraction-free gaming experience. Our HTML5 technology ensures games run perfectly on iPhone, Android, iPad, and Desktop computers.
              </p>
              <p>
                Whether you want to train your brain with <em>Sudoku Master</em> or relax with <em>Classic Checkers</em>, our library is curated to provide only quality gameplay.
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Instant Access: No downloads, no installs, no storage usage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Safe & Secure: Virus-free environment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Cross-Platform: Runs on 4G/5G/WiFi smoothly
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Forever Free: No in-app purchases required
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </SeoWrapper>
  );
};