import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

import type { ISideNavItem } from "types";
import { PiDevToLogoLight } from "react-icons/pi";

const size = 40;
const color = "#858585";

export default [
  {
    id: 1,
    Icon: AiOutlineLinkedin,
    iconProps: { size, color },
    path: "https://www.linkedin.com/in/naya-willis-b6b30131/",
    name: "LinkedIn Profile",
  },
  {
    id: 2,
    Icon: AiOutlineGithub,
    iconProps: { size, color },
    path: "https://github.com/greedybrain",
    name: "Github Profile",
  },
  {
    id: 3,
    Icon: PiDevToLogoLight,
    iconProps: { size, color },
    path: "https://dev.to/greedybrain",
    name: "Dev.to Profile",
  },
] as ISideNavItem[];
