import React, { useState } from "react";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

import type { ISidePanelTab } from "types";
import OpenEditorTabs from "../OpenEditorTabs";

const SidePanelTab: React.FC<ISidePanelTab> = ({ name }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <li className={`border-b border-b-[#cccccc30]`}>
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
    </li>
  );
};

export default SidePanelTab;
