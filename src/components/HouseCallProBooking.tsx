"use client";

import { useState } from "react";

const BOOKING_URL = "https://book.housecallpro.com/book/Pinkys-Garage-Doors/71bda3522a3440e08d7fc41ae0ad3393?v2=true";

export default function HouseCallProBooking() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse space-y-4 p-6" aria-hidden="true">
          <div className="h-6 w-2/3 rounded bg-ink/10" />
          <div className="h-11 w-full rounded bg-ink/10" />
          <div className="h-11 w-full rounded bg-ink/10" />
          <div className="h-11 w-full rounded bg-ink/10" />
          <div className="h-32 w-full rounded bg-ink/10" />
        </div>
      )}
      <iframe
        src={BOOKING_URL}
        title="Book an appointment with Pinky's Garage Doors"
        className="h-[900px] w-full"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
