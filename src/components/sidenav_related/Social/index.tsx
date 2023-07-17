import type { ISideNavItem } from "types";
import React from "react";

const Social: React.FC<ISideNavItem> = ({ path, Icon, iconProps }) => {
  return (
    <li className={`h-[60px]`}>
      <a
        className={`relative flex  h-full items-center`}
        href={path}
        target="_blank"
        rel="noreferrer"
      >
        <div className={`absolute h-full w-[2px] `} />
        <div className={`flex h-full w-full items-center justify-center `}>
          <Icon {...iconProps} />
        </div>
      </a>
    </li>
  );
};

export default Social;
