import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "cs" | "en";

type TranslationRecord = Record<string, unknown>;

type TranslationMap = Record<Language, TranslationRecord>;

const STORAGE_KEY = "penzion-kersko-lang";

const translations: TranslationMap = {
  cs: {
    common: {
      reset: "Resetovat",
    },
    nav: {
      brand: "Penzion Kersko",
      menu: {
        offer: "Nabídka",
        rooms: "Pokoje",
        faq: "FAQ",
      },
      cta: "Zkontrolovat dostupnost",
      mobileHint: "Promo platí Ne–Čt",
    },
    hero: {
      title: "Všední dny u krbu",
      highlight: "−20 %",
      description:
        "Min. 2 noci, welcome svařák, pozdní check-out do 14:00 (dle dostupnosti) a drobné občerstvení.",
      bookingTitle: "Rezervační kalendář",
      bookingHint: "Vyberte příjezd (Ne–St) a délku pobytu",
      arrival: "Příjezd",
      departure: "Odjezd",
      nights: "Počet nocí",
      nightsValue: "{count} noci",
      invalidRange: "Minimální délka pobytu jsou 2 noci bez pátků a sobot.",
      submit: "Pokračovat na rezervaci",
    },
    benefits: {
      title: "Výhody nabídky",
      description: "Co získáte při rezervaci pobytu v týdnu",
      items: {
        discount: {
          title: "Sleva −20 %",
          description: "Cenové zvýhodnění pro pobyty mezi nedělí a čtvrtkem.",
        },
        mulledWine: {
          title: "Welcome svařák",
          description: "Ohřejte se hned po příjezdu domácím svařeným vínem.",
        },
        lateCheckout: {
          title: "Pozdní check-out",
          description: "Check-out do 14:00 dle dostupnosti, bez stresu a ve svém tempu.",
        },
        snacks: {
          title: "Občerstvení",
          description: "Sladké i slané dobroty k večernímu posezení u krbu.",
        },
      },
    },
    rooms: {
      title: "Pokoje a apartmány",
      description:
        "Tři kategorie pokojů s výhledem do lesa, ke krbu i do zahrady. Každý má vlastní krbová kamna a útulný kout pro čtení.",
      items: {
        classic: {
          title: "Classic pokoj",
          description:
            "Pro dvě osoby, manželská postel, sprcha, terasa směrem do borového lesa.",
        },
        deluxe: {
          title: "Deluxe suite",
          description:
            "Obývací část s krbem, samostatná ložnice a vana na nožičkách. Ideální na romantický únik.",
        },
        family: {
          title: "Rodinný apartmán",
          description:
            "Dvě ložnice, dětský koutek a kuchyňka. Komfortní základna pro výlety do okolí.",
        },
      },
    },
    testimonials: {
      title: "Hosté o pobytu",
      description: "Skutečné zážitky z posledních týdnů",
      items: [
        {
          name: "Petra K.",
          location: "Praha",
          comment:
            "Zimní týden v Keršku byl jako z pohádky. Večery u krbu se svařákem jsme si zamilovali.",
        },
        {
          name: "Martin a Eva",
          location: "Hradec Králové",
          comment:
            "Útulné pokoje, milý personál a perfektní snídaně. Děti ocenily domácí koláče.",
        },
        {
          name: "Lucie P.",
          location: "Brno",
          comment:
            "Late check-out nám umožnil užít si ještě procházku po lese. Vrátíme se na jaře!",
        },
      ],
    },
    faq: {
      title: "Časté dotazy",
      items: [
        {
          question: "Kdy akce platí?",
          answer: "Nabídka platí pro pobyty s příjezdem od neděle do středy a odjezdem nejpozději ve čtvrtek odpoledne.",
        },
        {
          question: "Jaká je minimální délka pobytu?",
          answer: "Minimálně 2 noci. Kalendář automaticky hlídá, aby pobyt neobsahoval pátky a soboty.",
        },
        {
          question: "Je pozdní check-out garantovaný?",
          answer: "Pozdní check-out do 14:00 je na vyžádání a potvrzuje se při příjezdu podle obsazenosti.",
        },
        {
          question: "Co zahrnuje občerstvení?",
          answer: "Domácí koláče, sýrové prkénko a výběr bylinkových čajů. Vše připravené na pokoji.",
        },
      ],
    },
    footer: {
      rights: "© {year} Penzion Kersko. Všechna práva vyhrazena.",
      links: {
        main: "Hlavní web",
        contact: "Kontakt",
        gdpr: "Zpracování osobních údajů",
        cookies: "Cookies",
      },
      language: "Jazyk",
    },
    sticky: {
      title: "Všední dny u krbu −20 %",
      cta: "Zkontrolovat dostupnost",
    },
  },
  en: {
    common: {
      reset: "Reset",
    },
    nav: {
      brand: "Penzion Kersko",
      menu: {
        offer: "Offer",
        rooms: "Rooms",
        faq: "FAQ",
      },
      cta: "Check availability",
      mobileHint: "Stay Sun–Thu",
    },
    hero: {
      title: "Weeknights by the Fireplace",
      highlight: "−20%",
      description:
        "Min. 2 nights, mulled-wine welcome drink, late check-out until 2 p.m. (subject to availability) and complimentary snacks.",
      bookingTitle: "Booking calendar",
      bookingHint: "Choose arrival (Sun–Wed) and length of stay",
      arrival: "Arrival",
      departure: "Departure",
      nights: "Number of nights",
      nightsValue: "{count} nights",
      invalidRange: "Minimum stay is 2 nights without Fridays or Saturdays.",
      submit: "Continue to reservation",
    },
    benefits: {
      title: "Offer highlights",
      description: "Everything included in the weekday package",
      items: {
        discount: {
          title: "20% off",
          description: "Discounted stays between Sunday and Thursday nights.",
        },
        mulledWine: {
          title: "Mulled wine welcome",
          description: "Warm up right after arrival with our house-made mulled wine.",
        },
        lateCheckout: {
          title: "Late check-out",
          description:
            "Check out at 2 p.m. (subject to availability) so you can take your time.",
        },
        snacks: {
          title: "Snacks included",
          description: "Sweet and savoury treats for cosy evenings by the fire.",
        },
      },
    },
    rooms: {
      title: "Rooms & suites",
      description:
        "Three room categories with forest, fireplace or garden views. Each features a stove and a snug reading nook.",
      items: {
        classic: {
          title: "Classic room",
          description:
            "Sleeps two, queen bed, rainfall shower and a terrace overlooking the pine woods.",
        },
        deluxe: {
          title: "Deluxe suite",
          description:
            "Living area with fireplace, separate bedroom and clawfoot bathtub. Perfect for a romantic escape.",
        },
        family: {
          title: "Family apartment",
          description:
            "Two bedrooms, play corner and kitchenette. A comfy base for exploring the region.",
        },
      },
    },
    testimonials: {
      title: "Guest stories",
      description: "Real impressions from recent stays",
      items: [
        {
          name: "Petra K.",
          location: "Prague",
          comment:
            "A winter week in Kersko felt like a fairy tale. Evenings by the fire with mulled wine were unforgettable.",
        },
        {
          name: "Martin & Eva",
          location: "Hradec Králové",
          comment:
            "Cosy rooms, kind staff and breakfast to remember. The kids loved the homemade cakes.",
        },
        {
          name: "Lucie P.",
          location: "Brno",
          comment:
            "Late check-out let us enjoy one more walk in the woods. We will be back in spring!",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "When is the promotion valid?",
          answer: "The offer applies to arrivals between Sunday and Wednesday with departures by Thursday afternoon.",
        },
        {
          question: "What is the minimum stay?",
          answer: "At least 2 nights. The calendar makes sure no Friday or Saturday is included.",
        },
        {
          question: "Is late check-out guaranteed?",
          answer: "Late check-out until 2 p.m. is on request and confirmed on arrival depending on occupancy.",
        },
        {
          question: "What snacks are included?",
          answer: "Homemade cakes, a cheese board and a selection of herbal teas prepared in your room.",
        },
      ],
    },
    footer: {
      rights: "© {year} Penzion Kersko. All rights reserved.",
      links: {
        main: "Main website",
        contact: "Contact",
        gdpr: "Privacy policy",
        cookies: "Cookies",
      },
      language: "Language",
    },
    sticky: {
      title: "Weeknight fireplace stay −20%",
      cta: "Check availability",
    },
  },
};

