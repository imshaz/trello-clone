import React from "react";
import AddNewItem from "./AddNewItem";
import "./App.css";
import Column from "./Column";
import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";

function App() {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state?.lists?.map((list, i) => (
        <Column text={list?.text} key={list?.id} index={i} />
      ))}

      <AddNewItem onAdd={() => console.log} toggleButtonText="+ Add new List" />
    </AppContainer>
  );
}

export default App;
