import { getChampionDetail } from "@/app/utils/serverApi";
import ChampionDetail from "@/components/ChampionDetail";
import { Props } from "@/types/Props";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const data = await getChampionDetail(params.id);
  const test = Object.values(data)[0];
  console.log(test);
  return {
    title: `${test.name} - My Riot App`,
    description: `${test.name} information`,
  };
};

const rotationDetail = async ({ params }: Props) => {
  return <ChampionDetail params={params} />;
};

export default rotationDetail;
