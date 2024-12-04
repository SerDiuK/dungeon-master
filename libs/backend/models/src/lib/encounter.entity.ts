import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { EncounterType, Encounter as IEncounter } from '@dm/shared-data-model';
import { Location } from './location.entity';

export class Encounter implements IEncounter {
  @prop({ required: true, trim: true })
  public name!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true, enum: () => EncounterType })
  public type!: EncounterType;

  @prop({ required: true, ref: 'Location' })
  public chapterId!: Ref<Location>;
}

export const EncounterModel = getModelForClass(Encounter);
