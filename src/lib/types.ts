export type Reaction = 'liked' | 'disliked' | 'strange' | 'none';

export interface FoodHistory {
  id: string;
  foodName: string;
  date: string;
  reaction: Reaction;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

export interface GuideTopic {
  id: string;
  title: string;
  content: string;
}

export interface DailySuggestion {
  foodName: string;
  texture: 'lisa' | 'amassada' | 'pedaços';
  preparation: string;
}
