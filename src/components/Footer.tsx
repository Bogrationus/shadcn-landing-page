import React from "react";
import { AVAILABLE_LANGUAGES, useI18n } from "@/i18n";

const footerLinks = [
  {
    href: "https://penzion-kersko.com/",
    key: "footer.links.main",
  },
  {
    href: "https://penzion-kersko.com/kontakt/",
    key: "footer.links.contact",
  },
  {
    href: "https://penzion-kersko.com/gdpr/",
    key: "footer.links.gdpr",
  },
  {
    href: "https://penzion-kersko.com/cookies/",
    key: "footer.links.cookies",
  },
];

export const Footer = () => {
  const { language, setLanguage, t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-background">
      <div className="container mx-auto flex flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 text-center md:text-left">
          <span className="text-lg font-semibold">Penzion Kersko</span>
          <p className="text-sm text-muted-foreground">
            {t("footer.rights", { year })}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-muted-foreground md:justify-end">
          {footerLinks.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-2 text-sm md:items-end">
          <label htmlFor="language-select" className="text-muted-foreground">
            {t("footer.language")}
          </label>
          <select
            id="language-select"
            value={language}
            onChange={(event) => setLanguage(event.target.value as typeof language)}
            className="w-40 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-slate-800 dark:bg-slate-950"
          >
            {AVAILABLE_LANGUAGES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </footer>
  );
};

