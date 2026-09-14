import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { dropFaqs } from "@/lib/drop";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The drop",
  description: "Halal pouches, free Birmingham drops, nationwide post, and how Sweet Kandy takes an order.",
};

export default function DropPage() {
  return (
    <div>
      <section className="px-4 pb-16 pt-32 md:px-8 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50">The drop</p>
            <h1 className="mt-4 max-w-[14ch] font-display text-[clamp(3rem,8vw,7.2rem)] font-extrabold leading-[0.86] tracking-[-0.07em]">
              Halal in the pouch. Free around {site.city}.
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">
              The shop still finishes on Instagram. The site is here so you can see the mix, the area, and the facts before you message {site.handle}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {dropFaqs.map((item, index) => (
              <Reveal key={item.q} delay={index * 70}>
                <div className="grid gap-4 py-10 md:grid-cols-12 md:items-baseline">
                  <h2 className="font-display text-3xl font-extrabold tracking-[-0.04em] md:col-span-5">
                    {item.q}
                  </h2>
                  <p className="max-w-[min(46ch,100%)] text-lg leading-relaxed text-ink-soft md:col-span-7">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pouch text-sugar">
        <div className="mx-auto flex min-h-[50dvh] max-w-[1400px] flex-col justify-between gap-12 px-4 py-24 md:px-8 md:py-32">
          <Reveal>
            <h2 className="max-w-[14ch] font-display text-[clamp(2.6rem,6vw,5.4rem)] font-extrabold leading-[0.88] tracking-[-0.06em]">
              Ready when you have a postcode.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaLink href="/mix">Build a pouch</CtaLink>
              <CtaLink href="/order" variant="ghostOnDark">
                Skip to the note
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
