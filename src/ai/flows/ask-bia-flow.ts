'use server';

import { recipes } from '@/lib/data';
import type { Recipe } from '@/lib/types';
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AskBiaInputSchema = z.object({
  question: z.string().describe('A pergunta do usuário para a Bia.'),
});

const AskBiaOutputSchema = z.object({
  answer: z
    .string()
    .describe('A resposta da Bia para a pergunta do usuário.'),
});

export type AskBiaInput = z.infer<typeof AskBiaInputSchema>;
export type AskBiaOutput = z.infer<typeof AskBiaOutputSchema>;

export async function askBia(input: AskBiaInput): Promise<AskBiaOutput> {
  return askBiaFlow(input);
}

const searchRecipes = ai.defineTool(
    {
      name: 'searchRecipes',
      description: 'Busca por receitas no aplicativo com base no nome ou ingredientes.',
      inputSchema: z.object({
        query: z.string().describe('O nome ou parte do nome da receita a ser buscada.'),
      }),
      outputSchema: z.array(
        z.object({
          name: z.string(),
          ingredients: z.array(z.string()),
          instructions: z.array(z.string()),
          mealType: z.string(),
          ageGroup: z.string(),
          texture: z.string(),
        })
      ),
    },
    async ({ query }) => {
        const lowerCaseQuery = query.toLowerCase();
        return recipes
            .filter(recipe => recipe.name.toLowerCase().includes(lowerCaseQuery))
            .map(({ id, description, image, ...rest }) => rest);
    }
  );

const prompt = ai.definePrompt({
  name: 'askBiaPrompt',
  input: { schema: AskBiaInputSchema },
  output: { schema: AskBiaOutputSchema },
  prompt: `Você é Bia, uma assistente que ajuda mães na introdução alimentar.
Responda dúvidas simples sobre preparo de receitas, tempo de cozimento, textura ideal, substituições básicas e uso de forno/fogo.
Responda sempre de forma curta, clara e prática.
Não dê conselhos médicos e não diagnostique alergias.
Se houver risco, diga: "O ideal é consultar um profissional."

Sua fonte de conhecimento principal deve ser a ferramenta 'searchRecipes'. Use-a para responder sobre receitas específicas.

Pergunta do usuário: {{{question}}}
`,
});

const askBiaFlow = ai.defineFlow(
  {
    name: 'askBiaFlow',
    inputSchema: AskBiaInputSchema,
    outputSchema: AskBiaOutputSchema,
  },
  async (input) => {
    const llmResponse = await ai.generate({
      model: 'googleai/gemini-1.5-flash-latest',
      tools: [searchRecipes],
      prompt: `Você é Bia, uma assistente que ajuda mães na introdução alimentar.
Responda dúvidas simples sobre preparo de receitas, tempo de cozimento, textura ideal, substituições básicas e uso de forno/fogo.
Responda sempre de forma curta, clara e prática.
Não dê conselhos médicos e não diagnostique alergias.
Se houver risco, diga: "O ideal é consultar um profissional."

Sua fonte de conhecimento principal deve ser a ferramenta 'searchRecipes'. Use-a para responder sobre receitas específicas.

Pergunta do usuário: ${input.question}
`,
      config: {
        maxOutputTokens: 200
      }
    });

    const toolCalls = llmResponse.toolCalls();

    if (toolCalls.length > 0) {
      const toolResponse = await Promise.all(
        toolCalls.map((call) => ai.runTool(call))
      );

      const finalResponse = await ai.generate({
        model: 'googleai/gemini-1.5-flash-latest',
        prompt: `Com base nos resultados da busca, responda a pergunta original do usuário de forma amigável e direta.
        
        Pergunta original: ${input.question}
        Resultados da busca: ${JSON.stringify(toolResponse)}
        `,
        config: {
            maxOutputTokens: 200
        }
      });
      return { answer: finalResponse.text };
    }

    if (llmResponse.text) {
        return { answer: llmResponse.text };
    }

    return { answer: "Desculpe, não consegui entender sua pergunta. Poderia reformular?" };
  }
);
