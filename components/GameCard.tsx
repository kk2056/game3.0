import React from 'react';
import { Game } from '../types';
import { Link } from 'react-router-dom';
import { Play, Grid3X3, Boxes, CircleDot, Circle, Type, Gamepad2 } from 'lucide-react';

// Icon mapping
const iconMap: Record<string, any> = {
  'Grid3X3': Grid3X3,
  'Blocks': Boxes, 
  'CircleDot': CircleDot,
  'Circle': Circle,
  'Type': Type,
  'Gamepad2': Gamepad2
};

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const Icon = iconMap[game.iconName] || Grid3X3;

  return (
    <Link 
      to={`/play/${game.id}`}
      className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Decorative Gradient Top */}
      <div className="h-24 bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center">
        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{game.category}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{game.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-1 line-clamp-3">
          {game.description}
        </p>
        
        <div className="mt-auto w-full">
          <div className="w-full py-2 bg-slate-700 group-hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
            <Play className="w-4 h-4 fill-current" />
            Play Now
          </div>
        </div>
      </div>
    </Link>
  );
};