import type { DocumentType } from '@typegoose/typegoose';
import type { ChapterFields } from './chapter';

export interface ScenarioFields {
  name: string;
  description: string;
}

export type Scenario = DocumentType<ScenarioFields>;

export type CreateScenarioDto = Pick<ScenarioFields, 'name' | 'description'>;

export type AddChapterDto = Pick<ChapterFields, 'description' | 'name'> & { scenarioId: string };
