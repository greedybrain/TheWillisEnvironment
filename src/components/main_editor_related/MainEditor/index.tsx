import EditorTabs from "../EditorTabs";
import LineCount from "../LineCount";
import PathSimulation from "../PathSimulation";
import React, { type ReactNode } from "react";

export interface IMainEditor {
  children: ReactNode;
}

const MainEditor: React.FC<IMainEditor> = ({ children }) => {
  return (
    <div className="flex w-full flex-col overflow-y-scroll border-r border-[#32323357] bg-[#1E1E1E] text-white">
      <EditorTabs />
      <PathSimulation />
      <div className={`flex  overflow-y-scroll `}>
        <LineCount />
        {children}
      </div>
    </div>
  );
};

export default MainEditor;
