export interface ModuleItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  activitiesCount: string;
  topics: string[];
  icon: string;
}

export interface BonusItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: string;
  badge: string;
  image?: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: number;
  author: string;
  role: string;
  location: string;
  story: string;
  highlight: string;
  rating: number;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ActivityPreviewTab {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  ageGroup: string;
  sampleCount: string;
  points: string[];
  exerciseExample: {
    instruction: string;
    details: string;
    tags: string[];
  };
}