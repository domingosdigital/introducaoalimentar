import type { DailyMealPlan, GuideTopic, Recipe, PhaseTopic, FoodChecklistItem, PlanDay, Routine, SafetyTopic, AllergenicFood, CutAndTexture, GagVsChoke, ChokingGuide, EvolutionTopic, AgeBasedVariation } from './types';
import {CheckCircle2} from "lucide-react";
import React from 'react';

export const quickTips: string[] = [
  "Dica rápida: uma massagem de 2 minutos na barriguinha ajuda a aliviar os gases antes das refeições.",
  "Dica rápida: ofereça água ao bebê várias vezes ao dia em um copinho, mesmo que ele beba pouco.",
  "Dica rápida: se o bebê recusar um alimento, tente oferecê-lo novamente em outro dia, preparado de outra forma.",
  "Dica rápida: cozinhar legumes no vapor preserva mais nutrientes do que cozinhar em água.",
  "Dica rápida: use temperos naturais como cebola, alho, salsinha e manjericão desde o início. Sal não!",
  "Dica rápida: a bagunça faz parte! Deixar o bebê explorar a comida com as mãos é ótimo para o desenvolvimento.",
  "Dica rápida: um picolé de leite materno ou de fruta natural pode aliviar o desconforto dos dentinhos.",
  "Dica rápida: coma junto com seu bebê sempre que possível. Eles aprendem muito pelo exemplo.",
  "Dica rápida: a consistência da comida deve evoluir. Comece com purês e avance para pedaços macios.",
  "Dica rápida: congele papinhas em forminhas de gelo para ter porções práticas e individuais para a semana."
];

export const ageBasedVariations: AgeBasedVariation = {
  'Abacate': {
    '6 meses': 'Amasse bem com um garfo ou ofereça em fatias grandes (formato de meia lua) para o bebê segurar (BLW).',
    '9 meses': 'Ofereça em pedaços menores para o bebê praticar o movimento de pinça.',
    '12 meses': 'Pode ser oferecido em pedaços ou como pastinha em uma torrada integral.',
  },
  'Mingau de Aveia com Banana': {
    '6 meses': 'Faça um mingau bem cremoso e liso. Amasse a banana completamente até virar um purê.',
    '9 meses': 'Pode deixar o mingau com um pouco mais de textura e amassar a banana deixando pequenos pedaços.',
    '12 meses': 'Pode servir a banana em rodelas junto com o mingau.',
  },
  'Creme de Mandioquinha com Frango Desfiado': {
      '6 meses': 'Bata a mandioquinha até virar um purê liso. Desfie o frango muito bem e misture.',
      '9 meses': 'Amasse a mandioquinha com o garfo. O frango pode ser desfiado em pedaços um pouco maiores.',
      '12 meses': 'Sirva a mandioquinha em pedaços macios e o frango desfiado.',
  }
};

export const dailyMealPlans: DailyMealPlan[] = [
  {
    id: '1',
    meals: {
      'Café da Manhã': {
        foodName: 'Mingau de Aveia com Banana',
        texture: 'Cremoso (6m) a pedaços (12m)',
        prepTime: '5 min',
        allergyRisk: 'Baixo',
        tip: 'Polvilhe uma pitada de canela para um novo sabor.'
      },
      'Lanche da Manhã': {
        foodName: 'Mamão Papaia',
        texture: 'Amassado ou em tiras',
        prepTime: '2 min',
        allergyRisk: 'Baixo',
      },
      'Almoço': {
        foodName: 'Creme de Mandioquinha com Frango Desfiado',
        texture: 'Creme (6m) a pedaços (12m)',
        prepTime: '20 min',
        allergyRisk: 'Baixo',
        tip: 'Cozinhe o frango com uma folha de louro para mais sabor.'
      },
      'Lanche da Tarde': {
        foodName: 'Pera cozida',
        texture: 'Amassada ou em fatias',
        prepTime: '10 min',
        allergyRisk: 'Baixo',
      },
      'Jantar': {
        foodName: 'Sopa de Abóbora com Cenoura',
        texture: 'Sopa lisa ou com pedacinhos',
        prepTime: '25 min',
        allergyRisk: 'Baixo',
      },
    },
  },
  {
    id: '2',
    meals: {
      'Café da Manhã': {
        foodName: 'Purê de Maçã com Canela',
        texture: 'Purê liso',
        prepTime: '10 min',
        allergyRisk: 'Baixo',
      },
      'Lanche da Manhã': {
        foodName: 'Abacate',
        texture: 'Amassado ou em tiras (meia lua)',
        prepTime: '3 min',
        allergyRisk: 'Baixo',
        tip: 'O abacate é rico em gorduras boas para o cérebro do bebê.'
      },
      'Almoço': {
        foodName: 'Caldo de Feijão com Arroz',
        texture: 'Caldo grosso com arroz amassado',
        prepTime: '10 min (com feijão pronto)',
        allergyRisk: 'Baixo',
      },
      'Lanche da Tarde': {
        foodName: 'Tiras de Manga',
        texture: 'Pedaços macios',
        prepTime: '3 min',
        allergyRisk: 'Baixo',
      },
      'Jantar': {
        foodName: 'Purê de Batata Doce com Carne Moída',
        texture: 'Amassado',
        prepTime: '25 min',
        allergyRisk: 'Baixo',
        tip: 'Use patinho moído por ser uma carne mais magra.'
      },
    },
  },
];


