export type CrewMember = {
  id: string;
  name: string;
  role: string;
  mustDo: string;
  emoji: string;
  jp: string;
};

export const crew: CrewMember[] = [
  {
    id: "traveler-1",
    name: "Add a name",
    role: "Trip Captain",
    mustDo: "Find the best ramen in Shinjuku.",
    emoji: "🍜",
    jp: "船長",
  },
  {
    id: "traveler-2",
    name: "Add a name",
    role: "Photographer",
    mustDo: "Shibuya Crossing at golden hour.",
    emoji: "📸",
    jp: "写真",
  },
  {
    id: "traveler-3",
    name: "Add a name",
    role: "Foodie",
    mustDo: "Wagyu, properly.",
    emoji: "🥩",
    jp: "美食",
  },
  {
    id: "traveler-4",
    name: "Add a name",
    role: "History buff",
    mustDo: "Walk every torii at Fushimi Inari.",
    emoji: "⛩️",
    jp: "歴史",
  },
  {
    id: "traveler-5",
    name: "Add a name",
    role: "Disney enthusiast",
    mustDo: "First in line at Disneyland.",
    emoji: "🎢",
    jp: "夢",
  },
  {
    id: "traveler-6",
    name: "Add a name",
    role: "Night owl",
    mustDo: "Golden Gai bar crawl.",
    emoji: "🍶",
    jp: "夜",
  },
];
