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
  {
    id: '4',
    name: 'Papinha de Pera com Gengibre',
    description: 'Um toque picante para o paladar do bebê.',
    image: '4',
    ingredients: ['1 pera madura', 'Uma pequena lasca de gengibre fresco'],
    instructions: [
      'Descasque e pique a pera.',
      'Cozinhe a pera com o gengibre até ficar macia.',
      'Retire o gengibre e amasse a pera com um garfo.',
      'Sirva morno.',
    ],
  },
  {
    id: '5',
    name: 'Purê de Batata Doce com Espinafre',
    description: 'Uma combinação rica em ferro e vitaminas.',
    image: '5',
    ingredients: ['1/2 batata doce pequena', 'Um punhado de folhas de espinafre'],
    instructions: [
      'Asse ou cozinhe a batata doce até ficar macia.',
      'Cozinhe o espinafre no vapor por alguns minutos.',
      'Amasse a batata doce e misture com o espinafre picado finamente.',
      'Sirva em seguida.',
    ],
  },
  {
    id: '6',
    name: 'Mingau de Aveia com Banana',
    description: 'Energia e doçura natural para começar o dia.',
    image: '6',
    ingredients: ['2 colheres de sopa de aveia em flocos finos', '1/2 banana amassada'],
    instructions: [
      'Cozinhe a aveia com água ou leite (conforme orientação pediátrica) até formar um mingau.',
      'Misture a banana amassada.',
      'Deixe amornar e sirva.',
    ],
  },
  {
    id: '7',
    name: 'Caldo de Feijão Simples',
    description: 'Uma fonte de ferro fácil de digerir.',
    image: '7',
    ingredients: ['1/2 xícara de feijão cozido (sem temperos e sem sal)', '1/4 xícara da água do cozimento'],
    instructions: [
      'Bata o feijão cozido com a água do cozimento no liquidificador.',
      'Passe por uma peneira fina para remover as cascas.',
      'Ofereça o caldo puro ou misturado em outros purês.',
    ],
  },
  {
    id: '8',
    name: 'Ovinho Amassado',
    description: 'Proteína de alta qualidade e fácil de preparar.',
    image: '8',
    ingredients: ['1 ovo'],
    instructions: [
      'Cozinhe o ovo em água fervente por cerca de 10 minutos.',
      'Descasque e amasse a gema e a clara com um garfo.',
      'Verifique a consistência e, se necessário, adicione um pouco de água ou azeite.',
      'Sirva imediatamente.',
    ],
  },
  {
    id: '9',
    name: 'Purê de Abóbora com Sálvia',
    description: 'Sabor adocicado com um toque aromático.',
    image: '9',
    ingredients: ['1 fatia de abóbora cabotiá', '1 folha de sálvia fresca (opcional)'],
    instructions: [
      'Cozinhe a abóbora no vapor até ficar bem macia.',
      'Se usar a sálvia, cozinhe junto com a abóbora e retire no final.',
      'Amasse a abóbora com um garfo.',
      'Sirva morna.',
    ],
  },
  {
    id: '10',
    name: 'Tiras de Manga',
    description: 'Uma fruta doce e suculenta para o bebê explorar.',
    image: '10',
    ingredients: ['1 fatia de manga madura e firme'],
    instructions: [
      'Corte a manga em tiras grossas, com um tamanho seguro para o bebê segurar.',
      'Certifique-se de que a manga está madura, mas não escorregadia demais.',
      'Ofereça para o bebê pegar com as mãos (método BLW).',
      'Supervisione sempre.',
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
