"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { InstagramLogo } from "@phosphor-icons/react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";
import { nav, site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 px-4 pt-5">
        <div className="pointer-events-auto mx-auto flex w-full max-w-[1400px] items-center justify-between">
          <Link
            href="/"
            className="rounded-[1.4rem] bg-sugar/80 px-3 py-2 ring-1 ring-ink/8 backdrop-blur-xl transition-transform duration-700 ease-spring hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Sweet Kandy home"
          >
            <Logo />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 rounded-full bg-sugar/80 p-1.5 ring-1 ring-ink/8 backdrop-blur-xl md:flex"
          >
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium tracking-[-0.01em] transition-colors duration-500 ease-spring",
                    active ? "bg-ink text-sugar" : "text-ink/70 hover:bg-ink/5 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-3 py-2 text-ink/70 transition-colors duration-500 ease-spring hover:bg-ink/5 hover:text-ink"
              aria-label="Instagram"
            >
              <InstagramLogo size={18} weight="light" />
            </a>
          </nav>
        </div>
      </header>

      <button
        type="button"
        className="fixed top-5 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sugar md:hidden"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="relative h-3.5 w-5">
          <span
            className={cn(
              "absolute left-0 h-0.5 w-5 bg-sugar transition-transform duration-700 ease-spring",
              open ? "top-1.5 rotate-45" : "top-0.5",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1.5 h-0.5 w-5 bg-sugar transition-opacity duration-500",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute left-0 h-0.5 w-5 bg-sugar transition-transform duration-700 ease-spring",
              open ? "top-1.5 -rotate-45" : "top-2.5",
            )}
          />
        </span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-20 bg-pouch/88 backdrop-blur-3xl transition-opacity duration-700 ease-spring md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav
          aria-label="Mobile"
          className="flex min-h-[100dvh] flex-col justify-end gap-2 px-6 pb-16 pt-32"
        >
          {nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-display text-5xl font-extrabold tracking-[-0.05em] text-sugar transition-all duration-700 ease-spring",
                open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
              )}
              style={{ transitionDelay: open ? `${120 + index * 70}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "mt-6 text-sm uppercase tracking-[0.22em] text-sugar/70 transition-all duration-700 ease-spring",
              open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
            )}
            style={{ transitionDelay: open ? "340ms" : "0ms" }}
          >
            {site.handle}
          </a>
        </nav>
      </div>
    </>
  );
}
