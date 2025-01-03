import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { TrpcService } from '@dm/frontend-shared';
import type { CreateScenarioDto, Scenario } from '@dm/shared-data-model';

export const ScenariosStore = signalStore(
  { providedIn: 'root' },
  withState<{ scenarios: Scenario[]; loading: boolean }>({ scenarios: [], loading: false }),
  withMethods((store) => {
    const trpcClient = inject(TrpcService).getClient();

    patchState(store, () => ({
      loading: true,
    }));

    return {
      async createScenario(newScenario: CreateScenarioDto) {
        const createdScenario = (await trpcClient.scenario.createScenario.mutate(newScenario)) as Scenario;
        patchState(store, (state) => ({
          scenarios: [...state.scenarios, createdScenario],
          loading: false,
        }));

        return createdScenario;
      },
      async getScenarioById(id: string) {
        const scenario = (await trpcClient.scenario.getScenario.query({ id })) as Scenario;

        patchState(store, () => ({
          loading: false,
        }));

        return scenario;
      },
      async getScenarios() {
        const scenarios = (await trpcClient.scenario.getScenarios.query()) as Scenario[];
        patchState(store, { scenarios, loading: false });

        return scenarios;
      },
    };
  }),
);
