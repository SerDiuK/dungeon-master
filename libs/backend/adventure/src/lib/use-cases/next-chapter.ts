import { AdventureModel, ScenarioModel, ChapterModel } from '@dm/backend-models';
import { Chapter } from '@dm/shared-data-model';
import { DocumentType } from '@typegoose/typegoose';

export const nextChapter = async (
  adventureId: string,
): Promise<DocumentType<Chapter> | { success: boolean; error?: unknown }> => {
  try {
    const adventure = await AdventureModel.findById(adventureId);

    if (!adventure) {
      return { success: false, error: 'ITEM_NOT_FOUND' };
    }

    const scenario = await ScenarioModel.findById(adventure.scenarioId);

    if (!scenario) {
      return { success: false, error: 'ITEM_NOT_FOUND' };
    }

    const currentChapterIndex = scenario.chapters.findIndex(
      (chapter) => chapter._id?.toString() === adventure.currentChapter?.toString(),
    );

    // Determine the next chapter
    const nextChapterIndex = currentChapterIndex + 1;

    if (nextChapterIndex >= scenario.chapters.length) {
      return { success: false, error: 'NO_NEXT_STEP_AVAILABLE' };
    }

    const nextChapterId = scenario.chapters[nextChapterIndex];

    const nextChapter = await ChapterModel.findById(nextChapterId);

    if (!nextChapter) {
      return { success: false, error: 'ITEM_NOT_FOUND' };
    }

    // Update the currentChapter in the Adventure document
    adventure.currentChapter = nextChapter;
    await adventure.save();

    return nextChapter;
  } catch (error: unknown) {
    return { success: false, error };
  }
};
