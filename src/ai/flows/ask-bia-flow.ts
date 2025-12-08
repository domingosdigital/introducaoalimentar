'use server';
/**
 * @fileOverview Um fluxo Genkit para a assistente de IA "Bia".
 *
 * - askBia - A função que interage com o modelo de IA.
 * - AskBiaInput - O tipo de entrada para a função askBia.
 * - AskBiaOutput - O tipo de retorno para a função askBia.
 */
import { ai } from '@/ai/genkit';
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
               Mantenha as respostas curtas e focadas na pergunta do usuário.
               Não invente informações. Se não souber a resposta, diga que não tem certeza e sugira consultar um pediatra.

               Pergunta do usuário: "${question}"
              `,
    });

    return llmResponse.text;
  }
);
