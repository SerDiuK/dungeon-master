import { CreateScenarioDto, Scenario } from '@dm/shared-data-model';
import { ScenarioModel } from '@dm/backend-models';

export async function createScenario(
  body: CreateScenarioDto,
): Promise<Scenario | { success: boolean; error?: unknown }> {
  try {
    const scenario = new ScenarioModel({
      name: body.name,
      description: body.description,
    });

    return await scenario.save();
  } catch (error: unknown) {
    return { success: false, error };
  }
}
