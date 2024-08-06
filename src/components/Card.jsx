import React from "react";

const Card = ({ team, title, caption }) => {
  return (
    <div className="w-card h-card p-6 shadow-card rounded-2xl">
      <img
        src="/images/background.png"
        alt=""
        className="w-full h-cardImg object-cover mb-4"
      />
      <p className="text-gray text-xl font-jp mb-1">{team}</p>
      <p className="text-primary text-3.5xl font-jp font-black mb-4">{title}</p>
      <p className="text-black text-base font-jp">{caption}</p>
    </div>
  );
};

export default Card;
