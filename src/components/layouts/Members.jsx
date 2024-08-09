import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

const Members = () => {
  return (
    <div className="text-center max-w-[1000px] mx-auto">
      <Title type={"center"} />
      <Splide
        hasTrack={false}
        aria-label="members"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 5000, // 自動再生の間隔を3秒に設定
          type: "loop",
          pagination: false,
        }}
        className="w-full"
      >
        <SplideTrack>
          <SplideSlide>
            <div className="flex justify-center gap-[36px] items-center font-jp tracking-jp font-bold">
              <div className="text-center">
                <img
                  src="/images/tyotohaya.png"
                  alt=""
                  className="w-[240px] h-[240px]"
                />
                <p className="my-4">ちょっと早朝やなのに。</p>
                <Button type={"btnM"} />
              </div>
              <div>
                <img src="/images/tyotohaya.png" alt="" className="h-40 w-40" />
                <p className="mt-3">2M log</p>
              </div>
              <div>
                <img src="/images/tyotohaya.png" alt="" className="h-40 w-40" />
                <p className="mt-3">2M log</p>
              </div>
              <div>
                <img src="/images/tyotohaya.png" alt="" className="h-40 w-40" />
                <p className="mt-3">2M log</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-center gap-[36px] items-center font-jp tracking-jp font-bold">
              <div className="text-center">
                <img
                  src="/images/nemu.png"
                  alt=""
                  className="w-[240px] h-[240px]"
                />
                <p className="my-4">ちょっと早朝やなのに。</p>
                <Button type={"btnM"} />
              </div>
              <div>
                <img src="/images/nemu.png" alt="" className="h-40 w-40" />
                <p className="mt-3">2M log</p>
              </div>
              <div>
                <img src="/images/nemu.png" alt="" className="h-40 w-40" />
                <p className="mt-3">2M log</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-center gap-[36px] items-center font-jp tracking-jp font-bold">
              <div className="text-center">
                <img
                  src="/images/tyotohaya.png"
                  alt=""
                  className="w-[240px] h-[240px]"
                />
                <p className="my-4">ちょっと早朝やなのに。</p>
                <Button type={"btnM"} />
              </div>
              <div>
                <img src="/images/tyotohaya.png" alt="" className="h-40 w-40" />
                <p className="mt-3">2M log</p>
              </div>
              <div>
                <img src="/images/tyotohaya.png" alt="" className="h-40 w-40" />
                <p className="mt-3">2M log</p>
              </div>
              <div>
                <img src="/images/tyotohaya.png" alt="" className="h-40 w-40" />
                <p className="mt-3">2M log</p>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
        {/* ↓↓arrowSetting */}
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
