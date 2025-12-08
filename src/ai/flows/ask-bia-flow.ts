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

const searchRecipes = ai.defineTool(
  {
    name: 'searchRecipes',
    description:
      'Pesquisa por receitas quando o usuário perguntar sobre uma receita específica.',
    inputSchema: z.object({ query: z.string() }),
    outputSchema: z.array(z.custom<Recipe>()),
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
      model: 'googleai/gemini-1.5-flash-latest',
      tools: [searchRecipes],
      prompt: `Você é a "Bia", uma especialista em introdução alimentar para bebês, amigável e experiente.
               Seu objetivo é ajudar mães e pais com dúvidas sobre as receitas e o preparo dos alimentos.
               Responda de forma clara, direta, segura e em um tom acolhedor.

               **Instruções de como responder:**
               1. Se a pergunta do usuário parecer ser sobre uma receita específica (ex: "como fazer o purê de abóbora?"), **obrigatoriamente** use a ferramenta 'searchRecipes' para encontrar os detalhes e baseie sua resposta neles.
               2. Se a pergunta for mais genérica e prática sobre culinária (ex: "qual panela usar?", "fogo alto ou baixo?", "quanto tempo leva para cozinhar?"), use seu conhecimento geral sobre culinária para responder.
               3. Se a pergunta for muito fora do seu escopo (ex: "qual o melhor carro?"), diga que você é uma especialista em culinária para bebês e não pode ajudar com isso.
               4. Se não tiver certeza sobre uma questão de saúde ou segurança alimentar, recomende sempre consultar um pediatra.

               Pergunta do usuário: "${question}"
              `,
    });

    return llmResponse.text;
  }
);
