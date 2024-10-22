import { WordSentenceModel } from "./word-sentence-model";

export interface LearnWordModel {
  id: number;
  word: string;
  pronunciation: string;
  translation: string;
  audio1: string;
  audio2: string;
  sentence: WordSentenceModel[];
  isError: boolean;
}
