import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header
      id="header"
      className="pc:flex hidden justify-between items-center px-14 py-[34px] sticky top-0 bg-white z-10"
    >
      <h1>
        <a href="#top">
          <img
            src="/images/logo.png"
            alt="stratoロゴ"
            className="w-[10vw] h-full"
          />
        </a>
      </h1>
      <nav id="nav">
        <ul className="flex justify-between items-center gap-14 font-bold font-en tracking-en text-xl text-primary">
          <li>
            <HashLink to="/#works">Works</HashLink>
          </li>
          <li>
            <HashLink to="/#flow">Flow</HashLink>
          </li>
          <li>
            <HashLink to="/#members">Members</HashLink>
          </li>
          <li>
            <HashLink
              to="https://geikou-takuten.com/"
              className="text-jp tracking-jp font-bold flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              卓展サイトへ
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
