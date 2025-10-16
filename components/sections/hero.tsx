import Link from "next/link";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/5 px-6 py-24 shadow-[0_30px_120px_-40px_rgba(236,72,153,0.45)] sm:px-10 lg:px-16">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        src="https://cdn.coverr.co/videos/coverr-hiking-on-a-winter-mountain-0890/1080p.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 via-[#0f0f17]/80 to-sky-400/40 mix-blend-multiply" />
      <FadeIn className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-emerald-200">
          prick_trip
        </span>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          Нестандартные путешествия по Европе
        </h1>
        <p className="text-base text-slate-200 sm:text-lg">
          Авторские экспедиции с гидом @lingvopunk: сочетание диких троп, городского вдохновения и поддержки единомышленников на каждом этапе.
        </p>
        <Button asChild size="lg" className="gap-3">
          <Link href="https://t.me/prick_chat" target="_blank" rel="noreferrer">
            Записаться
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-300 transition group-hover:scale-125"
            />
          </Link>
        </Button>
      </FadeIn>
    </section>
  );
}
