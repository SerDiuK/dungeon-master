import { getScenario, createScenario, getScenarios, addChapter } from '@dm/backend-scenario';
import { publicProcedure, router } from '../trpc';

import { z } from 'zod';
import { AddChapterDto, CreateScenarioDto } from '@dm/shared-data-model';

export const scenarioRouter = () =>
  router({
    createScenario: publicProcedure
      .input(z.object({ name: z.string(), description: z.string() }))
      .mutation(async ({ input }) => {
        return await createScenario(input as CreateScenarioDto);
      }),
    getScenario: publicProcedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .query(async ({ input }) => {
        return await getScenario(input.id);
      }),
    getScenarios: publicProcedure.query(async () => {
      return await getScenarios();
    }),
    addChapter: publicProcedure
      .input(
        z.object({
          name: z.string(),
          description: z.string(),
          scenarioId: z.string(),
        }),
      )
      .mutation(async ({ input }) => {
        return await addChapter(input as AddChapterDto);
      }),
  });
