import { Adventure as IAdventure } from '@dm/shared-data-model';
import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Character } from './character.entity';
import { Scenario } from './scenario.entity';
import { Chapter } from './chapter.entity';

export class Adventure implements IAdventure {
  @prop({ required: true, trim: true })
  public name!: string;

  @prop({ default: '' })
  public summary!: string;

  @prop({ ref: 'Scenario', required: true })
  public scenarioId!: Ref<Scenario>;

  @prop({ ref: 'Character', required: true })
  public characters!: Ref<Character>[];

  @prop({ ref: 'Chapter', required: true })
  public currentChapter!: Ref<Chapter>;
}

export const AdventureModel = getModelForClass(Adventure);
