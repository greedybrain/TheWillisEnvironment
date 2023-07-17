import React from "react";
import range from "~/lib/range";

const LineCount = () => {
  return (
    <ul
      className={`ml-6 flex max-h-[800px] min-w-[40px] flex-col overflow-hidden px-1 py-2`}
    >
      {range(1, 100).map((count) => (
        <li
          key={count}
          className={`text-right text-lg font-semibold text-[#989898bc]`}
        >
          {count}
        </li>
      ))}
    </ul>
  );
};

export default LineCount;
