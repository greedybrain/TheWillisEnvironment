import type { ISkillSection } from "data/skillSections";
import React from "react";

const SkillSection: React.FC<ISkillSection> = ({ skillName, target }) => {
  return (
    <li className={`py-1 pl-[70px] hover:bg-[#37373d45]`}>
      <a className={`text-lg text-[#CAAD80]`} href={target}>
        {skillName}
      </a>
    </li>
  );
};

export default SkillSection;
