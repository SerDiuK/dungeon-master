import { prop, getModelForClass } from '@typegoose/typegoose';
import { QuestStatus, Quest as IQuest } from '@dm/shared-data-model';

export class Quest implements IQuest {
  @prop({ required: true, trim: true })
  public name!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true, enum: () => QuestStatus })
  public status!: QuestStatus;
}

export const QuestModel = getModelForClass(Quest);
