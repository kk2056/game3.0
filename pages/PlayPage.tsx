import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GAMES, AD_SLOTS } from '../constants';
import { AdUnit } from '../components/AdUnit';
import { SeoWrapper } from '../components/SeoWrapper';
import { ArrowLeft, Maximize2, Share2, Monitor, Smartphone } from 'lucide-react';

export const PlayPage: React.FC = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const game = GAMES.find(g => g.id === gameId);

  useEffect(() => {
    if (!game) {
      navigate('/');
    }
    setIsLoading(true);
  }, [game, navigate]);

  if (!game) return null;

  // Find related games (excluding current)
  const relatedGames = GAMES.filter(g => g.id !== game.id).slice(0, 3);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: game.title,
        text: `I'm playing ${game.title} on SnakeGame.cfd. Come challenge me!`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Link copied to clipboard!');
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <SeoWrapper 
      title={`Play ${game.title} Online - Free No Download`} 
      description={`Play ${game.title} for free in your browser instantly. ${game.description} Optimized for mobile and desktop, no installation required.`}
    >
      <div className="animate-fade-in">
        {/* Navigation & Breadcrumbs */}
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center text-slate-400 hover:text-white transition-colors group text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Games
          </Link>
        </div>

        {/* Main Game Container */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl mb-8 relative">
          <div className="bg-slate-900/50 p-4 flex flex-wrap justify-between items-center border-b border-slate-700 backdrop-blur">
             <div>
               <h1 className="text-xl font-bold text-white flex items-center gap-2">
                 {game.title}
               </h1>
               <span className="text-xs text-slate-400 hidden md:inline-block">
                 {game.category} • HTML5 • Free
               </span>
             </div>
             
             <div className="flex items-center gap-3">
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-md text-sm font-medium transition-colors"
                  aria-label="Share Game"
                >
                  <Share2 className="w-4 h-4" /> <span className="hidden sm:inline">Share</span>
                </button>
             </div>
          </div>

          {/* Game Area - Aspect Ratio 16:9 or Fixed Height */}
          <div className="relative w-full bg-black" style={{ height: 'min(80vh, 650px)' }}>
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white z-10">
                <div className="w-10 h-10 border-4 border-slate-700 border-t-purple-500 rounded-full animate-spin mb-4"></div>
                <p className="text-sm font-medium text-slate-400">Loading game resources...</p>
              </div>
            )}
            <iframe
              src={game.src}
              title={`Play ${game.title}`}
              className="w-full h-full border-0 block"
              allowFullScreen
              scrolling="no"
              onLoad={handleIframeLoad}
              allow="autoplay; fullscreen; clipboard-write"
            />
          </div>

          {/* Controls Bar */}
          <div className="p-3 bg-slate-900 border-t border-slate-700 flex justify-between items-center text-xs md:text-sm text-slate-400">
             <div className="flex items-center gap-4">
               <span className="flex items-center gap-1" title="Desktop Support"><Monitor className="w-3 h-3" /> Desktop</span>
               <span className="flex items-center gap-1" title="Mobile Support"><Smartphone className="w-3 h-3" /> Mobile</span>
             </div>
             <div className="text-slate-500 text-xs">
               If the game displays incorrectly on mobile, try rotating your screen.
             </div>
          </div>
        </div>

        {/* Below Game Ad - High CPM location */}
        <AdUnit slotId={AD_SLOTS.GAME_BOTTOM} format="auto" className="min-h-[250px]" label="You Might Like" />

        {/* Game Description */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-slate-800 rounded-xl p-6 border border-slate-700 h-fit">
            <h2 className="text-lg font-bold text-white mb-3">About {game.title}</h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              {game.description} <br/><br/>
              This game is part of our {game.category} category. It is fully optimized for modern browsers, requiring no plugins (like Flash).
              Whether you use a touchscreen, mouse, or keyboard, {game.title} offers a smooth 60fps gaming experience.
              If the game loads slowly, please check your internet connection.
            </p>
          </div>

          {/* Related Games Sidebar */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 px-1">Related Games</h3>
            <div className="space-y-3">
               {relatedGames.map(related => (
                 <Link 
                   key={related.id} 
                   to={`/play/${related.id}`}
                   className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg border border-slate-700 hover:border-purple-500 transition-all hover:bg-slate-750 group"
                 >
                    <div className="w-12 h-12 bg-slate-900 rounded flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      🎮
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-white text-sm truncate group-hover:text-purple-300 transition-colors">{related.title}</h4>
                      <span className="text-xs text-slate-500">{related.category}</span>
                    </div>
                 </Link>
               ))}
            </div>
          </div>
        </div>
      </div>
    </SeoWrapper>
  );
};