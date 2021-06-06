import React, { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";
import { useFocus } from "./util/inputRef";
interface NewItemFormProps {
  onAdd(text: string): void;
}
function NewItemForm({ onAdd }: NewItemFormProps) {
  const [text, setText] = useState("");
  const inputFocus = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputFocus}
        onChange={(e) => setText(e.target.value)}
      ></NewItemInput>
      <NewItemButton onClick={() => onAdd(text)}>Create </NewItemButton>
    </NewItemFormContainer>
  );
}
export default NewItemForm;
