import React from "react";
import SkillSection from "../SkillSection";
import skillSections from "data/skillSections";

const SkillSections = () => {
  return (
    <ul>
      {skillSections.map((section) => (
        <SkillSection key={section.id} {...section} />
      ))}
    </ul>
  );
};

export default SkillSections;
