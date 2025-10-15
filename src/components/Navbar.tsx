import { Suspense, lazy, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { useI18n } from "@/i18n";
import { CTA_URL, trackBeginCheckout } from "@/lib/analytics";

const Button = lazy(() =>
  import("./ui/button").then((module) => ({ default: module.Button })),
);

const MenuIcon = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.Menu })),
);

const XIcon = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.X })),
);

const FireplaceIcon = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.Fireplace })),
);

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "#nabidka", label: "nav.menu.offer" },
  { href: "#pokoje", label: "nav.menu.rooms" },
  { href: "#faq", label: "nav.menu.faq" },
];

export const Navbar = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const handleCTAClick = () => {
    trackBeginCheckout({ source: "navbar" });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-background/90">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <a className="flex items-center gap-2 font-semibold" href="#nabidka">
          <Suspense fallback={<span className="sr-only">🔥</span>}>
            <FireplaceIcon className="h-6 w-6" aria-hidden />
          </Suspense>
          <span className="text-lg md:text-xl">{t("nav.brand")}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Suspense fallback={<button className="h-9 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground" disabled>{t("nav.cta")}</button>}>
            <Button asChild className="h-9 px-4 py-2" onClick={handleCTAClick}>
              <a href={CTA_URL}>{t("nav.cta")}</a>
            </Button>
          </Suspense>
          <ModeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            {t("nav.mobileHint")}
          </span>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <Suspense fallback={<span className="sr-only">Menu</span>}>
              {isOpen ? (
                <XIcon className="h-5 w-5" aria-hidden />
              ) : (
                <MenuIcon className="h-5 w-5" aria-hidden />
              )}
            </Suspense>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-background md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                {t(item.label)}
              </a>
            ))}
            <Suspense fallback={<button className="h-11 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground" disabled>{t("nav.cta")}</button>}>
              <Button asChild size="lg" onClick={handleCTAClick}>
                <a href={CTA_URL}>{t("nav.cta")}</a>
              </Button>
            </Suspense>
          </nav>
        </div>
      ) : null}
    </header>
  );
};
