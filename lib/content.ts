export const site = {
  name: "ZenLegacy Assurance",
  tagline: "Peace. Protection. Legacy.",
  mission: "We identify, educate, protect, and empower.",
  description:
    "Financial education and licensed protection solutions for individuals, families, professionals, and business owners.",
  founder: "Princess Carol Atuma, MSN, LFP, SMD",
  founderTitle: "Certified Estate Plan Strategist",
  consultationHref: "https://calendly.com/pcintergratedllc/consultation",
  email: "pcintergratedllc@gmail.com",
  phone: "+1 (469) 471-1554",
  phoneHref: "tel:+14694711554",
  address: {
    street: "337 Oaks Trail",
    suite: "Suite 250",
    city: "Garland",
    state: "TX",
    zip: "75043",
  },
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  headline: "Financial clarity for the life you are building.",
  subheadline:
    "Through education and licensed protection solutions, ZenLegacy Assurance helps families and professionals prepare for the unexpected—and protect what matters most.",
  cta: "Schedule a Consultation",
  secondaryCta: "Explore Our Services",
} as const;

export const about = {
  eyebrow: "About ZenLegacy",
  headline: "Education first. Protection with purpose.",
  body: [
    "Hello, my name is Princess Carol Atuma, MSN, LFP, SMD. I am a board-certified Women's Health Nurse Practitioner, licensed financial professional, and Certified Estate Plan Strategist.",
    "Through ZenLegacy Assurance, I help individuals, families, professionals, and business owners understand how to protect their income, prepare for unexpected life events, and create a stronger financial legacy.",
    "My goal is not just to present products, but to educate people so they can make informed decisions for themselves and their families.",
  ],
  credentials: [
    "Board-Certified Women's Health Nurse Practitioner",
    "Licensed Financial Professional",
    "Certified Estate Plan Strategist",
  ],
} as const;

export const services = {
  eyebrow: "Services",
  headline: "Education and protection, tailored to your needs.",
  intro:
    "ZenLegacy Assurance provides financial education and access to licensed protection solutions—helping you understand your options before life asks you to.",
  categories: [
    {
      title: "Financial Education",
      description:
        "Income protection, living benefits, retirement income strategies, IUL education, disability protection, long-term care awareness, Medicare education, college funding, estate planning awareness, trust planning education, probate awareness, wealth transfer, and business protection.",
      accent: "education" as const,
    },
    {
      title: "Protection Solutions",
      description:
        "Term life, whole life, indexed universal life, disability insurance, long-term care, annuities, Medicare guidance, final expense protection, living benefits, mortgage protection, business owner protection, key person coverage, and estate planning guidance including trusts.",
      accent: "protection" as const,
    },
    {
      title: "Estate Planning Guidance",
      description:
        "As a Certified Estate Plan Strategist, I help individuals and families understand estate planning options—including trust planning, legacy planning, wealth transfer, probate awareness, and beneficiary coordination. Legal documents are coordinated with appropriate legal professionals when drafting or legal advice is needed.",
      accent: "legacy" as const,
    },
  ],
  products: [
    {
      name: "Term Life",
      detail: "Affordable protection for a specific period—often used for income replacement, mortgage protection, and family security.",
    },
    {
      name: "Whole Life",
      detail: "Permanent life insurance with lifetime protection and cash value features.",
    },
    {
      name: "Indexed Universal Life",
      detail: "Permanent protection with cash value growth potential linked to market indexes, without direct market participation.",
    },
    {
      name: "Disability Insurance",
      detail: "Protection designed to help replace income if illness or injury prevents you from working.",
    },
    {
      name: "Long-Term Care",
      detail: "Strategies that help prepare for the cost of extended care at home, assisted living, or nursing facilities.",
    },
    {
      name: "Annuities & Medicare",
      detail: "Retirement income strategies for protection and stability, plus education to help eligible clients understand Medicare options.",
    },
  ],
} as const;

export const whyChoose = {
  eyebrow: "Why ZenLegacy",
  headline: "A perspective shaped by healthcare and community.",
  intro:
    "ZenLegacy Assurance combines professional healthcare background, financial protection education, and community leadership.",
  points: [
    {
      title: "Healthcare-informed guidance",
      body: "As a board-certified Women's Health Nurse Practitioner, Princess Carol Atuma understands that one diagnosis, job loss, accident, or unexpected event can change a family's financial future.",
    },
    {
      title: "Education before recommendation",
      body: "The business does not simply sell products. It educates people to understand risk, protection, ownership, and legacy—so you can make informed decisions.",
    },
    {
      title: "Needs-based integrity",
      body: "Guidance is honest, professional, and centered on what you actually need. People make better decisions when they understand their options.",
    },
    {
      title: "Legacy-minded planning",
      body: "Every family deserves a plan that protects the next generation—from income protection and living benefits to estate planning strategies including trusts.",
    },
  ],
  questions: [
    "What happens if my income stops?",
    "Do I have protection if I become critically, chronically, or terminally ill?",
    "Am I depending only on my job, 401(k), or savings?",
    "Will my family inherit confusion, debt, or a legacy?",
  ],
} as const;

