import { Adventure } from '@dm/shared-data-model';
import { AdventureModel } from '@dm/backend-models';

export async function getAdventures(): Promise<Adventure[] | { error: unknown; success: boolean }> {
  try {
    return await AdventureModel.find().exec();
  } catch (error: unknown) {
    return { error, success: false };
  }
}
