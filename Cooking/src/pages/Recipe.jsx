import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
function Recipe() {
  const { id } = useParams();
  const [api, setApi] = useState(`http://localhost:3000/recipes/${id}`);
  const { data, isPending, error } = UseFetch(api);
  console.log(data.ingredients);
  // console.log(data);
  return (
    <div className="recipe">
      <div className="recipe_box">
        <h1>{data.title}</h1>

        <h3 style={{ marginTop: "20px", fontSize: "20px" }}>
          Cooking time :<b style={{ color: "grey" }}> {data.cookingTime}</b>
        </h3>

        <h3 style={{  marginTop: "20px", fontSize: "20px" }}>
        Ingredients :
          <b style={{ color: "grey" }}> {data.ingredients + ","} :</b>
         
        </h3>
        <h3
          style={{ marginTop: "20px", fontSize: "20px", marginBottom: "30px" }}
        >
          Methods :
          <b style={{ color: "grey", fontSize: "16px" }}> {data.method}</b>
        </h3>
        <Link className="link" to="/">
          <button className="btn-donate">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
