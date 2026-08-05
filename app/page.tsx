import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { EducationalTopics } from "@/components/home/EducationalTopics";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
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
      <UpcomingEvents />
      <WhyChoose />
      <Process />
      <FAQPreview />
      <CallToAction />
    </>
  );
}
