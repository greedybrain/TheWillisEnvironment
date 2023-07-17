import type { IAvatar } from "types";
import Image from "next/image";
import React from "react";

const Avatar: React.FC<IAvatar> = ({ rounded, src, alt, width, height }) => {
  return (
    <div
      className={`relative`}
      style={{
        width,
        height,
      }}
    >
      <Image
        className={`${rounded ? "rounded-full" : ""}`}
        src={src}
        alt={alt}
        fill
      />
    </div>
  );
};

export default Avatar;
