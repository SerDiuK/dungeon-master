import type { DocumentType } from '@typegoose/typegoose';

export enum QuestStatus {
  Unstarted = 'unstarted',
  Active = 'active',
  Completed = 'completed',
  Failed = 'failed',
}

export interface QuestFields {
  name: string;
  description: string;
  status: QuestStatus;
}

export type Quest = DocumentType<QuestFields>;
