'use server';
/**
 * @fileOverview Um fluxo Genkit para a assistente de IA "Bia".
 *
 * - askBia - A função que interage com o modelo de IA.
 * - AskBiaInput - O tipo de entrada para a função askBia.
 * - AskBiaOutput - O tipo de retorno para a função askBia.
 */
import { ai } from '@/ai/genkit';
import { recipes } from '@/lib/data';
import { Recipe } from '@/lib/types';
import { z } from 'zod';

const AskBiaInputSchema = z.object({
  question: z
    .string()
    .describe('A pergunta do usuário sobre introdução alimentar.'),
});
export type AskBiaInput = z.infer<typeof AskBiaInputSchema>;

export type AskBiaOutput = string;

export async function askBia(input: AskBiaInput): Promise<AskBiaOutput> {
  const result = await askBiaFlow(input);
  return result;
}

const RecipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  image: z.string(),
  mealType: z.string(),
  ageGroup: z.string(),
  texture: z.string(),
});

const searchRecipes = ai.defineTool(
  {
    name: 'searchRecipes',
    description:
      'Pesquisa por receitas quando o usuário perguntar sobre uma receita específica, ingredientes ou modo de preparo.',
    inputSchema: z.object({ query: z.string() }),
    outputSchema: z.array(RecipeSchema),
  },
  async ({ query }) => {
    console.log(`Searching for recipe with query: ${query}`);
    const lowerCaseQuery = query.toLowerCase();
    const results = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(lowerCaseQuery) ||
        recipe.ingredients.some((ing) =>
          ing.toLowerCase().includes(lowerCaseQuery)
        ) ||
        recipe.description.toLowerCase().includes(lowerCaseQuery)
    );
    console.log(`Found ${results.length} recipes.`);
    return results;
  }
);

const askBiaFlow = ai.defineFlow(
  {
    name: 'askBiaFlow',
    inputSchema: AskBiaInputSchema,
    outputSchema: z.string(),
  },
  async ({ question }) => {
    const llmResponse = await ai.generate({
      model: 'googleai/gemini-1.0-pro',
      tools: [searchRecipes],
      prompt: `Você é a "Bia", a assistente de IA do aplicativo "Primeiras Mordidas".
               Sua única função é responder a perguntas sobre as receitas e funcionalidades que existem DENTRO do aplicativo.

               **Instruções de como responder:**
               1.  Para qualquer pergunta sobre receitas, ingredientes ou modo de preparo, **obrigatoriamente** use a ferramenta 'searchRecipes' para encontrar a receita exata no aplicativo e baseie sua resposta **exclusivamente** nela.
               2.  Se a pergunta for sobre uma funcionalidade do app (como "Sugestão do Dia", "Histórico" ou "Guia Rápido"), explique brevemente para que ela serve.
               3.  Se a ferramenta 'searchRecipes' não encontrar nenhuma receita correspondente, informe que você não encontrou a receita no aplicativo.
               4.  Se a pergunta não for sobre as receitas ou funcionalidades do aplicativo, recuse educadamente a resposta, dizendo: "Desculpe, só posso responder a perguntas sobre as receitas e funcionalidades do aplicativo Primeiras Mordidas."
               5.  Responda sempre em um tom amigável, direto e acolhedor.

               Pergunta do usuário: "${question}"
              `,
    });

    return llmResponse.text;
  }
);
