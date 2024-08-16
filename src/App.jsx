import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/layouts/Home";
import Exhibit from "./components/layouts/Exhibit";

const chotohaya = {
  img: {
    panel: "/images/panel/chotohayaPanel.png",
    team: "/images/members/tyotohaya.png",
    member1: "/images/members/misen.png",
    member2: "/images/members/you.png",
    member3: "/images/members/chihiro.png",
  },
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

const nemu = {
  img: {
    panel: "/images/panel/nemuPanel.png",
    team: "/images/members/nemu.png",
    member1: "/images/members/hamu.png",
    member2: "/images/members/moneko.png",
  },
  workNum: 1,
  names: {
    team: "音む",
    member1: "3M はむ",
    member2: "2M もねこ",
  },
  title: "さぼーど",
  url: {
    figma:
      "https://www.figma.com/proto/dZYF2ivvJhJfozzAMyo2am/ui-nemu?page-id=0%3A1&node-id=47-5281&viewport=-2813%2C-529%2C0.15&t=QkKoGAUwbv4ilRLo-1&scaling=min-zoom&content-scaling=fixed",
    web: "",
  },
};

const risingsun = {
  img: {
    panel: "/images/panel/risingsunPanel.png",
    team: "/images/members/risingsun.png",
    member1: "/images/members/sana.png",
    member2: "/images/members/log.png",
    member3: "/images/members/mafu.png",
  },
  workNum: 2,
  names: {
    team: "ライジングサン〜恋の予感〜",
    member1: "2N さな",
    member2: "2M log",
    member3: "2M まふ",
  },
  title: "Solop",
  url: {
    figma:
      "https://www.figma.com/proto/a4HSIUFTzLApel6H24PEWU/uirisingsun?page-id=0%3A1&node-id=47-125&viewport=-578%2C-2855%2C0.34&t=OSdGNR5WgxT0Rorq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=47%3A125&show-proto-sidebar=1",
    web: "https://iti-0204.github.io/solop/",
  },
};

const korikorijonjon = {
  img: {
    panel: "/images/panel/korikorijonjonPanel.png",
    team: "/images/members/korikorijonjon.png",
    member1: "/images/members/eitarou.png",
    member2: "/images/members/sasaking.png",
  },
  workNum: 2,
  names: {
    team: "コリコリジョンジョン",
    member1: "1M 栄太郎",
    member2: "1M ささKING",
  },
  title: "Clocide",
  url: {
    figma:
      "https://www.figma.com/proto/1IByLziOx5zNWvSkptAT2y/ui-korikorijonjon?page-id=0%3A1&node-id=80-816&viewport=1253%2C4958%2C0.43&t=5tqnhdFvLNIlqHCq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=80%3A816&show-proto-sidebar=1",
    web: "https://iti-0204.github.io/clocide/",
  },
};

function App() {
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
        <Route
          path="/nemu"
          element={
            <Exhibit
              img={nemu.img}
              memberNum={nemu.memberNum}
              workNum={nemu.workNum}
              names={nemu.names}
              title={nemu.title}
              url={nemu.url}
            />
          }
        />
        <Route
          path="/rising-sun"
          element={
            <Exhibit
              img={risingsun.img}
              memberNum={risingsun.memberNum}
              workNum={risingsun.workNum}
              names={risingsun.names}
              title={risingsun.title}
              url={risingsun.url}
            />
          }
        />
        <Route
          path="/korikori-jonjon"
          element={
            <Exhibit
              img={korikorijonjon.img}
              memberNum={korikorijonjon.memberNum}
              workNum={korikorijonjon.workNum}
              names={korikorijonjon.names}
              title={korikorijonjon.title}
              url={korikorijonjon.url}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
