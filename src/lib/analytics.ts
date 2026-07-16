type Gtag = (...args: unknown[]) => void;

export function trackEvent(action: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: Gtag }).gtag;
  gtag?.("event", action, params);
}
