// import type { IEditorTab } from "types";

// const handleDragEnd = (
//   event: DragEndEvent,
//   editors: IEditorTab[],
//   setOpenEditors: (editors: IEditorTab[]) => void
// ) => {
//   const { active, over } = event;

//   if (active.id === over?.id) return;

//   const activeIndex = editors.findIndex(
//     (editor) => editor.id === Number(active.id)
//   );
//   const overIndex = editors.findIndex(
//     (editor) => editor.id === Number(over?.id)
//   );

//   if (activeIndex === -1 || overIndex === -1) return;

//   const modArray = arrayMove(editors, activeIndex, overIndex);

//   setOpenEditors(modArray);
// };

// export default handleDragEnd;

export {};
