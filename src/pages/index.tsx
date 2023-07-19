import RootLayout from "~/common/RootLayout";
import WelcomeCopy from "~/components/main_editor_related/WelcomeCopy";
import useEditorUpdater from "~/hooks/useEditorUpdater";

export default function Home() {
  useEditorUpdater();

  return (
    <RootLayout>
      <WelcomeCopy />
    </RootLayout>
  );
}
