import type { DocumentType } from '@typegoose/typegoose';

export interface AdventureFields {
  name: string;
  summary: string;
}

export type Adventure = DocumentType<AdventureFields>;

export type CreateAdventureDto = Pick<AdventureFields, 'name'> & { scenarioId: string };
