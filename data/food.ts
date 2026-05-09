export type FoodItem = {
  id: string;
  name: string;
  jp: string;
  category: "Noodles" | "Sushi & Seafood" | "Meat & Yakitori" | "Street & Comfort" | "Sweets & Drinks" | "Konbini";
  blurb: string;
};

export const foodList: FoodItem[] = [
  // Noodles
  { id: "ramen-tonkotsu", name: "Tonkotsu Ramen", jp: "豚骨ラーメン", category: "Noodles", blurb: "Cloudy, rich pork-bone broth. Hakata style." },
  { id: "ramen-shoyu", name: "Shoyu Ramen", jp: "醤油ラーメン", category: "Noodles", blurb: "Clear soy-based broth. Tokyo classic." },
  { id: "ramen-miso", name: "Miso Ramen", jp: "味噌ラーメン", category: "Noodles", blurb: "Fermented bean depth. Sapporo origin." },
  { id: "tsukemen", name: "Tsukemen", jp: "つけ麺", category: "Noodles", blurb: "Dipping noodles, intense broth on the side." },
  { id: "udon", name: "Udon", jp: "うどん", category: "Noodles", blurb: "Thick, chewy wheat noodles." },
  { id: "soba", name: "Soba", jp: "蕎麦", category: "Noodles", blurb: "Buckwheat noodles, hot or cold." },

  // Sushi & seafood
  { id: "sushi-omakase", name: "Sushi Omakase", jp: "おまかせ", category: "Sushi & Seafood", blurb: "Chef's choice. Worth booking once." },
  { id: "kaiten", name: "Kaiten Sushi", jp: "回転寿司", category: "Sushi & Seafood", blurb: "Conveyor-belt sushi. Cheerful chaos." },
  { id: "uni", name: "Uni (Sea Urchin)", jp: "うに", category: "Sushi & Seafood", blurb: "Buttery, briny ocean." },
  { id: "unagi", name: "Unagi Don", jp: "鰻丼", category: "Sushi & Seafood", blurb: "Charcoal-grilled eel over rice." },

  // Meat & yakitori
  { id: "wagyu", name: "Wagyu", jp: "和牛", category: "Meat & Yakitori", blurb: "Marbled beef. Splurge once." },
  { id: "yakitori", name: "Yakitori", jp: "焼き鳥", category: "Meat & Yakitori", blurb: "Charcoal-skewered chicken. Best with cold beer." },
  { id: "yakiniku", name: "Yakiniku", jp: "焼肉", category: "Meat & Yakitori", blurb: "Grill your own at the table." },
  { id: "tonkatsu", name: "Tonkatsu", jp: "とんかつ", category: "Meat & Yakitori", blurb: "Crispy panko pork cutlet." },

  // Street & comfort
  { id: "okonomiyaki", name: "Okonomiyaki", jp: "お好み焼き", category: "Street & Comfort", blurb: "Savoury cabbage pancake." },
  { id: "takoyaki", name: "Takoyaki", jp: "たこ焼き", category: "Street & Comfort", blurb: "Octopus dough balls. Watch the molten centre." },
  { id: "tempura", name: "Tempura", jp: "天ぷら", category: "Street & Comfort", blurb: "Lighter-than-air fried veg + seafood." },
  { id: "katsu-curry", name: "Katsu Curry", jp: "カツカレー", category: "Street & Comfort", blurb: "Japanese curry over crispy katsu." },
  { id: "gyoza", name: "Gyoza", jp: "餃子", category: "Street & Comfort", blurb: "Pan-fried dumplings." },
  { id: "kaiseki", name: "Kaiseki", jp: "懐石", category: "Street & Comfort", blurb: "Multi-course traditional Kyoto meal." },

  // Sweets & drinks
  { id: "matcha", name: "Matcha Sweets", jp: "抹茶", category: "Sweets & Drinks", blurb: "Soft serve, mochi, cake — all of it." },
  { id: "taiyaki", name: "Taiyaki", jp: "たい焼き", category: "Sweets & Drinks", blurb: "Fish-shaped cake, red bean filling." },
  { id: "sake", name: "Sake Tasting", jp: "日本酒", category: "Sweets & Drinks", blurb: "Try a flight at an izakaya." },
  { id: "highball", name: "Japanese Highball", jp: "ハイボール", category: "Sweets & Drinks", blurb: "Whisky + soda + a slice of perfect ice." },
  { id: "asahi", name: "Asahi / Sapporo / Kirin", jp: "ビール", category: "Sweets & Drinks", blurb: "Cold lager from a vending machine. Bliss." },

  // Konbini
  { id: "egg-sando", name: "Konbini Egg Sando", jp: "卵サンド", category: "Konbini", blurb: "Lawson's is famously elite." },
  { id: "onigiri", name: "Onigiri", jp: "おにぎり", category: "Konbini", blurb: "7-Eleven tuna mayo is a love letter." },
  { id: "strawberry-sando", name: "Fruit Sando", jp: "フルーツサンド", category: "Konbini", blurb: "Cream + strawberries on milk bread." },
];
