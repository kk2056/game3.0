import { Game } from './types';

// AdSense Client ID
export const AD_CLIENT_ID = "ca-pub-9774042341049510";

// AD SLOT IDs
export const AD_SLOTS = {
  HEADER: "1234567890",    
  SIDEBAR: "0987654321",   
  IN_CONTENT: "1122334455", 
  GAME_TOP: "6677889900",
  GAME_BOTTOM: "5566778899" 
};

export const GAMES: Game[] = [
  {
    id: 'snake',
    title: 'Snake Game Unblocked 2026',
    description: `The definitive edition of the classic arcade experience, specifically rebuilt for the modern era. Searching for the ultimate snake game unblocked 2026 school chromebook edition? Look no further. Our version is engineered to bypass restrictive network filters while providing a butter-smooth 60FPS experience even on low-spec educational hardware.

Why play this version in 2026? As school networks become more sophisticated, most gaming sites are flagged and blocked. We use an "Invisible Script" architecture that ensures the game loads as a standard productive asset, making it the premier choice for students during breaks. This isn't just a game; it's a nostalgic trip optimized for the future.

Mastering the Mechanics:
The core gameplay remains pure: eat the pixels, grow the snake, and avoid the walls. However, in this 2026 update, we've implemented advanced collision detection and low-latency input handling. Whether you are using a mechanical keyboard, a Chromebook membrane keyboard, or a touch screen, the response time is instantaneous.

Strategy for School Chromebooks:
1. The Perimeter Pivot: In the early game, hug the walls. This keeps the center of the board clear for complex maneuvers as you grow.
2. The Zig-Zag Efficiency: Instead of straight lines, move in small "S" curves. This increases your score density per square inch of screen space.
3. Zero-Lag Mode: We have stripped all heavy CSS filters to ensure that even if your Chromebook is thermal throttling during a long study session, the snake won't stutter.

Cultural Impact:
Snake defined a generation of mobile gaming on the Nokia 3310. Today, it serves as the perfect "micro-break" tool. It requires intense focus, which actually helps "reset" your brain between intensive study blocks or coding sessions. By playing on SnakeGame.cfd, you are accessing a refined, ad-optimized, and community-vetted version of history.

Technical Superiority:
While other versions rely on outdated Flash or heavy Unity wrappers, our Snake Game is pure HTML5/Canvas. This means zero battery drain on your laptop and instant loading. We understand the school environment—you have exactly 5 minutes between classes. You shouldn't spend 4 of them waiting for a loading bar. 

Join thousands of students across the globe who have made this their go-to unblocked destination. No downloads, no sign-ups, just pure, unadulterated arcade bliss.`,
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