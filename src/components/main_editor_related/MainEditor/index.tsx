import EditorTabs from "../EditorTabs";
import PathSimulation from "../PathSimulation";
import React, { type ReactNode } from "react";
import MainEditorBody from "../MainEditorBody";

export interface IMainEditor {
  children: ReactNode;
}

const MainEditor: React.FC<IMainEditor> = ({ children }) => {
  return (
    <div className="flex w-full flex-col overflow-y-scroll border-r border-[#32323357] bg-[#1E1E1E] text-white">
      <EditorTabs />
      <PathSimulation />
      <MainEditorBody>{children}</MainEditorBody>
    </div>
  );
};

export default MainEditor;
