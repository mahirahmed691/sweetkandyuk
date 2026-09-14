import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/cta-link";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Sweet Kandy is a UK sweets house. Halal mixed pouches, a new mark, and the pick-and-mix counter without the circus.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="px-4 pb-16 pt-32 md:px-8 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50">The house</p>
            <h1 className="mt-4 max-w-[14ch] font-display text-[clamp(3rem,8vw,7.2rem)] font-extrabold leading-[0.86] tracking-[-0.07em]">
              Same scoop. New mark.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <div className="bezel">
              <div className="bezel-inner relative aspect-[4/5] bg-sugar-deep">
                <Image
                  src="/images/sweet-kandy-logo.png"
                  alt="Sweet Kandy wordmark and pouch mark on cream paper"
                  fill
                  quality={90}
                  className="object-contain p-6 md:p-10"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
          <Reveal className="flex min-w-0 flex-col justify-center md:col-span-5 md:col-start-8" delay={120}>
            <Logo />
            <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-ink-soft">
              Sweet Kandy started on Instagram in Birmingham: pick and mix, American candy, free local drops, nationwide in the post. The sweets were right. Cola bottles, cherries, apple pencils, sour worms. The rainbow lollipop badge was not.
            </p>
            <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-ink-soft">
              The rebrand keeps the K in Kandy and throws out the circus. The mark is the pouch: a zip, a window, three sweets. You see the mix before you open it. Halal is printed as a fact, not a sticker afterthought.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-pouch text-sugar">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-24 md:grid-cols-12 md:px-8 md:py-32">
          <Reveal className="md:col-span-4">
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">What we will not do</h2>
          </Reveal>
          <div className="md:col-span-8">
            {[
              "No gelatin roulette. If it goes in the pouch, it is halal.",
              "No lucky-dip bags stuffed with whatever is left in the tub.",
              "No shouting logos. The window does the talking.",
              "No pretending we are a supermarket. We scoop. You message. We send.",
            ].map((line, index) => (
              <Reveal key={line} delay={index * 80}>
                <p className="border-t border-white/10 py-6 text-2xl leading-snug tracking-[-0.03em] md:text-3xl">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,5vw,4.4rem)] font-extrabold leading-[0.92] tracking-[-0.05em]">
                Want a pouch on the table tonight?
              </h2>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <CtaLink href="/order">Order the mix</CtaLink>
                <CtaLink href="/drop" variant="ghost">
                  The drop
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
