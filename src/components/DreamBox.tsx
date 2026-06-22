function DreamIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 shrink-0 sm:h-28 sm:w-28"
      aria-hidden
    >
      <defs>
        <linearGradient id="dreamSky" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="50%" stopColor="#4c1d95" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="dreamMoon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="dreamCloud" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e9d5ff" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        <linearGradient id="solanaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14f195" />
          <stop offset="100%" stopColor="#9945ff" />
        </linearGradient>
      </defs>

      <rect x="8" y="8" width="104" height="104" rx="24" fill="url(#dreamSky)" />

      <circle cx="82" cy="34" r="14" fill="url(#dreamMoon)" opacity="0.95" />
      <circle cx="88" cy="30" r="12" fill="url(#dreamSky)" />

      <circle cx="24" cy="28" r="1.5" fill="#ffffff" opacity="0.9" />
      <circle cx="42" cy="22" r="1" fill="#ffffff" opacity="0.7" />
      <circle cx="58" cy="18" r="1.2" fill="#ffffff" opacity="0.85" />
      <circle cx="96" cy="58" r="1" fill="#ffffff" opacity="0.6" />
      <circle cx="18" cy="52" r="1" fill="#ffffff" opacity="0.75" />

      <path
        d="M20 78c8-8 18-12 28-10s18 8 24 16c-10 2-20 0-28-4s-16-10-24-2z"
        fill="url(#dreamCloud)"
        opacity="0.85"
      />
      <path
        d="M48 88c10-6 22-8 34-4s20 10 26 18c-12 4-26 2-38-4s-14-12-22-10z"
        fill="url(#dreamCloud)"
        opacity="0.7"
      />

      <path
        d="M38 54 L52 48 L66 54 L60 68 L48 68 Z"
        fill="url(#solanaGlow)"
        opacity="0.95"
      />
      <path
        d="M52 48 L66 54 L60 68 L48 54 Z"
        fill="#14f195"
        opacity="0.55"
      />

      <path
        d="M30 42c6 2 10 6 10 10M74 72c8 0 14 4 16 10"
        fill="none"
        stroke="#ddd6fe"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function DreamBox() {
  return (
    <div className="h-full w-full rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-violet-500/10 to-indigo-500/10 p-5 shadow-[0_0_32px_rgba(20,241,149,0.1)] backdrop-blur-sm sm:p-6">
      <div className="flex h-full flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <DreamIllustration />

        <div className="flex flex-col gap-2 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            The dream
          </span>
          <p className="text-lg font-light leading-relaxed text-zinc-100/90">
            My dream one day is to hopefully work at solana and just vibe while
            coding. Its been fun seeing how solana works and all the cool
            connections and friends I have made.
          </p>
        </div>
      </div>
    </div>
  );
}
