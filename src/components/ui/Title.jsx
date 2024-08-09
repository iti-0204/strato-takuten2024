import React from "react";

const Title = ({ type }) => {
  let titleAdd = "";
  let subtitleAdd = "";
  switch (type) {
    case "center":
      subtitleAdd = " left-1/2 translate-x-title";
      break;
    case "sp":
      break;
    default:
  }

  return (
    <h2
      className={
        "text-transparent text-10xl font-bold font-en tracking-en bg-gradient-to-b from-titleGrad1 via-titleGrad2/30 to-white inline-block bg-clip-text relative" +
        titleAdd
      }
    >
      Flow
      {/* <p className="absolute text-xl font-jp tracking-jp text-primary top-title left-1/2 translate-x-title">
      制作フロー
    </p> */}
      <p
        className={
          "absolute text-xl font-jp tracking-jp text-primary top-title left-0" +
          subtitleAdd
        }
      >
        制作フロー
      </p>
    </h2>
  );
};

export default Title;
