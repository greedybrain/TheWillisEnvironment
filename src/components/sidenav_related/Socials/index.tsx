import React from "react";
import Social from "../Social";
import socials from "data/socials";

const Socials = () => {
  return (
    <ul>
      {socials.map((social) => (
        <Social key={social.id} {...social} />
      ))}
    </ul>
  );
};

export default Socials;
