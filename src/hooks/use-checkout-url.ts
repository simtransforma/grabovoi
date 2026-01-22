const BASE_CHECKOUT_URL = "https://chk.eduzz.com/8WPA8A5YWP";

const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export function useCheckoutUrl() {
  const getUtmParams = (): UtmParams => {
    if (typeof window === "undefined") return {};

    const currentParams = new URLSearchParams(window.location.search);
    const utmParams: UtmParams = {};

    UTM_PARAMS.forEach((key) => {
      const value = currentParams.get(key);
      if (value) utmParams[key] = value;
    });

    return utmParams;
  };

  const getCheckoutUrl = () => {
    if (typeof window === "undefined") return BASE_CHECKOUT_URL;

    const currentParams = new URLSearchParams(window.location.search);
    const utmParams = new URLSearchParams();

    UTM_PARAMS.forEach((key) => {
      const value = currentParams.get(key);
      if (value) utmParams.set(key, value);
    });

    const queryString = utmParams.toString();
    return queryString ? `${BASE_CHECKOUT_URL}?${queryString}` : BASE_CHECKOUT_URL;
  };

  return { 
    checkoutUrl: getCheckoutUrl(),
    utmParams: getUtmParams(),
  };
}
