function TelegramLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 shrink-0 text-sky-300"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
      />
    </svg>
  );
}

function XLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 shrink-0 text-zinc-100"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

export function SocialsBox() {
  return (
    <div className="h-full w-full rounded-3xl border border-zinc-400/20 bg-gradient-to-br from-zinc-500/10 via-white/5 to-zinc-400/10 p-5 shadow-[0_0_32px_rgba(161,161,170,0.1)] backdrop-blur-sm sm:p-6">
      <div className="flex h-full flex-col items-center justify-center gap-4 text-center sm:items-start sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300">
          Socials
        </span>

        <div className="flex w-full flex-col gap-3">
          <a
            href="https://x.com/AlexNguyenOG"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-sky-400/40 hover:bg-sky-500/10"
          >
            <XLogo />
            <div className="flex flex-col items-start gap-0.5">
              <span className="text-lg font-medium text-zinc-100 group-hover:text-sky-200">
                @AlexNguyenOG
              </span>
              <span className="text-sm font-light text-zinc-400 group-hover:text-zinc-300">
                Follow me on X
              </span>
            </div>
          </a>

          <a
            href="https://web.telegram.org/a/#8014462937"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-sky-400/40 hover:bg-sky-500/10"
          >
            <TelegramLogo />
            <div className="flex flex-col items-start gap-0.5">
              <span className="text-lg font-medium text-zinc-100 group-hover:text-sky-200">
                Telegram
              </span>
              <span className="text-sm font-light text-zinc-400 group-hover:text-zinc-300">
                Message me on Telegram
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
