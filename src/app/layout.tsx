import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description:
    "Riot Games API를 활용한 리그 오브 레전드 챔피언, 아이템 정보 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <header className="bg-gray-800 text-white py-4 fixed top-0 left-0 right-0">
          <nav className="flex justify-around items-center container mx-auto font-bold">
            <Link href="/">홈</Link>
            <Link href="/champions">챔피언 목록</Link>
            <Link href="/items">아이템 목록</Link>
            <Link href="/rotation">챔피언 로테이션</Link>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-4 text-center font-semibold text-[14px] fixed bottom-0 left-0 right-0">
          my-lol-app is not endorsed by Riot Games and does not reflect the
          views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games and all
          associated properties are trademarks or registered trademarks of Riot
          Games, Inc.
        </footer>
      </body>
    </html>
  );
}
