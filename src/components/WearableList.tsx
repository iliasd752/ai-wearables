import useWearablesStore from "../hooks/useWearablesStore";
import type { Wearable } from "../lib/types";
import WearableCard from "./WearableCard";

interface WearableListProps {
  onEditWearable: (wearable: Wearable) => void;
}

export default function WearableList({ onEditWearable }: WearableListProps) {
  const [wearables, { deleteWearable }] = useWearablesStore();

  const handleDeleteWearable = (id: string) => {
    deleteWearable(id);
  };

  return (
    <>
      <div className="mb-8">
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Your Collection
              </h2>
              <p className="text-sm text-muted-foreground">
                Total Wearables:{" "}
                <span className="font-semibold text-foreground">
                  {wearables.length}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {wearables.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No wearables in your collection yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wearables.map((wearable: Wearable) => (
            <WearableCard
              key={wearable.id}
              wearable={wearable}
              onEdit={onEditWearable}
              onDelete={handleDeleteWearable}
            />
          ))}
        </div>
      )}
    </>
  );
}
