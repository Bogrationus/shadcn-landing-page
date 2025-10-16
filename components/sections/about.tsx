import { FadeIn } from "@/components/fade-in";

export function AboutSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <FadeIn className="space-y-6">
        <h2 className="text-2xl font-semibold text-fuchsia-300 sm:text-3xl">О проекте</h2>
        <p className="text-lg leading-relaxed text-slate-200">
          @lingvopunk — горный гид, который соединяет языковые хакерства и любовь к высоте.
        </p>
        <p className="text-lg leading-relaxed text-slate-200">
          Концепция prick_trip — малые группы до 8 человек, чтобы слышать горы, а не толпу.
        </p>
        <p className="text-lg leading-relaxed text-slate-200">
          Мы отбираем маршруты, где максимум впечатлений достигается через доверие, юмор и здоровый азарт.
        </p>
      </FadeIn>
      <FadeIn className="grid gap-4 rounded-3xl border border-emerald-400/40 bg-emerald-400/10 p-6 text-slate-100">
        <span className="text-sm uppercase tracking-[0.3em] text-emerald-200">манифест</span>
        <p className="text-xl font-medium text-white">
          «Горы — это не побег, а встреча. Встреча с собой, с командой и с тем миром, что живёт вне экранов.»
        </p>
      </FadeIn>
    </section>
  );
}
