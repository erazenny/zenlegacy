import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-light border border-gold hover:border-gold-light",
  secondary:
    "bg-navy text-white hover:bg-navy-light border border-navy hover:border-navy-light",
  ghost:
    "bg-transparent text-navy hover:text-gold-muted border border-transparent hover:border-gold/30",
  "outline-light":
    "bg-transparent text-white border border-white/40 hover:border-gold hover:text-gold",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const isExternal = external || href.startsWith("http");
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
