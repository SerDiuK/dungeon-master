import { AdventureFields } from '@dm/shared-data-model';
import { AdventureModel } from '@dm/backend-models';
import { DocumentType } from '@typegoose/typegoose';

export async function getAdventure(
  id: string,
): Promise<DocumentType<AdventureFields> | { error: unknown; success: boolean }> {
  try {
    const adventure = await AdventureModel.findById(id).exec();

    if (!adventure) {
      return { success: false, error: 'ITEM_NOT_FOUND' };
    } else {
      return adventure;
    }
  } catch (error: unknown) {
    return { error, success: false };
  }
}
