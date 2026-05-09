import BrushDivider from "@/components/BrushDivider";
import FoodChecklistItem from "@/components/FoodChecklistItem";
import { foodList, type FoodItem } from "@/data/food";

export const metadata = { title: "Food · Japan 2026" };

const ORDER: FoodItem["category"][] = [
  "Noodles",
  "Sushi & Seafood",
  "Meat & Yakitori",
  "Street & Comfort",
  "Sweets & Drinks",
  "Konbini",
];

export default function FoodPage() {
  const grouped = ORDER.map((cat) => ({
    cat,
    items: foodList.filter((f) => f.category === cat),
  }));

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <header className="text-center">
        <p className="font-serif text-xs uppercase tracking-[0.4em] text-vermillion">食</p>
        <h1 className="mt-2 font-serif text-5xl font-semibold text-aizome md:text-6xl">
          Food Bucket List
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-serif text-base text-sumi/75">
          Tap to tick. Saved on your device. Eat your way through Japan one square at a time.
        </p>
      </header>

      <BrushDivider className="my-12" />

      <div className="space-y-12">
        {grouped.map(({ cat, items }) => (
          <section key={cat}>
            <h2 className="mb-4 flex items-baseline gap-3">
              <span className="font-serif text-2xl font-semibold text-aizome">{cat}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-sumi/45">
                {items.length} items
              </span>
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {items.map((item) => (
                <FoodChecklistItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
