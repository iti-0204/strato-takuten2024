import React from "react";
import Title from "../ui/Title";
import FlowUI from "../ui/Flow";

const Flow = () => {
  return (
    <div className="pc:max-w-[1000px] mx-auto pt-[88px] pb-[59px] text-center">
      <Title type={"center"} />
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
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。<br/>ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしま<br/>した。"
          }
          img={"/images/flow/buresutoFlow.png"}
        />
        <FlowUI
          num={"02"}
          title={"共感"}
          caption={
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。<br/>ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしま<br/>した。"
          }
          img={"/images/flow/interviewFlow.png"}
        />
        <FlowUI
          num={"03"}
          title={"共感"}
          caption={
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。<br/>ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしま<br/>した。"
          }
          img={"/images/flow/perusonaFlow.png"}
        />
        <FlowUI
          num={"04"}
          title={"共感"}
          caption={
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。<br/>ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしま<br/>した。"
          }
          img={"/images/flow/sheetFlow.png"}
        />
        <FlowUI
          num={"05"}
          title={"共感"}
          caption={
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。<br/>ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしま<br/>した。"
          }
          img={"/images/flow/testFlow.png"}
        />
      </div>
    </div>
  );
};

export default Flow;
