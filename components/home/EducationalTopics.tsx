import {
  Briefcase,
  GraduationCap,
  Landmark,
  ScrollText,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { educationalTopics } from "@/lib/content";

const iconMap: Record<(typeof educationalTopics.topics)[number]["icon"], LucideIcon> = {
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  landmark: Landmark,
  "scroll-text": ScrollText,
  briefcase: Briefcase,
  "trending-up": TrendingUp,
};

export function EducationalTopics() {
  return (
    <section
      id="topics"
      className="bg-cream py-24 lg:py-32"
      aria-labelledby="topics-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionHeader
            eyebrow={educationalTopics.eyebrow}
            headline={educationalTopics.headline}
            intro={educationalTopics.intro}
            align="center"
          />
        </FadeIn>

        <ul className="mt-16 grid list-none gap-6 md:grid-cols-2">
          {educationalTopics.topics.map((topic, index) => {
            const Icon = iconMap[topic.icon];

            return (
              <FadeIn key={topic.title} delay={index * 0.08} as="li">
                <article className="group h-full border border-cream-dark bg-white p-8 transition-colors duration-500 hover:border-gold/30 lg:p-10">
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center border border-gold/20 text-gold transition-colors duration-500 group-hover:border-gold/40 group-hover:text-gold-muted"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3
                    id={index === 0 ? "topics-heading" : undefined}
                    className="font-serif text-xl text-navy transition-colors duration-500 group-hover:text-gold-muted lg:text-2xl"
                  >
                    {topic.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
                    {topic.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </ul>

        <FadeIn delay={0.3}>
          <blockquote
            className="mx-auto mt-20 max-w-3xl border border-gold/20 bg-cream-dark p-8 text-center lg:p-12"
            cite="/"
          >
            <p className="font-serif text-lg leading-relaxed text-navy sm:text-xl">
              &ldquo;{educationalTopics.mission}&rdquo;
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
