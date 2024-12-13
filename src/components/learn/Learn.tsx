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
import {
  LearningStep,
  LearnWordModel,
} from "@/model/learn-word/learn-word-model";

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
  const [shouldMoveNext, setShouldMoveNext] = useState(false);

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

  // 获取当前单词应该显示的步骤
  const getCurrentStep = useCallback(
    (word: LearnWordModel) => {
      if (!word || !word.completedSteps || !word.errorSteps) {
        return "wordDisplay"; // 默认返回
      }

      const { currentPhase } = learnModel;

      // 错误修正阶段
      if (currentPhase === "error-correction" && word.errorSteps.length > 0) {
        return word.errorSteps[0];
      }

      // 展示阶段
      if (currentPhase === "display") {
        return "wordDisplay";
      }

      // 练习阶段
      const stepOrder: LearningStep[] = ["spelling", "sentenceDisplay", "quiz"];
      return (
        stepOrder.find((step) => !word.completedSteps.includes(step)) ||
        "wordDisplay"
      );
    },
    [learnModel]
  );

  const updateCurrentWord = useCallback(
    (isCorrect: boolean) => {
      setLearnModel((prevModel) => {
        const { currentWordIndex, words } = prevModel;
        const currentWord = words[currentWordIndex];

        if (
          !currentWord ||
          !currentWord.completedSteps ||
          !currentWord.errorSteps
        ) {
          return prevModel;
        }

        const currentStep = getCurrentStep(currentWord);

        const updatedWord = {
          ...currentWord,
          completedSteps: isCorrect
            ? [...currentWord.completedSteps, currentStep]
            : currentWord.completedSteps,
          errorSteps: !isCorrect
            ? [...currentWord.errorSteps, currentStep]
            : currentWord.errorSteps,
        };
        return {
          ...prevModel,
          words: words.map((word, index) =>
            index === currentWordIndex ? updatedWord : word
          ),
        };
      });
      // 移除自动设置 shouldMoveNext
    },
    [getCurrentStep]
  );
  const moveToNext = useCallback(() => {
    setLearnModel((prevModel) => {
      const { currentWordIndex, words, currentPhase } = prevModel;
      let nextIndex = currentWordIndex + 1;
      let nextPhase = currentPhase;

      if (nextIndex >= words.length) {
        nextIndex = 0;
        if (currentPhase === "display") {
          nextPhase = "practice";
        } else if (currentPhase === "practice") {
          const hasErrors = words.some((w) => w.errorSteps.length > 0);
          nextPhase = hasErrors ? "error-correction" : "complete";
        }
      }

      return {
        ...prevModel,
        currentWordIndex: nextIndex,
        currentPhase: nextPhase,
      };
    });
  }, []);

  // 修改处理"下一个"按钮点击
  const handleNextStep = useCallback(() => {
    if (learnModel.currentPhase === "display") {
      moveToNext();
    } else {
      updateCurrentWord(true);
      moveToNext();
    }
  }, [learnModel.currentPhase, updateCurrentWord, moveToNext]);

  // 回答错误
  const handleError = useCallback(() => {
    updateCurrentWord(false);
  }, [updateCurrentWord]);

  //切换下一步按钮
  const handleNextIcon = (isRight: boolean) => {
    setShouldMoveNext(isRight);
  };

  // 渲染当前步骤的组件
  useEffect(() => {
    const currentWord = learnModel.words[learnModel.currentWordIndex];
    const currentStep = getCurrentStep(currentWord);
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
        shouldMoveNext || isWordDisplay ? (
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
        shouldMoveNext || isWordDisplay ? (
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
    switch (currentStep) {
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
      // ... 其他步骤的组件
    }
  }, [
    learnModel.currentWordIndex,
    learnModel.currentPhase,
    getCurrentStep,
    learnModel.words,
    updateParentValue,
    shouldMoveNext,
    handleNextStep,
    handleError,
  ]);

  // 更新进度
  useEffect(() => {
    const completedCount = learnModel.words.reduce(
      (acc, word) => acc + word.completedSteps.length,
      0
    );
    const totalSteps = learnModel.words.length * 3; // 每个单词3个步骤
    updateParentValue((completedCount / totalSteps) * 100);
  }, [learnModel.words, updateParentValue]);

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
