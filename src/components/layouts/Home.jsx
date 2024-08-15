import React from "react";

import Header from "./Header";
import Fv from "./Fv";
import About from "./About";
import Works from "./Works";
import Flow from "./Flow";
import Members from "./Members";
import Footer from "./Footer";

import PcAnimation from "../../PcAnimation.json";
import SpAnimation from "../../SpAnimation.json";
import TabletAnimation from "../../TabletAnimation.json";

import { Player } from "@lottiefiles/react-lottie-player";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  // メディアクエリ
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isPC = useMediaQuery({ query: "(min-width: 1024px)" });

  // Lottie振り分け
  let lottieSrc = SpAnimation;
  let lottieScale = "";

  if (isPC) {
    lottieSrc = PcAnimation;
    lottieScale = " scale-[1.3]";
  } else if (isTablet) {
    lottieSrc = TabletAnimation;
    lottieScale = " scale-[1.7]";
  }

  // LottieComplete時の処理
  const doSomething = () => {
    var firstView = document.getElementById("first-view");
    var fadeIn = document.getElementById("mainvisual");
    firstView.classList.add("delete");
    console.log(fadeIn);
    fadeIn.classList.add("fadeIn");
  };

  return (
    <div>
      <div id="mainvisual">
        <Player
          autoplay
          loop={false}
          src={lottieSrc}
          onEvent={(event) => {
            console.log(event);
            if (event === "complete") {
              doSomething();
              console.log(lottieSrc);
            }
          }}
          id="first-view"
          className={"h-screen" + lottieScale}
        />

        <Fv />
      </div>

      <Header />

      <section id="about">
        <About />
      </section>

      <section id="works">
        <Works />
      </section>

      <section id="flow" className="bg-fv w-full bg-cover">
        <Flow />
      </section>

      <section id="members">
        <Members />
      </section>

      <footer className="bg-[#FFF1E4]">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
