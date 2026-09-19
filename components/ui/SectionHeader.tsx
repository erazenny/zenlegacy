import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  headline: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
  headingId?: string;
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  headline,
  intro,
  align = "left",
  light = false,
  headingId,
  children,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const maxWidth = align === "center" ? "max-w-2xl" : "max-w-xl";

  return (
    <header className={`${alignClass} ${maxWidth}`}>
      <p
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? "text-gold" : "text-gold-muted"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className={`font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {headline}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/75" : "text-text-muted"
          }`}
        >
          {intro}
        </p>
      )}
      {children}
    </header>
  );
}
