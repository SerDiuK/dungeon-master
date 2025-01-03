export interface ArmorClass {
  type: string;
  value: number;
}

export interface Speed {
  walk: string;
}

export interface Senses {
  darkvision: string;
  passive_perception: number;
}

export interface SpecialAbility {
  name: string;
  desc: string;
}

export interface DamageType {
  index: string;
  name: string;
  url: string;
}

export interface Damage {
  damage_type: DamageType;
  damage_dice: string;
}

export interface Action {
  name: string;
  desc: string;
  attack_bonus: number;
  damage: Damage[];
  actions: unknown[];
}

export interface Monster {
  index: string;
  name: string;
  size: string;
  type: string;
  subtype: string;
  alignment: string;
  armor_class: ArmorClass[];
  hit_points: number;
  hit_dice: string;
  hit_points_roll: string;
  speed: Speed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: unknown[];
  damage_vulnerabilities: unknown[];
  damage_resistances: unknown[];
  damage_immunities: unknown[];
  condition_immunities: unknown[];
  senses: Senses;
  languages: string;
  challenge_rating: string;
  proficiency_bonus: number;
  xp: number;
  special_abilities: SpecialAbility[];
  actions: Action[];
  url: string;
  legendary_actions: unknown[];
}
