import { CharacterModel } from '@dm/backend-models';
import { CharacterFields, CreateCharacterDto } from '@dm/shared-data-model';
import { DocumentType } from '@typegoose/typegoose';

export async function createCharacter(
  body: CreateCharacterDto,
): Promise<DocumentType<CharacterFields> | { success: boolean; error?: unknown }> {
  try {
    const character = new CharacterModel({
      name: body.name,
      race: body.race,
    });

    return await character.save();
  } catch (error: unknown) {
    return { success: false, error };
  }
}
