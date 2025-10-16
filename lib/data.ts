export const trips = [
  {
    title: "Фератты Йесеники",
    dates: "15–17 ноября",
    description:
      "Связки по карнизам, подъём по стремянкам и панорамы Моравии без толп туристов.",
  },
  {
    title: "Сплав Влтава",
    dates: "3–5 мая",
    description:
      "Весенние воды, ночёвки в кемпингах и культурная Прага на десерт после приключений.",
  },
  {
    title: "Альпы Швейцарии",
    dates: "22–28 июля",
    description:
      "Высокогорные тропы, ночи в уютных хижинах и ледники, к которым можно прикоснуться.",
  },
];

export const testimonials = [
  {
    name: "Марина",
    text: "Уже третий поход с @lingvopunk — каждый раз открываю Европу с неожиданной стороны и возвращаюсь с чувством суперсилы.",
  },
  {
    name: "Игорь",
    text: "Формат малых групп — находка. Маршруты сложные, но с поддержкой гида всё проходит очень уверенно и дружно.",
  },
  {
    name: "Соня",
    text: "Невероятная забота о деталях: от трансферов до вечерних встреч у костра. Хочется повторить!",
  },
];

const galleryGradients = [
  ["#f472b6", "#38bdf8"],
  ["#22d3ee", "#a855f7"],
  ["#34d399", "#0ea5e9"],
  ["#a855f7", "#fb7185"],
  ["#38bdf8", "#f472b6"],
  ["#34d399", "#a855f7"],
  ["#fb7185", "#38bdf8"],
  ["#22d3ee", "#34d399"],
];

const createGalleryPlaceholder = (index: number) => {
  const [from, to] = galleryGradients[index % galleryGradients.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" rx="48" fill="url(#gradient)" />
      <g fill="#ffffff" fill-opacity="0.9" font-family="'Manrope', 'Inter', sans-serif">
        <text x="50%" y="48%" font-size="36" text-anchor="middle">prick_trip</text>
        <text x="50%" y="60%" font-size="22" text-anchor="middle">Кадр ${index + 1}</text>
      </g>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const galleryImages = Array.from({ length: 8 }, (_, index) => createGalleryPlaceholder(index));
