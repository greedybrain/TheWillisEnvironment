import {
  VscBriefcase,
  VscMortarBoard,
  VscProject,
  VscTools,
} from "react-icons/vsc";

import Avatar from "~/common/Avatar";
import type { IEditorTab } from "types";
import willis_avatar from "public/assets/willis-in-black-and-white.jpeg";

const size = 24;
const color = "#3894FF";

export default [
  {
    id: 1,
    name: "READ.me",
    Icon: () => (
      <Avatar
        src={willis_avatar}
        alt="my avatar"
        width={25}
        height={25}
        rounded
      />
    ),
    iconProps: { size, color },
    path: "/",
  },
  {
    id: 2,
    name: "Projects",
    Icon: VscProject,
    iconProps: { size, color },
    path: "/",
  },
  {
    id: 3,
    name: "Skills",
    Icon: VscTools,
    iconProps: { size, color },
    path: "/",
  },
  {
    id: 4,
    name: "Experience",
    Icon: VscBriefcase,
    iconProps: { size, color },
    path: "/",
  },
  {
    id: 5,
    name: "Education",
    Icon: VscMortarBoard,
    iconProps: { size, color },
    path: "/",
  },
] as IEditorTab[];
