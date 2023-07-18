import React, { useState } from "react";
import UseFetch from "../hooks/UseFetch";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
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
                    <div className="del">
                      <AiTwotoneDelete />
                    </div>
                  </div>
                  <p style={{ marginTop: "20px" }}>
                    <b style={{ color: "black", fontSize: "18px" }}>
                      Ingredients:
                    </b>

                    {item.ingredients.map((item, idx) => {
                      return item + " , ";
                    })}
                  </p>
                  <p>
                    <b style={{ color: "black" }}>Methods :</b>
                    {item.method.slice(0, 125)}
                  </p>
                  <h3>
                    <b style={{ color: "black" }}>Cooking time:</b>{" "}
                    {item.cookingTime}
                  </h3>
               <Link to={`/recipe/${item.id}`}>
               <div className="home_btn">
                 <button >Read More</button>
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
