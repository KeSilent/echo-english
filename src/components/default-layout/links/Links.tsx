'use client';

import { cn } from '@/lib/utils';
import { Home, MonitorPlay, Snail, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Link = {
  id: number;
  title: string;
  url: string;
  icon?: React.ReactNode;
};

const Links = () => {
  const pathname = usePathname();

  const links: Link[] = [
    {
      id: 1,
      title: '主页',
      url: '/',
      icon: <Home className="h-5 w-5" />,
    },
    {
      id: 2,
      title: '场景',
      url: '/scene',
      icon: <MonitorPlay className="h-5 w-5" />,
    },
    {
      id: 3,
      title: '视频',
      url: '/video',
      icon: <Snail className="h-5 w-5" />,
    },
    {
      id: 4,
      title: '对话',
      url: '/chat',
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <>
      {links.map(({ id, title, url, icon }: Link) => {
        const isActive = pathname === url;
        return (
          <Link
            key={id}
            href={url}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary',
              { 'bg-muted text-primary ': isActive },
              { 'text-muted-foreground ': !isActive },
            )}
          >
            {icon}
            {title}
          </Link>
        );
      })}
    </>
  );
};

export default Links;
