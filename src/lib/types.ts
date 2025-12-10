export type Reaction = 'liked' | 'disliked' | 'strange' | 'none';

export type MealType = 'Café da Manhã' | 'Almoço' | 'Jantar' | 'Sobremesa';
export type AgeGroup = '6-8 meses' | '9-11 meses' | '12+ meses';
export type Texture = 'Purê' | 'Amassado' | 'Pedaços macios' | 'Sopa' | 'Creme';
export type AllergyRisk = 'Baixo' | 'Médio' | 'Alto';


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
  cookingTime: string;
  cookingInfo: string;
  ageVariations?: {
    '6-8 meses': string;
    '9-11 meses': string;
    '12+ meses': string;
  };
}

export interface GuideTopic {
  id: string;
  title: string;
  content: string;
}

interface PhaseContentData {
  behaviors: string[];
  tips: string[];
}

export interface PhaseTopic {
  id: string;
  title: string;
  content: PhaseContentData;
}

export interface MealSuggestion {
  foodName: string;
  texture: string;
  prepTime: string;
  allergyRisk?: AllergyRisk;
  tip?: string;
}

export interface DailyMealPlan {
  id: string;
  meals: {
    'Café da Manhã': MealSuggestion;
    'Lanche da Manhã': MealSuggestion;
    'Almoço': MealSuggestion;
    'Lanche da Tarde': MealSuggestion;
    'Jantar': MealSuggestion;
  };
}

export interface AgeBasedVariation {
  [foodName: string]: {
    [age: string]: string;
  };
}

export interface FoodChecklistItem {
  id: string;
  name: string;
  category: 'Fruta' | 'Legume' | 'Proteína' | 'Grão';
}

export interface AllergenicFood {
  id: string;
  name: string;
  category: 'Alimento Alergênico';
  introduction: string;
  observation: string;
}

export interface ExamChecklistItem {
  id: string;
  name: string;
  when: string;
  description: string;
}


export interface PlanDay {
  day: number;
  food: string;
  textureAndCut: string;
  prepTime: string;
  allergyRisk: AllergyRisk;
  tip: string;
}

export interface Routine {
  age: string;
  meals: string;
  schedule: string;
  texture: string;
  example: string;
}

export interface SafetyTopic {
  id: string;
  title: string;
  content: string | { title: string; items: string[] }[];
}

export interface EvolutionTopic {
    id: string;
    title: string;
    content: {
        title: string;
        items: string[];
    }[];
}

export interface CutAndTexture {
  id: string;
  food: string;
  imageId: string;
  cut_6_8_months: string;
  cut_9_12_months: string;
}

export interface GagVsChoke {
  normalReactions: string[];
  alertReactions: string[];
}

export interface ChokingGuide {
  description: string;
  steps: string[];
  link: string;
  linkText: string;
}
