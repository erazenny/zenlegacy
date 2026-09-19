import type { Metadata } from "next";
import { EventsPageHero } from "@/components/events/EventsPageHero";
import { FlyerGallery } from "@/components/events/FlyerGallery";
import {
  educationalResources,
  eventsPage,
  opportunities,
  pastEvents,
  upcomingEvents,
} from "@/lib/events-data";

export const metadata: Metadata = {
  title: "Events & Opportunities",
  description:
    "Explore upcoming educational events, community opportunities, and resources from ZenLegacy Assurance.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events & Opportunities | ZenLegacy Assurance",
    description:
      "Explore upcoming educational events, community opportunities, and resources from ZenLegacy Assurance.",
    url: "https://zenlegacyassurance.com/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <EventsPageHero
        title={eventsPage.hero.title}
        intro={eventsPage.hero.intro}
      />

      <FlyerGallery
        eyebrow={eventsPage.upcoming.eyebrow}
        title={eventsPage.upcoming.title}
        intro={eventsPage.upcoming.intro}
        items={upcomingEvents}
        actionLabel={eventsPage.upcoming.viewEventLabel}
        variant="event"
        headingId="upcoming-events-heading"
      />

      <FlyerGallery
        id="opportunities"
        className="bg-cream"
        eyebrow={eventsPage.opportunities.eyebrow}
        title={eventsPage.opportunities.title}
        intro={eventsPage.opportunities.intro}
        items={opportunities}
        actionLabel={eventsPage.opportunities.viewOpportunityLabel}
        variant="opportunity"
        ctaHref={eventsPage.opportunities.ctaHref}
        ctaLabel={eventsPage.opportunities.learnMoreLabel}
        headingId="opportunities-heading"
      />

      <FlyerGallery
        eyebrow={eventsPage.education.eyebrow}
        title={eventsPage.education.title}
        intro={eventsPage.education.intro}
        items={educationalResources}
        actionLabel={eventsPage.education.viewResourceLabel}
        variant="resource"
        headingId="educational-resources-heading"
      />

      <FlyerGallery
        className="bg-cream"
        eyebrow={eventsPage.past.eyebrow}
        title={eventsPage.past.title}
        intro={eventsPage.past.intro}
        items={pastEvents}
        actionLabel={eventsPage.upcoming.viewEventLabel}
        variant="event"
        emptyMessage={eventsPage.past.emptyMessage}
        headingId="past-events-heading"
      />
    </>
  );
}
