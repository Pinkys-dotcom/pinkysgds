export type ServiceArea = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  commonNeeds: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "phoenix",
    name: "Phoenix",
    tagline: "Our home base, and the heart of our service area.",
    intro:
      "As Arizona's capital and the anchor of the Valley, Phoenix is where Pinky's Garage Doors is based—which means our fastest response times and most flexible scheduling are right here. The city spans everything from mid-century ranch homes near the central corridor to newer builds on the outskirts, so our technicians see the full range of garage door ages, styles, and brands on any given day.",
    commonNeeds:
      "Older Phoenix neighborhoods often bring us spring and cable replacements on doors that have been in service for decades, while newer areas tend to need opener upgrades and routine maintenance. Given the summer heat, we also see a steady stream of calls for dried-out rollers, warped panels, and heat-stressed springs across the whole city.",
  },
  {
    slug: "scottsdale",
    name: "Scottsdale",
    tagline: "Refined doors for a city known for its resorts and golf courses.",
    intro:
      "Scottsdale's mix of resort communities, golf-course neighborhoods, and custom estate homes means curb appeal matters—and so does having a garage door system built to match a higher-end home. We regularly work with HOA aesthetic guidelines here, matching finishes and styles that fit the neighborhood's standards.",
    commonNeeds:
      "We see a lot of demand in Scottsdale for upgraded, quieter openers (especially for garages near living space), custom or oversized doors for larger properties, and insulated doors that hold up against direct desert sun exposure on south- and west-facing garages.",
  },
  {
    slug: "tempe",
    name: "Tempe",
    tagline: "From ASU rentals to established family neighborhoods.",
    intro:
      "Home to Arizona State University and Tempe Town Lake, Tempe has one of the most varied housing stocks in the Valley—dense rental properties and older homes near campus, alongside well-established family neighborhoods further from downtown. That variety means our technicians are used to working on everything from decades-old doors that have never been serviced to more recently updated systems.",
    commonNeeds:
      "In Tempe we frequently handle deferred-maintenance repairs on rental and older owner-occupied homes—worn rollers, aging springs, and openers that are simply past their service life—along with opener upgrades for homeowners adding smart-home features.",
  },
  {
    slug: "mesa",
    name: "Mesa",
    tagline: "One of the largest suburbs in the country, and one of our busiest areas.",
    intro:
      "Mesa is enormous—one of the largest suburbs in the United States—which means our technicians cover everything from established central Mesa neighborhoods built decades ago to newer master-planned communities out toward the east side. It's consistently one of our highest-volume service areas.",
    commonNeeds:
      "Given the range of home ages, we see the full spectrum of work in Mesa: full door replacements on older homes ready for an upgrade, opener repairs across every brand and era, and new installations in the newer developments on the city's eastern edge.",
  },
  {
    slug: "chandler",
    name: "Chandler",
    tagline: "A tech-corridor suburb with fast-growing, newer neighborhoods.",
    intro:
      "Chandler has grown rapidly alongside its tech and semiconductor employers, and much of its housing reflects that growth—newer subdivisions and planned communities with HOA standards that call for clean, well-maintained garage doors.",
    commonNeeds:
      "In Chandler we do a lot of opener upgrades to smart, app-controlled units (a natural fit for the area's tech-savvy homeowners), along with routine maintenance and warranty-adjacent repairs on doors that are still relatively young but need dialing in.",
  },
  {
    slug: "gilbert",
    name: "Gilbert",
    tagline: "Fast-growing, family-oriented, and full of newer tract homes.",
    intro:
      "Gilbert is one of the fastest-growing family suburbs in the Valley, dominated by newer master-planned communities. Garage doors here tend to be younger on average than in the older parts of the Valley, but heavy daily use from busy families still adds up.",
    commonNeeds:
      "Our most common Gilbert calls are opener repairs and adjustments from frequent daily use, roller and hardware wear on high-use doors, and the occasional off-track realignment after a bump from a car or bike.",
  },
  {
    slug: "glendale",
    name: "Glendale",
    tagline: "Home to State Farm Stadium and Desert Diamond Arena, with a well-established housing mix.",
    intro:
      "Glendale is a long-established West Valley city, known for hosting State Farm Stadium and Desert Diamond Arena, with neighborhoods ranging from older, well-settled communities to newer development on its outer edges.",
    commonNeeds:
      "We see a healthy mix of work in Glendale: spring and cable replacement on older doors that have quietly been running for 15-plus years, and full door or opener replacements for homeowners ready to upgrade after years of patchwork repairs.",
  },
  {
    slug: "peoria",
    name: "Peoria",
    tagline: "A growing West Valley community with spring-training roots.",
    intro:
      "Peoria, home to the Peoria Sports Complex spring-training facility, has grown into a solid mix of established and newer West Valley neighborhoods, with homeowners who tend to stay put and take care of their homes long-term.",
    commonNeeds:
      "In Peoria we regularly handle preventative maintenance visits, spring replacements timed around normal wear cycles, and opener upgrades for homeowners modernizing an otherwise well-kept home.",
  },
  {
    slug: "surprise",
    name: "Surprise",
    tagline: "One of the fastest-growing parts of the Northwest Valley.",
    intro:
      "Surprise has expanded quickly in the Northwest Valley, with a large share of newer homes and active-adult communities alongside its own spring-training facility at Surprise Stadium.",
    commonNeeds:
      "Given the number of newer and retirement-friendly homes here, we see a lot of demand for quiet, easy-to-use opener upgrades, battery backup for monsoon-season power outages, and routine maintenance to keep newer doors running smoothly for years to come.",
  },
  {
    slug: "avondale",
    name: "Avondale",
    tagline: "West Valley growth, home to Phoenix Raceway.",
    intro:
      "Avondale, known for hosting Phoenix Raceway, has seen steady West Valley growth with a mix of established neighborhoods and newer subdivisions built over the past two decades.",
    commonNeeds:
      "Our Avondale calls are typically standard repair work—springs, cables, and rollers on homes reaching the 10-15 year mark—along with opener troubleshooting and occasional full replacements on older sections of the city.",
  },
  {
    slug: "goodyear",
    name: "Goodyear",
    tagline: "A fast-growing West Valley city with strong spring-training ties.",
    intro:
      "Goodyear has grown quickly in recent years, home to the Goodyear Ballpark spring-training complex and a large share of newer-construction neighborhoods built to modern HOA standards.",
    commonNeeds:
      "Most of our Goodyear work is new-construction-adjacent: opener installations and upgrades, warranty-period adjustments, and the occasional off-track repair on doors still well within their expected lifespan.",
  },
  {
    slug: "buckeye",
    name: "Buckeye",
    tagline: "One of the fastest-growing cities in the country, far West Valley.",
    intro:
      "Buckeye has been one of the fastest-growing cities in the entire country over the past several years, and the far West Valley location means we're covering a lot of ground here—mostly newer-construction homes in expanding subdivisions.",
    commonNeeds:
      "New-construction opener installs and programming are common in Buckeye, along with early-life adjustments as doors and openers settle into regular use, and occasional service calls for homes that came with lower-grade builder-installed hardware.",
  },
  {
    slug: "sun-city",
    name: "Sun City",
    tagline: "Arizona's original age-restricted retirement community.",
    intro:
      "Sun City was one of the first master-planned, age-restricted retirement communities in the country, and it still has a distinct character—single-story homes, wide streets, and homeowners who value doors and openers that are simple, quiet, and easy to use.",
    commonNeeds:
      "In Sun City, we focus on openers with easy-to-use remotes and keypads, lighter-touch manual releases, and doors that have often been running reliably for decades and are due for a spring or hardware refresh rather than a full replacement.",
  },
  {
    slug: "cave-creek",
    name: "Cave Creek",
    tagline: "Desert character, larger lots, and rural properties.",
    intro:
      "Cave Creek keeps more of a rural, desert feel than most of the Valley, with larger lots, equestrian properties, and custom homes spread further apart. It's a service area where we're often driving a bit more between calls, but we cover it just the same.",
    commonNeeds:
      "Cave Creek properties often call for oversized or multi-vehicle garage doors, RV or equipment-bay door installations, and heavier-duty hardware suited to larger, custom-built garages.",
  },
  {
    slug: "paradise-valley",
    name: "Paradise Valley",
    tagline: "One of Arizona's most exclusive residential communities.",
    intro:
      "Paradise Valley is one of the wealthiest communities in Arizona, known for luxury custom estates and strict architectural standards. Garage doors here are often a genuine design feature of the home, not just a functional necessity.",
    commonNeeds:
      "We work with custom door materials and finishes in Paradise Valley more than almost anywhere else in the Valley, along with premium, whisper-quiet opener systems and meticulous attention to matching a home's architectural details.",
  },
  {
    slug: "fountain-hills",
    name: "Fountain Hills",
    tagline: "A scenic, master-planned community known for its landmark fountain.",
    intro:
      "Fountain Hills is a master-planned community built around its namesake fountain and surrounded by mountain and desert views, with a housing stock that ranges from established mid-size homes to larger hillside properties.",
    commonNeeds:
      "Elevation and terrain here mean garages sometimes see more dust and grit exposure, so we do a fair amount of track cleaning and roller replacement, alongside standard spring and opener work across the community's older homes.",
  },
  {
    slug: "queen-creek",
    name: "Queen Creek",
    tagline: "Fast-growing, with deep agricultural and equestrian roots.",
    intro:
      "Queen Creek has grown quickly from a semi-rural, agricultural community (still home to attractions like Schnepf Farms) into one of the Southeast Valley's fastest-growing suburbs, blending newer subdivisions with larger equestrian and hobby-farm properties.",
    commonNeeds:
      "We see both ends of the spectrum in Queen Creek: standard opener and spring work in the newer tract-home developments, and oversized or heavy-duty doors for barns, shops, and multi-vehicle garages on the area's larger properties.",
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
