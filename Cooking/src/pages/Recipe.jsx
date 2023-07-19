import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
function Recipe() {
  const { id } = useParams();
  const [api, setApi] = useState(`http://localhost:3000/recipes/${id}`);
  const { data, isPending, error } = UseFetch(api);
  console.log(data.ingredients);
  return (
    <div className="recipe">
      <div className="recipe_box">
        <h1>{data.title}</h1>
        <h3 style={{  marginTop: "20px", fontSize: "20px" }}>
        Ingredients :
          <span> {data.ingredients + ","} :</span>
         
        </h3>
        
        <h3 style={{ marginTop: "20px", fontSize: "20px" }}>
          Cooking time :<span> {data.cookingTime}</span>
        </h3>
        <h3
          style={{ marginTop: "20px", fontSize: "20px", marginBottom: "30px" }}
        >
          Methods :
          <span> {data.method}</span>
        </h3>
        
        <Link className="link" to="/">
          <button className="btn-donate">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
