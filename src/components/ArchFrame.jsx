const GRADIENTS = [
  "from-gold-200 via-nude-300 to-rose-300",
  "from-rose-200 via-nude-300 to-gold-300",
  "from-nude-300 via-gold-200 to-rose-200",
  "from-gold-300 via-rose-200 to-nude-200",
];

/**
 * Signature arch-topped frame used for hero art and gallery pieces.
 * Renders a real photo when `src` is provided; otherwise a soft
 * gradient placeholder marked clearly so it's easy to swap later.
 */
export default function ArchFrame({ src, alt = "", tone = 0, className = "", label }) {
  const gradient = GRADIENTS[tone % GRADIENTS.length];

  return (
    <div className={`relative overflow-hidden arch-full aspect-[3/4] ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div className={`h-full w-full bg-gradient-to-br ${gradient} flex items-end justify-center pb-8`}>
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" className="opacity-70">
            <path
              d="M23 4c2 6 4 8 10 10-6 2-8 4-10 10-2-6-4-8-10-10 6-2 8-4 10-10Z"
              stroke="#5C483B"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      {label && !src && (
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[0.65rem] tracking-wide text-ink-600/70 bg-nude-50/70 px-3 py-1 rounded-full">
          {label}
        </span>
      )}
    </div>
  );
}
