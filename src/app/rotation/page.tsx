"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List } from "@/types/Champion";

const Rotation = () => {
  const [championData, setChampionData] = useState<List[]>([]);

  const getChampionRotation = async () => {
    const res = await fetch("/api/rotation");
    const data = await res.json();
    console.log(data);
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
          <Link key={champion.key} href={`/rotation/${champion.id}`}>
            <div className="card-div">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
                alt={champion.id}
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h2 className="card-title">{champion.name}</h2>
              <p className="card-contents">{champion.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Rotation;
