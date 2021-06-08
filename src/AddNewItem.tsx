import React, { useState } from "react";
import NewItemForm from "./NewItemForm";
import { AddItemButton } from "./styles";
interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}
function AddNewItem(props: AddNewItemProps) {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          text.length && onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <AddItemButton onClick={() => setShowForm(true)} dark={dark}>
      {toggleButtonText}
    </AddItemButton>
  );
}

export default AddNewItem;
