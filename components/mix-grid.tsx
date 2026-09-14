import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { mixSpans, sweets } from "@/lib/sweets";

export function MixGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
      {sweets.map((sweet, index) => (
        <Reveal
          key={sweet.slug}
          delay={index * 40}
          className={`min-w-0 ${mixSpans[index] ?? "md:col-span-3"}`}
        >
          <Link href={`/mix?add=${sweet.slug}`} className="group block">
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
                  quality={90}
                  className="object-cover transition-transform duration-700 ease-spring group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
              </div>
            </div>
            <span className="mt-3 flex items-baseline justify-between gap-2 px-1">
              <span className="text-sm text-ink/60">{sweet.name}</span>
              <span className="text-[0.65rem] uppercase tracking-[0.16em] text-ink/30 transition-colors duration-500 group-hover:text-cherry">
                Add
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
