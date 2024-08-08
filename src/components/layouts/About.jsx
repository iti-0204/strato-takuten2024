import React from "react";
import Title from "../ui/Title";

const About = () => {
  return (
    <div className="bg-fv w-full h-[90vh] bg-cover text-center font-jp tracking-jp text-black">
      <div className="pt-[88px]">
        <Title type={"center"} />
        <p className="font-bold text-[32px] mt-20 mb-6">
          プロセスを層にしてサービスを作る卓
        </p>
        <p>
          様々な段階を踏まえながら、みんなのアイデアを出し合い
          <br />
          UI/UXデザインプロセスを楽しみながらサービスを考える卓です。
          <br />
          最終的な成果物はアプリケーションデザイン/webデザインとなります。
        </p>
      </div>
    </div>
  );
};

export default About;
