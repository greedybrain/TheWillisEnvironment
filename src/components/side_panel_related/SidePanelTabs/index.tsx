import React from "react";
import SidePanelTab from "../SidePanelTab";
import sidePanelTabs from "data/sidePanelTabs";

const SidePanelTabs = () => {
  return (
    <ul>
      {sidePanelTabs.map((tab) => (
        <SidePanelTab key={tab.id} {...tab} />
      ))}
    </ul>
  );
};

export default SidePanelTabs;
