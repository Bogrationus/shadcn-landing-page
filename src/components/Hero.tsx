import { Suspense, lazy, useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import {
  CTA_URL,
  trackBeginCheckout,
  trackViewPromotion,
} from "@/lib/analytics";
import { StayDatePicker } from "./StayDatePicker";

const Button = lazy(() =>
  import("./ui/button").then((module) => ({ default: module.Button })),
);

export const Hero = () => {
  const { t } = useI18n();
  const [heroSrc, setHeroSrc] = useState<string | null>(null);

  useEffect(() => {
    trackViewPromotion({ source: "hero" });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = 1920;
    canvas.height = 1280;
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#2b1a16");
    gradient.addColorStop(0.4, "#3d2016");
    gradient.addColorStop(1, "#621f0f");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const glowGradient = context.createRadialGradient(
      canvas.width / 2,
      canvas.height * 0.8,
      50,
      canvas.width / 2,
      canvas.height,
      600,
    );
    glowGradient.addColorStop(0, "rgba(255, 180, 120, 0.85)");
    glowGradient.addColorStop(0.6, "rgba(200, 90, 30, 0.35)");
    glowGradient.addColorStop(1, "rgba(10, 5, 3, 0.1)");
    context.fillStyle = glowGradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/webp", 0.92);
    setHeroSrc(dataUrl);
  }, []);

  const handleCTAClick = () => {
    trackBeginCheckout({ source: "hero" });
  };

  return (
    <section
      id="nabidka"
      className="hero-critical container grid gap-10 place-items-center py-20 md:py-32 lg:grid-cols-2"
    >
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-5xl font-bold md:text-6xl">
          {t("hero.title")}
          {" "}
          <span className="bg-gradient-to-r from-pink-300 to-fuchsia-600 bg-clip-text text-transparent">
            {t("hero.highlight")}
          </span>
        </h1>
        <p className="mx-auto max-w-xl text-xl text-muted-foreground lg:mx-0">
          {t("hero.description")}
        </p>
        <Suspense fallback={<button className="h-11 rounded-md bg-primary px-6 text-lg font-semibold text-primary-foreground" disabled>{t("nav.cta")}</button>}>
          <Button asChild size="lg" onClick={handleCTAClick}>
            <a href={CTA_URL}>{t("nav.cta")}</a>
          </Button>
        </Suspense>
        <StayDatePicker />
      </div>
      <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg lg:h-full">
        <img
          src={
            heroSrc ??
            "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSAwAAAARL0AmbZurmr57yyIiqE8oiG0cHh9PA=="
          }
          width={1920}
          height={1280}
          alt="Praskající krb v lobby Penzionu Kersko"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
};
