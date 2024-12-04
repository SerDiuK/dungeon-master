import { Route } from '@angular/router';
import { ScenariosComponent } from './components/scenarios/scenarios.component';
import { ScenarioComponent } from './components/scenario/scenario.component';
import { authGuard } from '@dm/frontend-auth';

export const scenarioRoutes: Route = {
  path: 'scenarios',
  children: [
    { path: ':id', component: ScenarioComponent },
    { path: '', component: ScenariosComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
  ],
  canActivate: [authGuard],
};
