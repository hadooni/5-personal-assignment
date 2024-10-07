export type Champion = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: {
      version: string;
      id: string;
      key: string;
      name: string;
      title: string;
      blurb: string;
      info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
      };
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      tags: string[];
      partype: string;
      stats: object;
    };
  };
};

export type List = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: object;
};

export type ChampionDetail = {
  [key: string]: {
    id: string;
    key: string;
    name: string;
    title: string;
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
    blurb: string;
    [key: string]: any;
  };
};
