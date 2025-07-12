import { useState } from "react";
import type { Wearable } from "../lib/types";

const initialWearables: Wearable[] = [
  {
    id: crypto.randomUUID(),
    productName: "Ray-Ban Meta Smart Glasses",
    brand: "Meta",
    formFactor: "glasses",
    launchDate: "2023-10-17",
    priceUsd: 299,
    coreAIFeature: "Voice assistant with live translation",
    batteryHours: 4,
    connectivity: "Bluetooth 5.3",
    weightGrams: 50,
    userRating: 4.2,
  },
  {
    id: crypto.randomUUID(),
    productName: "Oura Ring Gen 3",
    brand: "Oura",
    formFactor: "ring",
    launchDate: "2021-11-15",
    priceUsd: 299,
    coreAIFeature: "Health insights and sleep optimization",
    batteryHours: 168, // 7 days
    connectivity: "Bluetooth Low Energy",
    weightGrams: 6,
    userRating: 4.0,
  },
  {
    id: crypto.randomUUID(),
    productName: "Humane AI Pin",
    brand: "Humane",
    formFactor: "pin",
    launchDate: "2024-04-11",
    priceUsd: 699,
    coreAIFeature: "Contextual AI assistant with projection",
    batteryHours: 4,
    connectivity: "4G LTE, Wi-Fi, Bluetooth",
    weightGrams: 34,
    userRating: 2.8,
  },
];

export function useWearablesStore() {
  const [Wearables, setWearables] = useState<Wearable[]>(initialWearables);

  const addWearable = (newWearable: Omit<Wearable, "id">) => {
    const wearableWithId: Wearable = {
      ...newWearable,
      id: crypto.randomUUID(),
    };
    setWearables((prev) => [...prev, wearableWithId]);
    return wearableWithId;
  };
  const updateWearable = (
    id: string,
    updates: Partial<Omit<Wearable, "id">>
  ) => {
    setWearables((prev) =>
      prev.map((wearable) =>
        wearable.id === id ? { ...wearable, ...updates } : wearable
      )
    );
  };

  const deleteWearable = (id: string) => {
    setWearables((prev) => prev.filter((wearable) => wearable.id !== id));
  };

  const getWearbleById = (id: string): Wearable | undefined => {
    return Wearables.find((wearable) => wearable.id === id);
  };

  return {
    Wearables,
    addWearable,
    updateWearable,
    deleteWearable,
    getWearbleById,
  };
}
