import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Context } from "./context/ThemeContext";
function DarkNightMode({ setNavColor }) {

  const { color, changeNavColor } = useContext(Context);
  const { mode, changeMode } = useContext(Context);

  return (
    <div>
      <div className="mode">
        <div className="changeThems">
          <div
            onClick={() => {
              changeNavColor("red");
            }}
          ></div>
          <div
            onClick={() => {
              changeNavColor("blue");
            }}
          ></div>

          <div
            onClick={() => {
              changeNavColor("purple");
            }}
          ></div>
          <div
            onClick={() => {
              changeNavColor("orange");
            }}
          ></div>
          <div
            onClick={() => {
              changeNavColor("lime");
            }}
          ></div>
        </div>

        <div>
          <input
            onClick={() => changeMode(mode ? false : true)}
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
    </div>
  );
}

export default DarkNightMode;
