import type { IEditorTab } from "types";
import { create } from "zustand";
import editorTabs from "data/editorTabs";

interface StoreState {
  activeSideNavItem: string;
  activeEditorTab: string;
  openEditors: IEditorTab[];
}

interface StoreActions {
  setActiveNavItem: (
    activeSideNavItem: StoreState["activeSideNavItem"]
  ) => void;
  setActiveEditorTab: (activeEditorTab: StoreState["activeEditorTab"]) => void;
  setOpenEditors: (editors: StoreState["openEditors"]) => void;
  addEditor: (editor: IEditorTab) => void;
  removeEditor: (editor: IEditorTab) => void;
}

const useStore = create<StoreState & StoreActions>((set) => ({
  activeSideNavItem: "Home",
  activeEditorTab: "READ.me",
  openEditors: editorTabs,
  setActiveNavItem: (activeSideNavItem) => set(() => ({ activeSideNavItem })),
  setActiveEditorTab: (activeEditorTab) => set(() => ({ activeEditorTab })),
  addEditor: (editor) =>
    set((state) => {
      if (state.openEditors.some((e) => editor.name === e.name)) return {};

      return { openEditors: [...state.openEditors, editor] };
    }),
  removeEditor: (editor) =>
    set((state) => ({
      openEditors: state.openEditors.filter((e) => e.name !== editor.name),
    })),
  setOpenEditors: (editors) => set(() => ({ openEditors: editors })),
}));

export default useStore;
