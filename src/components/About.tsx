import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Mail, Star } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  viewport: { once: true, amount: 0.3 },
};

const facts = [
  {
    icon: Star,
    title: "Сертифицированная консультантка",
    description:
      "Обучение в школах астропсихологии, телесных практик и ведической философии.",
  },
  {
    icon: Calendar,
    title: "Глубокие годовые сопровождения",
    description: "Составляю индивидуальные маршруты роста и поддержки на 12 месяцев.",
  },
  {
    icon: Mail,
    title: "Деликатная коммуникация",
    description: "Ответы в течение 24 часов, после консультации — неделя поддержки в чате.",
  },
];

const achievements = [
  "Авторка курса \"Жизнь по звёздам\"",
  "Спикерка фестиваля практик осознанности 2023",
  "Член международного союза астрологов",
];

export function About() {
  return (
    <motion.section
      id="about"
      className="container scroll-mt-24 space-y-12 py-24"
      {...fadeIn}
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          Обо мне
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Я соединяю древние знания Вед с современной психологией и телесными
          практиками, чтобы помочь вам проживать повседневность с опорой на
          собственные ценности и ритмы.
        </p>
      </div>
      <Card className="mx-auto max-w-5xl border-border/60 bg-card/80 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">3 факта обо мне</CardTitle>
        </CardHeader>
        <CardContent className="space-y-10">
          <div className="grid gap-8 md:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.title} className="space-y-3">
                <fact.icon className="h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-semibold">{fact.title}</h3>
                <p className="text-sm text-muted-foreground">{fact.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold">Достижения</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
