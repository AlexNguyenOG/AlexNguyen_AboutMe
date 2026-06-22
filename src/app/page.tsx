import { CatPersonBox } from "@/components/CatPersonBox";
import { HeritageBox } from "@/components/HeritageBox";
import { CursorStoryBox } from "@/components/CursorStoryBox";
import { DreamBox } from "@/components/DreamBox";
import { FunFactBox } from "@/components/FunFactBox";
import { HeroBackground } from "@/components/HeroBackground";
import { LocationSection } from "@/components/LocationSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start gap-6 px-6 pb-24 pt-28 text-center sm:pt-32">
        <h1 className="text-6xl font-bold text-red-400 drop-shadow-[0_0_24px_rgba(248,113,113,0.4)]">
          Hello! Im Alex.
        </h1>
        <p className="max-w-2xl text-2xl font-light leading-relaxed text-zinc-100/95">
          I was 13 when i start getting into coding! I&apos;m 15 years old and
          currently enrolled as a student in solana.
        </p>
        <p className="max-w-2xl text-xl font-light leading-relaxed text-zinc-100/90">
          If you already didn&apos;t know, I&apos;m the creator of keysol, the
          website where you can find what keyboard fits you.
        </p>

        <LocationSection />

        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          <CursorStoryBox />
          <DreamBox />
          <FunFactBox />
          <HeritageBox />
          <CatPersonBox />
        </div>
      </div>
    </main>
  );
}
