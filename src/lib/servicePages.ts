export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  heroTagline: string;
  intro: string;
  signsTitle?: string;
  signs?: string[];
  whatWeDoTitle: string;
  whatWeDo: string[];
  whyParagraph: string;
  faqs: { question: string; answer: string }[];
  icon: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "garage-door-repair",
    title: "Garage Door Repair",
    shortTitle: "Repair",
    metaDescription:
      "Fast, honest garage door repair in Phoenix, AZ. Springs, cables, rollers, tracks, and openers—fixed right the first time. Same-day service available.",
    heroTagline: "Fast, honest repairs for any make or model.",
    intro:
      "A garage door that's stuck, noisy, or off-track isn't just inconvenient—it's often a sign something under real tension or strain is failing. Pinky's Garage Doors repairs springs, cables, rollers, tracks, panels, and openers for homes across the Phoenix metro, with technicians who diagnose the actual problem instead of guessing and upselling.",
    signsTitle: "Signs You Need a Repair",
    signs: [
      "The door is slow, jerky, or hesitates partway through opening or closing",
      "You hear grinding, popping, or scraping when the door moves",
      "The door looks crooked or uneven when it's partly open",
      "The door feels unusually heavy when lifted manually",
      "Rollers or hinges are visibly worn, rusted, or loose",
    ],
    whatWeDoTitle: "What Our Repair Service Covers",
    whatWeDo: [
      "Spring and cable diagnosis and replacement",
      "Roller, hinge, and track realignment or replacement",
      "Off-track door realignment",
      "Panel and section repair or replacement",
      "Opener troubleshooting and repair",
      "Weatherstripping and seal replacement",
    ],
    whyParagraph:
      "We carry parts for all major garage door brands, so most repairs are completed in a single visit. Every estimate is upfront before we start work—no surprise line items, no pressure to buy more than you need.",
    faqs: [
      {
        question: "How much does garage door repair cost?",
        answer:
          "It depends on the part involved—spring and cable repairs are the most common calls. We give you an exact, upfront price after a quick inspection, not a vague estimate over the phone.",
      },
      {
        question: "Can you repair any brand of garage door?",
        answer:
          "Yes. Our technicians work on all major residential garage door and opener brands, and we carry parts for most of them on the truck.",
      },
      {
        question: "Do you offer same-day repair?",
        answer:
          "In most cases, yes. Call us at 480-901-0355 and we'll do our best to get a technician out the same day, especially for doors that won't open or close.",
      },
    ],
    icon: "wrench",
  },
  {
    slug: "garage-door-spring-replacement",
    title: "Garage Door Spring Replacement",
    shortTitle: "Spring Replacement",
    metaDescription:
      "Garage door spring replacement in Phoenix, AZ. Same-day service for broken torsion and extension springs, done safely by licensed technicians.",
    heroTagline: "Same-day spring replacement, done safely.",
    intro:
      "Garage door springs counterbalance the full weight of the door, and a broken spring is one of the most common—and most dangerous to DIY—garage door problems. Pinky's Garage Doors replaces torsion and extension springs for homes across the Phoenix metro, usually the same day you call.",
    signsTitle: "Signs Your Spring Has Failed",
    signs: [
      "A loud bang from the garage, often first thing in the morning",
      "The door won't open, or an opener strains and stalls trying to lift it",
      "A visible gap in the coil above the door",
      "The door looks crooked or lopsided when partly open",
    ],
    whatWeDoTitle: "What's Included",
    whatWeDo: [
      "Diagnosis of torsion vs. extension spring systems",
      "Replacement with correctly sized, matched springs (never a mismatched pair)",
      "Cable inspection, since worn cables often fail alongside springs",
      "Full balance and safety test after replacement",
    ],
    whyParagraph:
      "Springs are under extreme tension, and using the wrong size or attempting a DIY fix is a genuine safety risk. Our technicians carry spring stock for all major door weights and sizes, so replacement is usually a single visit—no multi-day wait for parts.",
    faqs: [
      {
        question: "Why did my garage door spring break?",
        answer:
          "Springs are rated for a certain number of open/close cycles and wear out over time—typically 7-12 years of normal use. Arizona heat can accelerate wear by drying out lubrication and adding thermal stress.",
      },
      {
        question: "Should I replace one spring or both?",
        answer:
          "If your door has two springs, we generally recommend replacing both at the same time, even if only one broke—the second is usually close behind and mismatched springs cause uneven wear.",
      },
      {
        question: "Is it safe to replace a spring myself?",
        answer:
          "No. Torsion springs in particular are under enough tension to cause serious injury if handled without the right tools and training. This is one repair we always recommend leaving to a professional.",
      },
    ],
    icon: "wrench",
  },
  {
    slug: "emergency-garage-door-repair",
    title: "Emergency Garage Door Repair",
    shortTitle: "Emergency Repair",
    metaDescription:
      "Emergency garage door repair in Phoenix, AZ. Same-day response for doors stuck open, stuck closed, or off track. Call 480-901-0355.",
    heroTagline: "Stuck open, stuck closed, or off track—we respond fast.",
    intro:
      "A garage door that's stuck wide open is a security risk. One stuck closed can trap your car—or your only way into the house. Pinky's Garage Doors offers same-day emergency response across the Phoenix metro for doors that need to be fixed now, not next week.",
    signsTitle: "When to Call for Emergency Service",
    signs: [
      "The door won't close, leaving your home exposed",
      "The door won't open and your vehicle is trapped",
      "A spring or cable has snapped with a loud bang",
      "The door has come off its track or looks visibly crooked",
      "The door reverses violently or won't stop moving",
    ],
    whatWeDoTitle: "What We Do When You Call",
    whatWeDo: [
      "Fast phone triage to understand the issue and safety risk",
      "Same-day technician dispatch in most cases",
      "On-the-spot diagnosis and repair for most common failures",
      "Temporary securing of the door if a part needs to be special-ordered",
    ],
    whyParagraph:
      "We know an emergency call isn't the time for upselling—our technicians give you a straight diagnosis and an upfront price before any work begins, even under time pressure.",
    faqs: [
      {
        question: "How fast can you get someone out?",
        answer:
          "In most cases we can get a technician out the same day you call, especially for doors that won't open or close. Call 480-901-0355 and we'll give you a real-time estimate.",
      },
      {
        question: "My door is stuck open—is that actually urgent?",
        answer:
          "Yes. A door stuck open leaves your home and anything stored in the garage exposed. We treat this with the same urgency as a door that won't open.",
      },
      {
        question: "What should I do while I wait for a technician?",
        answer:
          "Avoid forcing the door manually or running the opener repeatedly, especially if you hear grinding or the door is visibly off-track—this can turn a repair into a full replacement. If safe to do so, keep people and vehicles clear of the door.",
      },
    ],
    icon: "wrench",
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}

export function getServiceHref(slug: string) {
  return getServicePage(slug) ? `/services/${slug}` : `/services#${slug}`;
}
