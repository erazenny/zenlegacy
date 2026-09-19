import { FadeIn } from "@/components/ui/FadeIn";
import { GoldDivider } from "@/components/ui/GoldDivider";

type EventsPageHeroProps = {
  title: string;
  intro: string;
};

export function EventsPageHero({ title, intro }: EventsPageHeroProps) {
  return (
    <section
      className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
      aria-labelledby="events-page-heading"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Community
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            id="events-page-heading"
            className="font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <GoldDivider className="mx-auto my-8 !via-gold" />
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            {intro}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
