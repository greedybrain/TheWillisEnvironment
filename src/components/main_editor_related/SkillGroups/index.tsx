import React from "react";
import SkillGroup from "../SkillGroup";
import skillGroups from "data/skills";

const SkillGroups = () => {
  return (
    <ul
      className={`flex max-h-[750px] flex-grow flex-col gap-8 p-3 scrollbar-thin scrollbar-track-[#323232] scrollbar-thumb-black`}
    >
      {skillGroups.map((skillGroup, index) => {
        return <SkillGroup key={index} {...skillGroup} />;
      })}
    </ul>
  );
};

export default SkillGroups;
