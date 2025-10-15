import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Ready-to-use sections",
    description:
      "Mix and match modular building blocks without starting from scratch.",
  },
  {
    title: "Accessible by default",
    description:
      "Every component follows shadcn/ui guidelines so your experience works for everyone.",
  },
  {
    title: "Easy theming",
    description:
      "Adjust typography, spacing, and color tokens to reflect your brand instantly.",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container space-y-10 py-24 sm:py-32"
    >
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Powerful features</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Build a modern landing page with opinionated defaults that keep your
          focus on shipping value instead of wiring UI details.
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
