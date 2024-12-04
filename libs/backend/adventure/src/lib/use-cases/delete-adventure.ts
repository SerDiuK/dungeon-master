import { AdventureModel } from '@dm/backend-models';

export async function deleteAdventure(id: string): Promise<{ success: boolean; error?: unknown }> {
  try {
    await AdventureModel.findByIdAndDelete(id).exec();

    return { success: true };
  } catch (error: unknown) {
    return { success: false, error };
  }
}
