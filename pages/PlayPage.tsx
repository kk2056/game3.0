import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GAMES, AD_SLOTS } from '../constants';
import { AdUnit } from '../components/AdUnit';
import { SeoWrapper } from '../components/SeoWrapper';
import { ArrowLeft, Share2, Monitor, Smartphone } from 'lucide-react';

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

  const relatedGames = GAMES.filter(g => g.id !== game.id).slice(0, 3);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: game.title,
        text: `Play ${game.title} - Free Online Game 2025`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <SeoWrapper 
      title={`Play ${game.title} Online - Free No Download`} 
      description={`${game.title}: Free online game 2025. ${game.description.substring(0, 150)}...`}
    >
      <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center text-slate-400 hover:text-white transition-colors group text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Games
          </Link>
        </div>

        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl mb-8 relative">
          <div className="bg-slate-900/50 p-4 flex flex-wrap justify-between items-center border-b border-slate-700 backdrop-blur">
             <div>
               <h1 className="text-xl font-bold text-white flex items-center gap-2">
                 {game.title}
               </h1>
               <span className="text-xs text-slate-400 hidden md:inline-block">
                 {game.category} • HTML5 • Free 2025
               </span>
             </div>
             
             <button 
               onClick={handleShare}
               className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-md text-sm font-medium transition-colors"
             >
               <Share2 className="w-4 h-4" /> <span className="hidden sm:inline">Share</span>
             </button>
          </div>

          <div className="relative w-full bg-black" style={{ height: 'min(80vh, 650px)' }}>
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white z-10">
                <div className="w-10 h-10 border-4 border-slate-700 border-t-purple-500 rounded-full animate-spin mb-4"></div>
                <p className="text-sm font-medium text-slate-400">Loading game...</p>
              </div>
            )}
            <iframe
              src={game.src}
              title={`Play ${game.title}`}
              className="w-full h-full border-0 block"
              allowFullScreen
              scrolling="no"
              onLoad={handleIframeLoad}
              allow="autoplay; fullscreen; clipboard-write; encrypted-media"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
            />
          </div>

          <div className="p-3 bg-slate-900 border-t border-slate-700 flex justify-between items-center text-xs md:text-sm text-slate-400">
             <div className="flex items-center gap-4">
               <span className="flex items-center gap-1"><Monitor className="w-3 h-3" /> Desktop</span>
               <span className="flex items-center gap-1"><Smartphone className="w-3 h-3" /> Mobile</span>
             </div>
             <div className="text-slate-500 text-xs">
               Optimized for Chrome / Safari
             </div>
          </div>
        </div>

        {/* Strategy and More Games Sections requested by user */}
        <div className="strategy mt-8 text-gray-300 p-4 bg-gray-800 rounded-lg">
          Classics never die! Snake Game Unblocked 2025 brings you back to the golden era of gaming, now fully optimized for your browser. Whether you need a quick distraction during a study break or want to test your reflexes, this is the ultimate choice. The mechanics are deceptively simple: guide your snake to eat apples; with every bite, you grow longer, and the game gets harder. In this 2025 optimized version, we have stripped away all heavy scripts, ensuring zero lag even on the oldest school Chromebooks.
          <br /><br />
          Pro Strategy: Beginners often die from greed. Patience is key. Stick to the walls and move in a "U" pattern to maximize screen space. Never box yourself in for a single apple. As your snake gets longer, avoiding sharp, sudden turns becomes essential for survival. No download required—just click and see how long you can grow!
        </div>

        <div className="other-games mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">More Unblocked Games 2025</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
              <li className="mb-2"><a href="https://snakegame.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Snake Game Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Zero Lag Games Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Free Games Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://nodownload2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play No Download Games Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Unblocked Games 2025 (Main)</a></li>
              <li className="mb-2"><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Best Unblocked Games 2025</a></li>
              <li className="mb-2"><a href="https://promax.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play ProMax Games Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Retro Bowl Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play 1v1.LOL Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://drift2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://slope2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Slope Game Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://gd2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://motox3m2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Moto X3M Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://surfers2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://run32025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Run 3 Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://fireboy2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Fireboy & Watergirl Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://paperio2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Paper.io Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://driftbest2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters MAX Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://gd-full2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Full Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://subway2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers World Unblocked 2025</a></li>
          </ul>
        </div>

        <AdUnit slotId={AD_SLOTS.GAME_BOTTOM} format="auto" className="min-h-[250px]" label="Sponsored" />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Main Content Area */}
          <div className="md:col-span-2 bg-slate-800 rounded-xl p-6 border border-slate-700 h-fit shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/30 pb-2">
              About {game.title}
            </h2>
            <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed whitespace-pre-line">
              {game.description}
            </div>
            
            <div className="mt-8 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
              <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Why play on SnakeGame.cfd?</h3>
              <ul className="text-sm text-slate-400 space-y-1 list-disc pl-4">
                <li>No Downloads Required</li>
                <li>Secure & Virus-Free</li>
                <li>Runs on all modern devices</li>
                <li>100% Free Forever</li>
              </ul>
            </div>
          </div>

          <aside>
            <h3 className="text-lg font-bold text-white mb-4 px-1">You May Also Like</h3>
            <div className="space-y-3">
               {relatedGames.map(related => (
                 <Link 
                   key={related.id} 
                   to={`/play/${related.id}`}
                   className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg border border-slate-700 hover:border-purple-500 transition-all hover:bg-slate-750 group shadow-md"
                 >
                    <div className="w-12 h-12 bg-slate-900 rounded flex items-center justify-center text-xl group-hover:scale-110 transition-transform text-purple-400">
                      🎮
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-white text-sm truncate group-hover:text-purple-300 transition-colors">{related.title}</h4>
                      <span className="text-xs text-slate-500 block mt-0.5">{related.category}</span>
                    </div>
                 </Link>
               ))}
            </div>
          </aside>
        </div>
      </div>
    </SeoWrapper>
  );
};