import "./App.css";
import Button from "./components/Button";
import Flow from "./components/Flow";
// import Card from "./components/Card";
// import Title from "./components/Title";
// import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* <div className="bg-fv w-full h-screen bg-cover">
        <h1>Strato</h1>
      </div> */}
      {/* <Header /> */}
      <Button type={"UI"} />

      {/* <Title type={"center"}/> */}
      {/* <Card
        team={"4Mチーム"}
        title={"Pure-fit"}
        caption={
          "Lorem ipsum, dolor sit ametconsecteturadipisicingelit. Reprehenderitesse perferendis molestiae harum atque non modi optio fugiat delenititempore repudiandae voluptas vitae error veritatis obcaecati nihil,saepe beatae? Itaque."
        }
      /> */}
      <Flow />
    </div>
  );
}

export default App;
