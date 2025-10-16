import { FadeIn } from "@/components/fade-in";
import { trips } from "@/lib/data";

export function TripsSection() {
  return (
    <section className="space-y-10">
      <FadeIn className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-sky-300 sm:text-3xl">Ближайшие походы</h2>
        <p className="text-base text-slate-300 sm:text-lg">
          Выбираем даты, подстраиваем сложность под группу и берём с собой всё необходимое оборудование.
        </p>
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {trips.map((trip, index) => (
          <FadeIn
            key={trip.title}
            delay={index * 80}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_-30px_rgba(56,189,248,0.45)]"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-sky-200">{trip.dates}</span>
              <h3 className="text-xl font-semibold text-white">{trip.title}</h3>
              <p className="text-sm leading-relaxed text-slate-200">{trip.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs uppercase text-emerald-200">
              <span>8 мест</span>
              <span>под запрос</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
