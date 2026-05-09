export type Neighborhood = {
  id: string;
  name: string;
  jp: string;
  vibe: string;
  whatToDo: string[];
  whereToEat?: string[];
};

export const tokyoIntro = {
  jp: "東京",
  english: "Tokyo",
  blurb:
    "A 38-million-person city that somehow runs like clockwork. Mega-neighborhoods stitched by the loop of the Yamanote line — each one its own world. Five days only scratches it; pick a few, walk slowly, eat constantly.",
};

export const tokyoNeighborhoods: Neighborhood[] = [
  {
    id: "shibuya",
    name: "Shibuya",
    jp: "渋谷",
    vibe: "The 24/7 hum of young Tokyo — fashion, neon, the world's most famous crossing.",
    whatToDo: [
      "Shibuya Crossing (twilight is best)",
      "Hachiko statue",
      "Shibuya Sky observation deck (book ahead)",
      "Center-gai for shopping + arcades",
    ],
    whereToEat: ["Ichiran Ramen", "Uobei Genki Sushi (touchscreen kaiten)", "Stand-up Yakitori spots near Nonbei Yokocho"],
  },
  {
    id: "shinjuku",
    name: "Shinjuku",
    jp: "新宿",
    vibe: "Bigger, louder, more chaotic. Government towers by day, neon and yakitori smoke by night.",
    whatToDo: [
      "Tokyo Metropolitan Gov't Building (free observation)",
      "Omoide Yokocho — narrow yakitori alleys",
      "Golden Gai — 200 tiny bars, six-seat each",
      "Shinjuku Gyoen gardens",
    ],
    whereToEat: ["Tsunahachi tempura", "Tonkatsu Maisen", "Donjaca izakaya"],
  },
  {
    id: "asakusa",
    name: "Asakusa",
    jp: "浅草",
    vibe: "Old Tokyo — temples, kimono rentals, the river, and a slower pace.",
    whatToDo: [
      "Senso-ji temple + Kaminarimon Gate",
      "Nakamise shopping street (try ningyo-yaki)",
      "Sumida river boat to Hamarikyu",
    ],
    whereToEat: ["Daikokuya Tempura", "Asakusa Imahan sukiyaki"],
  },
  {
    id: "harajuku",
    name: "Harajuku",
    jp: "原宿",
    vibe: "Pop culture, candy-coloured streetwear, and the calm forest of Meiji Jingu next door.",
    whatToDo: [
      "Meiji Jingu shrine forest walk",
      "Takeshita Street",
      "Omotesando architecture stroll",
    ],
    whereToEat: ["Marion Crepes", "Afuri ramen", "Eggs 'n Things"],
  },
  {
    id: "akihabara",
    name: "Akihabara",
    jp: "秋葉原",
    vibe: "Electric town — anime, retro games, gachapon, and maid cafés.",
    whatToDo: [
      "Mandarake Complex (8 floors of collectibles)",
      "Super Potato retro game shop",
      "Gachapon Hall",
      "Yodobashi Camera mega-store",
    ],
  },
  {
    id: "ginza",
    name: "Ginza",
    jp: "銀座",
    vibe: "Polished. Department stores, art galleries, sushi temples.",
    whatToDo: [
      "Ginza Six rooftop garden",
      "Itoya stationery (12 floors)",
      "Stroll Chuo-dori (closed to cars on weekend afternoons)",
    ],
    whereToEat: ["Sushi Saito (if you can get in)", "Kyubey", "Bird Land yakitori"],
  },
  {
    id: "odaiba",
    name: "Odaiba",
    jp: "お台場",
    vibe: "Reclaimed-island leisure: malls, futurism, harbour views.",
    whatToDo: [
      "TeamLab Planets / Borderless",
      "Odaiba Seaside Park + Rainbow Bridge view",
      "Unicorn Gundam statue at DiverCity",
    ],
  },
];
