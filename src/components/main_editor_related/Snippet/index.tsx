import Image from "next/image";
import React from "react";
import home_page_snippet from "public/assets/home-page-snippet.png";

const Snippet = () => {
  return (
    <div className={`flex min-w-[115px] max-w-[115px] justify-center`}>
      <div className={`relative h-[100px] w-full `}>
        <div className={`absolute z-20 h-full w-full hover:bg-[#2d2d2d8d]`} />
        <Image
          className={`px-1 pt-2`}
          src={home_page_snippet}
          alt="snippet"
          fill
        />
      </div>
    </div>
  );
};

export default Snippet;
