import { useState } from "react";
import useWearablesStore from "../hooks/useWearablesStore";
import type { Wearable } from "../lib/types";
import WearableCard from "./WearableCard";
import AddWearableForm from "./AddWearableForm";

export default function WearableList() {
  const [wearables, { addWearable, updateWearable, deleteWearable }] =
    useWearablesStore();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingWearable, setEditingWearable] = useState<Wearable | null>(null);

  const handleEditWearable = (wearable: Wearable) => {
    setEditingWearable(wearable);
    setShowAddForm(true);
  };

  const handleDeleteWearable = (id: string) => {
    deleteWearable(id);
  };

  const handleAddNewWearable = () => {
    setEditingWearable(null);
    setShowAddForm(true);
  };

  const handleFormSubmit = (wearableData: Omit<Wearable, "id">) => {
    if (editingWearable) {
      // Update existing wearable
      updateWearable(editingWearable.id, wearableData);
    } else {
      // Add new wearable
      addWearable(wearableData);
    }
    handleCloseForm();
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
    setEditingWearable(null);
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

      {/* Add/Edit Wearable Form */}
      {showAddForm && (
        <AddWearableForm
          onSubmit={handleFormSubmit}
          onCancel={handleCloseForm}
          editingWearable={editingWearable}
        />
      )}
    </>
  );
}
