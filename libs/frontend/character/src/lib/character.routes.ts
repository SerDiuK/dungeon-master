import { Route } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { authGuard } from '@dm/frontend-auth';
import { CharacterComponent } from './character/character.component';

export const characterRoutes: Route[] = [
  {
    path: 'scenarios',
    children: [
      { path: ':id', component: CharacterComponent },
      { path: '', component: CharactersComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
    canActivate: [authGuard],
  },
];
