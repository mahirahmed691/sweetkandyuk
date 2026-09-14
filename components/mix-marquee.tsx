import { sweets } from "@/lib/sweets";

export function MixMarquee() {
  const loop = [...sweets, ...sweets];

  return (
    <div className="overflow-hidden border-y border-ink/8 bg-gold/35 py-4">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, index) => (
          <span
            key={`${item.slug}-${index}`}
            className="font-display text-xl font-bold tracking-[-0.03em] text-ink md:text-2xl"
          >
            {item.name}
            <span className="ml-10 text-cherry">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
