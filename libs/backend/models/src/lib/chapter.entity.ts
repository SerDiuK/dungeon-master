import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Scenario } from './scenario.entity'; // Ensure the correct import path
import { ChapterFields } from '@dm/shared-data-model';
import { Location } from './location.entity';

export class Chapter implements ChapterFields {
  @prop({ required: true, trim: true })
  public name!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ ref: 'Scenario', required: true })
  public scenario!: Ref<Scenario>;

  @prop()
  public imageUrl?: string;

  @prop({ ref: 'Location', default: [] })
  public locations?: Ref<Location>[];
}

export const ChapterModel = getModelForClass(Chapter);
