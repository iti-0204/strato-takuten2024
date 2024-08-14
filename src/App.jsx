import "./App.css";
// import Header from "./components/layouts/Header";
// import Fv from "./components/layouts/Fv";
// import About from "./components/layouts/About";
// import Works from "./components/layouts/Works";
// import Flow from "./components/layouts/Flow";
// import Members from "./components/layouts/Members";

// import PcAnimation from "./PcAnimation.json";
// import SpAnimation from "./SpAnimation.json";
// import TabletAnimation from "./TabletAnimation.json";

// import { Player } from "@lottiefiles/react-lottie-player";
// import { useMediaQuery } from "react-responsive";
// import Footer from "./components/layouts/Footer";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/layouts/Home";
import Exhibit from "./components/layouts/Exhibit";

function App() {
  const chotohaya = {
    img: {
      panel: "/images/panel/chotohayaPanel.png",
      team: "/images/members/tyotohaya.png",
      member1: "/images/members/misen.png",
      member2: "/images/members/you.png",
      member3: "/images/members/chihiro.png",
    },
    memberNum: 3,
    workNum: 1,
    names: {
      team: "ちょっと早朝やなのに。",
      member1: "3M みせん",
      member2: "3M よう",
      member3: "3M ちひろ",
    },
    title: "seemee",
    url: {
      figma:
        "https://www.figma.com/proto/pTnH4ZUwIhjGXW2kuNe7QH/ui-tyotohaya?page-id=107%3A175&node-id=519-6721&viewport=54%2C-662%2C0.22&t=F9zn6L0IodktpKuV-1&scaling=scale-down&content-scaling=fixed",
      web: "",
    },
  };
  console.log(chotohaya.title);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/chotohaya"
          element={
            <Exhibit
              img={chotohaya.img}
              memberNum={chotohaya.memberNum}
              workNum={chotohaya.workNum}
              names={chotohaya.names}
              title={chotohaya.title}
              url={chotohaya.url}
            />
          }
        />
        <Route path="/nemu" element={<Exhibit />} />
        <Route path="/rising-sun" element={<Exhibit />} />
        <Route path="/korikori-jonjon" element={<Exhibit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
