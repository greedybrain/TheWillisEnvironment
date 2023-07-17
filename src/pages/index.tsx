import Footer from "~/components/footer_related/Footer";
import Head from "next/head";
import Header from "~/components/header_related/Header";
import MainEditor from "~/components/main_editor_related/MainEditor";
import SideNav from "~/components/sidenav_related/SideNav";
import SidePanel from "~/components/side_panel_related/SidePanel";
import useEditorUpdater from "~/hooks/useEditorUpdater";

export default function Home() {
  useEditorUpdater();

  return (
    <>
      <Head>
        <title>TheWillisEnv</title>
        <meta
          name="description"
          content="Naya Willis's developer/engineer portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main-custom flex min-h-screen flex-col p-8">
        <div
          className={`flex w-[95%] min-w-[1200px] max-w-[1400px] flex-grow flex-col self-center drop-shadow-2xl`}
        >
          <Header />
          <div className={`flex flex-grow`}>
            <SideNav />
            <SidePanel />
            <MainEditor />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
