import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Scenario } from './scenario.entity'; // Ensure the correct import path
import { Location as ILocation } from '@dm/shared-data-model';
import { Character } from './character.entity';

export class Location implements ILocation {
  @prop({ required: true, trim: true })
  public name!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ ref: 'Scenario', required: true })
  public scenario!: Ref<Scenario>;

  @prop()
  public imageUrl?: string;

  @prop({ ref: 'Character', default: [] })
  public npcs?: Ref<Character>[];
}

export const LocationModel = getModelForClass(Location);
