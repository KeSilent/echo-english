import { Volume2 } from "lucide-react";

// 学习单词
export default function LearnWordPage() {
  return (
    <div className="flex flex-col items-center flex-1 gap-6">
      <div className="text-6xl font-bold">English</div>
      <div className="text-2xl font-bold pt-5">美/əˈbɪləti/</div>
      <div className="text-2xl font-bold pt-12">英语；英格兰的；英国的</div>
      <div className="flex gap-8 p-5">
        <div className="rounded-full bg-stone-200 p-2">
          <Volume2
            className="text-stone-500 hover:text-black cursor-pointer"
            size={30}
          ></Volume2>
        </div>
        <div className="rounded-full bg-stone-200 p-2">
          <Volume2
            className="text-stone-500 hover:text-black cursor-pointer"
            size={30}
          ></Volume2>
        </div>
      </div>
    </div>
  );
}
