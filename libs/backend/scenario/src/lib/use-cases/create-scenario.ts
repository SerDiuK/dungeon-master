import { Scenario, CreateScenarioDto } from '@dm/shared-data-model';
import { ScenarioModel } from '@dm/backend-models';
import { DocumentType } from '@typegoose/typegoose';

export async function createScenario(
  body: CreateScenarioDto,
): Promise<DocumentType<Scenario> | { success: boolean; error?: unknown }> {
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
