import type { ISkill, ISkillGroup } from "data/skills";
import React, { useEffect, useState } from "react";

import Skills from "../Skills";
import skillSections from "data/skillSections";

const SkillGroup: React.FC<ISkillGroup> = (skillGroup) => {
  const [_target, setTarget] = useState<string>();

  const typeCategory = Object.keys(skillGroup)[0];

  useEffect(() => {
    const getTargetWithoutHash = (target: string) => target.split("#")[1];

    if (typeCategory) {
      const foundSection = skillSections.find(
        (section) => getTargetWithoutHash(section.target) === typeCategory
      );

      if (!foundSection) return;

      setTarget(getTargetWithoutHash(foundSection.target));
    }
  }, [typeCategory]);

  const skillListInCategory = typeCategory ? skillGroup[typeCategory] : [];

  if (typeCategory)
    return (
      <li className={`flex flex-col`} id={_target}>
        <h2
          className={`m-auto mb-10 inline-block text-3xl font-semibold text-[#4d6a3f]`}
        >
          {`{/* ${typeCategory} */}`}
        </h2>
        {skillListInCategory && (
          <Skills skills={skillListInCategory as ISkill[]} />
        )}
      </li>
    );
  // fadfadfa
  return null;
};

export default SkillGroup;
