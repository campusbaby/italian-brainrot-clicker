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
    guides: string;
    faq: string;
    logo: string;
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
} 