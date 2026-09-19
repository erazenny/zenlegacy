"use client";

import Image from "next/image";
import type { FlyerItem } from "@/lib/events-data";

type FlyerCardVariant = "event" | "opportunity" | "resource";

type FlyerCardProps = {
  item: FlyerItem;
  actionLabel: string;
  onView: () => void;
  variant?: FlyerCardVariant;
};

const variantStyles: Record<FlyerCardVariant, string> = {
  event:
    "border-gold/30 bg-white shadow-[0_8px_30px_rgba(12,26,46,0.08)] hover:shadow-[0_16px_48px_rgba(12,26,46,0.14)]",
  opportunity:
    "border-navy/20 bg-cream-dark shadow-[0_8px_30px_rgba(12,26,46,0.06)] hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(12,26,46,0.12)]",
  resource:
    "border-gold/20 bg-white shadow-[0_8px_30px_rgba(12,26,46,0.08)] hover:shadow-[0_16px_48px_rgba(12,26,46,0.14)]",
};

export function FlyerCard({
  item,
  actionLabel,
  onView,
  variant = "event",
}: FlyerCardProps) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[20px] border transition-all duration-500 hover:-translate-y-1 ${variantStyles[variant]}`}
    >
      <button
        type="button"
        onClick={onView}
        className="flex flex-1 flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
        aria-label={`${actionLabel}: ${item.title}`}
      >
        <div className="flex items-center justify-center bg-cream p-6 sm:p-8">
          <Image
            src={item.image}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="h-auto w-full max-w-sm object-contain transition-transform duration-500 group-hover:scale-[1.02] sm:max-w-md"
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 480px"
          />
        </div>
      </button>

      <div className="border-t border-gold/10 px-6 py-5 sm:px-8 sm:py-6">
        <h3 className="font-serif text-xl text-navy sm:text-2xl">{item.title}</h3>
        <button
          type="button"
          onClick={onView}
          className="mt-4 text-sm font-medium tracking-wide text-gold-muted transition-colors hover:text-gold"
        >
          {actionLabel} →
        </button>
      </div>
    </article>
  );
}
