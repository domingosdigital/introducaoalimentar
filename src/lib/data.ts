import type { DailySuggestion, FoodHistory, GuideTopic, Recipe } from './types';

export const dailySuggestions: DailySuggestion[] = [
  {
    foodName: 'Abacate',
    texture: 'amassada',
    preparation: 'Amasse um quarto de abacate maduro com um garfo até obter uma consistência de purê. Ofereça ao bebê com uma colher pequena. Não adicione açúcar ou sal.',
  },
  {
    foodName: 'Banana',
    texture: 'amassada',
    preparation: 'Amasse meia banana madura com um garfo. A consistência é perfeita para iniciantes. Pode também oferecer em pedaços grandes e seguros para o bebê segurar (método BLW).',
  },
  {
    foodName: 'Batata Doce',
    texture: 'purê',
    preparation: 'Cozinhe a batata doce no vapor até ficar bem macia. Amasse com um garfo, adicionando um pouco de água do cozimento ou leite materno/fórmula para atingir a consistência desejada.',
  },
  {
    foodName: 'Cenoura',
    texture: 'purê',
    preparation: 'Cozinhe a cenoura no vapor até ficar macia. Bata no liquidificador ou amasse bem com um garfo. É naturalmente adocicada e costuma ser bem aceita.',
  },
  {
    foodName: 'Mamão',
    texture: 'amassada',
    preparation: 'Raspe a polpa de um mamão papaia maduro com uma colher ou amasse um pedaço. É uma ótima fonte de vitaminas e ajuda na digestão.',
  },
  {
    foodName: 'Brócolis',
    texture: 'pedaços',
    preparation: 'Cozinhe os floretes de brócolis no vapor até ficarem macios, mas ainda firmes o suficiente para o bebê segurar. O "tronquinho" serve como um pegador natural.',
  },
  {
    foodName: 'Maçã',
    texture: 'purê',
    preparation: 'Cozinhe uma maçã sem casca no vapor até ficar bem macia. Amasse com um garfo. A maçã cozida é mais fácil de digerir do que a crua para os bebês.',
  },
  {
    foodName: 'Pera',
    texture: 'amassada',
    preparation: 'Use uma pera bem madura e macia. Amasse com um garfo até virar um purê. É suculenta e ótima para bebês que estão começando.',
  },
  {
    foodName: 'Manga',
    texture: 'pedaços',
    preparation: 'Ofereça um pedaço grande e firme de manga (sem fiapos) para o bebê segurar e chupar. Uma ótima experiência sensorial e de sabor.',
  },
  {
    foodName: 'Inhame',
    texture: 'purê',
    preparation: 'Cozinhe o inhame no vapor ou na água até ficar bem macio. Amasse com um garfo. É um tubérculo muito nutritivo e de sabor suave.',
  },
  {
    foodName: 'Abóbora',
    texture: 'purê',
    preparation: 'Asse ou cozinhe no vapor um pedaço de abóbora cabotiá. Amasse bem. É docinha, cremosa e rica em vitamina A.',
  },
  {
    foodName: 'Couve-flor',
    texture: 'pedaços',
    preparation: 'Cozinhe os floretes de couve-flor no vapor até ficarem macios. Ofereça em "arvorezinhas" que o bebê possa segurar.',
  },
  {
    foodName: 'Feijão',
    texture: 'amassada',
    preparation: 'Cozinhe o feijão sem sal e sem temperos. Amasse bem os grãos com um garfo para formar uma pasta. É uma excelente fonte de ferro.',
  },
  {
    foodName: 'Frango',
    texture: 'amassada',
    preparation: 'Cozinhe um pedaço de peito de frango na água. Depois de cozido, desfie bem e amasse com um garfo. Misture com purê de batata para umedecer.',
  },
  {
    foodName: 'Peixe',
    texture: 'amassada',
    preparation: 'Cozinhe no vapor um filé de peixe branco sem espinhas (como tilápia). Desfaça com um garfo e verifique cuidadosamente se não há espinhas antes de oferecer.',
  },
  {
    foodName: 'Gema de Ovo',
    texture: 'amassada',
    preparation: 'Cozinhe um ovo por 10 minutos. Separe a gema e amasse com um garfo. A clara pode ser introduzida um pouco mais tarde.',
  },
  {
    foodName: 'Melancia',
    texture: 'pedaços',
    preparation: 'Ofereça um pedaço grande, em formato de meia-lua, com um pouco da casca para o bebê segurar. Retire todas as sementes. É super refrescante!',
  },
  {
    foodName: 'Lentilha',
    texture: 'purê',
    preparation: 'Cozinhe a lentilha vermelha (que cozinha mais rápido) até desmanchar. Tempere com um fio de azeite. É rica em proteínas e ferro.',
  },
  {
    foodName: 'Chuchu',
    texture: 'pedaços',
    preparation: 'Cozinhe o chuchu no vapor até ficar macio, mas firme. Corte em palitos para o bebê segurar. É um alimento leve e com bastante água.',
  },
  {
    foodName: 'Quiabo',
    texture: 'pedaços',
    preparation: 'Grelhe ou asse o quiabo inteiro em forno médio até ficar macio. Isso reduz a baba. Ofereça ao bebê para ele explorar a textura.',
  }
];

