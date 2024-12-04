import { Route } from '@angular/router';
import { AdventuresComponent } from './components/adventures/adventures.component';
import { AdventureComponent } from './components/adventure/adventure.component';
import { authGuard } from '@dm/frontend-auth';

export const adventureRoutes: Route = {
  path: 'adventures',
  children: [
    { path: ':id', component: AdventureComponent },
    { path: '', component: AdventuresComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
  ],
  canActivate: [authGuard],
};
