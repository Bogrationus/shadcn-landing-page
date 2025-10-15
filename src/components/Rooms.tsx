import { Suspense, lazy } from "react";
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
const CardContent = lazy(() =>
  import("./ui/card").then((module) => ({ default: module.CardContent })),
);

const roomKeys = ["classic", "deluxe", "family"] as const;

export const Rooms = () => {
  const { t } = useI18n();

  return (
    <section id="pokoje" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-5xl space-y-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{t("rooms.title")}</h2>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          {t("rooms.description")}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {roomKeys.map((key) => (
            <Suspense
              key={key}
              fallback={<div className="h-56 animate-pulse rounded-2xl bg-muted" />}
            >
              <Card className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/50">
                <CardHeader className="p-0 text-left">
                  <CardTitle className="text-2xl font-semibold">
                    {t(`rooms.items.${key}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4 text-left text-base text-muted-foreground">
                  {t(`rooms.items.${key}.description`)}
                </CardContent>
              </Card>
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};

