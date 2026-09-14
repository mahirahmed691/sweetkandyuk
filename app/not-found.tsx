import Link from "next/link";
import { CtaLink } from "@/components/cta-link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col justify-end px-4 pb-24 pt-40 md:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50">404</p>
        <h1 className="mt-4 max-w-[12ch] font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.86] tracking-[-0.07em]">
          That pouch is not here.
        </h1>
        <p className="mt-6 max-w-[40ch] text-lg text-ink-soft">
          The mix you wanted wandered off. Back to the counter.
        </p>
        <div className="mt-10">
          <CtaLink href="/">
            Go home
          </CtaLink>
        </div>
        <p className="mt-6 text-sm text-ink/45">
          Or <Link href="/pouches" className="underline decoration-cherry/50 underline-offset-4">see the pouches</Link>.
        </p>
      </div>
    </div>
  );
}
