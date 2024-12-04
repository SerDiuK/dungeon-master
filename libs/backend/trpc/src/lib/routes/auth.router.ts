import { auth } from '@dm/backend-auth';
import { publicProcedure, router } from '../trpc';

import { z } from 'zod';

export const authRouter = () =>
  router({
    login: publicProcedure
      .input(
        z.object({
          email: z.string(),
          password: z.string(),
        }),
      )
      .query(({ input }) => {
        // Handle the query parameter
        console.log('LOGIN', input);

        return;
      }),
    register: publicProcedure
      .input(z.object({ name: z.string(), email: z.string(), password: z.string() }))
      .mutation(({ input }) => {
        console.log('REGISTERING', input);
        return;
      }),
  });
