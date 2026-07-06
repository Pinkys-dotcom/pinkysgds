import { serviceAreaMapPoints } from "@/lib/site";

const LABEL_OFFSET = 12;

function labelPosition(x: number, y: number, dir: "top" | "bottom" | "left" | "right") {
  switch (dir) {
    case "top":
      return { x, y: y - LABEL_OFFSET, anchor: "middle" as const };
    case "bottom":
      return { x, y: y + LABEL_OFFSET + 10, anchor: "middle" as const };
    case "left":
      return { x: x - LABEL_OFFSET, y: y + 4, anchor: "end" as const };
    case "right":
      return { x: x + LABEL_OFFSET, y: y + 4, anchor: "start" as const };
  }
}

export default function ServiceAreaMap() {
  return (
    <svg
      viewBox="0 0 700 500"
      role="img"
      aria-label="Map of the Phoenix metro area showing the cities Pinky's Garage Doors services"
      className="w-full h-auto"
    >
      <title>Pinky&apos;s Garage Doors service area map</title>
      <rect x="0" y="0" width="700" height="500" rx="16" fill="#f1e6cf" />

      {/* subtle street grid */}
      <g stroke="#1a1a1a" strokeOpacity="0.08" strokeWidth="1.5">
        {[80, 160, 240, 320, 400, 460].map((y) => (
          <line key={`h${y}`} x1="20" y1={y} x2="680" y2={y} />
        ))}
        {[100, 200, 300, 400, 500, 600].map((x) => (
          <line key={`v${x}`} x1={x} y1="20" x2={x} y2="480" />
        ))}
      </g>

      {/* stylized loop "freeway" */}
      <rect
        x="150"
        y="110"
        width="380"
        height="290"
        rx="140"
        fill="none"
        stroke="#d46a7a"
        strokeOpacity="0.35"
        strokeWidth="3"
      />

      {serviceAreaMapPoints.map((city) => {
        const label = labelPosition(city.x, city.y, city.labelDir);
        const r = city.major ? 9 : 6;
        return (
          <g key={city.name}>
            <circle cx={city.x} cy={city.y} r={r} fill="#d46a7a" stroke="#1a1a1a" strokeWidth="1.5" />
            {city.major && <circle cx={city.x} cy={city.y} r={r + 5} fill="none" stroke="#d46a7a" strokeOpacity="0.4" strokeWidth="2" />}
            <text
              x={label.x}
              y={label.y}
              textAnchor={label.anchor}
              fontSize={city.major ? 20 : 15}
              fontWeight={city.major ? 800 : 700}
              fill="#1a1a1a"
            >
              {city.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
