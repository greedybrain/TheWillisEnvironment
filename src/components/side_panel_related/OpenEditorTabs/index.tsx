import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import OpenEditorTab from "../OpenEditorTab";
import React from "react";
import handleDragEnd from "~/lib/handleDragEnd";
import useStore from "~/hooks/useStore";

const OpenEditors = () => {
  const { openEditors, setOpenEditors } = useStore((state) => state);

  const editors = Array.from([...new Set(openEditors)]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => handleDragEnd(event, editors, setOpenEditors)}
    >
      <ul>
        <SortableContext items={editors} strategy={verticalListSortingStrategy}>
          {editors.map((editor) => (
            <OpenEditorTab key={editor.id} {...editor} />
          ))}
        </SortableContext>
      </ul>
    </DndContext>
  );
};

export default OpenEditors;
