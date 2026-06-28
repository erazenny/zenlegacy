"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-navy pt-24 lg:pt-0"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-white/3 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl min-h-[calc(100vh-0px)] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        <div className="order-2 lg:order-1">
          <FadeIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {site.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              id="hero-heading"
              className="font-serif text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
            >
              {hero.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <GoldDivider className="my-8 !via-gold" />
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              {hero.subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-4 text-sm font-medium tracking-wide text-gold/90">
              {site.mission}
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={site.consultationHref}>{hero.cta}</Button>
              <Button href="#services" variant="outline-light">
                {hero.secondaryCta}
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 border border-gold/20 lg:-inset-6" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden bg-navy-light sm:aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src="/images/princess-carol-atuma.jpeg"
                alt="Princess Carol Atuma, MSN, LFP, SMD — Founder of ZenLegacy Assurance"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 85vw, 45vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs bg-white p-6 shadow-xl lg:block">
              <p className="font-serif text-lg text-navy">{site.founder}</p>
              <p className="mt-1 text-sm text-text-muted">{site.founderTitle}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
