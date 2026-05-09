export type Phrase = {
  kana: string;
  romaji: string;
  english: string;
  category: "Greetings" | "Polite" | "Restaurant" | "Shopping" | "Transit" | "Help";
  note?: string;
};

export const phrases: Phrase[] = [
  // Greetings
  { kana: "おはようございます", romaji: "Ohayou gozaimasu", english: "Good morning", category: "Greetings" },
  { kana: "こんにちは", romaji: "Konnichiwa", english: "Hello / Good afternoon", category: "Greetings" },
  { kana: "こんばんは", romaji: "Konbanwa", english: "Good evening", category: "Greetings" },
  { kana: "さようなら", romaji: "Sayounara", english: "Goodbye", category: "Greetings" },
  { kana: "またね", romaji: "Mata ne", english: "See you later", category: "Greetings", note: "casual" },

  // Polite
  { kana: "ありがとうございます", romaji: "Arigatou gozaimasu", english: "Thank you (polite)", category: "Polite" },
  { kana: "すみません", romaji: "Sumimasen", english: "Excuse me / Sorry", category: "Polite", note: "the swiss-army-knife word" },
  { kana: "お願いします", romaji: "Onegaishimasu", english: "Please", category: "Polite" },
  { kana: "はい / いいえ", romaji: "Hai / Iie", english: "Yes / No", category: "Polite" },
  { kana: "わかりません", romaji: "Wakarimasen", english: "I don't understand", category: "Polite" },
  { kana: "英語を話せますか", romaji: "Eigo o hanasemasu ka?", english: "Do you speak English?", category: "Polite" },

  // Restaurant
  { kana: "メニューをください", romaji: "Menyuu o kudasai", english: "Menu, please", category: "Restaurant" },
  { kana: "これをください", romaji: "Kore o kudasai", english: "I'll have this (pointing)", category: "Restaurant" },
  { kana: "おすすめは何ですか", romaji: "Osusume wa nan desu ka?", english: "What do you recommend?", category: "Restaurant" },
  { kana: "おいしい！", romaji: "Oishii!", english: "Delicious!", category: "Restaurant" },
  { kana: "お会計お願いします", romaji: "Okaikei onegaishimasu", english: "Bill, please", category: "Restaurant" },
  { kana: "ごちそうさまでした", romaji: "Gochisousama deshita", english: "Thanks for the meal", category: "Restaurant", note: "say it on the way out" },
  { kana: "いただきます", romaji: "Itadakimasu", english: "Let's eat (before meal)", category: "Restaurant" },
  { kana: "水をください", romaji: "Mizu o kudasai", english: "Water please", category: "Restaurant" },

  // Shopping
  { kana: "いくらですか", romaji: "Ikura desu ka?", english: "How much is this?", category: "Shopping" },
  { kana: "クレジットカードは使えますか", romaji: "Kurejitto kaado wa tsukaemasu ka?", english: "Do you take credit card?", category: "Shopping" },
  { kana: "袋をください", romaji: "Fukuro o kudasai", english: "May I have a bag?", category: "Shopping" },
  { kana: "見ているだけです", romaji: "Mite iru dake desu", english: "Just looking, thanks", category: "Shopping" },

  // Transit
  { kana: "駅はどこですか", romaji: "Eki wa doko desu ka?", english: "Where is the station?", category: "Transit" },
  { kana: "渋谷までお願いします", romaji: "Shibuya made onegaishimasu", english: "To Shibuya, please (taxi)", category: "Transit" },
  { kana: "切符はどこで買えますか", romaji: "Kippu wa doko de kaemasu ka?", english: "Where can I buy a ticket?", category: "Transit" },

  // Help
  { kana: "トイレはどこですか", romaji: "Toire wa doko desu ka?", english: "Where is the toilet?", category: "Help" },
  { kana: "助けてください", romaji: "Tasukete kudasai", english: "Please help me", category: "Help" },
  { kana: "病院に行きたいです", romaji: "Byouin ni ikitai desu", english: "I'd like to go to a hospital", category: "Help" },
  { kana: "ホテルの場所がわかりません", romaji: "Hoteru no basho ga wakarimasen", english: "I can't find my hotel", category: "Help" },
];
