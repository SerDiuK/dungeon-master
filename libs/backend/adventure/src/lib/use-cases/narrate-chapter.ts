import { generateNarrative } from '@dm/backend-ai';
import { ChapterModel } from '@dm/backend-models';

export const narrateChapter = async (chapterId: string): Promise<string | { success: boolean; error?: unknown }> => {
  try {
    const chapter = await ChapterModel.findById(chapterId).exec();

    if (!chapter) {
      return { success: false, error: 'ITEM_NOT_FOUND' };
    }

    return await generateNarrative('Narrate chapter');
  } catch (error: unknown) {
    return { success: false, error };
  }
};
