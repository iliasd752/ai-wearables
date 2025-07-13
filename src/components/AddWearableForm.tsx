
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg border border-border p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {editingWearable ? "Edit Wearable" : "Add New Wearable"}
            </h3>
            {!editingWearable && (
              <p className="text-sm text-muted-foreground mt-1">
                Name, brand, form factor, and AI feature are required. Add more
                details later!
              </p>
            )}
          </div>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            disabled={isSubmitting}
          >
            <X className="text-white h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Name - REQUIRED */}
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
              {errors.productName && (
                <p className="text-sm text-destructive mt-1">
                  {errors.productName.message}
                </p>
              )}
            </div>

            {/* Brand - REQUIRED */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Brand *
              </label>
              <input
                type="text"
                {...register("brand", {
                  required: "Brand is required",
                  minLength: {
                    value: 2,
                    message: "Brand must be at least 2 characters",
                  },
                })}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter brand name"
                disabled={isSubmitting}
              />
              {errors.brand && (
                <p className="text-sm text-destructive mt-1">
                  {errors.brand.message}
                </p>
              )}
            </div>

            {/* Form Factor - REQUIRED */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Form Factor *
              </label>
              <select
                {...register("formFactor", {
                  required: "Form factor is required",
                })}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                disabled={isSubmitting}
              >
                {formFactorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.formFactor && (
                <p className="text-sm text-destructive mt-1">
                  {errors.formFactor.message}
                </p>
              )}
            </div>

            {/* Launch Date - OPTIONAL */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Launch Date
              </label>
              <input
                type="date"
                {...register("launchDate")}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                disabled={isSubmitting}
              />
              {errors.launchDate && (
                <p className="text-sm text-destructive mt-1">
                  {errors.launchDate.message}
                </p>
              )}
            </div>

            {/* Price - OPTIONAL */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Price (USD)
              </label>
              <input
                type="number"
                {...register("priceUsd", {
                  min: {
                    value: 0,
                    message: "Price cannot be negative",
                  },
                  max: {
                    value: 100000,
                    message: "Price must be less than $100,000",
                  },
                })}
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="0.00"
                disabled={isSubmitting}
              />
              {errors.priceUsd && (
                <p className="text-sm text-destructive mt-1">
                  {errors.priceUsd.message}
                </p>
              )}
            </div>

            {/* Battery Hours - OPTIONAL */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Battery Hours
              </label>
              <input
                type="number"
                {...register("batteryHours", {
                  min: {
                    value: 0,
                    message: "Battery hours cannot be negative",
                  },
                  max: {
                    value: 8760,
                    message: "Battery hours must be less than 8760 (1 year)",
                  },
                })}
                min="0"
                step="0.1"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="0"
                disabled={isSubmitting}
              />
              {errors.batteryHours && (
                <p className="text-sm text-destructive mt-1">
                  {errors.batteryHours.message}
                </p>
              )}
            </div>

            {/* Weight - OPTIONAL */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Weight (grams)
              </label>
              <input
                type="number"
                {...register("weightGrams", {
                  min: {
                    value: 0,
                    message: "Weight cannot be negative",
                  },
                  max: {
                    value: 10000,
                    message: "Weight must be less than 10kg",
                  },
                })}
                min="0"
                step="0.1"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="0"
                disabled={isSubmitting}
              />
              {errors.weightGrams && (
                <p className="text-sm text-destructive mt-1">
                  {errors.weightGrams.message}
                </p>
              )}
            </div>

            {/* User Rating - OPTIONAL */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                User Rating (0-5)
              </label>
              <input
                type="number"
                {...register("userRating", {
                  min: {
                    value: 0,
                    message: "Rating must be at least 0",
                  },
                  max: {
                    value: 5,
                    message: "Rating must be at most 5",
                  },
                })}
                min="0"
                max="5"
                step="0.1"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="0.0"
                disabled={isSubmitting}
              />
              {errors.userRating && (
                <p className="text-sm text-destructive mt-1">
                  {errors.userRating.message}
                </p>
              )}
            </div>
          </div>

          {/* AI Feature - REQUIRED */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Core AI Feature *
            </label>
            <textarea
              {...register("coreAIFeature", {
                required: "AI feature description is required",
                minLength: {
                  value: 10,
                  message:
                    "AI feature description must be at least 10 characters",
                },
                maxLength: {
                  value: 500,
                  message:
                    "AI feature description must be less than 500 characters",
                },
              })}
              rows={2}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Describe the main AI feature"
              disabled={isSubmitting}
            />
            {errors.coreAIFeature && (
              <p className="text-sm text-destructive mt-1">
                {errors.coreAIFeature.message}
              </p>
            )}
          </div>

          {/* Connectivity - OPTIONAL */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Connectivity
            </label>
            <input
              type="text"
              {...register("connectivity")}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g., Bluetooth 5.3, Wi-Fi, 4G LTE (optional)"
              disabled={isSubmitting}
            />
            {errors.connectivity && (
              <p className="text-sm text-destructive mt-1">
                {errors.connectivity.message}
              </p>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? "Submitting..."
                : editingWearable
                ? "Update Wearable"
                : "Create Wearable"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className="text-white flex-1 border border-border bg-background px-4 py-2 rounded-md font-medium hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