interface I18nContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
  translations: TranslationRecord;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const getNestedValue = (
  source: TranslationRecord,
  path: string,
): unknown => {
  return path.split(".").reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === "object" && !Array.isArray(acc)) {
      return (acc as Record<string, unknown>)[segment];
    }
    return acc;
  }, source);
};

const applyReplacements = (
  value: string,
  replacements?: Record<string, string | number>,
) => {
  if (!replacements) {
    return value;
  }
  return Object.entries(replacements).reduce((acc, [key, val]) => {
    return acc.replace(`{${key}}`, String(val));
  }, value);
};

const resolveTranslation = (
  key: string,
  language: Language,
  replacements?: Record<string, string | number>,
) => {
  const value = getNestedValue(translations[language], key);
  if (typeof value === "string") {
    return applyReplacements(value, replacements);
  }
  return "";
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "cs";
    }
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    return stored ?? "cs";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  const t = useCallback(
    (key: string, replacements?: Record<string, string | number>) =>
      resolveTranslation(key, language, replacements),
    [language],
  );

  const value = useMemo<I18nContextValue>(() => {
    return {
      language,
      setLanguage,
      t,
      translations: translations[language],
    };
  }, [language, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
};

export const AVAILABLE_LANGUAGES: Array<{ label: string; value: Language }> = [
  { label: "Česky", value: "cs" },
  { label: "English", value: "en" },
];

