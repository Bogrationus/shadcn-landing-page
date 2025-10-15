export const CTA_URL = "https://penzion-kersko.com/rezervace/";

export type AnalyticsEvent = "view_promotion" | "begin_checkout" | "purchase";

const PROMOTION_ID = "weeknights_fireplace";

type EventPayload = Record<string, string | number | undefined>;

const pushToDataLayer = (event: AnalyticsEvent, payload?: EventPayload) => {
  if (typeof window === "undefined") {
    return;
  }

  const enriched = {
    event,
    promotion_id: PROMOTION_ID,
    ...payload,
  };

  (window as typeof window & { dataLayer?: unknown[] }).dataLayer ??= [];
  (window as typeof window & { dataLayer: unknown[] }).dataLayer.push(enriched);

  if (typeof (window as typeof window & { gtag?: unknown }).gtag === "function") {
    (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      event,
      enriched,
    );
  }

  if (typeof (window as typeof window & { fbq?: unknown }).fbq === "function") {
    (window as typeof window & { fbq: (...args: unknown[]) => void }).fbq(
      "trackCustom",
      event,
      enriched,
    );
  }
};

export const trackViewPromotion = (payload?: EventPayload) => {
  pushToDataLayer("view_promotion", payload);
};

export const trackBeginCheckout = (payload?: EventPayload) => {
  pushToDataLayer("begin_checkout", payload);
};

export const trackPurchase = (payload?: EventPayload) => {
  pushToDataLayer("purchase", payload);
};

