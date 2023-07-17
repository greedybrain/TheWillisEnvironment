import NavItem from "../NavItem";
import React from "react";
import sideNavItems from "data/sideNavItems";

const NavItems = () => {
  return (
    <ul>
      {sideNavItems.map((item) => (
        <NavItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default NavItems;
