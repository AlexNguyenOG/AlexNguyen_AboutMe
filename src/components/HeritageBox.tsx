import type { ReactNode } from "react";

function WavingFlag({
  children,
  delay = "0s",
}: {
  children: ReactNode;
  delay?: string;
}) {
  return (
    <div
      className="animate-flag-wave origin-left"
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

function VietnamFlag() {
  return (
    <svg
      viewBox="0 0 120 180"
      className="aspect-[2/3] h-16 rounded-sm shadow-md sm:h-[4.5rem]"
      aria-label="Vietnam flag"
    >
      <rect width="120" height="180" fill="#DA251D" />
      <polygon
        points="60,36 67.8,60 93,60 72,75 79.8,99 60,84 40.2,99 48,75 27,60 52.2,60"
        fill="#FFCD00"
      />
    </svg>
  );
}

function starPoints(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  rotation = -90,
): string {
  const points: string[] = [];

  for (let i = 0; i < 10; i += 1) {
    const radius = i % 2 === 0 ? outerR : innerR;
    const angle = ((rotation + i * 36) * Math.PI) / 180;
    points.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
  }

  return points.join(" ");
}

function ArkansasFlag() {
  const borderStars = [
    [60, 16],
    [48, 20],
    [36, 28],
    [26, 38],
    [20, 50],
    [18, 64],
    [20, 78],
    [26, 90],
    [36, 100],
    [48, 108],
    [60, 112],
    [72, 108],
    [84, 100],
    [94, 90],
    [100, 78],
    [102, 64],
    [100, 50],
    [94, 38],
    [84, 28],
    [72, 20],
    [42, 34],
    [78, 34],
    [32, 52],
    [88, 52],
    [60, 104],
  ];

  return (
    <svg
      viewBox="0 0 120 180"
      className="aspect-[2/3] h-16 rounded-sm shadow-md sm:h-[4.5rem]"
      aria-label="Arkansas flag"
    >
      <rect width="120" height="180" fill="#BF0A30" />

      <polygon
        points="60,8 112,90 60,172 8,90"
        fill="#002868"
      />

      <polygon
        points="60,22 98,90 60,158 22,90"
        fill="#FFFFFF"
      />

      {borderStars.map(([x, y], index) => (
        <polygon
          key={index}
          points={starPoints(x, y, 2.8, 1.1)}
          fill="#FFFFFF"
        />
      ))}

      <text
        x="60"
        y="88"
        textAnchor="middle"
        fill="#002868"
        fontSize="11"
        fontWeight="700"
        fontFamily="Georgia, 'Times New Roman', serif"
        letterSpacing="0.5"
      >
        ARKANSAS
      </text>

      <polygon
        points={starPoints(60, 58, 5.5, 2.2, -90)}
        fill="#002868"
      />
      <polygon
        points={starPoints(60, 132, 5.5, 2.2, 90)}
        fill="#002868"
      />
      <polygon
        points={starPoints(42, 118, 5.5, 2.2, -90)}
        fill="#002868"
      />
      <polygon
        points={starPoints(78, 118, 5.5, 2.2, -90)}
        fill="#002868"
      />
    </svg>
  );
}

export function HeritageBox() {
  return (
    <div className="h-full w-full rounded-3xl border border-amber-400/20 bg-gradient-to-br from-red-500/10 via-white/5 to-blue-500/10 p-5 shadow-[0_0_32px_rgba(251,191,36,0.1)] backdrop-blur-sm sm:p-6">
      <div className="flex h-full flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <div className="flex items-end gap-4">
          <WavingFlag>
            <VietnamFlag />
          </WavingFlag>
          <WavingFlag delay="0.35s">
            <ArkansasFlag />
          </WavingFlag>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            Where I&apos;m from
          </span>
          <p className="text-lg font-light leading-relaxed text-zinc-100/90">
            I&apos;m asian and my ethnicity is vietnamese. I was born and raised
            in Arkansas.
          </p>
        </div>
      </div>
    </div>
  );
}
