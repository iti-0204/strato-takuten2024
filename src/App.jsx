import "./App.css";
import Button from "./components/Button";
// import Header from "./components/Header";

function App() {
  const btnL = {
    fontSize: "text-xl ",
    margin: "ml-6 ",
    height: "h-12 ",
    width: "w-48 ",
  };

  const btnM = {
    fontSize: "text-base ",
    margin: "ml-4 ",
    height: "h-8 ",
    width: "w-36 ",
  };
  return (
    <div>
      <img src="/images/background.png" alt="aa" className="w-full h-screen" />
      {/* <Header /> */}
      <Button {...btnL} />
      <h1 className="font-en tracking-en">faoiwe</h1>
    </div>
  );
}

export default App;
