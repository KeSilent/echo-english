import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUser } from 'lucide-react';

import Image from 'next/image';

export default function Head() {
  return (
    <>
      <div>
        <Image src="/assets/book.svg" width={28} height={28} alt="钻石"></Image>
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
          <Button variant="secondary" size="icon" className="rounded-full">
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
    </>
  );
}
