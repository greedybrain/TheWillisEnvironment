import React, { type ReactNode } from "react";

// import MainNavItems from "../MainNavItems";

interface IMainEditorBody {
  children: ReactNode;
}

const MainEditorBody: React.FC<IMainEditorBody> = ({ children }) => {
  return (
    <div
      className={`main-editor-body flex h-full justify-between overflow-y-scroll`}
    >
      <div className={`flex justify-center overflow-y-scroll px-[10%] pt-[3%]`}>
        {children}
      </div>
      {/* <div
        className={`flex border-l border-r border-l-[#3e3e3e47] border-r-[#3e3e3e5e] px-3 `}
      >
        <MainNavItems />
      </div> */}
    </div>
  );
};

export default MainEditorBody;
