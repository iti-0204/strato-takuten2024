import React from "react";
import Title from "../ui/Title";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// デフォルトのテーマ
import "@splidejs/react-splide/css";
// または、ほかのテーマ
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// あるいは、コアスタイルのみ
import "@splidejs/react-splide/css/core";
import { type } from "@testing-library/user-event/dist/type";

const Members = () => {
  return (
    <div>
      <Splide
        aria-label="members"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 5000, // 自動再生の間隔を3秒に設定
          type: "loop",
        }}
      >
        <SplideSlide>
          <div className="bg-black w-full h-60"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="bg-buttonGrad w-full h-60"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="bg-primary w-full h-60"></div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Members;
