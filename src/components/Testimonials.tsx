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
const CardDescription = lazy(() =>
  import("./ui/card").then((module) => ({ default: module.CardDescription })),
);
const Avatar = lazy(() =>
  import("./ui/avatar").then((module) => ({ default: module.Avatar })),
);
const AvatarFallback = lazy(() =>
  import("./ui/avatar").then((module) => ({ default: module.AvatarFallback })),
);

type TestimonialItem = {
  name: string;
  location: string;
  comment: string;
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);
};

export const Testimonials = () => {
  const { t, translations } = useI18n();
  const list = ((translations.testimonials as Record<string, unknown>)?.items ?? []) as TestimonialItem[];

  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{t("testimonials.title")}</h2>
        <p className="text-lg text-muted-foreground">{t("testimonials.description")}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {list.map((item) => (
          <Suspense
            key={`${item.name}-${item.location}`}
            fallback={<div className="h-48 animate-pulse rounded-2xl bg-muted" />}
          >
            <Card className="h-full rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/50">
              <CardHeader className="flex flex-row items-center gap-4 p-0">
                <Suspense fallback={<div className="h-12 w-12 animate-pulse rounded-full bg-muted" />}
                >
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>{getInitials(item.name)}</AvatarFallback>
                  </Avatar>
                </Suspense>
                <div className="text-left">
                  <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
                  <CardDescription>{item.location}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-4 text-left text-base text-muted-foreground">
                “{item.comment}”
              </CardContent>
            </Card>
          </Suspense>
        ))}
      </div>
    </section>
  );
};

