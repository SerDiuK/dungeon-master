import { ScenarioModel } from '@dm/backend-models';
import { Scenario } from '@dm/shared-data-model';
import { DocumentType } from '@typegoose/typegoose';

export async function getScenario(id: string): Promise<DocumentType<Scenario> | { error: unknown; success: boolean }> {
  try {
    const scenario = await ScenarioModel.findById(id).populate('chapters').exec();

    if (!scenario) {
      return { success: false, error: 'ITEM_NOT_FOUND' };
    } else {
      return scenario;
    }
  } catch (error: unknown) {
    return { success: false, error };
  }
}
