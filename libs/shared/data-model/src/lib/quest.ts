export enum QuestStatus {
  Unstarted = 'unstarted',
  Active = 'active',
  Completed = 'completed',
  Failed = 'failed',
}

export interface Quest {
  name: string;
  description: string;
  status: QuestStatus;
}
