import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Pouches",
  description: "Classic, sour, American, kilo, gift box, or a build-your-own Birmingham pick and mix. Halal pouches.",
};

export default function PouchesPage() {
  return (
    <div className="px-4 pb-24 pt-32 md:px-8 md:pb-36 md:pt-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50">The mix</p>
          <h1 className="mt-4 max-w-[12ch] font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.86] tracking-[-0.07em]">
            Pouches, kilos, boxes.
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">
            Birmingham pick and mix, packed to order. Every pouch is halal. You see the sweets: cola bottles, cherries, sour worms, apple pencils. No lucky dips.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {products.map((product, index) => {
            const flip = index % 2 === 1;
            return (
              <Reveal key={product.slug} delay={40}>
                <article className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
                  <div className={flip ? "md:col-span-6 md:order-2" : "md:col-span-6"}>
                    <div className="bezel">
                      <div className="bezel-inner relative aspect-[4/5] bg-sugar-deep md:aspect-square">
                        <Image
                          src={product.image}
                          alt={`${product.name} by Sweet Kandy`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={flip ? "min-w-0 md:col-span-5 md:order-1" : "min-w-0 md:col-span-5 md:col-start-8"}>
                    {product.tag ? (
                      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-cherry">{product.tag}</p>
                    ) : null}
                    <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">
                      {product.name}
                    </h2>
                    <p className="mt-2 font-display text-2xl font-bold">
                      {product.price}
                      <span className="ml-3 text-base font-medium text-ink/45">{product.weight}</span>
                    </p>
                    <p className="mt-6 max-w-[min(42ch,100%)] text-lg leading-relaxed text-ink-soft">{product.detail}</p>
                    <div className="mt-8">
                      <CtaLink href={`/order?pouch=${product.slug}`}>Order this pouch</CtaLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
