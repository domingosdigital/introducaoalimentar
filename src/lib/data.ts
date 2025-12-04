import type { DailySuggestion, FoodHistory, GuideTopic, Recipe } from './types';

export const dailySuggestion: DailySuggestion = {
  foodName: 'Abacate',
  texture: 'amassada',
  preparation: 'Amasse um quarto de abacate maduro com um garfo até obter uma consistência de purê. Ofereça ao bebê com uma colher pequena. Não adicione açúcar ou sal.',
};

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Purê de Maçã e Canela',
    description: 'Um clássico suave e adocicado.',
    image: '1',
    ingredients: ['1 maçã gala', 'Uma pitada de canela em pó (opcional)'],
    instructions: [
      'Descasque, retire as sementes e pique a maçã.',
      'Cozinhe no vapor ou com um pouco de água até ficar bem macia.',
      'Amasse com um garfo ou bata no liquidificador.',
      'Se desejar, polvilhe a canela e sirva morno.',
    ],
  },
  {
    id: '2',
    name: 'Creme de Mandioquinha',
    description: 'Nutritivo e com um sabor que os bebês adoram.',
    image: '2',
    ingredients: ['1 mandioquinha (batata-baroa) pequena', '1 fio de azeite de oliva'],
    instructions: [
      'Descasque e corte a mandioquinha em rodelas.',
      'Cozinhe no vapor ou em água até ficar muito macia.',
      'Amasse bem com um garfo, adicionando um fio de azeite.',
      'Deixe esfriar um pouco antes de servir.',
    ],
  },
  {
    id: '3',
    name: 'Frango Desfiado com Cenoura',
    description: 'Proteína e vitamina em uma combinação deliciosa.',
    image: '3',
    ingredients: ['30g de peito de frango', '1/2 cenoura pequena'],
    instructions: [
      'Cozinhe o frango em água (sem sal) até ficar bem cozido.',
      'Cozinhe a cenoura até ficar macia.',
      'Desfie o frango e amasse a cenoura, misturando os dois.',
      'Pode adicionar um pouco da água do cozimento para umedecer.',
    ],
  },
];

export const foodHistory: FoodHistory[] = [
  { id: '1', foodName: 'Banana', date: '2024-07-20', reaction: 'liked' },
  { id: '2', foodName: 'Mamão', date: '2024-07-20', reaction: 'liked' },
  { id: '3', foodName: 'Abacate', date: '2024-07-19', reaction: 'disliked' },
  { id: '4', foodName: 'Batata doce', date: '2024-07-18', reaction: 'liked' },
  { id: '5', foodName: 'Cenoura', date: '2024-07-17', reaction: 'strange' },
  { id: '6', foodName: 'Chuchu', date: '2024-07-16', reaction: 'none' },
];

export const guideTopics: GuideTopic[] = [
  {
    id: '1',
    title: 'Quando começar a introdução alimentar?',
    content: 'A recomendação geral é iniciar por volta dos 6 meses. O bebê deve mostrar sinais de prontidão, como sentar com o mínimo de apoio, ter bom controle da cabeça e mostrar interesse pela comida dos adultos.',
  },
  {
    id: '2',
    title: 'Texturas recomendadas por fase',
    content: 'Comece com purês lisos e evolua gradualmente. Aos 6-7 meses, purês e papas. Aos 8-9 meses, alimentos amassados com garfo. A partir de 10-12 meses, alimentos em pedaços pequenos e macios para o bebê pegar com as mãos.',
  },
  {
    id: '3',
    title: 'Cuidados Básicos',
    content: 'Ofereça um alimento novo de cada vez e espere 2-3 dias para observar possíveis reações. Nunca adicione sal, açúcar ou mel. Esteja sempre presente e supervisionando a alimentação para evitar engasgos.',
  },
];
