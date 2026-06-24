export function ClosingBox() {
  return (
    <div className="w-full max-w-5xl rounded-3xl border border-red-400/25 bg-gradient-to-br from-red-500/10 via-white/5 to-rose-500/10 px-8 py-10 shadow-[0_0_48px_rgba(248,113,113,0.15)] backdrop-blur-sm sm:px-12 sm:py-14">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
          That&apos;s a wrap
        </span>
        <p className="max-w-3xl text-2xl font-light leading-relaxed text-zinc-100 sm:text-3xl sm:leading-relaxed">
          Welp thats it! I hope you guys liked my website and my keyboard
          website. Thanks for sticking by.
        </p>
      </div>
    </div>
  );
}
