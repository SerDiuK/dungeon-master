import { createUser, getUsers, getUser } from '@dm/backend-user';
import { publicProcedure, router } from '../trpc';

import { z } from 'zod';
import { CreateUserDto } from '@dm/shared-data-model';

export const userRouter = () =>
  router({
    getUsers: publicProcedure.query(async () => {
      return await getUsers();
    }),
    getUser: publicProcedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .query(async ({ input }) => {
        // Handle the query parameter
        return await getUser(input.id);
      }),
    createUser: publicProcedure
      .input(z.object({ name: z.string(), email: z.string(), password: z.string() }))
      .mutation(async ({ input }) => {
        return await createUser(input as CreateUserDto);
      }),
  });
