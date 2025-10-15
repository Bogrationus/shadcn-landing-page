import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white"
    >
      <div className="container grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-3xl border border-blue-100 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-800 md:text-4xl">
            Свяжитесь с нами
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Оставьте заявку на расчёт стоимости. Ответим в течение рабочего дня и
            предложим удобное время бесплатного осмотра.
          </p>
          <form className="mt-8 space-y-6">
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-700"
                htmlFor="name"
              >
                Имя
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Ваше имя"
                className="border-blue-100 focus-visible:ring-[#2563EB]"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-700"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="border-blue-100 focus-visible:ring-[#2563EB]"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-slate-700"
                htmlFor="message"
              >
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Опишите объект или желаемые работы"
                className="w-full rounded-md border border-blue-100 bg-white px-3 py-2 text-base text-slate-700 shadow-sm focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <Button className="w-full rounded-full bg-[#2563EB] py-6 text-base font-semibold text-white hover:bg-[#1D4ED8]">
              Отправить запрос
            </Button>
          </form>
          <div className="mt-8 space-y-3 text-slate-600">
            <p>
              Телефон: <a className="text-[#2563EB]" href="tel:+420777123456">+420 777 123 456</a>
            </p>
            <p>
              Email: <a className="text-[#2563EB]" href="mailto:info@malirpraha.cz">info@malirpraha.cz</a>
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-blue-100 shadow-sm">
          <iframe
            title="Prague map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10243.379011002314!2d14.42076!3d50.08804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e5fbccb24b%3A0x500af0f66154040!2sPrague!5e0!3m2!1sen!2scz!4v1715088000000!5m2!1sen!2scz"
            width="100%"
            height="100%"
            loading="lazy"
            className="min-h-[320px] w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
