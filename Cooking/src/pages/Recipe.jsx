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
      {error &&(
            <h1 className="text" style={{width:"90%",zIndex:'99', position:'absolute',textAlign:'center'}}>
             <img style={{width:"60%",zIndex:'99',height:"550px"}}  src="https://avatars.mds.yandex.net/i?id=273a76ea9fabf2c19d1432a8042bb64d8a29b9d0-4552862-images-thumbs&n=13" alt="" /> 
            
            </h1>
      ) }
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
