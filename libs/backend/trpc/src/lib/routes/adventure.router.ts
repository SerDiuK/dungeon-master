import { getAdventure, getAdventures, createAdventure, nextChapter, narrateChapter } from '@dm/backend-adventure';
import { publicProcedure, router } from '../trpc';

import { z } from 'zod';
import { CreateAdventureDto } from '@dm/shared-data-model';

export const adventureRouter = () =>
  router({
    createAdventure: publicProcedure
      .input(z.object({ name: z.string(), scenarioId: z.string() }))
      .mutation(async ({ input }) => {
        return await createAdventure(input as CreateAdventureDto);
      }),
    getAdventure: publicProcedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .query(async ({ input }) => {
        return await getAdventure(input.id);
      }),
    getAdventures: publicProcedure.query(async () => {
      return await getAdventures();
    }),
    narateChapter: publicProcedure
      .input(z.object({ chapterId: z.string() }))
      .query(({ input }) => narrateChapter(input.chapterId)),
    nextChapter: publicProcedure
      .input(
        z.object({
          adventureId: z.string(),
        }),
      )
      .mutation(async ({ input }) => await nextChapter(input.adventureId)),
  });
