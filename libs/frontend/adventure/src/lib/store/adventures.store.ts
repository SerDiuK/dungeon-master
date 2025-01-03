import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { TrpcService } from '@dm/frontend-shared';
import type { CreateAdventureDto, Adventure } from '@dm/shared-data-model';

export const AdventuresStore = signalStore(
  { providedIn: 'root' },
  withState<{ adventures: Adventure[]; loading: boolean }>({ adventures: [], loading: false }),
  withMethods((store) => {
    const trpcClient = inject(TrpcService).getClient();

    patchState(store, () => ({
      loading: true,
    }));

    return {
      async createAdventure(newAdventure: CreateAdventureDto) {
        const createdAdventure = (await trpcClient.adventure.createAdventure.mutate(newAdventure)) as Adventure;
        patchState(store, (state) => ({
          adventures: [...state.adventures, createdAdventure],
          loading: false,
        }));

        return createdAdventure;
      },
      async getAdventureById(id: string) {
        const adventure = (await trpcClient.adventure.getAdventure.query({ id })) as Adventure;

        patchState(store, () => ({
          loading: false,
        }));

        return adventure;
      },
      async getAdventures() {
        const adventures = (await trpcClient.adventure.getAdventures.query()) as Adventure[];
        patchState(store, { adventures, loading: false });

        return adventures;
      },
    };
  }),
);
