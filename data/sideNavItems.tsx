import { VscFiles, VscSearch, VscSourceControl } from "react-icons/vsc";

import type { ISideNavItem } from "types";

const size = 40;
const color = "#ffffff";

export default [
  {
    id: 1,
    Icon: VscFiles,
    iconProps: { size, color },
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    Icon: VscSearch,
    iconProps: { size, color },
    path: "/",
    name: "Search",
  },
  {
    id: 3,
    Icon: VscSourceControl,
    iconProps: { size, color },
    path: "/",
    name: "Projects",
  },
] as ISideNavItem[];
