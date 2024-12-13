import { WordSentenceModel } from "./word-sentence-model";

// 首先修改模型定义
export type LearningStep =
  | "wordDisplay"
  | "spelling"
  | "sentenceDisplay"
  | "quiz";
export interface LearnWordModel {
  id: number;
  word: string;
  pronunciation: string;
  translation: string;
  audio1: string;
  audio2: string;
  sentence: WordSentenceModel[];
  isError?: boolean;
  currentStepModel: LearningStep; // 新增字段，表示单词当前的学习步骤
  completedSteps: LearningStep[]; // 新增：记录已完成的步骤
  errorSteps: LearningStep[]; // 新增：记录出错的步骤
}
