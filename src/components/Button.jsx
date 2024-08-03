import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Button = () => {
  return (
    <button className="bg-primary w-48 h-12 text-white text-xl font-en tracking-en rounded">
      Works
      <BiChevronRight className="inline-block ml-6 text-2xl font-bold align-text-top" />
    </button>
  );
};

export default Button;
