"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { site, upcomingEvents } from "@/lib/content";
import austinElevateFlyer from "@/public/events/austin-elevate-2026.jpeg";
import southwestRegionalFlyer from "@/public/events/southwest-regional-2026.jpeg";

const flyerImages: Record<(typeof upcomingEvents.events)[number]["slug"], StaticImageData> = {
  "austin-elevate": austinElevateFlyer,
  "southwest-regional": southwestRegionalFlyer,
};

export function UpcomingEvents() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="events"
      className="bg-white py-24 lg:py-32"
      aria-labelledby="events-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionHeader
            eyebrow={upcomingEvents.eyebrow}
            headline={upcomingEvents.headline}
            intro={upcomingEvents.intro}
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative mt-16">
            <div
              className="overflow-hidden"
              ref={emblaRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Upcoming event flyers"
            >
              <div className="flex touch-pan-y">
                {upcomingEvents.events.map((event, index) => {
                  const flyer = flyerImages[event.slug];

                  return (
                    <div
                      key={event.slug}
                      className="min-w-0 flex-[0_0_100%] px-2 sm:px-4"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${index + 1} of ${upcomingEvents.events.length}`}
                    >
                      <article className="group mx-auto max-w-3xl transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02]">
                        <div className="overflow-hidden rounded-[20px] border border-gold/30 bg-cream shadow-[0_8px_30px_rgba(12,26,46,0.08)] transition-shadow duration-500 group-hover:shadow-[0_16px_48px_rgba(12,26,46,0.14)]">
                          <div className="relative flex h-[360px] items-center justify-center bg-cream p-6 sm:h-[440px] sm:p-8 lg:h-[520px] lg:p-10">
                            <Image
                              src={flyer}
                              alt={event.alt}
                              className="max-h-full w-auto object-contain"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 768px, 896px"
                              priority={index === 0}
                            />
                          </div>
                        </div>

                        <div className="mt-8 text-center">
                          <h3
                            id={index === 0 ? "events-heading" : undefined}
                            className="font-serif text-2xl text-navy sm:text-3xl"
                          >
                            {event.title}
                          </h3>
                          <p className="mt-2 text-sm text-text-muted sm:text-base">
                            {event.description}
                          </p>
                          <div className="mt-6">
                            <Button href={site.consultationHref}>
                              {upcomingEvents.learnMoreLabel}
                            </Button>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollPrev}
              className="absolute left-2 top-[180px] z-10 flex h-11 w-11 items-center justify-center border border-gold/30 bg-white text-navy shadow-sm transition-colors duration-300 hover:border-gold hover:text-gold sm:left-0 sm:top-[220px] sm:-translate-x-1/2 lg:top-[260px]"
              aria-label="Previous event"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-2 top-[180px] z-10 flex h-11 w-11 items-center justify-center border border-gold/30 bg-white text-navy shadow-sm transition-colors duration-300 hover:border-gold hover:text-gold sm:right-0 sm:top-[220px] sm:translate-x-1/2 lg:top-[260px]"
              aria-label="Next event"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <div
              className="mt-10 flex items-center justify-center gap-3"
              role="tablist"
              aria-label="Event carousel pagination"
            >
              {upcomingEvents.events.map((event, index) => (
                <button
                  key={event.slug}
                  type="button"
                  role="tab"
                  aria-selected={selectedIndex === index}
                  aria-label={`Go to ${event.title}`}
                  onClick={() => scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold ${
                    selectedIndex === index
                      ? "w-8 bg-gold"
                      : "w-2.5 bg-navy/20 hover:bg-gold/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
