import { Adventure, CreateAdventureDto } from '@dm/shared-data-model';
import { DocumentType } from '@typegoose/typegoose';
import { AdventureModel, ScenarioModel } from '@dm/backend-models';

export async function createAdventure(
  body: CreateAdventureDto,
): Promise<DocumentType<Adventure> | { success: boolean; error?: unknown }> {
  try {
    const scenario = await ScenarioModel.findById(body.scenarioId);

    if (!scenario || !scenario.chapters.length) {
      return { success: false, error: 'ITEM_NOT_FOUND' };
    }

    const adventure = new AdventureModel({
      name: body.name,
      scenarioId: body.scenarioId,
      currentChapter: scenario.chapters[0],
    });

    return await adventure.save();
  } catch (error: unknown) {
    return { success: false, error };
  }
}
