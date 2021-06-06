import React from "react";
import AddNewItem from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./AppStateContext";
import Card from "./Card";
interface ColumnProps {
  text: string;
  index: number;
}
function Column({ text, index }: ColumnProps) {
  const {
    state: { lists },
    dispatch,
  } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {lists[index]?.tasks?.map((task) => {
        return <Card text={task?.text} key={task?.id} />;
      })}

      <AddNewItem
        toggleButtonText="+ Add task"
        onAdd={(text) => {
          dispatch({
            type: "ADD_TASK",
            payload: { taskId: lists[index].id, text: text },
          });
        }}
        dark={true}
      />
    </ColumnContainer>
  );
}

export default Column;
