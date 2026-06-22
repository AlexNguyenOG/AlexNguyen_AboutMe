export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#070b16]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(153,69,255,0.35),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(20,241,149,0.22),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.18),transparent_45%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

      <svg
        className="absolute -left-8 top-16 h-72 w-72 animate-float text-purple-400/30"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M40 120c20-40 60-70 100-60 25 7 45 35 35 65-12 36-58 58-95 42-24-11-40-32-40-47z"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M70 95l18 10 18-10v20l-18 10-18-10V95z"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>

      <svg
        className="absolute -right-10 bottom-10 h-80 w-80 animate-float-delayed text-emerald-400/25"
        viewBox="0 0 240 240"
        fill="none"
      >
        <rect
          x="40"
          y="50"
          width="160"
          height="110"
          rx="16"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M70 90h100M70 110h70M70 130h85"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M80 170h80l-10 20H90l-10-20z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="185" cy="55" r="8" fill="currentColor" />
      </svg>

      <svg
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 text-sky-300/20"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle cx="250" cy="250" r="180" stroke="currentColor" strokeWidth="2" strokeDasharray="8 14" />
        <path
          d="M120 280c35-55 95-85 160-75 48 8 88 42 98 88 12 58-36 112-98 118-52 5-98-24-118-62"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M210 210l28 16 28-16v32l-28 16-28-16v-32z"
          fill="currentColor"
          fillOpacity="0.35"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M330 170l18-10 18 10-18 10-18-10zM350 320l14 8 14-8-14-8-14 8zM150 150l10 6 10-6-10-6-10 6z"
          fill="currentColor"
        />
      </svg>

      <div className="absolute left-[12%] top-[18%] h-3 w-3 rounded-full bg-purple-400/70 blur-[1px] animate-pulse-soft" />
      <div className="absolute right-[18%] top-[28%] h-2 w-2 rounded-full bg-emerald-300/80 blur-[1px] animate-pulse-soft" />
      <div className="absolute bottom-[22%] left-[42%] h-2.5 w-2.5 rounded-full bg-sky-300/70 blur-[1px] animate-pulse-soft" />
    </div>
  );
}
