import { useState } from "react";
import useWearablesStore from "../hooks/useWearablesStore";
import type { Wearable } from "../lib/types";
import WearableCard from "./WearableCard";

export default function WearableList() {
  const [wearables, deleteWearable] = useWearablesStore();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEditWearable = (wearable: Wearable) => {
    console.log("Edit wearable:", wearable.productName);
    alert(`Edit functionality coming soon for ${wearable.productName}!`);
  };

  const handleDeleteWearable = (id: string) => {
    deleteWearable(id);
  };

  const handleAddNewWearable = () => {
    setShowAddForm(true);
    alert("Add new wearable form coming in the next step!");
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
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
            <button
              onClick={handleAddNewWearable}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Add New Wearable
            </button>
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
              onEdit={handleEditWearable}
              onDelete={handleDeleteWearable}
            />
          ))}
        </div>
      )}

      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Add New Wearable</h3>
            <p className="text-muted-foreground mb-4">
              Form component coming in the next step
            </p>
            <button
              onClick={handleCloseForm}
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
