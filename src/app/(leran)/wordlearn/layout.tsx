import type { Metadata } from 'next';
import LearnLayout from '../learn-layout';

export const metadata: Metadata = {
  title: 'Echo English',
  description: '念念不忘必有回响，学英语也一样！',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LearnLayout>{children}</LearnLayout>;
}
