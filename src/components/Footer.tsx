export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <section className="container grid gap-10 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <a
            rel="noreferrer noopener"
            href="/"
            className="text-2xl font-semibold text-slate-800"
          >
            Malířské služby Praha
          </a>
          <p className="text-sm text-slate-600">
            Профессиональная покраска квартир, домов и офисов в Праге. Работаем
            по договору, соблюдаем сроки и оставляем помещения чистыми.
          </p>
        </div>
        <div className="space-y-3 text-sm text-slate-600">
          <h3 className="text-lg font-semibold text-slate-800">Контакты</h3>
          <p>+420 777 123 456</p>
          <p>info@malirpraha.cz</p>
          <p>Praha, Česká republika</p>
        </div>
        <div className="space-y-3 text-sm text-slate-600">
          <h3 className="text-lg font-semibold text-slate-800">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-[#2563EB]" href="#services">
                Услуги
              </a>
            </li>
            <li>
              <a className="hover:text-[#2563EB]" href="#gallery">
                Галерея
              </a>
            </li>
            <li>
              <a className="hover:text-[#2563EB]" href="#testimonials">
                Отзывы
              </a>
            </li>
            <li>
              <a className="hover:text-[#2563EB]" href="#contact">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="border-t border-slate-200 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Malířské služby Praha. Все права защищены.</p>
          <p>Made with care in Prague.</p>
        </div>
      </div>
    </footer>
  );
};
