import { CreateCharacterDto } from '@dm/shared-data-model';
import { CharacterModel } from '@dm/backend-models';

export async function updateCharacter(
  id: string,
  body: Partial<CreateCharacterDto>,
): Promise<{ error?: unknown; success: boolean }> {
  try {
    await CharacterModel.findByIdAndUpdate(id, { $set: body });

    return { success: true };
  } catch (error: unknown) {
    return { success: false, error };
  }
}
