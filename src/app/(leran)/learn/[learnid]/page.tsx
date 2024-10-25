"use client";
import MaxWindthWrapper from "@/components/MaxWidathWrapper";
import { Progress } from "@/components/ui/progress";
import { useParams } from "next/navigation";
import Learn from "@/components/learn/Learn";
import { learnWord } from "@/model/learn-word/learn-model";
import { SetStateAction, useState } from "react";

export default function WordLearnPage() {
  const params = useParams();
  const [progressIndex, setProgressIndex] = useState(Number);
  // 定义一个更新父组件状态的方法
  const updateParentValue = (newValue: SetStateAction<number>) => {
    setProgressIndex(newValue);
  };

  return (
    <MaxWindthWrapper>
      <Progress
        className="w-full h-3 md:h-5 rounded-md"
        value={progressIndex}
      />
      <div>
        <Learn
          initialLearnWordModel={learnWord}
          updateParentValue={updateParentValue}
        ></Learn>
      </div>
    </MaxWindthWrapper>
  );
}
