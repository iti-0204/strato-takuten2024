import React from "react";
import Button from "../ui/Button";

import { BiChevronDown } from "react-icons/bi";

const Fv = () => {
  return (
    <div className="bg-fv w-full h-screen bg-cover text-center tablet:pt-[40vh] z-10 tablet:block flex flex-col justify-center items-center">
      <img
        src="/images/logo.png"
        alt="Stratoロゴ"
        className="mx-auto mb-6 w-[230px]"
      />
      <p className="font-en tracking-en text-base text-primary mb-9 font-bold">
        UI/UX <br />
        Service Design
      </p>
      <Button type={"btnL"} />
      <p className="font-bold font-en tracking-en text-xl text-primary mt-20 mb-2">
        scroll
      </p>
      <BiChevronDown color={"#FC840D"} size={24} className="mx-auto" />
    </div>
  );
};

export default Fv;
