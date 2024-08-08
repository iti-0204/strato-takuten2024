import React from "react";
import Title from "../ui/Title";
import FlowUI from "../ui/Flow";

const Flow = () => {
  return (
    <div className="max-w-[1000px] mx-auto pt-[88px] pb-[59px] text-center">
      <Title type={"center"} />
      <p className="font-jp tracking-jp mt-[36px] mb-[68px]">
        ユーザーのニーズを理解し、効果的なデザインを生み出すために以下のプロセスを実行しました。それぞれのステップでは、ユーザーの視点に立つことを心がけ、必要に応じてプロセスを振り返り、再検証しながら進めました。
      </p>
      <div className="shadow-card rounded-2xl">
        <FlowUI
          num={"01"}
          title={"共感"}
          caption={
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。<br/>ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしま<br/>した。"
          }
          img={"/images/background.png"}
        />
        <FlowUI
          num={"02"}
          title={"共感"}
          caption={
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。<br/>ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしま<br/>した。"
          }
          img={"/images/background.png"}
        />
        <FlowUI
          num={"03"}
          title={"共感"}
          caption={
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。<br/>ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしま<br/>した。"
          }
          img={"/images/background.png"}
        />
        <FlowUI
          num={"04"}
          title={"共感"}
          caption={
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。<br/>ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしま<br/>した。"
          }
          img={"/images/background.png"}
        />
        <FlowUI
          num={"05"}
          title={"共感"}
          caption={
            "ユーザーリサーチを通じて、彼らのニーズや困りごとを深く理解することに努めました。<br/>ブレインストーミングを重ね、多様なアイデアを出し合い、根本的な課題を明らかにしま<br/>した。"
          }
          img={"/images/background.png"}
        />
      </div>
    </div>
  );
};

export default Flow;
