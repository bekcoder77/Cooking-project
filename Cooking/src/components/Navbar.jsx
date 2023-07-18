import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function Navbar({ mode, setmode }) {

	const [tema, setTema] = useState(true)
	// const [tem, setTem] = useState(true)
  return (
    <nav>
      <div className={tema ? "navbar" : "navbar red"}>
       <div className="logo">
	   <h1 >Cooking</h1>
	   <img src="https://avatars.mds.yandex.net/i?id=3dba1101d7e6fa49f5e0b74f624e16a2d06f49ad-8438673-images-thumbs&n=13" alt="" />
	   {/* <img src="https://avatars.mds.yandex.net/i?id=612edf3b58ab269c542b8be99c98cbc5e7691e2c-9461059-images-thumbs&n=13" alt="" /> */}
	   </div>
      <Link to="/create">
      
      <button>Create</button>
      </Link>
      </div>
      <div className="nightMode">
        <div className="slider">
          <p onClick={()=>setTema(!tema)} className="circle"></p>
          <p className="circle"></p>
          <p className="circle"></p>
          <p className="circle"></p>
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
