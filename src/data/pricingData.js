/**
 * pricingData.js
 * Data source for the Pricing / License Packages section.
 * Each object defines one pricing card.
 */

export const pricingPlans = [
  {
    id: 1,
    title: "Ajman Nuventures Centre Free Zone",
    description: "One of the most affordable free zones in the UAE",
    price: "AED 4,888",
    features: [
      "Unlimited shareholders",
      "Upto 10 business activities",
      "Mix and match any activities",
      "Trade License, Lease agreement, MOA",
      "Fully digital process",
    ],
    featured: false,
    ctaText: "Let's Do This",
    ctaHref: "#contact",
  },
  {
    id: 2,
    title: "Meydan Free Zone",
    description: "Dubai's most flexible and affordable free zone license.",
    price: "AED 12,520",
    features: [
      "Add upto 5 business activities",
      "Add upto 5 shareholders",
      "Trade license, lease agreement, MOA",
      "Fully digital process",
    ],
    featured: true,   // highlighted card — maroon background
    ctaText: "Let's Do This",
    ctaHref: "#contact",
  },
  {
    id: 3,
    title: "Ras Al Khaimah Economic Zone",
    description: "One of the best free zones in the UAE with world class facilities",
    price: "AED 6,000",
    features: [
      "Upto 5 business activities in one license",
      "Mix and match business activities",
      "Upto 5 shareholders",
      "Installment payment options available",
      "Free access to flexi desk",
      "Fully digital process",
    ],
    featured: false,
    ctaText: "Let's Do This",
    ctaHref: "#contact",
  },
];
