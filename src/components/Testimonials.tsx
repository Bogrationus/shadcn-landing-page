import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  viewport: { once: true, amount: 0.3 },
};

const testimonials = [
  {
    name: "Алина",
    role: "предпринимательница",
    quote:
      "Татьяна помогла увидеть повторяющиеся сценарии в бизнесе и предложила простые практики для стабилизации дохода. Встретила поддержку и мягкую дисциплину.",
  },
  {
    name: "Мария",
    role: "психолог",
    quote:
      "После каждой сессии у меня ощущение лёгкости. Прогноз на год стал картой, на которую я опираюсь при планировании сессий и отдыха.",
  },
  {
    name: "Елена",
    role: "HR-директор",
    quote:
      "Годовой пакет сопровождения помог мне пройти через карьерный переход без выгорания. Важнее всего — осознанные решения и забота о себе.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isMobile]);

  return (
    <motion.section
      id="testimonials"
      className="container scroll-mt-24 space-y-12 py-24"
      {...fadeIn}
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          Отзывы
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Реальные истории женщин, которые выбрали жить в своём ритме.
        </p>
      </div>
      {isMobile ? (
        <div className="relative min-h-[220px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.article
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-lg"
            >
              <div className="flex items-center gap-2 text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{testimonials[active].quote}”
              </p>
              <p className="mt-6 text-sm font-semibold text-foreground">
                {testimonials[active].name}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {testimonials[active].role}
              </p>
            </motion.article>
          </AnimatePresence>
        </div>
      ) : (
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="mb-6 break-inside-avoid rounded-3xl border border-border/60 bg-card/70 p-6 shadow-lg"
            >
              <div className="flex items-center gap-2 text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-sm font-semibold text-foreground">
                {testimonial.name}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {testimonial.role}
              </p>
            </article>
          ))}
        </div>
      )}
    </motion.section>
  );
}
