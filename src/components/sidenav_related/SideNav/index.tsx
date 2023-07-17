import NavItems from "../NavItems";
import React from "react";
import Socials from "../Socials";

const SideNav = () => {
  return (
    <div
      className={`flex min-w-[70px] flex-grow flex-col justify-between bg-[#333333] drop-shadow-md`}
    >
      <NavItems />
      <Socials />
    </div>
  );
};

export default SideNav;
