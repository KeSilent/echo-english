import { cn, shuffleArray } from "@/lib/utils";
import { LearnWordModel } from "@/model/learn-word/learn-word-model";
import { MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";

// 单词拼写
export default function WordSpelingPage({
  learnWordModel,
  handleIsRight,
}: {
  learnWordModel: LearnWordModel;
  handleIsRight: (isRight: boolean) => void;
}) {
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const letterList = Array.from(new Set(learnWordModel.word));
    setAnswer("");
    setShuffledLetters(shuffleArray(letterList));
  }, [learnWordModel.word]);

  // 使用 useEffect 监听 answer 的变化
  // 判断单词对错方法
  useEffect(() => {
    if (answer === learnWordModel.word) {
      setIsCorrect(true);
      handleIsRight(true);
    } else {
      setIsCorrect(false);
      handleIsRight(false);
    }
  }, [answer, handleIsRight, learnWordModel.word]);

  const handleLetterClick = async (letter: string) => {
    await setAnswer(answer + letter);
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await setAnswer(e.target.value);
  };

  const handleDeleteLetter = () => {
    setAnswer(answer.slice(0, -1));
  };

  const letters = shuffledLetters.map((letter, index) => (
    <div
      key={index}
      onClick={() => handleLetterClick(letter)}
      className="flex justify-center items-center rounded-lg text-2xl font-bold m-1 px-8 py-2 cursor-pointer border-2 shadow hover:shadow-lg"
    >
      {letter}
    </div>
  ));

  return (
    <div className="flex flex-col items-center flex-1 gap-6">
      <div className="text-6xl font-bold">{learnWordModel.translation}</div>
      <div className="w-full h-16 mt-20">
        <input
          className={cn(
            "bg-gray-200 border-2 text-3xl p-5 border-gray-300 w-full h-full rounded-lg",
            isCorrect ? "bg-green-300" : ""
          )}
          type="text"
          onChange={handleInputChange}
          value={answer}
        />
      </div>
      <div className="flex flex-wrap flex-row gap-2 pt-10">
        {letters}
        <div
          onClick={handleDeleteLetter}
          className="flex justify-center items-center rounded-lg text-2xl font-bold m-1 px-8 py-2 cursor-pointer border-2 shadow hover:shadow-lg"
        >
          <MoveLeft className="mr-5"></MoveLeft>
          后退
        </div>
      </div>
    </div>
  );
}
