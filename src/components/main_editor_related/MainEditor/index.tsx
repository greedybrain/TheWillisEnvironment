import EditorTabs from "../EditorTabs";
import LineCount from "../LineCount";
import PathSimulation from "../PathSimulation";
import React from "react";
import WelcomeCopy from "../WelcomeCopy";
import { useRouter } from "next/router";

const MainEditor = () => {
  const { pathname } = useRouter();

  return (
    <div className="flex w-full flex-col overflow-y-scroll border-r border-[#32323357] bg-[#1E1E1E] text-white">
      <EditorTabs />
      <PathSimulation />
      <div className={`flex  overflow-y-scroll `}>
        <LineCount />
        {pathname === "/" && <WelcomeCopy />}
      </div>
    </div>
  );
};

export default MainEditor;
