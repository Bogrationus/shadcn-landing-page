import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            Launch your next idea in minutes
          </h2>
          <p className="text-lg text-muted-foreground md:max-w-xl">
            Plug these sections into any React project and publish a polished
            landing page without the busywork.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-auto lg:flex-row">
          <Button className="lg:w-auto">Create project</Button>
          <Button
            variant="outline"
            className="lg:w-auto"
          >
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  );
};
