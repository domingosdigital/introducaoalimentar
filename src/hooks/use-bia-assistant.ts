'use client';
import { useState } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '@/firebase/client';

type BiaRequest = {
  message: string;
};

type BiaResponse = string;

export function useBiaAssistant() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendMessage = async (data: BiaRequest): Promise<BiaResponse> => {
    setIsLoading(true);
    setError(null);
    try {
      // Especificar a região é crucial para a conexão funcionar corretamente.
      const functions = getFunctions(app, 'us-central1');
      const chatBia = httpsCallable<BiaRequest, BiaResponse>(functions, 'chatBia');
      const result = await chatBia(data);
      return result.data;
    } catch (err: any) {
      console.error("Erro detalhado ao chamar a função 'chatBia':", err);
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading, error };
}
