import React from "react";
import RootLayout from "~/common/RootLayout";
import SkillGroups from "~/components/main_editor_related/SkillGroups";
import useEditorUpdater from "~/hooks/useEditorUpdater";

export default function Skills() {
  useEditorUpdater();

  return (
    <RootLayout>
      <div className={`w-full px-6 py-2`}>
        <SkillGroups />
      </div>
    </RootLayout>
  );
}
//
