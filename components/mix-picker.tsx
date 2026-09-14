"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Check } from "@phosphor-icons/react";
import { CtaLink } from "@/components/cta-link";
import { cn } from "@/lib/cn";
import { MAX_MIX, mixLabel, mixQuery, mixSpans, parseMixParam, sweets, type SweetSlug } from "@/lib/sweets";

export function MixPicker() {
  const searchParams = useSearchParams();
  const [picked, setPicked] = useState<SweetSlug[]>(() => {
    const fromSweets = parseMixParam(searchParams.get("sweets"));
    if (fromSweets.length) return fromSweets;
    return parseMixParam(searchParams.get("add"));
  });
  const [full, setFull] = useState(false);

  const names = useMemo(() => mixLabel(picked), [picked]);
  const href = picked.length
    ? `/order?pouch=build&sweets=${encodeURIComponent(mixQuery(picked))}`
    : "/order?pouch=build";

  function toggle(slug: SweetSlug) {
    setPicked((current) => {
      if (current.includes(slug)) {
        setFull(false);
        return current.filter((item) => item !== slug);
      }
      if (current.length >= MAX_MIX) {
        setFull(true);
        return current;
      }
      setFull(false);
      return [...current, slug];
    });
  }

  return (
    <div className={picked.length ? "pb-36" : undefined}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
        {sweets.map((sweet, index) => {
          const selected = picked.includes(sweet.slug);
          return (
            <div key={sweet.slug} className={`min-w-0 ${mixSpans[index] ?? "md:col-span-3"}`}>
              <button
                type="button"
                onClick={() => toggle(sweet.slug)}
                aria-pressed={selected}
                aria-label={selected ? `Remove ${sweet.name} from the pouch` : `Add ${sweet.name} to the pouch`}
                className="group block w-full text-left"
              >
                <div className={cn("bezel transition-shadow duration-500", selected && "bg-cherry/15 shadow-[0_0_0_1px_var(--cherry)]")}>
                  <div
                    className={cn(
                      "bezel-inner relative bg-sugar-deep",
                      index === 0 ? "aspect-[4/5] md:aspect-[6/7]" : "aspect-square",
                    )}
                  >
                    <Image
                      src={sweet.image}
                      alt=""
                      fill
                      quality={90}
                      className="object-cover transition-transform duration-700 ease-spring group-hover:scale-[1.03] group-active:scale-[0.98]"
                      sizes="(max-width: 768px) 50vw, 40vw"
                    />
                    <span
                      className={cn(
                        "absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cherry text-sugar shadow-[0_8px_20px_-8px_oklch(0.55_0.19_25)] transition-all duration-500 ease-spring",
                        selected ? "scale-100 opacity-100" : "scale-75 opacity-0",
                      )}
                    >
                      <Check size={16} weight="bold" />
                    </span>
                  </div>
                </div>
                <span className="mt-3 flex items-baseline justify-between gap-2 px-1">
                  <span className="text-sm text-ink/60">{sweet.name}</span>
                  {selected ? (
                    <span className="text-[0.65rem] uppercase tracking-[0.16em] text-cherry">In the pouch</span>
                  ) : null}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {picked.length ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:px-8">
          <div className="pointer-events-auto mx-auto flex max-w-[720px] items-center justify-between gap-3 rounded-[1.7rem] bg-pouch p-2 pl-4 text-sugar ring-1 ring-white/10 md:gap-4 md:pl-5">
            <div className="min-w-0">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-sugar/50">
                {picked.length} of {MAX_MIX}
                {full ? " · pouch is full" : ""}
              </p>
              <p className="truncate font-display text-lg font-bold tracking-[-0.03em]">{names}</p>
            </div>
            <CtaLink href={href} className="shrink-0">
              Scoop it
            </CtaLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
