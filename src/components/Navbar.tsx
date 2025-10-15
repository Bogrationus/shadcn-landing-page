import { CTA_URL, trackBeginCheckout } from "@/lib/analytics";
import { Button } from "./ui/button";

export const Navbar = () => {
  const handleClick = () => {
    trackBeginCheckout({ source: "navbar" });
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="bg-emerald-700 text-white">
        <div className="container mx-auto flex flex-col gap-2 px-4 py-2 text-xs font-medium sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <span>Kersko 325, 289 12 Hradištko</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a className="transition hover:text-emerald-100" href="mailto:info@penzion-kersko.cz">
              info@penzion-kersko.cz
            </a>
            <a className="transition hover:text-emerald-100" href="tel:+420777837239">
              +420 777 837 239
            </a>
            <a className="transition hover:text-emerald-100" href="tel:+420608932667">
              +420 608 932 667
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <a href="#hero" className="flex items-center gap-3 text-emerald-900">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white">
            PK
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold md:text-2xl">Penzion Kersko</span>
            <span className="text-sm font-medium text-muted-foreground md:text-base">
              Překrásný odpočinek v přírodě
            </span>
          </div>
        </a>
        <Button asChild size="lg" className="px-6" onClick={handleClick}>
          <a href={CTA_URL}>Rezervace</a>
        </Button>
      </div>
    </header>
  );
};
