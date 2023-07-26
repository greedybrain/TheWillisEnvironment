import React from "react";
import range from "~/lib/range";

interface ILineCount {
  totalLines: number;
}

const LineCount: React.FC<ILineCount> = ({ totalLines }) => {
  return (
    <ul
      className={`ml-6 flex min-w-[40px]  flex-grow flex-col overflow-y-scroll px-1 py-2`}
    >
      {range(1, totalLines).map((count) => (
        <li key={count} className={`text-right font-semibold text-[#989898bc]`}>
          {count}
        </li>
      ))}
    </ul>
  );
};

export default LineCount;
