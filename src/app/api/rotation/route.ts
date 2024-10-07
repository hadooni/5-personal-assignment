import { getChampionList } from "@/app/utils/serverApi";
import { List } from "@/types/Champion";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Riot-Token": process.env.RIOT_API_KEY!,
      },
    }
  );
  if (!res.ok) {
    throw new Error("network error");
  }
  const data: string = await res.text();
  const parsedData = JSON.parse(data);

  const response = await getChampionList();
  const arr: List[] = Object.values(response);

  const championId: number[] = parsedData.freeChampionIds;
  const rotationChampion = arr.filter((champion) =>
    championId.includes(+champion.key)
  );

  return NextResponse.json({ rotationChampion });
}
