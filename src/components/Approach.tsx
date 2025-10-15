import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  viewport: { once: true, amount: 0.3 },
};

const columns = [
  {
    title: "Веда + Космос",
    description:
      "Работаю с натальными картами, транзитами и ведической астрологией, чтобы подсветить ваш жизненный цикл и кармические уроки.",
    bullets: [
      "Натальные разборы и кармические задачи",
      "Лунный календарь для ритуалов и практик",
      "Синхронизация проектов с космическими ритмами",
    ],
  },
  {
    title: "Тело + Энергия",
    description:
      "Поддерживаю телесными практиками, дыханием и энергетическими техниками, чтобы вы чувствовали живость и устойчивость.",
    bullets: [
      "Телесные сканы и мягкие движения",
      "Дыхательные сессии для освобождения зажимов",
      "Ритуалы само-заботы и ресурсные якоря",
    ],
  },
  {
    title: "Сознание + Психика",
    description:
      "Сочетаю коучинговые вопросы и арт-подходы, чтобы трансформировать убеждения и поддержать эмоциональную зрелость.",
    bullets: [
      "Глубокие коучинг-сессии",
      "Практики дневников и визуализации",
      "Домашние задания для закрепления инсайтов",
    ],
  },
];

export function Approach() {
  return (
    <motion.section
      id="approach"
      className="container scroll-mt-24 space-y-12 py-24"
      {...fadeIn}
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          Мой подход
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Каждая встреча — это пространство бережности, где мистическое и
          практичное идут рука об руку.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {columns.map((column) => (
          <div
            key={column.title}
            className="group rounded-3xl border border-border/60 bg-card/70 p-8 transition-colors hover:border-primary/60 hover:bg-primary/5"
          >
            <h3 className="text-xl font-semibold text-foreground">
              {column.title}
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              {column.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {column.bullets.map((bullet) => (
                <li key={bullet} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
