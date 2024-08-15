import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  // ハンバーガーを閉じる関数
  const onClicknavi = () => {
    let element = document.getElementById("menu-btn-check");
    element.checked = false;
  };

  return (
    <>
      {/* pc版 */}
      <header
        id="header"
        className="pc:flex hidden justify-between items-center px-14 py-[34px] sticky top-0 bg-white z-10"
      >
        <h1>
          <HashLink to="/#top">
            <img
              src="/images/logo.png"
              alt="stratoロゴ"
              className="w-[10vw] h-full"
            />
          </HashLink>
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
      {/* tablet,sp版 */}
      <header className="pc:hidden">
        <div class="hamburger-menu">
          <input type="checkbox" id="menu-btn-check" />
          <label for="menu-btn-check" class="menu-btn">
            <span></span>
          </label>
          <div class="menu-content">
            <ul className="font-en tracking-en font-bold">
              <li>
                <HashLink to="/#works" onClick={onClicknavi}>
                  Works
                </HashLink>
              </li>
              <li>
                <HashLink to="/#flow" onClick={onClicknavi}>
                  Flow
                </HashLink>
              </li>
              <li>
                <HashLink to="/#members" onClick={onClicknavi}>
                  Members
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="https://geikou-takuten.com/"
                  className="text-jp tracking-jp font-bold flex items-center gap-2"
                  onClick={onClicknavi}
                >
                  {/* <FaExternalLinkAlt /> */}
                  卓展サイトへ
                </HashLink>
              </li>
            </ul>
          </div>
          {/* <!--ここまでメニュー--> */}
        </div>
      </header>
    </>
  );
};

export default Header;
