import { CSS } from "@dnd-kit/utilities";
import type { IEditorTab } from "types";
import React from "react";
import { VscClose } from "react-icons/vsc";
import { useSortable } from "@dnd-kit/sortable";
import useStore from "~/hooks/useStore";

const EditorTab: React.FC<IEditorTab> = (editor) => {
  const { Icon, name, iconProps, id } = editor;

  const state = useStore((state) => state);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClick = () => state.setActiveEditorTab(name);

  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...style,
      }}
    >
      <div
        className={`flex cursor-pointer items-center justify-between gap-3 border-r border-r-[#1e1e1ea6] pl-3`}
        style={{
          backgroundColor:
            state.activeEditorTab === name ? "#1E1E1E" : "#2D2D2D",
        }}
      >
        <Icon {...iconProps} onClick={handleClick} className="h-full" />
        <p className={`h-full select-none py-2 text-lg`} onClick={handleClick}>
          {name}
          {name !== "READ.me" && ".me"}
        </p>
        <VscClose
          className={`mr-3 rounded-md p-[2px] hover:bg-[#2d2d2d]`}
          size={30}
          color="#ececec"
          onClick={() => {
            state.setActiveEditorTab("READ.me");
            state.removeEditor(editor);
          }}
        />
      </div>
    </li>
  );
};

export default EditorTab;
