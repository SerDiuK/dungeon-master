import type { DocumentType } from '@typegoose/typegoose';

export enum EncounterType {
  Social = 'social',
  Combat = 'combat',
  Puzzle = 'puzzle',
}

export interface EncounterFields {
  name: string;
  description: string;
  type: EncounterType;
}

export type Encounter = DocumentType<EncounterFields>;
