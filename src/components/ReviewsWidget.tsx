"use client";

import { useState } from "react";

export default function ReviewsWidget() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse space-y-4 p-6" aria-hidden="true">
          <div className="h-5 w-1/3 rounded bg-ink/10" />
          <div className="h-4 w-full rounded bg-ink/10" />
          <div className="h-4 w-5/6 rounded bg-ink/10" />
          <div className="h-5 w-1/3 rounded bg-ink/10" />
          <div className="h-4 w-full rounded bg-ink/10" />
          <div className="h-4 w-2/3 rounded bg-ink/10" />
        </div>
      )}
      <iframe
        src="https://client.housecallpro.com/reviews/widget/1814669b-abe6-4c38-96ef-76e3fc8e7621"
        title="Pinky's Garage Doors customer reviews"
        className="h-[800px] w-full"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
