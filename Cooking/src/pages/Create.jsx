import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";

function Create() {

  const { data, isPending, error, addNewData } = UseFetch(
    " http://localhost:3000/recipes",
    "POST"
  );

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();
  const reset = () => {
    setTitle("");
    setMethod("");
    setCookingTime("");
    setIngredient("");
  };


  useEffect(()=>{

if(data){
  navigate("/")
}
  },[data,navigate])


  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.round(Math.random() * 1000 + 10),
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    };
    addNewData(obj);
    console.log(obj);
    reset();
    // navigate("/");
  };
  const handleClick = (e) => {
    e.preventDefault();

    if (ingredients.includes(ingredient)) {
      alert("you always enter this ingredient");
    } else {
      setIngredients((ingredients) => {
        return [...ingredients, ingredient];
      });
    }
    setIngredient("");
  };
  return (
    <div className="create">
      <div className="create_box">
        <h1>Create</h1>
        <form onSubmit={handleSubmit}>
          <p>Title:</p>
          <input
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
          />
          <p>Ingredient :</p>
          <label className="input_btn" htmlFor="#">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => {
                setIngredient(e.target.value);
              }}
            />
            <button onClick={handleClick}>ADD</button>
          </label>
          <h3>
            Ingredients list:{" "}
            {ingredients.map((item) => {
              return item + ", ";
            })}{" "}
          </h3>
          <p>Methods :</p>
          <input
            required
            type="text"
            value={method}
            onChange={(e) => {
              setMethod(e.target.value);
            }}
          />
          <p>CookingTime:</p>
          <input
            required
            type="text"
            value={cookingTime}
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
