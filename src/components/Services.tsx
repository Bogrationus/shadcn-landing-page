import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Star } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  viewport: { once: true, amount: 0.3 },
};

const services = [
  {
    title: "Индивидуальная сессия",
    description: "60 минут глубокого диалога и энергии здесь-и-сейчас.",
    icon: Star,
    features: ["Диагностика по натальной карте", "Энергетическая коррекция", "План действий на 2 недели"],
  },
  {
    title: "Годовой прогноз",
    description: "12-месячная карта циклов, благоприятных периодов и фокусов внимания.",
    icon: Calendar,
    features: ["Подробный отчёт PDF", "Созвон 90 минут", "Календарь ритуалов по месяцам"],
  },
  {
    title: "E-mail разбор",
    description: "Ответ в письме с практиками и рекомендациями для вашей ситуации.",
    icon: Mail,
    features: ["Анализ вопроса", "Две практики поддержки", "Последующее письмо через 7 дней"],
  },
];

export function Services() {
  return (
    <motion.section
      id="services"
      className="container scroll-mt-24 space-y-12 py-24"
      {...fadeIn}
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          Услуги
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Подберите формат, который лучше всего поддержит вашу задачу.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            className="flex h-full flex-col border-border/60 bg-card/70 shadow-lg"
          >
            <CardHeader className="space-y-4">
              <service.icon className="h-10 w-10 text-primary" aria-hidden="true" />
              <CardTitle className="text-xl font-semibold">
                {service.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {service.features.map((feature) => (
                  <li key={feature} className="leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="#contact">Записаться</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
