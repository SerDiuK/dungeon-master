import { prop, getModelForClass } from '@typegoose/typegoose';
import { User as IUser } from '@dm/shared-data-model';

class User implements IUser {
  @prop({ required: true, trim: true })
  public name!: string;

  @prop({ required: true, unique: true, trim: true })
  public email!: string;

  @prop({ required: true, select: false })
  public password!: string;
}

export const UserModel = getModelForClass(User);
