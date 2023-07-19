import { useCallback, useEffect } from "react";

import editorTabs from "data/editorTabs";
import { useRouter } from "next/router";
import useStore from "~/hooks/useStore";

const useEditorUpdater = () => {
  const { addEditor, openEditors } = useStore((state) => state);
  const { pathname } = useRouter();

  const handleAddEditor = useCallback(
    (page: string) => {
      const foundEditor = editorTabs.find((tab) => tab.name === page);

      if (!foundEditor) throw new Error("Check your editor tabs");

      if (openEditors.some((editor) => editor.name === foundEditor.name))
        return;

      addEditor(foundEditor);
    },
    [addEditor, openEditors]
  );

  useEffect(() => {
    switch (pathname) {
      case "/":
        handleAddEditor("READ.me");
        break;
      case "/skills":
        handleAddEditor("Skills");
        break;
    }
  }, [handleAddEditor, pathname]);
};

export default useEditorUpdater;
