import { getChampionDetail } from "@/app/utils/serverApi";
import { Props } from "@/types/Props";
import Image from "next/image";

const ChampionDetail = async ({ params }: Props) => {
  const data = await getChampionDetail(params.id);
  const test = Object.values(data)[0];

  return (
    <div className="mt-40 container flex flex-col max-w-3xl mx-auto text-red-400">
      <h1 className="font-bold text-3xl mb-4">{test.name}</h1>
      <p className="text-gray-500 font-semibold text-xl">{test.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${test.image.full}`}
        alt={test.name}
        width={150}
        height={150}
        className="mx-auto my-10"
      />
      <p className="mb-4">{test.lore}</p>
      <p>스탯</p>
      <ul className="list-disc ml-4">
        <li>공격력 : {test.info.attack}</li>
        <li>방어력 : {test.info.defense}</li>
        <li>마법력 : {test.info.magic}</li>
        <li>난이도 : {test.info.difficulty}</li>
      </ul>
    </div>
  );
};

export default ChampionDetail;
