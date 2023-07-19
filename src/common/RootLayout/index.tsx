import React, { type ReactNode, useEffect, useState } from "react";

import Footer from "~/components/footer_related/Footer";
import Head from "next/head";
import Header from "~/components/header_related/Header";
import MainEditor from "~/components/main_editor_related/MainEditor";
import SideNav from "~/components/sidenav_related/SideNav";
import SidePanel from "~/components/side_panel_related/SidePanel";
import { useRouter } from "next/router";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [metadata, setMetadata] = useState<{
    title: string;
    description: string;
  }>({
    title: "",
    description: "",
  });

  const { pathname } = useRouter();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setMetadata({
          title: "TheWillisEnv | READ.me",
          description:
            "Naya Willis's developer/engineer portfolio introduction page - start page",
        });
        break;
      case "/projects":
        setMetadata({
          title: "TheWillisEnv | Projects",
          description:
            "Naya Willis's developer/engineer portfolio past and current projects page",
        });
        break;
      case "/skills":
        setMetadata({
          title: "TheWillisEnv | Skills",
          description:
            "Naya Willis's developer/engineer portfolio technical and/or non-technical skills page",
        });
        break;
      case "/experience":
        setMetadata({
          title: "TheWillisEnv | Experience",
          description:
            "Naya Willis's developer/engineer portfolio work experience page",
        });
        break;
      case "/education":
        setMetadata({
          title: "TheWillisEnv | Education",
          description:
            "Naya Willis's developer/engineer portfolio technical and/or non-technical education page",
        });
        break;
    }
  }, [pathname]);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
            <MainEditor>{children}</MainEditor>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
