'use client';
import { useRouter } from 'next/navigation';
import Leve from '../dashboard/leve';
import WordCard from '../dashboard/wordcard';
import MaxWindthWrapper from '@/components/MaxWidathWrapper';
import Calendar from '../dashboard/calendar';

export default function HomePage() {
  const router = useRouter();

  return (
    <MaxWindthWrapper className="w-full">
      <div className="p-3 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2">
          <Leve></Leve>
          <div className="pt-10 flex flex-col sm:flex-row gap-2">
            <div className="sm:w-1/3" onClick={() => router.push('/learn')}>
              <WordCard></WordCard>
            </div>
            <div className="sm:w-1/3">
              <WordCard></WordCard>
            </div>
            <div className="sm:w-1/3">
              <WordCard></WordCard>
            </div>
          </div>
          <div className="pt-10">
            <Calendar></Calendar>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </MaxWindthWrapper>
  );
}
