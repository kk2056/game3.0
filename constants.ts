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
    id: 'sudoku',
    title: 'Sudoku Master',
    description: `Dive into the world of Sudoku Master, the premier destination for free online logic puzzles in 2025. Sudoku is more than just a game; it is a mental workout designed to sharpen your cognitive abilities, improve concentration, and enhance logical thinking skills. Our version requires absolutely no downloads, offering a seamless, unblocked HTML5 experience directly in your web browser. 

Whether you are a beginner looking to understand the basics or a seasoned veteran seeking a fiendish challenge, Sudoku Master adapts to your skill level. The grid-based gameplay creates a meditative state that many players find essential for digital detoxing in today's fast-paced world. By engaging with numbers and patterns daily, you keep your brain active and healthy. Optimized for both desktop and mobile devices, you can enjoy instant play without the hassle of app installations or data-heavy updates. Join millions of players worldwide who have made Sudoku their daily ritual for mental clarity and relaxation.`,
    src: 'https://playpager.com/embed/sudoku/index.html',
    iconName: 'Grid3X3',
    category: 'Puzzle'
  },
  {
    id: 'falling-cubes',
    title: 'Falling Cubes',
    description: `Experience the thrill of Falling Cubes, the ultimate block-stacking arcade game revitalized for 2025. Inspired by the legendary classics of the genre, Falling Cubes offers a modern, high-definition twist on spatial puzzle gameplay. The objective is simple yet endlessly addictive: rotate and guide falling geometric shapes to create complete horizontal lines, which then disappear to clear the board and boost your score.

What makes Falling Cubes stand out is its instant-play capability. Built on lightweight HTML5 technology, it loads in seconds on any device, making it the perfect unblocked game for quick breaks at school or work. There are no large files to download and no complex controls to learn—just pure, reflex-testing fun. As the speed increases, so does the challenge, demanding quick decision-making and precise hand-eye coordination. It is a timeless test of skill that helps improve spatial awareness and reaction times, all while providing a satisfying and stress-relieving gaming loop that keeps players coming back for just one more round.`,
    src: 'https://playpager.com/embed/cubes/index.html',
    iconName: 'Blocks',
    category: 'Arcade'
  },
  {
    id: 'checkers',
    title: 'Checkers',
    description: `Rediscover the timeless strategy of Classic Checkers, now optimized for the modern web. As one of the oldest and most beloved board games in history, Checkers (also known as Draughts) offers a perfect balance of simplicity and strategic depth. Our 2025 free online version allows you to challenge intelligent AI opponents instantly, with no registration or download required.

The game is played on an 8x8 grid where the goal is to capture all of your opponent's pieces or trap them so they have no legal moves remaining. It is an excellent tool for developing foresight, planning, and tactical thinking. Unlike complex modern video games, Checkers relies purely on skill and strategy, making it a fair and intellectually stimulating contest. Whether you have five minutes or an hour, the game provides a rewarding mental challenge. The clean, responsive interface ensures that you can focus entirely on your next move, whether you are playing on a large desktop monitor or a compact mobile screen. Perfect for strategy enthusiasts of all ages.`,
    src: 'https://playpager.com/embed/checkers/index.html',
    iconName: 'CircleDot',
    category: 'Strategy'
  },
  {
    id: 'othello',
    title: 'Othello Reversi',
    description: `Step into the strategic arena of Othello Reversi, the classic board game famous for the slogan "A minute to learn, a lifetime to master." In this free 2025 online edition, you engage in a battle of wits where the tide can turn with a single move. The game is played with reversible discs—light on one side, dark on the other. Your goal is to trap your opponent's discs between two of your own, flipping them to your color.

This unblocked HTML5 game is a powerhouse for cognitive development, encouraging players to think several turns ahead and visualize complex patterns on the board. It is completely free to play and requires zero installation, ensuring your device remains safe and clutter-free. The dynamic nature of Othello means that no two games are ever the same; a losing position can transform into a victory in the final moments. It is the perfect game for those who appreciate deep strategy, critical thinking, and competitive board gaming without the setup time of physical sets. Play instantly and test your strategic mind today.`,
    src: 'https://playpager.com/embed/reversi/index.html',
    iconName: 'Circle',
    category: 'Strategy'
  },
  {
    id: 'word-puzzle',
    title: 'Word Puzzle',
    description: `Expand your vocabulary and sharpen your spelling skills with Word Puzzle Challenge, the definitive word search game for 2025. Designed for linguists, students, and puzzle lovers alike, this game turns language learning into an exciting and addictive activity. Your task is to find hidden words within a grid of scrambled letters, connecting them horizontally, vertically, or diagonally.

This free, no-download game is an excellent educational tool that helps improve pattern recognition and cognitive processing speed. It is widely used by students to reinforce spelling and by adults to keep their minds sharp and agile. The game features a vast dictionary of words across various topics, ensuring that the content remains fresh and challenging. Because it runs directly in your browser using HTML5, you can start playing instantly on any device without worrying about compatibility or storage space. Relax, unwind, and boost your brainpower with a game that combines fun, education, and accessibility in one sleek package.`,
    src: 'https://playpager.com/embed/wordpuzzle/index.html',
    iconName: 'Type',
    category: 'Word'
  }
];