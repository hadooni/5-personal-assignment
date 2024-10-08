"use client";

import { useEffect, useState } from "react";
import { List } from "@/types/Champion";
import ChampionCard from "@/components/ChampionCard";

const Rotation = () => {
  const [championData, setChampionData] = useState<List[]>([]);

  const getChampionRotation = async () => {
    const res = await fetch("/api/rotation");
    const data = await res.json();
    setChampionData(data.rotationChampion);
  };

  useEffect(() => {
    getChampionRotation();
  }, []);

  if (!championData) {
    return <div>loading...</div>;
  }

  return (
    <main className="container mx-auto mt-40">
      <h1 className="title">챔피언 로테이션</h1>
      <div className="grid grid-cols-6 gap-4">
        {championData.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </main>
  );
};

export default Rotation;
