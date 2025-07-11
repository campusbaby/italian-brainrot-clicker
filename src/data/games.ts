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
    id: 'rolling-balls-space-race',
    title: 'Rolling Balls Space Race',
    description: 'High-speed sci-fi racing game where you control a blazing ball through glowing tracks in space! Time your jumps perfectly and dodge obstacles in this cosmic thrill ride.',
    thumbnailUrl: '/images/games/rolling-balls-space-race.jpg',
    iframeUrl: 'https://www.crazygames.com/embed/rolling-balls-space-race',
    aspectRatio: '16:9',
    supportsReset: true,
    allowAttributes: 'gamepad *;'
  },
  {
    id: 'flick-goal',
    title: 'Flick Goal',
    description: 'Fun soccer shooting game where you control the direction and power of your shots with precise flicks. Challenge various obstacles and goalkeepers to become the ultimate striker!',
    thumbnailUrl: '/images/games/flick-goal.jpg',
    iframeUrl: 'https://playgroundfree.github.io/flick-goal/',
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