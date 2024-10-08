import { List } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  champion: List;
}

const ChampionCard = ({ champion }: Props) => {
  return (
    <Link href={`/champions/${champion.id}`}>
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
  );
};

export default ChampionCard;
