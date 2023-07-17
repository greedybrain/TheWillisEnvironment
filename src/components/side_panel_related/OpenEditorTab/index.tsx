import React, { useState } from "react";

import { CSS } from "@dnd-kit/utilities";
import type { IEditorTab } from "types";
import { VscClose } from "react-icons/vsc";
import { useRouter } from "next/router";
import { useSortable } from "@dnd-kit/sortable";
import useStore from "~/hooks/useStore";

const OpenEditorTab: React.FC<IEditorTab> = (editor) => {
  const { name, Icon, iconProps, path, id } = editor;

  const state = useStore((state) => state);

  const [showCloseButton, setShowCloseButton] = useState<boolean>(false);

  const { pathname } = useRouter();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const newIconProps = Object.assign({}, iconProps, { size: 20 });

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
        className={`flex cursor-pointer items-center gap-2 py-[1px]  ${
          state.activeEditorTab === name
            ? "bg-[#37373C]"
            : "hover:bg-[#4444444e] "
        }`}
        onMouseEnter={() => setShowCloseButton(true)}
        onMouseLeave={() => setShowCloseButton(false)}
        onClick={handleClick}
      >
        <VscClose
          size={26}
          className={`ml-8 rounded-md p-[2px] hover:bg-[#4a4a4a] ${
            showCloseButton || state.activeEditorTab === name
              ? "fill-[#A7A7A7]"
              : "fill-transparent"
          }`}
          onClick={() => state.removeEditor(editor)}
        />
        <Icon {...newIconProps} />
        <span
          className={`text-lg ${
            pathname === path ? "text-[#CBA700]" : "text-[#74C992]"
          }`}
        >
          {`${name}`}
        </span>
      </div>
    </li>
  );
};

export default OpenEditorTab;
