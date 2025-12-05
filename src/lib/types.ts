export type Reaction = 'liked' | 'disliked' | 'strange' | 'none';

export interface FoodHistory {
  id: string;
  foodName: string;
  date: string;
  reaction: Reaction;
}

export type MealType = 'Café da Manhã' | 'Almoço' | 'Jantar' | 'Sobremesa';
export type AgeGroup = '6-8 meses' | '9-11 meses' | '12+ meses';
export type Texture = 'Purê' | 'Amassado' | 'Pedaços macios' | 'Sopa' | 'Creme';

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  mealType: MealType;
  ageGroup: AgeGroup;
  texture: Texture;
}

export interface GuideTopic {
  id: string;
  title: string;
  content: string;
}

export interface DailySuggestion {
  foodName: string;
  texture: 'lisa' | 'amassada' | 'pedaços' | 'purê';
  preparation: string;
}
