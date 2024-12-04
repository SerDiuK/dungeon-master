import { Chapter } from './chapter';

export interface Scenario {
  name: string;
  description: string;
}

export type CreateScenarioDto = Pick<Scenario, 'name' | 'description'>;

export type AddChapterDto = Pick<Chapter, 'description' | 'name'> & { scenarioId: string };
