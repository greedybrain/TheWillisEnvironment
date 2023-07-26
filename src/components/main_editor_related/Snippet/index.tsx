import React from "react";

interface ISnippet {
  children: React.ReactNode;
}

const Snippet: React.FC<ISnippet> = ({ children }) => {
  return (
    <div className={`absolute h-[50px] scale-[.3] border`}>{children}</div>
  );
};

export default Snippet;
