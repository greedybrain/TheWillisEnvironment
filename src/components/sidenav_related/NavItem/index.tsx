import type { ISideNavItem } from "types";
import Link from "next/link";
import React from "react";
import useStore from "~/hooks/useStore";

const NavItem: React.FC<ISideNavItem> = ({ path, Icon, name, iconProps }) => {
  const state = useStore((state) => state);

  const newIconProps = Object.assign({}, iconProps, {
    color: state.activeSideNavItem === name ? iconProps.color : "#858585",
  });

  return (
    <li className={`h-[75px]`} onClick={() => state.setActiveNavItem(name)}>
      <Link className={`relative flex  h-full items-center`} href={path}>
        <div
          className={`absolute h-full w-[2px] `}
          style={{
            backgroundColor:
              state.activeSideNavItem === name ? "#ffffff" : "#333333",
          }}
        />
        <div className={`flex h-full w-full items-center justify-center `}>
          <Icon {...newIconProps} />
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
