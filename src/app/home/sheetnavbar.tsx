'use client';
import Link from 'next/link';
import { Home, MonitorPlay, Snail, Squirrel, Menu, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type Links = {
  title: string;
  url: string;
  icon?: React.ReactNode;
};
export default function SheetNavBar() {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Squirrel className="h-6 w-6 text-primary" />
            <span className="text-lg text-primary">Echo English</span>
          </Link>
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
      </SheetContent>
    </Sheet>
  );
}
