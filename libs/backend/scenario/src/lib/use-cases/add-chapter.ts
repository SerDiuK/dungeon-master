import { ScenarioModel, ChapterModel } from '@dm/backend-models';
import { AddChapterDto, Scenario } from '@dm/shared-data-model';
import { DocumentType } from '@typegoose/typegoose';

export const addChapter = async (
  dto: AddChapterDto,
): Promise<DocumentType<Scenario> | { success: boolean; error?: unknown }> => {
  try {
    const scenario = await ScenarioModel.findById(dto.scenarioId);
    if (!scenario) {
      throw new Error('Scenario not found');
    }

    const newChapter = await ChapterModel.create({
      name: dto.name,
      description: dto.description,
      scenario: scenario._id,
    });

    scenario.chapters = scenario.chapters || [];
    scenario.chapters.push(newChapter._id);

    return await scenario.save();
  } catch (error: unknown) {
    return { success: false, error };
  }
};
