import React, { useContext, createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { findItemIndexById } from "./util/findItemIndexById";

const appState: AppState = {
  lists: [
    {
      id: "0",
      text: "Anim irure irure dolor amet ",
      tasks: [
        {
          id: "C0",
          text: "Elit elit ea veniam dolore Ad quis consequat culpa amet ex laborum reprehenderit non fugiat amet.",
        },
        {
          id: "C1",
          text: "Velit nulla qui ex esse ipsum amet nostrud sit elit.",
        },
        {
          id: "C2",
          text: "Laboris mollit aliquip aliquip ipsum sunt.",
        },
      ],
    },
    {
      id: "1",
      text: "Anim irure irure dolor amet ex exercitation ",
      tasks: [
        {
          id: "C1",
          text: "Amet in laborum magna minim voluptate..",
        },
        {
          id: "C11",
          text: "Velit nulla qui ex esse ipsum amet nostrud sit elit.",
        },
        {
          id: "C12",
          text: "Laboris mollit aliquip aliquip ipsum sunt.",
        },
      ],
    },
    {
      id: "2",
      text: "Nisi sit mollit et commodo.",
      tasks: [
        {
          id: "C2",
          text: "Elit elit ea veniam dolore aliquip nostrud anim.",
        },
        {
          id: "C21",
          text: "Veniam pariatur deserunt deserunt duis aliqua duis Lorem Lorem officia laboris nostrud..",
        },
        {
          id: "C22",
          text: "Laboris mollit aliquip aliquip ipsum sunt.",
        },
      ],
    },
  ],
};

interface Task {
  id: string;
  text: string;
}
interface List {
  id: string;
  text: string;
  tasks: Task[];
}
interface AppState {
  lists: List[];
}

interface AppstateContextProps {
  state: AppState;
  dispatch: (type: Action) => void;
}

const AppStateContext = createContext<AppstateContextProps>(
  {} as AppstateContextProps
);

export const useAppState = () => {
  return useContext(AppStateContext);
};

// Add types for reducers/actions

type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; taskId: string };
    };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuid(), text: action.payload, tasks: [] },
        ],
      };
    }
    case "ADD_TASK": {
      const targetIndex = findItemIndexById(state.lists, action.payload.taskId);
      state.lists[targetIndex].tasks.push({
        id: uuid(),
        text: action.payload.text,
      });

      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appState);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
