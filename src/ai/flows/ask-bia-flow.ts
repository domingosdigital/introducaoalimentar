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
import { z } from 'zod';

const AskBiaInputSchema = z.object({
  question: z.string().describe('A pergunta do usuário sobre introdução alimentar.'),
});
export type AskBiaInput = z.infer<typeof AskBiaInputSchema>;

export type AskBiaOutput = string;

export async function askBia(input: AskBiaInput): Promise<AskBiaOutput> {
  const result = await askBiaFlow(input);
  return result;
}

const allRecipes = JSON.stringify(recipes, null, 2);

const askBiaFlow = ai.defineFlow(
  {
    name: 'askBiaFlow',
    inputSchema: AskBiaInputSchema,
    outputSchema: z.string(),
  },
  async ({ question }) => {
    const llmResponse = await ai.generate({
      prompt: `Você é a "Bia", uma especialista em introdução alimentar para bebês, amigável e experiente.
               Seu objetivo é ajudar mães e pais com dúvidas sobre as receitas e o preparo dos alimentos.
               Responda de forma clara, direta, segura e em um tom acolhedor.
               
               Você tem acesso à lista de receitas abaixo para usar como contexto.
               Use seu conhecimento geral sobre culinária para responder a perguntas práticas que podem não estar nos detalhes da receita, como "qual panela usar?", "fogo alto ou baixo?", "quanto tempo leva para cozinhar?".
               
               Se a pergunta for muito fora do seu escopo (ex: "qual o melhor carro?"), diga que você é uma especialista em culinária para bebês e não pode ajudar com isso.
               Se não tiver certeza sobre uma questão de saúde ou segurança alimentar, recomende consultar um pediatra.

               === RECEITAS DISPONÍVEIS ===
               ${allRecipes}
               ============================

               Pergunta do usuário: "${question}"
              `,
    });

    return llmResponse.text;
  }
);
