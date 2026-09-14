export const MAX_MIX = 8;

export const mixSpans = [
  "md:col-span-6 md:row-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-6",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-6",
  "md:col-span-3",
  "md:col-span-6",
  "md:col-span-6",
];

export const sweets = [
  { slug: "cola-bottles", name: "Cola bottles", image: "/images/mix/cola-bottles.jpg" },
  { slug: "cherries", name: "Cherries", image: "/images/mix/cherries.jpg" },
  { slug: "apple-pencils", name: "Apple pencils", image: "/images/mix/apple-pencils.jpg" },
  { slug: "peach-rings", name: "Peach rings", image: "/images/mix/peach-rings.jpg" },
  { slug: "sour-worms", name: "Sour worms", image: "/images/mix/sour-worms.jpg" },
  { slug: "blue-raspberries", name: "Blue raspberries", image: "/images/mix/blue-raspberries.jpg" },
  { slug: "rainbow-belts", name: "Rainbow belts", image: "/images/mix/rainbow-belts.jpg" },
  { slug: "foam-strawberries", name: "Foam strawberries", image: "/images/mix/foam-strawberries.jpg" },
  { slug: "fizzy-cola", name: "Fizzy cola", image: "/images/mix/fizzy-cola.jpg" },
  { slug: "sour-bears", name: "Sour bears", image: "/images/mix/sour-bears.jpg" },
  { slug: "orange-pencils", name: "Orange pencils", image: "/images/mix/orange-pencils.jpg" },
  { slug: "blue-berries", name: "Blue berries", image: "/images/mix/blue-berries.jpg" },
] as const;

export type SweetSlug = (typeof sweets)[number]["slug"];

const allowed = new Set<string>(sweets.map((sweet) => sweet.slug));

export function parseMixParam(value: string | null | undefined): SweetSlug[] {
  if (!value) return [];

  const unique: SweetSlug[] = [];
  for (const part of value.split(",")) {
    const slug = part.trim();
    if (!allowed.has(slug) || unique.includes(slug as SweetSlug)) continue;
    unique.push(slug as SweetSlug);
    if (unique.length >= MAX_MIX) break;
  }
  return unique;
}

export function mixLabel(slugs: readonly string[]) {
  return slugs
    .flatMap((slug) => {
      const sweet = sweets.find((item) => item.slug === slug);
      return sweet ? [sweet.name] : [];
    })
    .join(", ");
}

export function mixQuery(slugs: readonly string[]) {
  return slugs.join(",");
}
