import Image from "next/image";
import Link from "next/link";
import { footer, navigation, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" aria-label={`${site.name} home`}>
              <Image
                src="/logos/ZENLEGACYLOGOPNG.png"
                alt="ZenLegacy Assurance logo"
                width={180}
                height={108}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-6 font-serif text-xl text-gold">{footer.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              {footer.mission}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.consultationHref}
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm text-white/70">
              <p>{site.founder}</p>
              <p>{site.founderTitle}</p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-gold"
                >
                  {site.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-white/40">
            {footer.disclaimer}
          </p>
          <p className="mt-6 text-xs text-white/30">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
