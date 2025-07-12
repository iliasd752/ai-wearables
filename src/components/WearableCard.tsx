import { Star, Trash2, Edit3 } from "lucide-react";
import type { Wearable } from "../lib/types";
import { cn } from "../lib/utils";

interface WearableCardProps {
  wearable: Wearable;
  onEdit?: (wearable: Wearable) => void;
  onDelete?: (id: string) => void;
}

const formFactorColors = {
  glasses: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  ring: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  pin: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  earbuds:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  other: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
} as const;

export default function WearableCard({
  wearable,
  onEdit,
  onDelete,
}: WearableCardProps) {
  const formattedDate = new Date(wearable.launchDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  const handleEdit = () => {
    onEdit?.(wearable);
  };

  const handleDelete = () => {
    if (
      window.confirm(`Are you sure you want to delete ${wearable.productName}?`)
    ) {
      onDelete?.(wearable.id);
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow duration-200">
      {/* Header with title and actions */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-card-foreground mb-1">
            {wearable.productName}
          </h3>
          <p className="text-sm text-muted-foreground">{wearable.brand}</p>
        </div>
        <div className="flex gap-2 ml-4">
          {onEdit && (
            <button
              onClick={handleEdit}
              className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              aria-label={`Edit ${wearable.productName}`}
            >
              <Edit3 className="h-4 w-4" />
            </button>
          )}
          {onDelete && (
            <button
              onClick={handleDelete}
              className="p-2 text-muted-foreground hover:text-destructive hover:bg-accent rounded-md transition-colors"
              aria-label={`Delete ${wearable.productName}`}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Badge and Rating */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize",
            formFactorColors[wearable.formFactor]
          )}
        >
          {wearable.formFactor}
        </span>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{wearable.userRating}</span>
        </div>
      </div>

      {/* AI Feature */}
      <div className="mb-4">
        <p className="text-sm text-card-foreground font-medium mb-1">
          AI Feature
        </p>
        <p className="text-sm text-muted-foreground">
          {wearable.coreAIFeature}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-muted-foreground">Price</p>
          <p className="font-medium text-card-foreground">
            ${wearable.priceUsd.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Battery</p>
          <p className="font-medium text-card-foreground">
            {wearable.batteryHours}h
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Weight</p>
          <p className="font-medium text-card-foreground">
            {wearable.weightGrams}g
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Launch</p>
          <p className="font-medium text-card-foreground">{formattedDate}</p>
        </div>
      </div>

      {/* Connectivity */}
      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          Connectivity
        </p>
        <p className="text-sm text-card-foreground">{wearable.connectivity}</p>
      </div>
    </div>
  );
}
