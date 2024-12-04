export interface Adventure {
  name: string;
  summary: string;
}

export type CreateAdventureDto = Pick<Adventure, 'name'> & { scenarioId: string };
