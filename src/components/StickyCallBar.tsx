"use client";

import { site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { PhoneIcon } from "@/components/icons";

export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 sm:hidden">
      <a
        href={site.phoneHref}
        onClick={() => trackEvent("call_click", { location: "sticky_bar" })}
        className="flex items-center justify-center gap-2 bg-rose py-3.5 text-sm font-bold uppercase tracking-wide text-ink shadow-[0_-2px_10px_rgba(0,0,0,0.15)]"
      >
        <PhoneIcon className="h-5 w-5" />
        Call Now: {site.phone}
      </a>
    </div>
  );
}
