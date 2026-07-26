export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "garage-door-spring-warning-signs",
    title: "5 Warning Signs Your Garage Door Spring Is About to Break",
    description:
      "Garage door springs rarely fail without warning. Here are five signs your spring is on its way out—and why you shouldn't wait to get it looked at.",
    date: "2026-06-02",
    content: [
      {
        type: "p",
        text: "Garage door springs do more work than most homeowners realize—they counterbalance the full weight of the door, which can be well over 100 pounds. Like any part under constant tension, springs wear out. The good news is they usually give you warning signs before they snap completely. Here's what to watch for.",
      },
      { type: "h2", text: "1. A Visible Gap in the Spring" },
      {
        type: "p",
        text: "If you can safely see the spring above your door (do not attempt to inspect it up close or touch it), look for a gap in the coil. A clean break will leave a noticeable separation. This is the clearest sign a spring has already failed and needs replacement before the door is used again.",
      },
      { type: "h2", text: "2. The Door Feels Heavier Than Usual" },
      {
        type: "p",
        text: "If you use the manual release and the door suddenly feels much heavier to lift by hand, or your opener starts straining and making louder motor noises, the spring is losing tension and no longer doing its share of the lifting work.",
      },
      { type: "h2", text: "3. The Door Opens Unevenly or Looks Crooked" },
      {
        type: "p",
        text: "Doors with two springs can develop a lopsided look when one spring weakens faster than the other. If one side of the door appears to open higher or faster than the other, or the door looks tilted when it's partway open, that's a strong indicator one spring is failing.",
      },
      { type: "h2", text: "4. A Loud Bang From the Garage" },
      {
        type: "p",
        text: "A loud bang, especially first thing in the morning when temperatures shift overnight, is one of the most common ways homeowners discover a broken spring. If you hear a sudden loud pop from the garage, treat the door as inoperable until it's inspected.",
      },
      { type: "h2", text: "5. Slow or Jerky Movement" },
      {
        type: "p",
        text: "A door that used to glide smoothly but now opens in fits and starts, or takes noticeably longer to open and close, is showing signs of spring fatigue. This is often the earliest warning sign, well before a spring actually breaks.",
      },
      { type: "h2", text: "Don't Try to DIY a Spring Repair" },
      {
        type: "p",
        text: "Garage door springs are under extreme tension, and attempting to adjust or replace one without the right tools and training is genuinely dangerous. If you notice any of the signs above, stop using the door and call a professional.",
      },
      {
        type: "p",
        text: "Pinky's Garage Doors offers same-day spring repair across the Phoenix metro. If your door is showing any of these warning signs, give us a call at 480-901-0355 or request a free estimate online—we carry spring parts for all major brands so most repairs are done in a single visit.",
      },
    ],
  },
  {
    slug: "garage-door-repair-cost-phoenix-az",
    title: "How Much Does Garage Door Repair Cost in Phoenix, AZ?",
    description:
      "A breakdown of typical garage door repair costs in the Phoenix area, from spring and cable repairs to full opener replacements.",
    date: "2026-06-16",
    content: [
      {
        type: "p",
        text: "One of the most common questions we get from Phoenix-area homeowners is simply: what's this going to cost? Garage door repair pricing depends on the part involved, the size and weight of your door, and how much labor the fix requires. Here's a general guide to what you can expect.",
      },
      { type: "h2", text: "Common Repairs and Typical Cost Ranges" },
      {
        type: "ul",
        items: [
          "Spring replacement: often the most common repair call, and pricing depends on whether it's a single or double-spring system.",
          "Cable repair or replacement: usually done alongside a spring repair since the two systems work together.",
          "Roller and hinge replacement: a lower-cost repair that fixes noisy, sticking, or off-track doors.",
          "Opener repair or replacement: ranges based on whether it's a motor issue, sensor issue, or a full unit swap.",
          "Panel replacement: cost depends on the door's material and whether the panel is a stock size or a custom order.",
          "Off-track realignment: an urgent fix, but often more affordable than homeowners expect if caught early.",
        ],
      },
      { type: "h2", text: "What Affects the Price" },
      {
        type: "p",
        text: "A few factors move the price up or down: the brand and age of your door and opener, whether parts are in stock or need to be special-ordered, how many springs or cables need replacing, and whether the repair is a same-day emergency call or a scheduled visit.",
      },
      { type: "h2", text: "Why Phoenix Homeowners See Some Unique Wear" },
      {
        type: "p",
        text: "Arizona's heat is genuinely hard on garage doors. Extreme summer temperatures cause metal to expand, dry out lubricant faster, and put extra strain on springs and openers. That means Phoenix-area doors often need lubrication and tension adjustments more frequently than doors in milder climates—something worth factoring into your maintenance budget.",
      },
      { type: "h2", text: "Get an Exact Number, Not a Guess" },
      {
        type: "p",
        text: "Ranges are useful for budgeting, but the only way to know your exact cost is a quick inspection. Pinky's Garage Doors provides upfront, honest pricing before any work begins—no surprise fees, no upselling. Call 480-901-0355 or request a free estimate and we'll give you a real number for your specific door.",
      },
    ],
  },
  {
    slug: "garage-door-maintenance-arizona-heat",
    title: "Garage Door Maintenance Checklist for Arizona's Extreme Heat",
    description:
      "Phoenix summers are brutal on garage door hardware. Here's a seasonal maintenance checklist to keep your door running smoothly year-round.",
    date: "2026-06-30",
    content: [
      {
        type: "p",
        text: "If you've lived in the Valley for a summer, you already know: 110-degree days aren't just hard on people, they're hard on machinery. Garage doors take a real beating from Arizona heat, and a little seasonal maintenance goes a long way toward avoiding a breakdown on the hottest day of the year.",
      },
      { type: "h2", text: "Why Heat Is So Hard on Garage Doors" },
      {
        type: "p",
        text: "Metal components expand in extreme heat, which can throw off the alignment of tracks and rollers. Factory lubricant dries out faster, springs lose tension more quickly under repeated thermal stress, and plastic components in openers and sensors become brittle over time. None of this happens overnight, but it adds up.",
      },
      { type: "h2", text: "A Simple Seasonal Checklist" },
      {
        type: "ul",
        items: [
          "Lubricate rollers, hinges, and tracks every few months with a silicone-based lubricant (avoid WD-40, which attracts dust rather than reducing friction long-term).",
          "Check the weatherstripping along the bottom of the door—AZ heat and sun exposure cause it to crack and shrink faster than in other climates.",
          "Test the auto-reverse safety feature by placing a block in the door's path and confirming it reverses on contact.",
          "Listen for new noises—grinding, popping, or scraping usually means something has shifted out of alignment.",
          "Visually check springs and cables for rust, fraying, or gaps (from a safe distance—never inspect springs up close).",
          "Tighten any visibly loose hardware on tracks and brackets, which can loosen from vibration and thermal expansion.",
        ],
      },
      { type: "h2", text: "How Often Should You Do This?" },
      {
        type: "p",
        text: "For most Phoenix-area homes, a thorough check twice a year—before summer and before winter—catches most issues before they become urgent. Doors used heavily, like on a home with multiple daily openings, benefit from a quick visual check every couple of months.",
      },
      { type: "h2", text: "When to Call a Professional" },
      {
        type: "p",
        text: "Lubrication and visual checks are safe for most homeowners to handle. Spring tension, cable replacement, and opener electrical issues are not—those should always go to a licensed technician. If your seasonal check turns up anything beyond routine wear, it's worth getting a second opinion before it turns into an emergency call.",
      },
      {
        type: "p",
        text: "Pinky's Garage Doors offers maintenance visits across the Phoenix metro to help your door handle another Arizona summer. Call 480-901-0355 or request a free estimate to get on the schedule.",
      },
    ],
  },
  {
    slug: "garage-door-wont-open-causes",
    title: "Garage Door Won't Open? 7 Common Causes and Quick Fixes",
    description:
      "Before you call for repair, run through these seven common reasons a garage door won't open—some you can fix in minutes.",
    date: "2026-07-14",
    content: [
      {
        type: "p",
        text: "A garage door that won't budge is one of the most stressful home problems—especially if your car is stuck inside or out. Before you assume the worst, run through this list. Some of these are quick fixes; others mean it's time to call a professional.",
      },
      { type: "h2", text: "1. The Opener Is Unplugged or Tripped a Breaker" },
      {
        type: "p",
        text: "It sounds obvious, but it's the most common culprit. Check that the opener is plugged in and that the circuit breaker or GFCI outlet hasn't tripped.",
      },
      { type: "h2", text: "2. Dead Remote or Keypad Batteries" },
      {
        type: "p",
        text: "If the wall button works but your remote doesn't, try replacing the batteries before assuming there's a bigger problem.",
      },
      { type: "h2", text: "3. The Safety Sensors Are Misaligned or Blocked" },
      {
        type: "p",
        text: "Most openers have two small sensors near the bottom of the tracks. If they're misaligned, dirty, or something is blocking the beam between them, the door will refuse to close (and sometimes to open). Check for a blinking light on the sensors, which usually indicates a problem.",
      },
      { type: "h2", text: "4. The Door Is Manually Locked" },
      {
        type: "p",
        text: "Some doors have a manual lock or the emergency release cord has been pulled, disconnecting the door from the opener. Look for a hanging red cord near the opener trolley—if it's been pulled, the door needs to be manually reconnected.",
      },
      { type: "h2", text: "5. A Broken Spring or Cable" },
      {
        type: "p",
        text: "If the door feels extremely heavy when lifted manually, or you heard a loud bang recently, a spring or cable has likely failed. This is not a DIY fix—stop trying to force the door and call a technician.",
      },
      { type: "h2", text: "6. The Door Is Off Its Track" },
      {
        type: "p",
        text: "If part of the door looks crooked or you can see a roller has come out of the track, do not attempt to run the opener. Running the door further can cause serious damage or injury. This needs professional realignment.",
      },
      { type: "h2", text: "7. The Opener Motor or Logic Board Has Failed" },
      {
        type: "p",
        text: "If none of the above apply and the opener makes no sound at all when triggered, the motor or logic board itself may have failed. This typically requires a technician to diagnose and either repair or replace the unit.",
      },
      { type: "h2", text: "When in Doubt, Stop and Call" },
      {
        type: "p",
        text: "A garage door that won't open is inconvenient. A garage door that's forced open while something is actually broken can turn into a safety hazard or a much bigger repair bill. If the quick checks above don't solve it, Pinky's Garage Doors offers same-day service across Phoenix. Call 480-901-0355 or request a free estimate and we'll get your door working again.",
      },
    ],
  },
  {
    slug: "repair-or-replace-garage-door",
    title: "Repair or Replace? How to Decide What Your Garage Door Needs",
    description:
      "Not sure whether your garage door needs a repair or a full replacement? Here's how to think through the decision.",
    date: "2026-07-24",
    content: [
      {
        type: "p",
        text: "It's one of the most common questions we hear: is this worth fixing, or should I just replace the whole door? The honest answer depends on the age of your door, what's actually broken, and what you're trying to get out of it long-term. Here's how to think it through.",
      },
      { type: "h2", text: "When Repair Almost Always Makes Sense" },
      {
        type: "ul",
        items: [
          "The door is under 10-15 years old and structurally in good shape.",
          "The issue is isolated to one component—a spring, a cable, an opener, a section of track.",
          "You're happy with the look and style of your current door.",
          "The repair estimate is a fraction of what a new door would cost.",
        ],
      },
      { type: "h2", text: "When Replacement Is Usually the Better Call" },
      {
        type: "ul",
        items: [
          "The door is older and has needed multiple repairs in the past year or two.",
          "Panels are visibly dented, warped, or rusted through in multiple places.",
          "The door is poorly insulated and you're feeling the temperature difference in an attached garage.",
          "You're planning to sell the home soon—a new door is one of the highest-return exterior upgrades for resale value.",
          "The repair cost is approaching half or more of what a new door would cost.",
        ],
      },
      { type: "h2", text: "Consider the Opener Separately" },
      {
        type: "p",
        text: "Sometimes the door itself is fine but the opener is the real problem. Modern openers offer quieter operation, battery backup (important during Arizona monsoon power outages), and smartphone control. Upgrading just the opener is often a smaller investment that solves most of the day-to-day frustration without replacing the whole door.",
      },
      { type: "h2", text: "Get an Honest Opinion, Not a Sales Pitch" },
      {
        type: "p",
        text: "This is exactly the kind of decision that should come with a straight answer, not an upsell. At Pinky's Garage Doors, we'll tell you plainly whether a repair will genuinely hold up or whether you'd be pouring money into a door that's on its way out. Call 480-901-0355 or request a free estimate and we'll help you figure out the right call for your home and budget.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
