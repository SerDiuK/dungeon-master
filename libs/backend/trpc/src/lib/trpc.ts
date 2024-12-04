import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import type { Application } from 'express';
import { setupRouter } from './app.router';
import { renderTrpcPanel } from 'trpc-panel';

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({ req, res });
export type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;

const appRouter = setupRouter();

export const trpc = (app: Application) => {
  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );

  app.use('/panel', (_, res): any => {
    return res.send(renderTrpcPanel(appRouter, { url: 'http://localhost:3333/trpc' }));
  });
};

export type AppRouter = typeof appRouter;
