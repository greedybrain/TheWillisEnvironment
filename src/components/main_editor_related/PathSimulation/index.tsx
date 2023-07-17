import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import useStore from "~/hooks/useStore";

const PathSimulation = () => {
  const state = useStore((state) => state);

  return (
    <div
      className={`flex items-center gap-[2px] border-b border-b-[#00000033] px-3 py-1 text-lg text-[#A7A7A7] shadow-md`}
    >
      <p>the-willis-environment</p>
      <VscChevronRight size={24} />
      <p>{state.activeEditorTab}</p>
    </div>
  );
};

export default PathSimulation;
