import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import OpenAI from "openai";

admin.initializeApp();

// Set up OpenAI API client
// For local development, it will use process.env.OPENAI_API_KEY.
// For production, set the secret in Google Cloud Secret Manager:
// firebase functions:secrets:set OPENAI_API_KEY
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || functions.config().openai.key,
});

export const chatBia = functions.https.onCall(async (data, context) => {
    const message = data.message;

    if (!message || typeof message !== "string") {
        throw new functions.https.HttpsError(
            "invalid-argument",
            "The function must be called with one argument 'message' that is a string."
        );
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `Você é Bia, uma assistente para mães que usam o app de introdução alimentar.
Responda dúvidas simples sobre preparo de receitas, textura ideal,
tempo de cozimento, fogo alto/baixo, forno alto/baixo, substituições básicas
e dicas práticas para o dia a dia.
Sempre responda de forma curta, clara e sem termos técnicos.
Não dê conselhos médicos.
Quando a dúvida envolver alergia, diga para consultar um profissional.`,
                },
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        const response = completion.choices[0].message.content;
        return response;

    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        throw new functions.https.HttpsError(
            "internal",
            "Failed to communicate with the AI assistant."
        );
    }
});
