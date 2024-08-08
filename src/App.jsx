import "./App.css";
// import Button from "./components/ui/Button";
import Flow from "./components/ui/Flow";
// import Card from "./components/Card";
// import Title from "./components/Title";
// import Header from "./components/Header";
import Fv from "./components/layouts/Fv";
import About from "./components/layouts/About";

import PcAnimation from "./PcAnimation.json";
import SpAnimation from "./SpAnimation.json";
import TabletAnimation from "./TabletAnimation.json";

import { Player } from "@lottiefiles/react-lottie-player";
// import Lottie from "lottie-react";
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
        {/* <Lottie options={options} height={400} width={400} />; */}
        <Fv />
      </div>

      {/* <Header /> */}

      <section id="about">
        <About />
      </section>

      {/* <Title type={"center"}/> */}
      {/* <Card
        team={"4Mチーム"}
        title={"Pure-fit"}
        caption={
          "Lorem ipsum, dolor sit ametconsecteturadipisicingelit. Reprehenderitesse perferendis molestiae harum atque non modi optio fugiat delenititempore repudiandae voluptas vitae error veritatis obcaecati nihil,saepe beatae? Itaque."
        }
      /> */}
      <Flow
        num={"01"}
        title={"ブレインストーミング"}
        caption={
          "数名のチームで１つのテーマに対し、お互いに意見を出し合い<br/>たくさんのアイデアを生産し、問題解決に結びつける方法"
        }
        img={"/images/background.png"}
      />
    </div>
  );
}

export default App;
