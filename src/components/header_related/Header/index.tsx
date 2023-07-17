import PortfolioName from "../PortfolioName";
import React from "react";
import WindowControlButtons from "../WindowControlButtons";

const Header = () => {
  return (
    <div
      className={`flex items-center justify-between rounded-t-2xl  border-b border-b-[#00000010] bg-[#323233] py-2 drop-shadow-2xl`}
    >
      <WindowControlButtons />
      <PortfolioName />
      <div />
    </div>
  );
};

export default Header;
