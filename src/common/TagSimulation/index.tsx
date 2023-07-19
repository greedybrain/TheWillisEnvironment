import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import React from "react";

interface ITagSimulation {
  name: string;
  bracketColor: string;
  color: string;
  size: number;
  isClose?: boolean;
}

const TagSimulation: React.FC<ITagSimulation> = ({
  name,
  bracketColor,
  color,
  size,
  isClose,
}) => {
  return (
    <div className={`flex items-center`}>
      <VscChevronLeft
        size={size}
        style={{
          fill: bracketColor,
        }}
      />

      <span
        style={{
          color,
          fontSize: size,
          marginLeft: -5,
        }}
      >
        {isClose && (
          <span
            style={{
              fontSize: size,
              color: bracketColor,
              marginRight: 2,
            }}
          >
            /
          </span>
        )}
        {name}
      </span>
      <VscChevronRight
        size={size}
        style={{
          marginLeft: -7,
          fill: bracketColor,
        }}
      />
    </div>
  );
};

export default TagSimulation;
