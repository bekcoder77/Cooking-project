import React, { useEffect, useState } from "react";
import UseFetch from "../hooks/UseFetch";
import { FiTrash2, FiArrowRight } from "react-icons/fi";
import { FcAlarmClock } from "react-icons/fc";
import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import Loader from "../loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const { data, setData } = UseFetch();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsPending(true);
    projectFirestore.collection("recipes").onSnapshot((data) => {
      if (!data.empty) {
        var result = [];
        data.docs.forEach((item) => {
          result.push({ ...item.data(), id: item.id });
        });
        setData(result);
        setIsPending(false);
      } else {
        setError("Hech qanday  ma`lumot yo`q");
        setIsPending(false);
        setData([]);
      }
    });
  }, []);

  const deleteEl = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
    toast.success("Recipe deleted succesfully !");
  };
  return (
    <div className="home">
      <ToastContainer position="top-left" autoClose={2000} />
      {isPending && <Loader />}
      <div className="home_boxs">
        {data &&
          data.map((item, idx) => {
            return (
              <div key={idx} className="home_box">
                <div className="card">
                  <div className="title">
                    <h1>{item.title}</h1>

                 {/* Delete */}
                    <div
                      onClick={() => {
                        deleteEl(item.id);
                      }}
                      className="del"
                    >
                      <FiTrash2 />
                    </div>
                  </div>
                  <p style={{ marginTop: "20px" }}>
                    <b>Ingredients :</b>
                    {item.ingredients[0]} {item.ingredients[2]}{" "}
                    {item.ingredients[3]} ......
                  </p>
                  <p>
                    <b>Methods :</b>
                    {item.method.slice(0, 80)}
                  </p>
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <b>Cooking time :</b> {item.cookingTime}{" "}
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
        {error && (
          <h1
            style={{
              marginBottom: "300px",
              marginTop: "170px",
              fontSize: "52px",
            }}
          >
            {error}
          </h1>
        )}
      </div>
    </div>
  );
}

export default Home;
