import Link from 'next/link';
import Image from 'next/image';
import Links from './links/Links';

export default function Navbar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-5">
          <Link href="/" className="flex items-center gap-2 font-semibold">
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
          <nav className="grid items-start px-2 text-lg font-medium lg:px-4">
            <Links></Links>
          </nav>
        </div>
      </div>
    </div>
  );
}
