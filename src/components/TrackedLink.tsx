"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  event: string;
  location: string;
  external?: boolean;
  onClickExtra?: () => void;
};

export default function TrackedLink({
  href,
  className,
  children,
  event,
  location,
  external,
  onClickExtra,
}: Props) {
  const handleClick = () => {
    trackEvent(event, { location });
    onClickExtra?.();
  };

  if (external) {
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
