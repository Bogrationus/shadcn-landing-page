import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="container grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-[#2563EB]">
            Малярные услуги в Праге
          </span>
          <h1 className="text-4xl font-semibold text-slate-800 md:text-5xl lg:text-6xl">
            Профессиональная покраска домов и квартир в Праге
          </h1>
          <p className="mx-auto max-w-xl text-lg text-slate-600 lg:mx-0">
            Надёжно. Быстро. Чисто. Работаем аккуратно, соблюдаем сроки и
            оставляем после себя идеальные стены без лишних хлопот для вас.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row lg:justify-start">
            <Button
              asChild
              className="w-full rounded-full bg-[#2563EB] px-8 py-6 text-base font-semibold text-white hover:bg-[#1D4ED8] md:w-auto"
            >
              <a href="#contact">Заказать расчёт стоимости</a>
            </Button>
            <div className="flex items-center gap-3 text-slate-500">
              <span
                aria-hidden="true"
                className="h-10 w-10 rounded-full bg-blue-100/80"
              />
              <p className="max-w-[220px] text-sm text-slate-500">
                Бесплатный выезд мастера и оценка работ в течение 24 часов.
              </p>
            </div>
          </div>
          <dl className="grid gap-6 text-left sm:grid-cols-3">
            <div>
              <dt className="text-sm text-slate-500">Опыт работы</dt>
              <dd className="text-2xl font-semibold text-slate-800">10+ лет</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Гарантия на работы</dt>
              <dd className="text-2xl font-semibold text-slate-800">до 3 лет</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Рекомендаций клиентов</dt>
              <dd className="text-2xl font-semibold text-slate-800">95%</dd>
            </div>
          </dl>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-blue-100 via-white to-blue-50" />
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
            alt="маляр Прага"
            className="h-full max-h-[520px] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
