'use client';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import React from 'react';
export default function Leve() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center font-bold  gap-2">
        <Image src="/assets/flag.svg" width={20} height={20} alt={''}></Image>
        <span className="text-lg">小白</span>
        <span className="text-base">(180分)</span>
        <MoveRight className="h-8 w-8" />
      </div>
      <div className="flex flex-1 items-center gap-2  w-full">
        <span className="font-bold">7级</span>
        <Progress value={progress} className="w-[80%]"></Progress>
        <span className="font-bold">180/260</span>
      </div>
    </div>
  );
}
