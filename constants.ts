import { Game } from './types';

// AdSense Client ID
export const AD_CLIENT_ID = "ca-pub-9774042341049510";

// Placeholder Slot IDs
export const AD_SLOTS = {
  HEADER: "1234567890", 
  SIDEBAR: "0987654321",
  IN_CONTENT: "1122334455", 
  GAME_BOTTOM: "5566778899"
};

export const GAMES: Game[] = [
  {
    id: 'sudoku',
    title: 'Sudoku Master',
    description: 'Challenge your logic. Featuring multiple difficulty levels from beginner to expert. The best choice to train your brain.',
    src: 'https://playpager.com/embed/sudoku/index.html',
    iconName: 'Grid3X3',
    category: 'Puzzle'
  },
  {
    id: 'falling-cubes',
    title: 'Falling Cubes (Tetris)',
    description: 'A modern remake of the classic block stacking game. Arrange the falling blocks, clear lines, and beat the high score!',
    src: 'https://playpager.com/embed/cubes/index.html',
    iconName: 'Blocks',
    category: 'Arcade'
  },
  {
    id: 'checkers',
    title: 'Classic Checkers',
    description: 'The timeless strategy board game. Play against an intelligent AI and test your planning and foresight skills.',
    src: 'https://playpager.com/embed/checkers/index.html',
    iconName: 'CircleDot',
    category: 'Strategy'
  },
  {
    id: 'othello',
    title: 'Othello Reversi',
    description: 'A minute to learn, a lifetime to master. Flip your opponent\'s pieces to dominate the board.',
    src: 'https://playpager.com/embed/reversi/index.html',
    iconName: 'Circle',
    category: 'Strategy'
  },
  {
    id: 'word-puzzle',
    title: 'Word Puzzle',
    description: 'Find hidden words in the jumbled letters. Test your vocabulary and spelling skills.',
    src: 'https://playpager.com/embed/wordpuzzle/index.html',
    iconName: 'Type',
    category: 'Word'
  }
];