import { Game } from './types';

// AdSense Client ID
export const AD_CLIENT_ID = "ca-pub-9774042341049510";

// AD SLOT IDs - YOU MUST REPLACE THESE WITH REAL IDs FROM GOOGLE ADSENSE DASHBOARD
// 1. Go to AdSense -> Ads -> By ad unit
// 2. Create new Display ads for each section
// 3. Copy the data-ad-slot number here
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
    description: 'Challenge your logic with Sudoku. Featuring multiple difficulty levels from beginner to expert. The best choice to train your brain daily.',
    src: 'https://playpager.com/embed/sudoku/index.html',
    iconName: 'Grid3X3',
    category: 'Puzzle'
  },
  {
    id: 'falling-cubes',
    title: 'Falling Cubes',
    description: 'A modern remake of the classic block stacking game. Arrange the falling blocks, clear lines, and beat the high score!',
    src: 'https://playpager.com/embed/cubes/index.html',
    iconName: 'Blocks',
    category: 'Arcade'
  },
  {
    id: 'checkers',
    title: 'Checkers',
    description: 'The timeless strategy board game. Play against an intelligent AI and test your planning skills.',
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
    description: 'Find hidden words in the jumbled letters. Test your vocabulary and spelling skills in this relaxing game.',
    src: 'https://playpager.com/embed/wordpuzzle/index.html',
    iconName: 'Type',
    category: 'Word'
  }
];