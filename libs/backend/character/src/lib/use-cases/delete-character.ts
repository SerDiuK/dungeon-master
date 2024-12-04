import { CharacterModel } from '@dm/backend-models';

export async function deleteCharacter(id: string): Promise<{ success: boolean; error?: unknown }> {
  try {
    await CharacterModel.findByIdAndDelete(id).exec();

    return { success: true };
  } catch (error: unknown) {
    return { success: false, error };
  }
}
