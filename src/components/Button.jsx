import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Button = ({ fontSize, margin, height, width }) => {
  console.log(fontSize);
  return (
    <button
      className={
        "bg-gradient-to-br from-primary to-buttonGrad text-white font-en tracking-en rounded " +
        fontSize +
        height +
        width
      }
    >
      Works
      <BiChevronRight
        className={"inline-block text-2xl font-bold align-text-top " + margin}
      />
    </button>
  );
};

export default Button;
