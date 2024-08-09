import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto flex justify-between h-[35vh] items-center max-w-[1000px]">
      <div></div>
      <div>
        <div className="flex">
          <img src="/images/logo.png" alt="" />
          <p>
            UI/UX <br />
            Service Design
          </p>
        </div>
        <p>© Strato All Rights Reserved.</p>
      </div>
      <p>TOP</p>
    </div>
  );
};

export default Footer;
