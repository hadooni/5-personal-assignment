import { List } from "@/types/Champion";
import { getChampionList } from "../utils/serverApi";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 86400;

const champions = async () => {
  const data = await getChampionList();
  const arr: List[] = Object.values(data);

  return (
    <div className="container mx-auto">
      <h1 className="title mt-32">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {arr.map((champion) => (
          <Link key={champion.id} href={`/champions/${champion.id}`}>
            <div className="card-div">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                width={100}
                height={100}
                className="mx-auto mb-3"
              />
              <h2 className="card-title">{champion.name}</h2>
              <p className="card-contents">{champion.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default champions;
