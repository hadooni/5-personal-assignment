import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 left-0 right-0">
      <nav className="flex justify-around items-center container mx-auto font-bold">
        <Link href="/">홈</Link>
        <Link href="/champions">챔피언 목록</Link>
        <Link href="/items">아이템 목록</Link>
        <Link href="/rotation">챔피언 로테이션</Link>
      </nav>
    </header>
  );
}
