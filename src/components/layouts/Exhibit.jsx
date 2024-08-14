import React from "react";
import Header from "./Header";
import Button from "../ui/Button";

const Exhibit = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-[85%] flex justify-between mx-auto font-jp tracking-jp font-bold ">
        <img
          src="/images/panel/chotohayaPanel.png"
          alt=""
          className="w-[64%]"
        />
        <div className="shadow-card p-[3%] w-[35%] h-fit">
          <div className="text-center">
            <img
              src="/images/members/tyotohaya.png"
              alt=""
              className="w-[55%] mx-auto "
            />
            <p className="mt-4 mb-[36px]">ちょっと早朝やなのに。</p>
          </div>
          <div className="flex justify-between">
            <Button type={"btnM"} title={"Works"} />
            <Button type={"btnM"} />
          </div>
          <div className="flex flex-wrap justify-between text-sm mt-[36px]">
            <div className="w-[45%] text-center">
              <img src="/images/members/misen.png" alt="" className="mb-4" />
              <p className="inline text-center">3M みせん</p>
            </div>
            <div className="w-[45%] text-center">
              <img src="/images/members/you.png" alt="" className="mb-4" />
              <p className="inline text-center">3M よう</p>
            </div>
            <div className="w-[45%] text-center mx-auto">
              <img src="/images/members/chihiro.png" alt="" className="mb-4" />
              <p className="inline text-center">3M ちひろ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibit;
