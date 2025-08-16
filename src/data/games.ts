// 游戏配置类型定义
export interface Game {
  id: string;
  // 基本信息用于默认显示和非翻译场景
  title: string;
  description: string;
  thumbnailUrl: string;
  iframeUrl: string;
  aspectRatio: '16:9' | '4:3' | '1:1';
  supportsReset: boolean;
  allowAttributes?: string;
}

// 游戏列表配置
export const games: Game[] = [
  {
    id: 'italian-brainrot-clicker',
    title: 'Italian Brainrot Clicker',
    description: 'Addictive incremental clicker game set in the viral Italian Brainrot universe!',
    thumbnailUrl: '/images/games/italian-brainrot-clicker.jpg',
    iframeUrl: 'https://1games.io/game/italian-brainrot-clicker/',
    aspectRatio: '16:9',
    supportsReset: true
  },
  {
    id: 'blood-money-game',
    title: 'Blood Money Game',
    description: 'Dark psychological clicker game where you need $25,000 for surgery. Click Harvey for money, but earning more requires causing him pain. How far will you go? Three endings await based on your moral choices.',
    thumbnailUrl: '/images/games/blood-money.png',
    iframeUrl: 'https://html-classic.itch.zone/html/14646601/index.html',
    aspectRatio: '16:9',
    supportsReset: true
  },
  {
    id: 'merge-fellas',
    title: 'Merge Fellas',
    description: 'Unleash AI-generated memes! Merge Fellas Italian Brainrot: Combine bizarre creatures, absurd humor, and viral chaos. Play now, it\'s free!',
    thumbnailUrl: '/images/games/merge-fellas.png',
    iframeUrl: 'https://mergefellas.io/embed/merge-fellas/',
    aspectRatio: '16:9',
    supportsReset: true
  },
  {
    id: 'italian-brainrot-obby-parkour',
    title: 'Italian Brainrot Obby Parkour',
    description: 'Exciting parkour challenge game based on the viral Italian Brainrot memes. Jump, dodge, and overcome obstacles in this fun platformer adventure!',
    thumbnailUrl: '/images/games/italian-brainrot-obby-parkour.jpg',
    iframeUrl: 'https://1games.io/embed/italian-brainrot-obby-parkour',
    aspectRatio: '16:9',
    supportsReset: true
  },
  // Example for adding new game
  /*
  {
    id: 'another-game',
    title: 'Another Game',
    description: 'Another exciting game description',
    thumbnailUrl: '/images/games/another-game.jpg',
    iframeUrl: 'https://example.com/game/another-game',
    aspectRatio: '16:9',
    supportsReset: true
  }
  */
]; 