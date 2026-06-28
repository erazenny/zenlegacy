import { FadeIn } from "@/components/ui/FadeIn";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { about } from "@/lib/content";

export function AboutPreview() {
  return (
    <section
      id="about"
      className="bg-cream py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 lg:pt-4">
            <FadeIn>
              <SectionHeader
                eyebrow={about.eyebrow}
                headline={about.headline}
              />
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.15}>
              <div className="space-y-6 text-base leading-relaxed text-text-muted sm:text-lg">
                {about.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <GoldDivider className="my-10" />
            </FadeIn>

            <FadeIn delay={0.35}>
              <ul className="grid gap-4 sm:grid-cols-2" aria-label="Credentials">
                {about.credentials.map((credential) => (
                  <li
                    key={credential}
                    className="flex items-start gap-3 border-l-2 border-gold/40 pl-4"
                  >
                    <span className="text-sm leading-relaxed text-navy">
                      {credential}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
