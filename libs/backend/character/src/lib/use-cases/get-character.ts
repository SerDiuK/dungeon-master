import { Character } from '@dm/shared-data-model';
import { CharacterModel } from '@dm/backend-models';
import { DocumentType } from '@typegoose/typegoose';

export async function getCharacter(
  id: string,
): Promise<DocumentType<Character> | { error: unknown; success: boolean }> {
  try {
    const character = await CharacterModel.findById(id).exec();

    if (!character) {
      return { success: false, error: 'ITEM_NOT_FOUND' };
    } else {
      return character;
    }
  } catch (error: unknown) {
    return { success: false, error };
  }
}
