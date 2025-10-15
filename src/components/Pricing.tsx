import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  viewport: { once: true, amount: 0.3 },
};

const plans = [
  {
    name: "Разовая консультация",
    price: "7 500 ₽",
    description: "Идеально для знакомства и точечной работы",
    perks: [
      "60 минут онлайн",
      "Запись встречи",
      "Подбор практик на 2 недели",
    ],
    highlight: false,
  },
  {
    name: "Пакет из 3 сессий",
    price: "20 000 ₽",
    description: "Для глубокой трансформации и сопровождения",
    perks: [
      "3 встречи по 75 минут",
      "Аудио-сводка после каждой",
      "Поддержка в Telegram между сессиями",
    ],
    highlight: true,
  },
  {
    name: "Годовой компас",
    price: "58 000 ₽",
    description: "Полный цикл поддержки на 12 месяцев",
    perks: [
      "Годовой прогноз + 6 созвонов",
      "Ежемесячный чек-ин",
      "Экстренный звонок 1 раз в квартал",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="container scroll-mt-24 space-y-12 py-24"
      {...fadeIn}
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          Стоимость сопровождения
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Выберите формат и зафиксируйте дату, я свяжусь для уточнения деталей.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex h-full flex-col border-border/60 bg-card/80 shadow-lg transition-transform ${
              plan.highlight ? "md:-mt-4 md:scale-[1.02] md:border-primary/60 md:shadow-2xl" : ""
            }`}
          >
            <CardHeader>
              <p className="text-sm font-medium text-primary">
                {plan.highlight ? "Популярный выбор" : ""}
              </p>
              <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
              <p className="text-3xl font-semibold">{plan.price}</p>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{perk}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={plan.highlight ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#contact">Записаться</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
