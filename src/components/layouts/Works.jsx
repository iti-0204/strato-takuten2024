import React from "react";
import Title from "../ui/Title";
import Card from "../ui/Card";

const Works = () => {
  return (
    <div className="max-w-[1000px] mx-auto tablet:pt-20 pt-6 tablet:pb-[88px] pb-[38px] text-center pc:text-left">
      <Title type={"left"} title={"Works"} subtitle={"制作作品一覧"} />
      <div className="max-w-[270px] mx-auto tablet:max-w-full tablet:mx-0">
        <p className="font-jp tracking-jp text-black tablet:mt-4 my-[49px] tablet:mb-[36px]">
          最終的な成果物はアプリケーションデザイン/webデザインとなります。
        </p>
      </div>
      <div className="flex tablet:flex-wrap tablet:gap-12 pc:flex-row flex-col items-center gap-[36px]">
        <Card
          team={"4Mチーム"}
          title={"サービスタイトル"}
          caption={
            "大切なプレゼントもう迷わない。〇〇の◯◯のサービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要"
          }
          img={"/images/teamLogo/seemee.png"}
          url={"/chotohaya"}
        />
        <Card
          team={"4Mチーム"}
          title={"サービスタイトル"}
          caption={
            "大切なプレゼントもう迷わない。〇〇の◯◯のサービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要"
          }
          img={"/images/teamLogo/subBOARD.png"}
          url={"/nemu"}
        />
        <Card
          team={"4Mチーム"}
          title={"サービスタイトル"}
          caption={
            "大切なプレゼントもう迷わない。〇〇の◯◯のサービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要"
          }
          img={"/images/teamLogo/solop.png"}
          url={"/rising-sun"}
        />
        <Card
          team={"4Mチーム"}
          title={"サービスタイトル"}
          caption={
            "大切なプレゼントもう迷わない。〇〇の◯◯のサービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要"
          }
          img={"/images/teamLogo/Clocide.png"}
          url={"/korikori-jonjon"}
        />
      </div>
    </div>
  );
};

export default Works;
