import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/content";

const accentStyles = {
  education: "border-t-gold bg-white",
  protection: "border-t-navy bg-cream-dark",
  legacy: "border-t-gold/60 bg-white lg:col-span-2",
} as const;

export function ServicesPreview() {
  return (
    <section
      id="services"
      className="bg-white py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionHeader
            eyebrow={services.eyebrow}
            headline={services.headline}
            intro={services.intro}
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.categories.map((category, index) => (
            <FadeIn
              key={category.title}
              delay={index * 0.1}
              className={`border-t-4 p-8 lg:p-10 ${accentStyles[category.accent]}`}
            >
              <h3
                id={index === 0 ? "services-heading" : undefined}
                className="font-serif text-2xl text-navy"
              >
                {category.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
                {category.description}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-20">
            <h3 className="mb-10 text-center font-serif text-2xl text-navy">
              Protection Products
            </h3>
            <div className="grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
              {services.products.map((product, index) => (
                <article
                  key={product.name}
                  className={`bg-white p-7 lg:p-8 ${
                    index === 0 ? "sm:row-span-1" : ""
                  }`}
                >
                  <h4 className="font-medium text-navy">{product.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {product.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
