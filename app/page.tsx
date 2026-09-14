import Image from "next/image";
import Link from "next/link";
import { SealCheck } from "@phosphor-icons/react/ssr";
import { CtaLink } from "@/components/cta-link";
import { MixGrid } from "@/components/mix-grid";
import { MixMarquee } from "@/components/mix-marquee";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const notes = [
  {
    name: "Amina Qureshi",
    text: "Finally a mix I can actually eat. The pouch lasted two films and a train ride.",
  },
  {
    name: "Callum Reid",
    text: "American mix is dangerous. Third order this month. Stop being good.",
  },
  {
    name: "Yasmin Begum",
    text: "Halal, and it doesn't taste like an afterthought. That's the whole point.",
  },
];

const ritual = [
  {
    n: "01",
    title: "Pick a pouch",
    text: "Classic, sour, American, or you name the sweets and we scoop.",
  },
  {
    n: "02",
    title: "Drop your area",
    text: "London is free. Further out goes in the post. We confirm on Instagram.",
  },
  {
    n: "03",
    title: "We seal it",
    text: "Fresh scoop, black pouch, window so you can see the mix before you rip it.",
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex min-h-[100dvh] flex-col">
        <section className="relative flex flex-1 items-center overflow-x-clip px-4 pb-10 pt-32 md:px-8 md:pt-36">
          <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 md:grid-cols-12 md:gap-8">
            <div className="min-w-0 md:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-ink/[0.04] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink/70 ring-1 ring-ink/8">
                <SealCheck size={14} weight="light" />
                Halal · {site.city}
              </p>
              <h1 className="mt-6 max-w-[9ch] font-display text-[clamp(2.8rem,12vw,8.2rem)] font-extrabold leading-[0.88] tracking-[-0.06em] text-ink">
                Halal mix.
                <br />
                <span className="text-cherry">Proper pouches.</span>
              </h1>
              <p className="mt-8 max-w-[min(42ch,100%)] text-lg leading-relaxed text-ink-soft md:text-xl">
                London pick and mix, scooped into matte black pouches. Cola bottles, cherries, sour worms, apple pencils. Halal. Local drops. Nationwide in the post.
              </p>
              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <CtaLink href="/pouches">Shop pouches</CtaLink>
                <CtaLink href="/order" variant="ghost">
                  Order a mix
                </CtaLink>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="bezel md:rotate-2">
                <div className="bezel-inner relative aspect-[4/5] bg-sugar-deep">
                  <Image
                    src="/images/pouch-classic.png"
                    alt="Sweet Kandy classic mix pouch standing on sugar paper, sweets visible through the window"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <MixMarquee />
      </div>

      <section className="px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50">The counter</p>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[0.92] tracking-[-0.05em]">
              Scooped like pick and mix. Packed like a drop.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 md:pt-16" delay={120}>
            <p className="max-w-[48ch] text-lg leading-relaxed text-ink-soft">
              The old logo was lollipops and noise. The product was always the mix: cola bottles, cherries, peach rings, sour bears, packed from the tubs in {site.city}. That is the brand now. You see the sweets. We keep the scoop honest.
            </p>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">
              Classic for the table. Sour for the dare. American when you want the loud cupboard. A kilo when the night is long. Or you name the sweets and we build it.
            </p>
          </Reveal>
          <Reveal className="md:col-span-12" delay={80}>
            <MixGrid />
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-[12ch] font-display text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[0.92] tracking-[-0.05em]">
                The pouch, the kilo, the box.
              </h2>
              <Link
                href="/pouches"
                className="text-sm font-medium text-cherry transition-colors duration-500 hover:text-cherry-hot"
              >
                See every mix
              </Link>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-12">
            {products.map((product, index) => {
              const wide = index === 0 || index === 3;
              return (
                <Reveal
                  key={product.slug}
                  delay={index * 80}
                  className={wide ? "md:col-span-7" : "md:col-span-5"}
                >
                  <Link href="/pouches" className="group block">
                    <div className="bezel">
                      <div
                        className={`bezel-inner relative ${wide ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-square"} bg-sugar-deep`}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-spring group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-4 px-2 pt-5">
                      <div>
                        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ink/45">
                          {product.tag}
                        </p>
                        <h3 className="mt-1 font-display text-3xl font-extrabold tracking-[-0.04em]">
                          {product.name}
                        </h3>
                        <p className="mt-2 max-w-[36ch] text-ink-soft">{product.blurb}</p>
                      </div>
                      <p className="shrink-0 pt-6 font-display text-xl font-bold">{product.price}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-pouch text-sugar">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-24 md:grid-cols-12 md:px-8 md:py-36">
          <Reveal className="md:col-span-5">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] font-extrabold leading-[0.92] tracking-[-0.05em]">
              See the sweets, not the circus.
            </h2>
            <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-sugar/70">
              Rebrand, on purpose. We kept the K in Kandy, killed the lollipop badge, and made the pouch the mark. Window, zip, mix.
            </p>
          </Reveal>
          <Reveal className="md:col-span-7" delay={120}>
            <div className="rounded-[2rem] bg-white/5 p-1.5 ring-1 ring-white/10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[calc(2rem-0.4rem)]">
                <Image
                  src="/images/sweets-spill.png"
                  alt="Mixed gummy sweets spilling from a torn black pouch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="max-w-[10ch] font-display text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[0.92] tracking-[-0.05em]">
              How a pouch gets to you
            </h2>
          </Reveal>
          <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
            {ritual.map((step, index) => (
              <Reveal key={step.n} delay={index * 90}>
                <div className="grid gap-4 py-10 md:grid-cols-12 md:items-baseline">
                  <p className="font-display text-5xl font-extrabold tracking-[-0.06em] text-cherry md:col-span-2">
                    {step.n}
                  </p>
                  <h3 className="font-display text-3xl font-extrabold tracking-[-0.04em] md:col-span-4">
                    {step.title}
                  </h3>
                  <p className="max-w-[min(42ch,100%)] text-lg leading-relaxed text-ink-soft md:col-span-6">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold leading-[0.92] tracking-[-0.05em]">
              From the group chat
            </h2>
          </Reveal>
          <div className="flex flex-col gap-10 md:col-span-8">
            {notes.map((note, index) => (
              <Reveal key={note.name} delay={index * 100}>
                <blockquote className={`max-w-[28ch] ${index === 1 ? "md:ml-24" : index === 2 ? "md:ml-8" : ""}`}>
                  <p className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.03em] md:text-4xl">
                    {note.text}
                  </p>
                  <footer className="mt-4 text-sm text-ink/50">{note.name}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cherry text-sugar">
        <div className="mx-auto flex min-h-[70dvh] max-w-[1400px] flex-col justify-between gap-12 px-4 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-sugar/70">The drop</p>
            <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.86] tracking-[-0.07em]">
              Free local in London. Nationwide in the post.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-[40ch] text-lg leading-relaxed text-sugar/85">
                Tell us the pouch and the postcode. We confirm on {site.handle}, scoop, seal, and send.
              </p>
              <CtaLink href="/order" variant="ink">
                Start an order
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
