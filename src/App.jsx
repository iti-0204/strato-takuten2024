import "./App.css";
import Button from "./components/Button";
import Flow from "./components/Flow";
// import Card from "./components/Card";
// import Title from "./components/Title";
// import Header from "./components/Header";

import { BiChevronDown } from "react-icons/bi";

function App() {
  return (
    <div>
      <div id="mainvisual">
        <div className="bg-fv w-full h-screen bg-cover text-center pt-[20%]">
          <img
            src="/images/logo.png"
            alt="Stratoロゴ"
            className="mx-auto mb-6"
          />
          <p className="font-en tracking-en text-base text-primary mb-9">
            UI/UX <br />
            Service Design
          </p>
          <Button type={"btnL"} />
          <p className="font-en tracking-en text-xl text-primary mt-20 mb-2">
            scroll
          </p>
          <BiChevronDown color={"#FC840D"} size={24} className="mx-auto" />
        </div>
      </div>
      {/* <Header /> */}

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
