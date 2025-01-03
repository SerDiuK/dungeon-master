import { User } from '@dm/shared-data-model';
import { UserModel } from '@dm/backend-models';

export async function getUser(id: string): Promise<User | { error: unknown }> {
  try {
    const user = await UserModel.findById(id).exec();

    if (user) {
      return user;
    } else {
      return { error: 'ITEM_NOT_FOUND' };
    }
  } catch (error: unknown) {
    return { error };
  }
}
