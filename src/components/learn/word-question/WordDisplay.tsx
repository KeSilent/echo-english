import { LearnWordModel } from "@/model/learn-word/learn-word-model";
import { Volume2 } from "lucide-react";

// 学习单词
export default function WordDisplayPage({
  learnWordModel,
}: {
  learnWordModel: LearnWordModel;
}) {
  let isPlay = true;
  //播放音频
  const handlePlayAudio = (audioUrl: string) => {
    if (isPlay) {
      const audio = new Audio(audioUrl);
      audio.load();
      audio.play();
      isPlay = false;
      audio.onended = () => {
        isPlay = true;
      };
    }
  };
  return (
    <div className="flex flex-col items-center flex-1 gap-6">
      <div className="text-6xl font-bold">{learnWordModel.word}</div>
      <div className="text-2xl font-bold pt-5">
        {learnWordModel.pronunciation}
      </div>
      <div className="text-2xl font-bold pt-12">
        {learnWordModel.translation}
      </div>
      <div className="flex gap-8 p-5">
        <div
          className="rounded-full bg-stone-200 p-2"
          onClick={() => handlePlayAudio(learnWordModel.audio1)}
        >
          <Volume2
            className="text-stone-500 hover:text-black cursor-pointer"
            size={30}
          ></Volume2>
        </div>
        <div
          className="rounded-full bg-stone-200 p-2"
          onClick={() => handlePlayAudio(learnWordModel.audio2)}
        >
          <Volume2
            className="text-stone-500 hover:text-black cursor-pointer"
            size={30}
          ></Volume2>
        </div>
      </div>
    </div>
  );
}
