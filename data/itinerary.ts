export type Block = {
  time: string;
  activity: string;
  location?: string;
  notes?: string;
};

export type Day = {
  slug: string;
  date: string;
  dayLabel: string;
  city: "Tokyo" | "Kyoto" | "Tokyo / Kyoto";
  title: string;
  jp: string;
  highlight?: string;
  draft?: boolean;
  blocks: Block[];
};

export const itinerary: Day[] = [
  {
    slug: "day-01-arrival-tokyo",
    date: "2026-05-22",
    dayLabel: "Day 1 · Friday",
    city: "Tokyo",
    title: "Arrival in Tokyo",
    jp: "到着",
    highlight: "Land, settle, first ramen.",
    draft: true,
    blocks: [
      { time: "PM", activity: "Land at Haneda / Narita", notes: "Pick up Suica/Pasmo IC card at the airport. Pocket Wi-Fi or eSIM." },
      { time: "Evening", activity: "Check into Tokyo hotel", location: "Shinjuku / Shibuya area", notes: "Drop bags, freshen up." },
      { time: "Night", activity: "Easy first dinner — neighbourhood ramen or izakaya", notes: "Don't over-plan day 1. Walk it off, jet-lag-friendly." },
    ],
  },
  {
    slug: "day-02-shibuya-shinjuku",
    date: "2026-05-23",
    dayLabel: "Day 2 · Saturday",
    city: "Tokyo",
    title: "Shibuya & Shinjuku",
    jp: "渋谷・新宿",
    highlight: "Iconic crossing, neon nightfall.",
    draft: true,
    blocks: [
      { time: "Morning", activity: "Shibuya Crossing + Hachiko statue", location: "Shibuya" },
      { time: "Midday", activity: "Shibuya Sky observation deck", notes: "Book tickets in advance." },
      { time: "Afternoon", activity: "Lunch + shopping (Shibuya Parco, Center-gai)" },
      { time: "Evening", activity: "Move to Shinjuku — Omoide Yokocho or Golden Gai", notes: "Tiny bars, smoky yakitori." },
    ],
  },
  {
    slug: "day-03-asakusa-akihabara",
    date: "2026-05-24",
    dayLabel: "Day 3 · Sunday",
    city: "Tokyo",
    title: "Asakusa & Akihabara",
    jp: "浅草・秋葉原",
    highlight: "Old Tokyo to electric town.",
    draft: true,
    blocks: [
      { time: "Morning", activity: "Senso-ji Temple + Nakamise shopping street", location: "Asakusa" },
      { time: "Midday", activity: "Tokyo Skytree views" },
      { time: "Afternoon", activity: "Akihabara — anime, retro arcades, Mandarake" },
      { time: "Evening", activity: "Dinner + Tsukiji-style sushi or kaiten conveyor" },
    ],
  },
  {
    slug: "day-04-disneyland",
    date: "2026-05-25",
    dayLabel: "Day 4 · Monday",
    city: "Tokyo",
    title: "Tokyo Disneyland",
    jp: "ディズニーランド",
    highlight: "Family day at the park.",
    draft: true,
    blocks: [
      { time: "Early", activity: "Train to Maihama Station — gates open ~8am", notes: "Buy Premier Access for big rides if budget allows." },
      { time: "All day", activity: "Tokyo Disneyland (or DisneySea)", notes: "Pick the park as a group beforehand. Pack a portable phone charger." },
      { time: "Night", activity: "Late return to Tokyo hotel" },
    ],
  },
  {
    slug: "day-05-harajuku-roppongi",
    date: "2026-05-26",
    dayLabel: "Day 5 · Tuesday",
    city: "Tokyo",
    title: "Harajuku, Meiji & Roppongi",
    jp: "原宿・六本木",
    highlight: "Style, shrine, skyline.",
    draft: true,
    blocks: [
      { time: "Morning", activity: "Meiji Jingu shrine forest walk", location: "Harajuku" },
      { time: "Midday", activity: "Takeshita Street + crepes" },
      { time: "Afternoon", activity: "Omotesando architecture stroll → Aoyama" },
      { time: "Evening", activity: "Roppongi Hills / Tokyo Tower views, dinner" },
    ],
  },
  {
    slug: "day-06-shinkansen-to-kyoto",
    date: "2026-05-27",
    dayLabel: "Day 6 · Wednesday",
    city: "Tokyo / Kyoto",
    title: "Shinkansen to Kyoto",
    jp: "新幹線で京都へ",
    highlight: "Bullet train. Mt Fuji on the right.",
    draft: true,
    blocks: [
      { time: "Morning", activity: "Check out, Tokyo → Kyoto on Nozomi shinkansen", notes: "Sit on the right side (Tokyo→Kyoto) for Mt Fuji views around Mishima. Buy ekiben for the trip." },
      { time: "Midday", activity: "Arrive Kyoto, check in" },
      { time: "Afternoon", activity: "Easy first walk — Gion district, kamogawa river" },
      { time: "Evening", activity: "Pontocho alley dinner" },
    ],
  },
  {
    slug: "day-07-fushimi-inari-southern-higashiyama",
    date: "2026-05-28",
    dayLabel: "Day 7 · Thursday",
    city: "Kyoto",
    title: "Fushimi Inari & Higashiyama",
    jp: "伏見稲荷・東山",
    highlight: "10,000 torii gates.",
    draft: true,
    blocks: [
      { time: "Early", activity: "Fushimi Inari Taisha — go before 8am to beat crowds" },
      { time: "Midday", activity: "Lunch around Tofukuji or back into Higashiyama" },
      { time: "Afternoon", activity: "Kiyomizu-dera + Sannenzaka / Ninenzaka lanes" },
      { time: "Evening", activity: "Yasaka shrine at dusk, dinner in Gion" },
    ],
  },
  {
    slug: "day-08-arashiyama",
    date: "2026-05-29",
    dayLabel: "Day 8 · Friday",
    city: "Kyoto",
    title: "Arashiyama bamboo & Kinkaku-ji",
    jp: "嵐山・金閣寺",
    highlight: "Bamboo, monkeys, gold pavilion.",
    draft: true,
    blocks: [
      { time: "Morning", activity: "Bamboo Grove + Tenryu-ji garden", location: "Arashiyama" },
      { time: "Midday", activity: "Togetsukyo bridge + monkey park (optional climb)" },
      { time: "Afternoon", activity: "Travel across Kyoto to Kinkaku-ji (Golden Pavilion)" },
      { time: "Evening", activity: "Dinner — kaiseki splurge or izakaya" },
    ],
  },
  {
    slug: "day-09-nara-day-trip",
    date: "2026-05-30",
    dayLabel: "Day 9 · Saturday",
    city: "Kyoto",
    title: "Nara day trip + last Kyoto night",
    jp: "奈良・最後の夜",
    highlight: "Bowing deer, Great Buddha.",
    draft: true,
    blocks: [
      { time: "Morning", activity: "Train to Nara (~45 min) — Todai-ji, Nara deer park" },
      { time: "Afternoon", activity: "Back to Kyoto — Nishiki market food crawl" },
      { time: "Evening", activity: "Final Kyoto dinner — group meal", notes: "Souvenir shopping window." },
    ],
  },
  {
    slug: "day-10-departure",
    date: "2026-05-31",
    dayLabel: "Day 10 · Sunday",
    city: "Tokyo / Kyoto",
    title: "Departure",
    jp: "帰路",
    highlight: "Sayonara, Japan.",
    draft: true,
    blocks: [
      { time: "Morning", activity: "Pack, last konbini breakfast" },
      { time: "Midday", activity: "Shinkansen back to Tokyo (or Kansai airport direct)", notes: "Allow generous airport buffer." },
      { time: "Evening", activity: "Flight home" },
    ],
  },
];

export const trip = {
  start: "2026-05-22",
  end: "2026-05-31",
  startJST: "2026-05-22T09:00:00+09:00",
};
