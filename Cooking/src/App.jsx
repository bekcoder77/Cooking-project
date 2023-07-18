import { useState } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Recipe from "./pages/Recipe";
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
  const [mode, setMode ] = useState(true);

  const LoaderMain = () => {
    setTimeout(() => {
      <Loader />;
    }, 2000);
  };

  return (
    <div className={mode ? "App" : "App night"}>
     <BrowserRouter>
     {LoaderMain()}
     <Navbar mode={mode} setmode={setMode} />
     <Routes>
      <Route path="/" element= { <Home /> }/>
      <Route path="/create" element= { <Create /> }/>
      <Route path="/recipe/:id" element= { <Recipe /> }/>
     </Routes>
      {/* <Recipe /> */}
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
