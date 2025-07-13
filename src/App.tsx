import { useState } from "react";
import WearableList from "./components/WearableList";
import Header from "./components/Header";
import AddWearableForm from "./components/AddWearableForm";
import useWearablesStore from "./hooks/useWearablesStore";
import type { Wearable } from "./lib/types";

function App() {
  const [wearables, { addWearable, updateWearable }] = useWearablesStore();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingWearable, setEditingWearable] = useState<Wearable | null>(null);

  const handleAddNewWearable = () => {
    setEditingWearable(null);
    setShowAddForm(true);
  };

  const handleEditWearable = (wearable: Wearable) => {
    setEditingWearable(wearable);
    setShowAddForm(true);
  };

  const handleFormSubmit = (wearableData: Omit<Wearable, "id">) => {
    if (editingWearable) {
      updateWearable(editingWearable.id, wearableData);
    } else {
      addWearable(wearableData);
    }
    handleCloseForm();
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
    setEditingWearable(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onAddWearable={handleAddNewWearable} />
      <main className="px-4 py-8">
        <WearableList onEditWearable={handleEditWearable} />
      </main>

      {/* Add/Edit Wearable Form */}
      {showAddForm && (
        <AddWearableForm
          onSubmit={handleFormSubmit}
          onCancel={handleCloseForm}
          editingWearable={editingWearable}
        />
      )}
    </div>
  );
}

export default App;
