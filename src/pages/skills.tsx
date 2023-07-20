import Image from "next/image";
import React from "react";
import RootLayout from "~/common/RootLayout";
import TagSimulation from "~/common/TagSimulation";
import skills from "data/skills";
import useEditorUpdater from "~/hooks/useEditorUpdater";

export default function Skills() {
  useEditorUpdater();

  return (
    <RootLayout>
      <div className={`w-full px-6 py-2`}>
        <h2 className={`text-center text-2xl text-[#577B47]`}>
          <span className={`text-[#3894FF]`}>{"{"}</span>
          {"/* Skills Learned */"}
          <span className={`text-[#3894FF]`}>{"}"}</span>
        </h2>
        <ul
          className={`flex max-h-[750px] flex-col gap-10 overflow-y-scroll px-3 py-10`}
        >
          {skills.map((skill) => (
            <li key={skill.id}>
              <div className={`flex w-full flex-col items-center`}>
                <div className={`relative mb-4 h-[75px]  w-[75px]`}>
                  <Image src={skill.image} alt={`${skill.name}`} fill />
                </div>

                <p className={`text-2xl text-[#CCCCCC]`}>{skill.name} </p>
                <p className={`text-lg text-[#989898]`}>({skill.type})</p>
              </div>
              <div>
                <TagSimulation
                  name="p"
                  bracketColor="#989898"
                  size={20}
                  color="#3894FF"
                />
                <p
                  className={`ml-8 whitespace-pre-line text-lg text-[#989898]`}
                >
                  {skill.description}
                </p>
                <TagSimulation
                  name="p"
                  bracketColor="#989898"
                  size={20}
                  color="#3894FF"
                  isClose
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </RootLayout>
  );
}
//
