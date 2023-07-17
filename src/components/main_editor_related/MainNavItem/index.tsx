import type { IEditorTab } from "types";
import Link from "next/link";
import React from "react";
import useStore from "~/hooks/useStore";

const MainNavItem: React.FC<IEditorTab> = (editor) => {
  const { name, Icon, path, iconProps } = editor;

  const state = useStore((state) => state);

  const handleClick = () => {
    state.addEditor(editor);
    state.setActiveEditorTab(editor.name);
  };

  return (
    <li onClick={handleClick}>
      <Link className={`flex gap-2`} href={path}>
        <Icon className={`h-full`} {...iconProps} />
        <span className={`flex h-full items-center text-xl text-[#3894FF]`}>
          {name}...
        </span>
      </Link>
    </li>
  );
};

export default MainNavItem;
