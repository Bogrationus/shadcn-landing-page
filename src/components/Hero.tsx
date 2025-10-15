import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container flex flex-col items-center gap-10 py-20 text-center md:py-32">
      <div className="space-y-6 md:max-w-2xl">
        <h1 className="text-5xl font-bold md:text-6xl">
          My New Landing
        </h1>
        <p className="text-xl text-muted-foreground">
          Modern landing built with shadcn/ui to help you launch polished
          product experiences faster.
        </p>
      </div>

      <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
        <Button className="md:w-auto">Start building</Button>
        <Button
          variant="outline"
          className="md:w-auto"
        >
          Explore features
        </Button>
      </div>
    </section>
  );
};
