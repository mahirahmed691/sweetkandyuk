import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  invert?: boolean;
  withWordmark?: boolean;
};

export function PouchMark({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <svg
      viewBox="0 0 64 80"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path
        d="M20 6h24c1.2 0 2.2.9 2.2 2.1v3.2H17.8V8.1C17.8 6.9 18.8 6 20 6Z"
        fill={invert ? "#F3E6D0" : "#1A1410"}
      />
      <rect x="16" y="10.4" width="32" height="3.2" rx="1" fill={invert ? "#F3E6D0" : "#1A1410"} />
      <path
        d="M12 15.5h40c2.4 0 4.4 2 4.4 4.4v46.2c0 6.2-5.6 10.4-12.2 10.4H19.8C13.2 76.5 7.6 72.3 7.6 66.1V19.9c0-2.4 2-4.4 4.4-4.4Z"
        fill={invert ? "#F3E6D0" : "#1A1410"}
      />
      <circle cx="32" cy="47" r="16.4" fill={invert ? "#1A1410" : "#F3E6D0"} />
      <circle cx="26.2" cy="49.2" r="5" fill="#2F9E7A" />
      <circle cx="36.6" cy="43.2" r="5.4" fill="#E2B13A" />
      <circle cx="38.2" cy="53.4" r="4.6" fill="#D63A32" />
    </svg>
  );
}

export function Logo({ className, invert = false, withWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <PouchMark className="h-9 w-7" invert={invert} />
      {withWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[0.62rem] font-semibold uppercase tracking-[0.28em]",
              invert ? "text-sugar/70" : "text-ink/55",
            )}
          >
            Sweet
          </span>
          <span
            className={cn(
              "font-display text-[1.55rem] font-extrabold tracking-[-0.05em]",
              invert ? "text-sugar" : "text-ink",
            )}
          >
            Kandy
          </span>
        </span>
      ) : null}
    </span>
  );
}
