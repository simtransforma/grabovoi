const BASE_CHECKOUT_URL = "https://chk.eduzz.com/D0RA1AN69Y";

const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function useCheckoutUrl() {
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

  return { checkoutUrl: getCheckoutUrl() };
}
