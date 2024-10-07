import Image from "next/image";
import Link from "next/link";
import lol from "@/public/image/lol.jpg";
import lol2 from "@/public/image/lol2.jpg";
import lol3 from "@/public/image/lol3.png";

export default function Home() {
  return (
    <div className="mt-32 flex flex-col	items-center mb-20">
      <h1 className="text-red-400 font-bold text-3xl">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="text-gray-500 font-semibold my-6">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <Link href="/champions">
        <Image src={lol} alt="lol이미지" width={500} height={500} />
        <p className="click">챔피언 목록 보기</p>
      </Link>
      <Link href="/rotation">
        <Image src={lol2} alt="lol이미지" width={500} height={500} />
        <p className="click">금주 로테이션 확인</p>
      </Link>
      <Link href="/items">
        <Image src={lol3} alt="lol이미지" width={500} height={500} />
        <p className="click">아이템 목록 보기</p>
      </Link>
    </div>
  );
}
