import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-pouch text-sugar">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Logo invert />
            <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-sugar/70">
              {site.tagline} Scooped in London, sealed in black, sent to your door.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-sugar/45">Shop</p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg text-sugar/85 transition-colors duration-500 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-sugar/45">Find us</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-lg text-sugar/85 transition-colors duration-500 hover:text-gold"
            >
              Instagram {site.handle}
            </a>
            <p className="text-lg text-sugar/70">Halal mixed sweets</p>
            <p className="text-lg text-sugar/70">Free local delivery, London</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-8 text-sm text-sugar/45 md:flex-row">
          <p>© {new Date().getFullYear()} Sweet Kandy</p>
          <p>Pick. Mix. Pouch.</p>
        </div>
      </div>
    </footer>
  );
}
