export type TokenPackage = {
  id: string;
  name: string;
  badgeLeft?: string;   // e.g. "Save $8"
  badgeRight?: string;  // e.g. "Popular"
  price: string;        // "$169"
  tokens: string;       // "50 tokens"
  unitPrice: string;    // "$3.38"
  unitLabel: string;    // "Tokens"
  saveLine: string;     // "3% off • Save $8"
  compareLine: string;  // "vs $174.5 at base price"
  featured?: boolean;
};

const TokenPackagesData: TokenPackage[] = [
  {
    id: "trail",
    name: "Trail",
    badgeLeft: "Save $8",
    price: "$169",
    tokens: "50 tokens",
    unitPrice: "$3.38",
    unitLabel: "Tokens",
    saveLine: "3% off • Save $8",
    compareLine: "vs $174.5 at base price",
  },
  {
    id: "standard",
    name: "Standard",
    badgeLeft: "Save $99",
    price: "$949",
    tokens: "300 tokens",
    unitPrice: "$3.16",
    unitLabel: "Tokens",
    saveLine: "9% off • Save $99",
    compareLine: "vs $1,047 at base price",
  },
  {
    id: "professional",
    name: "Professional",
    badgeRight: "Popular",
    price: "$2,999",
    tokens: "1,000 tokens",
    unitPrice: "$2.99",
    unitLabel: "Tokens",
    saveLine: "14% off • Save $500",
    compareLine: "vs $3,499 at base price",
    featured: true,
  },
  {
    id: "corporate",
    name: "Corporate",
    badgeLeft: "Save $1980",
    price: "$8,499",
    tokens: "3,000 tokens",
    unitPrice: "$2.83",
    unitLabel: "Tokens",
    saveLine: "19% off • Save $1,980",
    compareLine: "vs $10,470 at base price",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badgeLeft: "Save $9900",
    price: "$24,999",
    tokens: "10,000 tokens",
    unitPrice: "$2.50",
    unitLabel: "Tokens",
    saveLine: "28% off • Save $9,900",
    compareLine: "vs $34,900 at base price",
  },
];

export default TokenPackagesData;
