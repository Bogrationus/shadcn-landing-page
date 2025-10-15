import { Suspense, lazy, useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import { CTA_URL, trackBeginCheckout } from "@/lib/analytics";

const Button = lazy(() =>
  import("./ui/button").then((module) => ({ default: module.Button })),
);

export const StickyPromobar = () => {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur lg:hidden dark:border-slate-800 dark:bg-background/95">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-foreground">
          {t("sticky.title")}
        </div>
        <Suspense fallback={<button className="h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground" disabled>{t("sticky.cta")}</button>}>
          <Button
            asChild
            className="h-10 px-4"
            onClick={() => trackBeginCheckout({ source: "sticky-promobar" })}
          >
            <a href={CTA_URL}>{t("sticky.cta")}</a>
          </Button>
        </Suspense>
      </div>
    </div>
  );
};

