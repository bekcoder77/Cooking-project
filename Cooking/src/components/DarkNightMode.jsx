import React from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function DarkNightMode({ mode, setmode, setNavColor }) {
  const colors = [ "#c24090e7","red", "blue", "orange", "green"];
  return (
    <div>
      <div className="mode">
        <div className="slider">
          {colors.map((item,idx) => {
            return (
              <div key={idx}
                onClick={() => {
                  setNavColor(item);
                }}
                style={{ backgroundColor: item }}
                className="circle"
              ></div>
            );
          })}
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
    </div>
  );
}

export default DarkNightMode;
