import { Alignment } from './alignment';
import { Race } from './race';

export interface Character {
  name: string;
  race: Race;
  alignment: Alignment;
  // level: number;
  // equipment: Item[];
}

export type CreateCharacterDto = Pick<Character, 'name' | 'race'>;
