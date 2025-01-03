import type { DocumentType } from '@typegoose/typegoose';
import type { Alignment } from './alignment';
import type { Race } from './race';

export interface CharacterFields {
  name: string;
  race: Race;
  alignment: Alignment;
  // level: number;
  // equipment: Item[];
}

export type Character = DocumentType<CharacterFields>;

export type CreateCharacterDto = Pick<CharacterFields, 'name' | 'race'>;
