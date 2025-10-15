import { Suspense, lazy } from "react";
import type { ComponentType, LazyExoticComponent, SVGProps } from "react";
import { useI18n } from "@/i18n";

const Card = lazy(() =>
  import("./ui/card").then((module) => ({ default: module.Card })),
);
const CardHeader = lazy(() =>
  import("./ui/card").then((module) => ({ default: module.CardHeader })),
);
const CardTitle = lazy(() =>
  import("./ui/card").then((module) => ({ default: module.CardTitle })),
);
const CardDescription = lazy(() =>
  import("./ui/card").then((module) => ({ default: module.CardDescription })),
);

const PercentIcon = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.Percent })),
);
const WineIcon = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.Wine })),
);
const ClockIcon = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.Clock })),
);
const SandwichIcon = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.Sandwich })),
);

type BenefitKey = "discount" | "mulledWine" | "lateCheckout" | "snacks";

type IconComponent = LazyExoticComponent<ComponentType<SVGProps<SVGSVGElement>>>;

const iconMap: Record<BenefitKey, IconComponent> = {
  discount: PercentIcon,
  mulledWine: WineIcon,
  lateCheckout: ClockIcon,
  snacks: SandwichIcon,
};

const benefitsOrder: BenefitKey[] = [
  "discount",
  "mulledWine",
  "lateCheckout",
  "snacks",
];

export const Features = () => {
  const { t } = useI18n();

  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-5xl space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">{t("benefits.title")}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("benefits.description")}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {benefitsOrder.map((key) => {
            const Icon = iconMap[key];
            return (
              <Suspense
                key={key}
                fallback={<div className="h-40 animate-pulse rounded-2xl bg-muted" />}
              >
                <Card className="h-full rounded-2xl border border-slate-200/70 bg-muted/40 p-6 text-left shadow-sm transition hover:shadow-lg dark:border-slate-800/60">
                  <CardHeader className="flex flex-col space-y-4 p-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Suspense fallback={<span className="text-lg">★</span>}>
                        <Icon className="h-6 w-6 text-primary" aria-hidden />
                      </Suspense>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-semibold">
                        {t(`benefits.items.${key}.title`)}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {t(`benefits.items.${key}.description`)}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Suspense>
            );
          })}
        </div>
      </div>
    </section>
  );
};

