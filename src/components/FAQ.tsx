import { Suspense, lazy } from "react";
import { useI18n } from "@/i18n";

const Accordion = lazy(() =>
  import("./ui/accordion").then((module) => ({ default: module.Accordion })),
);
const AccordionItem = lazy(() =>
  import("./ui/accordion").then((module) => ({ default: module.AccordionItem })),
);
const AccordionTrigger = lazy(() =>
  import("./ui/accordion").then((module) => ({ default: module.AccordionTrigger })),
);
const AccordionContent = lazy(() =>
  import("./ui/accordion").then((module) => ({ default: module.AccordionContent })),
);

type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ = () => {
  const { t, translations } = useI18n();
  const list = ((translations.faq as Record<string, unknown>)?.items ?? []) as FAQItem[];

  return (
    <section id="faq" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{t("faq.title")}</h2>
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Suspense fallback={<div className="h-40 animate-pulse rounded-2xl bg-muted" />}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {list.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-left text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Suspense>
      </div>
    </section>
  );
};

