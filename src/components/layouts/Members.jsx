import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { type } from "@testing-library/user-event/dist/type";

import { BiChevronRight } from "react-icons/bi";

const Members = () => {
  return (
    <div className="max-w-[]">
      <Splide
        hasTrack={false}
        aria-label="members"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 5000, // 自動再生の間隔を3秒に設定
          type: "loop",
          pagination: false,
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <div className="flex">
              <div className="text-center">
                <img src="/images/tyotohaya.png" alt="" />
                <p>ちょっと早朝やなのに。</p>
                <Button type={"btnM"} />
              </div>
              <img src="/images/tyotohaya.png" alt="" />
              <img src="/images/tyotohaya.png" alt="" />
              <img src="/images/tyotohaya.png" alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-buttonGrad w-full h-60"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-primary w-full h-60"></div>
          </SplideSlide>
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <img src="/images/arrowBack.png" alt="次へボタン" />
          </button>

          <button className="splide__arrow splide__arrow--next">
            <img src="/images/arrowNext.png" alt="次へボタン" />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default Members;
