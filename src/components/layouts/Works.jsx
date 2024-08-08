import React from "react";
import Title from "../ui/Title";
import Card from "../ui/Card";

const Works = () => {
  return (
    <div className="max-w-[1000px] mx-auto pt-20 pb-[88px]">
      <Title type={"left"} />
      <p className="font-jp tracking-jp text-black mt-4 mb-[36px]">
        最終的な成果物はアプリケーションデザイン/webデザインとなります。
      </p>
      <div className="flex flex-wrap gap-12">
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
