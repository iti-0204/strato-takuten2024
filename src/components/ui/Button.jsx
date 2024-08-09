import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Button = ({ type }) => {
  switch (type) {
    case "btnM":
      return (
        <button
          className={
            "bg-gradient-to-br from-primary to-buttonGrad text-white font-bold font-en tracking-en rounded text-base h-8 w-38"
          }
        >
          <span className="align-middle ml-4">Works</span>
          <BiChevronRight
            size={24}
            className={"inline-block text-2xl font-bold ml-4"}
          />
        </button>
      );

    case "btnL":
      return (
        <button
          className={
            "bg-gradient-to-br from-primary to-buttonGrad text-white font-bold font-en tracking-en text-xl rounded h-12 w-48"
          }
        >
          <span className="align-middle ml-6">Works</span>
          <BiChevronRight
            size={24}
            className={"inline-block text-2xl font-bold ml-6"}
          />
        </button>
      );

    case "web":
      return (
        <button
          className={
            "bg-gradient-to-br from-primary to-buttonGrad text-white font-jp tracking-en rounded text-xxs h-8 w-38"
          }
        >
          <span className="align-middle ml-4">webサイト</span>
          <BiChevronRight className={"inline-block text-2xl font-bold  ml-4"} />
        </button>
      );

    case "UI":
      return (
        <button
          className={
            "bg-gradient-to-br from-primary to-buttonGrad text-white font-jp tracking-en rounded text-xxs h-8 w-38"
          }
        >
          <span className="align-middle ml-4">アプリモックアップ</span>
          <BiChevronRight className={"inline-block text-2xl font-bold ml-3"} />
        </button>
      );

    default:
  }
};

export default Button;
