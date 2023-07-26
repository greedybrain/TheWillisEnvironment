import type { ISkill } from "data/skills";
import Image from "next/image";
import React from "react";
import TagSimulation from "~/common/TagSimulation";

interface ISkillExt extends ISkill {
  skills: ISkill[];
}

const Skill: React.FC<ISkillExt> = ({ skills, ...skill }) => {
  return (
    <li
      key={skill.name}
      className={`mb-10 ${
        skills[skills.length - 1]?.name !== skill.name
          ? "border-b border-b-[#cccccc27]"
          : ""
      } pb-6`}
    >
      <div className={`flex w-full flex-col items-center`}>
        <div
          className={`relative mb-4 `}
          style={{
            width: skill.width || 75,
            height: skill.height || 75,
          }}
        >
          <Image
            src={skill.image}
            alt={`${skill.name}`}
            fill
            className={`drop-shadow-lg`}
          />
        </div>

        <div className={`flex items-center`}>
          <TagSimulation
            name="h3"
            bracketColor="#CCCCCC"
            size={20}
            color="#3894FF"
          />
          <h3 className={`text-2xl text-[#CCCCCC]`}>{skill.name} </h3>
          <TagSimulation
            name="h3"
            bracketColor="#CCCCCC"
            size={20}
            color="#3894FF"
            isClose
          />
        </div>
      </div>

      <TagSimulation
        name="p"
        bracketColor="#CCCCCC"
        size={20}
        color="#3894FF"
      />
      <p className={`mt-4 whitespace-pre-line text-lg text-[#989898]`}>
        {skill.description}
      </p>
      <TagSimulation
        name="p"
        bracketColor="#CCCCCC"
        size={20}
        color="#3894FF"
      />
    </li>
  );
};

export default Skill;
