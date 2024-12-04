export enum EncounterType {
  Social = 'social',
  Combat = 'combat',
  Puzzle = 'puzzle',
}

export interface Encounter {
  name: string;
  description: string;
  type: EncounterType;
}
