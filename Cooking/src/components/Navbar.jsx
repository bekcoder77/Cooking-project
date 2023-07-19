import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
function Navbar({ mode, setmode }) {
  const thema = useRef()
  const handleClick = ()=>{
    thema.current.classList.toggle("act");
  }
  const handleClicke = ()=>{
    thema.current.classList.toggle("active");
  }
  const handleClicked = ()=>{
    thema.current.classList.toggle("activ");
  }
  const Click = ()=>{
    thema.current.classList.toggle("lima");
  }
  const Clicke = ()=>{
    thema.current.classList.toggle("blue");
  }
  return (
    <nav>
      <div className="navbar"  ref={thema} >
      <Link to="/">
      <div className="logo">
	   <h1 >Cooking</h1>
	   <img src="https://avatars.mds.yandex.net/i?id=3dba1101d7e6fa49f5e0b74f624e16a2d06f49ad-8438673-images-thumbs&n=13" alt="" />
	   </div>
      </Link>
      <Link to="/create">
      
      <button>Create</button>
      </Link>
      </div>
      <div className="nightMode">
   
      <div className="slider">
          <p onClick={handleClick} className="circle"></p>
          <p onClick={handleClicke} className="circle"></p>
          <p onClick={handleClicked} className="circle"></p>
          <p onClick={Click} className="circle"></p>
          <p onClick={Clicke} className="circle"></p>
       </div>

		<div>
          <input
            onClick={() => setmode(!mode)}
            type="checkbox"
            className="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox" className="label">
            <div className="fa-sun">
              {" "}
              <BsFillSunFill />
            </div>
            <div className="fa-moon">
              {" "}
              <BsFillMoonStarsFill />
            </div>
            <div className="ball"></div>
          </label>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
