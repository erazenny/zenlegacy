import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenlegacyassurance.com"),

  title: {
    default: "ZenLegacy Assurance | Peace. Protection. Legacy.",
    template: "%s | ZenLegacy Assurance",
  },

  description:
    "ZenLegacy Assurance helps individuals, families, professionals, and business owners build financial confidence through education, life insurance, estate planning awareness, retirement strategies, Medicare education, and licensed protection solutions.",

  applicationName: "ZenLegacy Assurance",

  creator: "Princess Carol Atuma",

  publisher: "ZenLegacy Assurance",

  authors: [
    {
      name: "Princess Carol Atuma",
    },
  ],

  category: "Financial Services",

  keywords: [
    "financial education",
    "life insurance",
    "income protection",
    "living benefits",
    "estate planning",
    "trust planning",
    "retirement planning",
    "wealth transfer",
    "Medicare education",
    "long-term care",
    "disability insurance",
    "business protection",
    "legacy planning",
    "Garland TX financial advisor",
    "Dallas life insurance",
    "Texas financial services",
    "financial services Garland",
    "financial advisor Texas",
    "financial advisor around DFW",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",

    url: "https://zenlegacyassurance.com",

    siteName: "ZenLegacy Assurance",

    title: "ZenLegacy Assurance | Peace. Protection. Legacy.",

    description:
      "Financial education and licensed protection solutions helping families and professionals prepare for life's unexpected moments.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZenLegacy Assurance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "ZenLegacy Assurance | Peace. Protection. Legacy.",

    description:
      "Financial education and licensed protection solutions.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-navy focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
