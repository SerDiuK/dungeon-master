import express from 'express';
import * as path from 'path';
import initMongodb from './db';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import type { LogtoExpressConfig } from '@logto/express';
import { handleAuthRoutes } from '@logto/express';

const app = express();

import { trpc as initTRPC } from '@dm/backend-trpc';

dotenv.config();

initMongodb();
initTRPC(app);

const logToConfig: LogtoExpressConfig = {
  endpoint: process.env.LOGTO_ENDPOINT,
  appId: process.env.LOGTO_APP_ID,
  appSecret: process.env.LOGTO_APP_SECRET,
  baseUrl: process.env.LOGTO_BASE_URL, // Change to your own base URL
};

// app.use(cookieParser());
// app.use(session({ secret: process.env.LOGTO_SESSION_SECRET, cookie: { maxAge: 14 * 24 * 60 * 60 } }));
// app.use(handleAuthRoutes(logToConfig));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/trcp`);
});
server.on('error', console.error);
