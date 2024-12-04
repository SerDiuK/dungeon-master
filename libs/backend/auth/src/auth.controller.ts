import { auth } from './lib/auth';

export const authController = (app) => {
  const BASE_URL = '/api/auth';

  app.get(`${BASE_URL}`, (req, res) => {
    res.send({ message: auth() });
  });
};
