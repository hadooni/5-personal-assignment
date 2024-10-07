import { Item } from "@/types/Items";
import { getItemList } from "../utils/serverApi";
import Image from "next/image";

const Items = async () => {
  const data = await getItemList();
  const arr: Item[] = Object.values(data);

  return (
    <div className="container mx-auto">
      <h1 className="title mt-32">아이템 목록</h1>
      <div className="grid grid-cols-6 gap-4">
        {arr.map((item) => (
          <div key={item.image.full} className="card-div">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
              alt={item.name}
              width={100}
              height={100}
              className="mx-auto mb-3"
            />
            <h2 className="card-title">{item.name}</h2>
            <p className="card-contents">{item.plaintext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
