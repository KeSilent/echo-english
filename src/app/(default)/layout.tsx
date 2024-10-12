import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/default-layout/Navbar';
import SmallNavBar from '@/components/default-layout/Smallnavbar';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Echo English',
  description: '念念不忘必有回响，学英语也一样！',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={cn('antialiased')}
      >
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Navbar></Navbar>
          <div className="flex flex-col">
            <SmallNavBar></SmallNavBar>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
