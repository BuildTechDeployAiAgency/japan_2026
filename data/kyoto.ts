export type Sight = {
  id: string;
  name: string;
  jp: string;
  area: string;
  blurb: string;
  tip?: string;
};

export const kyotoIntro = {
  jp: "京都",
  english: "Kyoto",
  blurb:
    "1,200 years of capital. Temples and gardens slow you down to their tempo. Best in the early morning before the buses — same temple at 7am vs 11am is two different places.",
};

export const kyotoSights: Sight[] = [
  {
    id: "fushimi-inari",
    name: "Fushimi Inari Taisha",
    jp: "伏見稲荷大社",
    area: "Fushimi (south)",
    blurb: "Thousands of vermillion torii climbing the mountain behind the shrine. Walk at least to the Yotsutsuji viewpoint.",
    tip: "Arrive by 7:30am. Crowds explode after 9.",
  },
  {
    id: "kiyomizu",
    name: "Kiyomizu-dera",
    jp: "清水寺",
    area: "Higashiyama (east)",
    blurb: "Wooden stage cantilevered over the hillside; sweeping view over Kyoto. Combine with Sannenzaka and Ninenzaka pedestrian lanes.",
  },
  {
    id: "gion",
    name: "Gion district",
    jp: "祇園",
    area: "Higashiyama",
    blurb: "Wooden machiya houses, lantern-lit lanes, the chance of spotting a geiko at dusk.",
    tip: "Hanamikoji is the prettiest street. Be respectful — no flash photos, no following anyone.",
  },
  {
    id: "kinkakuji",
    name: "Kinkaku-ji (Golden Pavilion)",
    jp: "金閣寺",
    area: "Northwest",
    blurb: "Three-storey zen temple wrapped in gold leaf, mirrored in its pond.",
  },
  {
    id: "ginkakuji",
    name: "Ginkaku-ji (Silver Pavilion)",
    jp: "銀閣寺",
    area: "East",
    blurb: "Quieter sibling. Walk the Philosopher's Path to get there along the canal.",
  },
  {
    id: "arashiyama-bamboo",
    name: "Arashiyama Bamboo Grove",
    jp: "嵐山竹林",
    area: "Arashiyama (west)",
    blurb: "The shot you've seen on every Japan poster. Towering green hush.",
    tip: "First train in. By 9am the path is shoulder-to-shoulder.",
  },
  {
    id: "tenryuji",
    name: "Tenryu-ji",
    jp: "天龍寺",
    area: "Arashiyama",
    blurb: "World Heritage zen garden. Pair with the bamboo grove (it's right next door).",
  },
  {
    id: "nishiki",
    name: "Nishiki Market",
    jp: "錦市場",
    area: "Central",
    blurb: "400m covered food street. Snacks, pickles, sashimi sticks, matcha everything.",
    tip: "Don't eat-and-walk — stand at the stall to eat. Local etiquette.",
  },
  {
    id: "pontocho",
    name: "Pontocho Alley",
    jp: "先斗町",
    area: "Central",
    blurb: "Narrow lantern-lit dining alley along the Kamogawa river. Yuka platforms over the water in summer.",
  },
  {
    id: "philosophers-path",
    name: "Philosopher's Path",
    jp: "哲学の道",
    area: "East",
    blurb: "2km canal walk between Ginkaku-ji and Nanzen-ji. Easy, calming.",
  },
  {
    id: "nijo-castle",
    name: "Nijo Castle",
    jp: "二条城",
    area: "Central",
    blurb: "Shogun residence with 'nightingale floors' that chirp underfoot.",
  },
];
