import React from "react";
import { BiChevronUp } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="tablet:mx-auto ml-[42px] flex tablet:flex-row flex-col tablet:justify-between justify-center h-[35vh] items-center tablet:max-w-[1000px] font-en tracking-en font-normal max-w-[50%]">
      <div></div>
      <div className="text-center">
        <div className=" tablet:flex gap-6 mb-6">
          <img src="/images/logo.png" alt="" className="mb-6 tablet:mb-0" />
          <p className="text-left">
            UI/UX <br />
            Service Design
          </p>
        </div>
        <p className="text-[10px] text-left tablet:text-center">
          © Strato All Rights Reserved.
        </p>
      </div>
      <div className="text-primary tablet:block hidden">
        <a href="#top">
          <BiChevronUp color={"#FC840D"} className="mx-auto" size={24} />
          <p className="mt-[9px] font-bold">TOP</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
