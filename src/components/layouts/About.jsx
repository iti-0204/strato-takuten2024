import React from "react";
import Title from "../ui/Title";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isSpTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isPC = useMediaQuery({ query: "(min-width: 1000px)" });

  return (
    <div className="bg-fv w-full tablet:h-[90vh] h-[70vh] bg-cover text-center font-jp tracking-jp text-black pc:relative">
      <div className="h-full flex flex-col justify-center">
        <Title type={"center"} />
        <div className="tablet:mt-20 mt-16 max-w-[270px] mx-auto tablet:max-w-full tablet:mx-0">
          <p className="font-bold tablet:text-[32px] text-xl  mb-6">
            プロセスを層にしてサービスを作る卓
          </p>
          <p className="tablet:mb-[140px]">
            様々な段階を踏まえながら、みんなのアイデアを出し合い
            <br />
            UI/UXデザインプロセスを楽しみながらサービスを考える卓です。
            <br />
            最終的な成果物はアプリケーションデザイン/webデザインとなります。
          </p>
        </div>
      </div>
      <img
        src="/images/about/perusona.png"
        alt="ペルソナ画像"
        className="hidden pc:block absolute top-[-35%] right-0 bottom-0 m-auto left-[-75%] max-w-40 h-auto w-[12%] rounded-2xl shadow-card aspect-[160/144]"
      />
      <img
        src="/images/about/buresuto.png"
        alt="ブレスト画像"
        className="hidden pc:block absolute top-[-10%] right-0 bottom-0 m-auto left-[-65%] max-w-24 h-auto w-[6%] rounded-2xl shadow-card aspect-[1/1]"
      />
      <img
        src="/images/about/test.png"
        alt="ユーザーテスト画像"
        className="hidden pc:block absolute top-[55%] right-0 bottom-0 m-auto left-[-80%] max-w-24 h-auto w-[6%] rounded-2xl shadow-card aspect-[1/1]"
      />
      <img
        src="/images/about/interview.png"
        alt="インタビューシート画像"
        className="hidden pc:block absolute top-[-20%] right-0 bottom-0 m-auto left-[60%] max-w-24 h-auto w-[6%] rounded-2xl shadow-card aspect-[1/1]"
      />
      <img
        src="/images/about/map.png"
        alt="ジャーニーマップ画像"
        className="hidden pc:block absolute top-[35%] right-0 bottom-0 m-auto left-[70%] max-w-40 h-auto w-[15%] rounded-2xl shadow-card aspect-[160/144]"
      />
      <img
        src="/images/about/presentation.png"
        alt="プレゼン画像"
        className="hidden pc:block absolute top-[60%] right-0 bottom-0 m-auto left-[60%] max-w-24 h-auto w-[6%] rounded-2xl shadow-card aspect-[1/1]"
      />
    </div>
  );
};

export default About;
