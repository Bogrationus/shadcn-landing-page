import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/reflecting.png";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  viewport: { once: true, amount: 0.6 },
};

export function Hero() {
  return (
    <motion.section
      id="hero"
      className="container scroll-mt-24 flex flex-col items-center gap-12 pb-24 pt-36 text-center md:flex-row md:items-end md:justify-between md:gap-16 md:text-left"
      {...fadeIn}
    >
      <div className="flex-1 space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Гармония через знание себя
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Консультации Татьяны по самопознанию, энергии и астрологии
        </h1>
        <p className="text-base text-muted-foreground md:text-lg">
          Я помогаю женщинам настраивать внутренний компас, слышать голос
          интуиции и принимать решения, которые поддерживают тело, разум и
          сердце. Вместе мы найдём маршруты к устойчивости и радости.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="font-semibold" asChild>
            <a href="#contact">Записаться</a>
          </Button>
          <Button size="lg" variant="outline" className="font-semibold" asChild>
            <a href="#about">Подробнее</a>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
          <div className="rounded-full border border-border/60 px-4 py-2">
            Опыт более 8 лет
          </div>
          <div className="rounded-full border border-border/60 px-4 py-2">
            500+ личных консультаций
          </div>
        </div>
      </div>
      <motion.div
        className="relative mx-auto max-w-[320px] flex-1 md:max-w-[360px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 18, stiffness: 120, delay: 0.1 }}
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-primary/15 via-transparent to-primary/30 p-4 shadow-lg">
          <img
            src={portrait}
            alt="Татьяна во время консультации"
            className="h-full w-full rounded-[2rem] object-cover"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
