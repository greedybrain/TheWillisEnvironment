import React from "react";
import WindowControlButton from "../WindowControlButton";
import windowControlButtons from "data/windowControlButtons";

const WindowControlButtons = () => {
  return (
    <ul className={`ml-3 flex`}>
      {windowControlButtons.map((wcb) => (
        <WindowControlButton key={wcb.id} {...wcb} />
      ))}
    </ul>
  );
};

export default WindowControlButtons;
