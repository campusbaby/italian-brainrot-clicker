export interface Dictionary {
  site: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
  };
  header: {
    home: string;
    features: string;
    characters: string;
    guides: string;
    faq: string;
    logo: string;
    gamesCenter: string;
  };
  footer: {
    description: string;
    navigation: string;
    legal: string;
    privacyPolicy: string;
    termsOfUse: string;
    cookiePolicy: string;
    rights: string;
  };
  features: {
    title: string;
    description: string;
    gameplay: {
      title: string;
      description: string;
    };
    characters: {
      title: string;
      description: string;
    };
    weather: {
      title: string;
      description: string;
    };
  };
  charactersList: {
    title: string;
    description: string;
    characters: {
      tralaleroTralala: {
        name: string;
        description: string;
      };
      bombardinoCrocodilo: {
        name: string;
        description: string;
      };
      tungTungTungSahur: {
        name: string;
        description: string;
      };
      liriliLarila: {
        name: string;
        description: string;
      };
      BonecaAmbalabu: {
        name: string;
        description: string;
      };
    };
  };
  guides: {
    title: string;
    description: string;
    howToPlay: {
      title: string;
      description: string;
    };
    upgrades: {
      title: string;
      description: string;
    };
    characters: {
      title: string;
      description: string;
    };
  };
  faq: {
    title: string;
    description: string;
    what: {
      title: string;
      description: string;
    };
    mean: {
      title: string;
      description: string;
    };
    mobile: {
      title: string;
      description: string;
    };
  };
  language: {
    select: string;
    en: string;
    sv: string;
  };
  games?: {
    center: string;
    centerDescription?: string;
    backToGames?: string;
    howToPlay?: string;
    resetGame?: string;
    play?: string;
    viewAll?: string;
    gamesList?: {
      [gameId: string]: {
        title: string;
        description: string;
        howToPlay?: string;
      };
    };
  };
} 