export type Product = {
  slug: string;
  name: string;
  price: string;
  weight: string;
  blurb: string;
  detail: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    slug: "classic",
    name: "Classic Mix",
    price: "£6.50",
    weight: "250g",
    tag: "House pouch",
    blurb: "Cola bottles, foam strawberries, peaches, fried eggs. The scoop we pack without thinking.",
    detail:
      "The house mix from the London counter. Soft foam, chewy bottles, a little sour, a little creamy. The pouch people reorder.",
    image: "/images/mix/bright-mix.jpg",
  },
  {
    slug: "sour",
    name: "Sour Mix",
    price: "£6.50",
    weight: "250g",
    tag: "Face-puckering",
    blurb: "Sour worms, sour bears, peach bottles, the mix that makes you blink twice.",
    detail:
      "Lime dust, cherry bite, neon gummies. Packed for people who call classic too polite.",
    image: "/images/mix/sour-mix.jpg",
  },
  {
    slug: "american",
    name: "American Mix",
    price: "£7.50",
    weight: "250g",
    tag: "Louder",
    blurb: "The imported cupboard. Chews, hard sweets, the colours UK cornershops do not keep.",
    detail:
      "American candy we actually like eating. No filler bars, no mystery powder. The loud stuff, mixed and sealed.",
    image: "/images/mix/fruit-slices.jpg",
  },
  {
    slug: "kilo",
    name: "Kilo Pouch",
    price: "£16",
    weight: "1kg",
    tag: "Big bag",
    blurb: "A proper share pouch. Same scoop, four times the sweets.",
    detail:
      "For the table, the car, the night in. Tell us classic, sour, or a custom mix and we fill a kilo.",
    image: "/images/mix/pouches-spill.jpg",
  },
  {
    slug: "box",
    name: "Gift Box",
    price: "£15",
    weight: "compartments",
    tag: "Ribboned",
    blurb: "A windowed box of mixed sweets, split so everyone gets a favourite.",
    detail:
      "Pick and mix, boxed. Ribbon on, ready to hand over. Say if it is a gift and we keep the receipt out of the bag.",
    image: "/images/mix/gift-boxes.jpg",
  },
  {
    slug: "build",
    name: "Build-a-Pouch",
    price: "from £8",
    weight: "you decide",
    tag: "Pick & mix",
    blurb: "You name the sweets. Apple pencils only, no banana, extra sour. We scoop it.",
    detail:
      "Message the mix. We pack from the same tubs you see on the grid: cola bottles, cherries, rainbow belts, blue raspberries, the lot.",
    image: "/images/mix/cherries.jpg",
  },
];
