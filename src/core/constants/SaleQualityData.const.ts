export interface Aspect {
  name: string;
  rating: number;
  maxRating: number;
}

export const ASPECTS: Aspect[] = [
  { name: "saleQuality.deliveryTime", rating: 5, maxRating: 10 },
  { name: "saleQuality.packagingQuality", rating: 7, maxRating: 10 },
  { name: "saleQuality.serviceQuality", rating: 6, maxRating: 10 },
  { name: "saleQuality.complianceWithDescription", rating: 9, maxRating: 10 },
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
