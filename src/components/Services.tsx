export const Services = () => {
  const serviceList = [
    {
      title: "Покраска интерьеров",
      description:
        "Стены, потолки, лестницы и декоративные элементы в жилых и коммерческих помещениях.",
      icon: "🎨",
    },
    {
      title: "Покраска фасадов",
      description:
        "Подготовка, ремонт трещин и нанесение устойчивых к климату фасадных красок.",
      icon: "🏠",
    },
    {
      title: "Декоративные покрытия",
      description:
        "Венецианская штукатурка, декоративные эффекты, акцентные стены и цветовые решения.",
      icon: "✨",
    },
    {
      title: "Ремонт стен и потолков",
      description:
        "Шпаклёвка, выравнивание, устранение плесени и подготовка поверхностей под покраску.",
      icon: "🛠️",
    },
  ];

  return (
    <section
      id="services"
      className="bg-slate-50"
    >
      <div className="container py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-800 md:text-4xl">
            Наши услуги
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Помогаем обновить пространство под ключ: от подготовки поверхностей
            до финишной уборки.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceList.map(({ title, description, icon }) => (
            <div
              key={title}
              className="flex h-full flex-col rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-4 text-3xl">{icon}</span>
              <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
              <p className="mt-3 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
