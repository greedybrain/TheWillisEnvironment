import React, { useState } from "react";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

import type { ISidePanelTab } from "types";
import OpenEditorTabs from "../OpenEditorTabs";
import SkillSections from "~/components/main_editor_related/SkillSections";
import editorTabs from "data/editorTabs";
import useStore from "~/hooks/useStore";

const SidePanelTab: React.FC<ISidePanelTab> = ({ name }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const activeEditorTab = useStore((state) => state.activeEditorTab);
  const setActiveEditorTab = useStore((state) => state.setActiveEditorTab);

  return (
    <li
      className={`first-of-type:border-b first-of-type:border-b-[#cccccc30] `}
    >
      <div
        className={`relative flex cursor-pointer items-center py-1 drop-shadow-xl ${
          isCollapsed
            ? "border border-[#427abd]"
            : "border-b border-b-[#cccccc30] "
        } `}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className={`absolute min-w-[26px]`}>
          {!isCollapsed ? (
            <VscChevronRight size={26} color="#A7A7A7" />
          ) : (
            <VscChevronDown size={26} color="#A7A7A7" />
          )}
        </div>
        <span
          className={`text-md ml-8 select-none font-semibold text-[#BFBFBF]`}
        >
          {name}
        </span>
      </div>
      {name === "OPEN EDITORS" && isCollapsed && <OpenEditorTabs />}
      {name === "THEWILLISENVIRONMENT" && isCollapsed && (
        <ul>
          {editorTabs.map((tab) => {
            return (
              <li
                key={tab.name}
                className={`flex cursor-pointer items-center`}
                onClick={() => setActiveEditorTab(tab.name)}
              >
                <div
                  className={`w-full  ${
                    activeEditorTab === tab.name && tab.name !== "Skills"
                      ? "bg-[#37373D]"
                      : "hover:bg-[#37373d45]"
                  }`}
                >
                  <div className={`flex items-center px-8 py-1`}>
                    {tab.name === "Skills" ? (
                      <VscChevronDown size={24} color="#A7A7A7" />
                    ) : (
                      <tab.Icon {...tab.iconProps} />
                    )}

                    <p className={`ml-2 text-lg text-[#CCCCCC]`}>{tab.name}</p>
                  </div>
                  {tab.name === "Skills" && <SkillSections />}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default SidePanelTab;
