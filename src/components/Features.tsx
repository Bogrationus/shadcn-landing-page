import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Авторские маршруты",
    description:
      "От Карелии до Балкан — тщательно собранные треки, в которых чередуются горы, море и локальные открытия без туристической суеты.",
  },
  {
    title: "Живое комьюнити",
    description:
      "Мини-группы единомышленников, вечерние посиделки у костра и поддержка в пути через Telegram-канал PRICK!-лючения.",
  },
  {
    title: "Забота о деталях",
    description:
      "Мы берём на себя трансферы, уютные апартаменты и подбор активностей, чтобы ты наслаждался впечатлениями и новыми друзьями.",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container space-y-10 py-24 sm:py-32"
    >
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Почему PRICK!-лючения</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Путешествия, в которых сочетаются драйв, безопасность и тонкое чувство стиля.
          Присоединяйся и мы подготовим твой следующий побег от рутины.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="h-full"
          >
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
