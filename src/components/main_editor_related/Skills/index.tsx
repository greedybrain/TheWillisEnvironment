import type { ISkill } from "data/skills";
import React from "react";
import Skill from "../Skill";

const Skills: React.FC<{ skills: ISkill[] }> = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill) => {
        return <Skill key={skill.id} skills={skills} {...skill} />;
      })}
    </ul>
  );
};

export default Skills;
