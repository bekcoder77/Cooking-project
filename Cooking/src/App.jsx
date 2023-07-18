import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Recipe from "./pages/Recipe";
import Home from "./pages/Home";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function App() {
  const [mode, setMode ] = useState(true);

  return (
    <div className={mode ? "App" : "App night"}>
      <Navbar mode={mode} setmode={setMode} />
      <Home />
      <Recipe />
    </div>
  );
}

export default App;
