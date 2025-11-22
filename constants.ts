import { Game } from './types';

// AdSense Client ID
export const AD_CLIENT_ID = "ca-pub-9774042341049510";

// AD SLOT IDs - YOU MUST REPLACE THESE WITH REAL IDs FROM GOOGLE ADSENSE DASHBOARD
export const AD_SLOTS = {
  HEADER: "1234567890",    // Replace with real Header ad unit ID
  SIDEBAR: "0987654321",   // Replace with real Sidebar ad unit ID
  IN_CONTENT: "1122334455", // Replace with real In-feed ad unit ID
  GAME_BOTTOM: "5566778899" // Replace with real Bottom ad unit ID
};

export const GAMES: Game[] = [
  {
    id: 'sudoku',
    title: 'Sudoku Master',
    description: 'Play Sudoku Master online for free 2025 edition. This classic logic puzzle is unblocked and requires no download to start. Enjoy instant play HTML5 gaming that trains your brain with varying difficulty levels. Perfect for desktop and mobile browsers.',
    src: 'https://playpager.com/embed/sudoku/index.html',
    iconName: 'Grid3X3',
    category: 'Puzzle'
  },
  {
    id: 'falling-cubes',
    title: 'Falling Cubes',
    description: 'Experience the ultimate Tetris-style arcade action with Falling Cubes. A completely free 2025 unblocked game that offers instant play without installation. Stack blocks in this lightweight HTML5 browser game designed for quick fun. No download required.',
    src: 'https://playpager.com/embed/cubes/index.html',
    iconName: 'Blocks',
    category: 'Arcade'
  },
  {
    id: 'checkers',
    title: 'Checkers',
    description: 'Enjoy Classic Checkers, the definitive strategy board game for free 2025. This unblocked HTML5 version allows for instant play against smart AI. No download needed—just open your browser and test your tactical skills in this timeless challenge.',
    src: 'https://playpager.com/embed/checkers/index.html',
    iconName: 'CircleDot',
    category: 'Strategy'
  },
  {
    id: 'othello',
    title: 'Othello Reversi',
    description: 'Master the art of strategy with Othello Reversi. Play this free 2025 board game instantly in your browser. It is an unblocked, no download required HTML5 experience where you flip opponent pieces to dominate the board.',
    src: 'https://playpager.com/embed/reversi/index.html',
    iconName: 'Circle',
    category: 'Strategy'
  },
  {
    id: 'word-puzzle',
    title: 'Word Puzzle',
    description: 'Expand your vocabulary with Word Puzzle, a free 2025 brain teaser. This unblocked word search game features instant play mechanics with no download necessary. A perfect HTML5 educational game to sharpen your spelling skills anytime.',
    src: 'https://playpager.com/embed/wordpuzzle/index.html',
    iconName: 'Type',
    category: 'Word'
  }
];