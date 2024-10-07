"use server";

import { Champion, ChampionDetail } from "@/types/Champion";
import { Items } from "@/types/Items";

// baseUrl + 최신버전을 합친 함수
const getUrl = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data = await res.json();
  const version: string = data[0];
  const fetchUrl: string = `https://ddragon.leagueoflegends.com/cdn/${version}`;
  return fetchUrl;
};

// 챔피언 목록 불러오기
export const getChampionList = async () => {
  const url = await getUrl();
  const res = await fetch(`${url}/data/ko_KR/champion.json`);
  const { data }: Champion = await res.json();
  if (!res.ok) {
    return { message: "failed to data fetching" };
  }
  return data;
};

// 챔피언 디테일 불러오기
export const getChampionDetail = async (id: string) => {
  const url = await getUrl();
  const res = await fetch(`${url}/data/ko_KR/champion/${id}.json`);
  const { data }: ChampionDetail = await res.json();
  if (!res.ok) {
    return { message: "failed to data fetching" };
  }
  return data;
};

// 아이템 목록 불러오기
export const getItemList = async () => {
  const url = await getUrl();
  const res = await fetch(`${url}/data/ko_KR/item.json`);
  const { data }: Items = await res.json();
  if (!res.ok) {
    return { message: "failed to data fetching" };
  }
  return data;
};
