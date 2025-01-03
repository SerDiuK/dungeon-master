import { prop, getModelForClass } from '@typegoose/typegoose';
import { UserFields } from '@dm/shared-data-model';

class User implements UserFields {
  @prop({ required: true, trim: true })
  public name!: string;

  @prop({ required: true, unique: true, trim: true })
  public email!: string;

  @prop({ required: true, select: false })
  public password!: string;

  @prop()
  public avatar?: string;
}

export const UserModel = getModelForClass(User);
