import RootLayout from "~/common/RootLayout";
import SkillGroups from "~/components/main_editor_related/SkillGroups";
import WelcomeCopy from "~/components/main_editor_related/WelcomeCopy";
import useEditorUpdater from "~/hooks/useEditorUpdater";
import useStore from "~/hooks/useStore";

export default function Home() {
  useEditorUpdater();

  const { activeEditorName } = useStore((state) => ({
    activeEditorName: state.activeEditorTab,
  }));

  return (
    <RootLayout>
      {activeEditorName === "READ.me" && <WelcomeCopy />}
      {activeEditorName === "Projects" && "PROJECTS"}
      {activeEditorName === "Skills" && <SkillGroups />}
      {activeEditorName === "Experience" && "EXPERIENCE"}
      {activeEditorName === "Education" && "EDUCATION"}
    </RootLayout>
  );
}
