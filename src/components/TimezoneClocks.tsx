"use client";

import { useEffect, useState } from "react";
import { ARKANSAS_TIMEZONE, formatTimeInZone } from "@/lib/timezone";

type TimezoneClocksProps = {
  visitorTimeZone: string | null;
  visitorPlaceName: string | null;
  showVisitor: boolean;
};

function ClockCard({
  label,
  timeZone,
  time,
}: {
  label: string;
  timeZone: string;
  time: string;
}) {
  return (
    <div className="flex min-w-[10rem] flex-1 flex-col items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
        {label}
      </span>
      <span className="text-xl font-medium tabular-nums text-zinc-100">
        {time}
      </span>
      <span className="text-xs text-zinc-500">{timeZone.replace("_", " ")}</span>
    </div>
  );
}

export function TimezoneClocks({
  visitorTimeZone,
  visitorPlaceName,
  showVisitor,
}: TimezoneClocksProps) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const arkansasTime = formatTimeInZone(ARKANSAS_TIMEZONE);
  const visitorZone =
    visitorTimeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
  const visitorTime = formatTimeInZone(visitorZone);
  const visitorLabel = visitorPlaceName ?? "Your timezone";

  return (
    <div
      key={now}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <ClockCard
        label="Arkansas"
        timeZone={ARKANSAS_TIMEZONE}
        time={arkansasTime}
      />
      {showVisitor ? (
        <ClockCard
          label={visitorLabel}
          timeZone={visitorZone}
          time={visitorTime}
        />
      ) : (
        <ClockCard
          label="Your timezone"
          timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
          time={formatTimeInZone(
            Intl.DateTimeFormat().resolvedOptions().timeZone,
          )}
        />
      )}
    </div>
  );
}
