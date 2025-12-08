'use server';
/**
 * @fileOverview O fluxo de IA para a assistente "Bia".
 *
 * - askBia - A função que o frontend chama.
 * - AskBiaInput - O tipo de entrada para a função `askBia`.
 * - AskBiaOutput - O tipo de retorno para a função `askBia`.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { recipes } from '@/lib/data';
import type { Recipe } from '@/lib/types';

// Esquema de entrada
const AskBiaInputSchema = z.object({
  question: z.string().describe('A pergunta do usuário para a Bia'),
});
export type AskBiaInput = z.infer<typeof AskBiaInputSchema>;

// Esquema de saída
const AskBiaOutputSchema = z.string().describe('A resposta da Bia para o usuário');
export type AskBiaOutput = z.infer<typeof AskBiaOutputSchema>;

// Função de fachada que o frontend chamará
export async function askBia(input: AskBiaInput): Promise<AskBiaOutput> {
  return askBiaFlow(input);
}

const RecipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  mealType: z.string(),
  ageGroup: z.string(),
  texture: z.string(),
});

// Ferramenta para buscar receitas
const searchRecipes = ai.defineTool(
  {
    name: 'searchRecipes',
    description: 'Busca por receitas no aplicativo com base em uma consulta de texto.',
    inputSchema: z.object({ query: z.string() }),
    outputSchema: z.array(RecipeSchema),
  },
  async ({ query }) => {
    console.log(`Buscando receitas com a query: ${query}`);
    const lowerCaseQuery = query.toLowerCase();
    const results = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(lowerCaseQuery) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerCaseQuery))
    );
    console.log(`Receitas encontradas: ${results.length}`);
    return results;
  }
);


// O fluxo principal da Genkit
const askBiaFlow = ai.defineFlow(
  {
    name: 'askBiaFlow',
    inputSchema: AskBiaInputSchema,
    outputSchema: AskBiaOutputSchema,
  },
  async ({ question }) => {
    const llmResponse = await ai.generate({
      model: 'googleai/gemini-1.5-flash-latest',
      tools: [searchRecipes],
      prompt: `Você é Bia, uma assistente que ajuda mães na introdução alimentar.
Responda dúvidas simples sobre preparo de receitas, tempo de cozimento,
textura ideal, substituições básicas e uso de forno/fogo.
Responda sempre de forma curta, clara e prática.
Não dê conselhos médicos e não diagnostique alergias.
Se houver risco, diga: “O ideal é consultar um profissional.”

Use a ferramenta 'searchRecipes' para encontrar informações sobre receitas quando a pergunta parecer ser sobre uma receita específica (ex: "como fazer...", "quais ingredientes..."). Baseie sua resposta nos resultados da ferramenta.

Pergunta do usuário:
${question}`,
    });

    return llmResponse.text;
  }
);
