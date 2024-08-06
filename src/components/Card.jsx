import React from "react";

const Card = () => {
  return (
    <div className="w-card h-card p-6 shadow-card rounded-2xl">
      <img
        src="/images/background.png"
        alt=""
        className="w-full h-cardImg object-cover mb-4"
      />
      <p className="text-gray text-xl font-jp mb-1">Team 4Mチーム</p>
      <p className="text-primary text-3.5xl font-jp font-black mb-4">サービスタイトル</p>
      <p className="text-black text-base font-jp">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        esse perferendis molestiae harum atque non modi optio fugiat deleniti
        tempore repudiandae voluptas vitae error veritatis obcaecati nihil,
        saepe beatae? Itaque.
      </p>
    </div>
  );
};

export default Card;
