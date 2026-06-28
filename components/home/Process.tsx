"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section
      id="process"
      className="bg-cream py-24 lg:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionHeader
            eyebrow={process.eyebrow}
            headline={process.headline}
            intro={process.intro}
          />
        </FadeIn>

        <ol className="relative mt-16 space-y-0 lg:mt-20">
          {process.steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.06} as="li">
              <div className="group grid gap-6 pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-16">
                <div className="flex items-baseline gap-4 lg:col-span-3">
                  <span
                    className="font-serif text-4xl text-gold/40 transition-colors duration-500 group-hover:text-gold lg:text-5xl"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3
                    id={index === 0 ? "process-heading" : undefined}
                    className="font-serif text-xl text-navy lg:text-2xl"
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-text-muted sm:text-base lg:col-span-8 lg:col-start-5 lg:pt-2">
                  {step.description}
                </p>
                {index < process.steps.length - 1 && (
                  <div
                    className="hidden lg:col-span-1 lg:col-start-1 lg:block"
                    aria-hidden="true"
                  >
                    <div className="ml-5 h-full w-px bg-gold/20" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
