import type { DocumentType } from '@typegoose/typegoose';

export interface ItemFields {
  id: string;
  name: string;
  description: string;
}

export type Item = DocumentType<ItemFields>;
