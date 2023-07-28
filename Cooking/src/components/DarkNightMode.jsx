import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Context } from "./context/ThemeContext";
function DarkNightMode() {
  const colors = [ "#c24090b3", "blue", "purple", "orange", "green"];

  const { color, changeNavColor } = useContext(Context);
  const { mode, changeMode } = useContext(Context);

  return (
    <div>
      <div className="mode">
      <div className="slider">
          {colors.map((item,idx) => {
            return (
              <div key={idx}
                onClick={() => {
                  changeNavColor(item);
                  localStorage.setItem("color", item)
                }}
                style={{ backgroundColor: item }}
                className="circle"
              ></div>
            );
          })}
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
