'use client';
import Link from 'next/link';
import { Home, MonitorPlay, Snail, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

type Links = {
  title: string;
  url: string;
  icon?: React.ReactNode;
};
export default function Navbar() {
  const pathname = usePathname();
  console.log('当前路径：', pathname);

  const links: Links[] = [
    {
      title: '主页',
      url: '/',
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: '场景',
      url: '/scene',
      icon: <MonitorPlay className="h-5 w-5" />,
    },
    {
      title: '视频',
      url: '/video',
      icon: <Snail className="h-5 w-5" />,
    },
    {
      title: '对话',
      url: '/chat',
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <nav className="grid items-start px-2 text-lg font-medium lg:px-4">
      {links.map(({ title, url, icon }: Links) => {
        const isActive = pathname.startsWith(url);
        return isActive ? (
          <Link
            href={url}
            className="flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-primary transition-all hover:text-primary"
          >
            {icon}
            {title}
          </Link>
        ) : (
          <Link
            href={url}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            {icon}
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
