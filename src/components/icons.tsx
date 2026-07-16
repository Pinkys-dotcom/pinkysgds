type IconProps = { className?: string };

const base = "currentColor";

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-.5-.5-2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DoorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M4 9h16M4 14h16" />
    </svg>
  );
}

export function OpenerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <path d="M8 10v10M16 10v10M6 20h4M14 20h4" strokeLinecap="round" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <rect x="3" y="7" width="18" height="14" rx="1" />
      <path d="M3 7l9-4 9 4M9 21v-5h6v5M7 11h.01M12 11h.01M17 11h.01M7 15h.01M17 15h.01" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className}>
      <path d="M12 2.5l2.9 6 6.6.6-5 4.4 1.5 6.5L12 16.8 6 20l1.5-6.5-5-4.4 6.6-.6z" />
    </svg>
  );
}

export function CreditCardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 11c-2.5 4.6-9.5 9-9.5 9z" strokeLinejoin="round" />
    </svg>
  );
}

export function DollarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.2c0 3 6 1.5 6 4.5 0 1.3-1.3 2.3-3 2.3s-3-1-3-2.3" strokeLinecap="round" />
    </svg>
  );
}

export function AwardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <path d="M5 4h3.5l1.5 5-2.3 1.7a11 11 0 0 0 5.6 5.6l1.7-2.3 5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-1z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth="1.75" className={className}>
      <path d="M4 11l8-7 8 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9.5V20h12V9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const serviceIconMap: Record<string, (props: IconProps) => React.JSX.Element> = {
  wrench: WrenchIcon,
  door: DoorIcon,
  opener: OpenerIcon,
  building: BuildingIcon,
};

export const trustIconMap: Record<string, (props: IconProps) => React.JSX.Element> = {
  ClockIcon,
  ShieldIcon,
  StarIcon,
  CreditCardIcon,
};
