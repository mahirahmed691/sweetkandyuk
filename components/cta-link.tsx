import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/cn";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "cherry" | "ink" | "ghost";
  className?: string;
  external?: boolean;
};

export function CtaLink({
  href,
  children,
  variant = "cherry",
  className,
  external,
}: CtaLinkProps) {
  const styles = {
    cherry: "bg-cherry text-sugar hover:bg-cherry-hot",
    ink: "bg-ink text-sugar hover:bg-pouch",
    ghost:
      "bg-transparent text-ink ring-1 ring-ink/12 hover:bg-ink/[0.04] hover:ring-ink/20",
  }[variant];

  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full py-2.5 pl-6 pr-2 text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-700 ease-spring active:scale-[0.98]",
        styles,
        className,
      )}
    >
      {children}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-700 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
        <ArrowUpRight size={16} weight="light" />
      </span>
    </Link>
  );
}
