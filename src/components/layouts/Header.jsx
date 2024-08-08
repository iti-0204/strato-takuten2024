import React from "react";

const Header = () => {
  return (
    <header
      id="header"
      className="flex justify-between items-center px-14 py-[34px] sticky top-0 bg-white z-10"
    >
      <h1>
        <a href="#top">
          <img src="/images/logo.png" alt="stratoロゴ" className="w-[10vw] h-full" />
        </a>
      </h1>
      <nav id="nav">
        <ul className="flex justify-between items-center gap-14 font-en tracking-en text-xl text-primary">
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="flow">Flow</a>
          </li>
          <li>
            <a href="member">Members</a>
          </li>
          <li>
            <a
              href="https://geikou-takuten.com/"
              className="text-jp tracking-jp font-bold"
            >
              卓展サイトへ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
