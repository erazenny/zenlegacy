"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faq } from "@/lib/content";

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-white py-24 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <FadeIn>
          <SectionHeader
            eyebrow={faq.eyebrow}
            headline={faq.headline}
            intro={faq.intro}
            align="center"
          />
        </FadeIn>

        <div className="mt-14 divide-y divide-cream-dark">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={item.question} delay={index * 0.05}>
                <div className="py-1">
                  <h3 id={index === 0 ? "faq-heading" : undefined}>
                    <button
                      id={`faq-question-${index}`}
                      type="button"
                      className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-gold-muted"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span className="font-medium text-navy">{item.question}</span>
                      <span
                        className="mt-1 shrink-0 text-gold transition-transform duration-300"
                        aria-hidden="true"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-relaxed text-text-muted sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
