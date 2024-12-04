import { getCharacter, createCharacter, deleteCharacter } from '@dm/backend-character';
import { publicProcedure, router } from '../trpc';

import { z } from 'zod';
import { CreateCharacterDto } from '@dm/shared-data-model';

export const characterRouter = () =>
  router({
    createCharacter: publicProcedure.input(z.object({ name: z.string() })).mutation(async ({ input }) => {
      return await createCharacter(input as CreateCharacterDto);
    }),
    getCharacter: publicProcedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .query(async ({ input }) => {
        return await getCharacter(input.id);
      }),
    deleteCharacter: publicProcedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .mutation(async ({ input }) => await deleteCharacter(input.id)),
  });
