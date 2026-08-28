export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col items-center leading-none">
      {!compact && (
        <svg
          viewBox="0 0 60 36"
          className="mb-1 h-6 w-10 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M30 33 C30 20 26 10 30 2 C34 10 30 20 30 33 Z" />
          <path d="M30 33 C20 28 12 20 10 8 C20 12 27 22 30 33 Z" />
          <path d="M30 33 C40 28 48 20 50 8 C40 12 33 22 30 33 Z" />
        </svg>
      )}
      <span className="font-serif text-xl tracking-[0.18em] text-gold">AROOSH</span>
      <span className="mt-1 text-[0.55rem] uppercase tracking-[0.5em] text-rose">
        Collections
      </span>
    </div>
  );
}
