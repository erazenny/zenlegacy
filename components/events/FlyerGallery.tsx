"use client";

import { useCallback, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FlyerCard } from "@/components/events/FlyerCard";
import { ImageLightbox } from "@/components/events/ImageLightbox";
import type { FlyerItem } from "@/lib/events-data";

type FlyerGalleryProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: FlyerItem[];
  actionLabel: string;
  variant?: "event" | "opportunity" | "resource";
  emptyMessage?: string;
  ctaHref?: string;
  ctaLabel?: string;
  headingId?: string;
  className?: string;
};

export function FlyerGallery({
  id,
  eyebrow,
  title,
  intro,
  items,
  actionLabel,
  variant = "event",
  emptyMessage,
  ctaHref,
  ctaLabel,
  headingId,
  className = "bg-white",
}: FlyerGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  return (
    <section
      id={id}
      className={`py-24 lg:py-32 ${className}`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionHeader
            eyebrow={eyebrow}
            headline={title}
            intro={intro}
            align="center"
            headingId={headingId}
          />
        </FadeIn>

        {items.length > 0 ? (
          <ul className="mt-16 grid list-none gap-8 md:grid-cols-2">
            {items.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.08} as="li">
                <FlyerCard
                  item={item}
                  actionLabel={actionLabel}
                  onView={() => openLightbox(index)}
                  variant={variant}
                />
              </FadeIn>
            ))}
          </ul>
        ) : (
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-16 max-w-xl text-center text-base text-text-muted">
              {emptyMessage}
            </p>
          </FadeIn>
        )}

        {ctaHref && ctaLabel && items.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="mt-12 text-center">
              <Button href={ctaHref}>{ctaLabel}</Button>
            </div>
          </FadeIn>
        )}
      </div>

      <ImageLightbox
        items={items}
        currentIndex={activeIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
