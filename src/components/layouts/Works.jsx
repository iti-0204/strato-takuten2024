import React from "react";
import Title from "../ui/Title";
import Card from "../ui/Card";

const Works = () => {
  return (
    <div className="max-w-[1000px] mx-auto pt-20 pb-[88px] text-center tablet:text-left">
      <Title type={"left"} />
      <div className="max-w-[270px] mx-auto tablet:max-w-full tablet:mx-0">
        <p className="font-jp tracking-jp text-black tablet:mt-4 my-[49px] tablet:mb-[36px]">
          最終的な成果物はアプリケーションデザイン/webデザインとなります。
        </p>
      </div>
      <div className="flex tablet:flex-wrap tablet:gap-12 flex-col items-center gap-[36px]">
        <Card
          team={"4Mチーム"}
          title={"サービスタイトル"}
          caption={
            "大切なプレゼントもう迷わない。〇〇の◯◯のサービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要"
          }
        />
        <Card
          team={"4Mチーム"}
          title={"サービスタイトル"}
          caption={
            "大切なプレゼントもう迷わない。〇〇の◯◯のサービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要"
          }
        />
        <Card
          team={"4Mチーム"}
          title={"サービスタイトル"}
          caption={
            "大切なプレゼントもう迷わない。〇〇の◯◯のサービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要"
          }
        />
        <Card
          team={"4Mチーム"}
          title={"サービスタイトル"}
          caption={
            "大切なプレゼントもう迷わない。〇〇の◯◯のサービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要"
          }
        />
      </div>
    </div>
  );
};

export default Works;
