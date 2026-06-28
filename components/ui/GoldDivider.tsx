export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-16 bg-linear-to-r from-transparent via-gold to-transparent ${className}`}
      aria-hidden="true"
    />
  );
}
