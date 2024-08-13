import React from "react";
import Header from "./Header";
import Button from "../ui/Button";

const Exhibit = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-[85%] flex justify-between mx-auto font-jp tracking-jp font-bold">
        <img
          src="/images/panel/chotohayaPanel.png"
          alt=""
          className="w-[64%]"
        />
        <div className="shadow-card px-[50px] w-[35%] h-fit">
          <div className="text-center">
            <img
              src="/images/members/tyotohaya.png"
              alt=""
              className="w-[240px] mx-auto"
            />
            <p>ちょっと早朝やなのに。</p>
          </div>
          <div className="flex justify-between">
            <Button type={"btnM"} />
            <Button type={"btnM"} />
          </div>
          <div className="flex flex-wrap justify-between">
            <img src="/images/members/misen.png" alt="" className="w-40" />
            <img src="/images/members/you.png" alt="" className="w-40" />
            <img src="/images/members/chihiro.png" alt="" className="w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibit;