export const recipes: Recipe[] = [
  // Café da Manhã (26 receitas)
  {
    id: '1',
    name: 'Mingau de Aveia com Banana',
    description: 'Um clássico nutritivo e cremoso, perfeito para fornecer energia e doçura natural para começar bem o dia do bebê.',
    image: '6',
    ingredients: ['2 colheres de sopa de aveia em flocos finos', '150ml de água ou leite (materno, fórmula ou vegetal)', '1/2 banana nanica bem madura', '1 pitada de canela em pó (opcional)'],
    instructions: [
      'Em uma panela pequena, misture a aveia com a água ou leite.',
      'Leve ao fogo baixo, mexendo constantemente para não empelotar. Cozinhe por cerca de 3 a 5 minutos, ou até o mingau engrossar e a aveia estar bem cozida.',
      'Enquanto o mingau cozinha, amasse bem a banana com um garfo até formar um purê.',
      'Retire o mingau do fogo, misture o purê de banana e a canela (se for usar).',
      'Deixe amornar a uma temperatura segura para o bebê e sirva.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '6-8 meses',
    texture: 'Creme',
    cookingTime: '5-7 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê liso e cremoso.',
        '9-11 meses': 'Amasse a banana com garfo deixando pequenos pedaços para estimular a mastigação.',
        '12+ meses': 'Pode adicionar pedaços de outras frutas macias, como morango picado.'
    }
  },
  {
    id: '11',
    name: 'Panquequinha de Banana e Aveia',
    description: 'Uma panqueca fofinha, sem açúcar e fácil para as mãozinhas do bebê segurarem. Ótima para o método BLW.',
    image: '11',
    ingredients: ['1 banana prata madura', '1 ovo', '2 colheres de sopa de farinha de aveia', 'Óleo de coco ou azeite para untar'],
    instructions: [
      'Em uma tigela, amasse bem a banana até virar um purê homogêneo.',
      'Adicione o ovo e bata bem com um garfo ou fouet até incorporar.',
      'Acrescente a farinha de aveia e misture até formar uma massa uniforme.',
      'Aqueça uma frigideira antiaderente em fogo baixo e unte com um pouco de óleo de coco ou azeite.',
      'Com uma colher, despeje pequenas porções da massa para formar as panquequinhas.',
      'Cozinhe por cerca de 2 minutos de cada lado, ou até ficarem douradas e firmes.',
      'Deixe esfriar e sirva em tiras ou inteira, dependendo da habilidade do bebê.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '10 min',
    cookingInfo: 'Frigideira',
    ageVariations: {
        '6-8 meses': 'Não recomendado pelo ovo. Introduza o ovo primeiro separadamente. Se já introduzido, sirva em tiras largas.',
        '9-11 meses': 'Perfeita para essa idade. Sirva em tiras ou pedaços pequenos para o bebê praticar o movimento de pinça.',
        '12+ meses': 'Pode servir a panqueca inteira e até adicionar uma fina camada de pasta de castanhas.'
    }
  },
  {
    id: '12',
    name: 'Ovos Mexidos Cremosos',
    description: 'Fonte de proteína e gorduras boas para um café da manhã reforçado e cheio de sabor. A textura é ideal para bebês que já exploram alimentos mais consistentes.',
    image: '8',
    ingredients: ['1 ovo', '1 colher de sopa de leite (materno, fórmula ou integral) ou água', '1 fio de azeite de oliva'],
    instructions: [
      'Quebre o ovo em uma tigela pequena e adicione o leite ou água. Bata bem com um garfo.',
      'Aqueça uma frigideira antiaderente em fogo baixo e adicione o azeite.',
      'Despeje a mistura de ovo na frigideira.',
      'Com uma espátula, mexa suavemente e continuamente, raspando o fundo, para que os ovos cozinhem de forma uniforme e fiquem cremosos.',
      'Cozinhe até atingir a consistência desejada, mas sem deixar ressecar. Sirva morno.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
    cookingTime: '5 min',
    cookingInfo: 'Frigideira',
    ageVariations: {
        '6-8 meses': 'Cozinhe bem o ovo e amasse com um garfo. Certifique-se de que não há pedaços grandes.',
        '9-11 meses': 'Sirva como ovos mexidos cremosos, em pedaços que o bebê consiga pegar.',
        '12+ meses': 'Pode adicionar vegetais bem picados, como tomate ou espinafre, durante o preparo.'
    }
  },
  {
    id: '13',
    name: 'Vitamina de Abacate e Maçã',
    description: 'Refrescante, nutritiva e cheia de gorduras saudáveis do abacate. A maçã adiciona um doce natural e fibras.',
    image: '13',
    ingredients: ['1/4 de abacate maduro', '1/2 maçã pequena, sem casca e sem sementes', '50ml de água ou leite'],
    instructions: [
      'Pique a maçã em pedaços pequenos.',
      'Coloque o abacate, a maçã picada e a água ou leite no liquidificador.',
      'Bata em alta velocidade até obter uma mistura completamente homogênea e cremosa.',
      'Se ficar muito espesso, adicione um pouco mais de líquido.',
      'Sirva imediatamente em um copo de treinamento.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Creme',
    cookingTime: '3 min',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Ofereça como um purê espesso para comer de colher.',
        '9-11 meses': 'Pode deixar um pouco mais consistente e oferecer em copo de transição.',
        '12+ meses': 'Sirva em copo com canudo ou copo aberto, incentivando a autonomia.'
    }
  },
  {
    id: '14',
    name: 'Torrada com Pasta de Amendoim',
    description: 'Uma opção cheia de energia e proteína para os pequenos aventureiros. Certifique-se de usar pasta de amendoim integral e sem açúcar.',
    image: '14',
    ingredients: ['1 fatia de pão de forma integral', '1 colher de chá de pasta de amendoim 100% integral'],
    instructions: [
      'Toste levemente a fatia de pão na torradeira ou em uma frigideira.',
      'Espalhe uma camada BEM FINA de pasta de amendoim sobre a torrada. Uma camada grossa pode apresentar risco de engasgo.',
      'Corte a torrada em tiras ou pedaços pequenos, adequados para a idade do bebê.',
      'Monitore o bebê durante a alimentação. O amendoim é um potencial alérgeno.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '3 min',
    cookingInfo: 'Torradeira',
    ageVariations: {
        '6-8 meses': 'Não recomendado. Introduza amendoim (em pasta) e trigo separadamente primeiro.',
        '9-11 meses': 'Se já introduzido, ofereça a torrada em tiras finas com uma camada muito fina da pasta.',
        '12+ meses': 'Corte em pedaços menores para o bebê comer sozinho. Pode combinar com rodelas de banana.'
    }
  },
  {
    id: '41',
    name: 'Mingau de Milho Verde (Cremoso)',
    description: 'Um clássico brasileiro adaptado, aproveitando o sabor naturalmente doce do milho. Muito cremoso e reconfortante.',
    image: '41',
    ingredients: ['Grãos de 1 espiga de milho verde', '1 xícara de leite (materno, fórmula ou vegetal)', '1 pitada de canela (opcional)'],
    instructions: [
      'Bata os grãos de milho com o leite no liquidificador por cerca de 2 minutos.',
      'Passe a mistura por uma peneira fina, apertando bem para extrair todo o líquido.',
      'Leve esse creme de milho a uma panela em fogo baixo.',
      'Cozinhe, mexendo sempre, por cerca de 5-8 minutos, até engrossar e cozinhar bem.',
      'Sirva morno, com canela polvilhada por cima se desejar.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Creme',
    cookingTime: '15 min',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Certifique-se de que o mingau está bem liso e sem pedaços. Use a peneira mais fina possível.',
        '9-11 meses': 'Textura cremosa perfeita para esta idade.',
        '12+ meses': 'Pode servir como creme ou misturado com outras frutas.'
    }
  },
  {
    id: '44',
    name: 'Iogurte Natural com Frutas Vermelhas',
    description: 'Simples, rápido e delicioso. Uma combinação de probióticos do iogurte com antioxidantes das frutas vermelhas.',
    image: '44',
    ingredients: ['1/2 pote de iogurte natural integral (sem açúcar)', '3 morangos picados ou 5 mirtilos amassados'],
    instructions: [
      'Em uma tigela, coloque o iogurte.',
      'Adicione as frutas vermelhas (morangos picados em pedaços seguros ou mirtilos levemente amassados com um garfo).',
      'Misture delicadamente.',
      'Sirva frio. Introduza laticínios conforme orientação pediátrica.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Creme',
    cookingTime: '3 min',
    cookingInfo: 'Tigela',
    ageVariations: {
        '6-8 meses': 'Se o pediatra liberar laticínios, amasse bem as frutas no iogurte para uma textura mais lisa.',
        '9-11 meses': 'Pode deixar as frutas em pedaços pequenos para o bebê explorar.',
        '12+ meses': 'Sirva com frutas picadas e um punhado de aveia para mais fibras.'
    }
  },
  {
    id: '48',
    name: 'Geleia de Morango com Chia (Sem Açúcar)',
    description: 'Uma geleia 100% natural, adoçada apenas com o doce da fruta. A chia ajuda a dar a consistência e adiciona fibras e ômega 3.',
    image: '48',
    ingredients: ['1 xícara de morangos frescos picados', '1 colher de sopa de sementes de chia'],
    instructions: [
      'Leve os morangos a uma panela em fogo baixo.',
      'Cozinhe, mexendo e amassando os pedaços com uma colher, por cerca de 10 minutos, até os morangos desmancharem e formarem uma calda.',
      'Desligue o fogo, adicione as sementes de chia e misture bem.',
      'Deixe descansar por 10 minutos. A chia vai inchar e engrossar a geleia.',
      'Guarde em um pote de vidro na geladeira. Sirva com frutas, iogurte ou pães.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Creme',
    cookingTime: '15 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Bata a geleia no liquidificador para uma textura bem lisa antes de servir.',
        '9-11 meses': 'A textura rústica da geleia já é adequada. Sirva com frutas ou em panquecas.',
        '12+ meses': 'Perfeita para passar em torradas ou pães.'
    }
  },
  {
    id: '49',
    name: 'Cuscuz Nordestino com Ovo',
    description: 'Um café da manhã ou jantar típico, forte e nutritivo. O cuscuz é versátil e combina perfeitamente com a cremosidade do ovo.',
    image: '49',
    ingredients: ['2 colheres de sopa de flocão de milho', '4 colheres de sopa de água', '1 ovo cozido', '1 fio de azeite'],
    instructions: [
      'Em uma tigela, hidrate o flocão de milho com a água. Deixe descansar por 5 minutos.',
      'Cozinhe o cuscuz no vapor em uma cuscuzeira por cerca de 10 minutos, ou no micro-ondas por 1 minuto.',
      'Enquanto isso, cozinhe o ovo e amasse-o com um garfo.',
      'Desenforme o cuscuz, regue com azeite e misture o ovo amassado.',
      'Sirva morno.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Amassado',
    cookingTime: '15 min',
    cookingInfo: 'Cuscuzeira',
    ageVariations: {
        '6-8 meses': 'Ofereça o cuscuz bem macio e umedecido com leite. O ovo deve ser bem amassado.',
        '9-11 meses': 'Sirva o cuscuz em pedaços pequenos e o ovo picado para o bebê pegar.',
        '12+ meses': 'Pode servir como na receita ou até adicionar um queijo ralado por cima.'
    }
  },
  {
    id: '51',
    name: 'Mingau de Quinoa com Pera',
    description: 'Uma variação do mingau tradicional, usando quinoa, um superalimento rico em proteínas e nutrientes. A pera adiciona doçura e fibras.',
    image: '51',
    ingredients: ['2 colheres de sopa de quinoa em flocos', '150ml de água', '1/2 pera madura ralada'],
    instructions: [
      'Em uma panela pequena, cozinhe a quinoa em flocos com a água em fogo baixo, mexendo sempre, por cerca de 5-7 minutos.',
      'Quando o mingau estiver cremoso, desligue o fogo.',
      'Incorpore a pera ralada e misture bem.',
      'Deixe amornar e sirva ao bebê.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '6-8 meses',
    texture: 'Creme',
    cookingTime: '10 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Garanta que o mingau esteja bem cremoso e a pera ralada finamente.',
        '9-11 meses': 'Pode deixar o mingau um pouco mais espesso.',
        '12+ meses': 'Pode adicionar outras frutas picadas, como maçã ou banana.'
    }
  },
  {
    id: '52',
    name: 'Crepioca Simples',
    description: 'Uma receita versátil e sem glúten, ótima para bebês maiores. Pode ser servida pura ou com recheios como queijo amassado ou frango desfiado.',
    image: '52',
    ingredients: ['1 ovo', '2 colheres de sopa de goma de tapioca', '1 colher de sopa de água'],
    instructions: [
      'Em uma tigela, bata o ovo com um garfo.',
      'Adicione a goma de tapioca e a água, e misture bem até a massa ficar homogênea.',
      'Aqueça uma frigideira pequena antiaderente em fogo baixo.',
      'Despeje a massa na frigideira, espalhando para formar um disco.',
      'Cozinhe por cerca de 2-3 minutos, vire e cozinhe por mais 1 minuto.',
      'Sirva em tiras ou enroladinha.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '7 min',
    cookingInfo: 'Frigideira',
    ageVariations: {
        '6-8 meses': 'Não recomendado pelo ovo. Após introdução do ovo, sirva em tiras largas e macias.',
        '9-11 meses': 'Sirva em tiras ou enrolada para o bebê praticar a mastigação.',
        '12+ meses': 'Pode ser recheada com queijo, frango desfiado ou pasta de abacate.'
    }
  },
  {
    id: '53',
    name: 'Mini Muffin de Maçã e Canela',
    description: 'Um bolinho fofo, úmido e aromático, sem açúcar. Perfeito para lanches ou para um café da manhã especial.',
    image: '53',
    ingredients: ['1 xícara de farinha de aveia', '1/2 colher de chá de fermento em pó', '1/2 colher de chá de canela em pó', '1 ovo', '1/2 xícara de purê de maçã (sem açúcar)', '2 colheres de sopa de azeite'],
    instructions: [
      'Pré-aqueça o forno a 180°C. Unte forminhas de mini muffin.',
      'Em uma tigela, misture a farinha de aveia, o fermento e a canela.',
      'Em outra tigela, misture o ovo, o purê de maçã e o azeite.',
      'Junte os ingredientes molhados aos secos e misture apenas até incorporar.',
      'Distribua a massa nas forminhas.',
      'Asse por 15-20 minutos, ou até um palito inserido no centro sair limpo.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '25 min',
    cookingInfo: 'Forminhas de Muffin',
    ageVariations: {
        '6-8 meses': 'Não recomendado devido à textura e ovo. Ofereça os ingredientes separadamente primeiro.',
        '9-11 meses': 'Se o bebê já mastiga bem, pode oferecer em pedaços.',
        '12+ meses': 'Perfeito para esta idade. Sirva o mini muffin inteiro.'
    }
  },
  {
    id: '54',
    name: 'Mamão com Chia',
    description: 'Uma combinação simples que turbina o mamão. A chia adiciona fibras, ajudando no funcionamento do intestino do bebê.',
    image: '54',
    ingredients: ['1/4 de mamão papaia', '1 colher de chá de sementes de chia'],
    instructions: [
      'Amasse bem o mamão papaia com um garfo.',
      'Polvilhe as sementes de chia por cima e misture.',
      'Deixe descansar por 5 minutos para a chia começar a hidratar.',
      'Sirva em temperatura ambiente.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '6-8 meses',
    texture: 'Amassado',
    cookingTime: '5 min',
    cookingInfo: 'Tigela',
    ageVariations: {
        '6-8 meses': 'Amasse bem o mamão para formar um purê.',
        '9-11 meses': 'Ofereça em pedaços pequenos para o bebê praticar a pinça.',
        '12+ meses': 'Pode servir em fatias maiores para o bebê morder.'
    }
  },
  {
    id: '55',
    name: 'Pão de Queijo de Frigideira',
    description: 'Uma versão rápida do pão de queijo, feita na frigideira. Fica com uma casquinha crocante e o interior macio.',
    image: '55',
    ingredients: ['1 ovo', '2 colheres de sopa de polvilho doce', '1 colher de sopa de polvilho azedo', '2 colheres de sopa de queijo parmesão ralado', '2 colheres de sopa de água ou leite'],
    instructions: [
      'Em uma tigela, misture todos os ingredientes com um garfo até formar uma massa homogênea.',
      'Aqueça uma frigideira pequena antiaderente em fogo baixo.',
      'Despeje a massa, formando um disco.',
      'Tampe a frigideira e cozinhe por cerca de 3-4 minutos.',
      'Vire com cuidado e cozinhe do outro lado por mais 2-3 minutos, até dourar.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '10 min',
    cookingInfo: 'Frigideira',
    ageVariations: {
        '6-8 meses': 'Não recomendado (ovo e queijo). Introduza os ingredientes separadamente.',
        '9-11 meses': 'Após introdução de ovo e laticínios, sirva em tiras macias.',
        '12+ meses': 'Perfeito para esta idade, corte em pedaços ou tiras.'
    }
  },
    {
    id: '56',
    name: 'Mingau de Amaranto com Manga',
    description: 'Amaranto é um grão ancestral rico em proteínas e cálcio. Combinado com a manga, resulta em um mingau nutritivo e tropical.',
    image: '56',
    ingredients: ['2 colheres de sopa de amaranto em flocos', '150ml de água', '2 colheres de sopa de purê de manga'],
    instructions: [
        'Cozinhe o amaranto com a água em fogo baixo, mexendo sempre, até formar um mingau cremoso (cerca de 5 minutos).',
        'Desligue o fogo e misture o purê de manga.',
        'Deixe amornar e sirva.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '6-8 meses',
    texture: 'Creme',
    cookingTime: '8 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Sirva como um creme liso.',
        '9-11 meses': 'Pode adicionar pedaços pequenos de manga para textura.',
        '12+ meses': 'Sirva com outras frutas e um fio de mel (se o pediatra liberar).'
    }
  },
  {
    id: '57',
    name: 'Ovinho de Codorna Cozido',
    description: 'Pequenos e divertidos, os ovos de codorna são uma ótima fonte de nutrientes e perfeitos para as mãozinhas do bebê segurarem.',
    image: '57',
    ingredients: ['2 a 3 ovos de codorna'],
    instructions: [
        'Cozinhe os ovos de codorna em água fervente por 7 minutos para garantir que a gema esteja bem cozida.',
        'Resfrie em água corrente, descasque com cuidado.',
        'Corte ao meio no sentido do comprimento para segurança.',
        'Sirva para o bebê pegar com a mão.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '10 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Introduza ovo de galinha primeiro. Depois, pode oferecer o de codorna cozido e amassado.',
        '9-11 meses': 'Corte em 4 partes no sentido do comprimento para segurança.',
        '12+ meses': 'Corte ao meio e sirva.'
    }
  },
  {
    id: '58',
    name: 'Smoothie Verde para Bebês',
    description: 'Uma forma saborosa de introduzir vegetais de folhas escuras. A banana e a manga garantem a doçura e cremosidade.',
    image: '58',
    ingredients: ['1/2 banana congelada', 'alguns pedaços de manga congelada', '1 punhado de folhas de espinafre fresco', '50ml de água ou água de coco'],
    instructions: [
        'Coloque todos os ingredientes no liquidificador.',
        'Bata em alta velocidade até a mistura ficar completamente homogênea e sem pedaços de folhas.',
        'Sirva imediatamente em um copo de treinamento.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Creme',
    cookingTime: '4 min',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê para comer de colher.',
        '9-11 meses': 'Sirva em copo de transição.',
        '12+ meses': 'Sirva em copo aberto ou com canudo.'
    }
  },
  {
    id: '59',
    name: 'Purê de Inhame com Laranja',
    description: 'Uma combinação surpreendente. O inhame neutro ganha vida com o toque cítrico e adocicado do suco de laranja natural.',
    image: '59',
    ingredients: ['1 inhame pequeno', 'Suco de 1/2 laranja lima'],
    instructions: [
        'Descasque o inhame, corte em pedaços e cozinhe no vapor até ficar bem macio.',
        'Amasse o inhame com um garfo.',
        'Misture o suco de laranja aos poucos, até atingir a consistência desejada.',
        'Sirva morno.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '6-8 meses',
    texture: 'Purê',
    cookingTime: '20 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê liso.',
        '9-11 meses': 'Amasse com o garfo, deixando alguns pedacinhos.',
        '12+ meses': 'Pode servir em pedaços macios cozidos, temperados com o suco de laranja.'
    }
  },
  {
    id: '60',
    name: 'Bolinho de Banana e Coco (Assado)',
    description: 'Um bolinho úmido e saboroso, sem açúcar, perfeito para os lanches. O coco ralado adiciona uma textura interessante.',
    image: '60',
    ingredients: ['1 banana madura amassada', '1 ovo', '2 colheres de sopa de coco ralado sem açúcar', '2 colheres de sopa de farinha de aveia'],
    instructions: [
        'Pré-aqueça o forno a 180°C.',
        'Misture todos os ingredientes em uma tigela até formar uma massa homogênea.',
        'Distribua a massa em forminhas de mini muffin untadas.',
        'Asse por cerca de 15 minutos ou até dourarem.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '20 min',
    cookingInfo: 'Forminhas de Muffin',
    ageVariations: {
        '6-8 meses': 'Não recomendado (ovo). Introduza separadamente.',
        '9-11 meses': 'Ofereça o bolinho em pedaços.',
        '12+ meses': 'Sirva o bolinho inteiro.'
    }
  },
  {
    id: '61',
    name: 'French Toast para Bebês',
    description: 'Uma versão da clássica rabanada, sem açúcar e perfeita para um café da manhã de fim de semana.',
    image: '61',
    ingredients: ['1 fatia de pão de forma (de preferência amanhecido)', '1 ovo', '2 colheres de sopa de leite', 'Canela em pó a gosto', 'Azeite para untar'],
    instructions: [
        'Bata o ovo com o leite e a canela em um prato fundo.',
        'Mergulhe a fatia de pão na mistura, garantindo que absorva bem dos dois lados.',
        'Aqueça uma frigideira com um fio de azeite em fogo baixo.',
        'Grelhe a fatia de pão por 2-3 minutos de cada lado, até dourar.',
        'Corte em tiras e sirva.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '8 min',
    cookingInfo: 'Frigideira',
    ageVariations: {
        '6-8 meses': 'Não recomendado (ovo, pão). Introduza separadamente.',
        '9-11 meses': 'Após introdução de ovo e trigo, sirva em tiras macias.',
        '12+ meses': 'Sirva em tiras ou pedaços.'
    }
  },
  {
    id: '62',
    name: 'Mingau de Arroz com Canela',
    description: 'Cremoso e reconfortante, este mingau é feito com creme de arroz e tem um sabor suave que os bebês adoram.',
    image: '62',
    ingredients: ['2 colheres de sopa de farinha de arroz (ou creme de arroz)', '150ml de água ou leite', '1 pitada de canela'],
    instructions: [
        'Dissolva a farinha de arroz na água ou leite frio.',
        'Leve ao fogo baixo, mexendo constantemente para não empelotar.',
        'Cozinhe por cerca de 5 minutos, até engrossar.',
        'Adicione a canela, misture e sirva morno.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '6-8 meses',
    texture: 'Creme',
    cookingTime: '7 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Sirva como um creme liso e morno.',
        '9-11 meses': 'Pode misturar com um purê de frutas para enriquecer.',
        '12+ meses': 'Sirva como base para frutas picadas.'
    }
  },
  {
    id: '63',
    name: 'Waffle de Batata Doce',
    description: 'Um waffle nutritivo e naturalmente adocicado, perfeito para variar o café da manhã. Fica ótimo com frutas por cima.',
    image: '63',
    ingredients: ['1/2 xícara de purê de batata doce', '1 ovo', '1/4 xícara de farinha de trigo ou aveia', '1/2 colher de chá de fermento em pó'],
    instructions: [
        'Em uma tigela, misture o purê de batata doce com o ovo.',
        'Adicione a farinha e o fermento, e misture bem.',
        'Aqueça a máquina de waffle e unte se necessário.',
        'Cozinhe a massa conforme as instruções da sua máquina.',
        'Sirva em pedaços ou tiras.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '15 min',
    cookingInfo: 'Máquina de Waffle',
    ageVariations: {
        '6-8 meses': 'Não recomendado (ovo, trigo).',
        '9-11 meses': 'Sirva em tiras macias para o bebê segurar.',
        '12+ meses': 'Pode servir com iogurte ou frutas por cima.'
    }
  },
  {
    id: '64',
    name: 'Overnight Oats de Frutas Vermelhas',
    description: 'Prepare na noite anterior para um café da manhã rápido, prático e delicioso. A aveia fica macia e cremosa.',
    image: '64',
    ingredients: ['3 colheres de sopa de aveia em flocos', '1/2 xícara de iogurte natural', '1 colher de sopa de purê de frutas vermelhas', '1 colher de chá de chia (opcional)'],
    instructions: [
        'Em um pote de vidro, misture a aveia, o iogurte e a chia (se usar).',
        'Adicione o purê de frutas vermelhas por cima.',
        'Tampe e deixe na geladeira durante a noite.',
        'Na manhã seguinte, misture tudo e sirva geladinho.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Creme',
    cookingTime: '5 min (+ tempo de geladeira)',
    cookingInfo: 'Geladeira',
    ageVariations: {
        '6-8 meses': 'Use um purê de frutas bem liso. Sirva como um mingau frio.',
        '9-11 meses': 'Pode deixar pedacinhos de fruta no purê.',
        '12+ meses': 'Sirva como na receita.'
    }
  },
  {
    id: '65',
    name: 'Purê de Abacate com Limão',
    description: 'Uma forma simples de oferecer abacate, cheio de gorduras boas. O limão evita que escureça e adiciona uma nota cítrica interessante.',
    image: '65',
    ingredients: ['1/4 de abacate maduro', 'Gotas de suco de limão'],
    instructions: [
        'Amasse o abacate com um garfo até virar um purê.',
        'Esprema algumas gotas de limão por cima e misture.',
        'Sirva imediatamente.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '6-8 meses',
    texture: 'Purê',
    cookingTime: '3 min',
    cookingInfo: 'Tigela',
    ageVariations: {
        '6-8 meses': 'Amasse bem para formar um purê.',
        '9-11 meses': 'Ofereça em pedaços para o bebê praticar a pinça.',
        '12+ meses': 'Use como pasta em torradas ou sirva em fatias.'
    }
  },
  {
    id: '66',
    name: 'Danoninho Caseiro de Inhame',
    description: 'Uma sobremesa ou lanche surpreendente que imita o famoso iogurte, mas é feito com inhame e frutas, sem nenhum aditivo.',
    image: '66',
    ingredients: ['1 inhame pequeno cozido e descascado', '5 morangos ou 1/2 manga', 'Um pouco de água para bater'],
    instructions: [
        'Cozinhe o inhame no vapor até ficar muito macio.',
        'No liquidificador, bata o inhame cozido com a fruta escolhida (morangos ou manga).',
        'Adicione água aos pouquinhos, apenas o suficiente para ajudar a bater e atingir a consistência de iogurte.',
        'Bata até ficar um creme liso e homogêneo.',
        'Leve à geladeira e sirva gelado.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Creme',
    cookingTime: '25 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Sirva como um creme liso.',
        '9-11 meses': 'Pode servir mais espesso, para o bebê comer sozinho.',
        '12+ meses': 'Experimente com diferentes frutas.'
    }
  },

  // Almoço (28 receitas)
  {
    id: '2',
    name: 'Purê de Mandioquinha Cremoso',
    description: 'Um purê suave, adocicado e de fácil digestão, sendo um dos favoritos na introdução alimentar. A mandioquinha é rica em carboidratos que fornecem energia.',
    image: '2',
    ingredients: ['1 mandioquinha (batata-baroa) média', '1 fio de azeite de oliva extra virgem', 'Água do cozimento (se necessário)'],
    instructions: [
      'Lave, descasque e corte a mandioquinha em rodelas.',
      'Cozinhe no vapor ou em pouca água até ficar muito macia (um garfo deve entrar e sair com facilidade).',
      'Retire do fogo e amasse bem com um garfo até formar um purê liso.',
      'Adicione um fio de azeite e, se necessário, um pouco da água do cozimento para atingir a consistência desejada.',
      'Deixe amornar e sirva.',
    ],
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Purê',
    cookingTime: '15 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Faça um purê bem liso, se necessário, passe pela peneira.',
        '9-11 meses': 'Amasse com o garfo, deixando alguns pedacinhos.',
        '12+ meses': 'Sirva em cubos cozidos e macios para o bebê comer com a mão.'
    }
  },
  {
    id: '3',
    name: 'Frango Desfiado com Cenoura',
    description: 'Uma combinação clássica para introduzir proteína e vitamina A. A cenoura adocicada complementa o sabor suave do frango.',
    image: '3',
    ingredients: ['30g de peito de frango sem osso e sem pele', '1/2 cenoura pequena', 'Folhas de salsinha ou coentro (opcional)'],
    instructions: [
      'Cozinhe o frango em água (sem sal) até ficar bem cozido e macio.',
      'Em outra panela, cozinhe a cenoura no vapor ou em água até ficar bem macia.',
      'Desfie o frango finamente com dois garfos ou usando um processador.',
      'Amasse a cenoura com um garfo.',
      'Misture o frango desfiado com a cenoura amassada e as ervas picadinhas (se usar).',
      'Pode adicionar um pouco da água do cozimento do frango para umedecer e dar mais sabor.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
    cookingTime: '20 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Bata o frango cozido com a cenoura e um pouco de água para formar um purê.',
        '9-11 meses': 'Sirva o frango bem desfiado e a cenoura em pedaços pequenos e macios.',
        '12+ meses': 'Ofereça o frango em tiras e a cenoura em palitos cozidos.'
    }
  },
  {
    id: '7',
    name: 'Caldo de Feijão Encorpado',
    description: 'Uma forma inicial e segura de introduzir o feijão, uma excelente fonte de ferro. O caldo concentrado é fácil de digerir e muito nutritivo.',
    image: '7',
    ingredients: ['1/2 xícara de feijão cozido (sem sal e temperos)', '1/4 xícara da própria água do cozimento do feijão'],
    instructions: [
      'Certifique-se de que o feijão foi cozido apenas em água.',
      'Coloque o feijão cozido e a água do cozimento no liquidificador.',
      'Bata em alta velocidade por cerca de 1 minuto.',
      'Passe a mistura por uma peneira fina, pressionando com uma colher para extrair apenas o caldo e a polpa, descartando as cascas.',
      'O resultado é um caldo cremoso e rico. Ofereça puro com uma colher ou misturado em outros purês (como de batata ou abóbora).',
    ],
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Sopa',
    cookingTime: '5 min (com feijão já cozido)',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Ofereça apenas o caldo peneirado, sem as cascas.',
        '9-11 meses': 'Amasse os grãos de feijão com um garfo e sirva com o caldo.',
        '12+ meses': 'Sirva os grãos de feijão inteiros com o caldo, junto com arroz.'
    }
  },
  {
    id: '8',
    name: 'Ovinho Amassado com Azeite',
    description: 'O ovo é um superalimento! Rico em proteína de alta qualidade, colina e vitaminas. Uma ótima opção para variar o cardápio.',
    image: '8',
    ingredients: ['1 ovo', '1 colher de chá de azeite de oliva extra virgem'],
    instructions: [
      'Coloque o ovo em uma panela pequena e cubra com água.',
      'Leve ao fogo alto e, quando a água ferver, conte 10 minutos (ovo bem cozido).',
      'Retire o ovo da água quente e coloque-o em um recipiente com água fria para facilitar na hora de descascar.',
      'Descasque e amasse bem a gema e a clara com um garfo.',
      'Regue com o azeite, misture e sirva morno.',
      'O ovo é um potencial alérgeno, introduza com atenção.',
    ],
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Amassado',
    cookingTime: '12 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Sirva o ovo bem cozido e amassado com um garfo.',
        '9-11 meses': 'Ofereça em pedaços pequenos ou como um omelete bem cozido e cortado em tiras.',
        '12+ meses': 'Pode fazer ovos mexidos ou um ovinho frito (em água ou pouco azeite).'
    }
  },
  {
    id: '9',
    name: 'Purê de Abóbora com Toque de Sálvia',
    description: 'A abóbora cabotiá tem um sabor adocicado natural que os bebês amam. A sálvia adiciona uma camada de aroma sofisticada e suave.',
    image: '9',
    ingredients: ['1 fatia média de abóbora cabotiá', '1 folha de sálvia fresca (opcional)', '1 fio de azeite'],
    instructions: [
      'Descasque a abóbora e corte em cubos.',
      'Cozinhe a abóbora no vapor junto com a folha de sálvia (se for usar) até ficar extremamente macia.',
      'Retire a folha de sálvia e descarte-a.',
      'Amasse a abóbora com um garfo até obter a consistência de purê.',
      'Adicione o azeite, misture bem e sirva morno.',
    ],
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Purê',
    cookingTime: '20 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Prepare um purê liso e homogêneo.',
        '9-11 meses': 'Amasse com garfo, deixando uma textura mais rústica.',
        '12+ meses': 'Sirva em cubos cozidos e macios para o bebê comer com as mãos.'
    }
  },
  {
    id: '15',
    name: 'Risoto Falso de Legumes para Bebês',
    description: 'Um prato "de gente grande" adaptado para os pequenos. O arroz bem cozido e cremoso é uma ótima forma de oferecer grãos e legumes juntos.',
    image: '15',
    ingredients: ['2 colheres de sopa de arroz arbóreo ou comum', 'Legumes variados bem picados (1 colher de sopa de cada): abobrinha, cenoura, ervilha', '300ml de caldo de legumes caseiro (sem sal) ou água', '1 fio de azeite'],
    instructions: [
      'Em uma panela pequena, aqueça o azeite e refogue o arroz por um minuto.',
      'Adicione os legumes picados e refogue por mais um minuto.',
      'Acrescente metade do caldo de legumes quente, mexa e deixe cozinhar em fogo baixo.',
      'Continue mexendo ocasionalmente e adicionando mais caldo à medida que for secando, até o arroz ficar bem macio e o risoto cremoso.',
      'Deixe amornar e sirva. Não precisa adicionar queijo.',
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '25 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Cozinhe bem e bata no liquidificador para formar um creme.',
        '9-11 meses': 'Cozinhe bem até ficar "papa", amassando os maiores pedaços de legumes.',
        '12+ meses': 'Sirva como um risoto úmido e macio.'
    }
  },
  {
    id: '16',
    name: 'Peixinho no Vapor com Batata',
    description: 'Uma introdução suave ao peixe, rico em Ômega 3. A batata complementa com carboidratos para dar energia.',
    image: '16',
    ingredients: ['30g de filé de peixe branco sem espinhas (tilápia, pescada)', '1 batata pequena', 'Gotas de limão e salsinha picada (opcional)'],
    instructions: [
      'Tempere o peixe com algumas gotas de limão.',
      'Descasque a batata e corte em rodelas.',
      'Cozinhe o peixe e a batata no vapor até ficarem bem macios (cerca de 15 minutos).',
      'Verifique CUIDADOSAMENTE se não há nenhuma espinha no peixe e desfie-o.',
      'Amasse a batata com um garfo.',
      'Misture o peixe desfiado, a batata amassada e a salsinha (se usar). Sirva morno.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
    cookingTime: '15 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Amasse bem o peixe e a batata juntos, formando um purê.',
        '9-11 meses': 'Sirva o peixe em lascas e a batata em pedaços pequenos e macios.',
        '12+ meses': 'Ofereça um pedaço maior do filé de peixe para o bebê explorar.'
    }
  },
  {
    id: '17',
    name: 'Carne de Panela Desfiada (Super Macia)',
    description: 'Uma introdução saborosa e rica em ferro à carne vermelha. O cozimento lento na pressão garante uma textura que desmancha na boca.',
    image: '17',
    ingredients: ['50g de músculo ou acém em cubos', '1/2 tomate pequeno, sem pele e sem sementes', '1/4 de cebola pequena', '1 folha de louro (opcional)'],
    instructions: [
      'Em uma panela de pressão, coloque a carne, o tomate, a cebola e a folha de louro. Adicione um pouco de água (cerca de 1/2 xícara).',
      'Cozinhe na pressão por cerca de 30-40 minutos após pegar pressão, ou até a carne ficar extremamente macia.',
      'Retire a folha de louro. Desfie a carne com um garfo.',
      'Sirva a carne desfiada com o caldinho que se formou na panela. Pode acompanhar um purê de mandioquinha ou batata.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '40 min',
    cookingInfo: 'Panela de Pressão',
    ageVariations: {
        '6-8 meses': 'Cozinhe bem a carne, desfie e depois bata no liquidificador com um purê de legumes.',
        '9-11 meses': 'Sirva a carne bem desfiada, para o bebê pegar com a mão ou misturada no arroz.',
        '12+ meses': 'Ofereça a carne em cubos bem macios ou desfiada.'
    }
  },
  {
    id: '18',
    name: 'Sopa de Lentilha com Legumes',
    description: 'Rica em ferro e fibras, esta sopa é reconfortante e muito nutritiva. Perfeita para fortalecer a imunidade do bebê.',
    image: '18',
    ingredients: ['3 colheres de sopa de lentilha (deixar de molho por 2h)', '1/2 cenoura em cubos pequenos', '1/2 batata em cubos pequenos', '1 fio de azeite'],
    instructions: [
      'Descarte a água do molho da lentilha.',
      'Em uma panela, cozinhe a lentilha com a cenoura e a batata em água limpa até todos os ingredientes ficarem bem macios.',
      'Para uma textura mais lisa (6-8 meses), bata no liquidificador.',
      'Para uma textura com pedacinhos (9+ meses), amasse com um garfo.',
      'Regue com um fio de azeite antes de servir.',
    ],
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Sopa',
    cookingTime: '30 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Bata no liquidificador para uma sopa cremosa e lisa.',
        '9-11 meses': 'Amasse com um garfo, deixando pedaços pequenos e macios.',
        '12+ meses': 'Sirva como uma sopa rústica, com os legumes e lentilhas inteiros.'
    }
  },
  {
    id: '37',
    name: 'Purê de Ervilha e Hortelã',
    description: 'Uma combinação surpreendentemente refrescante e nutritiva. A hortelã dá um toque especial ao purê de ervilha.',
    image: '37',
    ingredients: ['1/2 xícara de ervilhas frescas ou congeladas', '2-3 folhas de hortelã fresca', '1 fio de azeite'],
    instructions: [
      'Cozinhe as ervilhas no vapor ou em pouca água fervente por cerca de 5-7 minutos, até ficarem bem macias.',
      'Escorra as ervilhas e coloque-as em um processador ou liquidificador junto com as folhas de hortelã.',
      'Bata até obter um purê liso. Se necessário, adicione uma colher de sopa de água para ajudar a bater.',
      'Regue com um fio de azeite antes de servir morno ou frio.',
    ],
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Purê',
    cookingTime: '10 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê liso.',
        '9-11 meses': 'Amasse com o garfo para uma textura mais rústica.',
        '12+ meses': 'Sirva as ervilhas inteiras e cozidas, misturadas com arroz.'
    }
  },
  {
    id: '38',
    name: 'Tomate e Pepino em Palitos (BLW)',
    description: 'Um lanche ou entrada fresca e ótima para o bebê explorar com as mãos, especialmente no calor ou para aliviar gengivas doloridas.',
    image: '38',
    ingredients: ['1/4 de tomate maduro, mas firme', 'Um pedaço de pepino japonês'],
    instructions: [
      'Lave bem o tomate. Corte em 4 partes e retire as sementes. Ofereça o "pétala" do tomate para o bebê.',
      'Lave e descasque o pepino. Corte em tiras longas e grossas, no formato de um dedo de adulto, para que o bebê possa segurar firmemente.',
      'Sirva os palitos de legumes frios.',
      'Supervisione sempre, garantindo que o bebê não morda pedaços grandes demais.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '3 min',
    cookingInfo: 'Faca',
    ageVariations: {
        '6-8 meses': 'Tomate sem pele e sementes, bem amassado. Pepino não recomendado por ser duro.',
        '9-11 meses': 'Sirva tomate e pepino (sem casca) em palitos para o bebê explorar.',
        '12+ meses': 'Pode servir em pedaços menores, como em uma salada.'
    }
  },
  {
    id: '43',
    name: 'Tirinhas de Frango Grelhado com Ervas',
    description: 'Proteína em um formato fácil de pegar e ideal para treinar a mastigação. As ervas adicionam um aroma delicioso.',
    image: '43',
    ingredients: ['50g de filé de frango', 'Gotas de limão', 'Ervas finas secas (orégano, tomilho) a gosto', 'Azeite para grelhar'],
    instructions: [
      'Corte o filé de frango em tiras grossas.',
      'Tempere as tiras com as gotas de limão e as ervas.',
      'Aqueça uma frigideira antiaderente ou grill com um fio de azeite em fogo médio.',
      'Grelhe as tiras de frango por cerca de 3-4 minutos de cada lado, até que estejam cozidas por dentro e douradas por fora.',
      'Deixe amornar e sirva para o bebê pegar com a mão.',
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '10 min',
    cookingInfo: 'Frigideira',
    ageVariations: {
        '6-8 meses': 'Sirva o frango cozido e desfiado, misturado em purês.',
        '9-11 meses': 'Ofereça tiras finas e macias para o bebê segurar e comer.',
        '12+ meses': 'Sirva em tiras ou cubos, para o bebê treinar o garfo.'
    }
  },
  {
    id: '45',
    name: 'Purê de Abóbora com Carne Seca',
    description: 'Uma combinação de sabores do Brasil. O doce da abóbora contrasta com o salgadinho da carne seca, criando um prato surpreendente.',
    image: '45',
    ingredients: ['1 xícara de abóbora cozida e amassada', '2 colheres de sopa de carne seca dessalgada, cozida e bem desfiada', '1 fio de azeite', 'Cebolinha picada para finalizar'],
    instructions: [
      'Certifique-se de que a carne seca foi muito bem dessalgada (deixada de molho em água trocada várias vezes) e cozida na pressão até ficar macia.',
      'Em uma panela, aqueça o azeite e refogue rapidamente a carne seca desfiada para aquecer.',
      'Misture a carne refogada com o purê de abóbora.',
      'Sirva morno, polvilhado com cebolinha fresca.',
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Amassado',
    cookingTime: '10 min (com ingredientes pré-preparados)',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Não recomendado. Introduza os ingredientes separadamente.',
        '9-11 meses': 'Se a carne estiver muito bem desfiada, pode misturar ao purê.',
        '12+ meses': 'Sirva como na receita, com a carne desfiada e o purê.'
    }
  },
  {
    id: '47',
    name: 'Palitos de Cenoura Assada com Alecrim',
    description: 'Assar a cenoura realça sua doçura natural. Em formato de palito, é um "snack" saudável e perfeito para o bebê treinar a mastigação.',
    image: '47',
    ingredients: ['1 cenoura média', 'Azeite de oliva', '1 raminho de alecrim fresco (ou uma pitada do seco)'],
    instructions: [
      'Pré-aqueça o forno a 200°C.',
      'Descasque a cenoura e corte-a em palitos grossos.',
      'Em uma tigela, misture os palitos de cenoura com um fio de azeite e as folhas de alecrim.',
      'Espalhe em uma assadeira em uma única camada.',
      'Asse por 20-25 minutos, ou até que estejam macios por dentro e levemente dourados por fora.',
      'Deixe amornar antes de servir.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '25 min',
    cookingInfo: 'Assadeira',
    ageVariations: {
        '6-8 meses': 'Sirva a cenoura cozida e bem amassada.',
        '9-11 meses': 'Asse em palitos até ficarem bem macios.',
        '12+ meses': 'Pode deixar um pouco mais firme para estimular a mastigação.'
    }
  },
  {
    id: '67',
    name: 'Nhoque de Batata Doce (sem recheio)',
    description: 'Um nhoque macio e saboroso que derrete na boca. Sirva apenas com um fio de azeite ou com um molho de tomate caseiro.',
    image: '67',
    ingredients: ['1 batata doce média cozida e amassada', 'Aproximadamente 1/2 xícara de farinha de aveia (ou o suficiente para dar ponto)', '1 fio de azeite'],
    instructions: [
        'Em uma tigela, misture o purê de batata doce com a farinha de aveia aos poucos, até formar uma massa que não grude nas mãos.',
        'Faça rolinhos com a massa e corte em pedacinhos de 1-2 cm.',
        'Cozinhe os nhoques em água fervente. Eles estarão prontos quando subirem à superfície.',
        'Retire com uma escumadeira, regue com azeite e sirva.',
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '30 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Ofereça o purê de batata doce.',
        '9-11 meses': 'Após introdução do trigo (se usar farinha de trigo), sirva os nhoques cortados ao meio.',
        '12+ meses': 'Sirva os nhoques inteiros com um molho de tomate caseiro.'
    }
  },
  {
    id: '68',
    name: 'Purê de Batata com Brócolis',
    description: 'Uma forma de enriquecer o purê de batata clássico, adicionando os nutrientes e a cor do brócolis.',
    image: '68',
    ingredients: ['1 batata média', 'Alguns floretes de brócolis', '1 fio de azeite'],
    instructions: [
        'Cozinhe a batata e o brócolis no vapor até ficarem bem macios.',
        'Amasse a batata com um garfo.',
        'Pique o brócolis bem fininho.',
        'Misture o brócolis picado ao purê de batata, adicione o azeite e sirva.',
    ],
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Purê',
    cookingTime: '20 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Amasse bem o brócolis junto com a batata para um purê liso.',
        '9-11 meses': 'Pique o brócolis e misture no purê para dar textura.',
        '12+ meses': 'Sirva as "arvorezinhas" de brócolis cozidas ao lado do purê.'
    }
  },
  {
    id: '69',
    name: 'Lasanha de Abobrinha para Bebê',
    description: 'Uma versão saudável e divertida da lasanha, usando fatias de abobrinha no lugar da massa. Leve e muito saborosa.',
    image: '69',
    ingredients: ['1 abobrinha pequena', '3 colheres de sopa de carne moída refogada', '2 colheres de sopa de molho de tomate caseiro', 'Queijo ralado (opcional)'],
    instructions: [
        'Corte a abobrinha em fatias finas no sentido do comprimento.',
        'Em um refratário pequeno, monte a lasanha: uma camada de abobrinha, uma de carne moída, um pouco de molho. Repita as camadas.',
        'Finalize com molho e queijo ralado (se usar).',
        'Leve ao forno pré-aquecido a 180°C por 20 minutos, ou até a abobrinha estar macia.',
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '30 min',
    cookingInfo: 'Refratário',
    ageVariations: {
        '6-8 meses': 'Não recomendado. Sirva os ingredientes como purês separados.',
        '9-11 meses': 'Desconstrua a lasanha, servindo a abobrinha cozida em pedaços e a carne moída ao lado.',
        '12+ meses': 'Sirva em pedaços para o bebê comer com garfo ou com as mãos.'
    }
  },
  {
    id: '70',
    name: 'Arroz com Lentilha (Mujadara para Bebês)',
    description: 'Uma adaptação do prato árabe, rica em ferro e proteínas vegetais. É um prato completo e muito nutritivo.',
    image: '70',
    ingredients: ['2 colheres de sopa de arroz', '1 colher de sopa de lentilha', 'Caldo de legumes caseiro', '1/4 de cebola pequena'],
    instructions: [
        'Deixe a lentilha de molho por 1 hora. Escorra.',
        'Refogue a cebola picadinha em um fio de azeite até dourar.',
        'Adicione o arroz e a lentilha, refogue por um minuto.',
        'Cubra com caldo de legumes e cozinhe em fogo baixo até o arroz e a lentilha estarem bem macios.',
        'Amasse levemente com um garfo antes de servir.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
    cookingTime: '30 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Cozinhe bem e bata no liquidificador para formar um creme.',
        '9-11 meses': 'Amasse com um garfo para uma consistência de "papa".',
        '12+ meses': 'Sirva como um arroz úmido com as lentilhas inteiras.'
    }
  },
  {
    id: '71',
    name: 'Escondidinho de Mandioca com Frango',
    description: 'Um clássico brasileiro em versão para bebês. A cremosidade da mandioca com o sabor do frango desfiado é irresistível.',
    image: '71',
    ingredients: ['1 pedaço médio de mandioca', '30g de peito de frango cozido e desfiado', '1 fio de azeite'],
    instructions: [
        'Cozinhe a mandioca na pressão até ficar muito macia. Retire a fibra central.',
        'Amasse a mandioca com um garfo, adicionando um pouco da água do cozimento se necessário, para formar um purê.',
        'Em um potinho, coloque o frango desfiado no fundo e cubra com o purê de mandioca.',
        'Regue com um fio de azeite antes de servir.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
    cookingTime: '35 min',
    cookingInfo: 'Panela de Pressão',
    ageVariations: {
        '6-8 meses': 'Misture o frango bem desfiado no purê liso de mandioca.',
        '9-11 meses': 'Sirva em camadas (escondidinho) ou misturado.',
        '12+ meses': 'Pode gratinar com um pouco de queijo por cima.'
    }
  },
  {
    id: '72',
    name: 'Bife de Fígado Acebolado (para Bebês)',
    description: 'O fígado é um superalimento, riquíssimo em ferro. Esta versão é feita para ser macia e fácil para o bebê comer.',
    image: '72',
    ingredients: ['1 bife pequeno de fígado (50g)', '1/4 de cebola em rodelas', 'Gotas de limão', 'Azeite'],
    instructions: [
        'Pique o fígado em pedaços bem pequenos.',
        'Aqueça uma frigideira com azeite e refogue a cebola até ficar macia.',
        'Adicione o fígado picado e refogue rapidamente até mudar de cor.',
        'Adicione um pouco de água, tampe e cozinhe em fogo baixo por 5-10 minutos, até o fígado ficar macio.',
        'Pique mais um pouco ou amasse com o garfo antes de servir.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '15 min',
    cookingInfo: 'Frigideira',
    ageVariations: {
        '6-8 meses': 'Bata o fígado cozido no liquidificador com um purê de batata para disfarçar o sabor forte.',
        '9-11 meses': 'Sirva em pedacinhos bem pequenos e macios.',
        '12+ meses': 'Sirva em tiras finas e macias.'
    }
  },
  {
    id: '73',
    name: 'Salmão Grelhado com Purê de Ervilha',
    description: 'Uma refeição sofisticada e cheia de ômega 3. O purê de ervilha adocicado complementa perfeitamente o sabor do salmão.',
    image: '73',
    ingredients: ['Um pedaço pequeno de salmão (40g)', '1/2 xícara de ervilhas congeladas', 'Gotas de limão', 'Azeite'],
    instructions: [
        'Tempere o salmão com gotas de limão.',
        'Grelhe o salmão em uma frigideira com um fio de azeite, por 3-4 minutos de cada lado. Desfie e verifique se não há espinhas.',
        'Cozinhe as ervilhas no vapor e amasse com um garfo.',
        'Sirva o salmão desfiado ao lado do purê de ervilha.',
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '10 min',
    cookingInfo: 'Frigideira',
    ageVariations: {
        '6-8 meses': 'Amasse o salmão cozido junto com o purê de ervilhas.',
        '9-11 meses': 'Sirva o salmão em lascas e o purê de ervilhas ao lado.',
        '12+ meses': 'Ofereça o filé de salmão em pedaços para o bebê comer com garfo.'
    }
  },
  {
    id: '74',
    name: 'Purê de Grão de Bico (Homus para Bebê)',
    description: 'Uma versão suave do homus, sem tahine e com pouco tempero. É uma ótima fonte de proteína vegetal e fibras.',
    image: '74',
    ingredients: ['1/2 xícara de grão de bico cozido (sem pele)', '1 colher de sopa de azeite', 'Gotas de limão', 'Água do cozimento'],
    instructions: [
        'Cozinhe o grão de bico até ficar muito macio. Para facilitar a digestão, retire a pele dos grãos.',
        'No processador, bata o grão de bico com o azeite e o limão.',
        'Adicione a água do cozimento aos poucos, até formar um purê liso e cremoso.',
        'Sirva puro ou com palitos de legumes cozidos.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Purê',
    cookingTime: '10 min (com grão de bico cozido)',
    cookingInfo: 'Processador de alimentos',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê bem liso e cremoso.',
        '9-11 meses': 'Ótimo para servir com palitos de legumes cozidos para o bebê "mergulhar".',
        '12+ meses': 'Pode passar em torradas ou servir com pão sírio.'
    }
  },
    {
    id: '75',
    name: 'Bolinho de Peixe Assado',
    description: 'Uma forma deliciosa de oferecer peixe, em formato de bolinho, fácil para o bebê pegar e comer sozinho.',
    image: '75',
    ingredients: ['100g de peixe branco cozido e desfiado (tilápia, pescada)', '1/2 batata pequena cozida e amassada', 'Salsinha picada', 'Farinha de rosca para empanar (opcional)'],
    instructions: [
        'Misture o peixe desfiado com a batata amassada e a salsinha, formando uma massa.',
        'Molde pequenos bolinhos.',
        'Se desejar, passe na farinha de rosca.',
        'Asse em forno pré-aquecido a 180°C por 15-20 minutos, virando na metade do tempo.',
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '25 min',
    cookingInfo: 'Assadeira',
    ageVariations: {
        '6-8 meses': 'Não recomendado. Ofereça peixe e batata amassados.',
        '9-11 meses': 'Sirva os bolinhos macios e cortados ao meio.',
        '12+ meses': 'Sirva os bolinhos inteiros.'
    }
  },
  {
    id: '76',
    name: 'Tiras de Abobrinha Empanadas (Assadas)',
    description: 'Legumes empanados e assados são um sucesso! Ficam crocantes por fora e macios por dentro.',
    image: '76',
    ingredients: ['1/2 abobrinha', '1 ovo batido', 'Farinha de rosca ou de milho para empanar'],
    instructions: [
        'Corte a abobrinha em palitos grossos.',
        'Passe os palitos no ovo batido e depois na farinha de rosca, cobrindo bem.',
        'Disponha em uma assadeira untada ou com papel manteiga.',
        'Asse em forno pré-aquecido a 200°C por 20 minutos, ou até dourarem.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '25 min',
    cookingInfo: 'Assadeira',
    ageVariations: {
        '6-8 meses': 'Ofereça a abobrinha cozida em palitos macios, sem empanar.',
        '9-11 meses': 'Sirva as tiras assadas, garantindo que o interior está macio.',
        '12+ meses': 'Perfeito para esta idade.'
    }
  },
  {
    id: '77',
    name: 'Purê de Couve-Flor Gratinado',
    description: 'Um purê suave e delicioso, com um toque especial do queijo gratinado por cima.',
    image: '77',
    ingredients: ['1 xícara de floretes de couve-flor', '1 fio de azeite', 'Queijo parmesão ralado para polvilhar (opcional)'],
    instructions: [
        'Cozinhe a couve-flor no vapor até ficar muito macia.',
        'Amasse com um garfo, adicione o azeite e misture.',
        'Coloque em um potinho que possa ir ao forno, polvilhe queijo por cima.',
        'Leve ao forno ou airfryer apenas para gratinar (cerca de 5 minutos).',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Purê',
    cookingTime: '20 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê liso, sem gratinar.',
        '9-11 meses': 'A versão amassada e gratinada é ótima para esta idade.',
        '12+ meses': 'Pode servir os floretes inteiros, cozidos e gratinados.'
    }
  },
  {
    id: '78',
    name: 'Almôndegas de Frango com Aveia',
    description: 'Almôndegas macias e suculentas, perfeitas para servir com molho de tomate caseiro e macarrãozinho.',
    image: '78',
    ingredients: ['100g de frango moído', '2 colheres de sopa de aveia em flocos finos', '1/4 de cebola bem picadinha', 'Salsinha picada'],
    instructions: [
        'Em uma tigela, misture todos os ingredientes até formar uma massa homogênea.',
        'Molde pequenas almôndegas.',
        'Aqueça uma panela com um fio de azeite e doure as almôndegas de todos os lados.',
        'Adicione molho de tomate caseiro, tampe e cozinhe em fogo baixo por 10 minutos.',
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '20 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Não recomendado. Sirva o frango desfiado.',
        '9-11 meses': 'Sirva as almôndegas bem cozidas e cortadas em quatro.',
        '12+ meses': 'Sirva as almôndegas inteiras ou cortadas ao meio.'
    }
  },
  {
    id: '79',
    name: 'Suflê de Cenoura',
    description: 'Um prato leve, aerado e nutritivo. O suflê é uma ótima maneira de variar a apresentação dos legumes.',
    image: '79',
    ingredients: ['1/2 xícara de purê de cenoura', '1 gema', '1 clara em neve'],
    instructions: [
        'Pré-aqueça o forno a 180°C. Unte um potinho refratário pequeno (ramequim).',
        'Misture o purê de cenoura com a gema.',
        'Incorpore delicadamente a clara batida em neve à mistura.',
        'Despeje no potinho e asse por cerca de 20 minutos, ou até crescer e dourar.',
        'Sirva imediatamente.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Creme',
    cookingTime: '30 min',
    cookingInfo: 'Refratário',
    ageVariations: {
        '6-8 meses': 'Ofereça apenas o purê de cenoura.',
        '9-11 meses': 'O suflê é perfeito por ser muito macio e fácil de comer.',
        '12+ meses': 'Sirva como na receita.'
    }
  },
  {
    id: '80',
    name: 'Sopa de Tomate Assado',
    description: 'Assar os tomates antes de fazer a sopa intensifica o sabor e a doçura natural. Uma sopa rica e reconfortante.',
    image: '80',
    ingredients: ['2 tomates maduros', '1/4 de cebola', '1 dente de alho', 'Folhas de manjericão', 'Azeite'],
    instructions: [
        'Corte os tomates e a cebola em pedaços. Coloque em uma assadeira com o dente de alho.',
        'Regue com azeite e asse em forno a 200°C por 20 minutos.',
        'Transfira os legumes assados para um liquidificador, adicione o manjericão e bata até virar uma sopa cremosa.',
        'Aqueça antes de servir.',
    ],
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Sopa',
    cookingTime: '30 min',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Sirva como uma sopa lisa.',
        '9-11 meses': 'Pode servir com macarrãozinho de sopa para adicionar textura.',
        '12+ meses': 'Sirva com pedacinhos de pão para o bebê "mergulhar".'
    }
  },

  // Jantar (26 receitas)
  {
    id: '5',
    name: 'Purê de Batata Doce com Espinafre',
    description: 'Uma combinação poderosa e colorida, rica em ferro (espinafre) e Vitamina A (batata doce). Um jantar leve e nutritivo.',
    image: '5',
    ingredients: ['1/2 batata doce laranja pequena', 'Um punhado de folhas de espinafre fresco', '1 fio de azeite'],
    instructions: [
      'Asse ou cozinhe a batata doce no vapor até ficar macia.',
      'Lave bem as folhas de espinafre. Em uma panela, coloque o espinafre com a própria água que escorre da lavagem e abafe por 1-2 minutos, até murchar.',
      'Pique o espinafre murcho bem fininho.',
      'Amasse a batata doce com um garfo e misture com o espinafre picado e um fio de azeite.',
      'Sirva morno.',
    ],
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Purê',
    cookingTime: '25 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Pique o espinafre o mais fino possível e misture no purê liso.',
        '9-11 meses': 'Sirva o purê mais rústico com o espinafre refogado.',
        '12+ meses': 'Ofereça a batata doce em cubos e o espinafre refogado como acompanhamento.'
    }
  },
  {
    id: '19',
    name: 'Macarrãozinho com Molho de Brócolis',
    description: 'Uma forma divertida de comer vegetais verdes! O brócolis se transforma em um "molho" que adere bem ao macarrão.',
    image: '19',
    ingredients: ['30g de macarrão para bebês (letrinhas, estrelinhas)', 'Floretes de 1/2 xícara de brócolis', '1 dente de alho pequeno (opcional)', 'Azeite de oliva'],
    instructions: [
      'Cozinhe o macarrão em água fervente conforme as instruções da embalagem, mas deixe passar um pouco do ponto para ficar mais macio.',
      'Enquanto isso, cozinhe os floretes de brócolis no vapor até ficarem bem macios.',
      'Em uma frigideira, aqueça um fio de azeite e doure levemente o alho amassado (se usar). Adicione o brócolis cozido e amasse com um garfo, formando um "molho" rústico.',
      'Escorra o macarrão e misture ao molho de brócolis. Sirva morno.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '15 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Cozinhe o brócolis e bata com água para fazer um creme. Sirva com o macarrão bem cozido.',
        '9-11 meses': 'Amasse o brócolis grosseiramente com o garfo para fazer um molho pedaçudo.',
        '12+ meses': 'Sirva como na receita, com os pedaços de brócolis.'
    }
  },
  {
    id: '20',
    name: 'Canja de Galinha para Bebê',
    description: 'Um clássico que aquece o coração e a alma. Leve, reconfortante e nutritiva, ideal para uma noite tranquila.',
    image: '20',
    ingredients: ['30g de frango em cubos pequenos', '2 colheres de sopa de arroz', '1/2 cenoura pequena picada', 'Salsinha picada'],
    instructions: [
      'Em uma panela, cozinhe o frango com a cenoura em caldo de legumes caseiro (ou água) até o frango ficar macio.',
      'Adicione o arroz e cozinhe em fogo baixo até o arroz e os legumes estarem bem macios e a canja cremosa.',
      'Verifique se o frango precisa ser mais desfiado. Amasse os pedaços maiores de cenoura com uma colher.',
      'Finalize com a salsinha picada antes de servir.',
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Sopa',
    cookingTime: '30 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Bata a canja no liquidificador para formar uma sopa cremosa.',
        '9-11 meses': 'Amasse os ingredientes com um garfo para uma sopa pedaçuda.',
        '12+ meses': 'Sirva a sopa com os ingredientes em pedaços pequenos.'
    }
  },
  {
    id: '21',
    name: 'Creme de Abobrinha e Manjericão',
    description: 'Leve, de fácil digestão e com um aroma delicioso, este creme é perfeito para o jantar. O manjericão dá um toque especial.',
    image: '21',
    ingredients: ['1 abobrinha pequena', '1/4 de cebola', '2-3 folhas de manjericão fresco', '1 fio de azeite'],
    instructions: [
      'Em uma panela, aqueça o azeite e refogue a cebola picada até ficar transparente.',
      'Adicione a abobrinha em rodelas e cubra com água.',
      'Cozinhe em fogo médio até a abobrinha ficar muito macia (cerca de 10 minutos).',
      'Despeje tudo no liquidificador, adicione as folhas de manjericão e bata até obter um creme liso.',
      'Sirva morno.',
    ],
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Creme',
    cookingTime: '15 min',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Sirva como um creme liso.',
        '9-11 meses': 'Deixe a sopa mais rústica, amassando com o garfo.',
        '12+ meses': 'Pode adicionar outras legumes e servir com pedaços.'
    }
  },
  {
    id: '22',
    name: 'Polenta Mole com Ragú de Carne',
    description: 'Um prato substancioso e cheio de sabor, que conforta e satisfaz. A polenta cremosa é uma base perfeita para a carne moída.',
    image: '22',
    ingredients: ['2 colheres de sopa de fubá mimoso', '30g de carne moída (patinho)', '1/4 xícara de molho de tomate caseiro (sem sal)', 'Azeite, cebola e alho para refogar'],
    instructions: [
      'Prepare a polenta: dissolva o fubá em 1 xícara de água ou caldo de legumes. Leve ao fogo baixo, mexendo sempre, até cozinhar e engrossar.',
      'Prepare o ragú: refogue a cebola e o alho no azeite, adicione a carne moída e cozinhe até dourar. Junte o molho de tomate e deixe apurar.',
      'Sirva a polenta cremosa em uma tigela com o ragú de carne por cima.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Creme',
    cookingTime: '20 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Sirva a polenta mole com o molho de carne batido (para ficar liso).',
        '9-11 meses': 'Sirva a polenta mole com a carne moída bem cozida.',
        '12+ meses': 'Sirva como na receita.'
    }
  },
  {
    id: '23',
    name: 'Mini Omelete de Forno com Queijo',
    description: 'Prático, versátil e perfeito para o jantar. O formato de muffin facilita para o bebê comer com as mãos.',
    image: '23',
    ingredients: ['1 ovo', '1 colher de sopa de queijo cottage ou ricota amassada', 'Salsinha ou cebolinha picada', 'Opcional: 1 colher de espinafre picado'],
    instructions: [
      'Pré-aqueça o forno a 180°C. Unte forminhas de mini muffin.',
      'Em uma tigela, bata bem o ovo.',
      'Misture o queijo, as ervas e o espinafre (se usar).',
      'Despeje a mistura nas forminhas, preenchendo cerca de 3/4 da capacidade.',
      'Asse por 15-20 minutos, ou até que os omeletes estejam firmes e levemente dourados.',
      'Deixe esfriar um pouco antes de desenformar e servir.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '20 min',
    cookingInfo: 'Forminhas de Muffin',
    ageVariations: {
        '6-8 meses': 'Não recomendado. Introduza ovo e queijo separadamente.',
        '9-11 meses': 'Após introdução dos ingredientes, sirva o omelete em pedaços.',
        '12+ meses': 'Sirva o mini omelete inteiro.'
    }
  },
  {
    id: '24',
    name: 'Sopa de Abóbora com Gengibre',
    description: 'Uma sopa adocicada com um toque de gengibre que aquece e ajuda na digestão. A cor vibrante também encanta os pequenos.',
    image: '9',
    ingredients: ['1 xícara de abóbora em cubos', '1 rodela bem fina de gengibre fresco (opcional)', '1 fio de azeite'],
    instructions: [
      'Cozinhe a abóbora com a rodela de gengibre no vapor ou em pouca água até ficar muito macia.',
      'Retire o gengibre e descarte-o.',
      'Bata a abóbora no liquidificador, adicionando um pouco da água do cozimento se necessário para atingir a consistência de sopa.',
      'Sirva morna com um fio de azeite.',
    ],
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Sopa',
    cookingTime: '20 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Sirva como uma sopa lisa.',
        '9-11 meses': 'Amasse com garfo para uma sopa mais espessa e com textura.',
        '12+ meses': 'Sirva com sementes de abóbora torradas e trituradas por cima.'
    }
  },
  {
    id: '25',
    name: 'Rolinhos de Frango com Espinafre',
    description: 'Uma maneira criativa e elegante de apresentar a proteína no jantar, com um recheio nutritivo e saboroso.',
    image: '25',
    ingredients: ['1 filé de frango fino (cerca de 50g)', 'Folhas de espinafre cozidas e picadas', '1 colher de sopa de ricota amassada'],
    instructions: [
      'Abra o filé de frango em uma tábua. Se necessário, bata um pouco para afiná-lo.',
      'Misture a ricota com o espinafre picado e espalhe sobre o filé.',
      'Enrole o filé como um rocambole e prenda com um palito de dente.',
      'Cozinhe no vapor ou asse em forno pré-aquecido a 180°C por cerca de 20-25 minutos.',
      'Retire o palito, deixe amornar e fatie em rodelas antes de servir.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '25 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Sirva o frango desfiado com purê de espinafre.',
        '9-11 meses': 'Sirva os rolinhos cortados em fatias finas.',
        '12+ meses': 'Sirva as rodelas para o bebê comer com as mãos.'
    }
  },
  {
    id: '26',
    name: 'Purê de Inhame com Couve Refogada',
    description: 'Inhame é uma ótima fonte de energia e vitaminas. A couve adiciona ferro e um saborzinho especial ao purê.',
    image: '26',
    ingredients: ['1 inhame pequeno', '2 folhas de couve picadas bem fininhas (sem o talo)', '1/2 dente de alho pequeno amassado (opcional)', 'Azeite'],
    instructions: [
      'Descasque o inhame, corte em pedaços e cozinhe no vapor até ficar muito macio.',
      'Amasse o inhame com um garfo até formar um purê.',
      'Em uma frigideira, aqueça um fio de azeite e refogue rapidamente o alho (se usar). Adicione a couve e refogue até murchar.',
      'Misture a couve refogada ao purê de inhame e sirva.',
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
    cookingTime: '20 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Pique a couve bem fina e misture no purê liso de inhame.',
        '9-11 meses': 'Sirva como um purê amassado com a couve refogada.',
        '12+ meses': 'Sirva o inhame em pedaços e a couve refogada ao lado.'
    }
  },
  {
    id: '27',
    name: 'Quibebe de Abóbora',
    description: 'Um clássico da culinária brasileira em uma versão suave para bebês. É um creme rústico, nutritivo e muito saboroso.',
    image: '27',
    ingredients: ['1 xícara de abóbora em cubos', '1/4 de cebola picada', 'Salsinha picada', 'Azeite'],
    instructions: [
      'Em uma panela, aqueça um fio de azeite e refogue a cebola até ficar transparente.',
      'Adicione a abóbora, uma pitada de salsinha e cubra com um pouco de água (só o suficiente para cozinhar).',
      'Cozinhe em fogo baixo, com a panela semi-tampada, até a abóbora ficar tão macia que começa a desmanchar.',
      'Amasse os pedaços restantes com a própria colher, formando um creme rústico (o quibebe).',
      'Sirva morno.',
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Creme',
    cookingTime: '25 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê mais liso, amassando bem ou batendo.',
        '9-11 meses': 'A textura rústica do quibebe é ideal para esta fase.',
        '12+ meses': 'Pode servir com arroz e frango desfiado.'
    }
  },
  {
    id: '28',
    name: 'Bolinho de Arroz com Legumes (Assado)',
    description: 'Uma ótima forma de reaproveitar o arroz do almoço e evitar o desperdício, criando um jantar divertido e fácil de comer com as mãos.',
    image: '28',
    ingredients: ['1/2 xícara de arroz cozido', '1 ovo pequeno', '2 colheres de sopa de legumes cozidos e picados (cenoura, ervilha, brócolis)', '1 colher de sopa de queijo parmesão ralado (opcional)'],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma assadeira ou use tapete de silicone.',
      'Em uma tigela, misture bem o arroz cozido, o ovo, os legumes e o queijo (se usar) até formar uma massinha.',
      'Com as mãos úmidas, molde pequenos bolinhos ou discos.',
      'Disponha os bolinhos na assadeira e asse por cerca de 15-20 minutos, ou até ficarem firmes e levemente dourados.',
      'Deixe amornar antes de servir.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '20 min',
    cookingInfo: 'Assadeira',
    ageVariations: {
        '6-8 meses': 'Não recomendado. Ofereça o arroz e legumes amassados.',
        '9-11 meses': 'Sirva os bolinhos macios e cortados ao meio.',
        '12+ meses': 'Sirva os bolinhos inteiros.'
    }
  },
  {
    id: '39',
    name: 'Mini Pizza de Abobrinha',
    description: 'Uma versão divertida, sem massa e muito saudável da pizza. As rodelas de abobrinha servem como base.',
    image: '39',
    ingredients: ['4 rodelas grossas de abobrinha (aprox. 1cm)', '2 colheres de sopa de molho de tomate caseiro', 'Queijo muçarela ou parmesão ralado (opcional)', 'Orégano para polvilhar'],
    instructions: [
      'Pré-aqueça o forno a 200°C.',
      'Disponha as rodelas de abobrinha em uma assadeira.',
      'Espalhe uma pequena quantidade de molho de tomate sobre cada rodela.',
      'Se for usar, polvilhe o queijo e o orégano por cima.',
      'Leve ao forno por cerca de 10-15 minutos, ou até a abobrinha amolecer e o queijo derreter.',
      'Deixe amornar antes de servir.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '15 min',
    cookingInfo: 'Assadeira',
    ageVariations: {
        '6-8 meses': 'Sirva a abobrinha cozida e amassada com o molho.',
        '9-11 meses': 'Ofereça as rodelas de abobrinha cozidas (sem queijo) com molho para o bebê pegar.',
        '12+ meses': 'Sirva como na receita.'
    }
  },
  {
    id: '42',
    name: 'Sopa Creme de Beterraba',
    description: 'Uma sopa de cor vibrante, sabor terroso e levemente adocicado. Rica em nutrientes e uma forma diferente de oferecer beterraba.',
    image: '42',
    ingredients: ['1 beterraba pequena cozida e descascada', '1/2 batata pequena cozida', '1 fio de azeite', 'Água do cozimento'],
    instructions: [
      'Certifique-se de que a beterraba e a batata estão bem cozidas e macias.',
      'No liquidificador, coloque os legumes cozidos e um pouco da água em que foram cozidos (comece com 1/2 xícara).',
      'Bata em alta velocidade até obter um creme liso e aveludado.',
      'Aqueça levemente em uma panela antes de servir, adicionando o fio de azeite.',
      'Cuidado, beterraba mancha tudo!',
    ],
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Sopa',
    cookingTime: '5 min (com legumes já cozidos)',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Sirva como uma sopa lisa.',
        '9-11 meses': 'Amasse com garfo para uma sopa com pedaços.',
        '12+ meses': 'Pode adicionar um pouco de iogurte natural no final para cremosidade.'
    }
  },
  {
    id: '46',
    name: 'Creme de Milho Verde Caseiro',
    description: 'Esqueça a versão em lata! Este creme é feito com milho fresco e tem uma doçura natural incomparável. Uma delícia aveludada.',
    image: '46',
    ingredients: ['1 espiga de milho verde', '1/2 xícara de leite ou água', '1/4 de cebola pequena (opcional)', '1 fio de azeite'],
    instructions: [
      'Com uma faca, retire os grãos de milho da espiga.',
      'Bata os grãos no liquidificador com o leite/água até ficar homogêneo.',
      'Passe a mistura por uma peneira fina para remover as casquinhas.',
      'Em uma panela, refogue a cebola picadinha no azeite (se usar). Despeje o creme de milho e cozinhe em fogo baixo, mexendo sempre, até engrossar (cerca de 8 minutos).',
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Creme',
    cookingTime: '15 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Passe o creme por uma peneira bem fina para garantir que não haja casquinhas.',
        '9-11 meses': 'O creme é perfeito para esta idade.',
        '12+ meses': 'Pode servir com frango desfiado por cima.'
    }
  },
  {
    id: '81',
    name: 'Sopa de Mandioquinha com Frango',
    description: 'Uma sopa reconfortante e nutritiva, combinando a cremosidade da mandioquinha com a proteína do frango.',
    image: '2',
    ingredients: ['1 mandioquinha pequena', '30g de peito de frango', '1/4 de cebola', 'Salsinha'],
    instructions: [
        'Cozinhe a mandioquinha e o frango com a cebola em água até ficarem bem macios.',
        'Retire o frango e desfie.',
        'Bata a mandioquinha com a água do cozimento no liquidificador.',
        'Volte o creme para a panela, junte o frango desfiado, a salsinha e sirva.',
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Sopa',
    cookingTime: '25 min',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Bata tudo junto no liquidificador para uma sopa cremosa.',
        '9-11 meses': 'Sirva como na receita, com o frango desfiado no creme.',
        '12+ meses': 'Sirva com os pedaços de mandioquinha e frango na sopa.'
    }
  },
  {
    id: '82',
    name: 'Sopa de Feijão com Legumes',
    description: 'Uma forma completa e saborosa de oferecer feijão. Os legumes adicionam cor, sabor e muitos nutrientes.',
    image: '7',
    ingredients: ['1 xícara de feijão cozido e temperado (sem sal)', '1/2 cenoura picada', '1/2 batata picada', 'Macarrãozinho de sopa (opcional)'],
    instructions: [
        'Bata metade do feijão no liquidificador com um pouco de água para fazer um caldo.',
        'Em uma panela, refogue os legumes e cozinhe no caldo de feijão até ficarem macios.',
        'Adicione o restante do feijão em grãos e o macarrãozinho (se usar), cozinhando até o macarrão ficar macio.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Sopa',
    cookingTime: '20 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Bata a sopa inteira no liquidificador.',
        '9-11 meses': 'Amasse os legumes e grãos com um garfo.',
        '12+ meses': 'Sirva como na receita.'
    }
  },
  {
    id: '83',
    name: 'Purê de Cenoura com Laranja',
    description: 'Um purê adocicado e com um toque cítrico, cheio de vitamina A. A cor vibrante é um convite para o bebê experimentar.',
    image: '83',
    ingredients: ['2 cenouras médias', 'Suco de 1/2 laranja', '1 fio de azeite'],
    instructions: [
        'Cozinhe as cenouras no vapor até ficarem bem macias.',
        'Amasse com um garfo ou passe no processador.',
        'Misture o suco de laranja e o azeite.',
        'Sirva morno.',
    ],
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Purê',
    cookingTime: '20 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê liso.',
        '9-11 meses': 'Sirva amassado com garfo.',
        '12+ meses': 'Sirva em palitos cozidos temperados com o suco de laranja.'
    }
  },
  {
    id: '84',
    name: 'Panqueca de Espinafre',
    description: 'Uma panqueca verdinha e cheia de ferro! Uma forma lúdica de incluir vegetais na alimentação.',
    image: '84',
    ingredients: ['1 ovo', '2 colheres de sopa de farinha de aveia', 'Um punhado de folhas de espinafre cozido e picado', '1 colher de sopa de água'],
    instructions: [
        'Bata todos os ingredientes no liquidificador até a massa ficar homogênea e verde.',
        'Aqueça uma frigideira antiaderente em fogo baixo.',
        'Faça pequenas panquecas e cozinhe por cerca de 2 minutos de cada lado.',
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '10 min',
    cookingInfo: 'Frigideira',
    ageVariations: {
        '6-8 meses': 'Após introdução do ovo, sirva em tiras largas.',
        '9-11 meses': 'Sirva em tiras ou enrolada.',
        '12+ meses': 'Pode rechear com ricota ou frango desfiado.'
    }
  },
  {
    id: '85',
    name: 'Charutinho de Couve com Carne Moída',
    description: 'Uma adaptação do prato clássico, onde a folha de couve macia envolve um recheio saboroso de carne moída.',
    image: '85',
    ingredients: ['2 folhas de couve grandes', '50g de carne moída refogada', 'Arroz cozido (opcional)'],
    instructions: [
        'Passe as folhas de couve em água quente rapidamente para amolecerem (branqueamento).',
        'Misture a carne moída com um pouco de arroz cozido, se desejar.',
        'Recheie as folhas de couve com a mistura de carne e enrole como um charuto.',
        'Cozinhe no vapor por mais 5 minutos ou sirva diretamente.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '15 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Sirva a couve picada finamente com a carne moída, em forma de papa.',
        '9-11 meses': 'Pique o charutinho em pedaços pequenos.',
        '12+ meses': 'Sirva o charutinho para o bebê comer com as mãos.'
    }
  },
  {
    id: '86',
    name: 'Sopa de Batata com Alho-Poró',
    description: 'Uma sopa clássica, cremosa e com um sabor suave e sofisticado do alho-poró. Perfeita para uma noite mais fria.',
    image: '86',
    ingredients: ['1 batata grande', '1/2 talo de alho-poró (parte branca)', '1 fio de azeite'],
    instructions: [
        'Refogue o alho-poró fatiado no azeite até ficar macio.',
        'Adicione a batata em cubos e cubra com água.',
        'Cozinhe até a batata ficar bem macia.',
        'Bata tudo no liquidificador até obter um creme aveludado.',
    ],
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Sopa',
    cookingTime: '25 min',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Sirva como uma sopa lisa.',
        '9-11 meses': 'Deixe pedaços pequenos para estimular a mastigação.',
        '12+ meses': 'Sirva com pedaços de pão para acompanhar.'
    }
  },
  {
    id: '87',
    name: 'Frittata de Legumes',
    description: 'Uma torta aberta de ovos, cheia de legumes coloridos. Ótima para aproveitar pequenos vegetais que sobraram na geladeira.',
    image: '87',
    ingredients: ['2 ovos', '2 colheres de sopa de leite', 'Legumes cozidos e picados (brócolis, cenoura, ervilha)', 'Queijo ralado (opcional)'],
    instructions: [
        'Bata os ovos com o leite.',
        'Misture os legumes picados.',
        'Despeje em uma frigideira pequena que possa ir ao forno, ou em um refratário untado.',
        'Polvilhe queijo por cima e asse em forno a 180°C por 15-20 minutos.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '25 min',
    cookingInfo: 'Refratário',
    ageVariations: {
        '6-8 meses': 'Não recomendado. Sirva os ingredientes separados e amassados.',
        '9-11 meses': 'Sirva em tiras macias.',
        '12+ meses': 'Sirva em quadrados ou triângulos.'
    }
  },
  {
    id: '88',
    name: 'Purê de Maçã com Frango Desfiado',
    description: 'Uma combinação agridoce surpreendente. A maçã cozida cria uma base adocicada para a proteína do frango.',
    image: '1',
    ingredients: ['1/2 maçã cozida e amassada', '30g de frango cozido e desfiado'],
    instructions: [
        'Cozinhe a maçã (sem casca) no vapor e amasse.',
        'Cozinhe e desfie bem o frango.',
        'Misture o purê de maçã com o frango desfiado.',
        'Sirva morno.',
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
    cookingTime: '20 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê liso, misturando os dois ingredientes.',
        '9-11 meses': 'Sirva como um purê mais rústico com o frango desfiado.',
        '12+ meses': 'Sirva o frango em pedaços com cubos de maçã cozida.'
    }
  },
  {
    id: '89',
    name: 'Caldinho de Mandioca',
    description: 'Um caldo cremoso, saboroso e que sustenta. A base de mandioca o torna uma fonte de energia para o bebê.',
    image: '2',
    ingredients: ['1 pedaço médio de mandioca', '1/4 de cebola', 'Salsinha picada', 'Azeite'],
    instructions: [
        'Cozinhe a mandioca com a cebola em água ou caldo de legumes caseiro até desmanchar.',
        'Retire a fibra central da mandioca.',
        'Bata tudo no liquidificador até virar um caldo grosso.',
        'Sirva quente com salsinha e um fio de azeite.',
    ],
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Sopa',
    cookingTime: '40 min',
    cookingInfo: 'Panela de Pressão',
    ageVariations: {
        '6-8 meses': 'Sirva como um caldo liso.',
        '9-11 meses': 'Deixe o caldo mais espesso.',
        '12+ meses': 'Sirva com pedacinhos de carne ou frango.'
    }
  },
  {
    id: '90',
    name: 'Torta de Liquidificador (Versão Bebê)',
    description: 'Uma torta fofinha e prática, recheada com frango e legumes. Ótima opção para um jantar em família.',
    image: '90',
    ingredients: ['Massa: 1 ovo, 1/2 xícara de leite, 1/2 xícara de farinha de aveia, 1 colher de sopa de azeite. Recheio: Frango desfiado com cenoura e milho.'],
    instructions: [
        'Bata todos os ingredientes da massa no liquidificador.',
        'Em um refratário pequeno untado, coloque o recheio e cubra com a massa.',
        'Asse em forno pré-aquecido a 180°C por 25-30 minutos.',
        'Deixe amornar e sirva em pedaços.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '35 min',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Não recomendado.',
        '9-11 meses': 'Após introdução dos ingredientes, sirva em pedaços macios.',
        '12+ meses': 'Sirva em quadrados para o bebê comer sozinho.'
    }
  },
  {
    id: '91',
    name: 'Sopa de Capeletti para Bebês',
    description: 'Uma sopa reconfortante com massinhas recheadas. Escolha um capeletti de boa qualidade, preferencialmente de frango ou queijo.',
    image: '91',
    ingredients: ['1 xícara de caldo de frango ou legumes caseiro', '10-12 unidades de mini capeletti', 'Cenoura ralada fina'],
    instructions: [
        'Ferva o caldo em uma panela.',
        'Adicione o capeletti e a cenoura ralada.',
        'Cozinhe em fogo baixo pelo tempo indicado na embalagem do capeletti, ou até a massa ficar bem macia.',
        'Corte os capelettis ao meio ou em quatro para segurança antes de servir.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Sopa',
    cookingTime: '15 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Não recomendado (trigo, recheio).',
        '9-11 meses': 'Se já come trigo, cozinhe bem e corte cada capeletti em 4 pedaços.',
        '12+ meses': 'Corte os capelettis ao meio.'
    }
  },
  
  // Sobremesas (25 receitas)
  {
    id: '4',
    name: 'Papinha de Pera com Gengibre',
    description: 'A doçura da pera com um toque levemente picante e aromático do gengibre. Ótimo para explorar novos sabores e ajudar na digestão.',
    image: '4',
    ingredients: ['1 pera madura e suculenta (tipo Williams)', '1 rodela bem fina de gengibre fresco'],
    instructions: [
      'Descasque a pera, retire o miolo e pique em pedaços.',
      'Coloque a pera e a rodela de gengibre em uma panela pequena com um pouquinho de água (só para não queimar).',
      'Cozinhe em fogo baixo por cerca de 10 minutos, até a pera ficar bem macia.',
      'Retire e descarte a rodela de gengibre.',
      'Amasse a pera com um garfo até atingir a consistência desejada.',
      'Sirva morno ou frio.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '6-8 meses',
    texture: 'Amassado',
    cookingTime: '10 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Amasse bem para um purê liso.',
        '9-11 meses': 'Ofereça em pedaços cozidos e macios.',
        '12+ meses': 'Sirva a pera crua em fatias finas (se for macia).'
    }
  },
  {
    id: '10',
    name: 'Tiras de Manga Seguras (BLW)',
    description: 'Uma fruta doce e suculenta para o bebê explorar com as próprias mãos. Excelente para o desenvolvimento da coordenação motora.',
    image: '10',
    ingredients: ['1 fatia grossa de manga madura, mas ainda firme (tipo Palmer ou Tommy)'],
    instructions: [
      'Descasque a manga.',
      'Corte a polpa em tiras grossas, com um tamanho que o bebê consiga segurar com a mão fechada, deixando uma parte para fora.',
      'Certifique-se de que a manga não está escorregadia demais. Se estiver, pode "empanar" em farinha de aveia para melhorar a pega.',
      'Ofereça para o bebê explorar. Supervisione sempre.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '2 min',
    cookingInfo: 'Faca',
    ageVariations: {
        '6-8 meses': 'Ofereça a manga raspada com uma colher ou em tiras bem grandes.',
        '9-11 meses': 'Sirva em tiras ou cubos para o bebê praticar o movimento de pinça.',
        '12+ meses': 'Sirva em cubos ou fatias.'
    }
  },
  {
    id: '29',
    name: 'Purê Clássico de Maçã e Canela',
    description: 'Um clássico da introdução alimentar. É suave, adocicado, fácil de digerir e o cheirinho de canela é irresistível.',
    image: '1',
    ingredients: ['1 maçã (tipo Gala ou Fuji)', 'Uma pitada de canela em pó', '2 colheres de sopa de água'],
    instructions: [
      'Lave, descasque, retire as sementes e pique a maçã.',
      'Em uma panela pequena, coloque a maçã picada e a água. Cozinhe em fogo baixo, com a panela tampada, por cerca de 8-10 minutos, até a maçã ficar bem macia.',
      'Amasse com um garfo ou, para um purê mais liso, bata no liquidificador.',
      'Polvilhe a canela (se desejar), misture e sirva morno ou em temperatura ambiente.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '6-8 meses',
    texture: 'Purê',
    cookingTime: '10 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê liso.',
        '9-11 meses': 'Ofereça a maçã cozida em pedaços macios.',
        '12+ meses': 'Pode ralar a maçã crua ou servir em fatias finas.'
    }
  },
  {
    id: '30',
    name: 'Banana Assada com Canela',
    description: 'Uma sobremesa quentinha, doce e reconfortante. Assar a banana intensifica seu sabor e a deixa com uma textura de purê natural.',
    image: '30',
    ingredients: ['1 banana prata ou nanica', 'Canela em pó a gosto'],
    instructions: [
      'Pré-aqueça o forno a 180°C.',
      'Coloque a banana com a casca diretamente na assadeira.',
      'Asse por cerca de 15 minutos, ou até a casca ficar completamente preta.',
      'Retire do forno com cuidado. Faça um corte na casca e, com uma colher, retire a polpa, que estará muito macia.',
      'Amasse a polpa, polvilhe canela e sirva morna.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
    cookingTime: '15 min',
    cookingInfo: 'Assadeira',
    ageVariations: {
        '6-8 meses': 'Amasse bem a polpa assada.',
        '9-11 meses': 'Sirva a polpa amassada ou em pedaços.',
        '12+ meses': 'Sirva a banana assada cortada ao meio para o bebê comer de colher.'
    }
  },
  {
    id: '31',
    name: 'Picolé 100% Melancia',
    description: 'Refrescante, hidrante e sem nenhum açúcar adicionado. Perfeito para dias quentes e para aliviar o desconforto dos dentinhos nascendo.',
    image: '31',
    ingredients: ['2 fatias de melancia sem sementes'],
    instructions: [
      'Corte a melancia em pedaços e retire todas as sementes.',
      'Bata a melancia no liquidificador até virar um suco.',
      'Despeje o suco em forminhas de picolé apropriadas para bebês.',
      'Leve ao congelador por pelo menos 4 horas, ou até firmar completamente.',
      'Para desenformar, passe a forminha rapidamente em água corrente.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '4 horas (congelamento)',
    cookingInfo: 'Congelador',
    ageVariations: {
        '6-8 meses': 'Ofereça o suco da melancia em um copinho ou congele em formas de gelo para o bebê chupar.',
        '9-11 meses': 'Sirva em picolés seguros para bebês ou pedaços da fruta.',
        '12+ meses': 'Perfeito como picolé.'
    }
  },
  {
    id: '32',
    name: 'Creme Tropical de Manga e Maracujá',
    description: 'Uma combinação vibrante e deliciosa, com a doçura da manga e a acidez suave do maracujá. Uma explosão de sabor para o paladar do bebê.',
    image: '32',
    ingredients: ['1/2 manga Palmer madura', 'Polpa de 1/4 de maracujá doce (passe na peneira para remover as sementes)'],
    instructions: [
      'Descasque e pique a manga.',
      'No liquidificador ou mixer, bata a manga com a polpa de maracujá peneirada.',
      'Bata até obter um creme liso e aerado.',
      'Sirva geladinho.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '12+ meses',
    texture: 'Creme',
    cookingTime: '5 min',
    cookingInfo: 'Liquidificador',
    ageVariations: {
        '6-8 meses': 'Use apenas a manga e bata para um purê liso.',
        '9-11 meses': 'Pode introduzir o maracujá (peneirado) e servir como creme.',
        '12+ meses': 'Sirva como na receita.'
    }
  },
  {
    id: '33',
    name: 'Compota de Maçã e Ameixa',
    description: 'Uma sobremesa clássica e funcional, que ajuda a regular o intestino do bebê de forma natural e saborosa.',
    image: '33',
    ingredients: ['1/2 maçã', '2 ameixas secas sem caroço', '100ml de água'],
    instructions: [
      'Em uma panela pequena, coloque a ameixa e a água. Deixe ferver por 5 minutos para hidratar e amolecer a ameixa.',
      'Adicione a maçã picada (sem casca) e cozinhe em fogo baixo por mais 10 minutos, ou até a maçã ficar bem macia.',
      'Se sobrar muita água, escorra um pouco.',
      'Amasse tudo com um garfo, formando uma compota rústica.',
      'Sirva morna ou fria.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '6-8 meses',
    texture: 'Amassado',
    cookingTime: '15 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê bem amassado.',
        '9-11 meses': 'Deixe pedaços pequenos de fruta na compota.',
        '12+ meses': 'Sirva com iogurte natural.'
    }
  },
  {
    id: '34',
    name: 'Biscoitinho de Polvilho (Caseiro)',
    description: 'A snack that melts in your mouth, safe for the baby to explore textures. A healthy alternative to industrialized biscuits.',
    image: '34',
    ingredients: ['1 cup of sweet manioc starch', '1/4 cup of olive oil', '1/4 cup of warm water'],
    instructions: [
        'Preheat the oven to 160°C.',
        'In a bowl, mix the manioc starch and olive oil. The mixture will look like wet sand.',
        'Gradually add the warm water, mixing with your hands until it forms a dough that doesn\'t stick.',
        'Make thin rolls or rings with the dough and place them on a baking sheet (no need to grease).',
        'Bake for about 20-25 minutes, or until they are dry and crispy, but not browned. They should remain whitish.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '30 min',
    cookingInfo: 'Assadeira',
    ageVariations: {
        '6-8 meses': 'Não recomendado, textura pode ser muito seca.',
        '9-11 meses': 'Ofereça com supervisão. O biscoito deve desmanchar fácil na boca.',
        '12+ meses': 'Ótimo para lanches.'
    }
  },
  {
      id: '35',
      name: 'Salada de Frutas para Bebês',
      description: 'Uma tigela colorida e cheia de vitaminas, perfeita para o bebê explorar diferentes cores, sabores e texturas com as mãos.',
      image: '35',
      ingredients: ['Pedaços pequenos de manga', 'Uvas sem sementes cortadas em 4 no comprimento', 'Pedaços pequenos de kiwi', 'Mirtilos amassados levemente'],
      instructions: [
          'Lave e pique todas as frutas em pedaços bem pequenos e seguros para a idade do bebê.',
          'Lembre-se de cortar uvas e outras frutas redondas sempre no sentido do comprimento para evitar engasgos.',
          'Misture todas as frutas em uma tigela pequena.',
          'Sirva para o bebê comer com as mãos ou com um garfinho apropriado.',
      ],
      mealType: 'Sobremesa',
      ageGroup: '12+ meses',
      texture: 'Pedaços macios',
      cookingTime: '5 min',
      cookingInfo: 'Tigela',
      ageVariations: {
        '6-8 meses': 'Sirva as frutas separadamente, amassadas ou em tiras seguras.',
        '9-11 meses': 'Pique as frutas em pedaços pequenos para o bebê praticar a pinça.',
        '12+ meses': 'Sirva como uma salada de frutas colorida.'
    }
  },
  {
      id: '36',
      name: 'Mousse Falso de Chocolate (Abacate e Cacau)',
      description: 'Uma sobremesa surpreendente, saudável e que parece "de adulto". O abacate cria uma base cremosa e o cacau dá o sabor de chocolate, sem nenhum açúcar.',
      image: '36',
      ingredients: ['1/2 abacate bem maduro', '1 colher de chá de cacau em pó 100% (sem açúcar)', '1 tâmara sem caroço (opcional, para adoçar)'],
      instructions: [
          'Se for usar a tâmara, deixe-a de molho em água quente por 10 minutos para amolecer bem. Escorra a água.',
          'Coloque o abacate, o cacau e a tâmara (se usar) em um processador de alimentos ou liquidificador potente.',
          'Bata em alta velocidade até obter um creme completamente liso e homogêneo. Pode ser necessário parar e raspar as laterais.',
          'Leve à geladeira por 30 minutos para firmar um pouco e sirva gelado.',
      ],
      mealType: 'Sobremesa',
      ageGroup: '12+ meses',
      texture: 'Creme',
      cookingTime: '5 min (+ tempo de geladeira)',
      cookingInfo: 'Processador de alimentos',
      ageVariations: {
        '6-8 meses': 'Sirva como um purê de abacate, sem o cacau.',
        '9-11 meses': 'Pode introduzir o cacau e servir como um creme.',
        '12+ meses': 'A tâmara pode ser usada para adoçar levemente.'
    }
  },
  {
    id: '40',
    name: 'Sorbet de Morango e Banana',
    description: 'Um "sorvete" cremoso, gelado, saudável e feito com apenas 2 ingredientes. A banana congelada cria a base perfeita.',
    image: '40',
    ingredients: ['1 xícara de morangos congelados', '1 banana madura, congelada em rodelas'],
    instructions: [
      'Certifique-se de que as frutas estão bem congeladas (pelo menos 4 horas no freezer).',
      'Coloque os morangos e as rodelas de banana em um processador de alimentos potente.',
      'Bata, parando para raspar as laterais, até que as frutas se quebrem e comecem a formar um creme homogêneo e liso. Isso pode levar alguns minutos.',
      'Sirva imediatamente, pois derrete rápido!',
    ],
    mealType: 'Sobremesa',
    ageGroup: '12+ meses',
    texture: 'Creme',
    cookingTime: '5 min',
    cookingInfo: 'Processador de alimentos',
    ageVariations: {
        '6-8 meses': 'Amasse as frutas frescas (não congeladas) para um purê.',
        '9-11 meses': 'Pode começar a oferecer o sorbet, garantindo que não esteja muito gelado.',
        '12+ meses': 'Perfeito como um sorvete saudável.'
    }
  },
  {
    id: '50',
    name: 'Compota de Pêssego com Anis',
    description: 'Uma sobremesa delicada, perfumada e saborosa. O anis estrelado adiciona um aroma especial que encanta o paladar.',
    image: '50',
    ingredients: ['1 pêssego maduro e firme', '1 anis estrelado (opcional)', '100ml de água'],
    instructions: [
      'Lave, descasque e corte o pêssego em fatias, removendo o caroço.',
      'Em uma panela pequena, coloque as fatias de pêssego, a água e o anis estrelado (se for usar).',
      'Cozinhe em fogo baixo por cerca de 10-15 minutos, até o pêssego ficar bem macio e a calda levemente encorpada.',
      'Retire e descarte o anis estrelado.',
      'Amasse o pêssego com um garfo ou sirva em pedaços, dependendo da idade do bebê.',
      'Sirva morno ou frio.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
    cookingTime: '15 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Amasse bem para formar um purê.',
        '9-11 meses': 'Sirva em pedaços cozidos e macios.',
        '12+ meses': 'Sirva com iogurte ou como recheio de panquecas.'
    }
  },
  {
    id: '92',
    name: 'Pera Cozida no Suco de Laranja',
    description: 'Cozinhar a pera no suco de laranja adiciona um sabor cítrico delicioso e mais vitamina C.',
    image: '4',
    ingredients: ['1 pera', 'Suco de 1 laranja'],
    instructions: [
        'Descasque e corte a pera em 4 partes.',
        'Em uma panela pequena, cozinhe a pera no suco de laranja em fogo baixo até ficar macia.',
        'Amasse com um garfo e sirva com um pouco da calda.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '6-8 meses',
    texture: 'Amassado',
    cookingTime: '15 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Amasse bem para formar um purê.',
        '9-11 meses': 'Sirva em pedaços cozidos e macios.',
        '12+ meses': 'Sirva as fatias cozidas para o bebê comer sozinho.'
    }
  },
  {
    id: '93',
    name: 'Tiras de Melão Cantaloupe',
    description: 'Doce, suculento e de cor vibrante, o melão cantaloupe é uma ótima opção de fruta para o bebê explorar.',
    image: '93',
    ingredients: ['1 fatia de melão cantaloupe'],
    instructions: [
        'Retire as sementes e a casca do melão.',
        'Corte em tiras grossas que o bebê consiga segurar.',
        'Sirva frio.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '3 min',
    cookingInfo: 'Faca',
    ageVariations: {
        '6-8 meses': 'Ofereça em tiras bem largas e finas para o bebê chupar.',
        '9-11 meses': 'Sirva em tiras ou cubos macios.',
        '12+ meses': 'Sirva em cubos.'
    }
  },
  {
    id: '94',
    name: 'Picolé de Leite Materno ou Fórmula',
    description: 'Uma excelente forma de aliviar o desconforto dos dentes nascendo. Nutritivo e calmante.',
    image: '94',
    ingredients: ['Leite materno extraído ou fórmula preparada'],
    instructions: [
        'Despeje o leite em forminhas de picolé apropriadas para bebês.',
        'Leve ao congelador até firmar completamente.',
        'Ofereça ao bebê para ele chupar, sempre com supervisão.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '6-8 meses',
    texture: 'Pedaços macios',
    cookingTime: '4 horas (congelamento)',
    cookingInfo: 'Congelador',
    ageVariations: {
        '6-8 meses': 'Perfeito para aliviar a gengiva.',
        '9-11 meses': 'Continue oferecendo em dias quentes ou para coçar a gengiva.',
        '12+ meses': 'Pode fazer picolés de frutas batidas com o leite.'
    }
  },
  {
    id: '95',
    name: 'Gelatina de Ágar-Ágar com Suco de Uva',
    description: 'Uma gelatina 100% natural, firme e segura para bebês, feita com suco de fruta integral e ágar-ágar, uma alga que atua como gelificante.',
    image: '95',
    ingredients: ['1 xícara de suco de uva integral (sem açúcar)', '1 colher de chá de ágar-ágar em pó'],
    instructions: [
        'Em uma panela, dissolva o ágar-ágar no suco de uva.',
        'Leve ao fogo médio, mexendo sempre, e deixe ferver por 2 minutos.',
        'Despeje em potinhos ou em uma travessa e leve à geladeira por cerca de 1 hora, ou até firmar.',
        'Corte em cubos para o bebê pegar.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '10 min (+ tempo de geladeira)',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Não recomendado. A textura pode ser perigosa.',
        '9-11 meses': 'Após 9 meses, pode oferecer em pedaços bem pequenos com supervisão.',
        '12+ meses': 'Sirva em cubos para o bebê comer com as mãos.'
    }
  },
  {
    id: '96',
    name: 'Suspiro de Banana (2 ingredientes)',
    description: 'Um doce que parece mágica! A banana se transforma em um merengue fofinho quando batida.',
    image: '30',
    ingredients: ['1 banana prata bem madura', 'Gotas de limão'],
    instructions: [
        'Pré-aqueça o forno na temperatura mais baixa possível (cerca de 100°C).',
        'Bata a banana com as gotas de limão na batedeira em velocidade alta por 10-15 minutos, até virar um creme branco, fofo e firme, como um merengue.',
        'Com uma colher, faça pequenos montinhos em uma assadeira com papel manteiga.',
        'Asse por cerca de 1 a 2 horas, ou até ficarem secos por fora.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
    cookingTime: '1.5 horas',
    cookingInfo: 'Batedeira',
    ageVariations: {
        '6-8 meses': 'Não recomendado.',
        '9-11 meses': 'Não recomendado.',
        '12+ meses': 'Ofereça como um doce diferente, que desmancha na boca.'
    }
  },
  {
    id: '97',
    name: 'Creme de Abacate com Cacau',
    description: 'Uma sobremesa que parece mousse de chocolate, mas é cheia de gorduras boas e nutrientes. Surpreendente e deliciosa.',
    image: '36',
    ingredients: ['1/2 abacate maduro', '1 colher de chá de cacau em pó 100%'],
    instructions: [
        'Bata o abacate com o cacau em um processador ou com um mixer até obter um creme liso.',
        'Se necessário, adicione uma colher de sopa de água para ajudar a bater.',
        'Sirva gelado.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Creme',
    cookingTime: '5 min',
    cookingInfo: 'Processador',
    ageVariations: {
        '6-8 meses': 'Sirva o purê de abacate sem cacau.',
        '9-11 meses': 'Sirva como um creme.',
        '12+ meses': 'Pode adoçar com 1/2 tâmara (sem caroço) batida junto.'
    }
  },
  {
    id: '98',
    name: 'Purê de Ameixa Fresca',
    description: 'Ameixas frescas são suculentas e ótimas para o intestino. Um purê simples e saboroso.',
    image: '98',
    ingredients: ['2 ameixas frescas maduras'],
    instructions: [
        'Lave, retire o caroço e a casca das ameixas.',
        'Amasse bem a polpa com um garfo.',
        'Se a ameixa não estiver muito madura, cozinhe no vapor por 5 minutos antes de amassar.',
        'Sirva em temperatura ambiente.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '6-8 meses',
    texture: 'Purê',
    cookingTime: '5 min',
    cookingInfo: 'Vaporizador',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê liso.',
        '9-11 meses': 'Deixe pedacinhos na compota.',
        '12+ meses': 'Ofereça a ameixa em pedaços (sem caroço).'
    }
  },
  {
    id: '99',
    name: 'Biscoito de Aveia e Banana',
    description: 'Um biscoito macio, saudável e com apenas dois ingredientes. Perfeito para um lanchinho rápido.',
    image: '11',
    ingredients: ['1 banana madura amassada', '1/2 xícara de aveia em flocos'],
    instructions: [
        'Pré-aqueça o forno a 180°C.',
        'Misture a banana amassada com a aveia até formar uma massa.',
        'Molde pequenos biscoitos e coloque em uma assadeira untada.',
        'Asse por 15 minutos ou até as bordas ficarem douradas.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '20 min',
    cookingInfo: 'Assadeira',
    ageVariations: {
        '6-8 meses': 'Não recomendado pela textura.',
        '9-11 meses': 'Sirva os biscoitos macios.',
        '12+ meses': 'Pode adicionar canela ou uva passa na massa.'
    }
  },
  {
    id: '100',
    name: 'Crumble de Maçã para Bebês',
    description: 'Uma sobremesa quentinha e reconfortante. Maçãs macias com uma farofinha crocante e saudável por cima.',
    image: '100',
    ingredients: ['1 maçã em cubos', 'Farofa: 2 colheres de sopa de farinha de aveia, 1 colher de sopa de óleo de coco, canela em pó'],
    instructions: [
        'Cozinhe a maçã em cubos no vapor ou com um pouco de água até ficar macia.',
        'Coloque a maçã cozida em um potinho refratário.',
        'Misture os ingredientes da farofa com as pontas dos dedos até formar uma areia úmida. Cubra as maçãs com essa farofa.',
        'Leve ao forno a 200°C por 10 minutos, ou até a farofa dourar.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '12+ meses',
    texture: 'Amassado',
    cookingTime: '25 min',
    cookingInfo: 'Refratário',
    ageVariations: {
        '6-8 meses': 'Sirva apenas a maçã cozida e amassada.',
        '9-11 meses': 'Sirva a maçã em cubos macios com a farofa por cima.',
        '12+ meses': 'Sirva como na receita.'
    }
  },
    {
    id: '101',
    name: 'Mamão Amassado',
    description: 'Simples, digestivo e rico em vitaminas. O mamão é uma das primeiras frutas a serem oferecidas e geralmente é bem aceito.',
    image: '101',
    ingredients: ['1 fatia pequena de mamão papaia'],
    instructions: [
        'Retire as sementes e amasse bem a polpa com um garfo.',
        'Sirva imediatamente para não amargar.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '6-8 meses',
    texture: 'Amassado',
    cookingTime: '2 min',
    cookingInfo: 'Garfo',
    ageVariations: {
        '6-8 meses': 'Amasse bem para um purê.',
        '9-11 meses': 'Sirva em pedaços pequenos.',
        '12+ meses': 'Sirva em fatias para o bebê morder.'
    }
  },
  {
    id: '102',
    name: 'Kiwi em Pedaços',
    description: 'O kiwi é rico em vitamina C e tem um sabor levemente ácido que ajuda a desenvolver o paladar do bebê.',
    image: '102',
    ingredients: ['1 kiwi maduro'],
    instructions: [
        'Descasque o kiwi.',
        'Corte em rodelas e depois corte cada rodela em quatro, formando pedaços seguros para o bebê pegar.',
        'Sirva frio.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
    cookingTime: '3 min',
    cookingInfo: 'Faca',
    ageVariations: {
        '6-8 meses': 'Ofereça amassado com garfo.',
        '9-11 meses': 'Corte em rodelas ou meias-luas.',
        '12+ meses': 'Sirva em cubos.'
    }
  },
  {
    id: '103',
    name: 'Picolé de Manga com Iogurte',
    description: 'Um picolé cremoso e nutritivo. A mistura do iogurte com a manga cria uma sobremesa deliciosa para dias quentes.',
    image: '103',
    ingredients: ['1/2 manga picada', '3 colheres de sopa de iogurte natural'],
    instructions: [
        'Bata a manga e o iogurte no liquidificador até obter um creme liso.',
        'Despeje em forminhas de picolé para bebês.',
        'Leve ao congelador por pelo menos 4 horas.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Creme',
    cookingTime: '4 horas (congelamento)',
    cookingInfo: 'Congelador',
    ageVariations: {
        '6-8 meses': 'Sirva como um purê geladinho (sem congelar totalmente).',
        '9-11 meses': 'Faça os picolés em formas seguras para bebês.',
        '12+ meses': 'Perfeito para esta idade.'
    }
  },
  {
    id: '104',
    name: 'Compota de Abacaxi com Hortelã',
    description: 'O abacaxi cozido fica menos ácido e muito doce. A hortelã adiciona um toque de frescor surpreendente.',
    image: '104',
    ingredients: ['1 fatia de abacaxi', '2 folhas de hortelã'],
    instructions: [
        'Pique o abacaxi em pedaços bem pequenos.',
        'Cozinhe em fogo baixo com as folhas de hortelã por cerca de 10 minutos, até amolecer.',
        'Retire as folhas de hortelã e amasse os pedaços de abacaxi com um garfo.',
        'Sirva morno ou frio.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
    cookingTime: '12 min',
    cookingInfo: 'Panela',
    ageVariations: {
        '6-8 meses': 'Bata no liquidificador para um purê bem liso.',
        '9-11 meses': 'Sirva amassado com garfo.',
        '12+ meses': 'Ofereça em cubos cozidos.'
    }
  }
];

export const guideTopics: GuideTopic[] = [
  {
    id: '1',
    title: 'Quando começar a introdução alimentar?',
    content: 'A recomendação da Organização Mundial da Saúde (OMS) e do Ministério da Saúde é iniciar a introdução alimentar aos 6 meses de vida do bebê. O leite materno (ou fórmula) deve ser o alimento exclusivo até essa idade. Além da idade, o bebê precisa mostrar sinais de prontidão, como: sentar com o mínimo de apoio, ter bom controle da cabeça e do pescoço, levar objetos à boca e demonstrar interesse pela comida dos adultos.',
  },
  {
    id: '2',
    title: 'Engasgo vs. Reflexo de GAG',
    content: 'O Reflexo de GAG (ou de protusão da língua) é um mecanismo de defesa natural do bebê. Ele empurra o alimento para fora da boca para evitar um engasgo. O bebê pode tossir, fazer ânsia e ficar com o rosto vermelho, mas ele está no controle. Já o engasgo real é silencioso. A criança não consegue tossir, chorar ou respirar, e a pele pode ficar azulada. É crucial que os pais e cuidadores saibam a Manobra de Heimlich para bebês.',
  },
  {
    id: '3',
    title: 'Como introduzir alimentos alergênicos?',
    content: 'Os principais alimentos alergênicos são: ovo, trigo, peixes, frutos do mar, amendoim, castanhas e leite. A recomendação atual é introduzir esses alimentos a partir dos 6 meses, junto com os outros. Ofereça um de cada vez, em pequena quantidade, pela manhã ou no almoço, e observe por 2 dias. Por exemplo, ofereça um pouco de ovo cozido e amassado e observe. Se não houver reação, pode continuar oferecendo. Consulte o pediatra.',
  },
  {
    id: '3.5',
    title: 'Quais temperos posso usar?',
    content: 'Você pode e deve usar temperos naturais desde o início para formar o paladar do bebê! Sal é proibido até 1 ano. Açúcar é proibido até 2 anos. Use e abuse de: cebola, alho, salsinha, cebolinha, coentro, orégano, manjericão, alecrim, tomilho, louro e um fio de azeite de oliva extra virgem. Eles tornam a comida muito mais saborosa.',
  },
  {
    id: '4',
    title: 'Meu bebê não quer comer. O que fazer?',
    content: 'Calma, é super normal! A introdução alimentar é uma fase de aprendizado. Lembre-se que o principal alimento ainda é o leite. Continue oferecendo os alimentos de forma positiva e sem pressão. Varie o cardápio, a forma de apresentação (amassado, em pedaços), coma junto com o bebê (eles aprendem pelo exemplo) e evite distrações como telas. Se a recusa persistir por muitos dias, converse com o pediatra.',
  },
  {
    id: '5',
    title: 'O que é o método BLW (Baby-Led Weaning)?',
    content: 'BLW significa "desmame guiado pelo bebê". Nesse método, em vez de papinhas, você oferece os alimentos em pedaços seguros, em formatos e texturas que o bebê consiga pegar com as mãos e levar à boca. Isso promove a autonomia, a coordenação e a exploração sensorial. É importante estudar os cortes e texturas seguras para cada alimento para evitar engasgos.',
  },
  {
    id: '6',
    title: 'Sinais de fome e saciedade',
    content: 'Respeitar os sinais do bebê é fundamental. Sinais de fome: abrir a boca ao ver a colher, inclinar-se para a frente, ficar animado. Sinais de saciedade: virar o rosto, fechar a boca, cuspir a comida, empurrar a colher, ficar irritado ou distraído. Nunca force o bebê a comer. Confie na capacidade dele de regular o próprio apetite.',
  },
  {
    id: '7',
    title: 'A importância da oferta de água',
    content: 'A partir do início da introdução alimentar (6 meses), a água deve ser oferecida ao bebê. Ofereça pequenas quantidades em um copo de treinamento várias vezes ao dia, nos intervalos entre as mamadas e as refeições. A água ajuda na hidratação, no funcionamento do intestino e na adaptação do corpo aos novos alimentos. Não substitua a água por sucos.',
  },
  {
    id: '8',
    title: 'Como armazenar as papinhas?',
    content: 'Você pode cozinhar para alguns dias. Guarde em potes de vidro ou plástico livre de BPA com tampa. Na geladeira, a papinha dura até 3 dias. No congelador, pode durar até 3 meses. Use etiquetas com o nome do alimento e a data de fabricação. Para descongelar, deixe na geladeira de um dia para o outro ou aqueça em banho-maria. Nunca recongele uma papinha já descongelada.',
  },
  {
    id: '9',
    title: 'Evolução das texturas',
    content: 'É crucial evoluir a textura dos alimentos para desenvolver a musculatura da mastigação. Comece com papas bem amassadas, mas não totalmente lisas (6 meses). Progrida para alimentos amassados com o garfo, deixando pequenos pedacinhos (7-8 meses). Depois, alimentos picados em pedaços pequenos e macios (9-11 meses). Próximo de 1 ano, o bebê já pode comer a mesma comida da família, com pequenos ajustes e sem sal.',
  },
];

export const evolutionTopics: EvolutionTopic[] = [
  {
    id: '1',
    title: '6 Meses: O Início da Aventura',
    content: [
      {
        title: "Comportamento Esperado:",
        items: [
          "Mostra grande interesse pela comida dos adultos.",
          "Leva tudo à boca para explorar.",
          "Senta com apoio e tem bom controle da cabeça.",
          "O reflexo de colocar a língua para fora (protrusão) está diminuindo."
        ]
      },
      {
        title: "Alimentação e Habilidades:",
        items: [
          "Início das primeiras refeições (1 a 2 por dia).",
          "Textura: purês, papas bem amassadas (não liquidas).",
          "No BLW, alimentos em tiras grandes e macias, fáceis de segurar.",
          "O principal alimento ainda é o leite materno ou fórmula."
        ]
      }
    ]
  },
  {
    id: '2',
    title: '7 a 8 Meses: Aprimorando a Mastigação',
    content: [
      {
        title: "Comportamento Esperado:",
        items: [
          "Senta sem apoio por mais tempo.",
          "Começa a transferir objetos de uma mão para a outra.",
          "Pode começar a 'fazer pinça' com os dedos, mas ainda de forma imatura.",
          "Faz movimentos de 'roer' e morder, mesmo sem dentes."
        ]
      },
      {
        title: "Alimentação e Habilidades:",
        items: [
          "2 refeições principais + 1 a 2 lanches de frutas.",
          "Textura: evoluir de purês lisos para amassados com garfo, com pequenos pedaços macios.",
          "Pode começar a oferecer alimentos mais 'grumosos'.",
          "Já consegue segurar pedaços de comida com mais destreza."
        ]
      }
    ]
  },
  {
    id: '3',
    title: '9 a 11 Meses: O Pequeno Explorador',
    content: [
      {
        title: "Comportamento Esperado:",
        items: [
          "Engatinha ou se arrasta pela casa.",
          "Fica de pé se apoiando nos móveis.",
          "Desenvolve o movimento de pinça (pegar coisas com o polegar e o indicador).",
          "Começa a entender comandos simples e a imitar gestos."
        ]
      },
      {
        title: "Alimentação e Habilidades:",
        items: [
          "A comida da família começa a ser a referência principal.",
          "Textura: alimentos em pedaços pequenos e macios que o bebê pode pegar com a pinça.",
          "Começa a usar a colher, mas ainda com muita bagunça.",
          "Bebe água no copinho com mais autonomia."
        ]
      }
    ]
  },
  {
    id: '4',
    title: '12 Meses: Rumo à Independência',
    content: [
      {
        title: "Comportamento Esperado:",
        items: [
          "Pode dar os primeiros passos.",
          "Usa a pinça com perfeição para pegar pequenos objetos.",
          "Demonstra claramente suas preferências alimentares.",
          "Fala as primeiras palavras e aponta para o que quer."
        ]
      },
      {
        title: "Alimentação e Habilidades:",
        items: [
          "A criança já pode fazer as mesmas refeições da família (sem sal e açúcar).",
          "Textura: comida bem picada, mas já com texturas variadas (carne em tiras, grãos inteiros).",
          "Consegue manusear talheres infantis com mais habilidade.",
          "Participa ativamente das refeições em família."
        ]
      }
    ]
  }
];


export const foodChecklist: FoodChecklistItem[] = [
  // Frutas
  { id: 'f1', name: 'Maçã', category: 'Fruta' },
  { id: 'f2', name: 'Banana', category: 'Fruta' },
  { id: 'f3', name: 'Pera', category: 'Fruta' },
  { id: 'f4', name: 'Mamão', category: 'Fruta' },
  { id: 'f5', name: 'Abacate', category: 'Fruta' },
  { id: 'f6', name: 'Manga', category: 'Fruta' },
  { id: 'f7', name: 'Laranja', category: 'Fruta' },
  { id: 'f8', name: 'Uva (cortada)', category: 'Fruta' },
  { id: 'f9', name: 'Morango', category: 'Fruta' },
  { id: 'f10', name: 'Melancia', category: 'Fruta' },
  // Legumes
  { id: 'l1', name: 'Batata Doce', category: 'Legume' },
  { id: 'l2', name: 'Abóbora', category: 'Legume' },
  { id: 'l3', name: 'Cenoura', category: 'Legume' },
  { id: 'l4', name: 'Brócolis', category: 'Legume' },
  { id: 'l5', name: 'Couve-flor', category: 'Legume' },
  { id: 'l6', name: 'Abobrinha', category: 'Legume' },
  { id: 'l7', name: 'Mandioquinha', category: 'Legume' },
  { id: 'l8', name: 'Inhame', category: 'Legume' },
  { id: 'l9', name: 'Beterraba', category: 'Legume' },
  { id: 'l10', name: 'Tomate (sem pele/semente)', category: 'Legume' },
  // Proteínas
  { id: 'p1', name: 'Frango', category: 'Proteína' },
  { id: 'p2', name: 'Carne Bovina', category: 'Proteína' },
  { id: 'p5', name: 'Feijão', category: 'Proteína' },
  { id: 'p6', name: 'Lentilha', category: 'Proteína' },
  { id: 'p7', name: 'Grão de Bico', category: 'Proteína' },
  // Grãos e Cereais
  { id: 'g1', name: 'Arroz', category: 'Grão' },
  { id: 'g2', name: 'Aveia', category: 'Grão' },
  { id: 'g3', name: 'Milho', category: 'Grão' },
  { id: 'g4', name: 'Quinoa', category: 'Grão' },
];

export const allergenicFoods: AllergenicFood[] = [
    {
      id: 'a1',
      name: 'Ovo',
      category: 'Alimento Alergênico',
      introduction: 'Ofereça o ovo inteiro (clara e gema) bem cozido (10 min de fervura). Pode ser amassado ou em tiras. Ofereça uma pequena quantidade e aguarde 2 dias.',
      observation: 'Sinais leves: vermelhidão ao redor da boca. Sinais de alerta: urticária (placas vermelhas na pele), inchaço de lábios/olhos, vômitos ou dificuldade para respirar.'
    },
    {
      id: 'a2',
      name: 'Trigo',
      category: 'Alimento Alergênico',
      introduction: 'Ofereça através de pão (sem sal/açúcar) em tiras para o bebê chupar, ou macarrão bem cozido. Comece com pouca quantidade.',
      observation: 'Fique atento a desconforto abdominal, diarreia, ou reações de pele como urticária.'
    },
    {
      id: 'a3',
      name: 'Leite de Vaca e Derivados',
      category: 'Alimento Alergênico',
      introduction: 'Pode ser introduzido em pequenas quantidades em receitas (ex: purê) ou através de iogurte natural integral sem açúcar. Não substitui o leite materno/fórmula como bebida principal antes de 1 ano.',
      observation: 'Alergia (APLV) pode causar reações de pele, vômitos, diarreia com ou sem sangue e chiado no peito. Intolerância à lactose geralmente causa gases e diarreia.'
    },
    {
      id: 'a4',
      name: 'Amendoim e Castanhas',
      category: 'Alimento Alergênico',
      introduction: 'NUNCA ofereça inteiros pelo alto risco de engasgo. Introduza em forma de pasta (espalhando uma camada fina em uma fruta) ou farinha (misturada no mingau).',
      observation: 'Alergias a amendoim/castanhas podem ser graves. Fique atento a qualquer inchaço, urticária ou dificuldade para respirar e procure ajuda médica imediatamente.'
    },
    {
      id: 'a5',
      name: 'Peixe e Frutos do Mar',
      category: 'Alimento Alergênico',
      introduction: 'Comece com peixes brancos (ex: tilápia) bem cozidos e desfiados, verificando cuidadosamente a ausência de espinhas. Frutos do mar (camarão, etc.) devem ser introduzidos com mais cautela e orientação pediátrica.',
      observation: 'Urticária, inchaço e vômitos são os sinais mais comuns. Reações podem ser rápidas e intensas.'
    },
    {
      id: 'a6',
      name: 'Soja',
      category: 'Alimento Alergênico',
      introduction: 'Pode ser oferecida na forma de tofu (em tiras ou amassado) ou edamame cozido (sem a vagem).',
      observation: 'Acompanhe por possíveis reações de pele, gastrointestinais ou respiratórias.'
    }
];

export const firstWeeksPlan: PlanDay[] = [
  { day: 1, food: "Cenoura", textureAndCut: "Purê liso ou palitos cozidos muito macios.", prepTime: "15 min", allergyRisk: "Baixo", tip: "Deixe o bebê explorar o alimento com as mãos antes de levar à boca." },
  { day: 2, food: "Banana", textureAndCut: "Amassada com garfo ou em tiras grandes.", prepTime: "5 min", allergyRisk: "Baixo", tip: "Use uma banana bem madura, que é mais doce e fácil de amassar." },
  { day: 3, food: "Batata Doce", textureAndCut: "Purê ou palitos assados/cozidos bem macios.", prepTime: "25 min", allergyRisk: "Baixo", tip: "Asse em vez de cozinhar para um sabor mais adocicado." },
  { day: 4, food: "Mamão", textureAndCut: "Amassado ou em tiras largas (sem sementes).", prepTime: "5 min", allergyRisk: "Baixo", tip: "O mamão ajuda no funcionamento do intestino do bebê." },
  { day: 5, food: "Abóbora", textureAndCut: "Cozida e amassada com garfo.", prepTime: "20 min", allergyRisk: "Baixo", tip: "Use temperos naturais como cebola e salsinha no cozimento." },
  { day: 6, food: "Pera", textureAndCut: "Raspada ou cozida em pedaços macios.", prepTime: "10 min", allergyRisk: "Baixo", tip: "Se a pera estiver dura, cozinhe no vapor por alguns minutos." },
  { day: 7, food: "Abacate", textureAndCut: "Amassado ou em fatias grandes em formato de meia-lua.", prepTime: "5 min", allergyRisk: "Baixo", tip: "Rico em gorduras boas, essenciais para o cérebro do bebê." },
  { day: 8, food: "Frango", textureAndCut: "Cozido e bem desfiado, misturado em um purê.", prepTime: "20 min", allergyRisk: "Baixo", tip: "Use o caldo do cozimento do frango para umedecer e dar sabor." },
  { day: 9, food: "Maçã", textureAndCut: "Cozida e amassada ou ralada (se bem macia).", prepTime: "10 min", allergyRisk: "Baixo", tip: "Adicione uma pitada de canela para um sabor diferente." },
  { day: 10, food: "Brócolis", textureAndCut: "'Arvorezinhas' cozidas no vapor bem macias.", prepTime: "10 min", allergyRisk: "Baixo", tip: "Ofereça o talo para o bebê segurar, ele vai adorar explorar." },
  { day: 11, food: "Feijão", textureAndCut: "Apenas o caldo grosso ou grãos bem amassados.", prepTime: "5 min (com feijão pronto)", allergyRisk: "Baixo", tip: "O feijão é uma excelente fonte de ferro." },
  { day: 12, food: "Ovo", textureAndCut: "Ovo cozido por 10 min, bem amassado.", prepTime: "12 min", allergyRisk: "Alto", tip: "Ofereça pela manhã para observar possíveis reações ao longo do dia." },
  { day: 13, food: "Manga", textureAndCut: "Raspada ou em tiras grossas e seguras.", prepTime: "5 min", allergyRisk: "Baixo", tip: "Escolha uma manga sem fiapos, como a Palmer." },
  { day: 14, food: "Peixe Branco", textureAndCut: "Cozido no vapor e bem desfiado, sem espinhas.", prepTime: "15 min", allergyRisk: "Médio", tip: "Verifique 3 vezes se não há espinhas antes de oferecer." }
];

export const ageRoutines: Routine[] = [
  {
    age: "6 Meses",
    meals: "1 a 2 refeições (almoço e/ou jantar) + 1 fruta",
    schedule: "Almoço por volta das 11h-12h. Jantar por volta das 17h-18h.",
    texture: "Purês e papas bem amassadas, mas não totalmente lisas.",
    example: "Almoço: Purê de batata doce + caldo de feijão + frango desfiado. Fruta: Banana amassada."
  },
  {
    age: "7-8 Meses",
    meals: "2 refeições principais (almoço e jantar) + 2 lanches (frutas)",
    schedule: "Manhã: fruta. Meio-dia: almoço. Tarde: fruta. Início da noite: jantar.",
    texture: "Alimentos amassados com garfo, com alguns pedacinhos macios para estimular a mastigação.",
    example: "Almoço: Arroz bem cozido e amassado + lentilha amassada + carne moída. Tarde: Pera em pedaços macios."
  },
  {
    age: "9-11 Meses",
    meals: "2 refeições principais + 2 a 3 lanches",
    schedule: "Rotina similar aos 8 meses, mas o bebê pode começar a comer mais próximo dos horários da família.",
    texture: "Comida em pedaços pequenos e macios. O bebê já pratica o movimento de pinça.",
    example: "Jantar: Pedaços de peixe grelhado e desfiado + palitos de cenoura cozida + arroz."
  },
  {
    age: "12+ Meses",
    meals: "3 refeições principais (café da manhã, almoço, jantar) + 2 lanches",
    schedule: "A criança já pode seguir a rotina de refeições da família.",
    texture: "A mesma comida da família, com os alimentos picados em pedaços seguros. Evitar sal e açúcar.",
    example: "Almoço: Arroz, feijão, frango em cubos, salada de tomate picado e brócolis."
  }
];

export const safetyTopics: SafetyTopic[] = [
  {
    id: "1",
    title: "Gag vs. Engasgo: Qual a diferença?",
    content: "O GAG é um reflexo natural e protetor. O bebê tosse, faz ânsia e pode ficar vermelho, mas o ar está passando. Ele está aprendendo a lidar com o alimento. O ENGASGO é silencioso. O bebê não consegue tossir, chorar ou respirar. É uma emergência e requer ação imediata (Manobra de Heimlich)."
  },
  {
    id: "2",
    title: "Cortes Seguros (Método BLW)",
    content: [
      {
        title: "Alimentos Redondos e Pequenos:",
        items: ["Uvas, tomate cereja, ovo de codorna: SEMPRE corte em 4 partes no sentido do comprimento.", "Nunca ofereça inteiros."]
      },
      {
        title: "Alimentos Cilíndricos:",
        items: ["Salsicha, cenoura crua: EVITE. Se oferecer cenoura, cozinhe bem e corte em palitos.", "Salsicha não é recomendada."]
      },
      {
        title: "Alimentos Duros:",
        items: ["Maçã crua, castanhas, amendoim: EVITE oferecer inteiros. Ofereça a maçã cozida, em purê ou ralada. Castanhas e amendoim, em forma de pasta ou farinha."]
      },
      {
        title: "Formato Seguro (6-8 meses):",
        items: ["Ofereça alimentos em formato de palito, da grossura de um dedo de adulto, para o bebê conseguir segurar com a mão."]
      }
    ]
  },
  {
    id: "3",
    title: "Texturas por Idade",
    content: "Comece com purês e amassados (6 meses). Evolua para pedaços muito macios que se desmancham na boca (7-8 meses). Prossiga para pedaços um pouco maiores e mais firmes (9-11 meses) para treinar a mastigação. Com 1 ano, o bebê já pode comer a comida da família, bem picada."
  },
  {
    id: "4",
    title: "Preparando Alimentos de Forma Segura",
    content: "Cozinhe bem legumes duros como cenoura e batata, até que você consiga amassá-los facilmente com um garfo. Retire peles, sementes grandes e caroços. Desfie bem as carnes e verifique CUIDADOSAMENTE se não há espinhas em peixes. Evite mel até 1 ano de idade pelo risco de botulismo."
  }
];

export const cutsAndTextures: CutAndTexture[] = [
  { id: 'cut1', food: 'Banana', imageId: '11', cut_6_8_months: 'Em palito: corte a banana ao meio e depois novamente ao meio no comprimento. Deixe um pedaço da casca na base para o bebê segurar melhor.', cut_9_12_months: 'Em rodelas ou pedaços menores para o bebê praticar o movimento de pinça.' },
  { id: 'cut2', food: 'Abacate', imageId: '13', cut_6_8_months: 'Em fatias grandes (formato de meia-lua), com ou sem casca. A casca ajuda na pega. Pode também "empanar" na farinha de aveia para não escorregar.', cut_9_12_months: 'Em cubos pequenos e macios para o bebê pegar com os dedos.' },
  { id: 'cut3', food: 'Batata Doce / Cenoura', imageId: '47', cut_6_8_months: 'Cozinhe ou asse bem até ficar muito macio (teste do garfo). Sirva em formato de palitos grossos.', cut_9_12_months: 'Em cubos pequenos e macios ou continue em palitos.' },
  { id: 'cut4', food: 'Maçã / Pera', imageId: '4', cut_6_8_months: 'NUNCA ofereça crua. Cozinhe ou asse até ficar muito macia. Sirva em fatias grandes ou amassada.', cut_9_12_months: 'Cozida em pedaços menores. Se muito macia, pode ralar crua em ralo grosso.' },
  { id: 'cut5', food: 'Carne / Frango', imageId: '17', cut_6_8_months: 'Cozinhe bem (na pressão é ótimo) e sirva em tiras grandes e bem macias que se desfaçam, ou muito bem desfiado e misturado em purês.', cut_9_12_months: 'Em pedaços pequenos e macios, ou desfiado.' }
];

export const gagVsChoke: GagVsChoke = {
  normalReactions: [
    'Tosse para trazer o alimento para frente.',
    'Faz ânsia de vômito (mas não vomita).',
    'Rosto fica vermelho, mas a respiração continua normal.',
    'Cospe o pedaço de comida.',
    'Continua tentando comer depois do episódio.'
  ],
  alertReactions: [
    'Silêncio! A criança não consegue tossir, chorar ou emitir som.',
    'Dificuldade para respirar, pode haver um chiado agudo.',
    'Lábios, língua ou rosto começam a ficar azulados.',
    'Expressão de pânico nos olhos.',
    'Perda de consciência.'
  ]
};

export const whatToDoInChoking: ChokingGuide = {
  description: "Diferente do GAG, o engasgo é uma emergência. A criança não consegue respirar. Aja rápido:",
  steps: [
    "NÃO tente tirar o objeto com o dedo, você pode empurrá-lo mais fundo.",
    "Ligue para a emergência (192) e coloque no viva-voz.",
    "Aplique a Manobra de Heimlich para bebês menores de 1 ano (tapas nas costas e compressões no peito).",
    "Mantenha a calma e siga as instruções do socorro."
  ],
  link: "https://www.youtube.com/watch?v=5rK3934n-tA",
  linkText: "Assista a um vídeo da manobra aqui (link para fonte confiável)"
};
