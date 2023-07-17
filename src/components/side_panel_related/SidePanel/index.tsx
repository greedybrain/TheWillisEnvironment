import React, { useState } from "react";

import { Resizable } from "re-resizable";
import SidePanelTabs from "../SidePanelTabs";
import sidePanelStyles from "../../../styles/SidePanel.module.css";

const SidePanel = () => {
  const [isResizing, setIsResizing] = useState(false);

  const handleResizeStart = () => setIsResizing(true);
  const handleResizeStop = () => setIsResizing(false);

  return (
    <Resizable
      className={`relative overflow-hidden bg-[#252526]`}
      minWidth={250}
      maxWidth={600}
      onResizeStart={handleResizeStart}
      onResizeStop={handleResizeStop}
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      handleStyles={{
        right: {
          minWidth: 3,
        },
      }}
      handleClasses={{
        right: isResizing
          ? `${sidePanelStyles.resizerHandle ?? ""} ${
              sidePanelStyles.resizing ?? ""
            }`
          : sidePanelStyles.resizerHandle ?? "",
      }}
    >
      <h3 className={`px-8 py-3 text-lg text-[#A7A7A7]`}>EXPLORER</h3>
      <SidePanelTabs />
    </Resizable>
  );
};

export default SidePanel;
