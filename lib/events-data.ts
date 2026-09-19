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
    id: "lunch-and-learn",
    title: "Lunch & Learn",
    image: "/events/upcoming/lunch-and-learn.png",
    alt: "Lunch and Learn event flyer hosted by Princess Carol Atuma — September 19–20 in Allen, Texas",
    width: 1024,
    height: 1536,
  },
  {
    id: "men-and-money",
    title: "Men and Money",
    image: "/events/upcoming/men-and-money.png",
    alt: "Men and Money virtual event flyer — September 26 with Pastor Engr. Israel Udoka and Wisdom Abikure, hosted by ZenLegacy Assurance",
    width: 1054,
    height: 1492,
  },
];

export const pastEvents: FlyerItem[] = [
  {
    id: "austin-elevate-2026",
    title: "Austin Elevate 2026",
    image: "/events/past/austin-elevate-2026.jpeg",
    alt: "Austin Elevate 2026 event flyer — August 8, 2026 in Austin, Texas, hosted by Princess Carol Atuma, MSN, LFP",
    width: 1054,
    height: 1492,
  },
  {
    id: "southwest-regional-2026",
    title: "Southwest Regional Convention 2026",
    image: "/events/past/southwest-regional-2026.jpeg",
    alt: "Southwest Regional Convention 2026 event flyer — October 16–17, 2026 in Phoenix, Arizona, hosted by Princess Carol Atuma",
    width: 1023,
    height: 1537,
  },
];

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
