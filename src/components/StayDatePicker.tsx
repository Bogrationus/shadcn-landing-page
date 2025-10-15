import { Suspense, lazy, useMemo, useState } from "react";
import { useI18n } from "@/i18n";
import { CTA_URL, trackBeginCheckout, trackPurchase } from "@/lib/analytics";

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
const Button = lazy(() =>
  import("./ui/button").then((module) => ({ default: module.Button })),
);

const dayLabels: Record<string, string[]> = {
  cs: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

interface DateRange {
  from?: Date;
  to?: Date;
}

const MIN_STAY = 2;
const TOTAL_DAYS = 90;

const isWeekend = (date: Date) => {
  const day = date.getDay();
  return day === 5 || day === 6;
};

const getUpcomingSunday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(today);
  while (date.getDay() !== 0) {
    date.setDate(date.getDate() + 1);
  }
  return date;
};

const addDays = (date: Date, days: number) => {
  const clone = new Date(date);
  clone.setDate(clone.getDate() + days);
  return clone;
};

const differenceInDays = (from: Date, to: Date) => {
  const diff = to.getTime() - from.getTime();
  return Math.round(diff / (1000 * 60 * 60 * 24));
};

const includesBlockedDays = (from: Date, to: Date) => {
  let cursor = new Date(from);
  while (cursor < to) {
    cursor = addDays(cursor, 1);
    if (isWeekend(cursor)) {
      return true;
    }
  }
  return false;
};

const formatDate = (date?: Date, language: string = "cs") => {
  if (!date) return "—";
  return new Intl.DateTimeFormat(language, {
    day: "numeric",
    month: "short",
  }).format(date);
};

const formatISODate = (date: Date) => date.toISOString().split("T")[0];

const monthsBetween = (startDate: Date) => {
  const months = new Map<string, Date[]>();
  for (let i = 0; i < TOTAL_DAYS; i += 1) {
    const day = addDays(startDate, i);
    const key = `${day.getFullYear()}-${day.getMonth()}`;
    if (!months.has(key)) {
      months.set(key, []);
    }
    months.get(key)!.push(day);
  }
  return months;
};

