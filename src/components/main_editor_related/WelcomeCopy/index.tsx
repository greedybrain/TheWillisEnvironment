import Avatar from "~/common/Avatar";
import React from "react";
import TagSimulation from "~/common/TagSimulation";
import willis_avatar from "public/assets/willis-in-black-and-white.jpeg";

const WelcomeCopy = () => {
  return (
    <div className={`flex justify-center`}>
      <div className={`ml-10 flex flex-col items-center  py-4`}>
        <Avatar
          src={willis_avatar}
          alt="Willis Avatar"
          rounded
          width={200}
          height={200}
          className={`relative mb-4`}
        />
        <div className="mt-4 items-center md:flex">
          <TagSimulation
            name="h1"
            color="#3894FF"
            size={22}
            bracketColor="#808080"
          />
          <h1 className={`ml-10 text-4xl text-[#CCCCCC] md:ml-0`}>
            Naya Willis
          </h1>
          <TagSimulation
            name="h1"
            color="#3894FF"
            size={22}
            bracketColor="#808080"
            isClose
          />
        </div>

        <div className="mt-2 items-center md:flex">
          <TagSimulation
            name="h2"
            color="#3894FF"
            size={22}
            bracketColor="#808080"
          />
          <h2 className={`ml-10 text-2xl text-[#989898] md:ml-0`}>
            Frontend ~ Full Stack Developer
          </h2>
          <TagSimulation
            name="h2"
            color="#3894FF"
            size={22}
            bracketColor="#808080"
            isClose
          />
        </div>

        <div className="mt-8">
          <TagSimulation
            name="p"
            color="#3894FF"
            size={22}
            bracketColor="#808080"
          />
          <p
            className={`max-h-[350px] overflow-auto text-xl leading-relaxed text-[#CCCCCC] scrollbar-thin scrollbar-track-[#2B2B2B] scrollbar-thumb-[#333333]`}
          >
            <span className={`text-4xl`}>P</span>assionate about coding, I
            thrive as a Full Stack Engineer with a primary focus on Frontend
            Engineering, embracing the excitement of mastering new technologies
            and immersing myself in their intricacies. I find immense joy in
            replicating popular websites for honing my skills, leveraging my
            expertise to contribute to the community, and creating software
            solutions that effectively address real-world challenges.
          </p>
          <TagSimulation
            name="p"
            color="#3894FF"
            size={22}
            bracketColor="#808080"
            isClose
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeCopy;
