"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { navigation, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur-md"
          : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/logos/ZENLEGACYLOGOWHITE.png"
            alt="ZenLegacy Assurance logo"
            width={200}
            height={120}
            className="h-[4.375rem] w-auto sm:h-20"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Button href={site.consultationHref} variant="primary" className="!px-5 !py-2.5 !text-xs">
            Consultation
          </Button>
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-base font-medium text-white/90 transition-colors hover:text-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <Button
                  href={site.consultationHref}
                  variant="primary"
                  className="w-full"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
