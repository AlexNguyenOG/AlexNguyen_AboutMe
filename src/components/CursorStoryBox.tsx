import { KeySolLink } from "@/components/KeySolLink";

function CursorLogo() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 shrink-0 sm:h-28 sm:w-28"
      aria-hidden
    >
      <defs>
        <linearGradient id="cursorFaceLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="100%" stopColor="#d4d4d8" />
        </linearGradient>
        <linearGradient id="cursorFaceDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#71717a" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
        <linearGradient id="cursorAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      <rect
        x="8"
        y="8"
        width="104"
        height="104"
        rx="24"
        fill="#09090b"
        stroke="url(#cursorAccent)"
        strokeWidth="2"
      />

      <path
        d="M34 28 L34 82 L52 68 L64 92 L76 86 L64 62 L88 62 Z"
        fill="url(#cursorFaceLight)"
      />
      <path
        d="M34 28 L88 62 L76 86 L64 62 L52 68 L34 82 Z"
        fill="url(#cursorFaceDark)"
        opacity="0.85"
      />
      <path
        d="M52 68 L64 92 L76 86 L64 62 Z"
        fill="url(#cursorAccent)"
        opacity="0.95"
      />

      <circle cx="88" cy="32" r="5" fill="#38bdf8" opacity="0.9" />
    </svg>
  );
}

export function CursorStoryBox() {
  return (
    <div className="h-full w-full rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-white/5 to-indigo-500/10 p-5 shadow-[0_0_32px_rgba(56,189,248,0.12)] backdrop-blur-sm sm:p-6">
      <div className="flex h-full flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <CursorLogo />

        <div className="flex flex-col gap-2 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
            Built with Cursor AI
          </span>
          <p className="text-lg font-light leading-relaxed text-zinc-100/90">
            Lately I&apos;ve been having fun with the AI, cursor. And because of
            it, I was able to build <KeySolLink />. I mess around and by the time you see this &quot;My get to know
            me&quot; website, it was made from cursor AI, amazing right?
            Currently, I&apos;m in SF with family. The connections here were
            amazing.
          </p>
        </div>
      </div>
    </div>
  );
}
