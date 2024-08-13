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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chotohaya" element={<Exhibit />} />
        <Route path="/nemu" element={<Exhibit />} />
        <Route path="/rising-sun" element={<Exhibit />} />
        <Route path="/korikori-jonjon" element={<Exhibit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
