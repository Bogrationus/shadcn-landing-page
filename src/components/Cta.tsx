import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            Готов к следующему побегу?
          </h2>
          <p className="text-lg text-muted-foreground md:max-w-xl">
            Оставь заявку и мы подберём маршрут под твой драйв: серфинг на рассвете,
            треккинг к водопадам или гастрономический уикенд в европейских столицах.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-auto lg:flex-row">
          <Button
            asChild
            size="lg"
            className="lg:w-auto"
          >
            <a
              href="https://t.me/prick_trip"
              target="_blank"
              rel="noreferrer"
            >
              Написать нам в Telegram
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="lg:w-auto"
            asChild
          >
            <a href="mailto:hello@prick-trip.ru">Получить программу</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
