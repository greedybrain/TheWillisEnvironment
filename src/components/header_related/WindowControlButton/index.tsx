import type { IWindowControlButton } from "types";
import React from "react";

const WindowControlButton: React.FC<IWindowControlButton> = ({ color }) => {
  return (
    <li
      className={`ml-3 h-[12px] w-[12px] rounded-full`}
      style={{
        backgroundColor: color,
      }}
    />
  );
};

export default WindowControlButton;
