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
    <div className="text-center max-w-[1000px] mx-auto tablet:pt-16 tablet:pb-[163px] pt-[42px] pb-16">
      <Title type={"center"} title={"Members"} subtitle={"メンバー一覧"} />

      {/* tablet */}
      <Splide
        hasTrack={false}
        aria-label="members"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 5000, // 自動再生の間隔を3秒に設定
          type: "loop",
          pagination: false,
        }}
        className="w-full hidden pc:block"
      >
        <SplideTrack>
          <SplideSlide>
            <div className="flex justify-center gap-[36px] items-center font-jp tracking-jp font-bold">
              <div className="text-center">
                <img
                  src="/images/members/tyotohaya.png"
                  alt=""
                  className="w-[240px] h-[240px]"
                />
                <p className="my-4">ちょっと早朝やなのに。</p>
                <Button type={"btnM"} title={"Works"} url={"/chotohaya"} />
              </div>
              <div>
                <img
                  src="/images/members/misen.png"
                  alt=""
                  className="h-40 w-40"
                />
                <p className="mt-3">3M みせん</p>
              </div>
              <div>
                <img
                  src="/images/members/you.png"
                  alt=""
                  className="h-40 w-40"
                />
                <p className="mt-3">3M よう</p>
              </div>
              <div>
                <img
                  src="/images/members/chihiro.png"
                  alt=""
                  className="h-40 w-40"
                />
                <p className="mt-3">3M ちひろ</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-center gap-[36px] items-center font-jp tracking-jp font-bold">
              <div className="text-center">
                <img
                  src="/images/members/nemu.png"
                  alt=""
                  className="w-[240px] h-[240px]"
                />
                <p className="my-4">音む</p>
                <Button type={"btnM"} title={"Works"} url={"/nemu"} />
              </div>
              <div>
                <img
                  src="/images/members/hamu.png"
                  alt=""
                  className="h-40 w-40"
                />
                <p className="mt-3">3M はむ</p>
              </div>
              <div>
                <img
                  src="/images/members/moneko.png"
                  alt=""
                  className="h-40 w-40"
                />
                <p className="mt-3">2N もねこ</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-center gap-[36px] items-center font-jp tracking-jp font-bold">
              <div className="text-center">
                <img
                  src="/images/members/risingsun.png"
                  alt=""
                  className="w-[240px] h-[240px]"
                />
                <p className="my-4">
                  ライジングサン
                  <br />
                  〜恋の予感〜
                </p>
                <Button type={"btnM"} title={"Works"} url={"/rising-sun"} />
              </div>
              <div>
                <img
                  src="/images/members/sana.png"
                  alt=""
                  className="h-40 w-40"
                />
                <p className="mt-3">2N さな</p>
              </div>
              <div>
                <img
                  src="/images/members/log.png"
                  alt=""
                  className="h-40 w-40"
                />
                <p className="mt-3">2M log</p>
              </div>
              <div>
                <img
                  src="/images/members/mafu.png"
                  alt=""
                  className="h-40 w-40"
                />
                <p className="mt-3">2M まふ</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-center gap-[36px] items-center font-jp tracking-jp font-bold">
              <div className="text-center">
                <img
                  src="/images/members/korikorijonjon.png"
                  alt=""
                  className="w-[240px] h-[240px]"
                />
                <p className="my-4">コリコリジョンジョン</p>
                <Button
                  type={"btnM"}
                  title={"Works"}
                  url={"/korikori-jonjon"}
                />
              </div>
              <div>
                <img
                  src="/images/members/eitarou.png"
                  alt=""
                  className="h-40 w-40"
                />
                <p className="mt-3">1M 栄太郎</p>
              </div>
              <div>
                <img
                  src="/images/members/sasaking.png"
                  alt=""
                  className="h-40 w-40"
                />
                <p className="mt-3">1M ささKING</p>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
        {/* ↓↓arrowSetting */}
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <img src="/images/arrowBack.png" alt="次へボタン" className="w-5" />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <img src="/images/arrowNext.png" alt="次へボタン" className="w-5" />
          </button>
        </div>
      </Splide>

      {/* sp */}
      <div className="pc:hidden">
        <div className="text-center font-jp tracking-jp font-bold text-xl mb-12">
          <img
            src="/images/members/tyotohaya.png"
            alt=""
            className="w-[240px] h-[240px] mx-auto "
          />
          <p className="my-4">ちょっと早朝やなのに。</p>
          <Button type={"btnM"} title={"Works"} url={"/chotohaya"} />
        </div>
        <div className="text-center font-jp tracking-jp font-bold text-xl mb-12">
          <img
            src="/images/members/nemu.png"
            alt=""
            className="w-[240px] h-[240px] mx-auto "
          />
          <p className="my-4">音む</p>
          <Button type={"btnM"} title={"Works"} url={"/nemu"} />
        </div>
        <div className="text-center font-jp tracking-jp font-bold text-xl mb-12">
          <img
            src="/images/members/risingsun.png"
            alt=""
            className="w-[240px] h-[240px] mx-auto "
          />
          <p className="my-4">
            ライジングサン
            <br />
            〜恋の予感〜
          </p>
          <Button type={"btnM"} title={"Works"} url={"/rising-sun"} />
        </div>
        <div className="text-center font-jp tracking-jp font-bold text-xl mb-12">
          <img
            src="/images/members/korikorijonjon.png"
            alt=""
            className="w-[240px] h-[240px] mx-auto "
          />
          <p className="my-4">コリコリジョンジョン</p>
          <Button type={"btnM"} title={"Works"} url={"/korikori-jonjon"} />
        </div>
      </div>
    </div>
  );
};

export default Members;
