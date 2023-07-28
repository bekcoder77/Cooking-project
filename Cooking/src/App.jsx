import { useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipe from "./pages/Recipe";
import Home from "./pages/Home";
import Create from "./pages/Create";
import PageNotFound from "./pages/PageNotFound";
import DarkNightMode from "./components/DarkNightMode";
import { Context } from "./components/context/ThemeContext";

function App() {
  const { mode, changeMode } = useContext(Context);

  return (
    <div className={`${mode ? "App" : "App night"}`}>
      <BrowserRouter>
        <Navbar />
        <DarkNightMode />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
