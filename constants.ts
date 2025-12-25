import { Game } from './types';

// AdSense Client ID
export const AD_CLIENT_ID = "ca-pub-9774042341049510";

// AD SLOT IDs
export const AD_SLOTS = {
  HEADER: "1234567890",    
  SIDEBAR: "0987654321",   
  IN_CONTENT: "1122334455", 
  GAME_BOTTOM: "5566778899" 
};

export const GAMES: Game[] = [
  {
    id: 'snake',
    title: 'Snake Game Unblocked',
    description: `Classics never die! Snake Game Unblocked 2025 brings you back to the golden era of gaming, now fully optimized for your browser. Whether you need a quick distraction during a study break or want to test your reflexes, this is the ultimate choice. The mechanics are deceptively simple: guide your snake to eat apples; with every bite, you grow longer, and the game gets harder. In this 2025 optimized version, we have stripped away all heavy scripts, ensuring zero lag even on the oldest school Chromebooks.

Pro Strategy: Beginners often die from greed. Patience is key. Stick to the walls and move in a "U" pattern to maximize screen space. Never box yourself in for a single apple. As your snake gets longer, avoiding sharp, sudden turns becomes essential for survival. No download required—just click and see how long you can grow!`,
    src: 'https://playpager.com/embed/snake/index.html',
    iconName: 'Gamepad2',
    category: 'Arcade'
  },
  {
    id: 'sudoku',
    title: 'Sudoku Master',
    description: `Unlock your mental potential with Sudoku Master, the premier choice for logic puzzle enthusiasts in 2025. Unlike simple distractions, Sudoku is a scientifically recognized cognitive workout that enhances memory, concentration, and logical reasoning skills. Our updated 2025 edition features a sleek, responsive interface that works flawlessly across all devices without requiring any downloads or installations.`,
    src: 'https://playpager.com/embed/sudoku/index.html',
    iconName: 'Grid3X3',
    category: 'Puzzle'
  },
  {
    id: 'falling-cubes',
    title: 'Falling Cubes',
    description: `Prepare for the ultimate arcade challenge with Falling Cubes, a high-definition reimaging of the legendary block-stacking genre for the modern web. In 2025, we've stripped away the bloat to deliver a pure, high-performance HTML5 experience that tests your reflexes and spatial awareness like never before.`,
    src: 'https://playpager.com/embed/cubes/index.html',
    iconName: 'Blocks',
    category: 'Arcade'
  },
  {
    id: 'checkers',
    title: 'Classic Checkers',
    description: `Experience the rich history and deep strategy of Classic Checkers (Draughts), now remastered for 2025's web standards. As one of the world's oldest strategy board games, Checkers has stood the test of time by offering a battle of wits that is accessible to children yet challenging enough for grandmasters.`,
    src: 'https://playpager.com/embed/checkers/index.html',
    iconName: 'CircleDot',
    category: 'Strategy'
  },
  {
    id: 'othello',
    title: 'Othello Reversi',
    description: `Dive into the captivating world of Othello Reversi, the abstract strategy game where the balance of power can shift in a heartbeat. Famous for the maxim "A minute to learn, a lifetime to master," this game challenges players to outmaneuver their opponent on an 8x8 grid.`,
    src: 'https://playpager.com/embed/reversi/index.html',
    iconName: 'Circle',
    category: 'Strategy'
  },
  {
    id: 'word-puzzle',
    title: 'Word Puzzle',
    description: `Challenge your vocabulary and observation skills with Word Puzzle 2025, the definitive word search experience for the modern web. Designed for linguists, students, and casual gamers alike, this game combines the relaxation of classic pen-and-paper puzzles with the convenience of digital play.`,
    src: 'https://playpager.com/embed/wordpuzzle/index.html',
    iconName: 'Type',
    category: 'Word'
  }
];