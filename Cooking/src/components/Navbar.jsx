import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
function Navbar({navColor}) {
  return (
    <nav>
      <div style={{backgroundColor:navColor}} className="navbar">
        <Link to="/">
          <div className="logo">
            <h1>Cooking</h1>
            <img
              src="https://avatars.mds.yandex.net/i?id=3dba1101d7e6fa49f5e0b74f624e16a2d06f49ad-8438673-images-thumbs&n=13"
              alt=""
            />
          </div>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
