import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { EducationalTopics } from "@/components/home/EducationalTopics";
import { EventsPreview } from "@/components/home/EventsPreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Process } from "@/components/home/Process";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <EducationalTopics />
      <EventsPreview />
      <WhyChoose />
      <Process />
      <FAQPreview />
      <CallToAction />
    </>
  );
}
