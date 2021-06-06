import React, { useContext, createContext } from "react";

const appState: AppState = {
  lists: [
    {
      id: "0",
      text: "Anim irure irure dolor amet ex exercitation magna exercitation ad mollit est enim adipisicing.",
      tasks: [
        {
          id: "C0",
          text: "Elit elit ea veniam dolore aliquip nostrud anim.",
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
      text: "Anim irure irure dolor amet ex exercitation magna exercitation ad mollit est enim adipisicing.",
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
}

const AppStateContext = createContext<AppstateContextProps>(
  {} as AppstateContextProps
);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appState }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
