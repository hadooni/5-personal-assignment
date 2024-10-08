import { List } from "@/types/Champion";
import { getChampionList } from "../utils/serverApi";
import ChampionCard from "../../components/ChampionCard";

export const revalidate = 86400;

const Champions = async () => {
  const data = await getChampionList();
  const arr: List[] = Object.values(data);

  return (
    <div className="container mx-auto">
      <h1 className="title mt-32">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {arr.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default Champions;
