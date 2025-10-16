import { FadeIn } from "@/components/fade-in";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="space-y-10">
      <FadeIn className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-fuchsia-300 sm:text-3xl">Отзывы</h2>
        <p className="text-base text-slate-300 sm:text-lg">
          Сохраняем голоса тех, кто уже побывал в походах и вернулся с новыми смыслами.
        </p>
      </FadeIn>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <FadeIn
            key={testimonial.name}
            delay={index * 90}
            className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1f1f2b] via-[#12121b] to-[#1a1a25] p-6 shadow-[0_20px_60px_-35px_rgba(236,72,153,0.5)]"
          >
            <p className="text-sm leading-relaxed text-slate-200">“{testimonial.text}”</p>
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-200">{testimonial.name}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
