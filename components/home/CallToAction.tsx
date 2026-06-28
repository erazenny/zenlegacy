import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { cta, site } from "@/lib/content";

export function CallToAction() {
  return (
    <section
      id="consultation"
      className="relative overflow-hidden bg-navy py-24 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,162,101,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <FadeIn>
          <h2
            id="cta-heading"
            className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            {cta.headline}
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {cta.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-10">
            <Button href={site.consultationHref}>{cta.button}</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
