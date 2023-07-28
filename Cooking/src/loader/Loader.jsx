import React from "react";

function Loader() {
  return (
    <div>
      <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <span className="loading">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
