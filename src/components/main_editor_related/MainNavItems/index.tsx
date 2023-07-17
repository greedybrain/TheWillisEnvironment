import MainNavItem from "../MainNavItem";
import React from "react";
import editorTabs from "data/editorTabs";

const MainNavItems = () => {
  return (
    <ul className={`flex flex-col gap-3`}>
      {editorTabs.slice(1).map((tab) => (
        <MainNavItem key={tab.id} {...tab} />
      ))}
    </ul>
  );
};

export default MainNavItems;
