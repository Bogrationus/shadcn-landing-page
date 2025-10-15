export const About = () => {
  return (
    <section
      id="about"
      className="bg-white"
    >
      <div className="container grid gap-12 py-20 md:grid-cols-[0.95fr,1.05fr] md:py-28">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl border border-blue-100 bg-blue-50/40" />
          <img
            src="https://images.unsplash.com/photo-1523419409543-0c1df022bdd1?auto=format&fit=crop&w=900&q=80"
            alt="painting services Prague"
            className="h-full w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
        <div className="space-y-6 self-center">
          <h2 className="text-3xl font-semibold text-slate-800 md:text-4xl">
            Команда профессиональных маляров из Праги
          </h2>
          <p className="text-lg text-slate-600">
            Мы берёмся за квартиры, частные дома и офисы любой сложности.
            Работает постоянная команда мастеров, которые говорят на русском и
            чешском, соблюдают технологии и аккуратно защищают интерьер.
          </p>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-[#2563EB]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mx-auto h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <span className="text-base">
                Гарантия качества по договору и подробная смета перед стартом.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-[#2563EB]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mx-auto h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <span className="text-base">
                Бесплатный выезд и осмотр объекта в пределах Праги.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-[#2563EB]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mx-auto h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <span className="text-base">
                Используем проверенные краски европейских брендов и защищаем
                мебель плёнкой.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
