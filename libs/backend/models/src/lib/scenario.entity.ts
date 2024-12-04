import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Scenario as IScenario } from '@dm/shared-data-model';
import { Chapter } from './chapter.entity';

export class Scenario implements IScenario {
  @prop({ required: true, trim: true })
  public name!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ ref: 'Chapter', default: [] })
  public chapters!: Ref<Chapter>[];
}

export const ScenarioModel = getModelForClass(Scenario);
