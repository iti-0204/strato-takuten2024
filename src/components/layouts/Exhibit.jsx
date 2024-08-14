import React from "react";
import Header from "./Header";
import Button from "../ui/Button";

import { BiChevronLeft } from "react-icons/bi";

const Exhibit = ({ img, workNum, names, title, url }) => {
  console.log(url);
  return (
    <div>
      <Header></Header>
      <div className="w-[85%] mx-auto font-jp tracking-jp">
        <div className="flex items-center text-gray mb-6">
          <BiChevronLeft />
          <p>一覧に戻る</p>
        </div>
        <div className="flex items-center mb-6">
          {/* <img src="/images/teamLogo/seemee.png" alt="" className="w-[15%]" /> */}
          <p className="text-3xl pb-[1%]">{title}</p>
        </div>
      </div>
      <div className="w-[85%] flex justify-between mx-auto font-jp tracking-jp font-bold ">
        <img src={img.panel} alt="" className="w-[64%]" />
        <div className="shadow-card p-[3%] w-[35%] h-fit">
          <div className="text-center">
            <img src={img.team} alt="" className="w-[55%] mx-auto " />
            <p className="mt-4 mb-[36px]">{names.team}</p>
          </div>
          <div className="flex justify-center gap-[10%] ">
            {workNum == 2 && (
              <Button type={"btnM"} title={"webサイト"} url={url.web} />
            )}
            <Button
              type={"btnM"}
              title={"アプリモックアップ"}
              url={url.figma}
            />
          </div>
          <div className="flex flex-wrap justify-between text-sm mt-[36px]">
            <div className="w-[45%] text-center">
              <img src={img.member1} alt="" className="mb-4" />
              <p className="inline text-center">{names.member1}</p>
            </div>
            <div className="w-[45%] text-center">
              <img src={img.member2} alt="" className="mb-4" />
              <p className="inline text-center">{names.member2}</p>
            </div>
            <div className="w-[45%] text-center mx-auto">
              <img src={img.member3} alt="" className="mb-4" />
              <p className="inline text-center">{names.member3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibit;
