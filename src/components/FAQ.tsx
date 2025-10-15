import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  viewport: { once: true, amount: 0.3 },
};

const items = [
  {
    value: "item-1",
    question: "Как подготовиться к консультации?",
    answer:
      "Заполните форму с основными данными и пришлите дату, время и место рождения. Подготовьте 2-3 запроса, которые хотите обсудить.",
  },
  {
    value: "item-2",
    question: "Что если я никогда не работала с астрологом?",
    answer:
      "Я объясняю всё простым языком. Упор делаем на практические шаги, которые вы сможете внедрить уже в ближайшие дни.",
  },
  {
    value: "item-3",
    question: "Можно ли перенести встречу?",
    answer:
      "Да, за 24 часа до сессии её можно перенести без потерь. В экстренных ситуациях мы всегда ищем новое удобное время.",
  },
];

export function FAQ() {
  return (
    <motion.section
      id="faq"
      className="container scroll-mt-24 space-y-12 py-24"
      {...fadeIn}
    >
      <div className="mx-auto max-w-2xl text-center md:max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          FAQ
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Если не нашли ответ — напишите, и я с радостью подсвечу детали.
        </p>
      </div>
      <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-4">
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="overflow-hidden rounded-3xl border border-border/60 bg-card/70 px-4"
          >
            <AccordionTrigger className="text-left text-base font-semibold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
}
