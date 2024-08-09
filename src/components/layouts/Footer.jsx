import React from "react";
import { BiChevronUp } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="mx-auto flex justify-between h-[35vh] items-center max-w-[1000px] font-en tracking-en font-normal">
      <div></div>
      <div className="text-center">
        <div className="flex gap-6 mb-6">
          <img src="/images/logo.png" alt="" />
          <p className="text-left">
            UI/UX <br />
            Service Design
          </p>
        </div>
        <p className="text-[10px]">© Strato All Rights Reserved.</p>
      </div>
      <div className="text-primary">
        <BiChevronUp color={"#FC840D"} className="mx-auto" size={24}/>
        <p className="mt-[9px] font-bold">TOP</p>
      </div>
    </div>
  );
};

export default Footer;
