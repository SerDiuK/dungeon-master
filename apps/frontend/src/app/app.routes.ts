import { Route } from '@angular/router';
import { adventureRoutes } from '@dm/frontend-adventure';
import { authGuard, authRoutes } from '@dm/frontend-auth';
import { scenarioRoutes } from '@dm/frontend-scenario';
import { UserComponent } from '@dm/frontend-user';

export const appRoutes: Route[] = [
  { path: 'user', component: UserComponent, canActivate: [authGuard] },
  scenarioRoutes,
  authRoutes,
  adventureRoutes,
  { path: '', redirectTo: 'adventure', pathMatch: 'full' },
  { path: '**', redirectTo: 'adventure', pathMatch: 'full' },
];
