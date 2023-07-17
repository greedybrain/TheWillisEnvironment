import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import EditorTab from "../EditorTab";
import React from "react";
import handleDragEnd from "~/lib/handleDragEnd";
import useStore from "~/hooks/useStore";

const EditorTabs = () => {
  const { openEditors, setOpenEditors } = useStore((state) => state);

  const editors = Array.from([...new Set(openEditors)]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => handleDragEnd(event, editors, setOpenEditors)}
    >
      <ul
        className={`flex overflow-x-scroll bg-[#252526] ${
          openEditors.length === 5 ? "scrollbar-thin" : ""
        } lg:scrollbar-none`}
      >
        <SortableContext
          items={editors}
          strategy={horizontalListSortingStrategy}
        >
          {editors.map((tab) => (
            <EditorTab key={tab.id} {...tab} />
          ))}
        </SortableContext>
      </ul>
    </DndContext>
  );
};

export default EditorTabs;
