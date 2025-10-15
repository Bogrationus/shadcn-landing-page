import { useEffect } from "react";
import { CTA_URL, trackBeginCheckout, trackViewPromotion } from "@/lib/analytics";
import { Button } from "./ui/button";

const HERO_IMAGE = "https://penzion-kersko.com/wp-content/uploads/2020/05/penzion-kersko-uvod.jpg";

export const Hero = () => {
  useEffect(() => {
    trackViewPromotion({ source: "hero" });
  }, []);

  const handleClick = () => {
    trackBeginCheckout({ source: "hero" });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-1 items-center bg-emerald-900"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Penzion Kersko v zeleni se zahradou a posezením"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-emerald-950/70" aria-hidden />
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto flex flex-col gap-10 px-4 py-24 text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex w-max rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
              Všední dny u krbu −20 %
            </span>
            <h1 id="hero-heading" className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Penzion Kersko
              <span className="mt-2 block text-emerald-100">Překrásný odpočinek v přírodě</span>
            </h1>
            <p className="text-lg text-emerald-50 sm:text-xl">
              Dopřejte si klidné večery u krbu, probouzení v zeleni a rodinnou atmosféru jen kousek od Prahy. Rezervujte si všední dny se zvýhodněním 20&nbsp;%.
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base font-semibold text-emerald-950"
                onClick={handleClick}
              >
                <a href={CTA_URL}>Rezervace</a>
              </Button>
              <div className="text-sm leading-relaxed text-emerald-100/90">
                <p>
                  <a className="transition hover:text-white" href="mailto:info@penzion-kersko.cz">
                    info@penzion-kersko.cz
                  </a>
                </p>
                <p className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <a className="transition hover:text-white" href="tel:+420777837239">
                    +420 777 837 239
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a className="transition hover:text-white" href="tel:+420608932667">
                    +420 608 932 667
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