export const process = {
  eyebrow: "Our Approach",
  headline: "A thoughtful path from conversation to confidence.",
  intro:
    "Every relationship begins with curiosity and respect—not pressure. This is the process we follow with every client.",
  steps: [
    {
      number: "01",
      title: "Identify",
      description:
        "We find individuals, families, professionals, and business owners who may benefit from financial education or protection.",
    },
    {
      number: "02",
      title: "Invite",
      description:
        "We invite you to a conversation—whether a one-on-one consultation, Zoom session, or community event—with openness and respect.",
    },
    {
      number: "03",
      title: "Educate",
      description:
        "We explain income protection, living benefits, retirement income, tax-advantaged strategies, and legacy planning in clear terms.",
    },
    {
      number: "04",
      title: "Discover",
      description:
        "We ask thoughtful questions about your goals, concerns, protection outside your job, retirement, family security, and long-term care.",
    },
    {
      number: "05",
      title: "Recommend",
      description:
        "We offer suitable solutions based on your needs and budget—never more than you need, never less than you deserve to understand.",
    },
    {
      number: "06",
      title: "Follow Up",
      description:
        "We stay connected through continued education, reminders, and support as your life and priorities evolve.",
    },
  ],
} as const;

export const faq = {
  eyebrow: "Common Questions",
  headline: "Questions worth asking before life happens.",
  intro:
    "Financial planning is not fear—it is wisdom. These are the conversations we have with families and professionals every day.",
  items: [
    {
      question: "What does ZenLegacy Assurance actually do?",
      answer:
        "We provide financial education and access to licensed protection solutions—including term life, whole life, indexed universal life, disability insurance, long-term care, annuities, Medicare education, and estate planning strategies including trusts. Our focus is helping you understand your options so you can make informed decisions.",
    },
    {
      question: "Who do you typically work with?",
      answer:
        "We serve families, working professionals—especially nurses, doctors, teachers, and healthcare workers—business owners, high-income earners, faith-based and community groups, and career-transitioning individuals seeking financial clarity or additional income opportunities.",
    },
    {
      question: "Is this just about selling insurance?",
      answer:
        "No. Education comes first. We help you understand financial risks, protection strategies, and legacy planning. Recommendations are made only after we understand your goals, concerns, and budget.",
    },
    {
      question: "What is estate planning guidance?",
      answer:
        "As a Certified Estate Plan Strategist, Princess Carol Atuma helps individuals and families understand estate planning options—including trust planning, legacy planning, wealth transfer, probate awareness, and beneficiary coordination. When legal drafting or legal advice is needed, we coordinate with appropriate legal professionals.",
    },
    {
      question: "How do I get started?",
      answer:
        "Schedule a one-on-one consultation or attend an educational session. There is no obligation—just an opportunity to ask questions and understand your options with a licensed professional.",
    },
  ],
} as const;

export const educationalTopics = {
  eyebrow: "Education",
  headline: "Our Educational Topics",
  intro:
    "At ZenLegacy Assurance, we provide educational sessions designed to help individuals, families, and business owners make informed financial decisions with greater clarity and confidence.",
  mission:
    "Our mission is to educate, empower, and equip you with the knowledge needed to make financial decisions that align with your family's goals, business priorities, and long-term vision.",
  topics: [
    {
      title: "Income Replacement Strategies",
      description:
        "Learn ways to help protect your family's financial stability in the event of death, disability, critical illness, or another unexpected life event.",
      icon: "shield-check" as const,
    },
    {
      title: "College Funding Strategies",
      description:
        "Explore strategies for preparing for higher education and alternative funding options that may help reduce dependence on student loans.",
      icon: "graduation-cap" as const,
    },
    {
      title: "Supplemental Retirement Planning",
      description:
        "Discover strategies designed to help create additional retirement income and strengthen your long-term financial future.",
      icon: "landmark" as const,
    },
    {
      title: "Estate Planning and Legacy Preservation",
      description:
        "Understand how thoughtful planning can help protect your assets, preserve your legacy, and simplify the transfer of wealth to future generations.",
      icon: "scroll-text" as const,
    },
    {
      title: "Business Solutions",
      description:
        "Learn about staff-retention and executive-benefit strategies that can help business owners attract, reward, and retain valuable employees while supporting long-term business growth.",
      icon: "briefcase" as const,
    },
    {
      title: "Additional Income Opportunities",
      description:
        "Explore opportunities to build an additional stream of income while continuing your current career, profession, or business.",
      icon: "trending-up" as const,
    },
  ],
} as const;

export const upcomingEvents = {
  eyebrow: "Events",
  headline: "Upcoming Events",
  intro:
    "Join ZenLegacy Assurance at educational conferences, leadership events, financial literacy workshops, and community gatherings across the United States.",
  learnMoreLabel: "Learn More",
  events: [
    {
      slug: "austin-elevate",
      title: "Austin Elevate",
      description: "Educational financial empowerment event.",
      alt: "Austin Elevate event flyer — August 8, 2026 in Austin, Texas, hosted by Princess Carol Atuma, MSN, LFP",
    },
    {
      slug: "southwest-regional",
      title: "Southwest Regional Convention",
      description: "Educational financial empowerment event.",
      alt: "Southwest Regional Convention event flyer — October 16–17, 2026 in Phoenix, Arizona, hosted by Princess Carol Atuma",
    },
  ],
} as const;

export const cta = {
  headline: "Ready to understand your options?",
  body: "Schedule a one-on-one consultation to discuss income protection, legacy planning, and the strategies that fit your life—not someone else's template.",
  button: "Schedule a Consultation",
} as const;

export const footer = {
  tagline: "Peace. Protection. Legacy.",
  mission: "We identify. We educate. We protect. We empower.",
  disclaimer:
    "ZenLegacy Assurance provides financial education and access to licensed protection solutions. Insurance products are offered through licensed professionals. Estate planning documents are coordinated with appropriate legal professionals when legal drafting or legal advice is required.",
} as const;
