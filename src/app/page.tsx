import Calendar from './dashboard/calendar';
import Leve from './dashboard/leve';
import WordCard from './dashboard/wordcard';

export default function Home() {
  return (
    <div className="p-3 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2">
        <Leve></Leve>
        <div className="pt-10 flex gap-2">
          <WordCard></WordCard>
          <WordCard></WordCard>
          <WordCard></WordCard>
        </div>
        <div className="pt-10">
          <Calendar></Calendar>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
