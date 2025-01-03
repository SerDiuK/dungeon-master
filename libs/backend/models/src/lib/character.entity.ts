import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Alignment, CharacterFields, Race } from '@dm/shared-data-model';
import { Adventure } from './adventure.entity';

export class Character implements CharacterFields {
  @prop({ required: true, trim: true })
  public name!: string;

  @prop({ required: true, type: String })
  public race!: Race;

  @prop({ ref: 'Adventure', required: true })
  public adventureId!: Ref<Adventure>;

  @prop({ required: true, type: String })
  public alignment!: Alignment;
}

export const CharacterModel = getModelForClass(Character);
