import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import { projectFirestore } from "../firebase/config";
import Loader from "../loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [isPending, setIsPending] = useState(false);  

  const navigate = useNavigate();
  const reset = () => {
    setTitle("");
    setMethod("");
    setCookingTime("");
    setIngredient("");
  };
  // Submit
  const handleSubmit = async (e) => {
    toast.success("Recipe added succesfully !")
    setIsPending(true);
    e.preventDefault();
    const obj = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    };

    await projectFirestore.collection("recipes").add(obj);
    // reset();
    setIsPending(false);
    navigate("/");
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
      {isPending ? (
      <Loader/>
      ) : (
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
      )}
    </div>
  );
}

export default Create;
