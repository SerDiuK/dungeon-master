import { User } from '@dm/shared-data-model';
import { UserModel } from '@dm/backend-models';

export function getUsers(): Promise<User[]> {
  return UserModel.find().exec();
}
