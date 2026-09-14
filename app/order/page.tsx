import type { Metadata } from "next";
import { Suspense } from "react";
import { OrderForm } from "@/components/order-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order",
  description: "Order Sweet Kandy pouches for free local delivery or nationwide post. Confirm on Instagram.",
};

export default function OrderPage() {
  return (
    <div className="px-4 pb-24 pt-32 md:px-8 md:pb-36 md:pt-40">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="min-w-0 md:col-span-5">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50">The drop</p>
          <h1 className="mt-4 font-display text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.88] tracking-[-0.07em]">
            Tell us the pouch. We scoop it.
          </h1>
          <p className="mt-6 max-w-[min(42ch,100%)] text-lg leading-relaxed text-ink-soft">
            Fill this in, we copy a message, you paste it to {site.handle}. That is how Sweet Kandy already sells. The site just writes the note for you.
          </p>
          <dl className="mt-12 space-y-8">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-ink/45">Local</dt>
              <dd className="mt-2 text-xl leading-snug">Free around London. Drop your area and we will say yes or give you a time.</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-ink/45">Nationwide</dt>
              <dd className="mt-2 text-xl leading-snug">Sealed pouch in the post. Postage confirmed on the DM before we scoop.</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-ink/45">Allergies</dt>
              <dd className="mt-2 text-xl leading-snug">Put them in the notes. Mixed sweets share scoops, so tell us what cannot go in.</dd>
            </div>
          </dl>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
          <Suspense fallback={<div className="h-[36rem] rounded-[2rem] bg-ink/[0.04] ring-1 ring-ink/8" />}>
            <OrderForm />
          </Suspense>
        </Reveal>
      </div>
    </div>
  );
}
