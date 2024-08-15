import React from "react";
import Header from "./Header";
import Button from "../ui/Button";
import Footer from "./Footer";

import { BiChevronLeft } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";

const Exhibit = ({ img, workNum, names, title, url }) => {
  return (
    <div>
      <Header></Header>

      <div className="w-[85%] mx-auto font-jp tracking-jp mt-[36px]">
        <div className="flex items-center text-gray mb-6">
          <BiChevronLeft />
          <HashLink to="/#works">一覧に戻る</HashLink>
        </div>
        <div className="mb-6">
          {/* <img src="/images/teamLogo/seemee.png" alt="" className="w-[15%]" /> */}
          <p className="text-3xl pb-[1%] text-center pc:text-left">{title}</p>
        </div>
      </div>

      <div className="w-[85%] flex justify-between flex-col-reverse items-center pc:items-start pc:flex-row mx-auto font-jp tracking-jp font-bold mb-[36px]">
        <img src={img.panel} alt="" className="pc:w-[64%]" />
        <div className="pc:shadow-card p-[3%] pc:w-[35%] h-fit pc:mb-0 mb-10">
          <div className="text-center">
            <img src={img.team} alt="" className="w-[55%] mx-auto " />
            <p className="mt-4 mb-[36px]">{names.team}</p>
          </div>
          <div className="flex justify-center gap-[10%] flex-wrap">
            {workNum === 2 && (
              <div className="mb-5">
                <Button type={"btnM"} title={"webサイト"} url={url.web} />
              </div>
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
      <div className="bg-[#FFF1E4]">
        <Footer />
      </div>
    </div>
  );
};

export default Exhibit;
