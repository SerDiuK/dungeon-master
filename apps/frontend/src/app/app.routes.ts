import { Route } from '@angular/router';
import { adventureRoutes } from '@dm/frontend-adventure';
import { authGuard, authRoutes } from '@dm/frontend-auth';
import { characterRoutes } from '@dm/frontend-character';
import { scenarioRoutes } from '@dm/frontend-scenario';
import { UserComponent } from '@dm/frontend-user';

export const appRoutes: Route[] = [
  { path: 'user', component: UserComponent, canActivate: [authGuard] },
  scenarioRoutes,
  authRoutes,
  adventureRoutes,
  characterRoutes,
  { path: '', redirectTo: 'scenarios', pathMatch: 'full' },
  { path: '**', redirectTo: 'scenarios', pathMatch: 'full' },
];
