'use client';
import { useState } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '@/firebase/client'; // Assumes you have a firebase client setup

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
      const functions = getFunctions(app, 'us-central1'); // Specify the region if not default
      const biaAssistant = httpsCallable<BiaRequest, BiaResponse>(functions, 'biaAssistant');
      const result = await biaAssistant(data);
      return result.data;
    } catch (err: any) {
      console.error("Error calling 'biaAssistant' function:", err);
      setError(err);
      throw err; // Re-throw so the component can also handle it
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading, error };
}
