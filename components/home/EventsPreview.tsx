"use client";

import { useCallback, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FlyerCard } from "@/components/events/FlyerCard";
import { ImageLightbox } from "@/components/events/ImageLightbox";
import { eventsPage, upcomingEvents } from "@/lib/events-data";

export function EventsPreview() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const preview = upcomingEvents;

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  }, []);

  return (
    <section
      id="events"
      className="bg-white py-24 lg:py-32"
      aria-labelledby="events-preview-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionHeader
            eyebrow={eventsPage.homepagePreview.eyebrow}
            headline={eventsPage.homepagePreview.title}
            intro={eventsPage.homepagePreview.intro}
            align="center"
            headingId="events-preview-heading"
          />
        </FadeIn>

        <ul className="mt-16 grid list-none gap-8 md:grid-cols-2">
          {preview.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08} as="li">
              <FlyerCard
                item={item}
                actionLabel={eventsPage.upcoming.viewEventLabel}
                onView={() => openLightbox(index)}
                variant="event"
              />
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <Button href={eventsPage.homepagePreview.viewAllHref}>
              {eventsPage.homepagePreview.viewAllLabel}
            </Button>
          </div>
        </FadeIn>
      </div>

      <ImageLightbox
        items={preview}
        currentIndex={activeIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
