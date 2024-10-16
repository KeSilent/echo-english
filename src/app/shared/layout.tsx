import type { Metadata } from "next";
import "../globals.css";
import { cn } from "@/lib/utils";
import LearnNavbar from "@/components/learn-layout/LearnNavbar";

export const metadata: Metadata = {
  title: "Echo English",
  description: "念念不忘必有回响，学英语也一样！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={cn("antialiased,w-full")}>
        <header className="flex h-16 items-center border-b px-4 lg:h-24 lg:px-6 bg-hoverThemeItemBac">
          <LearnNavbar></LearnNavbar>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 h-full lg:gap-6 lg:p-6 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
