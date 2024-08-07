import React from "react";

const bgColors = {
  "01": "bg-white",
  "02": "bg-flowBg2",
  "03": "bg-flowBg3",
  "04": "bg-flowBg4",
  "05": "bg-flowBg5",
};

const Flow = ({ num, title, caption, img }) => {
  console.log(bgColors[num]);

  const caption2 = caption.split("<br/>").map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    );
  });

  return (
    <div className={"flex justify-between p-6 " + bgColors[num]}>
      <div>
        <div>
          <p className="text-transparent text-base font-en tracking-en bg-gradient-to-b inline-block bg-clip-text relative step-gradation1">
            Step
          </p>
        </div>
        <div>
          <p className="text-transparent text-3.5xl font-en tracking-en bg-gradient-to-b inline-block bg-clip-text relative step-gradation2">
            {num}
          </p>
        </div>
        <h3 className="text-black font-jp tracking-jp font-black text-2xl mb-4">
          {title}
        </h3>
        <p className="text-black font-jp tracking-jp font-normal">{caption2}</p>
      </div>
      <img src={img} alt="" className="w-flowImg object-cover" />
    </div>
  );
};

export default Flow;
