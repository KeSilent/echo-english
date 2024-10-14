import type { Metadata } from 'next';
import Layout from '../../layout';
import { NavbarLink } from '@/model/navbar-link';

export const metadata: Metadata = {
  title: 'Echo English',
  description: '念念不忘必有回响，学英语也一样！',
};

export default function RootLayout({
  children,
  item,
}: Readonly<{
  children: React.ReactNode;
  item: NavbarLink;
}>) {
  return <Layout item={item}>{children}</Layout>;
}
