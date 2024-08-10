import React from "react";
import Title from "../ui/Title";

const About = () => {
  return (
    <div className="bg-fv w-full h-[90vh] bg-cover text-center font-jp tracking-jp text-black relative">
      <div className="h-full flex flex-col justify-center">
        <Title type={"center"} />
        <p className="font-bold text-[32px] mt-20 mb-6">
          プロセスを層にしてサービスを作る卓
        </p>
        <p className="mb-[140px]">
          様々な段階を踏まえながら、みんなのアイデアを出し合い
          <br />
          UI/UXデザインプロセスを楽しみながらサービスを考える卓です。
          <br />
          最終的な成果物はアプリケーションデザイン/webデザインとなります。
        </p>
      </div>
      <img
        src="/images/perusona.png"
        alt="ペルソナ画像"
        className="absolute top-[-35%] right-0 bottom-0 m-auto left-[-75%] max-w-40 h-auto w-[12%] rounded-2xl shadow-card aspect-[160/144]"
      />
      <img
        src="/images/buresuto.png"
        alt="ブレスト画像"
        className="absolute top-[-10%] right-0 bottom-0 m-auto left-[-65%] max-w-24 h-auto w-[12%] rounded-2xl shadow-card aspect-[1/1]"
      />
    </div>
  );
};

export default About;
