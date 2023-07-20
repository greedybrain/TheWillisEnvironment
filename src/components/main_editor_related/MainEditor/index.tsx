import EditorTabs from "../EditorTabs";
import LineCount from "../LineCount";
import PathSimulation from "../PathSimulation";
import React, { type ReactNode } from "react";
import MainNavItems from "../MainNavItems";
import Snippet from "../Snippet";

export interface IMainEditor {
  children: ReactNode;
}

const MainEditor: React.FC<IMainEditor> = ({ children }) => {
  return (
    <div className="flex w-full flex-col overflow-y-scroll border-r border-[#32323357] bg-[#1E1E1E] text-white">
      <EditorTabs />
      <PathSimulation />
      <div className={`flex justify-between overflow-y-scroll`}>
        <div className={`flex flex-grow`}>
          <LineCount />
          {children}
        </div>
        <div
          className={`flex min-w-[315px] max-w-[315px] border-l border-r border-l-[#3e3e3e47] border-r-[#3e3e3e5e] px-3 `}
        >
          <MainNavItems />
          <Snippet />
        </div>
      </div>
    </div>
  );
};

export default MainEditor;
