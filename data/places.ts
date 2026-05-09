export type Place = {
  id: string;
  name: string;
  jp?: string;
  city: "Tokyo" | "Kyoto" | "Nara";
  category: "Sight" | "Food" | "Shrine" | "Stay" | "Park" | "Shopping";
  lat: number;
  lng: number;
  blurb?: string;
};

export const places: Place[] = [
  // Tokyo
  { id: "shibuya-crossing", name: "Shibuya Crossing", jp: "渋谷スクランブル交差点", city: "Tokyo", category: "Sight", lat: 35.6595, lng: 139.7004, blurb: "The most famous intersection on earth." },
  { id: "shibuya-sky", name: "Shibuya Sky", city: "Tokyo", category: "Sight", lat: 35.6586, lng: 139.7016, blurb: "Open-air rooftop deck. Book ahead." },
  { id: "shinjuku-omoide", name: "Omoide Yokocho", jp: "思い出横丁", city: "Tokyo", category: "Food", lat: 35.6929, lng: 139.6995, blurb: "Smoky yakitori alley." },
  { id: "golden-gai", name: "Golden Gai", jp: "ゴールデン街", city: "Tokyo", category: "Food", lat: 35.6943, lng: 139.7044, blurb: "Tiny postwar bars stacked together." },
  { id: "sensoji", name: "Senso-ji Temple", jp: "浅草寺", city: "Tokyo", category: "Shrine", lat: 35.7148, lng: 139.7967, blurb: "Tokyo's oldest temple. Asakusa." },
  { id: "skytree", name: "Tokyo Skytree", jp: "東京スカイツリー", city: "Tokyo", category: "Sight", lat: 35.7101, lng: 139.8107, blurb: "634m of view." },
  { id: "akihabara", name: "Akihabara Electric Town", jp: "秋葉原", city: "Tokyo", category: "Shopping", lat: 35.7022, lng: 139.7745, blurb: "Anime, retro, neon." },
  { id: "harajuku-takeshita", name: "Takeshita Street", jp: "竹下通り", city: "Tokyo", category: "Shopping", lat: 35.6712, lng: 139.7041, blurb: "Crepes, crowds, kawaii." },
  { id: "meiji-jingu", name: "Meiji Jingu", jp: "明治神宮", city: "Tokyo", category: "Shrine", lat: 35.6764, lng: 139.6993, blurb: "Forest shrine in the city." },
  { id: "tokyo-disneyland", name: "Tokyo Disneyland", jp: "東京ディズニーランド", city: "Tokyo", category: "Park", lat: 35.6329, lng: 139.8804, blurb: "Day at the park." },
  { id: "tsukiji-outer", name: "Tsukiji Outer Market", jp: "築地場外市場", city: "Tokyo", category: "Food", lat: 35.6655, lng: 139.7707, blurb: "Tamagoyaki, uni, market sushi." },
  { id: "tokyo-tower", name: "Tokyo Tower", jp: "東京タワー", city: "Tokyo", category: "Sight", lat: 35.6586, lng: 139.7454, blurb: "Vermillion icon of postwar Tokyo." },

  // Kyoto
  { id: "fushimi-inari", name: "Fushimi Inari Taisha", jp: "伏見稲荷大社", city: "Kyoto", category: "Shrine", lat: 34.9671, lng: 135.7727, blurb: "10,000 vermillion torii." },
  { id: "kiyomizu", name: "Kiyomizu-dera", jp: "清水寺", city: "Kyoto", category: "Shrine", lat: 34.9949, lng: 135.7851, blurb: "Wooden stage, view over Kyoto." },
  { id: "gion", name: "Gion District", jp: "祇園", city: "Kyoto", category: "Sight", lat: 35.0036, lng: 135.7775, blurb: "Lantern-lit lanes, geiko quarter." },
  { id: "kinkakuji", name: "Kinkaku-ji (Golden Pavilion)", jp: "金閣寺", city: "Kyoto", category: "Shrine", lat: 35.0394, lng: 135.7292, blurb: "Gilded zen temple over a pond." },
  { id: "arashiyama-bamboo", name: "Arashiyama Bamboo Grove", jp: "嵐山竹林", city: "Kyoto", category: "Park", lat: 35.0170, lng: 135.6717, blurb: "Filtered green light, early morning best." },
  { id: "tenryuji", name: "Tenryu-ji", jp: "天龍寺", city: "Kyoto", category: "Shrine", lat: 35.0157, lng: 135.6739, blurb: "Zen garden classic." },
  { id: "nishiki", name: "Nishiki Market", jp: "錦市場", city: "Kyoto", category: "Food", lat: 35.0050, lng: 135.7649, blurb: "Kyoto's kitchen — 400m of food stalls." },
  { id: "pontocho", name: "Pontocho Alley", jp: "先斗町", city: "Kyoto", category: "Food", lat: 35.0080, lng: 135.7706, blurb: "Riverside dinner alley." },

  // Nara
  { id: "todaiji", name: "Todai-ji (Great Buddha)", jp: "東大寺", city: "Nara", category: "Shrine", lat: 34.6890, lng: 135.8398, blurb: "Giant bronze Buddha. Wow." },
  { id: "nara-park", name: "Nara Deer Park", jp: "奈良公園", city: "Nara", category: "Park", lat: 34.6851, lng: 135.8430, blurb: "Bowing deer. Buy senbei crackers." },
];
