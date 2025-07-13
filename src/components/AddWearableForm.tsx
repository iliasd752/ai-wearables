import { useForm } from "react-hook-form";
import type { Wearable } from "../lib/types";

interface AddWearableFormProps {
  onSubmit: (Wearable: Omit<Wearable, "id">) => void;
  onCancel: () => void;
  editingWearable?: Wearable | null;
}

type FormData = {
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
};

const formFactorOptions = [
  { value: "glasses", label: "Glasses" },
  { value: "ring", label: "Ring" },
  { value: "pin", label: "Pin" },
  { value: "earbuds", label: "Earbuds" },
  { value: "other", label: "Other" },
] as const;

export default function AddWearableForm({
  onSubmit,
  onCancel,
  editingWearable = null,
}: AddWearableFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: editingWearable
      ? {
          productName: editingWearable.productName,
          brand: editingWearable.brand,
          formFactor: editingWearable.formFactor,
          launchDate: editingWearable.launchDate,
          priceUsd: editingWearable.priceUsd,
          coreAIFeature: editingWearable.coreAIFeature,
          batteryHours: editingWearable.batteryHours,
          connectivity: editingWearable.connectivity,
          weightGrams: editingWearable.weightGrams,
          userRating: editingWearable.userRating,
        }
      : {
          productName: "",
          brand: "",
          formFactor: "other" as const,
          launchDate: "",
          priceUsd: 0,
          coreAIFeature: "",
          batteryHours: 0,
          connectivity: "",
          weightGrams: 0,
          userRating: 0,
        },
  });

  const onFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return <div></div>;
}
