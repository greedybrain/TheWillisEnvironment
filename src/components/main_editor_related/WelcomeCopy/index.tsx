import Avatar from "~/common/Avatar";
import MainNavItems from "../MainNavItems";
import React from "react";
import willis_avatar from "public/assets/willis-in-black-and-white.jpeg";

const WelcomeCopy = () => {
  return (
    <div className={`flex w-4/5 gap-20`}>
      <div className={`ml-10 py-4`}>
        <Avatar
          src={willis_avatar}
          alt="Willis Avatar"
          rounded
          width={200}
          height={200}
        />

        <h1 className={`mt-4 text-4xl text-[#CCCCCC]`}>Naya Willis</h1>
        <h1 className={`mt-2 text-2xl text-[#989898]`}>
          Full Stack / Frontend Developer
        </h1>

        <p
          className={`mt-8 max-h-[300px] overflow-auto text-xl leading-relaxed text-[#CCCCCC] scrollbar-thin scrollbar-track-[#2B2B2B] scrollbar-thumb-[#333333]`}
        >
          <span className={`text-4xl`}>P</span>assionate about coding, I thrive
          as a Full Stack Engineer with a primary focus on Frontend Engineering,
          embracing the excitement of mastering new technologies and immersing
          myself in their intricacies. I find immense joy in replicating popular
          websites for honing my skills, leveraging my expertise to contribute
          to the community, and creating software solutions that effectively
          address real-world challenges.
        </p>
      </div>
      <div className={`border-l border-l-[#3e3e3e] px-6`}>
        <h3 className={`mb-4 mt-12 text-2xl text-[#CCCCCC]`}>Start</h3>
        <MainNavItems />
      </div>
    </div>
  );
};

export default WelcomeCopy;
