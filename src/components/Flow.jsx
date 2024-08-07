import React from "react";

const Flow = () => {
  return (
    <div className="flex justify-between p-6">
      <div>
        <div>
          <p className="text-transparent text-base font-en tracking-en bg-gradient-to-b inline-block bg-clip-text relative step-gradation1">
            Step
          </p>
        </div>
        <div>
          <p className="text-transparent text-3.5xl font-en tracking-en bg-gradient-to-b inline-block bg-clip-text relative step-gradation2">
            01
          </p>
        </div>
        <h3 className="text-black font-jp tracking-jp font-black text-2xl mb-4">
          ブレインストーミング
        </h3>
        <p className="text-black font-jp tracking-jp font-normal">
          数名のチームで１つのテーマに対し、お互いに意見を出し合い
          <br />
          たくさんのアイデアを生産し、問題解決に結びつける方法
        </p>
      </div>
      <img
        src="/images/background.png"
        alt=""
        className="w-flowImg object-cover"
      />
    </div>
  );
};

export default Flow;
