import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import {
  CircleUser,
  Home,
  Menu,
  MonitorPlay,
  Snail,
  Squirrel,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import Navbar from './navbar';

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
  title: 'Create Next App',
  description: '念念不忘必有回响，学英语也一样！',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
                  <Squirrel className="h-6 w-6 text-primary" />
                  <span className="text-lg text-primary">Echo English</span>
                </Link>
              </div>
              <div className="flex-1">
                <Navbar/>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
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
                      <Squirrel className="h-6 w-6" />
                      <span className="text-lg">Echo English</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <Home className="h-5 w-5" />
                      主页
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <Snail className="h-5 w-5" />
                      场景
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                    >
                      <MonitorPlay className="h-5 w-5" />
                      视频
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <Users className="h-5 w-5" />
                      对话
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
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
                <div>
                  <Image
                    src="/assets/book.svg"
                    width={28}
                    height={28}
                    alt="钻石"
                  ></Image>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="/assets/diamond.svg"
                    width={28}
                    height={28}
                    alt="钻石"
                  ></Image>
                  <span className="text-base font-bold">0</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                    >
                      <CircleUser className="h-5 w-5" />
                      <span className="sr-only">我的账号</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>我的账号</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>个人信息设置</DropdownMenuItem>
                    <DropdownMenuItem>学习设置</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>帮助</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>退出</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
