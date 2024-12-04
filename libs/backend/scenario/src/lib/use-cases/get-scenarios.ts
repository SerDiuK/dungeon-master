import { ScenarioModel } from '@dm/backend-models';
import { Scenario } from '@dm/shared-data-model';

export async function getScenarios(): Promise<Scenario[] | { error: unknown; success: boolean }> {
  try {
    return await ScenarioModel.find().exec();
  } catch (error: unknown) {
    return { error, success: false };
  }
}
