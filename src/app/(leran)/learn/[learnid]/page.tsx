"use client";
import MaxWindthWrapper from "@/components/MaxWidathWrapper";
import { Progress } from "@/components/ui/progress";
import { useParams } from "next/navigation";
import Learn from "@/components/learn/Learn";

export default function WordLearnPage() {
  const params = useParams();

  return (
    <MaxWindthWrapper>
      <Progress className="w-full h-3 md:h-5 rounded-md" value={33} />
      <div>
        <Learn></Learn>
      </div>
    </MaxWindthWrapper>
  );
}
