import { ChevronRight, CircleCheckBig, Sparkle } from "lucide-react";
import { LearnModel } from "@/model/learn-word/learn-model";
import WordDisplayPage from "./word-question/WordDisplay";

export default function LearnPage({ learnModel }: { learnModel: LearnModel }) {
  return (
    <div className="flex flex-col md:flex-row justify-between pt-40">
      {showWordPage(learnModel)}
      {/* 大屏显示 */}
      <div className="hidden md:block">
        <div className="flex flex-col gap-8 items-center pt-5">
          <div className="flex flex-col gap-2 items-center px-3 py-8 bg-primary hover:bg-primary/85 cursor-pointer shadow rounded-2xl">
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
          <div className="flex gap-2 items-center justify-center w-full py-3 mr-8 bg-primary hover:bg-primary/85 cursor-pointer shadow rounded-2xl">
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
    switch (learnModel.model) {
      case "wordDisplay":
        return (
          <WordDisplayPage
            learnWordModel={learnModel.words[learnModel.currentStep]}
          ></WordDisplayPage>
        );
    }
  }
}
