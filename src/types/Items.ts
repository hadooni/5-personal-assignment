export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: object;
  stats: object;
}

export interface Items {
  type: string;
  version: string;
  basic: {
    name: string;
    rune: {
      isrune: boolean;
      tier: number;
      type: string;
    };
    gold: {
      base: number;
      total: number;
      sell: number;
      purchasable: boolean;
    };
    group: string;
    description: string;
    colloq: string;
    plaintext: string;
    consumed: boolean;
    stacks: number;
    depth: number;
    consumeOnFull: string;
    from: [];
    into: [];
    specialRecipe: number;
    inStore: boolean;
    hideFromAll: boolean;
    requiredChampion: string;
    requiredAlly: string;
    stats: object;
    tags: [];
    maps: {
      1: boolean;
      8: boolean;
      10: boolean;
      12: boolean;
    };
  };
  data: {
    [key: string]: {
      name: string;
      description: string;
      colloq: string;
      plaintext: string;
      into: string[];
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      gold: {
        base: number;
        purchasable: boolean;
        total: number;
        sell: number;
      };
      tags: string[];
      maps: object;
      stats: object;
    };
  };
}
