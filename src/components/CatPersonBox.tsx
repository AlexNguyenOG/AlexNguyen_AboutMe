function SittingCat() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-28 w-28 shrink-0 sm:h-32 sm:w-32"
      aria-hidden
    >
      <defs>
        <linearGradient id="catPersonFur" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="catPersonBelly" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
      </defs>

      <ellipse cx="50" cy="92" rx="22" ry="3" fill="#000" opacity="0.12" />

      <g className="animate-cat-sit">
        {/* Tail */}
        <path
          d="M72 62 C82 58 88 68 84 78 C80 86 72 84 70 74"
          fill="none"
          stroke="#f97316"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Body */}
        <ellipse cx="50" cy="68" rx="22" ry="18" fill="url(#catPersonFur)" />
        <ellipse cx="50" cy="70" rx="14" ry="11" fill="url(#catPersonBelly)" />

        {/* Back legs (tucked) */}
        <ellipse cx="38" cy="82" rx="7" ry="5" fill="#f97316" />
        <ellipse cx="62" cy="82" rx="7" ry="5" fill="#f97316" />

        {/* Front paw on ground */}
        <ellipse cx="40" cy="84" rx="5" ry="3.5" fill="#fdba74" />
        <ellipse cx="56" cy="84" rx="5" ry="3.5" fill="#fdba74" />

        {/* Head + grooming */}
        <g className="animate-cat-groom" style={{ transformOrigin: "48px 42px" }}>
          {/* Head */}
          <circle cx="48" cy="42" r="15" fill="url(#catPersonFur)" />

          {/* Ears */}
          <path d="M36 32 L34 22 L42 28 Z" fill="#f97316" />
          <path d="M60 32 L62 22 L54 28 Z" fill="#f97316" />
          <path d="M37 30 L36 24 L40 28 Z" fill="#fdba74" />
          <path d="M59 30 L60 24 L56 28 Z" fill="#fdba74" />

          {/* Eyes */}
          <ellipse cx="42" cy="40" rx="2.8" ry="3.2" fill="#fef9c3" />
          <ellipse cx="54" cy="40" rx="2.8" ry="3.2" fill="#fef9c3" />
          <circle cx="42" cy="40.5" r="1.8" fill="#1c1917" />
          <circle cx="54" cy="40.5" r="1.8" fill="#1c1917" />
          <circle cx="42.8" cy="39.5" r="0.5" fill="#fff" />
          <circle cx="54.8" cy="39.5" r="0.5" fill="#fff" />

          {/* Nose & mouth */}
          <path d="M48 44 L46 46 L50 46 Z" fill="#fda4af" />
          <path
            d="M48 46 Q46 48 44 47 M48 46 Q50 48 52 47"
            fill="none"
            stroke="#78716c"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Whiskers */}
          <path d="M34 42 H28 M34 45 H27 M34 48 H28" stroke="#a8a29e" strokeWidth="0.7" strokeLinecap="round" />
          <path d="M62 42 H68 M62 45 H69 M62 48 H68" stroke="#a8a29e" strokeWidth="0.7" strokeLinecap="round" />

          {/* Raised grooming paw */}
          <ellipse
            cx="58"
            cy="50"
            rx="4.5"
            ry="6"
            fill="#fdba74"
            transform="rotate(-25 58 50)"
          />

          {/* Tongue */}
          <path
            className="animate-cat-tongue"
            d="M46 47 C47 50 47 52 46 54"
            fill="#fb7185"
          />
        </g>
      </g>
    </svg>
  );
}

export function CatPersonBox() {
  return (
    <div className="h-full w-full rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-white/5 to-amber-500/10 p-5 shadow-[0_0_32px_rgba(251,146,60,0.12)] backdrop-blur-sm sm:p-6">
      <div className="flex h-full flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <SittingCat />

        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
            Cat or dog?
          </span>
          <p className="text-lg font-light leading-relaxed text-zinc-100/90">
            Between a cat or dog, I&apos;m more of a cat person myself. Cats have
            been easier to take care of and are more chill.
          </p>
        </div>
      </div>
    </div>
  );
}
