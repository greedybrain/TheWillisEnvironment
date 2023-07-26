import type { IEditorTab } from "types";
import React from "react";
import { VscClose } from "react-icons/vsc";
import { useRouter } from "next/router";
import useStore from "~/hooks/useStore";

const EditorTab: React.FC<IEditorTab> = (editor) => {
  const { Icon, name, iconProps } = editor;

  const { setActiveEditorTab, removeEditor } = useStore((state) => ({
    setActiveEditorTab: state.setActiveEditorTab,
    removeEditor: state.removeEditor,
  }));

  const { activeEditorTab, openEditors } = useStore((state) => ({
    activeEditorTab: state.activeEditorTab,
    openEditors: state.openEditors,
  }));

  const { push } = useRouter();

  const handleClick = () => {
    setActiveEditorTab(name);
  };

  return (
    <li>
      <div
        onClick={handleClick}
        className={`flex cursor-pointer items-center justify-between gap-3 border-r border-r-[#1e1e1ea6] pl-3`}
        style={{
          backgroundColor: activeEditorTab === name ? "#1E1E1E" : "#2D2D2D",
        }}
      >
        <div className={`flex items-center gap-3`}>
          <Icon {...iconProps} className="h-full" />
          <p className={`h-full select-none py-2 text-lg`}>
            {name}
            {name !== "READ.me" && ".me"}
          </p>
        </div>
        <VscClose
          className={`mr-3 rounded-md p-[2px] hover:bg-[#2d2d2d]`}
          size={30}
          color="#ececec"
          onClick={(event) => {
            event.stopPropagation();

            const index = openEditors.findIndex(
              (editor) => editor.name === name
            );
            const prevEditor = openEditors[index - 1];

            if (prevEditor) {
              setActiveEditorTab(prevEditor.name);
              push(prevEditor.path)
                .then(() => removeEditor(editor))
                .catch((err) => console.log(err));
            }
          }}
        />
      </div>
    </li>
  );
};

export default EditorTab;
