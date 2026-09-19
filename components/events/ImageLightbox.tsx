"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { FlyerItem } from "@/lib/events-data";

type ImageLightboxProps = {
  items: FlyerItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function ImageLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const item = items[currentIndex];
  const hasMultiple = items.length > 1;

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasMultiple) goPrev();
      if (event.key === "ArrowRight" && hasMultiple) goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, goPrev, goNext, hasMultiple]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${item.title}`}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close viewer"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="font-serif text-lg text-white sm:text-xl">{item.title}</p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:border-gold hover:text-gold"
            aria-label="Close viewer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[20px] border border-gold/30 bg-cream p-4 sm:p-6">
          <Image
            src={item.image}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="max-h-[calc(90vh-8rem)] w-auto max-w-full object-contain"
            sizes="(max-width: 768px) 95vw, 896px"
            priority
          />
        </div>

        {hasMultiple && (
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center border border-gold/30 bg-white text-navy transition-colors hover:border-gold hover:text-gold"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="text-sm text-white/70">
              {currentIndex + 1} of {items.length}
            </span>
            <button
              type="button"
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center border border-gold/30 bg-white text-navy transition-colors hover:border-gold hover:text-gold"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
