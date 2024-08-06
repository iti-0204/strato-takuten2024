import React from "react";

const Card = () => {
  return (
    <div className="w-card h-card p-6 shadow-card rounded-2xl">
      <img
        src="/images/background.png"
        alt=""
        className="w-full h-cardImg object-cover"
      />
    </div>
  );
};

export default Card;
