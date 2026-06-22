function EyeIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 shrink-0 animate-eye-wiggle sm:h-28 sm:w-28"
      aria-hidden
    >
      <defs>
        <radialGradient id="irisGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="45%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#312e81" />
        </radialGradient>
        <radialGradient id="eyeWhite" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e4e4e7" />
        </radialGradient>
      </defs>

      <ellipse cx="60" cy="60" rx="52" ry="34" fill="url(#eyeWhite)" />
      <ellipse cx="60" cy="60" rx="52" ry="34" fill="none" stroke="#a1a1aa" strokeWidth="2" />
      <path
        d="M12 58c14-22 34-32 48-32s34 10 48 32"
        fill="none"
        stroke="#52525b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 62c14 22 34 32 48 32s34-10 48-32"
        fill="none"
        stroke="#52525b"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="60" cy="60" r="18" fill="url(#irisGradient)" />
      <circle cx="60" cy="60" r="18" fill="none" stroke="#4338ca" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="8" fill="#0f172a" />
      <circle cx="54" cy="54" r="3" fill="#ffffff" opacity="0.95" />
      <circle cx="66" cy="64" r="1.5" fill="#ffffff" opacity="0.7" />

      <path
        d="M18 42c8-6 18-10 28-10M74 32c10 0 20 4 28 10"
        fill="none"
        stroke="#71717a"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FunFactBox() {
  return (
    <div className="h-full w-full rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-white/5 to-cyan-500/10 p-5 shadow-[0_0_32px_rgba(139,92,246,0.12)] backdrop-blur-sm sm:p-6">
      <div className="flex h-full flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <EyeIllustration />

        <div className="flex flex-col gap-2 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
            Fun fact
          </span>
          <p className="text-lg font-light leading-relaxed text-zinc-100/90">
            I can wiggle my eyes. I use to think other people can do it.
          </p>
        </div>
      </div>
    </div>
  );
}
