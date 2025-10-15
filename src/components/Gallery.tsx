export const Gallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      alt: "painting services Prague",
    },
    {
      src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
      alt: "маляр Прага",
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-d23f6ef2eab4?auto=format&fit=crop&w=900&q=80",
      alt: "painting services Prague",
    },
    {
      src: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80",
      alt: "маляр Прага",
    },
    {
      src: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=900&q=80",
      alt: "painting services Prague",
    },
    {
      src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
      alt: "маляр Прага",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-white"
    >
      <div className="container py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-800 md:text-4xl">
            Галерея работ
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            До и после: аккуратная подготовка, ровные линии и чистое исполнение
            на объектах по всей Праге.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map(({ src, alt }, index) => (
            <div
              key={src}
              className={`overflow-hidden rounded-3xl border border-blue-100 bg-slate-50 shadow-sm ${
                index % 3 === 0 ? "sm:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
