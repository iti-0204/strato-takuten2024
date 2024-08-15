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
          team={"ちょっと早朝やなのに。"}
          title={"seemee"}
          caption={
            "普段の悩みを気軽に相談！人生の先輩から返事が返ってくる！あなたも誰かの背中を押せる！"
          }
          img={"/images/teamLogo/seemee.png"}
          url={"/chotohaya"}
        />
        <Card
          team={"音む"}
          title={"さぼーど"}
          caption={
            "「明日は晩ごはんいるの？バイトがあるんだっけ？」毎日毎日、ちょっとめんどくさいこのやりとり…さぼーどで、さぼってみませんか？"
          }
          img={"/images/teamLogo/subBOARD.png"}
          url={"/nemu"}
        />
        <Card
          team={"ライジングサン〜恋の予感〜"}
          title={"Solop"}
          caption={
            "solo なlife を help するあなただけの相棒がひとり暮らしを助けるお役立ちアプリ"
          }
          img={"/images/teamLogo/solop.png"}
          url={"/rising-sun"}
        />
        <Card
          team={"コリコリジョンジョン"}
          title={"Clocide"}
          caption={
            "ClocideはAIによる簡単な診断、自分自身の客観視を行うことによって、服選びに対して苦手意識を持っている方々に服装の提案を行うアプリです。"
          }
          img={"/images/teamLogo/Clocide.png"}
          url={"/korikori-jonjon"}
        />
      </div>
    </div>
  );
};

export default Works;
