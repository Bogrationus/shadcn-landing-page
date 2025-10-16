import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25)_0%,_transparent_60%)]" />
      <div className="container flex flex-col items-center gap-10 py-20 text-center md:py-32">
        <div className="space-y-6 md:max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Путешествия PRICK!-лючения
          </span>
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Организуй своё дерзкое приключение вместе с нами
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Мы собираем свободолюбивых искателей эмоций, чтобы исследовать новые города,
            просыпаться у моря и делиться живыми впечатлениями в комьюнити, которое всегда на связи.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
          <Button
            asChild
            size="lg"
            className="md:w-auto"
          >
            <a
              href="https://t.me/prick_trip"
              target="_blank"
              rel="noreferrer"
            >
              Вступить в Telegram-отряд
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="md:w-auto"
            asChild
          >
            <a href="#features">Исследовать маршруты</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
