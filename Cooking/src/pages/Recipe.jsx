import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import { projectFirestore } from "../firebase/config";
import Loader from "../loader/Loader";
function Recipe() {
  const { id } = useParams();
  const { data, error, setData } = UseFetch();
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((item) => {
        setData(item.data());
        setIsPending(false);
      });
  }, []);

  return (
    <div className="recipe">
      {isPending && <Loader />}

      {/* {error && (
        <h1
          className="text"
          style={{
            width: "90%",
            zIndex: "99",
            position: "absolute",
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "100%", height: "100vh",marginTop:"300px" }}
            src="https://avatars.mds.yandex.net/i?id=273a76ea9fabf2c19d1432a8042bb64d8a29b9d0-4552862-images-thumbs&n=13"
            alt=""
          />
        </h1>
      )} */}

      {data && (
        <div className="recipe_box">
          <h1>{data.title}</h1>
          <h3 style={{ marginTop: "20px", fontSize: "20px" }}>
            Ingredients :<span> {data.ingredients + ","} :</span>
          </h3>
          <h3 style={{ marginTop: "20px", fontSize: "20px" }}>
            Cooking time :<span> {data.cookingTime}</span>
          </h3>
          <h3
            style={{
              marginTop: "20px",
              fontSize: "20px",
              marginBottom: "30px",
            }}
          >
            Methods :<span> {data.method}</span>
          </h3>

          <Link className="link" to="/">
            <button className="btn-donate">Back</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Recipe;
