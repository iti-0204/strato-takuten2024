import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Button = ({ type, title, url }) => {
  const navigate = useNavigate();

  const onClickChotohaya = () => navigate("/chotoaya");
  const onClickNemu = () => navigate("/nemu");
  const onClickRisingSun = () => navigate("/rising-sun");
  const onClickKorikoriJonjon = () => navigate("/korikori-jonjon");

  let onClickButton;

  let addSpaceText = " ml-4";
  let changeGrad = " from-primary to-buttonGrad";

  if (title == "アプリモックアップ" || title == "webサイト") {
    addSpaceText = " ml-0 text-[10px]";
    if (title == "webサイト") {
      changeGrad = " from-[#FD388B] to-[#FCDAE8]";
    }
  }

  switch (type) {
    case "btnM":
      if (title == "Works") {
        onClickButton = () => navigate(url);
      } else {
        onClickButton = () => window.open(url);
      }
      return (
        <button
          onClick={onClickButton}
          className={
            "bg-gradient-to-br text-white font-bold font-en tracking-en rounded text-base h-8 w-38 flex justify-center items-center" +
            changeGrad
          }
        >
          <span className={"align-middle" + addSpaceText}>{title}</span>
          <BiChevronRight
            size={24}
            className={"inline-block text-2xl font-bold" + addSpaceText}
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

    // case "web":
    //   return (
    //     <button
    //       className={
    //         "bg-gradient-to-br from-primary to-buttonGrad text-white font-jp tracking-en rounded text-xxs h-8 w-38"
    //       }
    //     >
    //       <span className="align-middle ml-4">webサイト</span>
    //       <BiChevronRight className={"inline-block text-2xl font-bold  ml-4"} />
    //     </button>
    //   );

    // case "UI":
    //   return (
    //     <button
    //       className={
    //         "bg-gradient-to-br from-primary to-buttonGrad text-white font-jp tracking-en rounded text-xxs h-8 w-38"
    //       }
    //     >
    //       <span className="align-middle ml-4">アプリモックアップ</span>
    //       <BiChevronRight className={"inline-block text-2xl font-bold ml-3"} />
    //     </button>
    //   );

    default:
  }
};

export default Button;
