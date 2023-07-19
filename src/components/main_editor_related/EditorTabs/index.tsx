import EditorTab from "../EditorTab";
import React from "react";
import removeDuplicates from "~/lib/removeDuplicates";
import useStore from "~/hooks/useStore";

const EditorTabs = () => {
  const { openEditors } = useStore((state) => ({
    openEditors: state.openEditors,
  }));

  const editors = removeDuplicates(openEditors);

  return (
    <ul
      className={`flex overflow-x-scroll bg-[#252526] ${
        openEditors.length === 5 ? "scrollbar-thin" : ""
      } lg:scrollbar-none`}
    >
      {editors.map((tab) => (
        <EditorTab key={tab.id} {...tab} />
      ))}
    </ul>
  );
};

export default EditorTabs;
