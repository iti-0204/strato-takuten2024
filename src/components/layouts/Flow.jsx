import React from "react";
import Title from "../ui/Title";
import FlowUI from "../ui/Flow";

const Flow = () => {
  return (
    <div className="pc:max-w-[1000px] mx-auto pt-[88px] pb-[59px] text-center">
      <Title type={"center"} title={"Flow"} subtitle={"制作フロー"} />
      <p className="font-jp tracking-jp mt-[36px] mb-[68px] max-w-[270px] mx-auto tablet:max-w-[700px] pc:max-w-full pc:mx-0">
        ユーザーのニーズを理解し、効果的なデザインを生み出すために以下のプロセスを実行しました。
        <br />
        それぞれのステップでは、ユーザーの視点に立つことを心がけ、必要に応じてプロセスを振り返り、再検証しながら進めました。
      </p>
      <div className="shadow-card rounded-2xl max-w-[335px] tablet:max-w-[700px] flex flex-wrap mx-auto pc:block pc:mx-0 pc:max-w-full">
        <FlowUI
          num={"01"}
          title={"共感"}
          caption={
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしました。"
          }
          img={"/images/flow/buresutoFlow.png"}
        />
        <FlowUI
          num={"02"}
          title={"問題提議"}
          caption={
            "ユーザーインタビューと調査を行い、具体的な問題を洗い出しました。解決すべき課題を明確化するために、言葉だけでなく言葉から考えるインサイトも探りました。"
          }
          img={"/images/flow/interviewFlow.png"}
        />
        <FlowUI
          num={"03"}
          title={"創造"}
          caption={
            "収集した情報をもとに、ペルソナに合わせたデザインとアプローチを考案しました。多様な視点を取り入れ、ユーザーの課題に対する最適な解決策を模索しました。"
          }
          img={"/images/flow/perusonaFlow.png"}
        />
        <FlowUI
          num={"04"}
          title={"プロトタイプ"}
          caption={
            "アイデアを形にしてプロトタイプを作成し、情報を視覚化しました。プロトタイプのフィードバックを元に、改善が必要な点を考えました。"
          }
          img={"/images/flow/sheetFlow.png"}
        />
        <FlowUI
          num={"05"}
          title={"テスト"}
          caption={
            "ユーザーテストし、実際の使用感を評価しました。テスト結果をもとに、デザインを改良し、見直すことで、より良いユーザー体験を提供することを目指しました。"
          }
          img={"/images/flow/testFlow.png"}
        />
      </div>
    </div>
  );
};

export default Flow;
