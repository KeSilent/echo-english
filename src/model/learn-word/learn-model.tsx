import { LearnWordModel } from "./learn-word-model";

export interface LearnModel {
  words: LearnWordModel[];
  currentStep: number; // 表示当前步骤，单词展示、翻译拼写、例句展示、翻译选择题等
  model: string; //当前的模式：单词展示、拼写、例句展示、选择题等
  errorQuestion: [];
}
export const learnWord: LearnModel = {
  words: [
    {
      id: 1,
      word: "hello",
      pronunciation: "/həˈləʊ/",
      translation: "你好",
      audio1:
        "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/h/hel/hello/hello__gb_1.mp3",
      audio2:
        "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/hel/hello/hello__us_1_rr.mp3",
      sentence: [
        {
          text: "I ate an apple.",
          translation: "我吃了一个苹果。",
          audioUrl: "audio/sentence_apple.mp3",
          videoUrl: "video/apple_sentence.mp4",
          id: 0,
        },
      ],
      isError: false,
    },
    {
      id: 2,
      word: "apple",
      pronunciation: "/ˈæp(ə)l/",
      translation: "苹果",
      audio1:
        "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/app/apple/apple__gb_2.mp3",
      audio2:
        "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/app/apple/apple__us_1.mp3",
      sentence: [
        {
          text: "I ate an apple.",
          translation: "我吃了一个苹果。",
          audioUrl: "audio/sentence_apple.mp3",
          videoUrl: "video/apple_sentence.mp4",
          id: 0,
        },
      ],
      isError: false,
    },
    {
      word: "banana",
      pronunciation: "/bəˈnænə/",
      translation: "香蕉",
      audio1:
        "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/ban/banan/banana__gb_2.mp3",
      audio2:
        "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/ban/banan/banana__us_2.mp3",
      sentence: [
        {
          text: "Bananas are yellow.",
          translation: "香蕉是黄色的。",
          audioUrl: "audio/sentence_banana.mp3",
          videoUrl: "video/banana_sentence.mp4",
          id: 0,
        },
      ],
      id: 0,
      isError: false,
    },
    {
      word: "cherry",
      pronunciation: "/ˈʧɛri/",
      translation: "樱桃",
      audio1:
        "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/che/cherr/cherry__gb_2.mp3",
      audio2:
        "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/che/cherr/cherry__us_1.mp3",
      sentence: [
        {
          text: "Cherries are sweet.",
          translation: "樱桃很甜。",
          audioUrl: "audio/sentence_cherry.mp3",
          videoUrl: "video/cherry_sentence.mp4",
          id: 0,
        },
      ],
      id: 0,
      isError: false,
    },
  ],
  currentStep: 0,
  model: "wordDisplay",
  errorQuestion: [],
};
