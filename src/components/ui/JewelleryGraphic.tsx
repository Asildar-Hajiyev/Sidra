import React from "react";

interface JewelleryGraphicProps {
  type:
    | "solitaire-ring"
    | "hoop-earrings"
    | "clover-necklace"
    | "marquise-ring"
    | "tennis-bracelet"
    | "pear-earrings"
    | "heart-pendant";
  className?: string;
}

export const JewelleryGraphic: React.FC<JewelleryGraphicProps> = ({
  type,
  className = "w-full h-full",
}) => {
  switch (type) {
    case "solitaire-ring":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D0B5" />
              <stop offset="50%" stopColor="#D99B78" />
              <stop offset="100%" stopColor="#B87550" />
            </linearGradient>
            <linearGradient id="diamondShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2F1F8" />
              <stop offset="100%" stopColor="#BCE3F5" />
            </linearGradient>
          </defs>
          {/* Ring Band */}
          <ellipse
            cx="60"
            cy="72"
            rx="34"
            ry="24"
            stroke="url(#goldRing)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Inner band depth */}
          <ellipse
            cx="60"
            cy="72"
            rx="27"
            ry="18"
            stroke="#9C5F3D"
            strokeWidth="1.5"
            opacity="0.4"
          />
          {/* Diamond Prongs */}
          <path
            d="M50 48 L56 36 M70 48 L64 36 M60 50 L60 34"
            stroke="url(#goldRing)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Brilliant Solitaire Diamond */}
          <polygon
            points="60,20 74,34 60,48 46,34"
            fill="url(#diamondShine)"
            stroke="#9AC3D6"
            strokeWidth="1.5"
          />
          <polygon
            points="60,20 68,34 60,48 52,34"
            fill="#FFFFFF"
            opacity="0.7"
          />
          <polygon
            points="52,34 68,34 60,48"
            fill="#EAF6FC"
            opacity="0.9"
          />
          {/* Diamond Sparkle */}
          <circle cx="56" cy="30" r="1.5" fill="#FFFFFF" />
          <line x1="56" y1="26" x2="56" y2="34" stroke="#FFF" strokeWidth="1" />
          <line x1="52" y1="30" x2="60" y2="30" stroke="#FFF" strokeWidth="1" />
        </svg>
      );

    case "hoop-earrings":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="goldHoop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9DFCB" />
              <stop offset="45%" stopColor="#E0A785" />
              <stop offset="100%" stopColor="#B36E49" />
            </linearGradient>
          </defs>
          {/* Left Hoop */}
          <g transform="translate(18, 15)">
            <ellipse
              cx="25"
              cy="45"
              rx="16"
              ry="32"
              stroke="url(#goldHoop)"
              strokeWidth="5.5"
            />
            {/* Texture ridges on hoop */}
            <path
              d="M11 38 Q25 42 39 38 M10 48 Q25 52 40 48 M11 58 Q25 62 39 58"
              stroke="#FFF"
              strokeWidth="1.2"
              opacity="0.6"
            />
            {/* Stud clasp */}
            <circle cx="25" cy="13" r="3" fill="url(#goldHoop)" />
          </g>
          {/* Right Hoop */}
          <g transform="translate(54, 15)">
            <ellipse
              cx="25"
              cy="45"
              rx="16"
              ry="32"
              stroke="url(#goldHoop)"
              strokeWidth="5.5"
            />
            <path
              d="M11 38 Q25 42 39 38 M10 48 Q25 52 40 48 M11 58 Q25 62 39 58"
              stroke="#FFF"
              strokeWidth="1.2"
              opacity="0.6"
            />
            <circle cx="25" cy="13" r="3" fill="url(#goldHoop)" />
          </g>
        </svg>
      );

    case "clover-necklace":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="goldChain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7DECE" />
              <stop offset="60%" stopColor="#DCA17E" />
              <stop offset="100%" stopColor="#AC6944" />
            </linearGradient>
            <radialGradient id="malachite" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#256B45" />
              <stop offset="60%" stopColor="#13472C" />
              <stop offset="100%" stopColor="#0B2F1C" />
            </radialGradient>
          </defs>
          {/* Delicate Gold Chain */}
          <path
            d="M20 10 Q60 62 100 10"
            stroke="url(#goldChain)"
            strokeWidth="2"
            strokeDasharray="2.5 1.5"
            fill="none"
          />
          <path
            d="M32 10 Q60 52 88 10"
            stroke="url(#goldChain)"
            strokeWidth="1.2"
            strokeDasharray="2 1"
            fill="none"
            opacity="0.5"
          />
          {/* Clover Pendant at Bottom */}
          <g transform="translate(60, 68)">
            {/* Gold beaded border */}
            <circle cx="0" cy="-12" r="11" fill="url(#goldChain)" />
            <circle cx="0" cy="12" r="11" fill="url(#goldChain)" />
            <circle cx="-12" cy="0" r="11" fill="url(#goldChain)" />
            <circle cx="12" cy="0" r="11" fill="url(#goldChain)" />
            {/* Deep Green Malachite Leaf Inlays */}
            <circle cx="0" cy="-12" r="8.5" fill="url(#malachite)" />
            <circle cx="0" cy="12" r="8.5" fill="url(#malachite)" />
            <circle cx="-12" cy="0" r="8.5" fill="url(#malachite)" />
            <circle cx="12" cy="0" r="8.5" fill="url(#malachite)" />
            {/* Malachite texture lines */}
            <path
              d="M-5 -12 Q0 -8 5 -12 M-5 12 Q0 16 5 12"
              stroke="#388E5C"
              strokeWidth="1"
              opacity="0.7"
            />
            {/* Central Gold Stud */}
            <circle cx="0" cy="0" r="4" fill="url(#goldChain)" />
            <circle cx="0" cy="0" r="2" fill="#FFEFE5" />
          </g>
        </svg>
      );

    case "marquise-ring":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="roseGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9DFCB" />
              <stop offset="50%" stopColor="#DE9F7D" />
              <stop offset="100%" stopColor="#B36E49" />
            </linearGradient>
            <linearGradient id="marquiseGem" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E1F2F9" />
              <stop offset="100%" stopColor="#B7DFF2" />
            </linearGradient>
          </defs>
          {/* Ring Band */}
          <ellipse
            cx="60"
            cy="74"
            rx="36"
            ry="24"
            stroke="url(#roseGold)"
            strokeWidth="6"
          />
          {/* Marquise cut Diamond (eye shape) */}
          <path
            d="M60 22 C76 38 76 54 60 70 C44 54 44 38 60 22 Z"
            fill="url(#marquiseGem)"
            stroke="#9AC3D6"
            strokeWidth="1.5"
          />
          {/* Facets */}
          <line x1="60" y1="22" x2="60" y2="70" stroke="#FFF" strokeWidth="1.5" />
          <line x1="48" y1="46" x2="72" y2="46" stroke="#9AC3D6" strokeWidth="1" />
          <circle cx="58" cy="38" r="1.5" fill="#FFF" />
        </svg>
      );

    case "tennis-bracelet":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="braceletGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7DECE" />
              <stop offset="50%" stopColor="#DB9E7B" />
              <stop offset="100%" stopColor="#B36D48" />
            </linearGradient>
          </defs>
          {/* Oval loop of diamonds */}
          <ellipse
            cx="60"
            cy="60"
            rx="46"
            ry="20"
            stroke="url(#braceletGold)"
            strokeWidth="5"
          />
          {/* Individual sparkling diamond stones along the bracelet */}
          {[
            { cx: 14, cy: 60 },
            { cx: 20, cy: 50 },
            { cx: 30, cy: 43 },
            { cx: 45, cy: 41 },
            { cx: 60, cy: 40 },
            { cx: 75, cy: 41 },
            { cx: 90, cy: 43 },
            { cx: 100, cy: 50 },
            { cx: 106, cy: 60 },
            { cx: 100, cy: 70 },
            { cx: 90, cy: 77 },
            { cx: 75, cy: 79 },
            { cx: 60, cy: 80 },
            { cx: 45, cy: 79 },
            { cx: 30, cy: 77 },
            { cx: 20, cy: 70 },
          ].map((pt, i) => (
            <circle
              key={i}
              cx={pt.cx}
              cy={pt.cy}
              r="2.5"
              fill="#FFFFFF"
              stroke="#9EC8DC"
              strokeWidth="0.8"
            />
          ))}
        </svg>
      );

    case "pear-earrings":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="earringGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7DFCF" />
              <stop offset="50%" stopColor="#D99B77" />
              <stop offset="100%" stopColor="#B36E49" />
            </linearGradient>
            <linearGradient id="pearDiamond" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#E2F1F8" />
              <stop offset="100%" stopColor="#B8DFEE" />
            </linearGradient>
          </defs>
          {/* Left Pear Drop */}
          <g transform="translate(34, 25)">
            <circle cx="0" cy="0" r="3" fill="url(#earringGold)" />
            <line x1="0" y1="3" x2="0" y2="14" stroke="url(#earringGold)" strokeWidth="2" />
            <path
              d="M0 14 C10 24 12 44 0 54 C-12 44 -10 24 0 14 Z"
              fill="url(#pearDiamond)"
              stroke="url(#earringGold)"
              strokeWidth="2.5"
            />
            <circle cx="-1" cy="38" r="1.5" fill="#FFF" />
          </g>
          {/* Right Pear Drop */}
          <g transform="translate(86, 25)">
            <circle cx="0" cy="0" r="3" fill="url(#earringGold)" />
            <line x1="0" y1="3" x2="0" y2="14" stroke="url(#earringGold)" strokeWidth="2" />
            <path
              d="M0 14 C10 24 12 44 0 54 C-12 44 -10 24 0 14 Z"
              fill="url(#pearDiamond)"
              stroke="url(#earringGold)"
              strokeWidth="2.5"
            />
            <circle cx="-1" cy="38" r="1.5" fill="#FFF" />
          </g>
        </svg>
      );

    case "heart-pendant":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="pendantGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7DFCF" />
              <stop offset="50%" stopColor="#D99B77" />
              <stop offset="100%" stopColor="#B36E49" />
            </linearGradient>
            <linearGradient id="pendantGem" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2F1F8" />
              <stop offset="100%" stopColor="#B6DFEF" />
            </linearGradient>
          </defs>
          {/* Chain */}
          <path
            d="M20 15 Q60 55 100 15"
            stroke="url(#pendantGold)"
            strokeWidth="1.8"
            strokeDasharray="2.5 1.5"
            fill="none"
          />
          {/* Heart / 4-petal Diamond Cluster Pendant */}
          <g transform="translate(60, 68)">
            <path
              d="M0 -5 C-6 -20 -24 -15 -20 2 C-16 16 0 26 0 26 C0 26 16 16 20 2 C24 -15 6 -20 0 -5 Z"
              fill="url(#pendantGem)"
              stroke="url(#pendantGold)"
              strokeWidth="2.5"
            />
            <circle cx="0" cy="8" r="3.5" fill="#FFFFFF" stroke="#9AC3D6" strokeWidth="1" />
            <circle cx="-6" cy="0" r="2.5" fill="#FFFFFF" />
            <circle cx="6" cy="0" r="2.5" fill="#FFFFFF" />
          </g>
        </svg>
      );

    default:
      return null;
  }
};
