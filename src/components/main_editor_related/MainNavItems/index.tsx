import MainNavItem from "../MainNavItem";
import React from "react";
import editorTabs from "data/editorTabs";
import { useRouter } from "next/router";

const MainNavItems = () => {
  const { pathname } = useRouter();

  return (
    <div className={`px-3`}>
      {pathname === "/" && (
        <h3 className={`mb-4 mt-12 text-2xl text-[#CCCCCC]`}>Start</h3>
      )}
      <ul
        className={`flex flex-grow flex-col gap-3 ${
          pathname !== "/" ? "mt-12" : "mt-0"
        }`}
      >
        {editorTabs.slice(1).map((tab) => (
          <MainNavItem key={tab.id} {...tab} />
        ))}
      </ul>
    </div>
  );
};

export default MainNavItems;
