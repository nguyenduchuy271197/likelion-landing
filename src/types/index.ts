declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      PORT?: string;
      PWD: string;
      NEXT_PUBLIC_MONGO_URI: string;
    }
  }
}

export interface IBlog {
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  thumbnail_desktop: string;
  thumbnail_mobile: string;
  thumbnail_og: string;
  readingTime: number;
  publishOn: number;
  tags: string[];
}

export interface ICourse {
  id: string;
  slug: string;
  title: string;
  abbr: string;
  subtitle: string;
  thumbnail: string;
  youtubeId: string;
  price: number;
  discountedPrice: number;
  objectives: string[];
  features: string[];
  modules: IModule[];
  requirements: string[];
  calendar: ICalendar[];
}

export interface IModule {
  id: string;
  name: string;
  lessons: string[];
  projects?: string[];
  courseId?: string;
}

export interface ICalendar {
  title: string;
  start_date: string;
  duration: string;
  schedule: string;
  location: string;
  tuition: {
    total: string;
    monthly: string;
  };
}
