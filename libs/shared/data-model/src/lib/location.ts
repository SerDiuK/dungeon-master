import type { DocumentType } from '@typegoose/typegoose';

export interface LocationFields {
  name: string;
  description: string;
}

export type Location = DocumentType<LocationFields>;
