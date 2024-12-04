import { userRouter } from './routes/user.router';
import { adventureRouter } from './routes/adventure.router';
import { authRouter } from './routes/auth.router';
import { router } from './trpc';
import { characterRouter } from './routes/character.router';
import { scenarioRouter } from './routes/scenario.router';

export const setupRouter = () => {
  console.log('setup router');
  return router({
    adventure: adventureRouter(),
    auth: authRouter(),
    user: userRouter(),
    character: characterRouter(),
    scenario: scenarioRouter(),
  });
};
