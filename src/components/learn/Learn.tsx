import { ChevronRight, CircleCheckBig, Sparkle } from "lucide-react";
import { LearnModel } from "@/model/learn-word/learn-model";
import WordDisplayPage from "./word-question/WordDisplay";
import { useState } from "react";
import WordSpeling from "./word-question/WordSpelling";

export default function LearnPage({
  initialLearnWordModel,
  updateParentValue,
}: {
  initialLearnWordModel: LearnModel;
  updateParentValue: (index: number) => void;
}) {
  const [learnModel, setLearnModel] = useState(initialLearnWordModel);

  //判断对错
  const handleCorrect = (isCorrect: boolean) => {
    setLearnModel((prevModel) => ({
      ...prevModel,
      words: prevModel.words.map((word, index) =>
        index === prevModel.currentWordIndex
          ? { ...word, isError: !isCorrect }
          : word
      ),
    }));
  };

  //下一个单词
  const handleNextStep = () => {
    setLearnModel((prevModel) => ({
      ...prevModel,
      currentWordIndex: prevModel.currentWordIndex + 1,
    }));
    showWordPage(learnModel);
    //所有不为空的数量
    let notEmptyNumber = 0;

    learnModel.words.forEach((word) => {
      if (word.isError != null) {
        notEmptyNumber++;
      }
    });
    updateParentValue(notEmptyNumber);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between pt-40">
      {showWordPage(learnModel)}
      {/* 大屏显示 */}
      <div className="hidden md:block pl-10">
        <div className="flex flex-col gap-8 items-center pt-5">
          <div
            onClick={handleNextStep}
            className="flex flex-col gap-2 items-center px-3 py-8 bg-primary hover:bg-primary/85 cursor-pointer shadow rounded-2xl"
          >
            <ChevronRight size={40}></ChevronRight>
            <div className="text-lg font-black">下一个</div>
          </div>
          <div className="flex gap-8 pt-20">{iconFunction()}</div>
        </div>
      </div>
      {/* 小屏显示 */}
      <div className="block md:hidden bottom-0 fixed w-full p-8">
        <div className="flex gap-8 items-center">
          <div className="flex gap-8">{iconFunction()}</div>
          <div
            onClick={handleNextStep}
            className="flex gap-2 items-center justify-center w-full py-3 mr-8 bg-primary hover:bg-primary/85 cursor-pointer shadow rounded-2xl"
          >
            <ChevronRight size={40}></ChevronRight>
            <div className="text-2xl font-black">下一个</div>
          </div>
        </div>
      </div>
    </div>
  );

  function iconFunction() {
    return (
      <>
        <div className="rounded-full bg-stone-200 p-2 cursor-pointer">
          <Sparkle className="text-stone-500"></Sparkle>
        </div>
        <div className="rounded-full bg-stone-200 p-2 cursor-pointer">
          <CircleCheckBig className="text-stone-500"></CircleCheckBig>
        </div>
      </>
    );
  }

  function showWordPage(learnModel: LearnModel) {
    switch (learnModel.words[learnModel.currentWordIndex].currentStepModel) {
      case "wordDisplay1":
        return (
          <WordDisplayPage
            learnWordModel={learnModel.words[learnModel.currentWordIndex]}
          ></WordDisplayPage>
        );
      case "wordDisplay":
        return (
          <WordSpeling
            learnWordModel={learnModel.words[learnModel.currentWordIndex]}
          ></WordSpeling>
        );
    }
  }
}
