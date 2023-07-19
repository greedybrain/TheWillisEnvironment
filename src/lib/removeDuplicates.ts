import type { IEditorTab } from "types";

const removeDuplicates = (editors: IEditorTab[]) => {
  const ids = new Set();
  return editors.filter((editor) => {
    if (ids.has(editor.id)) {
      return false;
    } else {
      ids.add(editor.id);
      return true;
    }
  });
};

export default removeDuplicates;
