import { Game } from './types';

// AdSense Client ID
export const AD_CLIENT_ID = "ca-pub-9774042341049510";

// AD SLOT IDs (Replace these with your actual new unit IDs from AdSense dashboard if available, otherwise these act as placeholders)
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
    description: `Unlock your mental potential with Sudoku Master, the premier choice for logic puzzle enthusiasts in 2025. Unlike simple distractions, Sudoku is a scientifically recognized cognitive workout that enhances memory, concentration, and logical reasoning skills. Our updated 2025 edition features a sleek, responsive interface that works flawlessly across all devices without requiring any downloads or installations. 

The game follows the classic 9x9 grid rule where every row, column, and 3x3 sub-grid must contain the digits 1 through 9 exactly once. Whether you are a beginner stepping into the world of logic games or a grandmaster seeking a fiendish challenge, our adaptive difficulty engine ensures the perfect experience. Regular play has been linked to delayed brain aging and improved focus in daily tasks. In an era of digital noise, Sudoku Master offers a serene, mindful escape. It’s not just a game; it’s a daily ritual for millions who value mental clarity. Enjoy the satisfaction of solving complex patterns and join a global community of thinkers right here, instantly in your browser.`,
    src: 'https://playpager.com/embed/sudoku/index.html',
    iconName: 'Grid3X3',
    category: 'Puzzle'
  },
  {
    id: 'falling-cubes',
    title: 'Falling Cubes',
    description: `Prepare for the ultimate arcade challenge with Falling Cubes, a high-definition reimaging of the legendary block-stacking genre for the modern web. In 2025, we've stripped away the bloat to deliver a pure, high-performance HTML5 experience that tests your reflexes and spatial awareness like never before. The goal remains timeless: guide distinct geometric shapes as they descend, rotating and placing them to form solid horizontal lines that vanish and award points.

Falling Cubes is more than just a retro throwback; it is a tool for sharpening hand-eye coordination and rapid decision-making skills. The game starts at a manageable pace, allowing new players to grasp the mechanics, before ramping up to heart-pounding speeds that demand split-second reactions. Perfect for quick breaks at school or the office, this unblocked game requires no plugins or heavy downloads. It represents the gold standard of "easy to learn, hard to master" gameplay. As you clear lines and stack combos, you'll enter a state of flow that is both exciting and deeply relaxing, making it the perfect antidote to a stressful day.`,
    src: 'https://playpager.com/embed/cubes/index.html',
    iconName: 'Blocks',
    category: 'Arcade'
  },
  {
    id: 'checkers',
    title: 'Classic Checkers',
    description: `Experience the rich history and deep strategy of Classic Checkers (Draughts), now remastered for 2025's web standards. As one of the world's oldest strategy board games, Checkers has stood the test of time by offering a battle of wits that is accessible to children yet challenging enough for grandmasters. Our free online version connects you instantly with a sophisticated AI opponent, designed to teach you tactical foresight and planning.

Played on an 8x8 distinct board, the objective is to capture all opponent pieces by jumping over them diagonally. This game is an excellent educational tool, fostering critical thinking, patience, and the ability to predict consequences—skills that translate valuable benefits to real-life problem solving. Unlike modern games reliant on luck or microtransactions, Classic Checkers is a pure meritocracy. Every win is earned through superior strategy. Whether you have a few minutes on your commute or an hour to relax at home, the clean, distraction-free design ensures your focus remains entirely on the board. No setup, no cleanup, just pure intellectual competition.`,
    src: 'https://playpager.com/embed/checkers/index.html',
    iconName: 'CircleDot',
    category: 'Strategy'
  },
  {
    id: 'othello',
    title: 'Othello Reversi',
    description: `Dive into the captivating world of Othello Reversi, the abstract strategy game where the balance of power can shift in a heartbeat. Famous for the maxim "A minute to learn, a lifetime to master," this game challenges players to outmaneuver their opponent on an 8x8 grid. The 2025 web edition brings this classic to your screen with crisp graphics and instant playability, requiring zero disk space or installation time.

The gameplay involves placing discs to trap your opponent's pieces between your own, flipping them to your color. This mechanic teaches players to think spatially and plan multiple moves ahead, as a single well-placed disc can transform the entire board. It is a fantastic mental exercise that improves pattern recognition and strategic flexibility. Whether playing aggressively to corner your opponent or defensively to control the center, Othello Reversi offers endless replayability. It is completely free, family-friendly, and runs smoothly on everything from high-end desktops to budget smartphones, making premium strategy gaming accessible to everyone.`,
    src: 'https://playpager.com/embed/reversi/index.html',
    iconName: 'Circle',
    category: 'Strategy'
  },
  {
    id: 'word-puzzle',
    title: 'Word Puzzle',
    description: `Challenge your vocabulary and observation skills with Word Puzzle 2025, the definitive word search experience for the modern web. Designed for linguists, students, and casual gamers alike, this game combines the relaxation of classic pen-and-paper puzzles with the convenience of digital play. Your mission is to locate hidden words camouflaged within a grid of scrambled letters, connecting them horizontally, vertically, or diagonally.

This game is not just entertainment; it is a powerful educational tool. Regular play helps expand your vocabulary, improve spelling accuracy, and boost cognitive processing speed. It is widely used by educators and lifelong learners to keep the mind sharp and agile. Our version features a vast, constantly updating dictionary covering diverse topics, ensuring that no two games are ever the same. With no downloads required and an interface optimized for readability on all screen sizes, you can enjoy a brain-boosting session anytime, anywhere. Immerse yourself in the letters and discover the joy of finding the perfect word.`,
    src: 'https://playpager.com/embed/wordpuzzle/index.html',
    iconName: 'Type',
    category: 'Word'
  }
];