import "./App.css";
import Header from "./components/layouts/Header";
import Fv from "./components/layouts/Fv";
import About from "./components/layouts/About";
import Works from "./components/layouts/Works";
import Flow from "./components/layouts/Flow";

import PcAnimation from "./PcAnimation.json";
import SpAnimation from "./SpAnimation.json";
import TabletAnimation from "./TabletAnimation.json";

import { Player } from "@lottiefiles/react-lottie-player";
import { useMediaQuery } from "react-responsive";

function App() {
  // メディアクエリ
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isPC = useMediaQuery({ query: "(min-width: 1024px)" });

  // Lottie振り分け
  let lottieSrc = SpAnimation;
  if (isPC) {
    lottieSrc = PcAnimation;
  } else if (isTablet) {
    lottieSrc = TabletAnimation;
  }

  // LottieComplete時の処理
  const doSomething = () => {
    var firstView = document.getElementById("first-view");
    firstView.classList.add("delete");
  };

  return (
    <div>
      <div id="mainvisual relative">
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
          className="h-screen scale-[1.3]"
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
    </div>
  );
}

export default App;
