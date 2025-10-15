export const Testimonials = () => {
  const testimonials = [
    {
      name: "Pavel Novák",
      role: "Praha 3",
      comment:
        "Malíři přijeli přesně na čas, vše zakryli a po práci nechali byt čistý. Barva sedí přesně podle vzorníku. Doporučuji!",
    },
    {
      name: "Марина и Алексей",
      role: "Прага 5",
      comment:
        "Ребята помогли быстро освежить квартиру перед сдачей. Подсказали по цветам, сделали шпаклёвку и покраску за два дня.",
    },
    {
      name: "Sophie Clark",
      role: "Prague Office",
      comment:
        "Great communication in English and very professional finish. Our office now looks bright and welcoming again.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-slate-50"
    >
      <div className="container py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-800 md:text-4xl">
            Клиенты о нас
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Жители Праги доверяют нам окраску квартир, домов и офисов — на русском,
            чешском и английском языках.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ name, role, comment }) => (
            <figure
              key={name}
              className="flex h-full flex-col justify-between rounded-3xl border border-blue-100 bg-white p-8 text-left shadow-sm"
            >
              <blockquote className="text-base text-slate-600">
                “{comment}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-lg font-semibold text-slate-800">{name}</p>
                <p className="text-sm text-slate-500">{role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
