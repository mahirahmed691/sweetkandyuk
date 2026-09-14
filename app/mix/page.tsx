import type { Metadata } from "next";
import { Suspense } from "react";
import { MixPicker } from "@/components/mix-picker";
import { Reveal } from "@/components/reveal";
import { MAX_MIX } from "@/lib/sweets";

export const metadata: Metadata = {
  title: "Mix",
  description: "Build a Sweet Kandy pouch from the Birmingham counter. Tap the sweets, we scoop them.",
};

export default function MixPage() {
  return (
    <div className="px-4 pb-24 pt-32 md:px-8 md:pb-36 md:pt-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50">Build-a-pouch</p>
          <h1 className="mt-4 max-w-[12ch] font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.86] tracking-[-0.07em]">
            Tap the tubs. We scoop.
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">
            Same sweets you see on the counter. Pick up to {MAX_MIX}, we pack them into one pouch from £8. No lucky dip, no leftover tub.
          </p>
        </Reveal>
        <div className="mt-16">
          <Suspense fallback={<div className="h-[48rem] rounded-[2rem] bg-ink/[0.04] ring-1 ring-ink/8" />}>
            <MixPicker />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
