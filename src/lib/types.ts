export interface Wearable {
  id: string;
  productName: string;
  brand: string;
  formFactor: "glasses" | "ring" | "pin" | "earbuds" | "other";
  launchDate: string;
  priceUsd: number;
  coreAIFeature: string;
  batteryHours: number;
  connectivity: string;
  weightGrams: number;
  userRating: number;
}
