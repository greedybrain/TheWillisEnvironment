import OpenEditorTab from "../OpenEditorTab";
import React from "react";
import removeDuplicates from "~/lib/removeDuplicates";
import useStore from "~/hooks/useStore";

const OpenEditors = () => {
  const { openEditors } = useStore((state) => state);

  const editors = removeDuplicates(openEditors);

  return (
    <ul>
      {editors.map((editor) => (
        <OpenEditorTab key={editor.id} {...editor} />
      ))}
    </ul>
  );
};

export default OpenEditors;
