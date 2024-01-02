export interface Aspect {
  name: string;
  rating: number;
  maxRating: number;
}

export const ASPECTS: Aspect[] = [
  { name: "Delivery time", rating: 5, maxRating: 10 },
  { name: "Packaging quality", rating: 7, maxRating: 10 },
  { name: "Service quality", rating: 6, maxRating: 10 },
  { name: "Compliance with description", rating: 9, maxRating: 10 },
];

export interface QualityRating {
  rating: number;
  qualityCategory: qualityCategoryEnum;
}

enum qualityCategoryEnum {
  Excellent,
  Great,
  Acceptable,
  Bad,
}
