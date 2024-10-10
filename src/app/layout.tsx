import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import { Squirrel } from 'lucide-react';
import Image from 'next/image';
import Navbar from './layout/navbar';
import SheetNavBar from './layout/sheetnavbar';
import Head from './layout/head';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-5">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Image
                    src={'/assets/logo.png'}
                    width={36}
                    height={36}
                    alt="Echo English"
                  ></Image>
                  <span className="text-lg text-primary">Echo English</span>
                </Link>
              </div>
              <div className="flex-1">
                <Navbar></Navbar>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <SheetNavBar></SheetNavBar>

              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Image
                      src="/assets/us_flag.png"
                      width={36}
                      height={36}
                      alt="Echo English"
                    ></Image>
                  </div>
                </form>
              </div>
              <div className="flex items-center gap-4">
                <Head></Head>
              </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