export const StayDatePicker = () => {
  const { language, t } = useI18n();
  const firstDay = useMemo(() => {
    const sunday = getUpcomingSunday();
    const earliest = new Date();
    earliest.setHours(0, 0, 0, 0);
    return earliest < sunday ? earliest : sunday;
  }, []);

  const initialFrom = useMemo(() => getUpcomingSunday(), []);
  const initialTo = useMemo(() => addDays(getUpcomingSunday(), MIN_STAY), []);

  const [range, setRange] = useState<DateRange>({
    from: initialFrom,
    to: initialTo,
  });
  const [error, setError] = useState<string | null>(null);

  const months = useMemo(() => monthsBetween(firstDay), [firstDay]);

  const dayNames = dayLabels[language] ?? dayLabels.cs;

  const canSelectStart = (date: Date) => {
    if (date < firstDay) return false;
    if (isWeekend(date)) return false;
    for (let offset = 1; offset <= MIN_STAY; offset += 1) {
      const next = addDays(date, offset);
      if (isWeekend(next)) {
        return false;
      }
    }
    return true;
  };

  const isDisabled = (date: Date) => {
    if (date < firstDay) return true;
    if (isWeekend(date)) return true;
    if (!range.from || range.to) {
      return !canSelectStart(date);
    }

    if (date <= range.from) {
      return true;
    }

    const nights = differenceInDays(range.from, date);
    if (nights < MIN_STAY) {
      return true;
    }

    return includesBlockedDays(range.from, date);
  };

  const isActive = (date: Date) => {
    if (!range.from) return false;
    if (!range.to) {
      return date.getTime() === range.from.getTime();
    }
    return (
      date.getTime() >= range.from.getTime() &&
      date.getTime() <= range.to.getTime()
    );
  };

  const handleDayClick = (date: Date) => {
    if (isDisabled(date)) {
      return;
    }

    setError(null);

    if (!range.from || range.to) {
      setRange({ from: date, to: undefined });
      return;
    }

    if (date <= range.from) {
      setRange({ from: date, to: undefined });
      return;
    }

    const nights = differenceInDays(range.from, date);
    if (nights < MIN_STAY || includesBlockedDays(range.from, date)) {
      setError(t("hero.invalidRange"));
      return;
    }

    setRange({ from: range.from, to: date });
  };

  const handleReset = () => {
    setRange({ from: initialFrom, to: initialTo });
    setError(null);
  };

  const nightsCount = useMemo(() => {
    if (range.from && range.to) {
      return differenceInDays(range.from, range.to);
    }
    return MIN_STAY;
  }, [range.from, range.to]);

  const handleSubmit = () => {
    if (!range.from || !range.to) {
      setError(t("hero.invalidRange"));
      return;
    }

    trackBeginCheckout({ source: "date-picker" });
    trackPurchase({
      source: "date-picker",
      nights: nightsCount,
      start_date: formatISODate(range.from),
      end_date: formatISODate(range.to),
    });
  };

  const monthFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(language, {
        month: "long",
        year: "numeric",
      }),
    [language],
  );

  return (
    <Suspense fallback={<div className="h-64 w-full animate-pulse rounded-2xl bg-slate-100" /> }>
      <Card className="w-full max-w-xl rounded-2xl border border-slate-200/70 shadow-lg dark:border-slate-800/60">
        <CardHeader>
          <CardTitle className="text-left text-2xl font-semibold">
            {t("hero.bookingTitle")}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{t("hero.bookingHint")}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase text-muted-foreground">
            {dayNames.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
          {[...months.entries()].map(([key, days]) => {
            const [year, month] = key.split("-").map(Number);
            const firstOfMonth = new Date(year, month, 1);
            const padding = (firstOfMonth.getDay() + 7) % 7;
            return (
              <div key={key} className="space-y-2">
                <h3 className="text-left text-sm font-medium capitalize text-muted-foreground">
                  {monthFormatter.format(firstOfMonth)}
                </h3>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: padding }).map((_, index) => (
                    <span key={`pad-${key}-${index}`} />
                  ))}
                  {days.map((day) => {
                    const disabled = isDisabled(day);
                    const active = isActive(day);
                    return (
                      <button
                        key={day.toISOString()}
                        type="button"
                        onClick={() => handleDayClick(day)}
                        className={`flex h-10 items-center justify-center rounded-md text-sm transition ${
                          active
                            ? "bg-primary text-primary-foreground shadow"
                            : disabled
                              ? "cursor-not-allowed text-muted-foreground/50"
                              : "hover:bg-slate-100 dark:hover:bg-slate-900"
                        }`}
                        disabled={disabled}
                      >
                        {day.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="grid gap-2 rounded-xl bg-slate-50 p-4 text-sm dark:bg-slate-900/60">
            <div className="flex items-center justify-between">
              <span className="font-medium text-muted-foreground">
                {t("hero.arrival")}
              </span>
              <span className="font-semibold text-foreground">
                {formatDate(range.from, language)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-muted-foreground">
                {t("hero.departure")}
              </span>
              <span className="font-semibold text-foreground">
                {formatDate(range.to, language)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-muted-foreground">
                {t("hero.nights")}
              </span>
              <span className="font-semibold text-foreground">
                {t("hero.nightsValue", { count: nightsCount })}
              </span>
            </div>
          </div>

          {error ? (
            <p className="text-sm font-medium text-red-500">{error}</p>
          ) : null}

          <div className="flex flex-wrap items-center gap-3">
            <Suspense fallback={<button className="h-11 flex-1 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground" disabled>{t("hero.submit")}</button>}>
              <Button
                asChild
                size="lg"
                disabled={!range.from || !range.to}
                onClick={handleSubmit}
              >
                <a href={CTA_URL}>{t("hero.submit")}</a>
              </Button>
            </Suspense>
            <button
              type="button"
              onClick={handleReset}
              className="text-sm font-medium text-muted-foreground underline-offset-2 hover:underline"
            >
              {t("common.reset")}
            </button>
          </div>
        </CardContent>
      </Card>
    </Suspense>
  );
};

