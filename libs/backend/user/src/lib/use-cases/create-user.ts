import { CreateUserDto } from '@dm/shared-data-model';
import { UserModel } from '@dm/backend-models';

export async function createUser(body: CreateUserDto): Promise<{ success: boolean; error?: unknown }> {
  try {
    const user = new UserModel({
      name: body.name,
      email: body.email,
      password: body.password,
    });

    await user.save();

    return { success: true };
  } catch (error: unknown) {
    return { success: false, error };
  }
}
