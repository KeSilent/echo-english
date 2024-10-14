import Image from 'next/image';
import Link from 'next/link';
import HomeRightHead from './HomeRightHead';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Links from './links/Links';
import { Menu } from 'lucide-react';

export default function SmallNavBar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
              <Image
                src={'/assets/logo.png'}
                width={36}
                height={36}
                alt="Echo English"
              ></Image>
              <span className="text-lg text-primary">Echo English</span>
            </Link>
            <Links></Links>
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
        <HomeRightHead></HomeRightHead>
      </div>
    </header>
  );
}
