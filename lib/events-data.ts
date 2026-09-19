export type FlyerItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

export const eventsPage = {
  hero: {
    title: "Events & Opportunities",
    intro:
      "Stay connected with upcoming educational events, community opportunities, and ways to learn, connect, and grow with ZenLegacy Assurance.",
  },
  upcoming: {
    eyebrow: "Upcoming",
    title: "Upcoming Events",
    intro:
      "Join us at an upcoming event and connect with opportunities for education, conversation, and growth.",
    viewEventLabel: "View Event",
  },
  past: {
    eyebrow: "Archive",
    title: "Past Events",
    intro:
      "Explore events and gatherings from the ZenLegacy Assurance community.",
    emptyMessage:
      "Past events will be added here as they become available.",
  },
  opportunities: {
    eyebrow: "Grow With Us",
    title: "Opportunities",
    intro:
      "Explore opportunities to learn, build skills, serve families, and grow with purpose.",
    viewOpportunityLabel: "View Opportunity",
    learnMoreLabel: "Learn More",
    // TODO: Replace with dedicated opportunities/recruiting page when available
    ctaHref: "https://calendly.com/pcintergratedllc/consultation",
  },
  education: {
    eyebrow: "Resources",
    title: "Educational Resources",
    intro:
      "Explore educational materials designed to help families make informed financial decisions.",
    viewResourceLabel: "View Resource",
  },
  homepagePreview: {
    eyebrow: "Events",
    title: "Upcoming Events",
    intro:
      "Join us at an upcoming educational event and connect with the ZenLegacy Assurance community.",
    viewAllLabel: "View All Events & Opportunities",
    viewAllHref: "/events",
  },
} as const;

export const upcomingEvents: FlyerItem[] = [
  {
    id: "no-family-left-behind",
    title: "No Family Left Behind",
    image: "/events/upcoming/no-family-left-behind.png",
    alt: "No Family Left Behind event flyer by ZenLegacy Assurance — family protection and legacy planning services",
    width: 633,
    height: 1536,
  },
  {
    id: "lunch-and-learn",
    title: "Lunch & Learn",
    image: "/events/upcoming/lunch-and-learn.png",
    alt: "Lunch and Learn event flyer hosted by Princess Carol Atuma — financial education gathering in Allen, Texas",
    width: 1024,
    height: 1536,
  },
];

export const pastEvents: FlyerItem[] = [];

export const opportunities: FlyerItem[] = [
  {
    id: "join-our-team",
    title: "Join Our Team",
    image: "/events/opportunities/join-our-team.png",
    alt: "Join Our Team recruitment flyer by ZenLegacy Assurance — part-time and full-time professional opportunities",
    width: 2550,
    height: 3300,
  },
];

export const educationalResources: FlyerItem[] = [
  {
    id: "child-financial-protection",
    title: "Their Future Starts With Protection Today",
    image: "/events/education/child-financial-protection.png",
    alt: "Child financial protection educational resource by ZenLegacy Assurance — guidance on parent and child coverage planning",
    width: 2550,
    height: 3300,
  },
];
