import {
  ChevronRight,
  CircleCheckBig,
  CircleHelp,
  Sparkle,
} from "lucide-react";
import { LearnModel } from "@/model/learn-word/learn-model";
import WordDisplayPage from "./word-question/WordDisplay";
import { useCallback, useEffect, useState } from "react";
import WordSpelingPage from "./word-question/WordSpelling";

export default function LearnPage({
  initialLearnWordModel,
  updateParentValue,
}: {
  initialLearnWordModel: LearnModel;
  updateParentValue: (index: number) => void;
}) {
  const [learnModel, setLearnModel] = useState(initialLearnWordModel);
  const [xLButton, setXLButton] = useState<JSX.Element | null>(null);
  const [msButton, setMsButton] = useState<JSX.Element | null>(null);
  const [page, setPage] = useState<JSX.Element | null>(null);
  const [isRight, setIsRight] = useState(false);
  //当前进度
  const [progress, setProgress] = useState("wordDisplay");

  const iconButton = (
    <>
      <div className="rounded-full bg-stone-200 p-2 cursor-pointer">
        <Sparkle className="text-stone-500"></Sparkle>
      </div>
      <div className="rounded-full bg-stone-200 p-2 cursor-pointer">
        <CircleCheckBig className="text-stone-500"></CircleCheckBig>
      </div>
    </>
  );

  // 更新当前单词的状态
  const updateCurrentWord = useCallback((isRight: boolean) => {
    setLearnModel((prevModel) => {
      const { currentWordIndex, words, errorQuestions } = prevModel;
      const currentWord = words[currentWordIndex];

      let errorQuestionList = [...errorQuestions];
      // 如果用户答错，记录错误单词
      if (!isRight) {
        errorQuestionList = [...errorQuestions, currentWordIndex];
      }

      // 更新当前单词的学习步骤
      return {
        ...prevModel,
        errorQuestions: errorQuestionList,
        words: words.map((word, index) =>
          index === currentWordIndex
            ? {
                ...word,
                currentStepModel: getNextStep(currentWord.currentStepModel),
                isError: !isRight,
              }
            : word
        ),
      };
    });
  }, []);

  //监听状态，切换下一个单词
  useEffect(() => {
    setLearnModel((prevModel) => {
      let nextWordIndex = prevModel.currentWordIndex + 1;
      if (nextWordIndex == prevModel.words.length) {
        nextWordIndex = 0;
        setProgress(getNextStep(progress));
      }
      return {
        ...prevModel,
        currentWordIndex:
          nextWordIndex < prevModel.words.length ? nextWordIndex : 0,
      };
    });
  }, [learnModel.words, progress, updateCurrentWord]);

  const getNextStep = (
    currentStep: string
  ): "wordDisplay" | "spelling" | "sentenceDisplay" | "quiz" => {
    switch (currentStep) {
      case "spelling":
        return "sentenceDisplay";
      case "sentenceDisplay":
        return "quiz";
      default:
        return "spelling"; // 或者其他默认值
    }
  };

  // 下一个单词
  const handleNextStep = useCallback(() => {
    updateCurrentWord(true);
  }, [updateCurrentWord]);

  // 回答错误
  const handleError = useCallback(() => {
    updateCurrentWord(false);
  }, [updateCurrentWord]);

  //切换下一步按钮
  const handleNextIcon = (isRight: boolean) => {
    setIsRight(isRight);
  };

  //监听渲染页面组件
  useEffect(() => {
    //所有不为空的数量
    let notEmptyNumber = 0;

    learnModel.words.forEach((word) => {
      if (word.isError != null) {
        notEmptyNumber++;
      }
    });

    updateParentValue((notEmptyNumber / (learnModel.words.length * 3)) * 100);
    const returnButton = (isWordDisplay: boolean) => {
      setXLButton(
        isRight || isWordDisplay ? (
          <div
            onClick={handleNextStep}
            className="flex flex-col gap-2 items-center px-3 py-8 bg-primary hover:bg-primary/85 cursor-pointer shadow rounded-2xl"
          >
            <ChevronRight size={40}></ChevronRight>
            <div className="text-lg font-black">下一个</div>
          </div>
        ) : (
          <div
            onClick={handleError}
            className="flex flex-col gap-2 items-center px-3 py-8 bg-zinc-300 hover:bg-zinc-200 cursor-pointer shadow rounded-2xl"
          >
            <CircleHelp size={40}></CircleHelp>
            <div className="text-lg font-black">我不知道</div>
          </div>
        )
      );
      setMsButton(
        isRight || isWordDisplay ? (
          <div
            onClick={handleNextStep}
            className="flex gap-2 items-center justify-center w-full py-3 mr-8 bg-primary hover:bg-primary/85 cursor-pointer shadow rounded-2xl"
          >
            <ChevronRight size={40}></ChevronRight>
            <div className="text-2xl font-black">下一个</div>
          </div>
        ) : (
          <div
            onClick={handleError}
            className="flex gap-2 items-center justify-center w-full py-3 mr-8 bg-zinc-300 hover:bg-zinc-200 cursor-pointer shadow rounded-2xl"
          >
            <CircleHelp size={40}></CircleHelp>
            <div className="text-2xl font-black">我不知道</div>
          </div>
        )
      );
    };

    switch (
      learnModel.words[
        learnModel.currentWordIndex < 0 ? 0 : learnModel.currentWordIndex
      ].currentStepModel
    ) {
      case "wordDisplay":
        returnButton(true);
        setPage(
          <WordDisplayPage
            learnWordModel={
              learnModel.words[
                learnModel.currentWordIndex < 0
                  ? 0
                  : learnModel.currentWordIndex
              ]
            }
          ></WordDisplayPage>
        );
        break;
      case "spelling":
        returnButton(false);
        setPage(
          <WordSpelingPage
            handleIsRight={handleNextIcon}
            learnWordModel={learnModel.words[learnModel.currentWordIndex]}
          ></WordSpelingPage>
        );
        break;
    }
  }, [handleError, handleNextStep, isRight, learnModel, updateParentValue]);

  return (
    <div className="flex flex-col md:flex-row justify-between pt-40">
      {page}
      {/* 大屏显示 */}
      <div className="hidden md:block pl-10">
        <div className="flex flex-col gap-8 items-center pt-5">
          {xLButton}
          <div className="flex gap-8 pt-20">{iconButton}</div>
        </div>
      </div>
      {/* 小屏显示 */}
      <div className="block md:hidden bottom-0 fixed w-full p-8">
        <div className="flex gap-8 items-center">
          <div className="flex gap-8">{iconButton}</div>
          {msButton}
        </div>
      </div>
    </div>
  );
}