export const recipes: Recipe[] = [
  // Café da Manhã
  {
    id: '1',
    name: 'Mingau de Aveia com Banana',
    description: 'Energia e doçura natural para começar o dia.',
    image: '6',
    ingredients: ['2 colheres de sopa de aveia em flocos finos', '1/2 banana amassada'],
    instructions: [
      'Cozinhe a aveia com água ou leite (conforme orientação pediátrica) até formar um mingau.',
      'Misture a banana amassada.',
      'Deixe amornar e sirva.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '6-8 meses',
    texture: 'Creme',
  },
  {
    id: '11',
    name: 'Panqueca de Banana',
    description: 'Fofinha e fácil para o bebê segurar.',
    image: '11',
    ingredients: ['1 banana madura', '1 ovo', '2 colheres de sopa de farinha de aveia'],
    instructions: [
      'Amasse a banana, misture o ovo e a farinha de aveia.',
      'Aqueça uma frigideira antiaderente e despeje pequenas porções.',
      'Cozinhe dos dois lados até dourar. Sirva em tiras.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
  },
  {
    id: '12',
    name: 'Ovos Mexidos Cremosos',
    description: 'Fonte de proteína para um café da manhã reforçado.',
    image: '8',
    ingredients: ['1 ovo', '1 colher de sopa de leite ou água'],
    instructions: [
      'Bata o ovo com o leite/água.',
      'Despeje em uma frigideira antiaderente em fogo baixo.',
      'Mexa suavemente até cozinhar. Sirva morno.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
  },
  {
    id: '13',
    name: 'Vitamina de Abacate e Maçã',
    description: 'Refrescante e cheio de gorduras boas.',
    image: '13',
    ingredients: ['1/4 de abacate', '1/2 maçã sem casca', 'Um pouco de água'],
    instructions: [
      'Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.',
      'Sirva em um copo de treinamento.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Creme',
  },
  {
    id: '14',
    name: 'Torrada com Pasta de Amendoim',
    description: 'Energia e proteína para os pequenos aventureiros.',
    image: '14',
    ingredients: ['1 fatia de pão de forma integral', '1 colher de chá de pasta de amendoim integral sem açúcar'],
    instructions: [
      'Toste levemente o pão.',
      'Passe uma camada fina de pasta de amendoim.',
      'Corte em tiras ou pedaços pequenos.',
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
  },

  // Almoço
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
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Purê',
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
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
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
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Sopa',
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
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Amassado',
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
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Purê',
  },
  {
    id: '15',
    name: 'Risoto de Legumes para Bebês',
    description: 'Um prato completo e saboroso.',
    image: '15',
    ingredients: ['2 colheres de sopa de arroz arbóreo', 'Legumes picados (abobrinha, cenoura)', 'Caldo de legumes caseiro (sem sal)'],
    instructions: [
      'Refogue o arroz em um fio de azeite.',
      'Adicione os legumes e cubra com o caldo.',
      'Cozinhe em fogo baixo, mexendo e adicionando mais caldo até o arroz ficar macio e cremoso.',
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
  },
  {
    id: '16',
    name: 'Peixe Cozido com Batata',
    description: 'Ômega 3 e carboidrato para dar energia.',
    image: '16',
    ingredients: ['30g de filé de peixe branco (tilápia, pescada)', '1 batata pequena'],
    instructions: [
      'Cozinhe o peixe e a batata (descascada) no vapor.',
      'Amasse a batata e desfie o peixe, verificando se não há espinhas.',
      'Misture tudo e sirva.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
  },
  {
    id: '17',
    name: 'Carne de Panela Desfiada',
    description: 'Uma introdução saborosa à carne vermelha.',
    image: '17',
    ingredients: ['50g de músculo ou acém', '1/2 tomate picado', '1/4 de cebola'],
    instructions: [
      'Cozinhe a carne na pressão com o tomate e a cebola até ficar muito macia.',
      'Desfie a carne e sirva com o caldinho que se formou.',
      'Pode acompanhar um purê de mandioquinha.',
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
  },
  {
    id: '18',
    name: 'Sopa de Lentilha',
    description: 'Rica em ferro e fibras, perfeita para dias frios.',
    image: '18',
    ingredients: ['3 colheres de sopa de lentilha', '1/2 cenoura em cubos', '1/2 batata em cubos'],
    instructions: [
      'Cozinhe a lentilha com os legumes em água até ficarem macios.',
      'Bata no liquidificador ou amasse com um garfo para a textura desejada.',
      'Regue com um fio de azeite antes de servir.',
    ],
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Sopa',
  },
  {
    id: '19',
    name: 'Macarrão com Brócolis',
    description: 'Uma forma divertida de comer vegetais.',
    image: '19',
    ingredients: ['20g de macarrão para bebês (pequeno)', 'Floretes de brócolis cozidos'],
    instructions: [
      'Cozinhe o macarrão conforme as instruções da embalagem.',
      'Pique os floretes de brócolis cozidos e misture ao macarrão.',
      'Adicione um fio de azeite.',
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
  },

  // Jantar
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
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Purê',
  },
  {
    id: '20',
    name: 'Canja de Galinha para Bebê',
    description: 'Leve, reconfortante e nutritiva.',
    image: '20',
    ingredients: ['30g de frango em cubos', '2 colheres de sopa de arroz', '1/2 cenoura picada'],
    instructions: [
      'Cozinhe o frango com a cenoura em caldo de legumes caseiro.',
      'Adicione o arroz e cozinhe até ficar tudo bem macio.',
      'Amasse ou desfie os pedaços maiores antes de servir.',
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Sopa',
  },
  {
    id: '21',
    name: 'Creme de Abobrinha',
    description: 'Suave e de fácil digestão para a noite.',
    image: '21',
    ingredients: ['1 abobrinha pequena', '1/4 de cebola', '1 folha de manjericão'],
    instructions: [
      'Refogue a cebola no azeite, adicione a abobrinha em rodelas e cubra com água.',
      'Cozinhe até a abobrinha ficar macia e bata tudo no liquidificador com a folha de manjericão.',
      'Sirva morno.',
    ],
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Creme',
  },
  {
    id: '22',
    name: 'Polenta Mole com Carne Moída',
    description: 'Prato substancioso e cheio de sabor.',
    image: '22',
    ingredients: ['2 colheres de sopa de fubá', '30g de carne moída', 'Molho de tomate caseiro (sem sal)'],
    instructions: [
      'Prepare a polenta cozinhando o fubá em água ou caldo de legumes.',
      'Refogue a carne moída e adicione o molho de tomate.',
      'Sirva a polenta com a carne por cima.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Creme',
  },
  {
    id: '23',
    name: 'Omelete de Forno com Queijo',
    description: 'Prático e versátil para uma refeição rápida.',
    image: '23',
    ingredients: ['1 ovo', '1 colher de queijo cottage ou ricota', 'Salsinha picada'],
    instructions: [
      'Bata o ovo, misture o queijo e a salsinha.',
      'Despeje em forminhas de muffin untadas.',
      'Asse em forno pré-aquecido a 180°C por 15-20 minutos.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
  },
  {
    id: '24',
    name: 'Sopa de Abóbora com Gengibre',
    description: 'Adocicada com um toque especial.',
    image: '9',
    ingredients: ['1 xícara de abóbora em cubos', '1 rodela fina de gengibre', '1 fio de azeite'],
    instructions: [
      'Cozinhe a abóbora com o gengibre no vapor.',
      'Retire o gengibre e bata a abóbora no liquidificador com um pouco de água do cozimento.',
      'Sirva com um fio de azeite.',
    ],
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Sopa',
  },
  {
    id: '25',
    name: 'Rolinhos de Frango e Espinafre',
    description: 'Uma maneira criativa de apresentar a proteína.',
    image: '25',
    ingredients: ['1 filé de frango fino', 'Folhas de espinafre cozidas', 'Ricota amassada'],
    instructions: [
      'Recheie o filé de frango com espinafre e ricota.',
      'Enrole e prenda com um palito. Cozinhe no vapor ou asse.',
      'Fatie em rodelas antes de servir.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
  },
  {
    id: '26',
    name: 'Purê de Inhame com Couve',
    description: 'Nutrição e sabor em um prato simples.',
    image: '26',
    ingredients: ['1 inhame pequeno', '2 folhas de couve picadas finamente'],
    instructions: [
      'Cozinhe o inhame até ficar macio e amasse com um garfo.',
      'Refogue a couve rapidamente em um fio de azeite.',
      'Misture a couve ao purê e sirva.',
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
  },
  {
    id: '27',
    name: 'Quibebe de Abóbora',
    description: 'Um clássico brasileiro adaptado para bebês.',
    image: '27',
    ingredients: ['1 xícara de abóbora em cubos', '1/4 de cebola picada', 'Salsinha'],
    instructions: [
      'Refogue a cebola no azeite, junte a abóbora e um pouco de água.',
      'Cozinhe até a abóbora desmanchar, formando um creme.',
      'Finalize com salsinha picada.',
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Creme',
  },
  {
    id: '28',
    name: 'Bolinho de Arroz com Legumes',
    description: 'Ótima forma de reaproveitar o arroz do almoço.',
    image: '28',
    ingredients: ['1/2 xícara de arroz cozido', '1 ovo', 'Legumes cozidos e picados (cenoura, ervilha)'],
    instructions: [
      'Misture todos os ingredientes até formar uma massinha.',
      'Molde bolinhos e asse em forno pré-aquecido até dourar.',
      'Sirva morno.',
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
  },

  // Sobremesas
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
    mealType: 'Sobremesa',
    ageGroup: '6-8 meses',
    texture: 'Amassado',
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
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios',
  },
  {
    id: '29',
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
    mealType: 'Sobremesa',
    ageGroup: '6-8 meses',
    texture: 'Purê',
  },
  {
    id: '30',
    name: 'Banana Assada com Canela',
    description: 'Uma sobremesa quentinha e reconfortante.',
    image: '30',
    ingredients: ['1 banana prata', 'Canela em pó a gosto'],
    instructions: [
      'Coloque a banana com casca em um forno pré-aquecido.',
      'Asse até a casca ficar preta.',
      'Retire a polpa, amasse e polvilhe canela.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Amassado',
  },
  {
    id: '31',
    name: 'Picolé de Melancia',
    description: 'Refrescante e perfeito para dias quentes.',
    image: '31',
    ingredients: ['1 fatia de melancia sem sementes'],
    instructions: [
      'Bata a melancia no liquidificador.',
      'Coloque em forminhas de picolé e leve ao congelador.',
      'Ótimo para aliviar o desconforto dos dentinhos nascendo.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios',
  },
  {
    id: '32',
    name: 'Creme de Manga e Maracujá',
    description: 'Uma combinação tropical e azedinha.',
    image: '32',
    ingredients: ['1/2 manga', 'Polpa de 1/4 de maracujá (sem sementes)'],
    instructions: [
      'Bata a manga com a polpa de maracujá no liquidificador.',
      'Sirva geladinho.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '12+ meses',
    texture: 'Creme',
  },
  {
    id: '33',
    name: 'Maçã Cozida com Ameixa',
    description: 'Ajuda a regular o intestino do bebê.',
    image: '33',
    ingredients: ['1/2 maçã', '2 ameixas secas sem caroço'],
    instructions: [
      'Deixe a ameixa de molho em um pouco de água por 1 hora.',
      'Cozinhe a maçã picada com a ameixa e a água até amolecer.',
      'Amasse tudo com um garfo.',
    ],
    mealType: 'Sobremesa',
    ageGroup: '6-8 meses',
    texture: 'Amassado',
  },
  {
    id: '34',
    name: 'Biscoito de Polvilho Caseiro',
    description: 'Um snack crocante e seguro.',
    image: '34',
    ingredients: ['1 xícara de polvilho doce', '1/4 xícara de azeite', '1/4 xícara de água morna'],
    instructions: [
        'Misture todos os ingredientes até formar uma massa homogênea.',
        'Faça pequenos palitos ou argolas.',
        'Asse em forno baixo (160°C) por cerca de 20 minutos, ou até ficarem secos e crocantes.'
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios'
  },
  {
      id: '35',
      name: 'Salada de Frutas para Bebês',
      description: 'Cores e sabores para explorar.',
      image: '35',
      ingredients: ['Pedaços de manga', 'Uvas cortadas em 4 (sem sementes)', 'Pedaços de kiwi'],
      instructions: [
          'Pique as frutas em pedaços bem pequenos e seguros.',
          'Misture tudo em uma tigela.',
          'Sirva para o bebê comer com as mãos ou com um garfinho.'
      ],
      mealType: 'Sobremesa',
      ageGroup: '12+ meses',
      texture: 'Pedaços macios'
  },
  {
      id: '36',
      name: 'Mousse de Abacate com Cacau',
      description: 'Uma sobremesa saudável que parece de chocolate.',
      image: '36',
      ingredients: ['1/2 abacate maduro', '1 colher de chá de cacau em pó 100%', '1 tâmara sem caroço (opcional, para adoçar)'],
      instructions: [
          'Deixe a tâmara de molho em água quente por 10 minutos para amolecer.',
          'Bata todos os ingredientes no processador até obter um creme liso.',
          'Sirva gelado.'
      ],
      mealType: 'Sobremesa',
      ageGroup: '12+ meses',
      texture: 'Creme'
  },
  {
    id: '37',
    name: 'Purê de Ervilha com Hortelã',
    description: 'Refrescante e nutritivo.',
    image: '37',
    ingredients: ['1/2 xícara de ervilhas congeladas', '2 folhas de hortelã'],
    instructions: [
      'Cozinhe as ervilhas no vapor até ficarem macias.',
      'Amasse com um garfo ou bata no liquidificador com as folhas de hortelã.',
      'Sirva morno.'
    ],
    mealType: 'Almoço',
    ageGroup: '6-8 meses',
    texture: 'Purê'
  },
  {
    id: '38',
    name: 'Tomate e Pepino em Tiras',
    description: 'Snack fresco para o bebê explorar.',
    image: '38',
    ingredients: ['1/4 de tomate sem sementes', 'Tiras de pepino sem casca'],
    instructions: [
      'Corte o tomate e o pepino em tiras finas e longas.',
      'Ofereça ao bebê para ele segurar e mordiscar.',
      'Ideal para o método BLW.'
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios'
  },
  {
    id: '39',
    name: 'Mini Pizza de Abobrinha',
    description: 'Uma versão saudável da pizza.',
    image: '39',
    ingredients: ['Rodelas de abobrinha', 'Molho de tomate caseiro', 'Queijo ralado (opcional)'],
    instructions: [
      'Grelhe as rodelas de abobrinha.',
      'Cubra com molho de tomate e queijo.',
      'Leve ao forno para gratinar.'
    ],
    mealType: 'Jantar',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios'
  },
  {
    id: '40',
    name: 'Sorbet de Morango',
    description: 'Sobremesa gelada e sem açúcar.',
    image: '40',
    ingredients: ['1 xícara de morangos congelados', '1/2 banana congelada'],
    instructions: [
      'Bata as frutas congeladas no processador até virar um creme.',
      'Sirva imediatamente como um sorvete.',
      'Pode ser feito com outras frutas vermelhas.'
    ],
    mealType: 'Sobremesa',
    ageGroup: '12+ meses',
    texture: 'Creme'
  },
  {
    id: '41',
    name: 'Mingau de Milho (Cremoso)',
    description: 'Um clássico brasileiro em versão para bebês.',
    image: '41',
    ingredients: ['2 colheres de sopa de farinha de milho', '1 xícara de água ou leite'],
    instructions: [
      'Dissolva a farinha de milho na água/leite.',
      'Leve ao fogo baixo, mexendo sempre, até engrossar.',
      'Sirva morno.'
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Creme'
  },
  {
    id: '42',
    name: 'Sopa de Beterraba',
    description: 'Cor vibrante e muitos nutrientes.',
    image: '42',
    ingredients: ['1 beterraba pequena cozida', '1/2 batata cozida'],
    instructions: [
      'Bata a beterraba e a batata no liquidificador com um pouco de água do cozimento.',
      'Aqueça levemente antes de servir.',
      'Cuidado, mancha a roupa!'
    ],
    mealType: 'Jantar',
    ageGroup: '6-8 meses',
    texture: 'Sopa'
  },
  {
    id: '43',
    name: 'Tirinhas de Frango Grelhado',
    description: 'Proteína em um formato fácil de pegar.',
    image: '43',
    ingredients: ['50g de filé de frango', 'Gotas de limão', 'Ervas finas (orégano, tomilho)'],
    instructions: [
      'Tempere o frango com limão e ervas.',
      'Grelhe em uma frigideira antiaderente até dourar.',
      'Corte em tiras e sirva.'
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Pedaços macios'
  },
  {
    id: '44',
    name: 'Iogurte Natural com Frutas',
    description: 'Simples, rápido e saudável.',
    image: '44',
    ingredients: ['1/2 pote de iogurte natural sem açúcar', 'Frutas picadas (morango, mirtilo)'],
    instructions: [
      'Misture as frutas picadas ao iogurte.',
      'Sirva frio.',
      'Introduza laticínios conforme orientação pediátrica.'
    ],
    mealType: 'Café da Manhã',
    ageGroup: '9-11 meses',
    texture: 'Creme'
  },
  {
    id: '45',
    name: 'Purê de Abóbora com Carne Seca',
    description: 'Sabor nordestino para os pequenos.',
    image: '45',
    ingredients: ['1 xícara de abóbora cozida e amassada', '2 colheres de sopa de carne seca dessalgada e desfiada'],
    instructions: [
      'Refogue a carne seca desfiada em um fio de azeite.',
      'Misture com o purê de abóbora.',
      'Sirva morno.'
    ],
    mealType: 'Almoço',
    ageGroup: '12+ meses',
    texture: 'Amassado'
  },
  {
    id: '46',
    name: 'Creme de Milho Verde',
    description: 'Doçura natural do milho em um creme aveludado.',
    image: '46',
    ingredients: ['1 espiga de milho verde', '1/2 xícara de leite'],
    instructions: [
      'Debulhe a espiga de milho.',
      'Bata os grãos no liquidificador com o leite e passe na peneira.',
      'Leve o creme ao fogo baixo, mexendo até engrossar.'
    ],
    mealType: 'Jantar',
    ageGroup: '9-11 meses',
    texture: 'Creme'
  },
  {
    id: '47',
    name: 'Palitos de Cenoura Assada',
    description: 'Um "snack" saudável e adocicado.',
    image: '47',
    ingredients: ['1 cenoura', 'Azeite e alecrim a gosto'],
    instructions: [
      'Corte a cenoura em palitos.',
      'Tempere com azeite e alecrim.',
      'Asse em forno médio até ficarem macios.'
    ],
    mealType: 'Almoço',
    ageGroup: '9-11 meses',
    texture: 'Pedaços macios'
  },
  {
    id: '48',
    name: 'Geleia de Morango Caseira (Sem Açúcar)',
    description: 'Um toque doce e natural para frutas e pães.',
    image: '48',
    ingredients: ['1 xícara de morangos picados', '1 colher de sopa de sementes de chia'],
    instructions: [
      'Cozinhe os morangos em fogo baixo até desmancharem.',
      'Adicione a chia e mexa bem. Ela ajudará a engrossar.',
      'Deixe esfriar e sirva com frutas ou torradas.'
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Creme'
  },
  {
    id: '49',
    name: 'Cuscuz com Ovo',
    description: 'Um café da manhã ou jantar típico e nutritivo.',
    image: '49',
    ingredients: ['2 colheres de sopa de flocão de milho', '1 ovo cozido e amassado'],
    instructions: [
      'Hidrate o flocão com um pouco de água e cozinhe no vapor (cuscuzeira).',
      'Misture o cuscuz cozido com o ovo amassado.',
      'Sirva morno.'
    ],
    mealType: 'Café da Manhã',
    ageGroup: '12+ meses',
    texture: 'Amassado'
  },
  {
    id: '50',
    name: 'Compota de Pêssego',
    description: 'Uma sobremesa delicada e saborosa.',
    image: '50',
    ingredients: ['1 pêssego maduro', 'Um pouco de água'],
    instructions: [
      'Descasque e pique o pêssego.',
      'Cozinhe em fogo baixo com um pouco de água até amolecer.',
      'Amasse com um garfo e sirva frio.'
    ],
    mealType: 'Sobremesa',
    ageGroup: '9-11 meses',
    texture: 'Amassado'
  }
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
    title: 'Dicas de líquidos para a introdução',
    content: 'Até os 6 meses, o leite materno ou a fórmula são suficientes. Após o início da introdução alimentar, ofereça água filtrada e fervida (depois resfriada) nos intervalos das refeições. Use um copinho de treinamento. Sucos não são recomendados antes de 1 ano.',
  },
  {
    id: '4',
    title: 'Engasgo vs. Reflexo de GAG',
    content: 'O reflexo de GAG é um movimento natural que o bebê faz para evitar o engasgo, empurrando a comida para fora com a língua. Parece que ele está tossindo, mas não há obstrução. Já o engasgo real é silencioso, o bebê não consegue respirar e a pele pode mudar de cor. Mantenha a calma, aprenda manobras de desengasgo e nunca deixe o bebê sozinho enquanto come.',
  },
  {
    id: '5',
    title: 'Cuidados Básicos',
    content: 'Ofereça um alimento novo de cada vez e espere 2-3 dias para observar possíveis reações. Nunca adicione sal, açúcar ou mel. Esteja sempre presente e supervisionando a alimentação para evitar engasgos.',
  },
];
