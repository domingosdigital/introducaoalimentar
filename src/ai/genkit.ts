'use server';

import { genkit, type GenkitErrorCode } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { firebase } from '@genkit-ai/firebase';
import { next } from '@genkit-ai/next';
import { FirebaseError } from 'firebase-admin';

export const ai = genkit({
  plugins: [
    firebase(),
    next({
      // The Next.js plugin is not used for this assistant
    }),
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
  // This is a workaround for a bug in Genkit that causes it to
  // incorrectly handle Firebase errors.
  customError(e: unknown): { code: GenkitErrorCode; cause?: unknown } | undefined {
    if (e instanceof FirebaseError) {
      return {
        code: 'unavailable',
        cause: e,
      };
    }
  },
});
