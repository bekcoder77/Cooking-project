import React, { useState } from "react";
import UseFetch from "../hooks/UseFetch";
import { FiTrash2, FiArrowRight } from "react-icons/fi";
import { FcAlarmClock } from "react-icons/fc";
import { Link } from "react-router-dom";
import Loader from "../components/loader/Loader";
function Home() {
  const [api, setApi] = useState(" http://localhost:3000/recipes");
  const { data, isPending, error } = UseFetch(api);
  return (
    <div className="home">
      <div className="home_boxs">
        {data &&
          data.map((item) => {
            return (
              <div key={item.id} className="home_box">
                <div className="card">
                  <div className="title">
                    <h1>{item.title}</h1>
                    <div  className="del">
                      <FiTrash2 />
                    </div>
                  </div>
                  <p style={{ marginTop: "20px" }}>
                    <b>
                      Ingredients :
                    </b>
                    {item.ingredients.map((item, idx) => {
                      return item +  " , ";
                    })}
                  </p>
                  <p>
                    <b>Methods :</b>
                    {item.method.slice(0, 125)}
                  </p>
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <b>Cooking time :</b>{" "}
                    {item.cookingTime}{" "}
                    <p>
                      <FcAlarmClock />
                    </p>
                  </h3>
                  <Link to={`/recipe/${item.id}`}>
                    <div className="home_btn">
                      <button style={{ display: "flex", gap: "5px" }}>
                        <p>Read More </p>
                        <p style={{ fontSize: "18px" }}>
                          <FiArrowRight />
                        </p>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
