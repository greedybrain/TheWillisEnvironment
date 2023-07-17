import type { DragEndEvent } from "@dnd-kit/core";
import type { IEditorTab } from "types";
import { arrayMove } from "@dnd-kit/sortable";

const handleDragEnd = (
  event: DragEndEvent,
  editors: IEditorTab[],
  setOpenEditors: (editors: IEditorTab[]) => void
) => {
  const { active, over } = event;

  if (active.id === over?.id) return;

  const activeIndex = editors.findIndex((editor) => editor.id === active.id);
  const overIndex = editors.findIndex((editor) => editor.id === over?.id);

  const modArray = arrayMove(editors, activeIndex, overIndex);

  setOpenEditors(modArray);
};

export default handleDragEnd;
