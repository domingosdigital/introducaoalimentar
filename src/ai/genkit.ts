/**
 * @fileoverview This file initializes the Genkit AI and configures its plugins.
 */
import {genkit, type GenkitErrorCode} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {next} from '@genkit-ai/next';
import {FirebaseError} from 'firebase/app';

export const ai = genkit({
  plugins: [
    googleAI(),
    next({
      // These are example options. You can customize them to your needs.
      //
      // develop: {
      //   force: true,
      // },
      //
      // Here is an example of how you can map errors to Genkit error codes.
      //
      // errorMapping: (err: Error) => {
      //   if (err instanceof FirebaseError) {
      //     return {
      //       code: err.code as GenkitErrorCode,
      //       message: err.message,
      //     };
      //   }
      // },
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
