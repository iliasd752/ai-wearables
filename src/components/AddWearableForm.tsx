import { useForm } from "react-hook-form";
import type { Wearable } from "../lib/types";
import { X } from "lucide-react";

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

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-card rounded-lg border border-border p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                {editingWearable ? "Edit Wearable" : "Add New Wearable"}
              </h3>
              {!editingWearable && (
                <p className="text-sm text-muted-foreground mt-1">
                  Name, brand, form factor, and AI feature are required. Add
                  more details later!
                </p>
              )}
            </div>
            <button
              onClick={onCancel}
              className="p-2 hover:bg-accent rounded-md transition-colors"
              disabled={isSubmitting}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  {...register("productName", {
                    required: "Product name is required",
                    minLength: {
                      value: 2,
                      message: "Product name must be at least 2 characters",
                    },
                  })}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter product name"
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
