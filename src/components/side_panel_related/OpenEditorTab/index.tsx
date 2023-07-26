import React, { useState } from "react";

import type { IEditorTab } from "types";
import { VscClose } from "react-icons/vsc";
import { useRouter } from "next/router";
import useStore from "~/hooks/useStore";

const OpenEditorTab: React.FC<IEditorTab> = (editor) => {
  const { name, Icon, iconProps } = editor;

  const { setActiveEditorTab, removeEditor } = useStore((state) => ({
    setActiveEditorTab: state.setActiveEditorTab,
    removeEditor: state.removeEditor,
  }));

  const { activeEditorTab, openEditors } = useStore((state) => ({
    activeEditorTab: state.activeEditorTab,
    openEditors: state.openEditors,
  }));

  const [showCloseButton, setShowCloseButton] = useState<boolean>(false);

  const { push } = useRouter();

  const newIconProps = Object.assign({}, iconProps, { size: 20 });

  const handleClick = () => {
    setActiveEditorTab(name);
  };

  return (
    <li>
      <div
        className={`flex cursor-pointer items-center gap-2 py-1  ${
          activeEditorTab === name ? "bg-[#37373C]" : "hover:bg-[#4444444e] "
        }`}
        onMouseEnter={() => setShowCloseButton(true)}
        onMouseLeave={() => setShowCloseButton(false)}
        onClick={handleClick}
      >
        <VscClose
          size={26}
          className={`ml-8 rounded-md p-[2px] hover:bg-[#4a4a4a] ${
            showCloseButton || activeEditorTab === name
              ? "fill-[#A7A7A7]"
              : "fill-transparent"
          }`}
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
        <div className={`flex items-center gap-2`}>
          <Icon {...newIconProps} />
          <span
            className={`text-lg ${
              activeEditorTab === name ? "text-[#CBA700]" : "text-[#74C992]"
            }`}
          >
            {`${name}`}
          </span>
        </div>
      </div>
    </li>
  );
};

export default OpenEditorTab;
