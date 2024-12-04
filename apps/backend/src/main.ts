import express from 'express';
import * as path from 'path';
import initMongodb from './db';

const app = express();

require('dotenv').config();
import { trpc as initTRPC } from '@dm/backend-trpc';

initMongodb();
initTRPC(app);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/trcp`);
});
server.on('error', console.error);
