import Image from "next/image";
import { sweets } from "@/lib/sweets";
import { Reveal } from "@/components/reveal";

const spans = [
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

export function MixGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
      {sweets.map((sweet, index) => (
        <Reveal
          key={sweet.slug}
          delay={index * 40}
          className={`min-w-0 ${spans[index] ?? "md:col-span-3"}`}
        >
          <figure>
            <div className="bezel">
              <div
                className={`bezel-inner relative ${
                  index === 0 ? "aspect-[4/5] md:aspect-[6/7]" : "aspect-square"
                } bg-sugar-deep`}
              >
                <Image
                  src={sweet.image}
                  alt={sweet.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
              </div>
            </div>
            <figcaption className="px-1 pt-3 text-sm text-ink/60">{sweet.name}</figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
