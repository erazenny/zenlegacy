import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyChoose } from "@/lib/content";

export function WhyChoose() {
  return (
    <section
      className="bg-navy py-24 lg:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionHeader
            eyebrow={whyChoose.eyebrow}
            headline={whyChoose.headline}
            intro={whyChoose.intro}
            light
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {whyChoose.points.map((point, index) => (
            <FadeIn
              key={point.title}
              delay={index * 0.08}
              className="group border border-white/10 p-8 transition-colors duration-500 hover:border-gold/30 lg:p-10"
            >
              <h3
                id={index === 0 ? "why-heading" : undefined}
                className="font-serif text-xl text-white transition-colors group-hover:text-gold"
              >
                {point.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                {point.body}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <aside
            className="mt-20 border border-gold/20 bg-navy-light p-8 lg:p-12"
            aria-label="Questions we help you answer"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Questions worth considering
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {whyChoose.questions.map((question) => (
                <li
                  key={question}
                  className="flex items-start gap-3 text-sm text-white/80 sm:text-base"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {question}
                </li>
              ))}
            </ul>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}
